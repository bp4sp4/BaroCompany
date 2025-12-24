"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ConsultationModal.module.css";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    industry: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("상담 신청이 완료되었습니다!");
        // 제출 후 모달 닫기
        setTimeout(() => {
          onClose();
          setFormData({ name: "", contact: "", industry: "" });
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

  const formatPhoneNumber = (value: string) => {
    // 숫자만 추출
    const numbers = value.replace(/[^\d]/g, '');
    
    // 전화번호 포맷팅 (010-XXXX-XXXX)
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // 연락처 필드인 경우 자동 포맷팅
    if (name === 'contact') {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({
        ...prev,
        [name]: formatted,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2 className={styles.title}>1:1 전문가 상담신청</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              placeholder="이름을 입력해주세요"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="contact" className={styles.label}>
              연락처
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
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="industry" className={styles.label}>
              업종
            </label>
            <input
              type="text"
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className={styles.input}
              placeholder="업종을 입력해주세요"
              required
            />
          </div>
          {submitMessage && (
            <div className={styles.message}>{submitMessage}</div>
          )}
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "제출 중..." : "상담 신청하기"}
          </button>
        </form>
      </div>
    </div>
  );
}
