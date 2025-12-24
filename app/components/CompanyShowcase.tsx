"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
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
      achievement: "예비창업",
      description: "막막한 아이디어 단계부터<br/> 사업화 성공까지 든든한 첫 걸음",
      tags: ["#창업컨설팅", "#1:1멘토"],
      category: "Preparing business",
      companyName: "창업을 준비 중일때",
      image: "/main/showcase/showcase001.png",
    },
    {
      id: 2,
      achievement: "자금확보",
      description: "복잡하고 까다로운 정책자금<br/> 확실한 전략으로 받을 수 있도록",
      tags: ["#정책자금", "#맞춤형전략", "#1:!멘토"],
      category: "Secure funds",
      companyName: "자금이 필요할 때",
      image: "/main/showcase/showcase002.png",
    },
    {
      id: 3,
      achievement: "경영지원",
      description: "세무·노무 이슈는 전문가에게,<br/> 대표님은 사업과 성장에만 집중!",
      tags: ["#절세솔루션", "#인사노무", "#기업인증"],
      category: "Management support",
      companyName: "경영 지원이 필요할 때",
      image: "/main/showcase/showcase003.png",
    },
    {
      id: 4,
      achievement: "투자유치",
      description: "기업의 가치를 증명하는 스토리로<br/> 성공적인 자금 조달과 스케일업",
      tags: ["#IR자료제작", "#투자자매칭", "#기업인증"],
      category: "Attracting investment",
      companyName: "투자가 필요할 때",
      image: "/main/showcase/showcase004.png",
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
        {companies.slice(0, 4).map((company, index) => (
          <div
            key={company.id}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className={styles.card}
          >
            <div className={styles.imageContainer}>
              {company.image && (
                <Image
                  src={company.image}
                  alt={company.companyName}
                  width={368}
                  height={368}
                  className={styles.companyImage}
                  onError={(e) => {
                    // 이미지가 없을 경우 placeholder 표시
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              )}
              <div className={styles.achievementBox}>
                <h3 className={styles.achievementTitle}>{company.achievement}</h3>
                {company.description && (
                  <p 
                    className={styles.achievementDescription}
                    dangerouslySetInnerHTML={{ __html: company.description }}
                  />
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
