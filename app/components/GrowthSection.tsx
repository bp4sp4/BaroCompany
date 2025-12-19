import styles from "./GrowthSection.module.css";

export default function GrowthSection() {
  const cards = [
    {
      id: 1,
      title: "투자제안서",
      subtitle: "투자자 관점에서 보는 IR",
    },
    {
      id: 2,
      title: "사업계획서",
      subtitle: "투자자 관점에서 보는 IR",
    },
    {
      id: 3,
      title: "플랫폼 개발",
      subtitle: "투자자 관점에서 보는 IR",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.header}>
          <h2 className={styles.title}>대표님의 빠른 성장을 돕습니다</h2>
          <p className={styles.subtitle}>
            나에게 딱 맞는 전문적인 실무! 한평생에서 꺼내보세요
          </p>
        </div>
        <div className={styles.cardList}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardImagePlaceholder}></div>
              <div className={styles.cardContent}>
                <p className={styles.cardSubtitle}>{card.subtitle}</p>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
