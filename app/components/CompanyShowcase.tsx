"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./CompanyShowcase.module.css";

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
      image: "/images/main/showcase/showcase001.png",
    },
    {
      id: 2,
      achievement: "자금확보",
      description: "복잡하고 까다로운 정책자금<br/> 확실한 전략으로 받을 수 있도록",
      tags: ["#정책자금", "#맞춤형전략", "#1:!멘토"],
      category: "Secure funds",
      companyName: "자금이 필요할 때",
      image: "/images/main/showcase/showcase002.png",
    },
    {
      id: 3,
      achievement: "경영지원",
      description: "세무·노무 이슈는 전문가에게,<br/> 대표님은 사업과 성장에만 집중!",
      tags: ["#절세솔루션", "#인사노무", "#기업인증"],
      category: "Management support",
      companyName: "경영 지원이 필요할 때",
      image: "/images/main/showcase/showcase003.png",
    },
    {
      id: 4,
      achievement: "투자유치",
      description: "기업의 가치를 증명하는 스토리로<br/> 성공적인 자금 조달과 스케일업",
      tags: ["#IR자료제작", "#투자자매칭", "#기업인증"],
      category: "Attracting investment",
      companyName: "투자가 필요할 때",
      image: "/images/main/showcase/showcase004.png",
    },

  ];


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
