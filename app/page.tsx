import Header from "./components/Header";
import StageSelector from "./components/StageSelector";
import SuccessCases from "./components/SuccessCases";
import GrowthSection from "./components/GrowthSection";
import RecruitmentBanner from "./components/RecruitmentBanner";
import CompanyShowcase from "./components/CompanyShowcase";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
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
      <GrowthSection />
      <RecruitmentBanner />
      <CompanyShowcase />
      <Footer />
    </>
  );
}
