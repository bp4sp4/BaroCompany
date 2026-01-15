"use client";

import { useState, useEffect } from "react";
import styles from "./ConsultationModal.module.css";
import { getStoredClickSource } from "../utils/clickSource";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
  });
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [contactError, setContactError] = useState("");

  const formatPhoneNumber = (value: string) => {
    // 숫자만 추출
    const numbers = value.replace(/[^\d]/g, "");

    // 전화번호 포맷팅 (010-XXXX-XXXX)
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
        7,
        11
      )}`;
    }
  };

  const validatePhoneNumber = (phone: string): boolean => {
    // 하이픈 제거하고 숫자만 추출
    const numbers = phone.replace(/[^\d]/g, "");
    // 010으로 시작하고 총 11자리인지 확인
    return numbers.startsWith("010") && numbers.length === 11;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setContactError("");

    // 전화번호 유효성 검사
    if (!validatePhoneNumber(formData.contact)) {
      setContactError("전화번호가 잘못 입력되었습니다");
      setIsSubmitting(false);
      return;
    }

    try {
      // click_source 가져오기
      const clickSource = getStoredClickSource();
      
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          click_source: clickSource || undefined,
        }),
      });

      if (response.ok) {
        setSubmitMessage("입력되었습니다");
        // 제출 후 모달 닫기
        setTimeout(() => {
          onClose();
          setFormData({ name: "", contact: "" });
          setIsAgreed(false);
          setSubmitMessage("");
        }, 1500);
      } else {
        const error = await response.json();
        setSubmitMessage(error.error || "상담 신청 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("상담 신청 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // 연락처 필드인 경우 자동 포맷팅
    if (name === "contact") {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formatted,
      }));
      // 입력 중에는 에러 메시지 제거
      if (contactError) {
        setContactError("");
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(e.target.checked);
  };

  // 개인정보처리방침 팝업이 열려있을 때 배경 스크롤 막기
  useEffect(() => {
    if (showPrivacyModal) {
      // 현재 스크롤 위치 저장
      const scrollY = window.scrollY;

      // body와 html에 스크롤 막기
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      document.documentElement.style.overflow = "hidden";
    } else {
      // 스크롤 복원
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";

      // 스크롤 위치 복원
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    // cleanup 함수: 컴포넌트 언마운트 시 원래대로 복원
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";
    };
  }, [showPrivacyModal]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.modalHeader}>
          <h2 className={styles.title}>상담 신청</h2>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              이름(회사명)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              placeholder="이름 혹은 회사명"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="contact" className={styles.label}>
              연락처(회사연락처)
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className={styles.input}
              placeholder="010-1234-5678"
              maxLength={13}
              required
            />
            {contactError && (
              <div className={styles.errorMessage}>{contactError}</div>
            )}
          </div>
          <div className={styles.checkboxGroup}>
            <label htmlFor="privacy" className={styles.checkboxLabel}>
              <span
                className={styles.privacyLink}
                onClick={(e) => {
                  e.preventDefault();
                  setShowPrivacyModal(true);
                }}
              >
                개인정보처리방침
              </span>
              <span className={styles.consentText}> 동의</span>
            </label>
            <input
              type="checkbox"
              id="privacy"
              checked={isAgreed}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
              required
            />
          </div>

          {submitMessage && (
            <div className={styles.message}>{submitMessage}</div>
          )}
          <button
            type="submit"
            className={styles.submitButton}
            disabled={
              isSubmitting ||
              !isAgreed ||
              !formData.name.trim() ||
              !formData.contact.trim() ||
              !validatePhoneNumber(formData.contact)
            }
          >
            {isSubmitting ? "제출 중..." : "상담신청"}
          </button>
        </form>
      </div>

      {/* 개인정보처리방침 팝업 */}
      {showPrivacyModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowPrivacyModal(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalCloseButton}
              onClick={() => setShowPrivacyModal(false)}
            >
              ×
            </button>
            <h3 className={styles.modalTitle}>개인정보처리방침</h3>
            <div className={styles.modalBody}>
              <h4 className={styles.sectionTitle}>
                1. 개인정보 수집 및 이용 목적
              </h4>
              <ol className={styles.numberedList}>
                <li>상담 진행, 정책자금 컨설팅, 문의사항 응대, 민원해결</li>
                <li>
                  광고성 정보 수신에 대하여 별도의 동의를 한 회원에 한하여
                  "한평생 바로기업"과 각 제휴사의 새로운 서비스, 이벤트, 최신
                  정보의 안내 등 회원의 취향에 맞는 최적의 정보 제공
                </li>
              </ol>

              <h4 className={styles.sectionTitle}>
                2. 수집 및 이용하는 개인정보 항목
              </h4>
              <p>
                <strong>(필수)</strong> 이름(회사명), 휴대전화번호
              </p>
              <p>
                <strong>(선택)</strong> 제출된 상담 문의 내용 또는 첨부파일에
                기재된 개인정보
              </p>

              <h4 className={styles.sectionTitle}>3. 보유 및 이용 기간</h4>
              <p>
                법령이 정하는 경우를 제외하고는 수집일로부터 1년 또는 동의 철회
                시까지 보유 및 이용합니다.
              </p>

              <h4 className={styles.sectionTitle}>4. 동의 거부 권리</h4>
              <p>
                신청자는 동의를 거부할 권리가 있습니다. 단, 동의를 거부하는 경우
                상담 서비스 이용이 제한됩니다.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
