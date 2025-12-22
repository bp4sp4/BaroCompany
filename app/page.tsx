"use client";

import { useState } from "react";
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

  return (
    <>
      <Loader
        topLogo="/main/logo_white.png"
        bottomLogo="/main/logo_white.png"
        centerLogo="/main/logo_black.png"
        onComplete={() => setIsLoading(false)}
      />
      <Header />
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
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            스타트업 빌드업부터,<br />
            투자유치 성공까지!
          </h1>
        </div>
      </main>
      <section className={styles.stageSection}>
        <StageSelector theme="light" />
      </section>
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
