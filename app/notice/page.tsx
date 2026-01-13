"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ConsultationProvider,
  useConsultation,
} from "../components/ConsultationContext";
import FloatingButton from "../components/FloatingButton";
import MobileFloatingBanner from "../components/MobileFloatingBanner";
import styles from "./notice.module.css";

function NoticeContent() {
  const { openModal } = useConsultation();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.banner_image_wrapper}></div>
          <div className={styles.banner_overlay} />
          <div className={styles.banner_content}>
            <h1 className={styles.banner_title}>안전하게 시작하세요</h1>
            <p className={styles.banner_subtitle}>
              초기 단계부터 성숙 단계까지, 한평생 바로 기업이 기업의 모든 성장
              과정을
              <br /> 체계적으로 지원하고 최적의 경영 전략을 제시합니다.
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
              <div className={styles.notice_warning}>
                → 최대 3년간 자격이 정지되며 자금 환수조치가 이뤄질 수 있습니다.
              </div>

              <div className={styles.notice_list}>
                <div className={styles.notice_item}>
                  <div className={styles.notice_item_content}>
                    <p className={styles.notice_item_title}>
                      <span className={styles.notice_item_number}>①</span>
                      (계약 불이행) 성공 조건부 계약을 체결하고, 수수료를 선지급
                      받은 후 대출 실패 시 선지급금 반환청구에 응하지 않는 경우
                      (형법 제347조에 의한 사기에 해당)
                    </p>
                    <p className={styles.notice_item_title}></p>
                    <div className={styles.notice_item_description}>
                      → 100% 자금조달이 가능하다고 말하는 것은
                      불법입니다. 바름은 허위 과장 계약을 하지 않으며 자금조달
                      실패시 100% 환불을 진행합니다 (계약서 명시)
                    </div>
                  </div>
                </div>

                <div className={styles.notice_item}>
                  <div className={styles.notice_item_content}>
                    <p className={styles.notice_item_title}>
                      <span className={styles.notice_item_number}>②</span>
                      (대출심사 허위 대응) 재무제표 분식, 사업계획 과대포장 등
                      허위로 신청서류를 작성하고 수수료 수령한 경우 (형법
                      제347조에 의한 사기)
                    </p>
                    <p className={styles.notice_item_title}></p>
                    <div className={styles.notice_item_description}>
                      → 허위로 사업계획서 작성하지 않습니다. 바름은 실제 진행한
                      사항에 대한 사실기반의 컨설팅만을 진행합니다.
                    </div>
                  </div>
                </div>

                <div className={styles.notice_item}>
                  <div className={styles.notice_item_content}>
                    <p className={styles.notice_item_title}>
                      <span className={styles.notice_item_number}>③</span>
                      (허위 대출약속) 지원자격이 안되는 기업(요건미흡, 평가탈락
                      기업 등)에 정책자금 신청전 대출을 약속하고 대가를 요구하는
                      경우 (형법 제347조에 의한 사기에 해당)
                    </p>

                    <div className={styles.notice_item_description}>
                      → 요건 미흡, 평가탈락 기업은 진행자체가 불가합니다. 바름은
                      지원자격을 투명하게 공개하며 부합하지 않을 시 억지 계약을
                      진행하지 않습니다.
                    </div>
                  </div>
                </div>

                <div className={styles.notice_item}>
                  <div className={styles.notice_item_content}>
                    <p className={styles.notice_item_title}>
                      <span className={styles.notice_item_number}>④</span>
                      (부정청탁) 정부기관, 공공기관 직원 등과의 인적 네트워크를
                      통해 정책자금 지원이 가능하도록 하겠다고 약속하고,
                      착수금을 수령하는 경우 (형법 제347조에 의한 사기,
                      청탁금지법 제5조 부정청탁 금지 위반)
                    </p>

                    <div className={styles.notice_item_description}>
                      → 정부기관 인적 네트워크에 대한 발언하지 않습니다. 바름은
                      바름의 노하우와 경험을 통한 정식컨설팅만 진행합니다.
                    </div>
                  </div>
                </div>

                <div className={styles.notice_item}>
                  <div className={styles.notice_item_content}>
                    <p className={styles.notice_item_title}>
                      <span className={styles.notice_item_number}>⑤</span>
                      (정부기관 등 사칭) 제3자가 정부 공무원이나 공공기관 직원의
                      명함을 임의로 사용하거나 허위로 정책자금 관련 기관 직원을
                      사칭한 경우 (형법 제347조에 의한 사기, 형법 제118조에 의한
                      공무원 자격의 사칭)
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
              한평생 바로 기업과 함께 성공적인
              <br /> 투자 유치를 실현하세요
            </p>
          </div>
          <button className={styles.cta_button} onClick={openModal}>
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
      <MobileFloatingBanner />
    </>
  );
}

export default function NoticePage() {
  return (
    <ConsultationProvider>
      <NoticeContent />
    </ConsultationProvider>
  );
}
