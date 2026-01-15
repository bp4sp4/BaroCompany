"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ConsultationProvider,
  useConsultation,
} from "../components/ConsultationContext";
import FloatingButton from "../components/FloatingButton";
import MobileFloatingBanner from "../components/MobileFloatingBanner";
import ConsultationFloatingBanner from "../components/ConsultationFloatingBanner";
import { termsData } from "./terms/termsData";
import { privacyData } from "./privacy/privacyData";
import styles from "./policy.module.css";

type TabType = "terms" | "privacy";

function PolicyContent() {
  const { openModal } = useConsultation();
  const [activeTab, setActiveTab] = useState<TabType>("terms");
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // policy 페이지에서 헤더 메뉴 텍스트를 검은색으로 강제 적용
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "policy-header-override";
    style.textContent = `
      body header.header .navLink,
      body header.header.scrolled .navLink,
      body header.header .navLink.active,
      body header.header.scrolled .navLink.active,
      html body header.header .navLink,
      html body header.header.scrolled .navLink,
      html body header.header .navLink.active,
      html body header.header.scrolled .navLink.active {
        color: #000000 !important;
      }
      body header.header .navLink:hover,
      body header.header.scrolled .navLink:hover,
      html body header.header .navLink:hover,
      html body header.header.scrolled .navLink:hover {
        color: #000000 !important;
        opacity: 0.7;
      }
    `;
    document.head.appendChild(style);

    // DOM 요소에 직접 스타일 적용 (더 강력한 방법)
    const applyStyles = () => {
      const navLinks = document.querySelectorAll("header.header .navLink");
      navLinks.forEach((link) => {
        (link as HTMLElement).style.color = "#000000";
      });
    };

    // 즉시 적용
    applyStyles();

    // 약간의 지연 후 다시 적용 (동적 렌더링 대응)
    const timer = setTimeout(applyStyles, 100);
    const timer2 = setTimeout(applyStyles, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      const existingStyle = document.getElementById("policy-header-override");
      if (existingStyle) {
        document.head.removeChild(existingStyle);
      }
    };
  }, []);

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const currentData = activeTab === "terms" ? termsData : privacyData;
  const contentTitle = activeTab === "terms" ? "이용약관" : "개인정보처리방침";

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>서비스 이용약관</h1>
            <div className={styles.dateSelector}>
              <span className={styles.dateLabel}>시행일</span>
              <select className={styles.dateSelect}>
                <option value="2026-01-14">2026.01.14</option>
              </select>
            </div>
          </div>

          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "terms" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("terms")}
            >
              서비스 이용약관
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "privacy" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("privacy")}
            >
              개인정보 처리방침
            </button>
          </div>

          <div className={styles.content}>
            <h2 className={styles.contentTitle}>{contentTitle}</h2>

            <div className={styles.accordion}>
              {currentData.map((item) => {
                const isExpanded = expandedItems.has(item.id);
                return (
                  <div key={item.id} className={styles.accordionItem}>
                    <button
                      className={styles.accordionHeader}
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isExpanded}
                    >
                      <span className={styles.accordionTitle}>
                        {item.title}
                      </span>
                      <svg
                        className={`${styles.accordionIcon} ${
                          isExpanded ? styles.expanded : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {isExpanded && (
                      <div className={styles.accordionContent}>
                        <div className={styles.accordionText}>
                          {item.content}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButton />
      <MobileFloatingBanner />
    </>
  );
}

export default function PolicyPage() {
  return (
    <ConsultationProvider>
      <PolicyContent />
    </ConsultationProvider>
  );
}
