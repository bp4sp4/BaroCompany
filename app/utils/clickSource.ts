/**
 * URL 파라미터에서 click_source를 읽어서 sessionStorage에 저장하고 반환하는 유틸리티
 * 페이지 이동 시에도 유지되도록 sessionStorage 사용
 */

export function getClickSource(): string | null {
  if (typeof window === "undefined") return null;

  // 1. URL 파라미터에서 직접 읽기 (우선순위 1)
  const urlParams = new URLSearchParams(window.location.search);
  const urlClickSource = urlParams.get("click_source");

  if (urlClickSource) {
    // sessionStorage에 저장 (페이지 이동 시에도 유지)
    sessionStorage.setItem("click_source", urlClickSource);
    return urlClickSource;
  }

  // 2. UTM 파라미터에서 변환 (우선순위 2)
  const utmSource = urlParams.get("utm_source");
  if (utmSource) {
    // utm_source를 click_source로 변환
    const clickSource = utmSource.toLowerCase();
    sessionStorage.setItem("click_source", clickSource);
    return clickSource;
  }

  // 3. sessionStorage에서 읽기 (이전에 저장된 값)
  const storedClickSource = sessionStorage.getItem("click_source");
  if (storedClickSource) {
    return storedClickSource;
  }

  return null;
}

/**
 * 현재 저장된 click_source를 반환 (URL 파라미터 없이도)
 * 저장된 값이 없고 홈페이지("/")에서 신청한 경우 "홈페이지" 반환
 */
export function getStoredClickSource(): string | null {
  if (typeof window === "undefined") return null;
  
  const storedClickSource = sessionStorage.getItem("click_source");
  
  // 저장된 click_source가 없고 홈페이지에서 신청한 경우
  if (!storedClickSource && window.location.pathname === "/") {
    return "바로기업 홈페이지";
  }
  
  return storedClickSource;
}

/**
 * click_source를 명시적으로 설정
 */
export function setClickSource(source: string): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem("click_source", source);
}

/**
 * click_source 초기화
 */
export function clearClickSource(): void {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem("click_source");
}
