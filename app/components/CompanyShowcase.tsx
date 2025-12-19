import styles from "./CompanyShowcase.module.css";

export default function CompanyShowcase() {
  const companies = [
    {
      id: 1,
      achievement: "1년만에 30억 매출",
      description: "1차 구축시 린버전으로 구축 론칭 후 매출발생을 보여 6차수 개발 진행, 1년만에 30억 매출",
      tags: ["교육", "예비창업", "투자유치"],
      category: "Education Enterprise",
      companyName: "한평생 에듀바이저스",
      companyDescription: "모두를 위한 평생 교육 플랫폼 구축",
    },
    {
      id: 2,
      achievement: "1년만에 30억 매출",
      description: "1차 구축시 린버전으로 구축 론칭 후 매출발생을 보여 6차수 개발 진행, 1년만에 30억 매출",
      tags: ["교육", "예비창업", "투자유치"],
      category: "Education Enterprise",
      companyName: "한평생 에듀바이저스",
      companyDescription: "모두를 위한 평생 교육 플랫폼 구축",
    },
    {
      id: 3,
      achievement: "1년만에 30억 매출",
      description: "1차 구축시 린버전으로 구축 론칭 후 매출발생을 보여 6차수 개발 진행, 1년만에 30억 매출",
      tags: ["교육", "예비창업", "투자유치"],
      category: "Education Enterprise",
      companyName: "한평생 에듀바이저스",
      companyDescription: "모두를 위한 평생 교육 플랫폼 구축",
    },
    {
      id: 4,
      achievement: "1년만에 30억 매출",
      description: "1차 구축시 린버전으로 구축 론칭 후 매출발생을 보여 6차수 개발 진행, 1년만에 30억 매출",
      tags: ["교육", "예비창업", "투자유치"],
      category: "Education Enterprise",
      companyName: "한평생 에듀바이저스",
      companyDescription: "모두를 위한 평생 교육 플랫폼 구축",
    },
    {
      id: 5,
      achievement: "1년만에 30억 매출",
      description: "1차 구축시 린버전으로 구축 론칭 후 매출발생을 보여 6차수 개발 진행, 1년만에 30억 매출",
      tags: ["교육", "예비창업", "투자유치"],
      category: "Education Enterprise",
      companyName: "한평생 에듀바이저스",
      companyDescription: "모두를 위한 평생 교육 플랫폼 구축",
    },
    {
      id: 6,
      achievement: "1년만에 30억 매출",
      description: "1차 구축시 린버전으로 구축 론칭 후 매출발생을 보여 6차수 개발 진행, 1년만에 30억 매출",
      tags: ["교육", "예비창업", "투자유치"],
      category: "Education Enterprise",
      companyName: "한평생 에듀바이저스",
      companyDescription: "모두를 위한 평생 교육 플랫폼 구축",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>한평생과 함께한 기업을 만나보세요</h2>
        <p className={styles.subtitle}>
          나에게 딱 맞는 전문적인 실무! 한평생에서 꺼내보세요
        </p>
      </div>
      <div className={styles.cardsGrid}>
        {companies.map((company) => (
          <div key={company.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <div className={styles.placeholderBox}></div>
              <div className={styles.achievementBox}>
                <h3 className={styles.achievementTitle}>{company.achievement}</h3>
                {company.description && (
                  <p className={styles.achievementDescription}>
                    {company.description}
                  </p>
                )}
                {company.tags.length > 0 && (
                  <div className={styles.tags}>
                    {company.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.companyInfo}>
              <p className={styles.category}>{company.category}</p>
              <h3 className={styles.companyName}>{company.companyName}</h3>
              <p className={styles.companyDescription}>
                {company.companyDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
