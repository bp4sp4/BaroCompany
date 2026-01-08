"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ConsultationProvider } from "../components/ConsultationContext";
import FloatingButton from "../components/FloatingButton";
import Image from "next/image";
import styles from "./fundraising.module.css";

export default function FundraisingPage() {
  return (
    <ConsultationProvider>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.banner_image_wrapper}>
            <Image
              src="/images/policyfunds/policy_banner.png"
              alt="투자유치 배너"
              fill
              className={styles.banner_image}
              priority
            />
          </div>
          <div className={styles.banner_overlay} />
          <div className={styles.banner_content}>
            <h1 className={styles.banner_title}>
              성공적인
              <br /> 투자 유치의 파트너
            </h1>
            <p className={styles.banner_subtitle}>
              한평생 바로 기업의 투자 유치 전문가와 함께
              <br /> 기업의 가치를 극대화하고 적절한 투자자를 발굴하세요.
            </p>
          </div>
        </section>
        <section className={styles.services_section}>
          <div className={styles.services_content_wrapper}>
            <div className={styles.services_text_wrapper}>
              <p className={styles.services_subtitle}>
                기업의 가치를 극대화하고 적절한 투자자를 발굴하는 전문 서비스
              </p>
              <h2 className={styles.services_title}>투자 유치 서비스</h2>
            </div>
            <div className={styles.services_cards_container}>
              <div className={styles.service_card}>
                <div className={styles.service_card_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    className={styles.service_icon_svg}
                  >
                    <path
                      d="M19.5 41.1667V28.1667C19.5 27.5921 19.2717 27.041 18.8654 26.6346C18.4591 26.2283 17.908 26 17.3333 26H8.66667C8.09203 26 7.54093 26.2283 7.1346 26.6346C6.72827 27.041 6.5 27.5921 6.5 28.1667V41.1667C6.5 41.7413 6.72827 42.2924 7.1346 42.6988C7.54093 43.1051 8.09203 43.3334 8.66667 43.3334M19.5 41.1667C19.5 41.7413 19.2717 42.2924 18.8654 42.6988C18.4591 43.1051 17.908 43.3334 17.3333 43.3334H8.66667M19.5 41.1667C19.5 41.7413 19.7283 42.2924 20.1346 42.6988C20.5409 43.1051 21.092 43.3334 21.6667 43.3334H30.3333C30.908 43.3334 31.4591 43.1051 31.8654 42.6988C32.2717 42.2924 32.5 41.7413 32.5 41.1667M19.5 41.1667V10.8334C19.5 10.2587 19.7283 9.70762 20.1346 9.30129C20.5409 8.89496 21.092 8.66669 21.6667 8.66669H30.3333C30.908 8.66669 31.4591 8.89496 31.8654 9.30129C32.2717 9.70762 32.5 10.2587 32.5 10.8334V41.1667M8.66667 43.3334H39M32.5 41.1667C32.5 41.7413 32.7283 42.2924 33.1346 42.6988C33.5409 43.1051 34.092 43.3334 34.6667 43.3334H43.3333C43.908 43.3334 44.4591 43.1051 44.8654 42.6988C45.2717 42.2924 45.5 41.7413 45.5 41.1667V19.5C45.5 18.9254 45.2717 18.3743 44.8654 17.968C44.4591 17.5616 43.908 17.3334 43.3333 17.3334H34.6667C34.092 17.3334 33.5409 17.5616 33.1346 17.968C32.7283 18.3743 32.5 18.9254 32.5 19.5V41.1667Z"
                      stroke="#0051FF"
                      strokeWidth="4.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className={styles.service_card_content}>
                  <h3 className={styles.service_card_title}>기업 가치 평가</h3>
                  <p className={styles.service_card_description}>
                    객관적인 데이터 기반 기업
                    <br /> 가치 평가 및 분석
                  </p>
                </div>
              </div>
              <div className={styles.service_card}>
                <div className={styles.service_card_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    className={styles.service_icon_svg}
                  >
                    <path
                      d="M26.0007 4.33331C26.5753 4.33331 27.1264 4.56159 27.5327 4.96791C27.939 5.37424 28.1673 5.92534 28.1673 6.49998C28.1673 7.07462 27.939 7.62572 27.5327 8.03204C27.1264 8.43837 26.5753 8.66665 26.0007 8.66665C22.5724 8.66665 19.2212 9.68323 16.3708 11.5878C13.5203 13.4925 11.2987 16.1995 9.98674 19.3668C8.67482 22.5341 8.33156 26.0192 9.00037 29.3815C9.66918 32.7439 11.32 35.8324 13.7441 38.2565C16.1682 40.6806 19.2567 42.3315 22.6191 43.0003C25.9814 43.6691 29.4666 43.3258 32.6338 42.0139C35.8011 40.702 38.5082 38.4803 40.4128 35.6299C42.3174 32.7794 43.334 29.4282 43.334 26C43.334 25.4253 43.5623 24.8742 43.9686 24.4679C44.3749 24.0616 44.926 23.8333 45.5007 23.8333C46.0753 23.8333 46.6264 24.0616 47.0327 24.4679C47.439 24.8742 47.6673 25.4253 47.6673 26C47.6673 37.9665 37.9672 47.6666 26.0007 47.6666C14.0342 47.6666 4.33398 37.9665 4.33398 26C4.33398 14.0335 14.0342 4.33331 26.0007 4.33331ZM26.0007 13C26.5753 13 27.1264 13.2283 27.5327 13.6346C27.939 14.0409 28.1673 14.592 28.1673 15.1666C28.1673 15.7413 27.939 16.2924 27.5327 16.6987C27.1264 17.105 26.5753 17.3333 26.0007 17.3333C24.2865 17.3333 22.6109 17.8416 21.1857 18.7939C19.7605 19.7462 18.6497 21.0998 17.9937 22.6834C17.3377 24.267 17.1661 26.0096 17.5005 27.6908C17.8349 29.3719 18.6603 30.9162 19.8724 32.1282C21.0844 33.3403 22.6287 34.1657 24.3099 34.5001C25.991 34.8345 27.7336 34.6629 29.3172 34.0069C30.9009 33.351 32.2544 32.2401 33.2067 30.8149C34.159 29.3897 34.6673 27.7141 34.6673 26C34.6673 25.4253 34.8956 24.8742 35.3019 24.4679C35.7082 24.0616 36.2593 23.8333 36.834 23.8333C37.4086 23.8333 37.9597 24.0616 38.3661 24.4679C38.7724 24.8742 39.0007 25.4253 39.0007 26C39.0007 28.5711 38.2382 31.0846 36.8098 33.2224C35.3813 35.3602 33.351 37.0265 30.9755 38.0104C28.6001 38.9944 25.9862 39.2518 23.4645 38.7502C20.9427 38.2486 18.6263 37.0105 16.8083 35.1924C14.9902 33.3743 13.7521 31.0579 13.2504 28.5362C12.7488 26.0144 13.0063 23.4005 13.9902 21.0251C14.9742 18.6497 16.6404 16.6193 18.7782 15.1909C20.9161 13.7624 23.4295 13 26.0007 13ZM40.2378 4.54998C40.5251 4.54998 40.8007 4.66412 41.0038 4.86728C41.207 5.07045 41.3212 5.34599 41.3212 5.63331V9.59831C41.3217 9.88526 41.4361 10.1602 41.6392 10.3629C41.8423 10.5656 42.1175 10.6795 42.4045 10.6795H46.3673C46.6546 10.6795 46.9302 10.7936 47.1334 10.9968C47.3365 11.1999 47.4507 11.4755 47.4507 11.7628V13.7453L43.36 17.836C42.5475 18.6487 41.4455 19.1054 40.2963 19.1056H35.963L27.5347 27.5318C27.126 27.9265 26.5787 28.1449 26.0106 28.1399C25.4425 28.135 24.8991 27.9071 24.4974 27.5054C24.0957 27.1037 23.8678 26.5603 23.8629 25.9922C23.8579 25.4241 24.0763 24.8768 24.471 24.4681L32.8993 16.042V11.7086C32.899 10.5598 33.3549 9.4578 34.1668 8.64498L38.2618 4.54998H40.2378Z"
                      fill="#0051FF"
                    />
                  </svg>
                </div>
                <div className={styles.service_card_content}>
                  <h3 className={styles.service_card_title}>투자 유치 전략</h3>
                  <p className={styles.service_card_description}>
                    적절한 투자자 발굴 및<br /> 투자 유치 전략 수립
                  </p>
                </div>
              </div>
              <div className={styles.service_card}>
                <div className={styles.service_card_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    className={styles.service_icon_svg}
                  >
                    <path
                      d="M36.8333 8.66665C36.2587 8.66665 35.7076 8.43837 35.3013 8.03204C34.8949 7.62572 34.6667 7.07462 34.6667 6.49998C34.6667 5.92534 34.8949 5.37424 35.3013 4.96791C35.7076 4.56159 36.2587 4.33331 36.8333 4.33331H45.5C46.0746 4.33331 46.6257 4.56159 47.0321 4.96791C47.4384 5.37424 47.6667 5.92534 47.6667 6.49998V15.1666C47.6667 15.7413 47.4384 16.2924 47.0321 16.6987C46.6257 17.105 46.0746 17.3333 45.5 17.3333C44.9254 17.3333 44.3743 17.105 43.9679 16.6987C43.5616 16.2924 43.3333 15.7413 43.3333 15.1666V11.7303L30.7818 24.2818C30.3755 24.688 29.8245 24.9162 29.25 24.9162C28.6755 24.9162 28.1245 24.688 27.7182 24.2818L21.6667 18.2303L10.1985 29.6985C9.78986 30.0932 9.24256 30.3115 8.67446 30.3066C8.10637 30.3017 7.56294 30.0738 7.16123 29.6721C6.75951 29.2704 6.53164 28.7269 6.52671 28.1588C6.52177 27.5908 6.74016 27.0435 7.13483 26.6348L20.1348 13.6348C20.5411 13.2286 21.0921 13.0004 21.6667 13.0004C22.2412 13.0004 22.7922 13.2286 23.1985 13.6348L29.25 19.6863L40.2697 8.66665H36.8333ZM10.8333 39V45.5C10.8333 46.0746 10.6051 46.6257 10.1987 47.032C9.7924 47.4384 9.2413 47.6666 8.66667 47.6666C8.09203 47.6666 7.54093 47.4384 7.1346 47.032C6.72827 46.6257 6.5 46.0746 6.5 45.5V39C6.5 38.4253 6.72827 37.8742 7.1346 37.4679C7.54093 37.0616 8.09203 36.8333 8.66667 36.8333C9.2413 36.8333 9.7924 37.0616 10.1987 37.4679C10.6051 37.8742 10.8333 38.4253 10.8333 39ZM21.6667 30.3333C21.6667 29.7587 21.4384 29.2076 21.0321 28.8013C20.6257 28.3949 20.0746 28.1666 19.5 28.1666C18.9254 28.1666 18.3743 28.3949 17.9679 28.8013C17.5616 29.2076 17.3333 29.7587 17.3333 30.3333V45.5C17.3333 46.0746 17.5616 46.6257 17.9679 47.032C18.3743 47.4384 18.9254 47.6666 19.5 47.6666C20.0746 47.6666 20.6257 47.4384 21.0321 47.032C21.4384 46.6257 21.6667 46.0746 21.6667 45.5V30.3333ZM30.3333 32.5C30.908 32.5 31.4591 32.7283 31.8654 33.1346C32.2717 33.5409 32.5 34.092 32.5 34.6666V45.5C32.5 46.0746 32.2717 46.6257 31.8654 47.032C31.4591 47.4384 30.908 47.6666 30.3333 47.6666C29.7587 47.6666 29.2076 47.4384 28.8013 47.032C28.3949 46.6257 28.1667 46.0746 28.1667 45.5V34.6666C28.1667 34.092 28.3949 33.5409 28.8013 33.1346C29.2076 32.7283 29.7587 32.5 30.3333 32.5ZM43.3333 23.8333C43.3333 23.2587 43.1051 22.7076 42.6987 22.3012C42.2924 21.8949 41.7413 21.6666 41.1667 21.6666C40.592 21.6666 40.0409 21.8949 39.6346 22.3012C39.2283 22.7076 39 23.2587 39 23.8333V45.5C39 46.0746 39.2283 46.6257 39.6346 47.032C40.0409 47.4384 40.592 47.6666 41.1667 47.6666C41.7413 47.6666 42.2924 47.4384 42.6987 47.032C43.1051 46.6257 43.3333 46.0746 43.3333 45.5V23.8333Z"
                      fill="#0051FF"
                    />
                  </svg>
                </div>
                <div className={styles.service_card_content}>
                  <h3 className={styles.service_card_title}>IR 자료 작성</h3>
                  <p className={styles.service_card_description}>
                    투자자를 매료시키는
                    <br /> 전문적인 IR 자료 제작
                  </p>
                </div>
              </div>
              <div className={styles.service_card}>
                <div className={styles.service_card_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    className={styles.service_icon_svg}
                  >
                    <path
                      d="M6.50075 17.875C6.50052 15.9896 6.96894 14.1337 7.8639 12.4742C8.75885 10.8147 10.0523 9.40375 11.6278 8.36814C13.2033 7.33254 15.0116 6.70481 16.8899 6.5414C18.7682 6.37799 20.6577 6.68404 22.3884 7.43202C24.1191 8.17999 25.6367 9.34643 26.8048 10.8264C27.9729 12.3064 28.7548 14.0536 29.0801 15.9107C29.4055 17.7678 29.2641 19.6767 28.6687 21.4656C28.0733 23.2546 27.0426 24.8675 25.6693 26.1592C28.2585 27.4163 30.5067 29.279 32.2231 31.5895C33.9396 33.9 35.0739 36.5903 35.5298 39.4322C35.5799 39.7485 35.5673 40.0715 35.4926 40.3829C35.4179 40.6943 35.2826 40.9879 35.0944 41.247C34.9062 41.5061 34.6689 41.7256 34.3959 41.8929C34.1229 42.0603 33.8196 42.1722 33.5034 42.2224C33.1871 42.2725 32.8641 42.2599 32.5527 42.1852C32.2413 42.1105 31.9477 41.9752 31.6886 41.787C31.4296 41.5989 31.2101 41.3615 31.0427 41.0885C30.8753 40.8155 30.7634 40.5123 30.7132 40.196C30.2258 37.142 28.6655 34.3618 26.3126 32.3547C23.9598 30.3476 20.9684 29.245 17.8757 29.245C14.7831 29.245 11.7917 30.3476 9.43886 32.3547C7.08598 34.3618 5.52571 37.142 5.03825 40.196C4.98789 40.5123 4.87573 40.8155 4.70817 41.0884C4.54062 41.3613 4.32095 41.5985 4.06171 41.7866C3.80248 41.9746 3.50874 42.1097 3.19729 42.1842C2.88583 42.2587 2.56276 42.2711 2.2465 42.2207C1.93024 42.1704 1.627 42.0582 1.35409 41.8907C1.08119 41.7231 0.84395 41.5035 0.655935 41.2442C0.467919 40.985 0.332806 40.6912 0.258308 40.3798C0.183811 40.0683 0.171388 39.7453 0.22175 39.429C0.67601 36.5873 1.80968 33.8972 3.5264 31.5875C5.24312 29.2778 7.49212 27.4167 10.0823 26.1625C8.95126 25.0987 8.05003 23.8146 7.43408 22.3893C6.81813 20.964 6.5005 19.4277 6.50075 17.875ZM35.7508 13C37.639 13.0013 39.4864 13.5508 41.0684 14.5816C42.6505 15.6125 43.8993 17.0804 44.6633 18.8073C45.4273 20.5341 45.6735 22.4456 45.3722 24.3097C45.0709 26.1738 44.2349 27.9103 42.9658 29.3085C44.9451 30.289 46.7037 31.6628 48.1342 33.3459C49.5647 35.029 50.6371 36.986 51.2858 39.0975C51.4146 39.5072 51.4327 39.9437 51.3383 40.3627C51.2439 40.7817 51.0403 41.1683 50.7482 41.4832C50.4561 41.798 50.0859 42.03 49.6751 42.1556C49.2644 42.2811 48.8277 42.2958 48.4095 42.198C47.9914 42.1013 47.6062 41.8959 47.2929 41.6026C46.9796 41.3092 46.7493 40.9384 46.6252 40.5275C46.0419 38.6436 44.9802 36.9432 43.5436 35.5921C42.1071 34.241 40.3448 33.2854 38.4288 32.8185C37.8965 32.69 37.4231 32.3861 37.0846 31.9557C36.7462 31.5253 36.5626 30.9935 36.5633 30.446V29.302C36.563 28.8482 36.6894 28.4033 36.9282 28.0175C37.1671 27.6316 37.5089 27.3201 37.9153 27.118C38.9005 26.6297 39.6918 25.8226 40.1605 24.8279C40.6292 23.8331 40.7478 22.7091 40.4971 21.6385C40.2463 20.5678 39.641 19.6133 38.7794 18.9301C37.9177 18.2469 36.8504 17.8751 35.7508 17.875C35.1043 17.875 34.4843 17.6182 34.0272 17.1611C33.5701 16.704 33.3133 16.084 33.3133 15.4375C33.3133 14.791 33.5701 14.171 34.0272 13.7139C34.4843 13.2568 35.1043 13 35.7508 13ZM17.8757 11.375C17.0101 11.3554 16.1494 11.509 15.3439 11.8267C14.5385 12.1443 13.8046 12.6197 13.1854 13.2249C12.5663 13.8301 12.0742 14.5529 11.7382 15.3509C11.4022 16.1488 11.229 17.0059 11.2288 17.8717C11.2286 18.7375 11.4013 19.5947 11.7369 20.3928C12.0726 21.1909 12.5642 21.914 13.1831 22.5195C13.802 23.125 14.5356 23.6007 15.3409 23.9188C16.1462 24.2369 17.0069 24.3909 17.8725 24.3717C19.5708 24.3342 21.187 23.6333 22.375 22.419C23.5629 21.2048 24.2284 19.5737 24.2288 17.875C24.2292 16.1762 23.5646 14.5448 22.3772 13.33C21.1898 12.1151 19.5741 11.4134 17.8757 11.375Z"
                      fill="#0051FF"
                    />
                  </svg>
                </div>
                <div className={styles.service_card_content}>
                  <h3 className={styles.service_card_title}>투자자 매칭</h3>
                  <p className={styles.service_card_description}>
                    적합한 투자자 네트워크
                    <br /> 연결 및 매칭
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.investment_process_section}>
          <div className={styles.investment_process_text_wrapper}>
            <h2 className={styles.investment_process_title}>
              투자 유치 프로세스
            </h2>
            <p className={styles.investment_process_subtitle}>
              체계적인 5단계 프로세스로 성공적인 투자 유치를 지원합니다
            </p>
          </div>
          <div className={styles.investment_process_cards_container}>
            <div className={styles.investment_process_card}>
              <div className={styles.investment_process_step_badge}>STEP 1</div>
              <h3 className={styles.investment_process_card_title}>
                기업 분석
              </h3>
              <div className={styles.investment_process_card_icon}>
                <Image
                  src="/images/investment/investment_process_01.png"
                  alt="무료 진단"
                  width={120}
                  height={120}
                  className={styles.investment_process_card_image}
                />
              </div>
              <p className={styles.investment_process_card_description}>
                기업의 사업 모델, 시장,
                <br />
                경쟁력 분석
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
                가치 평가
              </h3>
              <div className={styles.investment_process_card_icon}>
                <Image
                  src="/images/investment/investment_process_02.png"
                  alt="서류 준비"
                  width={120}
                  height={120}
                  className={styles.investment_process_card_image}
                />
              </div>
              <p className={styles.investment_process_card_description}>
                객관적인인 기준에 따른
                <br />
                기업 가치 신청
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
                  src="/images/investment/investment_process_03.png"
                  alt="신청 대행"
                  width={120}
                  height={120}
                  className={styles.investment_process_card_image}
                />
              </div>
              <p className={styles.investment_process_card_description}>
                투자유치 목표액 및
                <br /> 전략 수립
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
              <h3 className={styles.investment_process_card_title}>IR 준비</h3>
              <div className={styles.investment_process_card_icon}>
                <Image
                  src="/images/investment/investment_process_04.png"
                  alt="심사 지원"
                  width={120}
                  height={120}
                  className={styles.investment_process_card_image}
                />
              </div>
              <p className={styles.investment_process_card_description}>
                투자 설명회 자료 및
                <br /> 피칭 준비
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
                투자자 매칭
              </h3>
              <div className={styles.investment_process_card_icon}>
                <Image
                  src="/images/investment/investment_process_05.png"
                  alt="사후 관리"
                  width={120}
                  height={120}
                  className={styles.investment_process_card_image}
                />
              </div>
              <p className={styles.investment_process_card_description}>
                적합한 투자자
                <br />
                발굴 및 협상
              </p>
            </div>
          </div>
        </section>
        <section className={styles.investment_reason_section}>
          <div className={styles.investment_reason_content}>
            <p className={styles.investment_reason_subtitle}>
              투자 유치 전문가로서 기업의 최대 이익을 위해 최선을 다합니다
            </p>
            <h2 className={styles.investment_reason_title}>
              한평생 바로 기업을 선택해야 하는 이유
            </h2>
          </div>
          <div className={styles.investment_feature_cards_container}>
            <div className={styles.investment_feature_card}>
              <div className={styles.investment_feature_card_image}>
                <Image
                  src="/images/investment/investment_reason01.jpg"
                  alt="전문가 팀"
                  fill
                  className={styles.investment_feature_card_image_img}
                />
              </div>
              <h3 className={styles.investment_feature_card_title}>
                전문가 팀
              </h3>
              <p className={styles.investment_feature_card_subtitle}>
                투자 유치 경험이 풍부한 전문가 팀
              </p>
            </div>
            <div className={styles.investment_feature_card}>
              <div className={styles.investment_feature_card_image}>
                <Image
                  src="/images/investment/investment_reason02.jpg"
                  alt="네트워크"
                  fill
                  className={styles.investment_feature_card_image_img}
                />
              </div>
              <h3 className={styles.investment_feature_card_title}>네트워크</h3>
              <p className={styles.investment_feature_card_subtitle}>
                다양한 투자자 및 기관 네트워크 보유
              </p>
            </div>
            <div className={styles.investment_feature_card}>
              <div className={styles.investment_feature_card_image}>
                <Image
                  src="/images/investment/investment_reason03.jpg"
                  alt="데이터 기반"
                  fill
                  className={styles.investment_feature_card_image_img}
                />
              </div>
              <h3 className={styles.investment_feature_card_title}>
                데이터 기반
              </h3>
              <p className={styles.investment_feature_card_subtitle}>
                시장 데이터와 벤치마킹을 통한 전략
              </p>
            </div>
            <div className={styles.investment_feature_card}>
              <div className={styles.investment_feature_card_image}>
                <Image
                  src="/images/investment/investment_reason04.jpg"
                  alt="최대 혜택"
                  fill
                  className={styles.investment_feature_card_image_img}
                />
              </div>
              <h3 className={styles.investment_feature_card_title}>
                지속 지원
              </h3>
              <p className={styles.investment_feature_card_subtitle}>
                투자 유치 후 기업 성장까지 지속 지원
              </p>
            </div>
          </div>
        </section>
        <section className={styles.post_investment_section}>
          <div className={styles.post_investment_text_wrapper}>
            <p className={styles.post_investment_subtitle}>
              투자 유치 후에도 기업 성장까지 지속적으로 지원합니다
            </p>
            <h2 className={styles.post_investment_title}>투자 유치 후 지원</h2>
          </div>
          <div className={styles.post_investment_cards_container}>
            <div className={styles.post_investment_card}>
              <div className={styles.post_investment_card_top}>
                <div className={styles.post_investment_card_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <circle cx="13" cy="13" r="4" fill="#0051FF" />
                    <circle cx="26" cy="13" r="4" fill="#0051FF" />
                    <circle cx="39" cy="13" r="4" fill="#0051FF" />
                    <circle cx="13" cy="26" r="4" fill="#0051FF" />
                    <circle cx="26" cy="26" r="4" fill="#0051FF" />
                    <circle cx="39" cy="26" r="4" fill="#0051FF" />
                    <circle cx="13" cy="39" r="4" fill="#0051FF" />
                    <circle cx="26" cy="39" r="4" fill="#0051FF" />
                    <circle cx="39" cy="39" r="4" fill="#0051FF" />
                  </svg>
                </div>
                <div className={styles.post_investment_card_title_wrapper}>
                  <h3 className={styles.post_investment_card_title}>
                    경영 컨설팅
                  </h3>
                  <p className={styles.post_investment_card_subtitle}>
                    투자 자금 활용 및 경영 전략 수립
                  </p>
                </div>
              </div>
              <div className={styles.post_investment_card_bottom}>
                <ul className={styles.post_investment_card_list}>
                  <li className={styles.post_investment_card_list_item}>
                    자금 운용 계획
                  </li>
                  <li className={styles.post_investment_card_list_item}>
                    성장 전략
                  </li>
                  <li className={styles.post_investment_card_list_item}>
                    성과 모니터링
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.post_investment_card}>
              <div className={styles.post_investment_card_top}>
                <div className={styles.post_investment_card_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <circle cx="20" cy="20" r="6" fill="#0051FF" />
                    <circle cx="32" cy="32" r="6" fill="#0051FF" />
                    <path
                      d="M20 20L32 32"
                      stroke="#0051FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M26 20L26 32"
                      stroke="#0051FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 26L32 26"
                      stroke="#0051FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className={styles.post_investment_card_title_wrapper}>
                  <h3 className={styles.post_investment_card_title}>
                    투자자 관계 관리
                  </h3>
                  <p className={styles.post_investment_card_subtitle}>
                    투자자와의 지속적인 관계 유지 및 관리
                  </p>
                </div>
              </div>
              <div className={styles.post_investment_card_bottom}>
                <ul className={styles.post_investment_card_list}>
                  <li className={styles.post_investment_card_list_item}>
                    정기 보고
                  </li>
                  <li className={styles.post_investment_card_list_item}>
                    투자자 미팅
                  </li>
                  <li className={styles.post_investment_card_list_item}>
                    관계 유지
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.post_investment_card}>
              <div className={styles.post_investment_card_top}>
                <div className={styles.post_investment_card_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                  >
                    <circle cx="26" cy="26" r="12" fill="#0051FF" />
                    <path
                      d="M26 18V26L32 32"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M26 14V18M26 34V38M14 26H18M34 26H38"
                      stroke="#0051FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className={styles.post_investment_card_title_wrapper}>
                  <h3 className={styles.post_investment_card_title}>
                    추가 투자 유치
                  </h3>
                  <p className={styles.post_investment_card_subtitle}>
                    시리즈 A, B 등 추가 투자 유치 지원
                  </p>
                </div>
              </div>
              <div className={styles.post_investment_card_bottom}>
                <ul className={styles.post_investment_card_list}>
                  <li className={styles.post_investment_card_list_item}>
                    가치 평가
                  </li>
                  <li className={styles.post_investment_card_list_item}>
                    IR 준비
                  </li>
                  <li className={styles.post_investment_card_list_item}>
                    투자자 발굴
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.cta_section}>
          <div className={styles.cta_text_wrapper}>
            <h2 className={styles.cta_title}>기업의 가치를 극대화하세요</h2>
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
