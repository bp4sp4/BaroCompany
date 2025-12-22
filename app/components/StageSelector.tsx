"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./StageSelector.module.css";

gsap.registerPlugin(ScrollTrigger);

interface StageSelectorProps {
  theme?: "light" | "dark";
}

export default function StageSelector({ theme = "light" }: StageSelectorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLButtonElement[]>([]);
  const connectorRef = useRef<HTMLDivElement>(null);
  const stageButtons = [
    {
      id: 1,
      title: "예비창업",
      description: "창업을 준비중이에요",
      subtitle: "창업을 준비중이에요",
    },
    {
      id: 2,
      title: "기초자금",
      description: "자금이 필요해요",
      subtitle: "자금이 필요해요",
    },
    {
      id: 3,
      title: "경영지원",
      description: "경영 관련 도움이 필요해요",
      subtitle: "경영 관련 도움이 필요해요",
    },
    {
      id: 4,
      title: "투자유치",
      description: "투자를 받고 싶어요",
      subtitle: "투자를 받고 싶어요",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const buttons = buttonsRef.current;

    // 각 버튼이 화면에 들어올 때 순차적으로 나타나는 애니메이션 (촤라라락)
    buttons.forEach((button, index) => {
      if (!button) return;

      gsap.from(button, {
        opacity: 0,
        scale: 0.8,
        y: 20,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        delay: index * 0.1, // 순차적으로 나타남
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, [theme]);

  return (
    <div ref={containerRef} className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.innerContainer}>
        <div className={styles.introSection}>
        <img
          src="/main/smile.png"
          alt="smile"
          width={48}
          height={48}
          className={styles.emoji}
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
          <div key={button.id} style={{ display: 'contents' }}>
            <div className={styles.buttonWrapper}>
              {theme === "dark" && (
                <div className={styles.speechBubble}>{button.description}</div>
              )}
              <button
                ref={(el) => {
                  if (el) buttonsRef.current[index] = el;
                }}
                className={styles.stageButton}
              >
                {button.title}
              </button>
              {theme === "light" && (
                <p className={styles.buttonDescription}>{button.subtitle}</p>
              )}
              {index === 0 && (
                <div ref={connectorRef} className={styles.connector}></div>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

