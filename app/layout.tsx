import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import "../styles/base.css";
import "../styles/components.css";
import ClickSourceTracker from "./components/ClickSourceTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "한평생 바로기업",
  description: "한평생 바로기업",
  verification: {
    google: "852osWNQj4Nc948PauZNVRQO1EMBjk63cS-yjRnBbtk",
    other: {
      "naver-site-verification": "5eb6ac15f9b961c9071b707656aee55668db1ba7",
    },
  },
  openGraph: {
    title: "한평생 바로기업 | 정책자금 신청부터 기업성장 지원까지!",
    description: "한평생 바로기업",
    url: "https://www.바로기업.com",
    siteName: "한평생 바로기업",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "한평생 바로기업",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "한평생 바로기업",
    description: "한평생 바로기업",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <ClickSourceTracker />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
