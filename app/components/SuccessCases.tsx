"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./SuccessCases.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function SuccessCases() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const moreLinkRef = useRef<HTMLAnchorElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);
  const cards = [
    {
      id: 1,
      companyName: "'A'카페",
      description: "회사 정보, 어떤 솔루션으로 어떤 성과",
      tags: ["요식업", "사업계획서", "벤처인증"],
      investment: "연매출 0000만원",
    },
    {
      id: 2,
      companyName: "회사명",
      description: "회사 정보, 어떤 솔루션으로 어떤 성과",
      tags: ["요식업", "사업계획서", "벤처인증"],
      investment: "연매출 0000만원",
    },
    {
      id: 3,
      companyName: "회사명",
      description: "회사 정보, 어떤 솔루션으로 어떤 성과",
      tags: ["교육", "예비창업", "투자유치"],
      investment: "연매출 0000만원",
    },
    {
      id: 4,
      companyName: "회사명",
      description: "회사 정보, 어떤 솔루션으로 어떤 성과",
      tags: ["교육", "예비창업", "투자유치"],
      investment: "연매출 0000만원",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // 제목이 부드럽게 나타남
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "sine.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
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
          trigger: subtitleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // "더 알아보기" 링크가 나타남
    if (moreLinkRef.current) {
      gsap.from(moreLinkRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: "sine.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: moreLinkRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // Swiper 컨테이너가 나타나면서 카드들이 순차적으로 보임
    if (swiperRef.current) {
      const cards = swiperRef.current.querySelectorAll(`.${styles.card}`);
      
      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.8,
          ease: "sine.out",
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // 각 카드 내부 요소들도 순차적으로 나타남
        const tags = card.querySelectorAll(`.${styles.tag}`);
        const button = card.querySelector(`.${styles.investmentButton}`);

        tags.forEach((tag, tagIndex) => {
          gsap.from(tag, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: "back.out(1.7)",
            delay: index * 0.15 + tagIndex * 0.1 + 0.3,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });

        if (button) {
          gsap.from(button, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "sine.out",
            delay: index * 0.15 + 0.5,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerRef.current || 
            trigger.vars.trigger === titleRef.current ||
            trigger.vars.trigger === subtitleRef.current ||
            trigger.vars.trigger === moreLinkRef.current ||
            trigger.vars.trigger === swiperRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
        <p ref={subtitleRef} className={styles.subtitle}>
            플랫폼 정보, 어떤 투자, 어떤 프로그램 이용 등
          </p>
          <h2 ref={titleRef} className={styles.title}>바로기업 투자유치 성공사례</h2>
         
        </div>
     
      </div>
      <div ref={swiperRef} className={styles.swiperContainer}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView="auto"
          navigation
          pagination={{ clickable: true }}
          className={styles.swiper}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id} className={styles.slide}>
              <div className={styles.card}>
                <h3 className={styles.companyName}>{card.companyName}</h3>
                <p className={styles.description}>{card.description}</p>
                <div className={styles.tags}>
                  {card.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button className={styles.investmentButton}>
                  {card.investment}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
