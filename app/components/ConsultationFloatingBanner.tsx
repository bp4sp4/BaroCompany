"use client";

import { useState } from "react";
import styles from "./ConsultationFloatingBanner.module.css";
import { getStoredClickSource } from "../utils/clickSource";

export default function ConsultationFloatingBanner() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
  });
  const [isAgreed, setIsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactError, setContactError] = useState("");
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/[^\d]/g, "");
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
    const numbers = phone.replace(/[^\d]/g, "");
    return numbers.startsWith("010") && numbers.length === 11;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setContactError("");

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
        setShowSuccessModal(true);
        setFormData({ name: "", contact: "" });
        setIsAgreed(false);
        setContactError("");
      } else {
        const error = await response.json();
        alert(error.error || "상담 신청 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("상담 신청 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "contact") {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formatted,
      }));
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

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.banner_inner}>
          <div className={styles.banner_left}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              className={styles.banner_icon}
            >
              <mask
                id="bolt-mask"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="8"
                y="1"
                width="26"
                height="40"
              >
                <path
                  d="M8.75 1.74994H33.25V40.2499H8.75V1.74994Z"
                  fill="white"
                />
                <path
                  d="M20.1242 24.1499H17.7267C15.2609 24.1499 14.0289 24.1499 13.5127 23.3414C12.9964 22.5347 13.5144 21.4164 14.5504 19.1799L19.3297 8.85494C19.9859 7.44094 20.3132 6.73394 20.6562 6.80744C20.9992 6.88444 20.9992 7.66494 20.9992 9.22245V16.9749C20.9992 17.3879 20.9992 17.5944 21.1269 17.7222C21.2547 17.8499 21.4612 17.8499 21.8742 17.8499H24.2717C26.7374 17.8499 27.9694 17.8499 28.4857 18.6584C29.0019 19.4652 28.4839 20.5834 27.4479 22.8199L22.6687 33.1449C22.0124 34.5589 21.6852 35.2659 21.3422 35.1924C20.9992 35.1137 20.9992 34.3349 20.9992 32.7774V25.0249C20.9992 24.6119 20.9992 24.4054 20.8714 24.2777C20.7437 24.1499 20.5372 24.1499 20.1242 24.1499Z"
                  fill="black"
                />
              </mask>
              <g mask="url(#bolt-mask)">
                <path
                  d="M20.1242 24.1499H17.7267C15.2609 24.1499 14.0289 24.1499 13.5127 23.3414C12.9964 22.5347 13.5144 21.4164 14.5504 19.1799L19.3297 8.85494C19.9859 7.44094 20.3132 6.73394 20.6562 6.80744C20.9992 6.88444 20.9992 7.66494 20.9992 9.22244V16.9749C20.9992 17.3879 20.9992 17.5944 21.1269 17.7222C21.2547 17.8499 21.4612 17.8499 21.8742 17.8499H24.2717C26.7374 17.8499 27.9694 17.8499 28.4857 18.6584C29.0019 19.4652 28.4839 20.5834 27.4479 22.8199L22.6687 33.1449C22.0124 34.5589 21.6852 35.2659 21.3422 35.1924C20.9992 35.1137 20.9992 34.3349 20.9992 32.7774V25.0249C20.9992 24.6119 20.9992 24.4054 20.8714 24.2777C20.7437 24.1499 20.5372 24.1499 20.1242 24.1499Z"
                  stroke="white"
                  strokeWidth="8.66667"
                />
              </g>
            </svg>
            <span className={styles.banner_title}>컨설팅 무료상담</span>
          </div>
          <form className={styles.banner_form} onSubmit={handleSubmit}>
            <div className={styles.banner_input_group}>
              <label htmlFor="banner-name" className={styles.banner_label}>
                이름
              </label>
              <input
                id="banner-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="이름 혹은 회사명"
                className={styles.banner_input}
              />
            </div>
            <div className={styles.banner_input_group}>
              <label htmlFor="banner-contact" className={styles.banner_label}>
                연락처
              </label>
              <input
                id="banner-contact"
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="-제외 입력"
                className={styles.banner_input}
              />
            </div>
            <div className={styles.banner_checkbox_group}>
              <label
                htmlFor="banner-privacy"
                className={styles.banner_checkbox_label}
              >
                <span
                  className={styles.banner_privacy_link}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPrivacyModal(true);
                  }}
                >
                  개인정보처리방침
                </span>
                동의
              </label>
              <input
                id="banner-privacy"
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className={styles.banner_checkbox}
              />
            </div>
            <button
              type="submit"
              className={styles.banner_button}
              disabled={
                !formData.name.trim() ||
                !formData.contact.trim() ||
                !isAgreed ||
                !validatePhoneNumber(formData.contact) ||
                isSubmitting
              }
            >
              상담 신청
            </button>
          </form>
        </div>
      </div>

      {/* 성공 팝업 */}
      {showSuccessModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            className={styles.successModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalCloseButton}
              onClick={() => setShowSuccessModal(false)}
            >
              ×
            </button>
            <img
              src="/images/check.gif"
              alt="완료"
              className={styles.checkIcon}
            />
            <h3 className={styles.successTitle}>신청이완료되었습니다</h3>
            <p className={styles.successMessage}>
              담당자가 빠른시일내에 연락 드리겠습니다.
            </p>
            <button
              className={styles.confirmButton}
              onClick={() => setShowSuccessModal(false)}
            >
              확인
            </button>
          </div>
        </div>
      )}

      {/* 개인정보처리방침 팝업 */}
      {showPrivacyModal && (
        <div
          className={styles.privacyModalOverlay}
          onClick={() => setShowPrivacyModal(false)}
        >
          <div
            className={styles.privacyModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.privacyModalCloseButton}
              onClick={() => setShowPrivacyModal(false)}
            >
              ×
            </button>
            <div className={styles.privacyContent}>
              <h2>개인정보처리방침</h2>
              <div className={styles.privacyText}>
                <p>
                  바로기업(이하 "회사")은 정보통신망 이용촉진 및 정보보호 등에
                  관한 법률, 개인정보보호법 등 관련 법령에 따라 이용자의
                  개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게
                  처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을
                  수립·공개합니다.
                </p>
                <h3>1. 수집하는 개인정보의 항목 및 수집방법</h3>
                <p>
                  회사는 상담 신청을 위해 다음과 같은 개인정보를 수집하고
                  있습니다.
                </p>
                <ul>
                  <li>수집항목: 이름, 연락처</li>
                  <li>수집방법: 홈페이지 상담 신청 양식</li>
                </ul>
                <h3>2. 개인정보의 수집 및 이용목적</h3>
                <p>
                  회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                </p>
                <ul>
                  <li>상담 신청에 대한 응대 및 서비스 제공</li>
                  <li>고객 문의사항 처리</li>
                </ul>
                <h3>3. 개인정보의 보유 및 이용기간</h3>
                <p>
                  원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
                  정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여
                  보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한
                  일정한 기간 동안 회원정보를 보관합니다.
                </p>
                <h3>4. 개인정보의 파기절차 및 방법</h3>
                <p>
                  회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는
                  해당 정보를 지체 없이 파기합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
