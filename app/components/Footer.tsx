"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const [isFamilySiteOpen, setIsFamilySiteOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.companyNameWrapper}>
          <Image
            src="/main/logo_white.png"
            alt="한평생 바로기업"
            width={200}
            height={64}
            className={styles.logo}
          />
          <div className={styles.rightButtons}>
            <div className={styles.familySiteWrapper}>
              <button 
                className={styles.familySiteButton}
                onClick={() => setIsFamilySiteOpen(!isFamilySiteOpen)}
              >
                <span>패밀리 사이트</span>
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className={isFamilySiteOpen ? styles.chevronUp : styles.chevronDown}
                >
                  <path 
                    d={isFamilySiteOpen ? "M1 9L6 4L11 9" : "M1 3L6 8L11 3"} 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className={`${styles.familySiteDropdown} ${isFamilySiteOpen ? styles.dropdownOpen : styles.dropdownClosed}`}>
                <a target="_blank" href="https://www.eduvisor.kr/" className={styles.dropdownItem}>한평생 에듀바이저스</a>
                <a target="_blank" href="https://korhrd.co.kr/" className={styles.dropdownItem}>한평생 직업훈련</a>
                <a target="_blank" href="https://pf.kakao.com/_inxaTn" className={styles.dropdownItem}>한평생 학습지원</a>
           
              </div>
            </div>
            <button className={styles.topButton} onClick={scrollToTop}>
              <span>TOP</span>
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M1 9L6 4L11 9" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
     
        <p className={styles.info}>
          대표 양병웅 | 사업자등록번호 227-88-03196
        </p>
        <p className={styles.address}>
          서울시 도봉구 창동 마들로13길 61 씨드큐브 905호
        </p>
        <div className={styles.links}>
          <a href="#" className={styles.link}>이용약관</a>
          <span className={styles.separator}>|</span>
          <a href="#" className={styles.link}>개인정보취급방침</a>
        </div>
        <p className={styles.copyright}>
          2026 © Eduvisors (KORHRD Partners). All rights reserved.
        </p>
      </div>
    </footer>
  );
}



