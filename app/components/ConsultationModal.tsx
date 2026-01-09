"use client";

import { useState } from "react";
import styles from "./ConsultationModal.module.css";

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(e.target.checked);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={styles.modalHeader}>
          <h2 className={styles.title}>정책자금상담</h2>
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
              placeholder="-제외 입력"
              required
            />
          </div>
          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="privacy"
              checked={isAgreed}
              onChange={handleCheckboxChange}
              className={styles.checkbox}
              required
            />
            <label htmlFor="privacy" className={styles.checkboxLabel}>
              개인정보처리방침 동의
            </label>
          </div>
          {submitMessage && (
            <div className={styles.message}>{submitMessage}</div>
          )}
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting || !isAgreed}
          >
            {isSubmitting ? "제출 중..." : "상담신청"}
          </button>
        </form>
      </div>
    </div>
  );
}
