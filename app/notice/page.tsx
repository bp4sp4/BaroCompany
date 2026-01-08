"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ConsultationProvider } from "../components/ConsultationContext";
import FloatingButton from "../components/FloatingButton";
import Image from "next/image";
import styles from "./notice.module.css";

export default function NoticePage() {
  return (
    <ConsultationProvider>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.banner_image_wrapper}>
            <Image
              src="/images/policyfunds/policy_banner.png"
              alt="주의사항 배너"
              fill
              className={styles.banner_image}
              priority
            />
          </div>
          <div className={styles.banner_overlay} />
          <div className={styles.banner_content}>
            <h1 className={styles.banner_title}>
              안전하게 시작하세요
            </h1>
            <p className={styles.banner_subtitle}>
              초기 단계부터 성숙 단계까지, 한평생 바로 기업이 기업의 모든 성장 과정을
              <br />
              체계적으로 지원하고 최적의 경영 전략을 제시합니다.
            </p>
          </div>
        </section>
        <section className={styles.content_section}>
          <div className={styles.content_wrapper}>
            <div className={styles.content_header}>
              <p className={styles.content_subtitle}>
                안전한 컨설팅 진행을 위한
              </p>
              <h2 className={styles.content_title}>주의사항</h2>
            </div>
            <div className={styles.notice_section}>
              <h3 className={styles.notice_section_title}>불법유형</h3>
              <p className={styles.notice_warning}>
                <span className={styles.arrow}>→</span>
                최대 3년간 자격이 정지되며 자금 환수조치가 이뤄질 수 있습니다.
              </p>
              <div className={styles.notice_list}>
                <div className={styles.notice_item}>
                  <div className={styles.notice_item_content}>
                    <p className={styles.notice_item_title}>
                      <span className={styles.notice_item_number}>①</span>
                      (계약 불이행) 성공 수수료 기반 계약, 선수금 요구, 대출
                      실패 시 환불 거부
                    </p>
                    <p className={styles.notice_item_description}>
                      <span className={styles.arrow_blue}>→</span>
                      100% 자금 확보를 약속하는 것은 불법입니다. 한평생 바로
                      기업은 허위/과장 계약 없이 계약서에 명시된 대로 실패 시
                      100% 환불을 보장합니다.
                    </p>
                  </div>
                </div>
                <div className={styles.notice_item}>
                  <div className={styles.notice_item_content}>
                    <p className={styles.notice_item_title}>
                      <span className={styles.notice_item_number}>②</span>
                      (대출심사 허위 대응) 재무제표 조작, 사업계획서 과장 등
                      허위 서류 작성
                    </p>
                    <p className={styles.notice_item_description}>
                      <span className={styles.arrow_blue}>→</span>
                      한평생 바로 기업은 허위 사업계획서를 작성하지 않으며,
                      실제 사실에 기반한 컨설팅을 진행합니다.
                    </p>
                  </div>
                </div>
                <div className={styles.notice_item}>
                  <div className={styles.notice_item_content}>
                    <p className={styles.notice_item_title}>
                      <span className={styles.notice_item_number}>③</span>
                      (허위 대출약속) 정책자금 신청 전 요건 미달, 평가 실패
                      기업에 대출 약속 및 보수 요구
                    </p>
                    <p className={styles.notice_item_description}>
                      <span className={styles.arrow_blue}>→</span>
                      요건 미달 기업의 경우 진행이 불가능하며, 한평생 바로
                      기업은 자격 요건을 투명하게 공개하며 요건 미달 시 계약을
                      거절합니다.
                    </p>
                  </div>
                </div>
                <div className={styles.notice_item}>
                  <div className={styles.notice_item_content}>
                    <p className={styles.notice_item_title}>
                      <span className={styles.notice_item_number}>④</span>
                      (부정청탁) 정부/공공기관 직원과의 인맥을 통한 정책자금
                      지원 약속 및 선수금 수수
                    </p>
                    <p className={styles.notice_item_description}>
                      <span className={styles.arrow_blue}>→</span>
                      한평생 바로 기업은 인맥을 언급하지 않으며, 노하우와 경험을
                      바탕으로 정당한 컨설팅을 진행합니다.
                    </p>
                  </div>
                </div>
                <div className={styles.notice_item}>
                  <div className={styles.notice_item_content}>
                    <p className={styles.notice_item_title}>
                      <span className={styles.notice_item_number}>⑤</span>
                      (정부기관 등 사칭) 정부 공무원 또는 공공기관 직원으로
                      사칭
                    </p>
                    <p className={styles.notice_item_description}>
                      <span className={styles.arrow_blue}>→</span>
                      한평생 바로 기업은 정부기관을 사칭하지 않으며, 명확한
                      회사 정보를 제공합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.cta_section}>
          <div className={styles.cta_text_wrapper}>
            <h2 className={styles.cta_title}>믿을 수 있는 곳에서 시작하세요</h2>
            <p className={styles.cta_description}>
              한평생 바로 기업과 함께 성공적인 투자 유치를 실현하세요
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
