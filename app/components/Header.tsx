import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Image
            src="/main/logo.png"
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
}

