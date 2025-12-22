"use client";

import { useState, useEffect, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

interface HeaderProps {
  isVideoVisible?: boolean;
}

const Header = forwardRef<HTMLElement, HeaderProps>(({ isVideoVisible = false }, ref) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
      setIsScrolled(scrollPosition > 50);
    };

    // 초기 스크롤 위치 확인
    handleScroll();

    // 스크롤 이벤트 리스너
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={ref} className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Image
            src={isScrolled ? "/main/logo_black.png" : "/main/logo_white.png"}
            alt="한평생 바로기업"
            width={280}
            height={65}
            className={styles.logo}
          />
          
        </div>
        <nav className={styles.nav}>
          <Link href="/portfolio" className={styles.navLink}>
            포트폴리오
          </Link>
          <Link href="/investment" className={styles.navLink}>
            투자유치
          </Link>
          <Link href="/policy" className={styles.navLink}>
            정책자금
          </Link>
          <Link href="/education" className={styles.navLink}>
            창업교육
          </Link>
          <Link href="/support" className={styles.navLink}>
            경영지원
          </Link>
          <button className={styles.consultButton}>
          1:1 전문가 상담신청
          <span className={styles.arrowIcon}>💫</span>
        </button>
        </nav>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;

