"use client";

import { useRef, useState, useEffect } from "react";
import Header from "./components/Header";
import StageSelector from "./components/StageSelector";
import SuccessCases from "./components/SuccessCases";
import GrowthSection from "./components/GrowthSection";
import RecruitmentBanner from "./components/RecruitmentBanner";
import CompanyShowcase from "./components/CompanyShowcase";
import AchievementSection from "./components/AchievementSection";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import MobileFloatingBanner from "./components/MobileFloatingBanner";
import { ConsultationProvider } from "./components/ConsultationContext";
import AnimatedNumber from "./components/AnimatedNumber";
import styles from "./page.module.css";

// 모바일 감지 훅
const useIsMobile = () => {
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

  return isMobile;
};

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [isMobile]);

  return (
    <ConsultationProvider>
      <Header ref={headerRef as React.RefObject<HTMLElement>} />
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <video
            ref={videoRef}
            key={isMobile ? "mobile" : "desktop"}
            className={styles.banner_video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source
              src={
                isMobile
                  ? "/images/main/main_mobile_video.mp4"
                  : "/images/main/main_video.mp4"
              }
              type="video/mp4"
            />
          </video>
          <div className={styles.banner_overlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              START UP,
              <br />
              시작부터 성장까지
            </h1>
            <p className={styles.heroSubtitle}>
              창업부터 EXIT까지, 대표님들의
              <br />
              성공적인 경영을 위한 전문 컨설팅
            </p>
          </div>
        </main>
      </div>
      <section className={styles.stageSection}>
        <StageSelector theme="dark" />
      </section>

      <SuccessCases />

      <section className={styles.main_achievements_section}>
        <div className={styles.main_achievements_metrics}>
          <div className={styles.main_achievement_item}>
            <span className={styles.main_achievement_tag}>지원기업</span>
            <AnimatedNumber
              value="500+"
              className={styles.main_achievement_number}
            />
          </div>
          {!isMobile && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="50"
              viewBox="0 0 2 50"
              fill="none"
              className={styles.main_achievement_separator}
            >
              <path d="M1 0L0.999998 50" stroke="#919191" strokeWidth="2" />
            </svg>
          )}
          <div className={styles.main_achievement_item}>
            <span className={styles.main_achievement_tag}>승인율</span>
            <AnimatedNumber
              value="98%"
              className={styles.main_achievement_number}
            />
          </div>
          {!isMobile && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="50"
              viewBox="0 0 2 50"
              fill="none"
              className={styles.main_achievement_separator}
            >
              <path d="M1 0L0.999998 50" stroke="#919191" strokeWidth="2" />
            </svg>
          )}
          <div className={styles.main_achievement_item}>
            <span className={styles.main_achievement_tag}>평균 지원액</span>
            <AnimatedNumber
              value="9.2억"
              className={styles.main_achievement_number}
            />
          </div>
          {!isMobile && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="50"
              viewBox="0 0 2 50"
              fill="none"
              className={styles.main_achievement_separator}
            >
              <path d="M1 0L0.999998 50" stroke="#919191" strokeWidth="2" />
            </svg>
          )}
          <div className={styles.main_achievement_item}>
            <span className={styles.main_achievement_tag}>컨설팅 경력</span>
            <AnimatedNumber
              value="15년"
              className={styles.main_achievement_number}
            />
          </div>
        </div>
      </section>

      <GrowthSection />

      <RecruitmentBanner />
      <CompanyShowcase />
      <AchievementSection />
      <Footer />
      <FloatingButton />
      <MobileFloatingBanner />
    </ConsultationProvider>
  );
}
