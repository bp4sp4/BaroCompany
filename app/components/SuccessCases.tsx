"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./SuccessCases.module.css";

export default function SuccessCases() {
  const cards = [
    {
      id: 1,
      companyName: "회사명",
      description: "회사 정보, 어떤 솔루션으로 어떤 성과",
      tags: ["교육", "예비창업", "투자유치"],
      investment: "8억+α투자 완료",
    },
    {
      id: 2,
      companyName: "회사명",
      description: "회사 정보, 어떤 솔루션으로 어떤 성과",
      tags: ["교육", "예비창업", "투자유치"],
      investment: "8억+α투자 완료",
    },
    {
      id: 3,
      companyName: "회사명",
      description: "회사 정보, 어떤 솔루션으로 어떤 성과",
      tags: ["교육", "예비창업", "투자유치"],
      investment: "8억+α투자 완료",
    },
    {
      id: 4,
      companyName: "회사명",
      description: "회사 정보, 어떤 솔루션으로 어떤 성과",
      tags: ["교육", "예비창업", "투자유치"],
      investment: "8억+α투자 완료",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>바로기업 투자유치 성공사례</h2>
          <p className={styles.subtitle}>
            플랫폼 정보, 어떤 투자, 어떤 프로그램 이용 등
          </p>
        </div>
        <a href="#" className={styles.moreLink}>
          더 알아보기 &gt;
        </a>
      </div>
      <div className={styles.swiperContainer}>
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
