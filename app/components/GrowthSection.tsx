"use client";

import Image from "next/image";
import styles from "./GrowthSection.module.css";

export default function GrowthSection() {
  const cards = [
    {
      id: 1,
      title: "정책 자금 종합 컨설팅",
      subtitle: "복잡한 서류와 사업계획서 대행, 승인까지",
      image: "/images/main/growth/growth001.png",
    },
    {
      id: 2,
      title: "기업부설연구소 설립",
      subtitle: "정책자금 가점과 세액 공제를 위한",
      image: "/images/main/growth/growth002.png",
    },
    {
      id: 3,
      title: "벤처기업 인증",
      subtitle: "까다로운 심사를 통과하는 가장 확실한 전략",
      image: "/images/main/growth/growth003.png",
    },
    {
      id: 4,
      title: "비즈 인증",
      subtitle: "정부 지원 사업 우대 및 금융 혜택을 위한",
      image: "/images/main/growth/growth004.png",
    },
    {
      id: 5,
      title: "전략적 특허",
      subtitle: "기업 가치 평가를 높이는 지식재산권 컨설팅",
      image: "/images/main/growth/growth005.png",
    },
    {
      id: 6,
      title: "세무 컨설팅",
      subtitle: "절세 환급 맞춤 전문가와 함께합니다",
      image: "/images/main/growth/growth006.png",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.header}>
          <p className={styles.subtitle}>전문적인 실무는 한평생에서</p>
          <h2 className={styles.title}>기업의 빠른 성장을 돕습니다</h2>
        </div>
        <div className={styles.cardList}>
          {cards.map((card, index) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={496}
                  height={300}
                  className={styles.cardImage}
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                  onError={(e) => {
                    // 이미지가 없을 경우 placeholder 표시
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.style.backgroundColor = "#e0e0e0";
                    }
                  }}
                />
              </div>
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
