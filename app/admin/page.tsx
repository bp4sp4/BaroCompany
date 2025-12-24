"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import styles from "./admin.module.css";

interface Consultation {
  id: string;
  name: string;
  contact: string;
  industry: string;
  is_completed: boolean;
  created_at: string;
}

export default function AdminPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error || !session) {
        router.push("/admin/login");
        return;
      }

      setAuthLoading(false);
      fetchConsultations();
    } catch (error) {
      console.error("Auth check error:", error);
      router.push("/admin/login");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const fetchConsultations = async () => {
    try {
      const response = await fetch("/api/consultations");
      if (response.ok) {
        const data = await response.json();
        // 상담완료 안된 것(is_completed = false)이 먼저 오도록 정렬
        const sorted = data.sort((a: Consultation, b: Consultation) => {
          // 먼저 is_completed로 정렬 (false가 먼저)
          if (a.is_completed !== b.is_completed) {
            return a.is_completed ? 1 : -1;
          }
          // 같은 상태면 created_at 내림차순 (최신순)
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });
        setConsultations(sorted);
      }
    } catch (error) {
      console.error("Error fetching consultations:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleCompletion = async (id: string, currentStatus: boolean) => {
    try {
      const response = await fetch("/api/consultations", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, is_completed: !currentStatus }),
      });

      if (response.ok) {
        setConsultations((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, is_completed: !currentStatus } : item
          )
        );
      } else {
        console.error("Failed to update completion status");
      }
    } catch (error) {
      console.error("Error updating completion status:", error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // 페이지네이션 계산
  const totalPages = Math.ceil(consultations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentConsultations = consultations.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (authLoading || loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>로딩 중...</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <h1 className={styles.title}>상담 신청 관리</h1>
          <button onClick={handleLogout} className={styles.logoutButton}>
            로그아웃
          </button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>번호</th>
              <th>이름</th>
              <th>연락처</th>
              <th>업종</th>
              <th>신청일시</th>
              <th>상담완료</th>
            </tr>
          </thead>
          <tbody>
            {currentConsultations.length === 0 ? (
              <tr>
                <td colSpan={6} className={styles.empty}>
                  상담 신청이 없습니다.
                </td>
              </tr>
            ) : (
              currentConsultations.map((consultation, index) => (
                <tr
                  key={consultation.id}
                  className={consultation.is_completed ? styles.completedRow : ""}
                >
                  <td>{startIndex + index + 1}</td>
                  <td>{consultation.name}</td>
                  <td>{consultation.contact}</td>
                  <td>{consultation.industry}</td>
                  <td>{formatDate(consultation.created_at)}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={consultation.is_completed}
                      onChange={() => toggleCompletion(consultation.id, consultation.is_completed)}
                      className={styles.checkbox}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.pageButton}
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            이전
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ""}`}
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className={styles.pageButton}
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
}
