"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
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
      title: "정책 자금 종합 컨설팅",
      subtitle: "복잡한 서류와 사업계획서 대행, 승인 시까지 책임지고 지원",
      image: "/main/growth/growth001.png",
    },
    {
      id: 2,
      title: "기업부설연구소 설립",
      subtitle: "정책자금 가점과 세액 공제를 위한",
      image: "/main/growth/growth002.png",
    },
    {
      id: 3,
      title: "벤처기업 인증",
      subtitle: "까다로운 심사를 통과하는 가장 확실한 전략",
      image: "/main/growth/growth003.png",
    },
    {
      id: 4,
      title: "비즈 인증",
      subtitle: "정부 지원 사업 우대 및 금융 혜택을 위한",
      image: "/main/growth/growth004.png",
    },
    {
      id: 5,
      title: "전략적 특허",
      subtitle: "기업 가치 평가를 높이는 지식재산권 컨설팅",
      image: "/main/growth/growth005.png",
    },
    {
      id: 6,
      title: "세무 컨설팅",
      subtitle: "절세 환급 맞춤 전문가와 함께합니다",
      image: "/main/growth/growth006.png",
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

    // 카드 6개가 순차적으로 나타남 (촤라라락)
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
        <p ref={subtitleRef} className={styles.subtitle}>
            나에게 딱 맞는 전문적인 실무! 한평생에서 꺼내보세요
          </p>
          <h2 ref={titleRef} className={styles.title}>대표님의 빠른 성장을 돕습니다</h2>
  
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
              <div className={styles.cardImageWrapper}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={496}
                  height={300}
                  className={styles.cardImage}
                  onError={(e) => {
                    // 이미지가 없을 경우 placeholder 표시
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.style.backgroundColor = '#e0e0e0';
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
