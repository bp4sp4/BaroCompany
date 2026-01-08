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
            className={styles.backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/main/background.mp4" type="video/mp4" />
          </video>
          <div className={styles.gradientOverlay} />
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

      <GrowthSection />

      <RecruitmentBanner />
      <CompanyShowcase />
      <AchievementSection />
      <Footer />
      <FloatingButton />
    </ConsultationProvider>
  );
}
