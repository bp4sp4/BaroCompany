"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ConsultationProvider } from "../components/ConsultationContext";
import FloatingButton from "../components/FloatingButton";
import Image from "next/image";
import styles from "./policyfunds.module.css";

export default function PolicyFundsPage() {
  return (
    <ConsultationProvider>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.banner_image_wrapper}>
            <Image
              src="/policyfunds/policy_banner.png"
              alt="정책자금 배너"
              fill
              className={styles.banner_image}
              priority
            />
          </div>
          <div className={styles.banner_overlay} />
          <div className={styles.banner_content}>
            <h1 className={styles.banner_title}>
              정책자금으로
              <br /> 기업 자금을 확보하세요
            </h1>
            <p className={styles.banner_subtitle}>
              정부 지원 정책자금은 기업의 성장을 위한 가장 효율적인 자금 조달
              방법입니다.
              <br /> 한평생 바로 기업의 전문 컨설턴트가 최대 지원액을 받을 수
              있도록 완벽하게 지원합니다.
            </p>
          </div>
        </section>
        <section className={styles.content_section}>
          <div className={styles.content_text_wrapper}>
            <p className={styles.content_subtitle}>
              최적의 조건으로 지원받는 다양한 프로그램
            </p>
            <h2 className={styles.content_title}>정책자금 종류</h2>
          </div>
          <div className={styles.cards_container}>
            <div className={styles.fund_card}>
              <div className={styles.card_top}>
                <div className={styles.card_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M27.084 6.5C28.8607 6.5 30.3123 7.917 30.347 9.698L30.399 11.5093L30.4575 12.9718L30.581 15.3118L30.6655 16.6357L30.7132 17.3333H35.6077C37.5707 17.3333 38.9768 19.0082 38.9227 20.7892L38.9118 21.7642L38.9227 22.3708L38.9443 23.0533L38.9877 23.8138L39.0462 24.6502L39.1306 25.5602L39.239 26.5482L39.3777 27.6055L39.5488 28.7387L39.6463 29.3302L39.8695 30.5695L40.1317 31.8782C40.5108 33.67 41.0027 35.6482 41.6397 37.804L42.1445 39.4507C42.3222 40.014 42.5099 40.586 42.7078 41.1667H45.5007C46.0753 41.1667 46.6264 41.3949 47.0327 41.8013C47.439 42.2076 47.6673 42.7587 47.6673 43.3333C47.6673 43.908 47.439 44.4591 47.0327 44.8654C46.6264 45.2717 46.0753 45.5 45.5007 45.5H6.50065C5.92602 45.5 5.37492 45.2717 4.96859 44.8654C4.56226 44.4591 4.33398 43.908 4.33398 43.3333C4.33398 42.7587 4.56226 42.2076 4.96859 41.8013C5.37492 41.3949 5.92602 41.1667 6.50065 41.1667H9.22415C10.7083 36.0577 11.6357 30.9898 12.2077 26.4312L12.4178 24.635L12.5933 22.9017L12.6692 22.0588L12.7992 20.4295L12.8988 18.876L12.9747 17.4092L13.0288 16.0333L13.0635 14.755L13.0852 13.5807V11.7173L13.0592 10.1833L13.0505 9.88217C13.0357 9.44332 13.1093 9.00597 13.2671 8.59619C13.4248 8.18641 13.6635 7.81258 13.9688 7.49698C14.2741 7.18138 14.6398 6.93046 15.0441 6.75918C15.4484 6.58789 15.8831 6.49975 16.3222 6.5H27.084ZM26.0397 10.8333H17.4077L17.4207 12.0077L17.4185 13.455L17.4012 14.6272L17.3687 15.9055L17.3188 17.2792L17.2473 18.7438L17.204 19.5108L17.0957 21.1012L16.957 22.7695L16.8768 23.6275L16.6948 25.3955C16.1538 30.3648 15.2552 35.2887 14.006 40.1288L13.7265 41.1667H29.7598L29.346 39.2687L29.151 38.324L28.7827 36.4477L28.4468 34.5908L28.1392 32.7578L27.8575 30.9552L27.6018 29.1872L27.37 27.4603L27.1642 25.7747L26.8933 23.3437L26.7373 21.7923L26.603 20.3038L26.3842 17.5305L26.226 15.0605L26.1393 13.4355L26.0527 11.2038L26.0397 10.8333ZM34.5785 21.6667H31.0793L31.1942 22.8107L31.4563 25.1875C32.0305 30.0603 32.8972 35.5875 34.2058 41.1667H38.1427C37.5562 39.338 37.0572 37.6133 36.6455 35.9927L36.2555 34.411L35.9197 32.9008L35.6293 31.4643L35.3823 30.1015L35.274 29.4515L35.0855 28.2013C35.0303 27.8119 34.9798 27.4219 34.9338 27.0313L34.8125 25.935L34.7215 24.921L34.6565 23.985L34.6132 23.1313L34.5807 22.0025L34.5785 21.6667Z"
                      fill="#0051FF"
                    />
                  </svg>
                </div>
                <div className={styles.card_title_wrapper}>
                  <h3 className={styles.card_title}>운전자금</h3>
                  <span className={styles.popular_tag}>인기</span>
                </div>
                <p className={styles.card_description}>
                  급여·임차료·원자재비 등 기업의 일상적인 운영에 필요한 자금
                </p>
              </div>
              <div className={styles.card_info}>
                <div className={styles.card_info_item}>
                  <span className={styles.card_info_label}>지원액</span>
                  <span className={styles.card_info_value}>최대 5억 원</span>
                </div>
                <div className={styles.card_info_item}>
                  <span className={styles.card_info_label}>금리</span>
                  <span className={styles.card_info_value}>연 2.5%~3.5%</span>
                </div>
                <div className={styles.card_info_item}>
                  <span className={styles.card_info_label}>상환기간</span>
                  <span className={styles.card_info_value}>최대 5년</span>
                </div>
              </div>
            </div>
            <div className={styles.fund_card}>
              <div className={styles.card_top}>
                <div className={styles.card_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M38.999 4.33301C40.1483 4.33301 41.2508 4.78988 42.0635 5.60254C42.876 6.41518 43.332 7.5178 43.332 8.66699V13C44.4813 13 45.5838 13.4569 46.3965 14.2695C47.209 15.0821 47.6659 16.1839 47.666 17.333V24.415C47.9909 24.6027 48.2936 24.8326 48.5635 25.1025C49.376 25.9152 49.832 27.0178 49.832 28.167V32.5C49.832 33.6493 49.3761 34.7518 48.5635 35.5645C48.2936 35.8343 47.9909 36.0634 47.666 36.251V43.333C47.666 44.4822 47.209 45.5848 46.3965 46.3975C45.5838 47.21 44.4812 47.666 43.332 47.666H10.832C9.10832 47.6659 7.45522 46.9815 6.23633 45.7627C5.01744 44.5437 4.33203 42.8899 4.33203 41.166V10.833C4.33212 9.10922 5.01742 7.45621 6.23633 6.2373C7.45524 5.01839 9.10824 4.33309 10.832 4.33301H38.999ZM8.66602 41.166C8.66602 41.7404 8.89377 42.292 9.2998 42.6982C9.70606 43.1045 10.2575 43.3329 10.832 43.333H43.332V36.833H38.999C37.2751 36.833 35.6213 36.1487 34.4023 34.9297C33.1835 33.7107 32.499 32.0568 32.499 30.333C32.4991 28.6094 33.1836 26.9562 34.4023 25.7373C35.6213 24.5183 37.2751 23.833 38.999 23.833H43.332V17.333H10.832C10.0869 17.333 9.3554 17.2037 8.66602 16.96V41.166ZM38.999 28.167C38.4244 28.167 37.8731 28.3954 37.4668 28.8018C37.0607 29.208 36.8321 29.7586 36.832 30.333C36.832 30.9076 37.0606 31.4589 37.4668 31.8652C37.8731 32.2716 38.4244 32.5 38.999 32.5H45.499V28.167H38.999ZM10.832 8.66699C10.2575 8.66708 9.70606 8.89453 9.2998 9.30078C8.89355 9.70703 8.6661 10.2585 8.66602 10.833C8.66602 11.4075 8.89368 11.9589 9.2998 12.3652C9.70606 12.7715 10.2575 12.9999 10.832 13H38.999V8.66699H10.832Z"
                      fill="#0051FF"
                    />
                  </svg>
                </div>
                <div className={styles.card_title_wrapper}>
                  <h3 className={styles.card_title}>시설자금</h3>
                  <span className={styles.popular_tag}>인기</span>
                </div>
                <p className={styles.card_description}>
                  생산 시설·사무 기계·차량 등 고정 자산 구입에 필요한 자금
                </p>
              </div>
              <div className={styles.card_info}>
                <div className={styles.card_info_item}>
                  <span className={styles.card_info_label}>지원액</span>
                  <span className={styles.card_info_value}>최대 10억 원</span>
                </div>
                <div className={styles.card_info_item}>
                  <span className={styles.card_info_label}>금리</span>
                  <span className={styles.card_info_value}>연 2.0%~3.0%</span>
                </div>
                <div className={styles.card_info_item}>
                  <span className={styles.card_info_label}>상환기간</span>
                  <span className={styles.card_info_value}>최대 7년</span>
                </div>
              </div>
            </div>
            <div className={styles.fund_card}>
              <div className={styles.card_top}>
                <div className={styles.card_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 44 27"
                    fill="none"
                  >
                    <path
                      d="M43.1726 1.34333C42.9527 0.81391 42.532 0.393196 42.0026 0.173333C41.7421 0.0623111 41.4624 0.00342331 41.1792 0H30.3459C29.7713 0 29.2202 0.228274 28.8138 0.634602C28.4075 1.04093 28.1792 1.59203 28.1792 2.16667C28.1792 2.7413 28.4075 3.2924 28.8138 3.69873C29.2202 4.10506 29.7713 4.33333 30.3459 4.33333H35.9576L23.8459 16.445L16.7176 9.295C16.5161 9.09192 16.2765 8.93073 16.0125 8.82074C15.7485 8.71074 15.4653 8.6541 15.1792 8.6541C14.8932 8.6541 14.61 8.71074 14.346 8.82074C14.082 8.93073 13.8423 9.09192 13.6409 9.295L0.640896 22.295C0.437818 22.4964 0.27663 22.7361 0.166632 23.0001C0.0566329 23.2641 0 23.5473 0 23.8333C0 24.1194 0.0566329 24.4026 0.166632 24.6666C0.27663 24.9306 0.437818 25.1702 0.640896 25.3717C0.842316 25.5747 1.08195 25.7359 1.34598 25.8459C1.61001 25.9559 1.8932 26.0126 2.17923 26.0126C2.46526 26.0126 2.74845 25.9559 3.01248 25.8459C3.27651 25.7359 3.51614 25.5747 3.71756 25.3717L15.1792 13.8883L22.3076 21.0383C22.509 21.2414 22.7486 21.4026 23.0126 21.5126C23.2767 21.6226 23.5599 21.6792 23.8459 21.6792C24.1319 21.6792 24.4151 21.6226 24.6791 21.5126C24.9432 21.4026 25.1828 21.2414 25.3842 21.0383L39.0126 7.38833V13C39.0126 13.5746 39.2408 14.1257 39.6472 14.5321C40.0535 14.9384 40.6046 15.1667 41.1792 15.1667C41.7539 15.1667 42.305 14.9384 42.7113 14.5321C43.1176 14.1257 43.3459 13.5746 43.3459 13V2.16667C43.3425 1.88353 43.2836 1.60381 43.1726 1.34333Z"
                      fill="#0051FF"
                    />
                  </svg>
                </div>
                <div className={styles.card_title_wrapper}>
                  <h3 className={styles.card_title}>기술개발자금</h3>
                </div>
                <p className={styles.card_description}>
                  제품 개발·기술 혁신·특허 출원 등 신기술 개발 및 R&D 투자에
                  필요한 자금
                </p>
              </div>
              <div className={styles.card_info}>
                <div className={styles.card_info_item}>
                  <span className={styles.card_info_label}>지원액</span>
                  <span className={styles.card_info_value}>최대 3억 원</span>
                </div>
                <div className={styles.card_info_item}>
                  <span className={styles.card_info_label}>금리</span>
                  <span className={styles.card_info_value}>연 1.5%~2.5%</span>
                </div>
                <div className={styles.card_info_item}>
                  <span className={styles.card_info_label}>상환기간</span>
                  <span className={styles.card_info_value}>최대 5년</span>
                </div>
              </div>
            </div>
            <div className={styles.fund_card}>
              <div className={styles.card_top}>
                <div className={styles.card_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <path
                      d="M41.167 32.5C42.3636 32.5 43.3339 33.4704 43.334 34.667V39H47.667C48.8636 39 49.8339 39.9704 49.834 41.167C49.8337 42.3634 48.8635 43.333 47.667 43.333H43.334V47.667C43.3337 48.8634 42.3635 49.833 41.167 49.833C39.9705 49.833 39.0002 48.8634 39 47.667V43.333H34.667C33.4705 43.333 32.5002 42.3634 32.5 41.167C32.5001 39.9704 33.4704 39 34.667 39H39V34.667C39 33.4704 39.9704 32.5 41.167 32.5Z"
                      fill="#0051FF"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M31.416 4.33301C32.8525 4.33301 34.2303 4.9042 35.2461 5.91992C36.2619 6.93574 36.833 8.31341 36.833 9.75C36.833 12.3359 35.806 14.8161 33.9775 16.6445C33.9255 16.6965 33.8704 16.7452 33.8174 16.7959C37.6365 18.467 40.8229 21.3201 42.9043 24.9395C43.5007 25.9767 43.1436 27.3009 42.1064 27.8975C41.0691 28.494 39.744 28.1369 39.1475 27.0996C37.4817 24.2032 34.9066 21.9376 31.8213 20.6553C30.0923 19.9367 28.2574 19.55 26.4102 19.5H25.6357C24.4435 19.5286 23.2515 19.6961 22.085 20.0078C18.8569 20.8704 16.0042 22.7753 13.9697 25.4258C11.9352 28.0763 10.8328 31.3247 10.834 34.666V36.833C10.834 38.5569 11.5183 40.2107 12.7373 41.4297C13.9563 42.6486 15.6101 43.333 17.334 43.333H27.084C28.2804 43.3332 29.25 44.3035 29.25 45.5C29.2499 46.6965 28.2804 47.6668 27.084 47.667H17.334C14.4608 47.667 11.7045 46.5248 9.67285 44.4932C7.64151 42.4616 6.5 39.706 6.5 36.833V34.667C6.49859 30.3711 7.91649 26.1949 10.5322 22.7871C12.5457 20.1641 15.1823 18.109 18.1826 16.7959C18.1296 16.7452 18.0745 16.6965 18.0225 16.6445C16.194 14.8161 15.166 12.3359 15.166 9.75C15.166 8.31341 15.7371 6.93574 16.7529 5.91992C17.7688 4.9041 19.1464 4.33301 20.583 4.33301H31.416ZM20.583 8.66699C20.2957 8.66699 20.0205 8.78121 19.8174 8.98438C19.6142 9.18754 19.5 9.46268 19.5 9.75C19.5 11.1865 20.0702 12.5643 21.0859 13.5801C22.1017 14.5958 23.4795 15.1669 24.916 15.167H25.5244C25.8497 15.1591 26.175 15.1587 26.5 15.167H27.083C28.5196 15.167 29.8973 14.5959 30.9131 13.5801C31.9289 12.5643 32.5 11.1866 32.5 9.75C32.5 9.46283 32.3856 9.18751 32.1826 8.98438C31.9795 8.78121 31.7033 8.66699 31.416 8.66699H20.583Z"
                      fill="#0051FF"
                    />
                  </svg>
                </div>
                <div className={styles.card_title_wrapper}>
                  <h3 className={styles.card_title}>구매자금</h3>
                </div>
                <p className={styles.card_description}>
                  재고 확보·대량 구매 할인 활용 등 원자재 및 상품 구매에 필요한
                  자금
                </p>
              </div>
              <div className={styles.card_info}>
                <div className={styles.card_info_item}>
                  <span className={styles.card_info_label}>지원액</span>
                  <span className={styles.card_info_value}>최대 2억 원</span>
                </div>
                <div className={styles.card_info_item}>
                  <span className={styles.card_info_label}>금리</span>
                  <span className={styles.card_info_value}>연 3.0%~4.0%</span>
                </div>
                <div className={styles.card_info_item}>
                  <span className={styles.card_info_label}>상환기간</span>
                  <span className={styles.card_info_value}>최대 3년</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.reason_section}>
          <div className={styles.reason_content}>
            <p className={styles.reason_subtitle}>
              정책자금 컨설팅 전문가로서 기업의 최대 이익을 위해 최선을 다합니다
            </p>
            <h2 className={styles.reason_title}>
              한평생 바로 기업을 선택해야 하는 이유
            </h2>
          </div>
          <div className={styles.feature_cards_container}>
            <div className={styles.feature_card}>
              <div className={styles.feature_card_image}>
                <Image
                  src="/policyfunds/policy_reason01.jpg"
                  alt="높은 승인율"
                  fill
                  className={styles.feature_card_image_img}
                />
              </div>
              <h3 className={styles.feature_card_title}>높은 승인율</h3>
              <p className={styles.feature_card_subtitle}>
                정책자금 신청 경험이 풍부한 전문가가 최적화된 서류 작성으로 높은
                승인율을 보장합니다.
              </p>
            </div>
            <div className={styles.feature_card}>
              <div className={styles.feature_card_image}>
                <Image
                  src="/policyfunds/policy_reason02.jpg"
                  alt="빠른 처리"
                  fill
                  className={styles.feature_card_image_img}
                />
              </div>
              <h3 className={styles.feature_card_title}>빠른 처리</h3>
              <p className={styles.feature_card_subtitle}>
                신청부터 승인까지 최단 기간 내에 처리하여
                <br /> 기업의 자금 수요를 신속하게 충족합니다.
              </p>
            </div>
            <div className={styles.feature_card}>
              <div className={styles.feature_card_image}>
                <Image
                  src="/policyfunds/policy_reason03.jpg"
                  alt="안전한 컨설팅"
                  fill
                  className={styles.feature_card_image_img}
                />
              </div>
              <h3 className={styles.feature_card_title}>안전한 컨설팅</h3>
              <p className={styles.feature_card_subtitle}>
                정부 지원 정책에 대한 최신 정보를 바탕으로
                <br /> 법적 문제 없이 안전하게 진행합니다.
              </p>
            </div>
            <div className={styles.feature_card}>
              <div className={styles.feature_card_image}>
                <Image
                  src="/policyfunds/policy_reason04.jpg"
                  alt="최대 혜택"
                  fill
                  className={styles.feature_card_image_img}
                />
              </div>
              <h3 className={styles.feature_card_title}>최대 혜택</h3>
              <p className={styles.feature_card_subtitle}>
                기업에 가장 유리한 정책자금 프로그램을 분석해 최대 지원액을 받을
                수 있도록 지원합니다.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.comparison_section}>
          <div className={styles.comparison_text_wrapper}>
            <p className={styles.comparison_subtitle}>
              기업 규모 및 특성에 맞는 최적의 프로그램을 선택하세요
            </p>
            <h2 className={styles.comparison_title}>정책자금 프로그램 비교</h2>
          </div>
          <div className={styles.comparison_cards_container}>
            <div className={styles.comparison_card}>
              <div className={styles.comparison_card_top}>
                <div className={styles.comparison_card_title_wrapper}>
                  <h3 className={styles.comparison_card_title}>
                    소상공인 지원 프로그램
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="20"
                    viewBox="0 0 1 20"
                    fill="none"
                    className={styles.comparison_card_separator}
                  >
                    <path d="M0.5 0V19.5" stroke="#919191" />
                  </svg>
                  <p className={styles.comparison_card_subtitle}>
                    소상공인 및 소기업
                  </p>
                </div>
                <div className={styles.comparison_card_tags}>
                  <span className={styles.comparison_card_tag}>
                    저금리 대출
                  </span>
                  <span className={styles.comparison_card_tag}>
                    담보 최소화
                  </span>
                  <span className={styles.comparison_card_tag}>
                    신청 간소화
                  </span>
                </div>
              </div>
              <div className={styles.comparison_card_bottom}>
                <div className={styles.comparison_card_info_item}>
                  <span className={styles.comparison_card_info_label}>
                    지원액
                  </span>
                  <span className={styles.comparison_card_info_value}>
                    최대 5억 원
                  </span>
                </div>
                <div className={styles.comparison_card_info_item}>
                  <span className={styles.comparison_card_info_label}>
                    금리
                  </span>
                  <span className={styles.comparison_card_info_value}>
                    연 2.5%~3.5%
                  </span>
                </div>
                <div className={styles.comparison_card_info_item}>
                  <span className={styles.comparison_card_info_label}>
                    상환기간
                  </span>
                  <span className={styles.comparison_card_info_value}>
                    최대 5년
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.comparison_card}>
              <div className={styles.comparison_card_top}>
                <div className={styles.comparison_card_title_wrapper}>
                  <h3 className={styles.comparison_card_title}>
                    중소기업 성장 자금
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="20"
                    viewBox="0 0 1 20"
                    fill="none"
                    className={styles.comparison_card_separator}
                  >
                    <path d="M0.5 0V19.5" stroke="#919191" />
                  </svg>
                  <p className={styles.comparison_card_subtitle}>중소기업</p>
                </div>
                <div className={styles.comparison_card_tags}>
                  <span className={styles.comparison_card_tag}>
                    성장 단계별 맞춤
                  </span>
                  <span className={styles.comparison_card_tag}>
                    확대 재정 지원
                  </span>
                  <span className={styles.comparison_card_tag}>
                    경영 컨설팅 제공
                  </span>
                </div>
              </div>
              <div className={styles.comparison_card_bottom}>
                <div className={styles.comparison_card_info_item}>
                  <span className={styles.comparison_card_info_label}>
                    지원액
                  </span>
                  <span className={styles.comparison_card_info_value}>
                    최대 10억 원
                  </span>
                </div>
                <div className={styles.comparison_card_info_item}>
                  <span className={styles.comparison_card_info_label}>
                    금리
                  </span>
                  <span className={styles.comparison_card_info_value}>
                    연 2.0%~3.5%
                  </span>
                </div>
                <div className={styles.comparison_card_info_item}>
                  <span className={styles.comparison_card_info_label}>
                    상환기간
                  </span>
                  <span className={styles.comparison_card_info_value}>
                    최대 7년
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.comparison_card}>
              <div className={styles.comparison_card_top}>
                <div className={styles.comparison_card_title_wrapper}>
                  <h3 className={styles.comparison_card_title}>
                    창업 초기 지원 자금
                  </h3>
                  <p className={styles.comparison_card_subtitle}>
                    | 신규 창업자
                  </p>
                </div>
                <div className={styles.comparison_card_tags}>
                  <span className={styles.comparison_card_tag}>
                    창업 초기 특화
                  </span>
                  <span className={styles.comparison_card_tag}>우대금리</span>
                  <span className={styles.comparison_card_tag}>
                    사업 계획 지원
                  </span>
                </div>
              </div>
              <div className={styles.comparison_card_bottom}>
                <div className={styles.comparison_card_info_item}>
                  <span className={styles.comparison_card_info_label}>
                    지원액
                  </span>
                  <span className={styles.comparison_card_info_value}>
                    최대 3억 원
                  </span>
                </div>
                <div className={styles.comparison_card_info_item}>
                  <span className={styles.comparison_card_info_label}>
                    금리
                  </span>
                  <span className={styles.comparison_card_info_value}>
                    연 1.5%~2.5%
                  </span>
                </div>
                <div className={styles.comparison_card_info_item}>
                  <span className={styles.comparison_card_info_label}>
                    상환기간
                  </span>
                  <span className={styles.comparison_card_info_value}>
                    최대 5년
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.comparison_card}>
              <div className={styles.comparison_card_top}>
                <div className={styles.comparison_card_title_wrapper}>
                  <h3 className={styles.comparison_card_title}>
                    수출 기업 지원 자금
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1"
                    height="20"
                    viewBox="0 0 1 20"
                    fill="none"
                    className={styles.comparison_card_separator}
                  >
                    <path d="M0.5 0V19.5" stroke="#919191" />
                  </svg>
                  <p className={styles.comparison_card_subtitle}>수출 기업</p>
                </div>
                <div className={styles.comparison_card_tags}>
                  <span className={styles.comparison_card_tag}>
                    수출 확대 지원
                  </span>
                  <span className={styles.comparison_card_tag}>
                    환율 변동 대응
                  </span>
                  <span className={styles.comparison_card_tag}>
                    국제 거래 지원
                  </span>
                </div>
              </div>
              <div className={styles.comparison_card_bottom}>
                <div className={styles.comparison_card_info_item}>
                  <span className={styles.comparison_card_info_label}>
                    지원액
                  </span>
                  <span className={styles.comparison_card_info_value}>
                    최대 10억 원
                  </span>
                </div>
                <div className={styles.comparison_card_info_item}>
                  <span className={styles.comparison_card_info_label}>
                    금리
                  </span>
                  <span className={styles.comparison_card_info_value}>
                    연 2.0%~3.0%
                  </span>
                </div>
                <div className={styles.comparison_card_info_item}>
                  <span className={styles.comparison_card_info_label}>
                    상환기간
                  </span>
                  <span className={styles.comparison_card_info_value}>
                    최대 5년
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.process_section}>
          <div className={styles.process_text_wrapper}>
            <h2 className={styles.process_title}>정책자금 신청 프로세스</h2>
            <p className={styles.process_subtitle}>
              체계적인 5단계로 정책자금 신청을 완벽하게 지원합니다
            </p>
          </div>
          <div className={styles.process_cards_container}>
            <div className={styles.process_card}>
              <div className={styles.process_step_badge}>STEP 1</div>
              <h3 className={styles.process_card_title}>무료 진단</h3>
              <div className={styles.process_card_icon}>
                <Image
                  src="/policyfunds/policy_pocess_01.png"
                  alt="무료 진단"
                  width={120}
                  height={120}
                  className={styles.process_card_image}
                />
              </div>
              <p className={styles.process_card_description}>
                기업 현황 파악 및<br /> 적합 프로그램 분석
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className={styles.process_arrow}
            >
              <path
                d="M28.5 18L7.5 18M28.5 18L19.5 27M28.5 18L19.5 9"
                stroke="#E5EDFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={styles.process_card}>
              <div className={styles.process_step_badge}>STEP 2</div>
              <h3 className={styles.process_card_title}>서류 준비</h3>
              <div className={styles.process_card_icon}>
                <Image
                  src="/policyfunds/policy_pocess_02.png"
                  alt="서류 준비"
                  width={120}
                  height={120}
                  className={styles.process_card_image}
                />
              </div>
              <p className={styles.process_card_description}>
                필요 서류 작성 및<br /> 완벽한 준비
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className={styles.process_arrow}
            >
              <path
                d="M28.5 18L7.5 18M28.5 18L19.5 27M28.5 18L19.5 9"
                stroke="#E5EDFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={styles.process_card}>
              <div className={styles.process_step_badge}>STEP 3</div>
              <h3 className={styles.process_card_title}>신청 대행</h3>
              <div className={styles.process_card_icon}>
                <Image
                  src="/policyfunds/policy_pocess_03.png"
                  alt="신청 대행"
                  width={120}
                  height={120}
                  className={styles.process_card_image}
                />
              </div>
              <p className={styles.process_card_description}>
                정책자금 신청서
                <br /> 제출 및 대행
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className={styles.process_arrow}
            >
              <path
                d="M28.5 18L7.5 18M28.5 18L19.5 27M28.5 18L19.5 9"
                stroke="#E5EDFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={styles.process_card}>
              <div className={styles.process_step_badge}>STEP 4</div>
              <h3 className={styles.process_card_title}>심사 지원</h3>
              <div className={styles.process_card_icon}>
                <Image
                  src="/policyfunds/policy_pocess_04.png"
                  alt="심사 지원"
                  width={120}
                  height={120}
                  className={styles.process_card_image}
                />
              </div>
              <p className={styles.process_card_description}>
                심사 과정 모니터링 및<br /> 추가 자료 제출
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className={styles.process_arrow}
            >
              <path
                d="M28.5 18L7.5 18M28.5 18L19.5 27M28.5 18L19.5 9"
                stroke="#E5EDFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={styles.process_card}>
              <div className={styles.process_step_badge}>STEP 5</div>
              <h3 className={styles.process_card_title}>사후 관리</h3>
              <div className={styles.process_card_icon}>
                <Image
                  src="/policyfunds/policy_pocess_05.png"
                  alt="사후 관리"
                  width={120}
                  height={120}
                  className={styles.process_card_image}
                />
              </div>
              <p className={styles.process_card_description}>
                자금 수령 후<br /> 사후관리 및 컨설팅
              </p>
            </div>
          </div>
        </section>
        <section className={styles.cta_section}>
          <div className={styles.cta_text_wrapper}>
            <h2 className={styles.cta_title}>
              정책자금으로 기업 자금을 확보하세요
            </h2>
            <p className={styles.cta_description}>
              한평생 바로 기업의 정책자금 컨설팅으로 정부 지원을 최대한 활용하고
              <br />
              기업의 성장을 가속화하세요. 무료 상담으로 시작하세요.
            </p>
          </div>
          <button className={styles.cta_button}>
            지금 바로 상담하기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              className={styles.cta_button_arrow}
            >
              <path
                d="M1.12502 6.42856L14.1594 6.42856L9.32973 1.8289C8.89038 1.41048 8.89038 0.732241 9.32973 0.313818C9.76907 -0.104606 10.4812 -0.104606 10.9206 0.313818L17.6707 6.74246L17.7476 6.82407C18.108 7.24491 18.0826 7.86527 17.6707 8.25754L10.9206 14.6862C10.4812 15.1046 9.76907 15.1046 9.32973 14.6862C8.89038 14.2678 8.89038 13.5895 9.32973 13.1711L14.1594 8.57144H1.12502C0.503687 8.57144 -2.71592e-08 8.09174 0 7.5C2.71592e-08 6.90826 0.503687 6.42856 1.12502 6.42856Z"
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
