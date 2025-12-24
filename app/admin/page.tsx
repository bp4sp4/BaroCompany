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
        setConsultations(data);
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
            {consultations.length === 0 ? (
              <tr>
                <td colSpan={6} className={styles.empty}>
                  상담 신청이 없습니다.
                </td>
              </tr>
            ) : (
              consultations.map((consultation, index) => (
                <tr
                  key={consultation.id}
                  className={consultation.is_completed ? styles.completedRow : ""}
                >
                  <td>{index + 1}</td>
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
    </div>
  );
}
