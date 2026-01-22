"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import * as XLSX from "xlsx";
import styles from "./admin.module.css";

interface Consultation {
  id: string;
  name: string;
  contact: string;
  is_completed: boolean;
  created_at: string;
  click_source?: string;
  notes?: string | null;
  status?: "pending" | "in_progress" | "completed" | null;
  industry?: string | null;
  revenue?: string | null;
  debt?: string | null;
}

type StatusFilter = "all" | "pending" | "in_progress" | "completed";

export default function AdminPage() {
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const router = useRouter();

  // 필터 상태
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [clickSourceFilter, setClickSourceFilter] = useState<string>("all");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  // 모달 상태
  const [selectedConsultation, setSelectedConsultation] =
    useState<Consultation | null>(null);

  // 체크박스 선택 상태
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // 관리자 역할 상태
  const [userRole, setUserRole] = useState<"super_admin" | "admin" | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error || !session) {
        router.push("/admin/login");
        return;
      }

      // 관리자 역할 확인
      const roleResponse = await fetch("/api/admin/check-role", {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      if (roleResponse.ok) {
        const { role } = await roleResponse.json();
        setUserRole(role || "admin");
      } else {
        // 역할 확인 실패 시 기본값으로 admin 설정
        setUserRole("admin");
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
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        });
        setConsultations(sorted);
      }
    } catch (error) {
      console.error("Error fetching consultations:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (
    id: string,
    status: "pending" | "in_progress" | "completed"
  ) => {
    try {
      const response = await fetch("/api/consultations", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          status,
          is_completed: status === "completed",
        }),
      });

      if (response.ok) {
        setConsultations((prev) =>
          prev.map((item) =>
            item.id === id
              ? {
                  ...item,
                  status,
                  is_completed: status === "completed",
                }
              : item
          )
        );
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleUpdateNotes = async (id: string, notes: string) => {
    try {
      const response = await fetch("/api/consultations", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, notes }),
      });

      if (response.ok) {
        setConsultations((prev) =>
          prev.map((item) => (item.id === id ? { ...item, notes } : item))
        );
      } else {
        console.error("Failed to update notes");
      }
    } catch (error) {
      console.error("Error updating notes:", error);
    }
  };

  // 체크박스 전체 선택/해제
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedIds(new Set(currentConsultations.map((item) => item.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  // 개별 체크박스 선택/해제
  const handleSelectItem = (id: string, checked: boolean) => {
    const newSelectedIds = new Set(selectedIds);
    if (checked) {
      newSelectedIds.add(id);
    } else {
      newSelectedIds.delete(id);
    }
    setSelectedIds(newSelectedIds);
  };

  // 선택된 항목들 일괄 삭제
  const handleDeleteSelected = async () => {
    if (selectedIds.size === 0) return;

    const count = selectedIds.size;
    const confirmed = window.confirm(
      `정말로 선택한 ${count}개의 상담 신청을 삭제하시겠습니까?\n삭제 후에는 되돌릴 수 없습니다.`
    );
    if (!confirmed) return;

    try {
      // 세션에서 토큰 가져오기
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        console.error("No session found");
        return;
      }

      // 각 항목을 순차적으로 삭제
      const deletePromises = Array.from(selectedIds).map((id) =>
        fetch("/api/consultations", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({ id }),
        })
      );

      const results = await Promise.all(deletePromises);
      const allSuccess = results.every((res) => res.ok);

      if (allSuccess) {
        // 삭제 성공 시 데이터 새로고침
        await fetchConsultations();
        setSelectedIds(new Set());
        
        // 데이터 새로고침 후 필터링된 결과를 기다리기 위해 약간의 지연
        // (useMemo가 업데이트되기를 기다림)
        setTimeout(() => {
          const newTotalPages = Math.ceil(filteredConsultations.length / itemsPerPage);
          if (currentPage > newTotalPages && newTotalPages > 0) {
            setCurrentPage(newTotalPages);
          }
        }, 100);
      } else {
        console.error("일부 항목 삭제에 실패했습니다.");
        // 실패한 항목만 남기고 나머지는 제거
        const failedIds = new Set<string>();
        results.forEach((res, index) => {
          if (!res.ok) {
            failedIds.add(Array.from(selectedIds)[index]);
          }
        });
        setConsultations((prev) =>
          prev.filter((item) => !selectedIds.has(item.id) || failedIds.has(item.id))
        );
        setSelectedIds(failedIds);
      }
    } catch (error) {
      console.error("Error deleting consultations:", error);
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

  const formatClickSource = (clickSource?: string | null) => {
    // null이거나 undefined이거나 빈 문자열인 경우 기본값 반환
    if (!clickSource || clickSource.trim() === "") {
      return "바로기업 홈페이지";
    }

    // daangn_material_1~6 형식을 당근마켓_소재_1~6으로 변환
    if (clickSource.startsWith("daangn_material_")) {
      const materialNumber = clickSource.replace("daangn_material_", "");
      return `당근마켓_소재_${materialNumber}`;
    }

    const sourceMap: Record<string, string> = {
      daangn: "당근마켓",
      instagram: "인스타그램",
      홈페이지: "바로기업 홈페이지",
      "바로기업 홈페이지": "바로기업 홈페이지",
      // 다른 소스 추가 가능
    };

    // 소스맵에 있으면 변환된 값 반환, 없으면 원본 반환
    const lowerSource = clickSource.toLowerCase();
    return sourceMap[clickSource] || sourceMap[lowerSource] || clickSource;
  };

  // 필터링된 데이터 계산
  const filteredConsultations = useMemo(() => {
    let filtered = [...consultations];

    // 상태 필터
    if (statusFilter === "pending") {
      filtered = filtered.filter(
        (item) => item.status === "pending" || (!item.status && !item.is_completed)
      );
    } else if (statusFilter === "in_progress") {
      filtered = filtered.filter((item) => item.status === "in_progress");
    } else if (statusFilter === "completed") {
      filtered = filtered.filter(
        (item) => item.status === "completed" || (!item.status && item.is_completed)
      );
    }

    // 유입경로 필터
    if (clickSourceFilter !== "all") {
      filtered = filtered.filter((item) => {
        const source = formatClickSource(item.click_source);
        return source === clickSourceFilter;
      });
    }

    // 날짜 필터
    if (startDate) {
      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.created_at);
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        return itemDate >= start;
      });
    }

    if (endDate) {
      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.created_at);
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        return itemDate <= end;
      });
    }

    return filtered;
  }, [consultations, statusFilter, clickSourceFilter, startDate, endDate]);

  // 유입경로 목록 추출
  const clickSources = useMemo(() => {
    const sources = new Set<string>();
    consultations.forEach((item) => {
      const source = formatClickSource(item.click_source);
      sources.add(source);
    });
    return Array.from(sources).sort();
  }, [consultations]);

  // 엑셀 다운로드
  const handleExportExcel = () => {
    const data = filteredConsultations.map((item, index) => ({
      번호: index + 1,
      이름: item.name,
      연락처: item.contact,
      업종: item.industry || "",
      연간매출액: item.revenue || "",
      현재부채: item.debt || "",
      유입경로: formatClickSource(item.click_source),
      신청일시: formatDate(item.created_at),
      특이사항: item.notes || "",
      상태:
        item.status === "pending"
          ? "대기"
          : item.status === "in_progress"
            ? "상담중"
            : item.status === "completed" || item.is_completed
              ? "완료"
              : "대기",
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "상담신청");

    // 컬럼 너비 자동 조정
    const colWidths = [
      { wch: 8 }, // 번호
      { wch: 15 }, // 이름
      { wch: 15 }, // 연락처
      { wch: 15 }, // 업종
      { wch: 15 }, // 연간 매출액
      { wch: 15 }, // 현재 부채
      { wch: 20 }, // 유입경로
      { wch: 20 }, // 신청일시
      { wch: 30 }, // 특이사항
      { wch: 12 }, // 상태
    ];
    worksheet["!cols"] = colWidths;

    const fileName = `상담신청_${new Date().toISOString().split("T")[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  // 필터 초기화
  const handleResetFilters = () => {
    setStatusFilter("all");
    setClickSourceFilter("all");
    setStartDate("");
    setEndDate("");
    setCurrentPage(1);
  };

  // 필터가 적용되어 있는지 확인
  const hasActiveFilters =
    statusFilter !== "all" ||
    clickSourceFilter !== "all" ||
    startDate !== "" ||
    endDate !== "";

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredConsultations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentConsultations = filteredConsultations.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    setSelectedIds(new Set()); // 페이지 변경 시 선택 초기화
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 필터 변경 시 첫 페이지로 및 선택 초기화
  useEffect(() => {
    setCurrentPage(1);
    setSelectedIds(new Set());
  }, [statusFilter, clickSourceFilter, startDate, endDate]);

  if (authLoading || loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>로딩 중...</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* 상단 헤더 */}
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <h1 className={styles.title}>상담 신청 내역</h1>
            <div className={styles.headerActions}>
              <button
                onClick={handleExportExcel}
                className={`${styles.button} ${styles.exportButton}`}
                disabled={filteredConsultations.length === 0}
              >
                엑셀 다운로드
              </button>
              <button
                onClick={handleLogout}
                className={`${styles.button} ${styles.logoutButton}`}
              >
                로그아웃
              </button>
            </div>
          </div>
        </header>

        {/* 필터 카드 */}
        <section className={styles.card}>
          <div className={styles.filtersSection}>
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>처리 상태</label>
              <div className={styles.segmentedControl}>
                {(["all", "pending", "in_progress", "completed"] as StatusFilter[]).map(
                  (status) => (
                    <button
                      key={status}
                      className={`${styles.segmentButton} ${
                        statusFilter === status ? styles.active : ""
                      }`}
                      onClick={() => setStatusFilter(status)}
                    >
                      {status === "all"
                        ? "전체"
                        : status === "pending"
                          ? "대기"
                          : status === "in_progress"
                            ? "상담중"
                            : "완료"}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>유입 경로</label>
              <select
                className={styles.filterSelect}
                value={clickSourceFilter}
                onChange={(e) => setClickSourceFilter(e.target.value)}
              >
                <option value="all">전체 경로</option>
                {clickSources.map((source) => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>조회 기간</label>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <input
                  type="date"
                  className={styles.filterInput}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <span style={{ color: "#ccc" }}>~</span>
                <input
                  type="date"
                  className={styles.filterInput}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.filterResetWrapper}>
              <button
                onClick={handleResetFilters}
                className={styles.resetFilterButton}
                disabled={!hasActiveFilters}
              >
                초기화
              </button>
              {userRole === "super_admin" && (
                <button
                  onClick={handleDeleteSelected}
                  className={styles.deleteSelectedButton}
                  disabled={selectedIds.size === 0}
                >
                  선택 삭제 ({selectedIds.size})
                </button>
              )}
            </div>
          </div>
        </section>

        {/* 테이블 목록 */}
        <div
          className={styles.filterResult}
          style={{ marginBottom: "12px", paddingLeft: "8px" }}
        >
          총{" "}
          <strong style={{ color: "#3182f6" }}>
            {filteredConsultations.length}
          </strong>
          건의 신청이 있습니다.
        </div>

        <section className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                {userRole === "super_admin" && (
                  <th style={{ width: "50px" }}>
                    <input
                      type="checkbox"
                      checked={
                        currentConsultations.length > 0 &&
                        currentConsultations.every((item) =>
                          selectedIds.has(item.id)
                        )
                      }
                      onChange={(e) => handleSelectAll(e.target.checked)}
                      className={styles.checkbox}
                    />
                  </th>
                )}
                <th>이름</th>
                <th>연락처</th>
                <th>업종</th>
                <th>연간 매출액</th>
                <th>현재 부채</th>
                <th>유입경로</th>
                <th>신청일시</th>
                <th>특이사항</th>
                <th style={{ textAlign: "center" }}>상태</th>
              </tr>
            </thead>
            <tbody>
              {currentConsultations.length === 0 ? (
                <tr>
                  <td colSpan={userRole === "super_admin" ? 10 : 9} className={styles.empty}>
                    신청 내역이 없습니다.
                  </td>
                </tr>
              ) : (
                currentConsultations.map((consultation) => (
                  <ConsultationRow
                    key={consultation.id}
                    consultation={consultation}
                    isSelected={selectedIds.has(consultation.id)}
                    onSelect={(checked) => handleSelectItem(consultation.id, checked)}
                    onUpdateStatus={updateStatus}
                    onOpenNotesModal={() => setSelectedConsultation(consultation)}
                    formatClickSource={formatClickSource}
                    formatDate={formatDate}
                    userRole={userRole}
                  />
                ))
              )}
            </tbody>
          </table>
        </section>

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.pageButton}
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  className={`${styles.pageButton} ${
                    currentPage === page ? styles.activePage : ""
                  }`}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              )
            )}
            <button
              className={styles.pageButton}
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        )}

        {/* Notes Modal */}
        {selectedConsultation && (
          <NotesModal
            consultation={selectedConsultation}
            onClose={() => setSelectedConsultation(null)}
            onSave={(id, notes) => {
              handleUpdateNotes(id, notes);
              setSelectedConsultation(null);
            }}
          />
        )}
      </div>
    </div>
  );
}

// Consultation Row Component
function ConsultationRow({
  consultation,
  isSelected,
  onSelect,
  onUpdateStatus,
  onOpenNotesModal,
  formatClickSource,
  formatDate,
  userRole,
}: {
  consultation: Consultation;
  isSelected: boolean;
  onSelect: (checked: boolean) => void;
  onUpdateStatus: (
    id: string,
    status: "pending" | "in_progress" | "completed"
  ) => void;
  onOpenNotesModal: () => void;
  formatClickSource: (source?: string | null) => string;
  formatDate: (dateString: string) => string;
  userRole: "super_admin" | "admin" | null;
}) {
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [isTextTruncated, setIsTextTruncated] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  // 텍스트가 잘렸는지 확인
  useEffect(() => {
    const checkTruncation = () => {
      if (textRef.current) {
        const isTruncated =
          textRef.current.scrollWidth > textRef.current.clientWidth;
        setIsTextTruncated(isTruncated);
      }
    };

    checkTruncation();
    window.addEventListener("resize", checkTruncation);
    return () => window.removeEventListener("resize", checkTruncation);
  }, [consultation.click_source]);

  // 현재 상태 결정 (기존 데이터 호환성)
  const currentStatus: "pending" | "in_progress" | "completed" =
    consultation.status ||
    (consultation.is_completed ? "completed" : "pending");

  const getStatusLabel = (status: string) => {
    if (status === "pending") return "대기";
    if (status === "in_progress") return "상담중";
    return "완료";
  };

  const getStatusClass = (status: string) => {
    if (status === "pending") return styles.statusPending;
    if (status === "in_progress") return styles.statusInProgress;
    return styles.statusCompleted;
  };

  return (
    <>
      <tr
        className={currentStatus === "completed" ? styles.completedRow : ""}
      >
        {userRole === "super_admin" && (
          <td>
            <input
              type="checkbox"
              checked={isSelected}
              onChange={(e) => onSelect(e.target.checked)}
              className={styles.checkbox}
            />
          </td>
        )}
        <td style={{ fontWeight: 600 }}>{consultation.name}</td>
        <td style={{ fontWeight: 500 }}>{consultation.contact}</td>
        <td style={{ color: "#333d4b", fontSize: "14px" }}>
          {consultation.industry || "-"}
        </td>
        <td style={{ color: "#333d4b", fontSize: "14px" }}>
          {consultation.revenue || "-"}
        </td>
        <td style={{ color: "#333d4b", fontSize: "14px" }}>
          {consultation.debt || "-"}
        </td>
        <td>
          <div
            className={`${styles.clickSourceCell} ${
              isTextTruncated ? styles.tooltip : ""
            }`}
            data-tooltip={
              isTextTruncated
                ? formatClickSource(consultation.click_source)
                : undefined
            }
          >
            {isTextTruncated && (
              <span className={styles.tooltipIcon}>?</span>
            )}
            <span ref={textRef} className={styles.tooltipText}>
              {formatClickSource(consultation.click_source)}
            </span>
          </div>
        </td>
        <td style={{ color: "#8b95a1", fontSize: "13px", fontWeight: 500 }}>
          {formatDate(consultation.created_at)}
        </td>
        <td>
          <div
            className={styles.notesCell}
            onClick={onOpenNotesModal}
            title={consultation.notes || "클릭하여 특이사항 입력"}
          >
            {consultation.notes ? (
              <span className={styles.notesText}>{consultation.notes}</span>
            ) : (
              <span className={styles.notesPlaceholder}>클릭하여 입력</span>
            )}
          </div>
        </td>
        <td style={{ textAlign: "center", position: "relative" }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <button
              onClick={() => setShowStatusDropdown(!showStatusDropdown)}
              className={`${styles.statusButton} ${getStatusClass(currentStatus)}`}
            >
              {getStatusLabel(currentStatus)}
            </button>
            {showStatusDropdown && (
              <>
                <div
                  className={styles.statusDropdownBackdrop}
                  onClick={() => setShowStatusDropdown(false)}
                />
                <div className={styles.statusDropdown}>
                  {(["pending", "in_progress", "completed"] as const).map(
                    (status) => (
                      <button
                        key={status}
                        className={`${styles.statusDropdownItem} ${
                          currentStatus === status ? styles.active : ""
                        }`}
                        onClick={() => {
                          onUpdateStatus(consultation.id, status);
                          setShowStatusDropdown(false);
                        }}
                      >
                        {getStatusLabel(status)}
                      </button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        </td>
      </tr>
    </>
  );
}

// Notes Modal Component
function NotesModal({
  consultation,
  onClose,
  onSave,
}: {
  consultation: Consultation;
  onClose: () => void;
  onSave: (id: string, notes: string) => void;
}) {
  const [notesValue, setNotesValue] = useState(consultation.notes || "");

  const handleSave = () => {
    onSave(consultation.id, notesValue);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>특이사항</h2>
          <button className={styles.modalCloseButton} onClick={onClose}>
            ×
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalInfo}>
            <div className={styles.modalInfoRow}>
              <span className={styles.modalInfoLabel}>이름:</span>
              <span className={styles.modalInfoValue}>{consultation.name}</span>
            </div>
            <div className={styles.modalInfoRow}>
              <span className={styles.modalInfoLabel}>연락처:</span>
              <span className={styles.modalInfoValue}>
                {consultation.contact}
              </span>
            </div>
          </div>
          <textarea
            value={notesValue}
            onChange={(e) => setNotesValue(e.target.value)}
            className={styles.modalTextarea}
            placeholder="특이사항을 입력하세요..."
            rows={8}
            autoFocus
          />
        </div>
        <div className={styles.modalFooter}>
          <button
            onClick={onClose}
            className={`${styles.modalButton} ${styles.modalCancelButton}`}
          >
            취소
          </button>
          <button
            onClick={handleSave}
            className={`${styles.modalButton} ${styles.modalSaveButton}`}
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
