# 한평생 바로기업 (프로젝트 개요)

## Overview

`한평생 바로기업`은 창업부터 EXIT까지 기업의 성공적인 경영을 지원하는 전문 컨설팅 회사의 웹 포트폴리오 및 서비스 사이트입니다. Next.js(앱 라우터)를 기반으로 퍼블릭 마케팅 사이트와 내부 운영을 위한 관리자 인터페이스를 하나의 코드베이스에서 운영합니다. 정책자금 신청, 투자유치, 경영지원, 창업교육 등 주요 서비스 페이지와 함께 상담 신청 접수·관리 기능을 포함하여 운영성과 관리 편의성을 고려한 구조로 설계되어 있습니다.

주요 구조 요약:

- `app/` — Next.js App Router 기반의 페이지 및 레이아웃. 홈, 서비스, 공지, 정책자금, 포트폴리오, 관리자 페이지 등이 포함되어 있음.
- `app/components/` — 재사용 가능한 UI 컴포넌트 집합(헤더, 푸터, 상담 모달, 플로팅 버튼, 성공 사례, 성장 섹션 등).
- `lib/` — 외부 서비스 연동 코드(`supabase/client.ts`, `supabase/server.ts`, `email.ts` 등).
- `public/` — 정적 이미지, 폰트, OG 이미지, robots.txt 등 정적 자원.
- `migrations/` — Supabase DB 초기화 SQL 스크립트(어드민 테이블 생성, 초기 슈퍼어드민 삽입).

이 프로젝트는 사용자용 퍼블릭 페이지와 관리용 대시보드를 함께 운영하면서 다음과 같은 목표를 달성하고자 했습니다: 빠른 페이지 로드, 반응형 UX 보장, 광고 유입경로 추적, 관리자가 상담 신청을 효율적으로 운영할 수 있도록 하는 것.

## 사용 기술

- 프레임워크: Next.js 16 (App Router)
- 언어: TypeScript, React 19
- 스타일링: CSS Modules, Tailwind CSS v4, PostCSS
- 인증 / DB: Supabase (인증, 데이터베이스 연동)
- 이메일 알림: Nodemailer + Brevo SMTP, EmailJS, Resend
- 애니메이션: GSAP, react-slot-counter (숫자 카운터)
- UI: Swiper (슬라이더), Pretendard 폰트
- 데이터 내보내기: xlsx (엑셀 다운로드)
- SEO: sitemap.ts, robots.txt, RSS(`rss.xml/route.ts`), OG 태그
- 배포: Vercel (Next.js 최적화 적용)
- 기타: 유입경로 추적(`ClickSourceTracker`), 모바일/데스크탑 분기 비디오 배너

## 도전과제 및 해결책

1) 광고 유입경로별 사용자 추적이 필요함
   - 해결책: `ClickSourceTracker` 컴포넌트를 `Suspense`로 감싸 URL 쿼리 파라미터(`?source=daangn`, `?source=instagram` 등)를 읽고 `sessionStorage`에 저장. 상담 신청 시 유입경로 데이터를 함께 DB에 기록하여 관리자 화면에서 경로별 필터링 가능.

2) 모바일과 데스크탑에서 다른 메인 비디오를 제공해야 함
   - 해결책: `useIsMobile` 훅으로 `window.innerWidth <= 1023` 기준을 판단하고, `<video key={isMobile ? 'mobile' : 'desktop'}>` 패턴으로 key를 변경하여 화면 크기 전환 시 비디오 소스가 올바르게 다시 로드되도록 처리.

3) 관리자 권한을 super_admin / admin 두 단계로 분리해야 함
   - 해결책: Supabase `admins` 테이블에 role 컬럼을 두고, `/api/admin/check-role` API 엔드포인트에서 세션 토큰을 검증해 역할을 반환. 상담 내역 삭제 버튼은 `super_admin`에게만 노출.

4) 상담 신청 즉시 운영자에게 이메일 알림을 보내야 함
   - 해결책: `lib/email.ts`에서 Brevo SMTP(nodemailer)를 사용해 상담 신청 정보를 HTML 이메일로 즉시 발송. 환경 변수(`BREVO_SMTP_LOGIN`, `BREVO_SMTP_KEY`)로 자격증명을 관리하고 연결 타임아웃을 설정하여 Vercel 서버리스 환경에서 안정적으로 동작하도록 구성.

5) 상담 데이터 관리 화면의 UX 및 필터 기능 구현
   - 해결책: `useMemo`로 처리 상태(대기/상담중/완료), 유입경로, 날짜 범위 필터를 클라이언트 사이드에서 실시간 적용. 페이지네이션과 엑셀 다운로드(`xlsx`) 기능을 제공하고, 필터 변경 시 자동으로 첫 페이지로 이동 및 선택 초기화.

## 결과 및 성과

- 재사용 가능한 컴포넌트 라이브러리 구축으로 개발 생산성 향상(헤더/푸터, 상담 모달, 플로팅 배너, 성과 섹션 등).
- 유입경로 추적 시스템을 통해 당근마켓, 인스타그램 등 광고 채널별 상담 신청 현황을 관리자 화면에서 직접 확인 가능.
- Brevo SMTP 이메일 자동 알림으로 상담 신청 즉시 운영자에게 통지, 빠른 초기 응대 가능.
- super_admin / admin 권한 분리로 운영 보안 강화 및 실수로 인한 데이터 삭제 방지.
- Next.js 기반으로 SEO(sitemap, robots.txt, RSS, OG 태그) 및 Vercel 배포 최적화 적용.
- 모바일/데스크탑 분기 비디오 배너와 반응형 레이아웃으로 전 디바이스 일관된 UX 제공.
