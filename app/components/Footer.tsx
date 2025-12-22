import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.companyNameWrapper}>
          <Image
            src="/main/logo_white.png"
            alt="한평생 바로기업"
            width={200}
            height={47}
            className={styles.logo}
          />
          <button className={styles.companyNameButton}>패밀리 사이트</button>
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



