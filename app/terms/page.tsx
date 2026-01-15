"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ConsultationProvider,
  useConsultation,
} from "../components/ConsultationContext";
import FloatingButton from "../components/FloatingButton";
import MobileFloatingBanner from "../components/MobileFloatingBanner";
import ConsultationFloatingBanner from "../components/ConsultationFloatingBanner";
import styles from "./terms.module.css";

type TabType = "terms" | "privacy";

interface Article {
  id: number;
  title: string;
  content: string;
}

function TermsContent() {
  const [activeTab, setActiveTab] = useState<TabType>("terms");
  const [expandedArticles, setExpandedArticles] = useState<Set<number>>(
    new Set([1])
  );

  // 이용약관 데이터
  const termsArticles: Article[] = [
    {
      id: 1,
      title: "제1조(목적)",
      content: "내용을 입력해주세요.",
    },
    {
      id: 2,
      title: "제2조(정의)",
      content: "내용을 입력해주세요.",
    },
    {
      id: 3,
      title: "제3조(이용계약의 체결)",
      content: "내용을 입력해주세요.",
    },
    {
      id: 4,
      title: "제4조(회원 탈퇴 및 정보 삭제)",
      content: "내용을 입력해주세요.",
    },
    {
      id: 5,
      title: "제5조(개인정보 보호)",
      content: "내용을 입력해주세요.",
    },
    {
      id: 6,
      title: "제6조(개인정보 보호)",
      content: "내용을 입력해주세요.",
    },
    {
      id: 7,
      title: "제7조(분쟁 해결 및 준거법)",
      content: "내용을 입력해주세요.",
    },
  ];

  // 개인정보 처리방침 데이터
  const privacyArticles: Article[] = [
    {
      id: 1,
      title: "제1조(개인정보의 처리 목적)",
      content: "내용을 입력해주세요.",
    },
    {
      id: 2,
      title: "제2조(개인정보의 처리 및 보유기간)",
      content: "내용을 입력해주세요.",
    },
    {
      id: 3,
      title: "제3조(처리하는 개인정보의 항목)",
      content: "내용을 입력해주세요.",
    },
    {
      id: 4,
      title: "제4조(개인정보의 제3자 제공)",
      content: "내용을 입력해주세요.",
    },
    {
      id: 5,
      title: "제5조(개인정보처리의 위탁)",
      content: "내용을 입력해주세요.",
    },
    {
      id: 6,
      title: "제6조(정보주체의 권리·의무 및 행사방법)",
      content: "내용을 입력해주세요.",
    },
    {
      id: 7,
      title: "제7조(개인정보의 파기)",
      content: "내용을 입력해주세요.",
    },
    {
      id: 8,
      title: "제8조(개인정보 보호책임자)",
      content: "내용을 입력해주세요.",
    },
  ];

  const currentArticles =
    activeTab === "terms" ? termsArticles : privacyArticles;

  const toggleArticle = (id: number) => {
    setExpandedArticles((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    // 탭 변경 시 첫 번째 항목만 열림
    setExpandedArticles(new Set([1]));
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>서비스 이용약관</h1>
            <div className={styles.dateSelector}>
              <label className={styles.dateLabel}>시행일</label>
              <select className={styles.dateSelect}>
                <option value="2025-07-01">2025.07.01</option>
              </select>
            </div>
          </div>

          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "terms" ? styles.activeTab : ""
              }`}
              onClick={() => handleTabChange("terms")}
            >
              서비스 이용약관
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "privacy" ? styles.activeTab : ""
              }`}
              onClick={() => handleTabChange("privacy")}
            >
              개인정보 처리방침
            </button>
          </div>

          <div className={styles.content}>
            <h2 className={styles.contentTitle}>
              {activeTab === "terms" ? "이용약관" : "개인정보 처리방침"}
            </h2>
            <div className={styles.accordion}>
              {currentArticles.map((article) => {
                const isExpanded = expandedArticles.has(article.id);
                return (
                  <div key={article.id} className={styles.accordionItem}>
                    <button
                      className={styles.accordionHeader}
                      onClick={() => toggleArticle(article.id)}
                    >
                      <span className={styles.accordionTitle}>
                        {article.title}
                      </span>
                      <svg
                        className={`${styles.accordionIcon} ${
                          isExpanded ? styles.expanded : ""
                        }`}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
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
                        <div
                          className={styles.accordionText}
                          dangerouslySetInnerHTML={{ __html: article.content }}
                        />
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
      <ConsultationFloatingBanner />
    </>
  );
}

export default function TermsPage() {
  return (
    <ConsultationProvider>
      <TermsContent />
    </ConsultationProvider>
  );
}
