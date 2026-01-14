"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./SuccessCases.module.css";

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

  return (
    <section ref={containerRef} className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <p ref={subtitleRef} className={styles.subtitle}>
            성공과 성장을 함께합니다
          </p>
          <h2 ref={titleRef} className={styles.title}>
            바로기업 투자유치 성공사례
          </h2>
        </div>
      </div>
      <div ref={swiperRef} className={styles.swiperContainer}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            480: {
              slidesPerView: 1.2,
              spaceBetween: 8,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 2.2,
              spaceBetween: 100,
              centeredSlides: false,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
              centeredSlides: false,
            },
            1920: {
              slidesPerView: 3.5,
              spaceBetween: 10,
              centeredSlides: false,
            },
          }}
          pagination={{ clickable: true }}
          className={styles.swiper}
          centeredSlides={false}
          watchOverflow={true}
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
