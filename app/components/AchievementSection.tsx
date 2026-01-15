"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import styles from "./AchievementSection.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AchievementSection() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const marqueeContainerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLParagraphElement>(null);
  const achievements = [
    {
      id: 1,
      approval: "3천만원 승인",
      quote:
        "급한 마음에 카드론을 쓰다 보니 신용점수가 떨어져 은행에서 이제 돈을 안빌려주더라고요. 고정비용은 계속 나가서 가게를 접어야 하나 막막했는데, 한평생 바로기업 부채 상환 컨설팅 덕분에 고금리를 저금리로 갈아타고 운전자금까지 확보했습니다. 감사합니다.",
      name: "요식업",
      company: "김OO 대표님 · 48세",
      imageId: 1,
      imageExtension: "png",
    },
    {
      id: 2,
      approval: "1억원 승인",
      quote:
        "가을겨울 시즌 준비해야 되는데 동대문에 결제할 사입비가 딱 떨어져서 은행에 갔더니 부과세 과세표준 증명원 떼오라고 하더라고요 그런데 창업 6개월차라 매출이 있어야 뭘 떼죠... 발만 동동 구르다 바로기업에서 컨설팅 받았는데 매출 없이도 되는 청년 전용 자금으로 콕 집어서 준비까지 다 도와주셨어요. 덕분에 물건 꽉 채워서 이번 달 매출 2배 뛰었습니다~!",
      name: "여성의류 쇼핑몰",
      company: "이OO 대표님 · 29세",
      imageId: 2,
      imageExtension: "jpg",
    },
    {
      id: 3,
      approval: "2억원 승인",
      quote:
        "SI 프로젝트 대금은 두 달 뒤에 들어오는데 당장 개발자들 월급 줄 돈이 말라버렸습니다. 사무실 보증금 외에는 따로 담보도 없고 재무재표도 엉망이던 차에 한평생 바로기업을 알게 되었습니다. 벤처기업 인증이랑 기술평가로 풀어보자고 하셔서 반신반의 했는데, 우리 코드랑 특허만으로 2억원이 나오네요. 개발자 유출 없이 프로젝트 잘 끝냈습니다.",
      name: "APP/웹 개발사",
      company: "박OO 대표님 · 36세",
      imageId: 3,
      imageExtension: "jpg",
    },
    {
      id: 4,
      approval: "2억원 승인",
      quote:
        "물량 터지는데 기계가 없었어요 원청에서 물량을 더 준다고 해도 공장 캐파가 꽉차서 거절하고 있었습니다. 새로 장비 들이자니 몇 억씩 하는 기계값 감당이 안되고... 포기하려던 찰나에 여기서 전략적으로 시설자금 뚫어주셔서 최신 장비 2대 한 번에 들였네요. 이제 납기 걱정 없이 쌩쌩 돌려요.",
      name: "제조업",
      company: "최OO 대표님 · 58세",
      imageId: 1,
      imageExtension: "png",
    },
    {
      id: 5,
      approval: "5천만원 승인",
      quote:
        "몇 년 전 코로나 때 부가세 좀 밀렸던 게 (지금은 완납된 상태) 전산에 계속 뜬다고 보증 재단에서 바로 거절하더라고요. 저도 살려고 했던 건데 죄인이 된 기분이였습니다... 그러다 문의하게 됐는데 저도 몰랐던 성실 상환 소명 제도라는 걸 찾아내서 서류를 같이 작성해 주셨어요. 역시 아는 게 중요하다는 걸 한 번 더 깨달았어요. 감사합니다.",
      name: "건자재 도소매업 ",
      company: "정OO 대표님  · 45세",
      imageId: 5,
      imageExtension: "jpg",
    },
    {
      id: 6,
      approval: "1억 5천만원 승인",
      quote:
        "관공서 인테리어 입찰에 성공했는데 마냥 기쁘지가 않더라고요. 공사비는 다 끝나야 들어오는데 당장 목재랑 유리 들여올 현금이 부족했거든요. 카드 깡이라도 해야 하나싶을 때 구매자금 전용대출을 연결해주셨습니다. 덕분에 자재상에 현금 결제해주고 더 싸게 물건 떼왔습니다. 공사비 마진도 확 늘었네요~",
      name: "실내건축업",
      company: "박OO 대표님 · 42세",
      imageId: 6,
      imageExtension: "jpg",
    },
    {
      id: 7,
      approval: "3억원 승인",
      quote:
        "거래처인 대형 마트에서 올해까지 해썹 인증 안 받아오면 계약 해지한다고 통보를 받았었어요. 그럴려면 공장 바닥부터 공조기까지 다 뜯어고쳐야 하는데 견적만 2억이 넘고 정말 폐업 위기였다고 봅니다. 다행히 시설 현대화 자금으로 10년 상환 장기 자금을 뚫어주셨는데 그 걸로 공장 깔끔하게 고치고 재계약 성공했습니다. 새출발 한 것 같아 보기도 좋네요.",
      name: "소스/조미료 제조업",
      company: "강OO 대표님 · 55세",
      imageId: 7,
      imageExtension: "jpg",
    },
    {
      id: 8,
      approval: "1억원 승인",
      quote:
        "매출은 늘었지만 현장 자금난에 시달려 카드론까지 고민하던 상황이었습니다. 지인에개 소개받은 한평생바로기업에서 운영 중인 블로그를 스마트기술로 인정받게 컨설팅해주신 덕분에, 혁신성장촉진자금 1억 원을 승인받았습니다. 저금리 자금 덕분에 숨통이 트여 현장도 무사히 마감했습니다!",
      name: "인테리어",
      company: "박OO 대표님 · 34세",
      imageId: 8,
      imageExtension: "jpg",
    },
    {
      id: 9,
      approval: "3,000만원 승인 ",
      quote:
        "신고 매출이 적고 신용점수도 낮아 은행 대출은 사실상 포기 상태였습니다. 하지만 한평생바로기업에서 매출이 낮아도 승인 가능한 틈새를 정확히 찾아주셔서 3,000만 원을 승인받았습니다. 덕분에 재고 확보에 필요한 자금을 융통해 매장 운영 걱정을 덜었네요 감사합니다",
      name: "건강기능식품 소매업",
      company: "김OO 대표님· 59세",
      imageId: 9,
      imageExtension: "jpg",
    },
    {
      id: 10,
      approval: "9,000만원 승인",
      quote:
        "현금서비스 이력 때문에 1금융권 거절당하고 막막했습니다. 팀장님께서 소진공 직접대출과 보증서로 나누는 쪼개기 전략과 여성기업/지역 가점을 꼼꼼히 챙겨주신 덕분에, 불가능해 보였던 9,000만 원을 확보해 바빳던 연말 연초 행사 시즌을 무사히 넘겼습니다.",
      name: "이벤트 기획",
      company: "정OO 대표님 · 52세",
      imageId: 10,
      imageExtension: "jpg",
    },
  ];

  // 무한 반복을 위해 원본 배열을 3번 반복 (더 많은 버퍼로 끊김 방지)
  const duplicatedAchievements = [
    ...achievements,
    ...achievements,
    ...achievements,
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // 제목이 먼저 나타남
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "sine.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // 서브타이틀이 제목 다음에 나타남
    if (subtitleRef.current) {
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "sine.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // marquee 컨테이너가 나타남
    if (marqueeContainerRef.current) {
      gsap.from(marqueeContainerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "sine.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // CTA 텍스트가 마지막에 나타남
    if (ctaRef.current) {
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.8,
        ease: "back.out(1.4)",
        delay: 0.6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  // CSS 애니메이션을 위한 정확한 너비 계산
  useEffect(() => {
    if (!marqueeRef.current) return;

    const marquee = marqueeRef.current;

    const calculateWidth = () => {
      // DOM이 완전히 렌더링된 후 계산
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const cards = marquee.querySelectorAll(`.${styles.card}`);
          const cardsPerSet = cards.length / 3; // 3번 복제했으므로

          if (cards.length > 0 && cardsPerSet > 0) {
            const firstCard = cards[0] as HTMLElement;
            const secondSetFirstCard = cards[cardsPerSet] as HTMLElement;

            if (firstCard && secondSetFirstCard) {
              // offsetLeft를 사용한 정확한 계산
              const firstCardStart = firstCard.offsetLeft;
              const secondSetStart = secondSetFirstCard.offsetLeft;
              const totalWidth = secondSetStart - firstCardStart;

              // CSS 변수로 설정
              marquee.style.setProperty("--marquee-offset", `-${totalWidth}px`);

              console.log("Calculated offset:", totalWidth, "px");
            }
          }
        });
      });
    };

    // 초기 계산
    const timeoutId1 = setTimeout(calculateWidth, 100);
    const timeoutId2 = setTimeout(calculateWidth, 500);
    const timeoutId3 = setTimeout(calculateWidth, 1000);

    // 리사이즈 시 재계산
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(calculateWidth, 100);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId3);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <div className={styles.header}>
        <h2 ref={titleRef} className={styles.title}>
          한평생 바로기업의 성과
        </h2>
        <p ref={subtitleRef} className={styles.subtitle}>
          대표님들의 성공과 성장으로 보여드립니다
        </p>
      </div>
      <div ref={marqueeContainerRef} className={styles.marqueeContainer}>
        <div className={styles.marqueeWrapper}>
          <div
            ref={marqueeRef}
            className={`${styles.marquee} ${styles.marqueeLeft}`}
          >
            {duplicatedAchievements.map((achievement, index) => (
              <div key={`marquee-item-${index}`} className={styles.card}>
                <div className={styles.contentTop}>
                  {achievement.approval && (
                    <div className={styles.approvalBadge}>
                      {achievement.approval}
                    </div>
                  )}
                  <p
                    className={styles.quote}
                    dangerouslySetInnerHTML={{ __html: achievement.quote }}
                  />
                </div>
                <div className={styles.userInfo}>
                  <div className={styles.avatar}>
                    <Image
                      src={`/images/main/human/profile_${String(
                        achievement.imageId || 1
                      ).padStart(3, "0")}.${
                        achievement.imageExtension || "png"
                      }`}
                      alt="Avatar"
                      width={64}
                      height={64}
                      className={styles.avatarImage}
                      priority={index < 2}
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                    <div className={styles.avatarOverlay}></div>
                  </div>
                  <div className={styles.userDetails}>
                    <p className={styles.name}>{achievement.name}</p>
                    <p className={styles.company}>{achievement.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
