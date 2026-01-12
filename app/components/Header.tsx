"use client";

import { useState, useEffect, useRef, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useConsultation } from "./ConsultationContext";
import styles from "./Header.module.css";

// 로고 캐시 버스터 - 빌드 타임에 고정
const LOGO_VERSION = "v1.0.0";

// 모바일 감지 훅
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true); // 초기값을 true로 설정 (SSR 안전)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    // 클라이언트에서 즉시 체크
    if (typeof window !== "undefined") {
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  return isMobile;
};

interface HeaderProps {
  isVideoVisible?: boolean;
}

const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ isVideoVisible = false }, ref) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openModal } = useConsultation();
    const pathname = usePathname();
    const isMobile = useIsMobile();

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
        } ${isMobileMenuOpen ? styles.menuOpen : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.logoSection}>
            <Link href="/">
              <img
                src={`${
                  isScrolled
                    ? "/images/main/logo_black.png"
                    : "/images/main/logo_white.png"
                }?v=${LOGO_VERSION}`}
                alt="한평생 바로기업"
                width={240}
                height={isScrolled ? 55 : 77}
                className={styles.logo}
              />
            </Link>
          </div>
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M18 16.5L27 7.5L28.5 9L19.5 18L28.5 27L27 28.5L18 19.5L9 28.5L7.5 27L16.5 18L7.5 9L9 7.5L18 16.5Z"
                  fill={isScrolled ? "black" : "white"}
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M28.5 24C29.3284 24 30 24.6716 30 25.5C30 26.3284 29.3284 27 28.5 27H7.5C6.67157 27 6 26.3284 6 25.5C6 24.6716 6.67157 24 7.5 24H28.5ZM28.5 16.5C29.3284 16.5 30 17.1716 30 18C30 18.8284 29.3284 19.5 28.5 19.5H7.5C6.67157 19.5 6 18.8284 6 18C6 17.1716 6.67157 16.5 7.5 16.5H28.5ZM28.5 9C29.3284 9 30 9.67157 30 10.5C30 11.3284 29.3284 12 28.5 12H7.5C6.67157 12 6 11.3284 6 10.5C6 9.67157 6.67157 9 7.5 9H28.5Z"
                  fill={isScrolled ? "black" : "white"}
                />
              </svg>
            )}
          </button>
          {!isMobile && (
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
                href="/ented"
                className={`${styles.navLink} ${
                  pathname !== "/" && pathname === "/ented" ? styles.active : ""
                }`}
              >
                창업교육
              </Link>
              <Link
                href="/bizsupport"
                className={`${styles.navLink} ${
                  pathname !== "/" && pathname === "/bizsupport"
                    ? styles.active
                    : ""
                }`}
              >
                경영지원
              </Link>
              <Link
                href="/notice"
                className={`${styles.navLink} ${
                  pathname !== "/" && pathname === "/notice"
                    ? styles.active
                    : ""
                }`}
              >
                주의사항
              </Link>
              <a href="tel:02-2135-6221" className={styles.consultButton}>
                <Image
                  src="/images/main/phone.png"
                  alt="전화"
                  width={24}
                  height={24}
                  className={styles.phoneIcon}
                />
                02-2135-6221
              </a>
            </nav>
          )}
          {/* 모바일 메뉴 오버레이 */}
          {isMobileMenuOpen && (
            <div
              className={`${styles.mobileMenuOverlay} ${
                isMobileMenuOpen ? styles.overlayOpen : styles.overlayClosed
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden={!isMobileMenuOpen}
            />
          )}

          {/* 모바일 메뉴 */}
          <div
            className={`${styles.mobileMenu} ${
              isMobileMenuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosed
            } ${isScrolled ? styles.mobileMenuScrolled : ""}`}
          >
            <div className={styles.mobileMenuContent}>
              <Link
                href="/portfolio"
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                포트폴리오
              </Link>
              <Link
                href="/investment"
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                투자유치
              </Link>
              <Link
                href="/policyfunds"
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                정책자금
              </Link>
              <Link
                href="/ented"
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                창업교육
              </Link>
              <Link
                href="/bizsupport"
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                경영지원
              </Link>
              <Link
                href="/notice"
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                주의사항
              </Link>
              <a
                href="tel:02-2135-6221"
                className={styles.mobileConsultButton}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image
                  src="/images/main/phone.png"
                  alt="전화"
                  width={24}
                  height={24}
                  className={styles.phoneIcon}
                />
                02-2135-6221
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
);

Header.displayName = "Header";

export default Header;
