"use client";

import { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import StageSelector from "./components/StageSelector";
import SuccessCases from "./components/SuccessCases";
import GrowthSection from "./components/GrowthSection";
import RecruitmentBanner from "./components/RecruitmentBanner";
import CompanyShowcase from "./components/CompanyShowcase";
import AchievementSection from "./components/AchievementSection";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import styles from "./page.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isLoading && videoRef.current) {
      // 로더 완료 후 비디오만 재생
      videoRef.current.play().catch((error) => {
        console.log("Video play error:", error);
      });
    }
  }, [isLoading]);

  return (
    <>
      <Loader
        topLogo="/main/logo_white.png"
        bottomLogo="/main/logo_white.png"
        centerLogo="/main/logo_black.png"
        onComplete={() => setIsLoading(false)}
      />
      <Header ref={headerRef as React.RefObject<HTMLElement>} />
      <main className={styles.main}>
        <video
          ref={videoRef}
          className={styles.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/main/background.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroContent}>
  
          <h1 className={styles.heroTitle}>
          <p className={styles.heroSubtitle}>
           한평생 바로기업과 함께하는 가장 확실한 성장<br />
          </p>
            <strong className={styles.heroSubtitleStrong}>정책자금 신청</strong>부터,<br />
            <strong className={styles.heroSubtitleStrong}>기업성장 지원</strong>까지!
          </h1>
        </div>
      </main>
      <section className={styles.stageSection}>
        <StageSelector theme="dark" />
      </section>
      <SuccessCases />

      <GrowthSection />
      
      <RecruitmentBanner />
      <CompanyShowcase />
      <AchievementSection />
      <Footer />
    </>
  );
}
