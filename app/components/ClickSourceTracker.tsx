"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getClickSource } from "../utils/clickSource";

/**
 * 페이지 로드 시 URL 파라미터에서 click_source를 읽어서 sessionStorage에 저장하는 컴포넌트
 */
export default function ClickSourceTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // URL 파라미터에서 click_source 읽기
    getClickSource();
  }, [pathname, searchParams]);

  return null;
}
