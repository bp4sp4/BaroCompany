"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ConsultationProvider } from "../components/ConsultationContext";
import FloatingButton from "../components/FloatingButton";
import Image from "next/image";
import styles from "./bizsupport.module.css";

export default function BizSupportPage() {
  return (
    <ConsultationProvider>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.banner_image_wrapper}></div>
          <div className={styles.banner_overlay} />
          <div className={styles.banner_content}>
            <h1 className={styles.banner_title}>
              기업 성장의
              <br /> 모든 단계를 함께합니다.
            </h1>
            <p className={styles.banner_subtitle}>
              초기 단계부터 성숙 단계까지, 한평생 바로 기업이 기업의 모든 성장
              과정을
              <br />
              체계적으로 지원하고 최적의 경영 전략을 제시합니다.
            </p>
          </div>
        </section>

        <section className={styles.services_section}>
          <div className={styles.services_wrapper}>
            <div className={styles.services_text_wrapper}>
              <p className={styles.services_subtitle}>
                기업의 성장 단계에 맞는 맞춤형 경영 컨설팅 서비스
              </p>
              <h2 className={styles.services_title}>경영지원 서비스</h2>
            </div>
            <div className={styles.services_cards_wrapper}>
              <div className={styles.service_card}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  className={styles.service_icon_svg}
                >
                  <g clipPath="url(#clip0_401_16602)">
                    <path
                      d="M25.6757 27.781C28.55 29.1807 30.9956 31.3218 32.7666 33.9834C34.5376 36.645 35.5666 39.7309 35.7474 42.9227C35.7658 43.2424 35.721 43.5626 35.6156 43.8649C35.5102 44.1673 35.3463 44.4459 35.1333 44.685C34.9202 44.924 34.6621 45.1187 34.3738 45.258C34.0855 45.3973 33.7726 45.4784 33.4529 45.4967C33.1332 45.5151 32.8131 45.4703 32.5107 45.3649C32.2084 45.2596 31.9297 45.0957 31.6907 44.8826C31.4517 44.6695 31.257 44.4115 31.1177 44.1232C30.9784 43.8348 30.8973 43.5219 30.8789 43.2023C30.6986 39.8745 29.2503 36.7424 26.8318 34.4496C24.4132 32.1568 21.2083 30.8776 17.8757 30.875C14.5431 30.8776 11.3381 32.1568 8.91957 34.4496C6.50105 36.7424 5.05276 39.8745 4.87242 43.2023C4.85428 43.5219 4.77335 43.8349 4.63426 44.1233C4.49517 44.4117 4.30064 44.6699 4.06177 44.8831C3.8229 45.0963 3.54438 45.2604 3.2421 45.3659C2.93982 45.4715 2.61971 45.5165 2.30004 45.4984C1.98037 45.4802 1.6674 45.3993 1.37901 45.2602C1.09061 45.1211 0.832437 44.9266 0.619222 44.6877C0.406007 44.4489 0.241928 44.1703 0.136354 43.8681C0.0307794 43.5658 -0.0142231 43.2457 0.00391575 42.926C0.184195 39.7336 1.21291 36.647 2.98393 33.9848C4.75495 31.3225 7.20417 29.181 10.0789 27.781C8.41991 26.2187 7.26839 24.1941 6.77363 21.9696C6.27886 19.7451 6.46364 17.4233 7.30403 15.3051C8.14442 13.1869 9.60166 11.3699 11.4869 10.0897C13.3721 8.80941 15.5984 8.12494 17.8773 8.12494C20.1561 8.12494 22.3824 8.80941 24.2677 10.0897C26.1529 11.3699 27.6102 13.1869 28.4506 15.3051C29.2909 17.4233 29.4757 19.7451 28.981 21.9696C28.4862 24.1941 27.3347 26.2187 25.6757 27.781ZM43.0632 0C43.7096 0 44.3296 0.256807 44.7867 0.713927C45.2439 1.17105 45.5007 1.79103 45.5007 2.4375V6.5H49.5632C50.2096 6.5 50.8296 6.75681 51.2867 7.21393C51.7439 7.67105 52.0007 8.29103 52.0007 8.9375C52.0007 9.58397 51.7439 10.204 51.2867 10.6611C50.8296 11.1182 50.2096 11.375 49.5632 11.375H45.5007V15.4375C45.5007 16.084 45.2439 16.704 44.7867 17.1611C44.3296 17.6182 43.7096 17.875 43.0632 17.875C42.4167 17.875 41.7967 17.6182 41.3396 17.1611C40.8825 16.704 40.6257 16.084 40.6257 15.4375V11.375H36.5632C35.9167 11.375 35.2967 11.1182 34.8396 10.6611C34.3825 10.204 34.1257 9.58397 34.1257 8.9375C34.1257 8.29103 34.3825 7.67105 34.8396 7.21393C35.2967 6.75681 35.9167 6.5 36.5632 6.5H40.6257V2.4375C40.6257 1.79103 40.8825 1.17105 41.3396 0.713927C41.7967 0.256807 42.4167 0 43.0632 0ZM17.8757 13C17.0101 12.9804 16.1493 13.134 15.3438 13.4517C14.5384 13.7693 13.8045 14.2447 13.1854 14.8499C12.5662 15.4551 12.0741 16.1779 11.7381 16.9759C11.4021 17.7738 11.2289 18.6309 11.2287 19.4967C11.2285 20.3625 11.4013 21.2197 11.7369 22.0178C12.0725 22.8159 12.5641 23.539 13.183 24.1445C13.8019 24.75 14.5355 25.2257 15.3408 25.5438C16.1461 25.8619 17.0068 26.0159 17.8724 25.9967C19.5707 25.9592 21.1869 25.2583 22.3749 24.044C23.5629 22.8298 24.2283 21.1987 24.2287 19.5C24.2291 17.8012 23.5645 16.1698 22.3771 14.955C21.1898 13.7401 19.574 13.0384 17.8757 13Z"
                      fill="#0051FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_401_16602">
                      <rect width="52" height="52" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h3 className={styles.service_card_title}>조직 구축 컨설팅</h3>
                <p className={styles.service_card_description}>
                  효율적인 조직 구조 설계
                  <br />및 인사 관리 전략
                </p>
              </div>
              <div className={styles.service_card}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                >
                  <path
                    d="M26.0007 4.33331C26.5753 4.33331 27.1264 4.56159 27.5327 4.96791C27.939 5.37424 28.1673 5.92534 28.1673 6.49998C28.1673 7.07462 27.939 7.62572 27.5327 8.03204C27.1264 8.43837 26.5753 8.66665 26.0007 8.66665C22.5724 8.66665 19.2212 9.68323 16.3708 11.5878C13.5203 13.4925 11.2987 16.1995 9.98674 19.3668C8.67482 22.5341 8.33156 26.0192 9.00037 29.3815C9.66918 32.7439 11.32 35.8324 13.7441 38.2565C16.1682 40.6806 19.2567 42.3315 22.6191 43.0003C25.9814 43.6691 29.4666 43.3258 32.6338 42.0139C35.8011 40.702 38.5082 38.4803 40.4128 35.6299C42.3174 32.7794 43.334 29.4282 43.334 26C43.334 25.4253 43.5623 24.8742 43.9686 24.4679C44.3749 24.0616 44.926 23.8333 45.5007 23.8333C46.0753 23.8333 46.6264 24.0616 47.0327 24.4679C47.439 24.8742 47.6673 25.4253 47.6673 26C47.6673 37.9665 37.9672 47.6666 26.0007 47.6666C14.0342 47.6666 4.33398 37.9665 4.33398 26C4.33398 14.0335 14.0342 4.33331 26.0007 4.33331ZM26.0007 13C26.5753 13 27.1264 13.2283 27.5327 13.6346C27.939 14.0409 28.1673 14.592 28.1673 15.1666C28.1673 15.7413 27.939 16.2924 27.5327 16.6987C27.1264 17.105 26.5753 17.3333 26.0007 17.3333C24.2865 17.3333 22.6109 17.8416 21.1857 18.7939C19.7605 19.7462 18.6497 21.0998 17.9937 22.6834C17.3377 24.267 17.1661 26.0096 17.5005 27.6908C17.8349 29.3719 18.6603 30.9162 19.8724 32.1282C21.0844 33.3403 22.6287 34.1657 24.3099 34.5001C25.991 34.8345 27.7336 34.6629 29.3172 34.0069C30.9009 33.351 32.2544 32.2401 33.2067 30.8149C34.159 29.3897 34.6673 27.7141 34.6673 26C34.6673 25.4253 34.8956 24.8742 35.3019 24.4679C35.7082 24.0616 36.2593 23.8333 36.834 23.8333C37.4086 23.8333 37.9597 24.0616 38.3661 24.4679C38.7724 24.8742 39.0007 25.4253 39.0007 26C39.0007 28.5711 38.2382 31.0846 36.8098 33.2224C35.3813 35.3602 33.351 37.0265 30.9755 38.0104C28.6001 38.9944 25.9862 39.2518 23.4645 38.7502C20.9427 38.2486 18.6263 37.0105 16.8083 35.1924C14.9902 33.3743 13.7521 31.0579 13.2504 28.5362C12.7488 26.0144 13.0063 23.4005 13.9902 21.0251C14.9742 18.6497 16.6404 16.6193 18.7782 15.1909C20.9161 13.7624 23.4295 13 26.0007 13ZM40.2378 4.54998C40.5251 4.54998 40.8007 4.66412 41.0038 4.86728C41.207 5.07045 41.3212 5.34599 41.3212 5.63331V9.59831C41.3217 9.88526 41.4361 10.1602 41.6392 10.3629C41.8423 10.5656 42.1175 10.6795 42.4045 10.6795H46.3673C46.6546 10.6795 46.9302 10.7936 47.1334 10.9968C47.3365 11.1999 47.4507 11.4755 47.4507 11.7628V13.7453L43.36 17.836C42.5475 18.6487 41.4455 19.1054 40.2963 19.1056H35.963L27.5347 27.5318C27.126 27.9265 26.5787 28.1449 26.0106 28.1399C25.4425 28.135 24.8991 27.9071 24.4974 27.5054C24.0957 27.1037 23.8678 26.5603 23.8629 25.9922C23.8579 25.4241 24.0763 24.8768 24.471 24.4681L32.8993 16.042V11.7086C32.899 10.5598 33.3549 9.4578 34.1668 8.64498L38.2618 4.54998H40.2378Z"
                    fill="#0051FF"
                  />
                </svg>
                <h3 className={styles.service_card_title}>마케팅 전략 수립</h3>
                <p className={styles.service_card_description}>
                  타겟 시장 분석 및 효과적인
                  <br />
                  마케팅 전략 개발
                </p>
              </div>
              <div className={styles.service_card}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  className={styles.service_icon_svg}
                >
                  <path
                    d="M38.1875 17.4911V17.0625C38.1875 14.0928 35.9877 11.4664 31.9902 9.66875C28.6142 8.14937 24.1719 7.3125 19.5 7.3125C14.8281 7.3125 10.3858 8.14937 7.00984 9.66875C3.01234 11.4664 0.8125 14.0928 0.8125 17.0625V25.1875C0.8125 28.1572 3.01234 30.7836 7.00984 32.5812C9.18222 33.5213 11.4697 34.1688 13.8125 34.5069V34.9375C13.8125 37.9072 16.0123 40.5336 20.0098 42.3312C23.3858 43.8506 27.8281 44.6875 32.5 44.6875C37.1719 44.6875 41.6142 43.8506 44.9902 42.3312C48.9877 40.5336 51.1875 37.9072 51.1875 34.9375V26.8125C51.1875 22.3153 46.0505 18.7037 38.1875 17.4911ZM46.3125 26.8125C46.3125 28.3867 41.8905 31.3788 33.7573 31.6631C36.6295 29.9406 38.1875 27.6859 38.1875 25.1875V22.4331C43.4444 23.3898 46.3125 25.4881 46.3125 26.8125ZM21.8095 29.9873C21.0722 30.0361 20.3023 30.0625 19.5 30.0625C18.4681 30.0625 17.4911 30.0178 16.5689 29.9386C16.4921 29.9285 16.4148 29.9224 16.3373 29.9203C16.0306 29.8919 15.728 29.8594 15.4375 29.8228V26.5952C16.7868 26.7401 18.1429 26.8127 19.5 26.8125C20.8571 26.8127 22.2132 26.7401 23.5625 26.5952V29.8228C23.0567 29.8838 22.5327 29.9366 21.9883 29.9752C21.9375 29.9772 21.8684 29.9813 21.8095 29.9873ZM33.3125 23.7941V25.1875C33.3125 26.1584 31.6306 27.6677 28.4375 28.7503V25.7034C29.6533 25.3846 30.8414 24.9682 31.9902 24.4583C32.456 24.2484 32.8968 24.027 33.3125 23.7941ZM19.5 12.1875C28.4375 12.1875 33.3125 15.407 33.3125 17.0625C33.3125 18.718 28.4375 21.9375 19.5 21.9375C10.5625 21.9375 5.6875 18.718 5.6875 17.0625C5.6875 15.407 10.5625 12.1875 19.5 12.1875ZM5.6875 25.1875V23.7941C6.10458 24.0256 6.54536 24.2464 7.00984 24.4563C8.15863 24.9662 9.34671 25.3826 10.5625 25.7014V28.7483C7.36937 27.6677 5.6875 26.1584 5.6875 25.1875ZM18.6875 34.9375H19.5C20.2367 34.9375 20.9659 34.9158 21.6877 34.8725C22.2903 35.0851 22.9152 35.2787 23.5625 35.4534V38.5003C20.3694 37.4177 18.6875 35.9084 18.6875 34.9375ZM28.4375 39.5728V36.3472C29.7868 36.4915 31.143 36.5634 32.5 36.5625C33.8571 36.5627 35.2132 36.4901 36.5625 36.3452V39.5728C33.8636 39.8926 31.1364 39.8926 28.4375 39.5728ZM41.4375 38.5003V35.4534C42.6533 35.1346 43.8414 34.7182 44.9902 34.2083C45.456 33.9997 45.8968 33.779 46.3125 33.5461V34.9375C46.3125 35.9084 44.6306 37.4177 41.4375 38.5003Z"
                    fill="#0051FF"
                  />
                </svg>
                <h3 className={styles.service_card_title}>재무 관리 컨설팅</h3>
                <p className={styles.service_card_description}>
                  재무 분석 및 최적의
                  <br />
                  자금 운용 전략
                </p>
              </div>
              <div className={styles.service_card}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  className={styles.service_icon_svg}
                >
                  <path
                    d="M17.3346 8.66663H8.66797M8.66797 8.66663V17.3333M8.66797 8.66663L19.5013 19.5M34.668 8.66663H43.3346M43.3346 8.66663V17.3333M43.3346 8.66663L32.5013 19.5M17.3346 43.3333H8.66797M8.66797 43.3333V34.6666M8.66797 43.3333L19.5013 32.5M34.668 43.3333H43.3346M43.3346 43.3333V34.6666M43.3346 43.3333L32.5013 32.5"
                    stroke="#0051FF"
                    strokeWidth="4.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className={styles.service_card_title}>사업 확장 전략</h3>
                <p className={styles.service_card_description}>
                  신사업 진출 및 사업
                  <br />
                  다각화 전략
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.stages_section}>
          <div className={styles.stages_wrapper}>
            <div className={styles.stages_text_wrapper}>
              <p className={styles.stages_subtitle}>
                각 성장 단계에 필요한 경영 전략과 지원을 제공합니다
              </p>
              <h2 className={styles.stages_title}>
                기업 성장 단계별 맞춤형 지원
              </h2>
            </div>
            <div className={styles.stages_cards_wrapper}>
              <div className={styles.stage_card}>
                <div className={styles.stage_card_top}>
                  <svg
                    className={styles.stage_card_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <path
                      d="M21.6673 35.75L28.1673 37.9167C28.1673 37.9167 44.4173 34.6667 46.584 34.6667C48.7507 34.6667 48.7507 36.8334 46.584 39C44.4173 41.1667 36.834 47.6667 30.334 47.6667C23.834 47.6667 19.5007 44.4167 15.1673 44.4167H4.33398"
                      stroke="#7FA8FF"
                      strokeWidth="4.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.33398 31.4167C6.50065 29.25 10.834 26 15.1673 26C19.5007 26 29.7923 30.3333 31.4173 32.5C33.0423 34.6667 28.1673 37.9167 28.1673 37.9167"
                      stroke="#7FA8FF"
                      strokeWidth="4.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M36.834 27.0833C38.6289 27.0833 40.084 25.6283 40.084 23.8333C40.084 22.0384 38.6289 20.5833 36.834 20.5833C35.0391 20.5833 33.584 22.0384 33.584 23.8333C33.584 25.6283 35.0391 27.0833 36.834 27.0833Z"
                      stroke="#7FA8FF"
                      strokeWidth="4.33333"
                    />
                    <path
                      d="M23.834 19.5C25.6289 19.5 27.084 18.0449 27.084 16.25C27.084 14.4551 25.6289 13 23.834 13C22.0391 13 20.584 14.4551 20.584 16.25C20.584 18.0449 22.0391 19.5 23.834 19.5Z"
                      stroke="#7FA8FF"
                      strokeWidth="4.33333"
                    />
                    <path
                      d="M36.834 10.8333C38.6289 10.8333 40.084 9.37827 40.084 7.58334C40.084 5.78842 38.6289 4.33334 36.834 4.33334C35.0391 4.33334 33.584 5.78842 33.584 7.58334C33.584 9.37827 35.0391 10.8333 36.834 10.8333Z"
                      stroke="#7FA8FF"
                      strokeWidth="4.33333"
                    />
                  </svg>
                  <div className={styles.stage_card_header}>
                    <h3 className={styles.stage_card_title}>초기 단계</h3>
                    <span className={styles.stage_card_badge}>설립 1~2년</span>
                  </div>
                  <p className={styles.stage_card_description}>
                    정부 지원 정책자금 신청 컨설팅
                  </p>
                </div>
                <div className={styles.stage_card_services}>
                  <span className={styles.stage_card_service_item}>
                    서류 작성 지원
                  </span>
                  <span className={styles.stage_card_service_item}>
                    신청 대행
                  </span>
                  <span className={styles.stage_card_service_item}>
                    사후관리
                  </span>
                </div>
              </div>
              <div className={styles.stage_card}>
                <div className={styles.stage_card_top}>
                  <svg
                    className={styles.stage_card_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <path
                      d="M51.9224 10.4914C51.8871 9.89577 51.6346 9.33376 51.2127 8.91185C50.7908 8.48994 50.2288 8.23743 49.6331 8.20218C38.8127 7.5664 30.0925 10.9159 26.3063 17.1681C23.8403 21.2306 23.755 26.1401 26.0097 30.8384C24.9122 32.2384 24.068 33.8195 23.5153 35.5103L20.9438 32.9387C22.4042 29.5323 22.2499 26.0101 20.4563 23.0486C17.6166 18.3544 11.1491 15.8437 3.15815 16.3048C2.56219 16.3401 1.99991 16.5929 1.57795 17.0153C1.156 17.4376 0.903704 18.0001 0.868929 18.5961C0.405804 26.587 2.91643 33.0545 7.60658 35.8942C9.19728 36.8637 11.025 37.3748 12.8878 37.3709C14.4761 37.3581 16.045 37.0215 17.4988 36.3817L22.7496 41.6406V46.3125C22.7496 46.959 23.0064 47.5789 23.4635 48.0361C23.9206 48.4932 24.5406 48.75 25.1871 48.75C25.8335 48.75 26.4535 48.4932 26.9106 48.0361C27.3677 47.5789 27.6246 46.959 27.6246 46.3125V40.3223C27.6195 38.1435 28.2933 36.0171 29.5522 34.2387C31.5915 35.2048 33.8161 35.7169 36.0725 35.7398C38.5003 35.7454 40.8825 35.0805 42.9564 33.8183C49.2066 30.032 52.5602 21.3119 51.9224 10.4914ZM10.1314 31.7241C7.45221 30.0991 5.82924 26.1462 5.69721 21.1351C10.7083 21.2672 14.6631 22.8901 16.2861 25.5694C16.9208 26.6017 17.1811 27.8209 17.0235 29.0225L14.7221 26.713C14.2641 26.255 13.6431 25.9978 12.9955 25.9978C12.3479 25.9978 11.7268 26.255 11.2689 26.713C10.811 27.1709 10.5538 27.7919 10.5538 28.4395C10.5538 29.0871 10.811 29.7082 11.2689 30.1661L13.5724 32.4695C12.3741 32.6175 11.161 32.3547 10.1314 31.7241ZM40.4316 29.6562C38.2663 30.9664 35.7597 31.2142 33.1577 30.42L40.7241 22.8556C41.182 22.3977 41.4393 21.7766 41.4393 21.1291C41.4393 20.4815 41.182 19.8604 40.7241 19.4025C40.2662 18.9446 39.6451 18.6873 38.9975 18.6873C38.3499 18.6873 37.7289 18.9446 37.271 19.4025L29.7046 26.9669C28.9185 24.375 29.1663 21.8583 30.4683 19.7031C33.048 15.4375 39.1316 13 46.9864 13H47.1246C47.153 20.9219 44.7155 27.0522 40.4316 29.6562Z"
                      fill="#2469FF"
                    />
                  </svg>
                  <div className={styles.stage_card_header}>
                    <h3 className={styles.stage_card_title}>성장 단계</h3>
                    <span className={styles.stage_card_badge}>설립 2~5년</span>
                  </div>
                  <p className={styles.stage_card_description}>
                    기업 가치 평가 및 투자 유치 전략
                  </p>
                </div>
                <div className={styles.stage_card_services}>
                  <span className={styles.stage_card_service_item}>
                    가치 평가
                  </span>
                  <span className={styles.stage_card_service_item}>
                    IR 자료 작성
                  </span>
                  <span className={styles.stage_card_service_item}>
                    투자자 매칭
                  </span>
                </div>
              </div>
              <div className={styles.stage_card}>
                <div className={styles.stage_card_top}>
                  <svg
                    className={styles.stage_card_icon}
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <path
                      d="M26 10.8333C26 9.54777 26.3812 8.29106 27.0955 7.22214C27.8097 6.15322 28.8248 5.3201 30.0126 4.82813C31.2003 4.33616 32.5072 4.20744 33.7681 4.45824C35.029 4.70905 36.1872 5.32811 37.0962 6.23715C38.0052 7.14619 38.6243 8.30438 38.8751 9.56526C39.1259 10.8261 38.9972 12.1331 38.5052 13.3208C38.0133 14.5085 37.1801 15.5237 36.1112 16.2379C35.0423 16.9521 33.7856 17.3333 32.5 17.3333M26 10.8333C26 9.54777 25.6188 8.29106 24.9046 7.22214C24.1903 6.15322 23.1752 5.3201 21.9874 4.82813C20.7997 4.33616 19.4928 4.20744 18.2319 4.45824C16.971 4.70905 15.8129 5.32811 14.9038 6.23715C13.9948 7.14619 13.3757 8.30438 13.1249 9.56526C12.8741 10.8261 13.0028 12.1331 13.4948 13.3208C13.9868 14.5085 14.8199 15.5237 15.8888 16.2379C16.9577 16.9521 18.2144 17.3333 19.5 17.3333M26 10.8333V13M32.5 17.3333C33.7856 17.3333 35.0423 17.7146 36.1112 18.4288C37.1801 19.143 38.0133 20.1582 38.5052 21.3459C38.9972 22.5336 39.1259 23.8406 38.8751 25.1014C38.6243 26.3623 38.0052 27.5205 37.0962 28.4295C36.1872 29.3386 35.029 29.9576 33.7681 30.2085C32.5072 30.4593 31.2003 30.3305 30.0126 29.8386C28.8248 29.3466 27.8097 28.5135 27.0955 27.4446C26.3812 26.3756 26 25.1189 26 23.8333M32.5 17.3333H30.3333M19.5 17.3333C18.2144 17.3333 16.9577 17.7146 15.8888 18.4288C14.8199 19.143 13.9868 20.1582 13.4948 21.3459C13.0028 22.5336 12.8741 23.8406 13.1249 25.1014C13.3757 26.3623 13.9948 27.5205 14.9038 28.4295C15.8129 29.3386 16.971 29.9576 18.2319 30.2085C19.4928 30.4593 20.7997 30.3305 21.9874 29.8386C23.1752 29.3466 24.1903 28.5135 24.9046 27.4446C25.6188 26.3756 26 25.1189 26 23.8333M19.5 17.3333H21.6667M26 23.8333V21.6667"
                      stroke="#0049E5"
                      strokeWidth="4.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.0013 21.6667C28.3945 21.6667 30.3346 19.7266 30.3346 17.3333C30.3346 14.9401 28.3945 13 26.0013 13C23.6081 13 21.668 14.9401 21.668 17.3333C21.668 19.7266 23.6081 21.6667 26.0013 21.6667Z"
                      stroke="#0049E5"
                      strokeWidth="4.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.0007 21.6667V47.6667M26.0007 47.6667C35.1007 47.6667 41.1673 44.0549 41.1673 36.8334C32.0673 36.8334 26.0007 40.4452 26.0007 47.6667ZM26.0007 47.6667C16.9007 47.6667 10.834 44.0549 10.834 36.8334C19.934 36.8334 26.0007 40.4452 26.0007 47.6667Z"
                      stroke="#0049E5"
                      strokeWidth="4.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className={styles.stage_card_header}>
                    <h3 className={styles.stage_card_title}>성숙 단계</h3>
                    <span className={styles.stage_card_badge}>
                      설립 5년 이상
                    </span>
                  </div>
                  <p className={styles.stage_card_description}>수익성 극대화</p>
                </div>
                <div className={styles.stage_card_services}>
                  <span className={styles.stage_card_service_item}>
                    기업 가치 극대화
                  </span>
                  <span className={styles.stage_card_service_item}>
                    인수자 발굴
                  </span>
                  <span className={styles.stage_card_service_item}>
                    거래 지원
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.features_section}>
          <div className={styles.features_wrapper}>
            <div className={styles.features_text_wrapper}>
              <p className={styles.features_subtitle}>
                실전 경험과 데이터 기반의 전문적인 경영 컨설팅
              </p>
              <h2 className={styles.features_title}>
                한평생 바로 기업의 경영지원만의 특징
              </h2>
            </div>
            <div className={styles.features_cards_wrapper}>
              <div className={styles.feature_card}>
                <div className={styles.feature_card_image}>
                  <Image
                    src="/images/bizsupport/bizsupport_feature_01.jpg"
                    alt="전문 컨설턴트"
                    fill
                    className={styles.feature_card_image_img}
                  />
                </div>
                <div className={styles.feature_card_content}>
                  <h3 className={styles.feature_card_title}>전문 컨설턴트</h3>
                  <p className={styles.feature_card_description}>
                    업계 경험이 풍부한 전문가들의 맞춤형 컨설팅
                  </p>
                </div>
              </div>
              <div className={styles.feature_card}>
                <div className={styles.feature_card_image}>
                  <Image
                    src="/images/bizsupport/bizsupport_feature_02.jpg"
                    alt="데이터 기반"
                    fill
                    className={styles.feature_card_image_img}
                  />
                </div>
                <div className={styles.feature_card_content}>
                  <h3 className={styles.feature_card_title}>데이터 기반</h3>
                  <p className={styles.feature_card_description}>
                    시장 데이터와 분석을 바탕으로 한 전략 수립
                  </p>
                </div>
              </div>
              <div className={styles.feature_card}>
                <div className={styles.feature_card_image}>
                  <Image
                    src="/images/bizsupport/bizsupport_feature_03.jpg"
                    alt="실행 지원"
                    fill
                    className={styles.feature_card_image_img}
                  />
                </div>
                <div className={styles.feature_card_content}>
                  <h3 className={styles.feature_card_title}>실행 지원</h3>
                  <p className={styles.feature_card_description}>
                    컨설팅 후 실행 단계까지 지속적인 지원
                  </p>
                </div>
              </div>
              <div className={styles.feature_card}>
                <div className={styles.feature_card_image}>
                  <Image
                    src="/images/bizsupport/bizsupport_feature_04.jpg"
                    alt="네트워크"
                    fill
                    className={styles.feature_card_image_img}
                  />
                </div>
                <div className={styles.feature_card_content}>
                  <h3 className={styles.feature_card_title}>네트워크</h3>
                  <p className={styles.feature_card_description}>
                    다양한 업계 전문가 네트워크 활용 기회
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.investment_process_section}>
          <div className={styles.investment_process_text_wrapper}>
            <h2 className={styles.investment_process_title}>
              경영지원 프로세스
            </h2>
            <p className={styles.investment_process_subtitle}>
              체계적인 5단계 프로세스로 최상의 결과를 제공합니다
            </p>
          </div>
          <div className={styles.investment_process_cards_container}>
            <div className={styles.investment_process_card}>
              <div className={styles.investment_process_step_badge}>STEP 1</div>
              <h3 className={styles.investment_process_card_title}>
                상담 신청
              </h3>
              <div className={styles.investment_process_card_icon}>
                <Image
                  src="/images/bizsupport/bizsupport_process_01.png"
                  alt="무료 진단"
                  width={120}
                  height={120}
                  className={styles.investment_process_card_image}
                />
              </div>
              <p className={styles.investment_process_card_description}>
                무료 경영 진단 신청
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className={styles.investment_process_arrow}
            >
              <path
                d="M28.5 18L7.5 18M28.5 18L19.5 27M28.5 18L19.5 9"
                stroke="#4C85FF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={styles.investment_process_card}>
              <div className={styles.investment_process_step_badge}>STEP 2</div>
              <h3 className={styles.investment_process_card_title}>
                현황 분석
              </h3>
              <div className={styles.investment_process_card_icon}>
                <Image
                  src="/images/bizsupport/bizsupport_process_02.png"
                  alt="서류 준비"
                  width={120}
                  height={120}
                  className={styles.investment_process_card_image}
                />
              </div>
              <p className={styles.investment_process_card_description}>
                기업 상황 및 니즈 분석
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className={styles.investment_process_arrow}
            >
              <path
                d="M28.5 18L7.5 18M28.5 18L19.5 27M28.5 18L19.5 9"
                stroke="#4C85FF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={styles.investment_process_card}>
              <div className={styles.investment_process_step_badge}>STEP 3</div>
              <h3 className={styles.investment_process_card_title}>
                전략 수립
              </h3>
              <div className={styles.investment_process_card_icon}>
                <Image
                  src="/images/bizsupport/bizsupport_process_03.png"
                  alt="신청 대행"
                  width={120}
                  height={120}
                  className={styles.investment_process_card_image}
                />
              </div>
              <p className={styles.investment_process_card_description}>
                맞춤형 경영 전략 수립
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className={styles.investment_process_arrow}
            >
              <path
                d="M28.5 18L7.5 18M28.5 18L19.5 27M28.5 18L19.5 9"
                stroke="#4C85FF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={styles.investment_process_card}>
              <div className={styles.investment_process_step_badge}>STEP 4</div>
              <h3 className={styles.investment_process_card_title}>
                실행 지원
              </h3>
              <div className={styles.investment_process_card_icon}>
                <Image
                  src="/images/bizsupport/bizsupport_process_04.png"
                  alt="심사 지원"
                  width={120}
                  height={120}
                  className={styles.investment_process_card_image}
                />
              </div>
              <p className={styles.investment_process_card_description}>
                전략 실행 및 모니터링
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              className={styles.investment_process_arrow}
            >
              <path
                d="M28.5 18L7.5 18M28.5 18L19.5 27M28.5 18L19.5 9"
                stroke="#4C85FF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={styles.investment_process_card}>
              <div className={styles.investment_process_step_badge}>STEP 5</div>
              <h3 className={styles.investment_process_card_title}>
                성과 관리
              </h3>
              <div className={styles.investment_process_card_icon}>
                <Image
                  src="/images/bizsupport/bizsupport_process_05.png"
                  alt="사후 관리"
                  width={120}
                  height={120}
                  className={styles.investment_process_card_image}
                />
              </div>
              <p className={styles.investment_process_card_description}>
                성과 측정 및 개선
              </p>
            </div>
          </div>
        </section>

        <section className={styles.additional_services_section}>
          <div className={styles.additional_services_contents_wrapper}>
            <h2 className={styles.additional_services_title}>
              경영지원 추가 서비스
            </h2>
            <p className={styles.additional_services_subtitle}>
              기업 성장에 필요한 다양한 추가 서비스를 제공합니다
            </p>

            <div className={styles.additional_services_cards_wrapper}>
              <div className={styles.additional_services_card}>
                <div className={styles.additional_services_card_top}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    className={styles.additional_services_card_icon}
                  >
                    <path
                      d="M21.6673 6.5V15.1667C21.6673 15.7413 21.439 16.2924 21.0327 16.6987C20.6264 17.1051 20.0753 17.3333 19.5007 17.3333H10.834M19.5007 30.3333L23.834 34.6667L32.5007 26M41.1673 8.66667V43.3333C41.1673 43.908 40.939 44.4591 40.5327 44.8654C40.1264 45.2717 39.5753 45.5 39.0007 45.5H13.0007C12.426 45.5 11.8749 45.2717 11.4686 44.8654C11.0623 44.4591 10.834 43.908 10.834 43.3333V17.147C10.8341 16.5724 11.0625 16.0214 11.4688 15.6152L19.9492 7.13483C20.3554 6.72848 20.9064 6.50012 21.481 6.5H39.0007C39.5753 6.5 40.1264 6.72827 40.5327 7.1346C40.939 7.54093 41.1673 8.09203 41.1673 8.66667Z"
                      stroke="#0051FF"
                      strokeWidth="4.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className={styles.additional_services_card_title}>
                    정책자금 신청
                  </p>
                  <p className={styles.additional_services_card_description}>
                    정부 지원 정책자금 신청 컨설팅
                  </p>
                </div>
                <div className={styles.additional_services_card_bottom}>
                  <p className={styles.additional_services_card_bottom_item}>
                    서류 작성 지원
                  </p>
                  <p className={styles.additional_services_card_bottom_item}>
                    신청 대행
                  </p>
                  <p className={styles.additional_services_card_bottom_item}>
                    사후관리
                  </p>
                </div>
              </div>
              <div className={styles.additional_services_card}>
                <div className={styles.additional_services_card_top}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    className={styles.additional_services_card_icon}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.6667 0C33.6332 0 43.3333 9.70017 43.3333 21.6667C43.3333 33.6332 33.6332 43.3333 21.6667 43.3333C9.70017 43.3333 0 33.6332 0 21.6667C0 9.70017 9.70017 0 21.6667 0ZM21.6667 4.33333C17.0696 4.33333 12.6608 6.15952 9.41015 9.41015C6.15952 12.6608 4.33333 17.0696 4.33333 21.6667C4.33333 26.2638 6.15952 30.6726 9.41015 33.9232C12.6608 37.1738 17.0696 39 21.6667 39C26.2638 39 30.6726 37.1738 33.9232 33.9232C37.1738 30.6726 39 26.2638 39 21.6667C39 17.0696 37.1738 12.6608 33.9232 9.41015C30.6726 6.15952 26.2638 4.33333 21.6667 4.33333ZM18.603 12.4735C19.3701 11.7069 20.3967 11.2558 21.4802 11.2093C22.5637 11.1628 23.6252 11.5242 24.4552 12.2222L24.7303 12.4735L30.8598 18.603C31.6264 19.3701 32.0775 20.3967 32.124 21.4802C32.1706 22.5637 31.8092 23.6252 31.1112 24.4552L30.8598 24.7303L24.7303 30.8598C23.9632 31.6264 22.9366 32.0775 21.8531 32.124C20.7697 32.1706 19.7082 31.8092 18.8782 31.1112L18.603 30.8598L12.4735 24.7303C11.7069 23.9632 11.2558 22.9366 11.2093 21.8531C11.1628 20.7697 11.5242 19.7082 12.2222 18.8782L12.4735 18.603L18.603 12.4735ZM21.6667 15.5393L15.5393 21.6667L21.6667 27.794L27.794 21.6667L21.6667 15.5393Z"
                      fill="#0051FF"
                    />
                  </svg>
                  <p className={styles.additional_services_card_title}>
                    투자유치 지원
                  </p>
                  <p className={styles.additional_services_card_description}>
                    기업 가치 평가 및 투자 유치 전략
                  </p>
                </div>
                <div className={styles.additional_services_card_bottom}>
                  <p className={styles.additional_services_card_bottom_item}>
                    가치 평가
                  </p>
                  <p className={styles.additional_services_card_bottom_item}>
                    IR 자료 작성
                  </p>
                  <p className={styles.additional_services_card_bottom_item}>
                    투자자 매칭
                  </p>
                </div>
              </div>
              <div className={styles.additional_services_card}>
                <div className={styles.additional_services_card_top}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    className={styles.additional_services_card_icon}
                  >
                    <path
                      d="M47.4929 14.3433C47.273 13.8139 46.8523 13.3932 46.3229 13.1733C46.0624 13.0623 45.7827 13.0034 45.4995 13H34.6662C34.0916 13 33.5405 13.2283 33.1341 13.6346C32.7278 14.0409 32.4995 14.592 32.4995 15.1667C32.4995 15.7413 32.7278 16.2924 33.1341 16.6987C33.5405 17.1051 34.0916 17.3333 34.6662 17.3333H40.2779L28.1662 29.445L21.0379 22.295C20.8365 22.0919 20.5968 21.9307 20.3328 21.8207C20.0688 21.7107 19.7856 21.6541 19.4995 21.6541C19.2135 21.6541 18.9303 21.7107 18.6663 21.8207C18.4023 21.9307 18.1626 22.0919 17.9612 22.295L4.96121 35.295C4.75813 35.4964 4.59694 35.7361 4.48694 36.0001C4.37695 36.2641 4.32031 36.5473 4.32031 36.8333C4.32031 37.1194 4.37695 37.4026 4.48694 37.6666C4.59694 37.9306 4.75813 38.1702 4.96121 38.3717C5.16263 38.5747 5.40226 38.7359 5.66629 38.8459C5.93032 38.9559 6.21352 39.0126 6.49954 39.0126C6.78557 39.0126 7.06876 38.9559 7.33279 38.8459C7.59682 38.7359 7.83646 38.5747 8.03788 38.3717L19.4995 26.8883L26.6279 34.0383C26.8293 34.2414 27.0689 34.4026 27.333 34.5126C27.597 34.6226 27.8802 34.6792 28.1662 34.6792C28.4522 34.6792 28.7354 34.6226 28.9995 34.5126C29.2635 34.4026 29.5031 34.2414 29.7045 34.0383L43.3329 20.3883V26C43.3329 26.5746 43.5611 27.1257 43.9675 27.5321C44.3738 27.9384 44.9249 28.1667 45.4995 28.1667C46.0742 28.1667 46.6253 27.9384 47.0316 27.5321C47.4379 27.1257 47.6662 26.5746 47.6662 26V15.1667C47.6628 14.8835 47.6039 14.6038 47.4929 14.3433Z"
                      fill="#0051FF"
                    />
                  </svg>
                  <p className={styles.additional_services_card_title}>
                    EXIT 전략
                  </p>
                  <p className={styles.additional_services_card_description}>
                    기업 매각 및 상장 전략 수립
                  </p>
                </div>
                <div className={styles.additional_services_card_bottom}>
                  <p className={styles.additional_services_card_bottom_item}>
                    기업 가치 극대화
                  </p>
                  <p className={styles.additional_services_card_bottom_item}>
                    인수자 발굴
                  </p>
                  <p className={styles.additional_services_card_bottom_item}>
                    거래 지원
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta_section}>
          <div className={styles.cta_text_wrapper}>
            <h2 className={styles.cta_title}>
              기업 성장의 파트너가 되겠습니다
            </h2>
            <p className={styles.cta_description}>
              한평생 바로 기업과 함께 성공적인 경영 전략을 수립하고 실행하세요
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
