"use client";

import { useRef } from "react";
import Header from "./components/Header";
import StageSelector from "./components/StageSelector";
import SuccessCases from "./components/SuccessCases";
import GrowthSection from "./components/GrowthSection";
import RecruitmentBanner from "./components/RecruitmentBanner";
import CompanyShowcase from "./components/CompanyShowcase";
import AchievementSection from "./components/AchievementSection";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import { ConsultationProvider } from "./components/ConsultationContext";
import styles from "./page.module.css";

export default function Home() {
  const headerRef = useRef<HTMLElement>(null);

  return (
    <ConsultationProvider>
      <Header ref={headerRef as React.RefObject<HTMLElement>} />
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <video
            className={styles.banner_video}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/images/main/main_video.mp4" type="video/mp4" />
          </video>
          <div className={styles.banner_overlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              START UP,
              <br />
              시작부터 성장까지
            </h1>
            <p className={styles.heroSubtitle}>
              대표님들의 성공적인 경영을 위한 전문 컨설팅.
              <br />
              창업부터 EXIT까지, 한평생 바로 기업과 함께합니다.
            </p>
          </div>
        </main>
      </div>
      <section className={styles.stageSection}>
        <StageSelector theme="dark" />
      </section>

      <SuccessCases />

      <section className={styles.main_achievements_section}>
        <div className={styles.main_achievements_wrapper}>
          <div className={styles.main_achievements_metrics}>
            <div className={styles.main_achievement_item}>
              <span className={styles.main_achievement_tag}>지원기업</span>
              <span className={styles.main_achievement_number}>500+</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="2"
              viewBox="0 0 50 2"
              fill="none"
              className={styles.main_achievement_separator}
            >
              <path d="M0 1L50 1" stroke="#919191" strokeWidth="2" />
            </svg>
            <div className={styles.main_achievement_item}>
              <span className={styles.main_achievement_tag}>승인율</span>
              <span className={styles.main_achievement_number}>98%</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="2"
              viewBox="0 0 50 2"
              fill="none"
              className={styles.main_achievement_separator}
            >
              <path d="M0 1L50 1" stroke="#919191" strokeWidth="2" />
            </svg>
            <div className={styles.main_achievement_item}>
              <span className={styles.main_achievement_tag}>평균 지원액</span>
              <span className={styles.main_achievement_number}>9.2억</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="2"
              viewBox="0 0 50 2"
              fill="none"
              className={styles.main_achievement_separator}
            >
              <path d="M0 1L50 1" stroke="#919191" strokeWidth="2" />
            </svg>
            <div className={styles.main_achievement_item}>
              <span className={styles.main_achievement_tag}>컨설팅 경력</span>
              <span className={styles.main_achievement_number}>15년</span>
            </div>
          </div>
        </div>
      </section>

      <GrowthSection />

      <RecruitmentBanner />
      <CompanyShowcase />
      <AchievementSection />
      <Footer />
      <FloatingButton />
    </ConsultationProvider>
  );
}
