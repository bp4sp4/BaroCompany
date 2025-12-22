"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CompanyShowcase.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function CompanyShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
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

  useEffect(() => {
    if (!containerRef.current) return;

    // 제목이 먼저 나타남
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "sine.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // 서브타이틀이 제목 다음에 나타남
    if (subtitleRef.current) {
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "sine.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // 카드 6개가 그리드 순서대로 순차적으로 나타남 (왼쪽 위부터 오른쪽 아래로)
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.from(card, {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.7,
        ease: "sine.out",
        delay: index * 0.1, // 순차적으로 나타남 (그리드 순서대로)
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <div className={styles.header}>
        <h2 ref={titleRef} className={styles.title}>한평생과 함께한 기업을 만나보세요</h2>
        <p ref={subtitleRef} className={styles.subtitle}>
          나에게 딱 맞는 전문적인 실무! 한평생에서 꺼내보세요
        </p>
      </div>
      <div className={styles.cardsGrid}>
        {companies.map((company, index) => (
          <div
            key={company.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className={styles.card}
          >
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
