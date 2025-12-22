"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./AchievementSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AchievementSection() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLParagraphElement>(null);
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

    // marquee 컨테이너가 나타남
    if (marqueeContainerRef.current) {
      gsap.from(marqueeContainerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "sine.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // CTA 텍스트가 마지막에 나타남
    if (ctaRef.current) {
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.8,
        ease: "back.out(1.4)",
        delay: 0.6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

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
        <h2 ref={titleRef} className={styles.title}>한평생 바로기업의 성과</h2>
        <p ref={subtitleRef} className={styles.subtitle}>
          대표님들의 성공과 성장으로 보여드립니다
        </p>
      </div>
      <div ref={marqueeContainerRef} className={styles.marqueeContainer}>
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
        <p ref={ctaRef} className={styles.ctaText}>지금 바로기업으로 시작하세요!</p>
      </div>
    </section>
  );
}
