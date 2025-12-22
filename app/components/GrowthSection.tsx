"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./GrowthSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function GrowthSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

  useEffect(() => {
    if (!sectionRef.current) return;

    // 제목이 먼저 나타남
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "sine.out",
        scrollTrigger: {
          trigger: sectionRef.current,
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
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // 카드 3개가 순차적으로 나타남 (촤라라락)
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.from(card, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.4)",
        delay: index * 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.sectionInner}>
        <div className={styles.header}>
          <h2 ref={titleRef} className={styles.title}>대표님의 빠른 성장을 돕습니다</h2>
          <p ref={subtitleRef} className={styles.subtitle}>
            나에게 딱 맞는 전문적인 실무! 한평생에서 꺼내보세요
          </p>
        </div>
        <div className={styles.cardList}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={styles.card}
            >
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
