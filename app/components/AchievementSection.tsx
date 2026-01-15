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
  const marqueeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLParagraphElement>(null);
  const achievements = [
    {
      id: 1,
      quote: '"바로기업 덕분에<br/>정부지원사업 어렵지 않았어요"',
      name: "한*생 대표님",
      company: "A 카페",
    },
    {
      id: 2,
      quote: '"잠자고 있던 돈을<br/>찾은 기분입니다."',
      name: "한*생 대표님",
      company: "A 카페",
    },
    {
      id: 3,
      quote:
        "막막했던 서류 작성부터 대면<br/> 상담까지 함께해주어 확장에만<br/> 전념할 수 있었습니다.",
      name: "한*생 대표님",
      company: "A 카페",
    },
    {
      id: 4,
      quote: '"바로기업 덕분에<br/>정부지원사업 어렵지 않았어요"',
      name: "한*생 대표님",
      company: "A 카페",
    },
    {
      id: 5,
      quote: '"잠자고 있던 돈을<br/>찾은 기분입니다."',
      name: "한*생 대표님",
      company: "A 카페",
    },
    {
      id: 6,
      quote:
        "막막했던 서류 작성부터 대면<br/> 상담까지 함께해주어 확장에만<br/> 전념할 수 있었습니다.",
      name: "한*생 대표님",
      company: "A 카페",
    },
    {
      id: 7,
      quote: '"바로기업 덕분에<br/>정부지원사업 어렵지 않았어요"',
      name: "한*생 대표님",
      company: "A 카페",
    },
    {
      id: 8,
      quote: '"잠자고 있던 돈을<br/>찾은 기분입니다."',
      name: "한*생 대표님",
      company: "A 카페",
    },
    {
      id: 9,
      quote:
        "막막했던  서류 작성부터 대면<br/> 상담까지 함께해주어 확장에만<br/> 전념할 수 있었습니다.",
      name: "한*생 대표님",
      company: "A 카페",
    },
  ];

  // 무한 반복을 위해 원본 배열을 3번 반복 (더 많은 버퍼로 끊김 방지)
  const duplicatedAchievements = [
    ...achievements,
    ...achievements,
    ...achievements,
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

  // CSS 애니메이션을 위한 정확한 너비 계산
  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;

    const calculateWidth = () => {
      // DOM이 완전히 렌더링된 후 계산
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const cards = marquee.querySelectorAll(`.${styles.card}`);
          const cardsPerSet = cards.length / 3; // 3번 복제했으므로

          if (cards.length > 0 && cardsPerSet > 0) {
            const firstCard = cards[0] as HTMLElement;
            const secondSetFirstCard = cards[cardsPerSet] as HTMLElement;

            if (firstCard && secondSetFirstCard) {
              // offsetLeft를 사용한 정확한 계산
              const firstCardStart = firstCard.offsetLeft;
              const secondSetStart = secondSetFirstCard.offsetLeft;
              const totalWidth = secondSetStart - firstCardStart;

              // CSS 변수로 설정
              marquee.style.setProperty("--marquee-offset", `-${totalWidth}px`);

              console.log("Calculated offset:", totalWidth, "px");
            }
          }
        });
      });
    };

    // 초기 계산
    const timeoutId1 = setTimeout(calculateWidth, 100);
    const timeoutId2 = setTimeout(calculateWidth, 500);
    const timeoutId3 = setTimeout(calculateWidth, 1000);

    // 리사이즈 시 재계산
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(calculateWidth, 100);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <div className={styles.header}>
        <h2 ref={titleRef} className={styles.title}>
          한평생 바로기업의 성과
        </h2>
        <p ref={subtitleRef} className={styles.subtitle}>
          대표님들의 성공과 성장으로 보여드립니다
        </p>
      </div>
      <div ref={marqueeContainerRef} className={styles.marqueeContainer}>
        <div className={styles.marqueeWrapper}>
          <div
            ref={marqueeRef}
            className={`${styles.marquee} ${styles.marqueeLeft}`}
          >
            {duplicatedAchievements.map((achievement, index) => (
              <div key={`marquee-item-${index}`} className={styles.card}>
                <p
                  className={styles.quote}
                  dangerouslySetInnerHTML={{ __html: achievement.quote }}
                />
                <div className={styles.userInfo}>
                  <div className={styles.avatar}>
                    <Image
                      src="/images/main/human.png"
                      alt="Avatar"
                      width={60}
                      height={60}
                      className={styles.avatarImage}
                      priority={index < 2}
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>
                  <div className={styles.userDetails}>
                    <p className={styles.name}>{achievement.name}</p>
                    <p className={styles.company}>{achievement.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
