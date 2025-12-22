"use client";

import Image from "next/image";
import styles from "./AchievementSection.module.css";

export default function AchievementSection() {
  const achievements = [
    {
      id: 1,
      companyName: "에듀바이저스",
      subtitle: "교육플랫폼",
    },
    {
      id: 2,
      companyName: "에듀바이저스",
      subtitle: "2022",
    },
    {
      id: 3,
      companyName: "에듀바이저스",
      subtitle: "교육플랫폼",
    },
    {
      id: 4,
      companyName: "에듀바이저스",
      subtitle: "교육플랫폼",
    },
    {
      id: 5,
      companyName: "에듀바이저스",
      subtitle: "2022",
    },
    {
      id: 6,
      companyName: "에듀바이저스",
      subtitle: "교육플랫폼",
    },
    {
      id: 7,
      companyName: "에듀바이저스",
      subtitle: "교육플랫폼",
    },
    {
      id: 8,
      companyName: "에듀바이저스",
      subtitle: "교육플랫폼",
    },
  ];

  // 무한 반복을 위해 배열을 복제
  const duplicatedAchievements = [...achievements, ...achievements, ...achievements];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>한평생 바로기업의 성과</h2>
        <p className={styles.subtitle}>
          대표님들의 성공과 성장으로 보여드립니다
        </p>
      </div>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeWrapper}>
          <div className={`${styles.marquee} ${styles.marqueeLeft}`}>
            {duplicatedAchievements.map((achievement, index) => (
              <div key={`left-${achievement.id}-${index}`} className={styles.card}>
                <div className={styles.logoContainer}>
                  <Image
                    src="/main/symbol.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    className={styles.logo}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.companyName}>{achievement.companyName}</h3>
                  <p className={styles.subtitleText}>{achievement.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.marqueeWrapper}>
          <div className={`${styles.marquee} ${styles.marqueeRight}`}>
            {duplicatedAchievements.map((achievement, index) => (
              <div key={`right-${achievement.id}-${index}`} className={styles.card}>
                <div className={styles.logoContainer}>
                  <Image
                    src="/main/symbol.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    className={styles.logo}
                  />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.companyName}>{achievement.companyName}</h3>
                  <p className={styles.subtitleText}>{achievement.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.cta}>
        <p className={styles.ctaText}>지금 바로기업으로 시작하세요!</p>
      </div>
    </section>
  );
}
