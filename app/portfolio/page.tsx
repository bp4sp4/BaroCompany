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
          <div className={styles.banner_image_wrapper}></div>
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
        <section className={styles.success_cases_section}>
          <div className={styles.success_cases_wrapper}>
            <div className={styles.success_cases_header}>
              <p className={styles.success_cases_subtitle}>
                한평생 바로 기업의 컨설팅으로 성공한 기업들의 실제 성과입니다
              </p>
              <h2 className={styles.success_cases_title}>주요 성공 사례</h2>
            </div>
            <div className={styles.success_cases_cards_container}>
              <div className={styles.success_case_card}>
                <div className={styles.success_case_card_top}>
                  <div className={styles.success_case_card_tags}>
                    <span className={styles.success_case_tag}>정책자금</span>
                  </div>
                  <div className={styles.success_case_card_info}>
                    <div className={styles.success_case_company_wrapper}>
                      <h3 className={styles.success_case_company_name}>
                        스타트업 A사 (AI 솔루션)
                      </h3>
                      <div className={styles.success_case_year_wrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1"
                          height="20"
                          viewBox="0 0 1 20"
                          fill="none"
                          className={styles.success_case_separator}
                        >
                          <path d="M0.5 0V19.5" stroke="#919191" />
                        </svg>
                        <span className={styles.success_case_year}>2024</span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.success_case_description}>
                    초기 단계 스타트업으로 정책자금 신청 전략 수립 및 서류 준비
                    지원을 통해 빠른 자금 확보를 실현했습니다.
                  </p>
                  <div className={styles.success_case_metrics}>
                    <span className={styles.success_case_metric}>
                      3.2억 확보
                    </span>
                    <span className={styles.success_case_metric}>
                      98% 승인율
                    </span>
                    <span className={styles.success_case_metric}>
                      3개월 완료
                    </span>
                  </div>
                </div>
                <div className={styles.success_case_results}>
                  <h4 className={styles.success_case_results_title}>
                    주요 성과
                  </h4>
                  <p className={styles.success_case_results_text}>
                    3.2억 정책자금 확보 • 250% 매출 성장
                  </p>
                </div>
              </div>
              <div className={styles.success_case_card}>
                <div className={styles.success_case_card_top}>
                  <div className={styles.success_case_card_tags}>
                    <span className={styles.success_case_tag}>투자유치</span>
                  </div>
                  <div className={styles.success_case_card_info}>
                    <div className={styles.success_case_company_wrapper}>
                      <h3 className={styles.success_case_company_name}>
                        중소기업 B사 (핀테크)
                      </h3>
                      <div className={styles.success_case_year_wrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1"
                          height="20"
                          viewBox="0 0 1 20"
                          fill="none"
                          className={styles.success_case_separator}
                        >
                          <path d="M0.5 0V19.5" stroke="#919191" />
                        </svg>
                        <span className={styles.success_case_year}>2024</span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.success_case_description}>
                    기업 가치 평가, 투자자 발굴, 투자 협상을 통해 성공적인 투자
                    유치를 달성했습니다.
                  </p>
                  <div className={styles.success_case_metrics}>
                    <span className={styles.success_case_metric}>
                      10억 투자
                    </span>
                    <span className={styles.success_case_metric}>
                      3개월 소요
                    </span>
                    <span className={styles.success_case_metric}>
                      성공적 클로징
                    </span>
                  </div>
                </div>
                <div className={styles.success_case_results}>
                  <h4 className={styles.success_case_results_title}>
                    주요 성과
                  </h4>
                  <p className={styles.success_case_results_text}>
                    시리즈A 10억 투자 유치 • 450% 매출 성장
                  </p>
                </div>
              </div>
              <div className={styles.success_case_card}>
                <div className={styles.success_case_card_top}>
                  <div className={styles.success_case_card_tags}>
                    <span className={styles.success_case_tag}>경영지원</span>
                  </div>
                  <div className={styles.success_case_card_info}>
                    <div className={styles.success_case_company_wrapper}>
                      <h3 className={styles.success_case_company_name}>
                        제조업체 C사 (스마트팩토리)
                      </h3>
                      <div className={styles.success_case_year_wrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1"
                          height="20"
                          viewBox="0 0 1 20"
                          fill="none"
                          className={styles.success_case_separator}
                        >
                          <path d="M0.5 0V19.5" stroke="#919191" />
                        </svg>
                        <span className={styles.success_case_year}>2023</span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.success_case_description}>
                    조직 구조 개선 및 프로세스 최적화를 통해 효율성을 높이고
                    수익성을 강화했습니다.
                  </p>
                  <div className={styles.success_case_metrics}>
                    <span className={styles.success_case_metric}>35% 증가</span>
                    <span className={styles.success_case_metric}>
                      6개월 진행
                    </span>
                    <span className={styles.success_case_metric}>지속성장</span>
                  </div>
                </div>
                <div className={styles.success_case_results}>
                  <h4 className={styles.success_case_results_title}>
                    주요 성과
                  </h4>
                  <p className={styles.success_case_results_text}>
                    매출 35% 증가 • 직원 50명 증원
                  </p>
                </div>
              </div>
              <div className={styles.success_case_card}>
                <div className={styles.success_case_card_top}>
                  <div className={styles.success_case_card_tags}>
                    <span className={styles.success_case_tag}>창업교육</span>
                    <span className={styles.success_case_tag}>정책자금</span>
                  </div>
                  <div className={styles.success_case_card_info}>
                    <div className={styles.success_case_company_wrapper}>
                      <h3 className={styles.success_case_company_name}>
                        서비스업 D사 (O2O 플랫폼)
                      </h3>
                      <div className={styles.success_case_year_wrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1"
                          height="20"
                          viewBox="0 0 1 20"
                          fill="none"
                          className={styles.success_case_separator}
                        >
                          <path d="M0.5 0V19.5" stroke="#919191" />
                        </svg>
                        <span className={styles.success_case_year}>2023</span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.success_case_description}>
                    창업 기초부터 사업계획서 작성, 자금 조달까지 전 과정을
                    지원하여 성공적인 사업 시작을 이끌었습니다.
                  </p>
                  <div className={styles.success_case_metrics}>
                    <span className={styles.success_case_metric}>1년 흑자</span>
                    <span className={styles.success_case_metric}>
                      창업 성공
                    </span>
                    <span className={styles.success_case_metric}>
                      지속 성장
                    </span>
                  </div>
                </div>
                <div className={styles.success_case_results}>
                  <h4 className={styles.success_case_results_title}>
                    주요 성과
                  </h4>
                  <p className={styles.success_case_results_text}>
                    성공적 창업 및 1년 내 흑자 달성 • 월 3억 거래액
                  </p>
                </div>
              </div>
              <div className={styles.success_case_card}>
                <div className={styles.success_case_card_top}>
                  <div className={styles.success_case_card_tags}>
                    <span className={styles.success_case_tag}>투자유치</span>
                    <span className={styles.success_case_tag}>경영지원</span>
                  </div>
                  <div className={styles.success_case_card_info}>
                    <div className={styles.success_case_company_wrapper}>
                      <h3 className={styles.success_case_company_name}>
                        이커머스 E사 (패션)
                      </h3>
                      <div className={styles.success_case_year_wrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1"
                          height="20"
                          viewBox="0 0 1 20"
                          fill="none"
                          className={styles.success_case_separator}
                        >
                          <path d="M0.5 0V19.5" stroke="#919191" />
                        </svg>
                        <span className={styles.success_case_year}>2024</span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.success_case_description}>
                    초기 투자 후 추가 투자 유치 및 경영 최적화를 통해 급속한
                    성장을 달성했습니다.
                  </p>
                  <div className={styles.success_case_metrics}>
                    <span className={styles.success_case_metric}>
                      25억 투자
                    </span>
                    <span className={styles.success_case_metric}>
                      6개월 소요
                    </span>
                    <span className={styles.success_case_metric}>
                      글로벌 진출
                    </span>
                  </div>
                </div>
                <div className={styles.success_case_results}>
                  <h4 className={styles.success_case_results_title}>
                    주요 성과
                  </h4>
                  <p className={styles.success_case_results_text}>
                    시리즈B 25억 투자 유치 • 1,000% 매출 성장
                  </p>
                </div>
              </div>
              <div className={styles.success_case_card}>
                <div className={styles.success_case_card_top}>
                  <div className={styles.success_case_card_tags}>
                    <span className={styles.success_case_tag}>정책자금</span>
                    <span className={styles.success_case_tag}>투자유치</span>
                  </div>
                  <div className={styles.success_case_card_info}>
                    <div className={styles.success_case_company_wrapper}>
                      <h3 className={styles.success_case_company_name}>
                        바이오 F사 (헬스케어)
                      </h3>
                      <div className={styles.success_case_year_wrapper}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1"
                          height="20"
                          viewBox="0 0 1 20"
                          fill="none"
                          className={styles.success_case_separator}
                        >
                          <path d="M0.5 0V19.5" stroke="#919191" />
                        </svg>
                        <span className={styles.success_case_year}>2024</span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.success_case_description}>
                    정부 정책자금과 민간 투자 유치를 동시에 추진하여 충분한
                    자금을 확보했습니다.
                  </p>
                  <div className={styles.success_case_metrics}>
                    <span className={styles.success_case_metric}>
                      13.5억 확보
                    </span>
                    <span className={styles.success_case_metric}>
                      4개월 완료
                    </span>
                    <span className={styles.success_case_metric}>
                      R&D 투자 확대
                    </span>
                  </div>
                </div>
                <div className={styles.success_case_results}>
                  <h4 className={styles.success_case_results_title}>
                    주요 성과
                  </h4>
                  <p className={styles.success_case_results_text}>
                    5.5억 정책자금 • 시리즈A 8억 투자 • 임직원 30명 증원
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.portfolio_achievements_section}>
          <div className={styles.portfolio_achievements_wrapper}>
            <div className={styles.portfolio_achievements_header}>
              <h2 className={styles.portfolio_achievements_title}>
                포트폴리오 분야별 성과
              </h2>
              <p className={styles.portfolio_achievements_subtitle}>
                다양한 산업과 분야에서 입증된 컨설팅 성과 건수
              </p>
            </div>
            <div className={styles.portfolio_achievements_metrics}>
              <div className={styles.portfolio_achievement_item}>
                <span className={styles.portfolio_achievement_tag}>
                  정책자금 컨설팅
                </span>
                <span className={styles.portfolio_achievement_number}>
                  180+
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="2"
                viewBox="0 0 50 2"
                fill="none"
                className={styles.portfolio_achievement_separator}
              >
                <path d="M0 1L50 1" stroke="#919191" strokeWidth="2" />
              </svg>
              <div className={styles.portfolio_achievement_item}>
                <span className={styles.portfolio_achievement_tag}>
                  투자유치 지원
                </span>
                <span className={styles.portfolio_achievement_number}>
                  120+
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="2"
                viewBox="0 0 50 2"
                fill="none"
                className={styles.portfolio_achievement_separator}
              >
                <path d="M0 1L50 1" stroke="#919191" strokeWidth="2" />
              </svg>
              <div className={styles.portfolio_achievement_item}>
                <span className={styles.portfolio_achievement_tag}>
                  경영지원 컨설팅
                </span>
                <span className={styles.portfolio_achievement_number}>
                  150+
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.portfolio_features_section}>
          <div className={styles.portfolio_features_wrapper}>
            <div className={styles.portfolio_features_text_wrapper}>
              <p className={styles.portfolio_features_subtitle}>
                한평생 바로 기업과 함께한 기업들의 공통 특징
              </p>
              <h2 className={styles.portfolio_features_title}>
                포트폴리오 기업의 특징
              </h2>
            </div>
            <div className={styles.portfolio_features_cards}>
              <div className={styles.portfolio_feature_card}>
                <div className={styles.portfolio_feature_card_top}>
                  <div className={styles.portfolio_feature_icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <mask
                        id="mask0_407_17157"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="10"
                        y="2"
                        width="32"
                        height="48"
                        className={styles.portfolio_feature_icon_mask}
                      >
                        <path
                          d="M10.832 2.16663H41.1654V49.8333H10.832V2.16663Z"
                          fill="white"
                        />
                        <path
                          d="M24.9145 29.9H21.9461C18.8933 29.9 17.368 29.9 16.7288 28.899C16.0896 27.9001 16.731 26.5156 18.0136 23.7466L23.9308 10.9633C24.7433 9.21264 25.1485 8.33731 25.5731 8.42831C25.9978 8.52364 25.9978 9.48998 25.9978 11.4183V21.0166C25.9978 21.528 25.9978 21.7836 26.156 21.9418C26.3141 22.1 26.5698 22.1 27.0811 22.1H30.0495C33.1023 22.1 34.6276 22.1 35.2668 23.101C35.906 24.0998 35.2646 25.4843 33.982 28.2533L28.0648 41.0366C27.2523 42.7873 26.8471 43.6626 26.4225 43.5716C25.9978 43.4741 25.9978 42.51 25.9978 40.5816V30.9833C25.9978 30.472 25.9978 30.2163 25.8396 30.0581C25.6815 29.9 25.4258 29.9 24.9145 29.9Z"
                          fill="black"
                        />
                      </mask>
                      <g mask="url(#mask0_407_17157)">
                        <path
                          d="M24.9145 29.9H21.9461C18.8933 29.9 17.368 29.9 16.7288 28.899C16.0896 27.9001 16.731 26.5156 18.0136 23.7466L23.9308 10.9633C24.7433 9.21264 25.1485 8.33731 25.5731 8.42831C25.9978 8.52365 25.9978 9.48998 25.9978 11.4183V21.0166C25.9978 21.528 25.9978 21.7836 26.156 21.9418C26.3141 22.1 26.5698 22.1 27.0811 22.1H30.0495C33.1023 22.1 34.6276 22.1 35.2668 23.101C35.906 24.0998 35.2646 25.4843 33.982 28.2533L28.0648 41.0366C27.2523 42.7873 26.8471 43.6626 26.4225 43.5716C25.9978 43.4741 25.9978 42.51 25.9978 40.5816V30.9833C25.9978 30.472 25.9978 30.2163 25.8396 30.0581C25.6815 29.9 25.4258 29.9 24.9145 29.9Z"
                          stroke="#0051FF"
                          strokeWidth={8.66667}
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 className={styles.portfolio_feature_title}>빠른 성장</h3>
                  <p className={styles.portfolio_feature_subtitle}>
                    평균 연 50% 이상의
                    <br />
                    매출 성장 달성
                  </p>
                </div>
                <div className={styles.portfolio_feature_card_bottom}>
                  <p className={styles.portfolio_feature_description}>
                    월평균 20% 성장
                  </p>
                  <p className={styles.portfolio_feature_description}>
                    시장 점유율 확대
                  </p>
                  <p className={styles.portfolio_feature_description}>
                    신규 시장 진출
                  </p>
                </div>
              </div>
              <div className={styles.portfolio_feature_card}>
                <div className={styles.portfolio_feature_card_top}>
                  <div className={styles.portfolio_feature_icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      className={styles.portfolio_feature_icon_mask}
                    >
                      <path
                        d="M20.5859 6.5H31.4193C32.2812 6.5 33.1079 6.84241 33.7174 7.4519C34.3269 8.0614 34.6693 8.88805 34.6693 9.75C34.6693 11.7612 33.8703 13.6901 32.4482 15.1122C31.026 16.5344 29.0972 17.3333 27.0859 17.3333H24.9193C22.908 17.3333 20.9792 16.5344 19.557 15.1122C18.1349 13.6901 17.3359 11.7612 17.3359 9.75C17.3359 8.88805 17.6783 8.0614 18.2878 7.4519C18.8973 6.84241 19.724 6.5 20.5859 6.5Z"
                        stroke="#0051FF"
                        strokeWidth={4.33333}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.66797 36.8334V34.6667C8.66797 30.0696 10.4942 25.6608 13.7448 22.4102C16.9954 19.1596 21.4042 17.3334 26.0013 17.3334C30.5984 17.3334 35.0072 19.1596 38.2578 22.4102C41.5085 25.6608 43.3346 30.0696 43.3346 34.6667V36.8334C43.3346 39.1319 42.4215 41.3363 40.7962 42.9616C39.1709 44.5869 36.9665 45.5 34.668 45.5H17.3346C15.0361 45.5 12.8317 44.5869 11.2064 42.9616C9.58106 41.3363 8.66797 39.1319 8.66797 36.8334Z"
                        stroke="#0051FF"
                        strokeWidth={4.33333}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className={styles.portfolio_feature_title}>
                    안정적 자금 조달
                  </h3>
                  <p className={styles.portfolio_feature_subtitle}>
                    정책자금 및 투자 유치를 통한
                    <br />
                    충분한 자본 확보
                  </p>
                </div>
                <div className={styles.portfolio_feature_card_bottom}>
                  <p className={styles.portfolio_feature_description}>
                    평균 3억 원 확보
                  </p>
                  <p className={styles.portfolio_feature_description}>
                    90% 이상 성공률
                  </p>
                  <p className={styles.portfolio_feature_description}>
                    신속한 처리
                  </p>
                </div>
              </div>
              <div className={styles.portfolio_feature_card}>
                <div className={styles.portfolio_feature_card_top}>
                  <div className={styles.portfolio_feature_icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      className={styles.portfolio_feature_icon_mask}
                    >
                      <path
                        d="M17.3346 8.66663H8.66797M8.66797 8.66663V17.3333M8.66797 8.66663L19.5013 19.5M34.668 8.66663H43.3346M43.3346 8.66663V17.3333M43.3346 8.66663L32.5013 19.5M17.3346 43.3333H8.66797M8.66797 43.3333V34.6666M8.66797 43.3333L19.5013 32.5M34.668 43.3333H43.3346M43.3346 43.3333V34.6666M43.3346 43.3333L32.5013 32.5"
                        stroke="#0051FF"
                        strokeWidth={4.33333}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className={styles.portfolio_feature_title}>조직 확장</h3>
                  <p className={styles.portfolio_feature_subtitle}>
                    효율적인 조직 구조로
                    <br />
                    인한 인력 증원
                  </p>
                </div>
                <div className={styles.portfolio_feature_card_bottom}>
                  <p className={styles.portfolio_feature_description}>
                    평균 30명 증원
                  </p>
                  <p className={styles.portfolio_feature_description}>
                    조직 최적화
                  </p>
                  <p className={styles.portfolio_feature_description}>
                    프로세스 개선
                  </p>
                </div>
              </div>
              <div className={styles.portfolio_feature_card}>
                <div className={styles.portfolio_feature_card_top}>
                  <div className={styles.portfolio_feature_icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      className={styles.portfolio_feature_icon_mask}
                    >
                      <path
                        d="M25.9987 47.6667C14.0322 47.6667 4.33203 37.9665 4.33203 26C4.33203 14.0335 14.0322 4.33337 25.9987 4.33337C37.9652 4.33337 47.6654 14.0335 47.6654 26C47.6654 37.9665 37.9652 47.6667 25.9987 47.6667ZM21.037 42.6119C18.8994 38.0777 17.6611 33.1722 17.3905 28.1667H8.7997C9.22183 31.5008 10.6029 34.6406 12.7752 37.2049C14.9476 39.7691 17.8177 41.6475 21.037 42.6119ZM21.7304 28.1667C22.0575 33.4512 23.5677 38.415 25.9987 42.796C28.4957 38.2994 29.9542 33.3006 30.267 28.1667H21.7304ZM43.1977 28.1667H34.6069C34.3363 33.1722 33.098 38.0777 30.9604 42.6119C34.1797 41.6475 37.0498 39.7691 39.2222 37.2049C41.3945 34.6406 42.7756 31.5008 43.1977 28.1667ZM8.7997 23.8334H17.3905C17.6611 18.8279 18.8994 13.9224 21.037 9.38821C17.8177 10.3526 14.9476 12.231 12.7752 14.7952C10.6029 17.3595 9.22183 20.4993 8.7997 23.8334ZM21.7325 23.8334H30.2649C29.9527 18.6996 28.495 13.7009 25.9987 9.20404C23.5017 13.7007 22.0432 18.6994 21.7304 23.8334M30.9582 9.38821C33.0965 13.9222 34.3356 18.8278 34.6069 23.8334H43.1977C42.7756 20.4993 41.3945 17.3595 39.2222 14.7952C37.0498 12.231 34.1797 10.3526 30.9604 9.38821"
                        fill="#0051FF"
                      />
                    </svg>
                  </div>
                  <h3 className={styles.portfolio_feature_title}>
                    글로벌 진출
                  </h3>
                  <p className={styles.portfolio_feature_subtitle}>
                    국내 성공 이후
                    <br />
                    해외 시장 진출 달성
                  </p>
                </div>
                <div className={styles.portfolio_feature_card_bottom}>
                  <p className={styles.portfolio_feature_description}>
                    수출 시작
                  </p>
                  <p className={styles.portfolio_feature_description}>
                    국제 파트너쉽
                  </p>
                  <p className={styles.portfolio_feature_description}>
                    다국적 운영
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.cta_section}>
          <div className={styles.cta_text_wrapper}>
            <h2 className={styles.cta_title}>
              당신의 성공 사례도
              <br /> 만들어보세요
            </h2>
            <p className={styles.cta_description}>
              한평생 바로 기업과 함께 성공의 길을 걸어보세요
            </p>
          </div>
          <button className={styles.cta_button}>
            지금 바로 상담하기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className={styles.cta_button_arrow}
            >
              <path
                d="M6.18752 16.3928L25.7391 16.3928L18.4946 9.49335C17.8356 8.86572 17.8356 7.84836 18.4946 7.22073C19.1536 6.59309 20.2218 6.59309 20.8809 7.22073L31.006 16.8637L31.1214 16.9861C31.662 17.6174 31.6238 18.5479 31.006 19.1363L20.8809 28.7793C20.2218 29.4069 19.1536 29.4069 18.4946 28.7793C17.8356 28.1516 17.8356 27.1343 18.4946 26.5066L25.7391 19.6072L6.18752 19.6072C5.25553 19.6072 4.5 18.8876 4.5 18C4.5 17.1124 5.25553 16.3928 6.18752 16.3928Z"
                fill="white"
              />
            </svg>
          </button>
        </section>
      </main>
      <Footer />
      <FloatingButton />
    </ConsultationProvider>
  );
}
