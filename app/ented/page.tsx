"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ConsultationProvider,
  useConsultation,
} from "../components/ConsultationContext";
import FloatingButton from "../components/FloatingButton";
import MobileFloatingBanner from "../components/MobileFloatingBanner";
import ConsultationFloatingBanner from "../components/ConsultationFloatingBanner";
import Image from "next/image";
import styles from "./ented.module.css";

function EntedContent() {
  const { openModal } = useConsultation();
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.banner}>
          <div className={styles.banner_image_wrapper}></div>
          <div className={styles.banner_overlay} />
          <div className={styles.banner_content}>
            <h1 className={styles.banner_title}>
              창업의 꿈을
              <br /> 현실로 만드는 교육
            </h1>
            <p className={styles.banner_subtitle}>
              기초부터 실전까지, 한평생 바로기업의
              <br />
              창업교육으로 성공적인 창업 준비
            </p>
          </div>
        </section>
        <section className={styles.programs_section}>
          <div className={styles.programs_wrapper}>
            <div className={styles.programs_header}>
              <p className={styles.programs_subtitle}>
                다양한 프로그램으로 성공적인 창업 지원
              </p>
              <h2 className={styles.programs_title}>창업교육 프로그램</h2>
            </div>
            <div className={styles.programs_cards}>
              <div className={styles.program_card}>
                <div className={styles.program_card_top}>
                  <div className={styles.program_card_icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <path
                        d="M8.66732 14.3715C8.97065 14.2487 9.33393 14.118 9.75715 13.9794C11.8578 13.3182 14.0485 12.9878 16.2507 13C18.4528 12.9878 20.6435 13.3182 22.7442 13.9794C23.1674 14.118 23.5307 14.2487 23.834 14.3715V37.9449C21.3764 37.1954 18.8199 36.8207 16.2507 36.8334C13.0873 36.8334 10.5112 37.3707 8.66732 37.9449V14.3715ZM26.0007 10.5842C25.3726 10.3071 24.7304 10.0634 24.0767 9.85403C21.5454 9.05437 18.9051 8.6538 16.2507 8.66669C12.9443 8.66669 10.2815 9.25386 8.42465 9.85403C7.68557 10.0915 6.96134 10.373 6.25582 10.6969C5.99372 10.8182 5.73575 10.9483 5.48232 11.0869L5.42815 11.1172L5.40865 11.128L5.40215 11.1324C5.39782 11.1367 4.86482 11.4509 5.39565 11.1367C5.07222 11.3285 4.80426 11.6011 4.61811 11.9278C4.43197 12.2545 4.33405 12.624 4.33398 13V41.1667C4.33405 41.5491 4.43534 41.9247 4.62755 42.2553C4.81977 42.5859 5.09606 42.8598 5.42837 43.049C5.76068 43.2383 6.13716 43.3362 6.51957 43.3329C6.90198 43.3296 7.2767 43.2251 7.60565 43.03L7.59482 43.0365L7.60132 43.0344L7.60348 43.0322L7.68365 42.9889C7.76454 42.9455 7.89598 42.8805 8.07798 42.7939C8.44632 42.6249 9.00965 42.3865 9.75715 42.1439C11.8579 41.4834 14.0486 41.1537 16.2507 41.1667C18.4527 41.1537 20.6434 41.4834 22.7442 42.1439C23.3163 42.3271 23.877 42.5441 24.4233 42.7939C24.5869 42.8697 24.748 42.9506 24.9065 43.0365M24.9065 43.0365L24.9022 43.0344L24.9 43.0322C25.5803 43.433 26.4253 43.433 27.1057 43.0322L27.1858 42.9889C27.2667 42.9455 27.3982 42.8805 27.5802 42.7939C28.1265 42.5441 28.6872 42.3271 29.2593 42.1439C31.3594 41.4836 33.5493 41.1539 35.7507 41.1667C37.9527 41.1537 40.1434 41.4834 42.2442 42.1439C42.8163 42.3271 43.377 42.5441 43.9233 42.7939C44.0839 42.8684 44.2421 42.9479 44.3978 43.0322C44.7269 43.2268 45.1016 43.3308 45.4838 43.3338C45.8661 43.3368 46.2424 43.2385 46.5744 43.0491C46.9065 42.8596 47.1825 42.5857 47.3744 42.2551C47.5663 41.9245 47.6674 41.549 47.6673 41.1667V13C47.6673 12.624 47.5693 12.2545 47.3832 11.9278C47.197 11.6011 46.9291 11.3285 46.6057 11.1367L46.6013 11.1345L46.5927 11.128L46.571 11.1172L46.519 11.0869C46.2656 10.9483 46.0076 10.8182 45.7455 10.6969C45.0407 10.3731 44.3172 10.0916 43.5788 9.85403C41.0469 9.05415 38.4059 8.65357 35.7507 8.66669C32.4465 8.66669 29.7815 9.25386 27.9247 9.85403C27.2709 10.0634 26.6287 10.3071 26.0007 10.5842M43.334 14.3715V37.9449C40.8764 37.1954 38.3199 36.8207 35.7507 36.8334C32.5873 36.8334 30.0112 37.3707 28.1673 37.9449V14.3715C28.4707 14.2487 28.8339 14.118 29.2572 13.9794C31.3578 13.3182 33.5485 12.9878 35.7507 13C37.9528 12.9878 40.1435 13.3182 42.2442 13.9794C42.6674 14.118 43.0307 14.2487 43.334 14.3715ZM44.3957 14.8655L44.4065 14.8699H44.4043L44.3957 14.8655ZM44.3978 43.0322L44.4043 43.0365L44.4 43.0322"
                        fill="#0051FF"
                      />
                    </svg>
                  </div>
                  <h3 className={styles.program_card_title}>기초 창업 교육</h3>
                  <p className={styles.program_card_description}>
                    창업의 기초부터 사업계획서 작성까지 체계적인 교육
                  </p>
                </div>
                <div className={styles.program_card_info}>
                  <div className={styles.program_card_info_item}>
                    <span className={styles.program_card_info_label}>기간</span>
                    <span className={styles.program_card_info_value}>8주</span>
                  </div>
                  <div className={styles.program_card_info_item}>
                    <span className={styles.program_card_info_label}>회차</span>
                    <span className={styles.program_card_info_value}>16회</span>
                  </div>
                </div>
              </div>
              <div className={styles.program_card}>
                <div className={styles.program_card_top}>
                  <div className={styles.program_card_icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <path
                        d="M35.7507 7.58331C40.2703 7.58331 44.0447 9.53331 45.7216 10.5538C47.0282 11.3468 47.6673 12.7378 47.6673 14.0833V41.1666C47.6673 42.5381 46.8462 43.563 45.9188 44.0743C45.419 44.3533 44.8576 44.5034 44.2852 44.5109C43.7129 44.5185 43.1477 44.3833 42.6407 44.1176C41.033 43.2618 38.5218 42.25 35.7507 42.25C33.4605 42.25 31.3415 42.9433 29.7512 43.6757C29.1164 43.9682 28.5 44.2988 27.9052 44.6658L27.5065 44.9475C27.441 44.9935 27.3713 45.0334 27.2985 45.0666C26.9628 45.318 26.5614 45.4665 26.143 45.4942C25.7245 45.5219 25.307 45.4276 24.9412 45.2226L24.4038 44.863L24.0962 44.668C23.5014 44.3003 22.8849 43.9689 22.2502 43.6757C20.6598 42.9433 18.5408 42.25 16.2507 42.25C13.4795 42.25 10.9683 43.2618 9.36065 44.1155C8.85365 44.3812 8.28843 44.5163 7.71608 44.5088C7.14373 44.5012 6.58229 44.3511 6.08248 44.0721C5.55647 43.7901 5.11635 43.3713 4.8086 42.8599C4.50085 42.3485 4.33687 41.7635 4.33398 41.1666V14.0833C4.33398 12.7378 4.97315 11.3468 6.27748 10.5538C9.31948 8.79015 12.6973 7.58331 16.2507 7.58331C19.3772 7.58331 22.1332 8.51498 24.0637 9.40765C24.835 9.76298 25.4872 10.127 26.0007 10.4281C26.5142 10.1248 27.1663 9.76298 27.9377 9.40765C29.866 8.51498 32.6242 7.58331 35.7507 7.58331ZM35.7507 11.9166C33.4605 11.9166 31.3415 12.61 29.7512 13.3423C29.2091 13.5936 28.6805 13.8728 28.1673 14.1786V15.1666C28.1673 15.7413 27.939 16.2924 27.5327 16.6987C27.1264 17.105 26.5753 17.3333 26.0007 17.3333C25.426 17.3333 24.8749 17.105 24.4686 16.6987C24.0623 16.2924 23.834 15.7413 23.834 15.1666V14.1786L23.2837 13.8645C22.945 13.6797 22.6003 13.5063 22.2502 13.3445C20.6598 12.6056 18.5408 11.9166 16.2507 11.9166C13.0007 11.9166 10.1255 13.3076 8.66732 14.1743V39.6413C10.5978 38.7746 13.2563 37.9166 16.2507 37.9166C19.2558 37.9166 21.9165 38.7811 23.834 39.6391V39C23.834 38.4253 24.0623 37.8742 24.4686 37.4679C24.8749 37.0616 25.426 36.8333 26.0007 36.8333C26.5753 36.8333 27.1264 37.0616 27.5327 37.4679C27.939 37.8742 28.1673 38.4253 28.1673 39V39.6391C30.0848 38.7811 32.7455 37.9166 35.7507 37.9166C38.745 37.9166 41.4035 38.7768 43.334 39.6413V14.1743C41.8758 13.3076 39.0007 11.9166 35.7507 11.9166ZM34.6673 26C35.4495 26 35.963 26.4073 36.171 26.6023C36.4223 26.8406 36.6 27.1418 36.7538 27.4473C36.9575 27.8032 37.2581 28.094 37.6205 28.2858C37.9087 28.444 38.1773 28.5935 38.4091 28.8383C38.789 29.2438 39.0004 29.7787 39.0004 30.3344C39.0004 30.8901 38.789 31.4249 38.4091 31.8305C38.1767 32.0557 37.9097 32.2422 37.6183 32.383C37.2562 32.5742 36.9557 32.8642 36.7517 33.2193C36.5848 33.5291 36.4332 33.8195 36.171 34.0686C35.7641 34.4539 35.225 34.6685 34.6647 34.668C34.1044 34.6676 33.5656 34.4523 33.1593 34.0665C32.8993 33.8195 32.7477 33.5291 32.5808 33.2193C32.3768 32.8642 32.0763 32.5742 31.7142 32.383C31.4215 32.2454 31.1547 32.0586 30.9255 31.8305C30.5459 31.4247 30.3349 30.8896 30.3353 30.334C30.3357 29.7783 30.5475 29.2436 30.9277 28.8383C31.1573 28.5935 31.426 28.4396 31.7163 28.2858C32.0787 28.094 32.3793 27.8032 32.583 27.4473C32.7477 27.1375 32.9015 26.8493 33.1615 26.6023C33.3695 26.4073 33.883 26 34.6673 26ZM19.5007 17.3333C19.9526 17.3335 20.3932 17.475 20.7607 17.738C21.1283 18.001 21.4043 18.3724 21.5503 18.8001L21.832 19.6191C22.482 21.5236 23.977 23.0208 25.8837 23.6708L26.7005 23.9503C27.1277 24.0967 27.4986 24.373 27.7611 24.7405C28.0237 25.108 28.1648 25.5483 28.1648 26C28.1648 26.4516 28.0237 26.892 27.7611 27.2595C27.4986 27.627 27.1277 27.9032 26.7005 28.0496L25.8815 28.3313C23.977 28.9813 22.4798 30.4763 21.8298 32.383L21.5503 33.1998C21.4039 33.6271 21.1276 33.9979 20.7601 34.2604C20.3927 34.523 19.9523 34.6641 19.5007 34.6641C19.049 34.6641 18.6087 34.523 18.2412 34.2604C17.8737 33.9979 17.5974 33.6271 17.451 33.1998L17.1693 32.3808C16.8484 31.4408 16.3164 30.5868 15.614 29.8844C14.9117 29.1821 14.0577 28.65 13.1177 28.3291L12.3008 28.0496C11.8736 27.9032 11.5027 27.627 11.2402 27.2595C10.9777 26.892 10.8365 26.4516 10.8365 26C10.8365 25.5483 10.9777 25.108 11.2402 24.7405C11.5027 24.373 11.8736 24.0967 12.3008 23.9503L13.1198 23.6686C15.0243 23.0186 16.5215 21.5236 17.1715 19.617L17.451 18.8001C17.815 17.9508 18.53 17.3333 19.5007 17.3333ZM19.5007 24.258C18.9881 24.903 18.4037 25.4874 17.7587 26C18.4072 26.5128 18.9879 27.0927 19.5007 27.7398C20.0149 27.0941 20.5948 26.5142 21.2405 26C20.5962 25.4873 20.0125 24.9029 19.5007 24.258Z"
                        fill="#0051FF"
                      />
                    </svg>
                  </div>
                  <h3 className={styles.program_card_title}>심화 창업 교육</h3>
                  <p className={styles.program_card_description}>
                    마케팅, 재무, 법무 등 심화 교육 프로그램
                  </p>
                </div>
                <div className={styles.program_card_info}>
                  <div className={styles.program_card_info_item}>
                    <span className={styles.program_card_info_label}>기간</span>
                    <span className={styles.program_card_info_value}>12주</span>
                  </div>
                  <div className={styles.program_card_info_item}>
                    <span className={styles.program_card_info_label}>회차</span>
                    <span className={styles.program_card_info_value}>24회</span>
                  </div>
                </div>
              </div>
              <div className={styles.program_card}>
                <div className={styles.program_card_top}>
                  <div className={styles.program_card_icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <path
                        d="M6.50075 17.875C6.50052 15.9896 6.96894 14.1337 7.8639 12.4742C8.75885 10.8147 10.0523 9.40375 11.6278 8.36814C13.2033 7.33254 15.0116 6.70481 16.8899 6.5414C18.7682 6.37799 20.6577 6.68404 22.3884 7.43202C24.1191 8.17999 25.6367 9.34643 26.8048 10.8264C27.9729 12.3064 28.7548 14.0536 29.0801 15.9107C29.4055 17.7678 29.2641 19.6767 28.6687 21.4656C28.0733 23.2546 27.0426 24.8675 25.6693 26.1592C28.2585 27.4163 30.5067 29.279 32.2231 31.5895C33.9396 33.9 35.0739 36.5903 35.5298 39.4322C35.5799 39.7485 35.5673 40.0715 35.4926 40.3829C35.4179 40.6943 35.2826 40.9879 35.0944 41.247C34.9062 41.5061 34.6689 41.7256 34.3959 41.8929C34.1229 42.0603 33.8196 42.1722 33.5034 42.2224C33.1871 42.2725 32.8641 42.2599 32.5527 42.1852C32.2413 42.1105 31.9477 41.9752 31.6886 41.787C31.4296 41.5989 31.2101 41.3615 31.0427 41.0885C30.8753 40.8155 30.7634 40.5123 30.7132 40.196C30.2258 37.142 28.6655 34.3618 26.3126 32.3547C23.9598 30.3476 20.9684 29.245 17.8757 29.245C14.7831 29.245 11.7917 30.3476 9.43886 32.3547C7.08598 34.3618 5.52571 37.142 5.03825 40.196C4.98789 40.5123 4.87573 40.8155 4.70817 41.0884C4.54062 41.3613 4.32095 41.5985 4.06171 41.7866C3.80248 41.9746 3.50874 42.1097 3.19729 42.1842C2.88583 42.2587 2.56276 42.2711 2.2465 42.2207C1.93024 42.1704 1.627 42.0582 1.35409 41.8907C1.08119 41.7231 0.84395 41.5035 0.655935 41.2442C0.467919 40.985 0.332806 40.6912 0.258308 40.3798C0.183811 40.0683 0.171388 39.7453 0.22175 39.429C0.67601 36.5873 1.80968 33.8972 3.5264 31.5875C5.24312 29.2778 7.49212 27.4167 10.0823 26.1625C8.95126 25.0987 8.05003 23.8146 7.43408 22.3893C6.81813 20.964 6.5005 19.4277 6.50075 17.875ZM35.7508 13C37.639 13.0013 39.4864 13.5508 41.0684 14.5816C42.6505 15.6125 43.8993 17.0804 44.6633 18.8073C45.4273 20.5341 45.6735 22.4456 45.3722 24.3097C45.0709 26.1738 44.2349 27.9103 42.9658 29.3085C44.9451 30.289 46.7037 31.6628 48.1342 33.3459C49.5647 35.029 50.6371 36.986 51.2858 39.0975C51.4146 39.5072 51.4327 39.9437 51.3383 40.3627C51.2439 40.7817 51.0403 41.1683 50.7482 41.4832C50.4561 41.798 50.0859 42.03 49.6751 42.1556C49.2644 42.2811 48.8277 42.2958 48.4095 42.198C47.9914 42.1013 47.6062 41.8959 47.2929 41.6026C46.9796 41.3092 46.7493 40.9384 46.6252 40.5275C46.0419 38.6436 44.9802 36.9432 43.5436 35.5921C42.1071 34.241 40.3448 33.2854 38.4288 32.8185C37.8965 32.69 37.4231 32.3861 37.0846 31.9557C36.7462 31.5253 36.5626 30.9935 36.5633 30.446V29.302C36.563 28.8482 36.6894 28.4033 36.9282 28.0175C37.1671 27.6316 37.5089 27.3201 37.9153 27.118C38.9005 26.6297 39.6918 25.8226 40.1605 24.8279C40.6292 23.8331 40.7478 22.7091 40.4971 21.6385C40.2463 20.5678 39.641 19.6133 38.7794 18.9301C37.9177 18.2469 36.8504 17.8751 35.7508 17.875C35.1043 17.875 34.4843 17.6182 34.0272 17.1611C33.5701 16.704 33.3133 16.084 33.3133 15.4375C33.3133 14.791 33.5701 14.171 34.0272 13.7139C34.4843 13.2568 35.1043 13 35.7508 13ZM17.8757 11.375C17.0101 11.3554 16.1494 11.509 15.3439 11.8267C14.5385 12.1443 13.8046 12.6197 13.1854 13.2249C12.5663 13.8301 12.0742 14.5529 11.7382 15.3509C11.4022 16.1488 11.229 17.0059 11.2288 17.8717C11.2286 18.7375 11.4013 19.5947 11.7369 20.3928C12.0726 21.1909 12.5642 21.914 13.1831 22.5195C13.802 23.125 14.5356 23.6007 15.3409 23.9188C16.1462 24.2369 17.0069 24.3909 17.8725 24.3717C19.5708 24.3342 21.187 23.6333 22.375 22.419C23.5629 21.2048 24.2284 19.5737 24.2288 17.875C24.2292 16.1762 23.5646 14.5448 22.3772 13.33C21.1898 12.1151 19.5741 11.4134 17.8757 11.375Z"
                        fill="#0051FF"
                      />
                    </svg>
                  </div>
                  <h3 className={styles.program_card_title}>1:1 멘토링</h3>
                  <p className={styles.program_card_description}>
                    전문가와의 개별 상담 및 지도
                  </p>
                </div>
                <div className={styles.program_card_info}>
                  <div className={styles.program_card_info_item}>
                    <span className={styles.program_card_info_label}>기간</span>
                    <span className={styles.program_card_info_value}>
                      맞춤형
                    </span>
                  </div>
                  <div className={styles.program_card_info_item}>
                    <span className={styles.program_card_info_label}>회차</span>
                    <span className={styles.program_card_info_value}>
                      무제한
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.program_card}>
                <div className={styles.program_card_top}>
                  <div className={styles.program_card_icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_401_16223)">
                        <path
                          d="M26 52C19.1044 52 12.4912 49.2607 7.61522 44.3848C2.73928 39.5088 0 32.8956 0 26C0 19.1044 2.73928 12.4912 7.61522 7.61522C12.4912 2.73928 19.1044 0 26 0C32.8956 0 39.5088 2.73928 44.3848 7.61522C49.2607 12.4912 52 19.1044 52 26C52 32.8956 49.2607 39.5088 44.3848 44.3848C39.5088 49.2607 32.8956 52 26 52ZM46.15 31.2C47.0306 27.7893 47.0306 24.2107 46.15 20.8H36.218C36.4574 24.2625 36.4574 27.7375 36.218 31.2H46.15ZM44.018 36.4H35.646C35.2116 39.5341 34.3817 42.6006 33.176 45.526C37.7435 43.8411 41.5785 40.613 44.018 36.4ZM21.008 31.2H30.992C31.2743 27.7391 31.2743 24.2609 30.992 20.8H21.008C20.7257 24.2609 20.7257 27.7391 21.008 31.2ZM21.658 36.4C22.724 42.64 24.596 46.8 26 46.8C27.404 46.8 29.276 42.64 30.342 36.4H21.658ZM5.85 31.2H15.782C15.5426 27.7375 15.5426 24.2625 15.782 20.8H5.85C4.96935 24.2107 4.96935 27.7893 5.85 31.2ZM7.982 36.4C10.4215 40.613 14.2565 43.8411 18.824 45.526C17.732 43.03 16.9 39.91 16.354 36.4H7.982ZM44.018 15.6C41.5785 11.387 37.7435 8.15889 33.176 6.474C34.268 8.97 35.1 12.09 35.646 15.6H44.018ZM21.658 15.6H30.342C29.276 9.36 27.404 5.2 26 5.2C24.596 5.2 22.724 9.36 21.658 15.6ZM7.982 15.6H16.354C16.874 12.09 17.732 8.97 18.824 6.474C14.2565 8.15889 10.4215 11.387 7.982 15.6Z"
                          fill="#0051FF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_401_16223">
                          <rect width="52" height="52" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h3 className={styles.program_card_title}>네트워킹 세미나</h3>
                  <p className={styles.program_card_description}>
                    선배 창업자와의 만남 및 정보 공유
                  </p>
                </div>
                <div className={styles.program_card_info}>
                  <div className={styles.program_card_info_item}>
                    <span className={styles.program_card_info_label}>기간</span>
                    <span className={styles.program_card_info_value}>
                      월 1회
                    </span>
                  </div>
                  <div className={styles.program_card_info_item}>
                    <span className={styles.program_card_info_label}>회차</span>
                    <span className={styles.program_card_info_value}>정기</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.curriculum_section}>
          <div className={styles.curriculum_wrapper}>
            <div className={styles.curriculum_header}>
              <p className={styles.curriculum_subtitle}>
                체계적인 단계별 교육으로 창업 준비
              </p>
              <h2 className={styles.curriculum_title}>
                8주 기초 창업 교육 커리큘럼
              </h2>
            </div>
            <div className={styles.curriculum_cards}>
              <div className={styles.curriculum_card}>
                <div className={styles.curriculum_card_image}>
                  <Image
                    src="/images/ented/ented_01.jpg"
                    alt="창업 기초 이해"
                    width={306}
                    height={150}
                    className={styles.curriculum_card_image_img}
                    priority
                    loading="eager"
                  />
                </div>
                <div className={styles.curriculum_card_top}>
                  <div className={styles.curriculum_card_title_wrapper}>
                    <h3 className={styles.curriculum_card_title}>
                      창업 기초 이해
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1"
                      height="20"
                      viewBox="0 0 1 20"
                      fill="none"
                      className={styles.curriculum_card_week_icon}
                    >
                      <path d="M0.5 0V19.5" stroke="#919191" />
                    </svg>
                    <span className={styles.curriculum_card_week}>1~2주차</span>
                  </div>
                  <ul className={styles.curriculum_card_list}>
                    <li className={styles.curriculum_card_list_item}>
                      창업의 개념
                    </li>
                    <li className={styles.curriculum_card_list_item}>
                      창업가 정신
                    </li>
                    <li className={styles.curriculum_card_list_item}>
                      시장 분석 기초
                    </li>
                    <li className={styles.curriculum_card_list_item}>
                      트렌드 분석
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.curriculum_card}>
                <div className={styles.curriculum_card_image}>
                  <Image
                    src="/images/ented/ented_02.jpg"
                    alt="사업 아이디어 개발"
                    width={306}
                    height={150}
                    className={styles.curriculum_card_image_img}
                    priority
                    loading="eager"
                  />
                </div>
                <div className={styles.curriculum_card_top}>
                  <div className={styles.curriculum_card_title_wrapper}>
                    <h3 className={styles.curriculum_card_title}>
                      아이디어 개발
                    </h3>
                    <span className={styles.curriculum_card_week}>
                      | 3~4주차
                    </span>
                  </div>
                  <ul className={styles.curriculum_card_list}>
                    <li className={styles.curriculum_card_list_item}>
                      사업 아이디어 발굴 방법
                    </li>
                    <li className={styles.curriculum_card_list_item}>
                      타겟 고객 분석
                    </li>
                    <li className={styles.curriculum_card_list_item}>
                      경쟁사 분석
                    </li>
                    <li className={styles.curriculum_card_list_item}>
                      차별화 전략
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.curriculum_card}>
                <div className={styles.curriculum_card_image}>
                  <Image
                    src="/images/ented/ented_03.jpg"
                    alt="사업계획서 작성"
                    width={306}
                    height={150}
                    className={styles.curriculum_card_image_img}
                  />
                </div>
                <div className={styles.curriculum_card_top}>
                  <div className={styles.curriculum_card_title_wrapper}>
                    <h3 className={styles.curriculum_card_title}>
                      사업계획서 작성
                    </h3>
                    <span className={styles.curriculum_card_week}>
                      | 5~6주차
                    </span>
                  </div>
                  <ul className={styles.curriculum_card_list}>
                    <li className={styles.curriculum_card_list_item}>
                      사업계획서 구성
                    </li>
                    <li className={styles.curriculum_card_list_item}>
                      재무 계획
                    </li>
                    <li className={styles.curriculum_card_list_item}>
                      마케팅 전략
                    </li>
                    <li className={styles.curriculum_card_list_item}>
                      실행 계획
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.curriculum_card}>
                <div className={styles.curriculum_card_image}>
                  <Image
                    src="/images/ented/ented_04.jpg"
                    alt="창업 실행 전략"
                    width={306}
                    height={150}
                    className={styles.curriculum_card_image_img}
                  />
                </div>
                <div className={styles.curriculum_card_top}>
                  <div className={styles.curriculum_card_title_wrapper}>
                    <h3 className={styles.curriculum_card_title}>
                      창업 실행 전략
                    </h3>
                    <span className={styles.curriculum_card_week}>
                      | 7~8주차
                    </span>
                  </div>
                  <ul className={styles.curriculum_card_list}>
                    <li className={styles.curriculum_card_list_item}>
                      법인 설립
                    </li>
                    <li className={styles.curriculum_card_list_item}>
                      자금 조달
                    </li>
                    <li className={styles.curriculum_card_list_item}>
                      피칭 준비
                    </li>
                    <li className={styles.curriculum_card_list_item}>
                      사후 관리
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.features_section}>
          <div className={styles.features_wrapper}>
            <div className={styles.features_text_wrapper}>
              <p className={styles.features_subtitle}>
                실전 전문가들의 체계적이고 실용적인 교육
              </p>
              <h2 className={styles.features_title}>바로기업만의 창업교육</h2>
            </div>
            <div className={styles.features_cards_wrapper}>
              <div className={styles.feature_card}>
                <div className={styles.feature_card_image}>
                  <Image
                    src="/images/ented/ented_edu_01.jpg"
                    alt="전문 강사진"
                    fill
                    className={styles.feature_card_image_img}
                    priority
                    loading="eager"
                  />
                </div>
                <h3 className={styles.feature_card_title}>전문 강사진</h3>
                <p className={styles.feature_card_subtitle}>
                  실무 경험이 풍부한 창업 전문가들의 강의
                </p>
              </div>
              <div className={styles.feature_card}>
                <div className={styles.feature_card_image}>
                  <Image
                    src="/images/ented/ented_edu_02.jpg"
                    alt="실전 중심"
                    fill
                    className={styles.feature_card_image_img}
                    priority
                    loading="eager"
                  />
                </div>
                <h3 className={styles.feature_card_title}>실전 중심</h3>
                <p className={styles.feature_card_subtitle}>
                  이론이 아닌 실제 창업에 필요한 내용 중심
                </p>
              </div>
              <div className={styles.feature_card}>
                <div className={styles.feature_card_image}>
                  <Image
                    src="/images/ented/ented_edu_03.jpg"
                    alt="지속 지원"
                    fill
                    className={styles.feature_card_image_img}
                  />
                </div>
                <h3 className={styles.feature_card_title}>지속 지원</h3>
                <p className={styles.feature_card_subtitle}>
                  교육 후에도 지속적인 멘토링 및 컨설팅
                </p>
              </div>
              <div className={styles.feature_card}>
                <div className={styles.feature_card_image}>
                  <Image
                    src="/images/ented/ented_edu_04.jpg"
                    alt="네트워킹"
                    fill
                    className={styles.feature_card_image_img}
                  />
                </div>
                <h3 className={styles.feature_card_title}>네트워킹</h3>
                <p className={styles.feature_card_subtitle}>
                  동료 창업자들과의 네트워크 구축 기회
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.support_section}>
          <div className={styles.support_contents_wrapper}>
            <p className={styles.support_subtitle}>지속적인 멘토링과 컨설팅</p>
            <h2 className={styles.support_title}>창업교육 수강 후 지원</h2>
            <div className={styles.support_cards_wrapper}>
              <div className={styles.support_card}>
                <div className={styles.support_card_top}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    className={styles.support_card_icon}
                  >
                    <path
                      d="M6.50075 17.8754C6.50052 15.99 6.96894 14.1341 7.8639 12.4746C8.75885 10.8152 10.0523 9.40417 11.6278 8.36857C13.2033 7.33297 15.0116 6.70523 16.8899 6.54183C18.7682 6.37842 20.6577 6.68447 22.3884 7.43244C24.1191 8.18042 25.6367 9.34686 26.8048 10.8269C27.9729 12.3069 28.7548 14.054 29.0801 15.9111C29.4055 17.7682 29.2641 19.6771 28.6687 21.4661C28.0733 23.255 27.0426 24.8679 25.6693 26.1597C28.2585 27.4168 30.5067 29.2795 32.2231 31.59C33.9396 33.9005 35.0739 36.5907 35.5298 39.4327C35.5799 39.7489 35.5673 40.072 35.4926 40.3833C35.4179 40.6947 35.2826 40.9883 35.0944 41.2474C34.9062 41.5065 34.6689 41.726 34.3959 41.8933C34.1229 42.0607 33.8196 42.1726 33.5034 42.2228C33.1871 42.2729 32.8641 42.2603 32.5527 42.1856C32.2413 42.1109 31.9477 41.9756 31.6886 41.7875C31.4296 41.5993 31.2101 41.3619 31.0427 41.089C30.8753 40.816 30.7634 40.5127 30.7132 40.1964C30.2258 37.1424 28.6655 34.3622 26.3126 32.3551C23.9598 30.348 20.9684 29.2455 17.8757 29.2455C14.7831 29.2455 11.7917 30.348 9.43886 32.3551C7.08598 34.3622 5.52571 37.1424 5.03825 40.1964C4.98789 40.5127 4.87573 40.8159 4.70817 41.0888C4.54062 41.3617 4.32095 41.599 4.06171 41.787C3.80248 41.975 3.50874 42.1101 3.19729 42.1846C2.88583 42.2591 2.56276 42.2715 2.2465 42.2212C1.93024 42.1708 1.627 42.0587 1.35409 41.8911C1.08119 41.7235 0.84395 41.5039 0.655935 41.2446C0.467919 40.9854 0.332806 40.6917 0.258308 40.3802C0.183811 40.0688 0.171388 39.7457 0.22175 39.4294C0.67601 36.5877 1.80968 33.8976 3.5264 31.5879C5.24312 29.2782 7.49212 27.4172 10.0823 26.1629C8.95126 25.0991 8.05003 23.815 7.43408 22.3897C6.81813 20.9644 6.5005 19.4281 6.50075 17.8754ZM35.7508 13.0004C37.639 13.0017 39.4864 13.5512 41.0684 14.582C42.6505 15.6129 43.8993 17.0808 44.6633 18.8077C45.4273 20.5345 45.6735 22.446 45.3722 24.3101C45.0709 26.1742 44.2349 27.9107 42.9658 29.3089C44.9451 30.2895 46.7037 31.6632 48.1342 33.3463C49.5647 35.0294 50.6371 36.9864 51.2858 39.0979C51.4146 39.5076 51.4327 39.9442 51.3383 40.3632C51.2439 40.7822 51.0403 41.1687 50.7482 41.4836C50.4561 41.7985 50.0859 42.0305 49.6751 42.156C49.2644 42.2816 48.8277 42.2962 48.4095 42.1984C47.9914 42.1017 47.6062 41.8963 47.2929 41.603C46.9796 41.3097 46.7493 40.9388 46.6252 40.5279C46.0419 38.6441 44.9802 36.9436 43.5436 35.5925C42.1071 34.2414 40.3448 33.2858 38.4288 32.8189C37.8965 32.6904 37.4231 32.3865 37.0846 31.9561C36.7462 31.5257 36.5626 30.9939 36.5633 30.4464V29.3024C36.563 28.8486 36.6894 28.4037 36.9282 28.0179C37.1671 27.632 37.5089 27.3205 37.9153 27.1184C38.9005 26.6301 39.6918 25.8231 40.1605 24.8283C40.6292 23.8336 40.7478 22.7096 40.4971 21.6389C40.2463 20.5682 39.641 19.6137 38.7794 18.9305C37.9177 18.2473 36.8504 17.8755 35.7508 17.8754C35.1043 17.8754 34.4843 17.6186 34.0272 17.1615C33.5701 16.7044 33.3133 16.0844 33.3133 15.4379C33.3133 14.7915 33.5701 14.1715 34.0272 13.7144C34.4843 13.2572 35.1043 13.0004 35.7508 13.0004ZM17.8757 11.3754C17.0101 11.3559 16.1494 11.5094 15.3439 11.8271C14.5385 12.1448 13.8046 12.6201 13.1854 13.2253C12.5663 13.8305 12.0742 14.5533 11.7382 15.3513C11.4022 16.1493 11.229 17.0063 11.2288 17.8721C11.2286 18.738 11.4013 19.5951 11.7369 20.3932C12.0726 21.1914 12.5642 21.9144 13.1831 22.5199C13.802 23.1254 14.5356 23.6012 15.3409 23.9193C16.1462 24.2373 17.0069 24.3913 17.8725 24.3722C19.5708 24.3346 21.187 23.6337 22.375 22.4194C23.5629 21.2052 24.2284 19.5741 24.2288 17.8754C24.2292 16.1767 23.5646 14.5452 22.3772 13.3304C21.1898 12.1156 19.5741 11.4138 17.8757 11.3754Z"
                      fill="#0051FF"
                    />
                  </svg>
                  <p className={styles.support_card_title}>1:1 멘토링</p>
                  <p className={styles.support_card_description}>
                    개별 창업가와의
                    <br /> 지속적인 상담 및 지도
                  </p>
                </div>
                <div className={styles.support_card_bottom}>
                  <p className={styles.support_card_bottom_item}>주 1회 상담</p>
                  <p className={styles.support_card_bottom_item}>맞춤형 조언</p>
                  <p className={styles.support_card_bottom_item}>
                    네트워크 연결
                  </p>
                </div>
              </div>
              <div className={styles.support_card}>
                <div className={styles.support_card_top}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    className={styles.support_card_icon}
                  >
                    <path
                      d="M20.5859 6.5H31.4193C32.2812 6.5 33.1079 6.84241 33.7174 7.4519C34.3269 8.0614 34.6693 8.88805 34.6693 9.75C34.6693 11.7612 33.8703 13.6901 32.4482 15.1122C31.026 16.5344 29.0972 17.3333 27.0859 17.3333H24.9193C22.908 17.3333 20.9792 16.5344 19.557 15.1122C18.1349 13.6901 17.3359 11.7612 17.3359 9.75C17.3359 8.88805 17.6783 8.0614 18.2878 7.4519C18.8973 6.84241 19.724 6.5 20.5859 6.5Z"
                      stroke="#0051FF"
                      strokeWidth="4.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.66797 36.8334V34.6667C8.66797 30.0696 10.4942 25.6608 13.7448 22.4102C16.9954 19.1596 21.4042 17.3334 26.0013 17.3334C30.5984 17.3334 35.0072 19.1596 38.2578 22.4102C41.5085 25.6608 43.3346 30.0696 43.3346 34.6667V36.8334C43.3346 39.1319 42.4215 41.3363 40.7962 42.9616C39.1709 44.5869 36.9665 45.5 34.668 45.5H17.3346C15.0361 45.5 12.8317 44.5869 11.2064 42.9616C9.58106 41.3363 8.66797 39.1319 8.66797 36.8334Z"
                      stroke="#0051FF"
                      strokeWidth="4.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className={styles.support_card_title}>
                    정책자금 신청 지원
                  </p>
                  <p className={styles.support_card_description}>
                    정부 지원 정책자금
                    <br /> 신청 컨설팅
                  </p>
                </div>
                <div className={styles.support_card_bottom}>
                  <p className={styles.support_card_bottom_item}>
                    서류 안내 지원
                  </p>
                  <p className={styles.support_card_bottom_item}>신청 안내</p>
                  <p className={styles.support_card_bottom_item}>사후 관리</p>
                </div>
              </div>
              <div className={styles.support_card}>
                <div className={styles.support_card_top}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    className={styles.support_card_icon}
                  >
                    <path
                      d="M47.4929 14.3433C47.273 13.8139 46.8523 13.3932 46.3229 13.1733C46.0624 13.0623 45.7827 13.0034 45.4995 13H34.6662C34.0916 13 33.5405 13.2283 33.1341 13.6346C32.7278 14.0409 32.4995 14.592 32.4995 15.1667C32.4995 15.7413 32.7278 16.2924 33.1341 16.6987C33.5405 17.1051 34.0916 17.3333 34.6662 17.3333H40.2779L28.1662 29.445L21.0379 22.295C20.8365 22.0919 20.5968 21.9307 20.3328 21.8207C20.0688 21.7107 19.7856 21.6541 19.4995 21.6541C19.2135 21.6541 18.9303 21.7107 18.6663 21.8207C18.4023 21.9307 18.1626 22.0919 17.9612 22.295L4.96121 35.295C4.75813 35.4964 4.59694 35.7361 4.48694 36.0001C4.37695 36.2641 4.32031 36.5473 4.32031 36.8333C4.32031 37.1194 4.37695 37.4026 4.48694 37.6666C4.59694 37.9306 4.75813 38.1702 4.96121 38.3717C5.16263 38.5747 5.40226 38.7359 5.66629 38.8459C5.93032 38.9559 6.21352 39.0126 6.49954 39.0126C6.78557 39.0126 7.06876 38.9559 7.33279 38.8459C7.59682 38.7359 7.83646 38.5747 8.03788 38.3717L19.4995 26.8883L26.6279 34.0383C26.8293 34.2414 27.0689 34.4026 27.333 34.5126C27.597 34.6226 27.8802 34.6792 28.1662 34.6792C28.4522 34.6792 28.7354 34.6226 28.9995 34.5126C29.2635 34.4026 29.5031 34.2414 29.7045 34.0383L43.3329 20.3883V26C43.3329 26.5746 43.5611 27.1257 43.9675 27.5321C44.3738 27.9384 44.9249 28.1667 45.4995 28.1667C46.0742 28.1667 46.6253 27.9384 47.0316 27.5321C47.4379 27.1257 47.6662 26.5746 47.6662 26V15.1667C47.6628 14.8835 47.6039 14.6038 47.4929 14.3433Z"
                      fill="#0051FF"
                    />
                  </svg>
                  <p className={styles.support_card_title}>사업 성장 지원</p>
                  <p className={styles.support_card_description}>
                    초기 사업 성장 단계에서의
                    <br /> 경영 지원
                  </p>
                </div>
                <div className={styles.support_card_bottom}>
                  <p className={styles.support_card_bottom_item}>마케팅 전략</p>
                  <p className={styles.support_card_bottom_item}>조직 구축</p>
                  <p className={styles.support_card_bottom_item}>재무 관리</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta_section}>
          <div className={styles.cta_text_wrapper}>
            <h2 className={styles.cta_title}>창업의 꿈을 함께 이루세요</h2>
            <p className={styles.cta_description}>
              한평생 바로 기업과 함께 성공적인 창업을 <br /> 준비하고 실현하세요
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
      <ConsultationFloatingBanner />
    </>
  );
}

export default function EntedPage() {
  return (
    <ConsultationProvider>
      <EntedContent />
    </ConsultationProvider>
  );
}
