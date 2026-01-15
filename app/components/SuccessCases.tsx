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
      companyName: "A 요식업(카페)",
      description: "급해서 쓴 카드론으로 신용점수 하락",
      tags: ["신용개선", "부채 상환 계획서"],
      investment: "3천만원 승인",
    },
    {
      id: 2,
      companyName: "B 쇼핑몰",
      description: "매출 실적이 없어 은행 대출 불가",
      tags: ["사업계획서", "청년전용 창업자금"],
      investment: "1억원 승인",
    },
    {
      id: 3,
      companyName: "C 지식서비스 기업",
      description: "기술은 있지만 담보가 없는 상황",
      tags: ["벤처인증", "기술평가 TCB 자료"],
      investment: "2억원 승인",
    },
    {
      id: 4,
      companyName: "D 제조업",
      description: "공장 기계 구입으로 부채비율 400%",
      tags: ["기업부설연구소 설립", "재무제표 개선"],
      investment: "2억원 승인",
    },
    {
      id: 5,
      companyName: "E 외식업(고기집)",
      description: "과거 국세 체납으로 심사 보류",
      tags: ["소명자료", "예외 승인 전략"],
      investment: "5천만원 승인",
    },
    {
      id: 6,
      companyName: "F IT 서비스업",
      description: "프로젝트 대금 회수 지연으로 운전자금 부족",
      tags: ["운전자금 설계", "매출 구조 정리"],
      investment: "8천만원 승인",
    },
    {
      id: 7,
      companyName: "G 도소매업",
      description: "거래처 확대에 따른 재고 자금 부족",
      tags: ["운전자금 설계", "계약 구조 정리 "],
      investment: "6천만원 승인",
    },
    {
      id: 8,
      companyName: "H 콘텐츠 제작업",
      description: "외주비·인건비 선지출로 현금 흐름 악화",
      tags: ["사업 구조 정비", "정책-운전자금 연계 "],
      investment: "9천만원 승인",
    },
    {
      id: 9,
      companyName: "I 물류·유통업",
      description: "차량·장비 교체 필요로 자금 부담 발생",
      tags: ["시설자금 설계", "상환 구조 조정"],
      investment: "1억 5천만원 승인",
    },
    {
      id: 10,
      companyName: "J 교육 서비스업",
      description: "계절적 매출 편차로 금융권 대출 제한",
      tags: ["사업계획서 보완", "정책자금 연계 "],
      investment: "7천만원 승인",
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
            바로기업 정책자금 성공사례
          </h2>
        </div>
      </div>
      <div ref={swiperRef} className={styles.swiperContainer}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          resistanceRatio={1}
          breakpoints={{
            375: {
              slidesPerView: "auto",
              spaceBetween: 8,
              centeredSlides: false,
            },
            480: {
              slidesPerView: "auto",
              spaceBetween: 16,
              centeredSlides: true,
              centeredSlidesBounds: true,
            },
            1024: {
              slidesPerView: 2.2,
              spaceBetween: 10,
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
          watchOverflow={true}
          preventClicks={false}
          preventClicksPropagation={false}
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
