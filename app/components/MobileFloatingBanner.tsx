"use client";

import { useState, useEffect } from "react";
import { useConsultation } from "./ConsultationContext";
import Image from "next/image";
import styles from "./MobileFloatingBanner.module.css";

// 카카오톡 채널 링크 (실제 링크로 변경 필요)
// const KAKAO_TALK_LINK = "https://pf.kakao.com/_your_channel_id";

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

  // const handleKakaoClick = () => {
  //   window.open(KAKAO_TALK_LINK, "_blank", "noopener,noreferrer");
  // };

  const handlePhoneClick = () => {
    window.location.href = "tel:02-2135-6221";
  };

  return (
    <>
      <button
        className={styles.consultationBanner}
        onClick={openModal}
        aria-label="1:1 전문가 상담"
      >
        <span className={styles.consultationBannerText}>1:1 전문가 상담</span>
        <Image
          src="/images/main/banner_comments.png"
          alt="상담 아이콘"
          width={48}
          height={48}
          className={styles.chatIcon}
          priority
          loading="eager"
        />
      </button>
      <button
        className={styles.kakaoBanner}
        onClick={handlePhoneClick}
        aria-label="전화 상담하기"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          className={styles.icon}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.6898 27.6663C18.8898 27.6001 13.7885 26.8951 8.44601 21.5538C3.10476 16.2113 2.40101 11.1113 2.33351 9.31009C2.23351 6.56509 4.33601 3.89884 6.76476 2.85759C7.05723 2.73129 7.37751 2.68321 7.69417 2.71806C8.01083 2.7529 8.31299 2.86947 8.57101 3.05634C10.571 4.51384 11.951 6.71884 13.136 8.45259C13.3967 8.8335 13.5082 9.29702 13.4492 9.75483C13.3902 10.2126 13.1648 10.6327 12.816 10.9351L10.3773 12.7463C10.2594 12.8314 10.1765 12.9564 10.1439 13.098C10.1112 13.2396 10.1311 13.3883 10.1998 13.5163C10.7523 14.5201 11.7348 16.0151 12.8598 17.1401C13.9848 18.2651 15.551 19.3126 16.6248 19.9276C16.7594 20.0032 16.9178 20.0243 17.0676 19.9866C17.2173 19.949 17.3469 19.8554 17.4298 19.7251L19.0173 17.3088C19.3091 16.9211 19.7397 16.6614 20.2187 16.5841C20.6978 16.5067 21.1882 16.6177 21.5873 16.8938C23.346 18.1113 25.3985 19.4676 26.901 21.3913C27.103 21.6512 27.2316 21.9606 27.2731 22.2871C27.3147 22.6137 27.2678 22.9454 27.1373 23.2476C26.091 25.6888 23.4435 27.7676 20.6898 27.6663Z"
            fill="white"
          />
        </svg>
      </button>
      {/* 카카오톡 버튼 (주석처리)
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
      */}
    </>
  );
}
