"use client";

import { useState, useEffect } from "react";
import { useConsultation } from "./ConsultationContext";
import Image from "next/image";
import styles from "./MobileFloatingBanner.module.css";

// 카카오톡 채널 링크 (실제 링크로 변경 필요)
const KAKAO_TALK_LINK = "https://pf.kakao.com/_your_channel_id";

export default function MobileFloatingBanner() {
  const { openModal } = useConsultation();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    if (typeof window !== "undefined") {
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  // 모바일에서만 표시
  if (!isMobile) {
    return null;
  }

  const handleKakaoClick = () => {
    window.open(KAKAO_TALK_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <button
        className={styles.consultationBanner}
        onClick={openModal}
        aria-label="1:1 전문가 상담"
      >
        1:1 전문가 상담
      </button>
      <button
        className={styles.kakaoBanner}
        onClick={handleKakaoClick}
        aria-label="카카오톡 상담하기"
      >
        <Image
          src="/images/main/talk.svg"
          alt="카카오톡 상담하기"
          width={24}
          height={24}
          className={styles.icon}
          priority
          loading="eager"
        />
      </button>
    </>
  );
}
