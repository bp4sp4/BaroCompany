import Image from "next/image";
import styles from "./StageSelector.module.css";

interface StageSelectorProps {
  theme?: "light" | "dark";
}

export default function StageSelector({ theme = "light" }: StageSelectorProps) {
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

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
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
              <button className={styles.stageButton}>
                {button.title}
              </button>
              {theme === "light" && (
                <p className={styles.buttonDescription}>{button.subtitle}</p>
              )}
              {index === 0 && (
                <div className={styles.connector}></div>
              )}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

