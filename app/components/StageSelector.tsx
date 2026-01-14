"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./StageSelector.module.css";

interface StageSelectorProps {
  theme?: "light" | "dark";
}

export default function StageSelector({ theme = "dark" }: StageSelectorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const connectorSvgRef = useRef<SVGSVGElement>(null);
  const connectorDivRef = useRef<HTMLDivElement>(null);
  const [is1024Screen, setIs1024Screen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      // 1024px부터 1279px까지
      setIs1024Screen(width >= 1024 && width <= 1279);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const stageButtons = [
    {
      id: 1,
      title: "예비창업",
      description: "창업을 준비중이에요",
      subtitle: "창업을 준비중이에요",
      href: "/policyfunds",
    },
    {
      id: 2,
      title: "기초자금",
      description: "자금이 필요해요",
      subtitle: "자금이 필요해요",
      href: "/policyfunds",
    },
    {
      id: 3,
      title: "경영지원",
      description: "경영 관련 도움이 필요해요",
      subtitle: "경영 관련 도움이 필요해요",
      href: "/bizsupport",
    },
    {
      id: 4,
      title: "투자유치",
      description: "투자를 받고 싶어요",
      subtitle: "투자를 받고 싶어요",
      href: "/investment",
    },
  ];

  return (
    <div ref={containerRef} className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.innerContainer}>
        <div className={styles.introSection}>
          <Image
            src="/images/main/smile.png"
            alt="smile"
            width={48}
            height={48}
            className={styles.emoji}
            priority
            loading="eager"
          />
          <div className={styles.textSection}>
            <h2 className={styles.question}>대표님은 어떤 상황이신가요?</h2>
            <p className={styles.description}>
              대표님 단계에 알맞는 프로그램이 준비되어있습니다.
            </p>
          </div>
        </div>
        <div className={styles.buttonsSection}>
          {stageButtons.map((button, index) => (
            <div key={button.id} style={{ display: "contents" }}>
              <div className={styles.buttonWrapper}>
                <div className={styles.speechBubble}>{button.description}</div>
                <Link href={button.href} className={styles.stageButton}>
                  {button.title}
                </Link>
                {index === 0 && is1024Screen ? (
                  <svg
                    ref={connectorSvgRef}
                    className={styles.connector}
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="1"
                    viewBox="0 0 1000 1"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 0.5L1000 0.5"
                      stroke="#FAFAFA"
                      strokeDasharray="3 2"
                      strokeWidth="1"
                    />
                  </svg>
                ) : index === 0 ? (
                  <div ref={connectorDivRef} className={styles.connector}></div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
