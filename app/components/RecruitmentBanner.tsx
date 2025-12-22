import styles from "./RecruitmentBanner.module.css";

export default function RecruitmentBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.banner}>
        <p className={styles.subtitle}>바로기업 신규 기업 모집중!</p>
        <h2 className={styles.title}>
          기술력에 자신있는 스타트업이라면?
          <br />
          바로기업에서 그 시작을 함께하세요!
        </h2>
      </div>
    </section>
  );
}



