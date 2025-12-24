"use client";

import Image from "next/image";
import { useConsultation } from "./ConsultationContext";
import styles from "./FloatingButton.module.css";

export default function FloatingButton() {
  const { openModal } = useConsultation();

  return (
    <button
      className={styles.floatingButton}
      onClick={openModal}
      aria-label="1:1 전문가 상담신청"
    >
      <Image
        src="/floating_button.png"
        alt="상담 신청"
        width={100}
        height={100}
        className={styles.buttonImage}
      />
    </button>
  );
}
