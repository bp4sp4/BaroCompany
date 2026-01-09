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
          <div className={styles.banner_image_wrapper}></div>
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
          <div className={styles.main_achievements_header}>
            <h2 className={styles.main_achievements_title}>
              포트폴리오 분야별 성과
            </h2>
            <p className={styles.main_achievements_subtitle}>
              다양한 산업과 분야에서 입증된 컨설팅 성과 건수
            </p>
          </div>
          <div className={styles.main_achievements_metrics}>
            <div className={styles.main_achievement_item}>
              <span className={styles.main_achievement_tag}>
                정책자금 컨설팅
              </span>
              <span className={styles.main_achievement_number}>180+</span>
            </div>
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
            <div className={styles.main_achievement_item}>
              <span className={styles.main_achievement_tag}>투자유치 지원</span>
              <span className={styles.main_achievement_number}>120+</span>
            </div>
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
            <div className={styles.main_achievement_item}>
              <span className={styles.main_achievement_tag}>
                경영지원 컨설팅
              </span>
              <span className={styles.main_achievement_number}>150+</span>
            </div>
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
            <div className={styles.main_achievement_item}>
              <span className={styles.main_achievement_tag}>창업교육</span>
              <span className={styles.main_achievement_number}>200+</span>
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
