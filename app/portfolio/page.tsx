"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ConsultationProvider } from "../components/ConsultationContext";
import FloatingButton from "../components/FloatingButton";
import Image from "next/image";
import styles from "./portfolio.module.css";

export default function PortfolioPage() {
  return (
    <ConsultationProvider>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.banner_image_wrapper}>
            <Image
              src="/images/policyfunds/policy_banner.png"
              alt="포트폴리오 배너"
              fill
              className={styles.banner_image}
              priority
            />
          </div>
          <div className={styles.banner_overlay} />
          <div className={styles.banner_content}>
            <h1 className={styles.banner_title}>
              성공 사례로
              <br /> 증명하는 실력
            </h1>
            <p className={styles.banner_subtitle}>
              한평생 바로 기업과 함께한 기업들의 성공 스토리를 확인하세요.
              <br />
              창업부터 성장, EXIT까지 모든 단계에서 실질적인 성과를
              만들어냅니다.
            </p>
          </div>
        </section>
        <section className={styles.content_section}>
          <div className={styles.content_wrapper}>
            <p className={styles.content_description}>
              기업의 가치를 극대화하고 적절한 투자자를 발굴하는 전문 서비스
            </p>
            <div className={styles.consultation_form}>
              <div className={styles.consultation_form_inner}>
                <div className={styles.consultation_form_header}>
                  <div className={styles.consultation_icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <mask
                        id="mask0_427_20920"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="8"
                        y="1"
                        width="26"
                        height="40"
                      >
                        <path
                          d="M8.75 1.74994H33.25V40.2499H8.75V1.74994Z"
                          fill="white"
                        />
                        <path
                          d="M20.1242 24.1499H17.7267C15.2609 24.1499 14.0289 24.1499 13.5127 23.3414C12.9964 22.5347 13.5144 21.4164 14.5504 19.1799L19.3297 8.85494C19.9859 7.44094 20.3132 6.73394 20.6562 6.80744C20.9992 6.88444 20.9992 7.66494 20.9992 9.22245V16.9749C20.9992 17.3879 20.9992 17.5944 21.1269 17.7222C21.2547 17.8499 21.4612 17.8499 21.8742 17.8499H24.2717C26.7374 17.8499 27.9694 17.8499 28.4857 18.6584C29.0019 19.4652 28.4839 20.5834 27.4479 22.8199L22.6687 33.1449C22.0124 34.5589 21.6852 35.2659 21.3422 35.1924C20.9992 35.1137 20.9992 34.3349 20.9992 32.7774V25.0249C20.9992 24.6119 20.9992 24.4054 20.8714 24.2777C20.7437 24.1499 20.5372 24.1499 20.1242 24.1499Z"
                          fill="black"
                        />
                      </mask>
                      <g mask="url(#mask0_427_20920)">
                        <path
                          d="M20.1242 24.1499H17.7267C15.2609 24.1499 14.0289 24.1499 13.5127 23.3414C12.9964 22.5347 13.5144 21.4164 14.5504 19.1799L19.3297 8.85494C19.9859 7.44094 20.3132 6.73394 20.6562 6.80744C20.9992 6.88444 20.9992 7.66494 20.9992 9.22244V16.9749C20.9992 17.3879 20.9992 17.5944 21.1269 17.7222C21.2547 17.8499 21.4612 17.8499 21.8742 17.8499H24.2717C26.7374 17.8499 27.9694 17.8499 28.4857 18.6584C29.0019 19.4652 28.4839 20.5834 27.4479 22.8199L22.6687 33.1449C22.0124 34.5589 21.6852 35.2659 21.3422 35.1924C20.9992 35.1137 20.9992 34.3349 20.9992 32.7774V25.0249C20.9992 24.6119 20.9992 24.4054 20.8714 24.2777C20.7437 24.1499 20.5372 24.1499 20.1242 24.1499Z"
                          fill="white"
                          stroke="white"
                          strokeWidth="8.66667"
                        />
                      </g>
                    </svg>
                  </div>
                  <h2 className={styles.consultation_title}>컨설팅 신청하기</h2>
                </div>
                <div className={styles.form_inputs}>
                  <span className={styles.form_label}>이름</span>
                  <input
                    type="text"
                    placeholder="이름 혹은 회사명"
                    className={styles.form_input}
                  />
                  <div className={styles.form_contact_wrapper}>
                    <span className={styles.form_label}>연락처</span>
                    <input
                      type="tel"
                      placeholder="-제외 입력"
                      className={styles.form_input}
                    />
                  </div>
                  <div className={styles.form_privacy_wrapper}>
                    <label className={styles.form_privacy_label}>
                      <input
                        type="checkbox"
                        defaultChecked
                        className={styles.form_checkbox}
                      />
                      <span className={styles.form_privacy_text}>
                        <span className={styles.form_privacy_link}>
                          개인정보처리방침
                        </span>{" "}
                        동의
                      </span>
                    </label>
                  </div>
                  <button className={styles.form_submit_button}>
                    상담 신청
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.portfolio_cards_container}>
            {/* 성공 사례 카드들 */}
            <div className={styles.portfolio_card}>
              <div className={styles.portfolio_card_tags}>
                <span className={styles.portfolio_tag}>정책자금</span>
              </div>
              <div className={styles.portfolio_card_info}>
                <h3 className={styles.portfolio_company_name}>
                  스타트업 A사 (AI 솔루션)
                </h3>
                <p className={styles.portfolio_year}>2024</p>
              </div>
              <p className={styles.portfolio_description}>
                AI 기반 솔루션 개발 초기 단계에서 정책자금 확보가 필요했던
                스타트업으로, 바로 기업의 컨설팅을 통해 성공적으로 자금을
                확보했습니다.
              </p>
              <div className={styles.portfolio_metrics}>
                <span className={styles.portfolio_metric}>3.2억 확보</span>
                <span className={styles.portfolio_metric}>98% 승인율</span>
                <span className={styles.portfolio_metric}>3개월 완료</span>
              </div>
              <div className={styles.portfolio_results}>
                <h4 className={styles.portfolio_results_title}>주요 성과</h4>
                <p className={styles.portfolio_results_text}>
                  3.2억 정책자금 확보 · 250% 매출 성장
                </p>
              </div>
            </div>
            {/* 추가 카드들도 동일한 구조로 추가 가능 */}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </ConsultationProvider>
  );
}
