"use client";

import { useState, useEffect, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useConsultation } from "./ConsultationContext";
import styles from "./Header.module.css";

interface HeaderProps {
  isVideoVisible?: boolean;
}

const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ isVideoVisible = false }, ref) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { openModal } = useConsultation();
    const pathname = usePathname();

    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition =
          window.scrollY || document.documentElement.scrollTop || 0;
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
      <header
        ref={ref}
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
          pathname === "/" ? styles.homepage : ""
        }`}
      >
        <div className={styles.container}>
          <div className={styles.logoSection}>
            <Link href="/">
              <Image
                src={
                  isScrolled ? "/images/main/logo_black.png" : "/images/main/logo_white.png"
                }
                alt="한평생 바로기업"
                width={200}
                height={isScrolled ? 46 : 64}
                className={styles.logo}
              />
            </Link>
          </div>
          <nav className={styles.nav}>
            <Link
              href="/portfolio"
              className={`${styles.navLink} ${
                pathname !== "/" && pathname === "/portfolio"
                  ? styles.active
                  : ""
              }`}
            >
              포트폴리오
            </Link>
            <Link
              href="/investment"
              className={`${styles.navLink} ${
                pathname !== "/" && pathname === "/investment"
                  ? styles.active
                  : ""
              }`}
            >
              투자유치
            </Link>
            <Link
              href="/policyfunds"
              className={`${styles.navLink} ${
                pathname !== "/" && pathname === "/policyfunds"
                  ? styles.active
                  : ""
              }`}
            >
              정책자금
            </Link>
            <Link
              href="/education"
              className={`${styles.navLink} ${
                pathname !== "/" && pathname === "/education"
                  ? styles.active
                  : ""
              }`}
            >
              창업교육
            </Link>
            <Link
              href="/support"
              className={`${styles.navLink} ${
                pathname !== "/" && pathname === "/support" ? styles.active : ""
              }`}
            >
              경영지원
            </Link>
            <Link
              href="/notice"
              className={`${styles.navLink} ${
                pathname !== "/" && pathname === "/notice" ? styles.active : ""
              }`}
            >
              주의사항
            </Link>
            <button className={styles.consultButton} onClick={openModal}>
              <Image
                src="/images/main/phone.png"
                alt="전화"
                width={24}
                height={24}
                className={styles.phoneIcon}
              />
              02-2135-6221
            </button>
          </nav>
        </div>
      </header>
    );
  }
);

Header.displayName = "Header";

export default Header;
