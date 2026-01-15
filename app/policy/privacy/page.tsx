"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  ConsultationProvider,
  useConsultation,
} from "../../components/ConsultationContext";
import FloatingButton from "../../components/FloatingButton";
import MobileFloatingBanner from "../../components/MobileFloatingBanner";
import ConsultationFloatingBanner from "../../components/ConsultationFloatingBanner";
import { privacyData } from "./privacyData";
import styles from "../policy.module.css";

function PrivacyContent() {
  const { openModal } = useConsultation();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>개인정보처리방침</h1>
            <Link href="/policy" className={styles.back_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="var(--Grayscale-600, #999)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              목록으로
            </Link>
          </div>

          <div className={styles.content}>
            <h2 className={styles.contentTitle}>
              한평생 바로기업 개인정보처리방침
            </h2>

            <div className={styles.accordion}>
              {privacyData.map((item) => {
                const isExpanded = expandedItems.has(item.id);
                return (
                  <div key={item.id} className={styles.accordionItem}>
                    <button
                      className={styles.accordionHeader}
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isExpanded}
                    >
                      <span className={styles.accordionTitle}>{item.title}</span>
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
                        <div className={styles.accordionText}>{item.content}</div>
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

export default function PrivacyPage() {
  return (
    <ConsultationProvider>
      <PrivacyContent />
    </ConsultationProvider>
  );
}
