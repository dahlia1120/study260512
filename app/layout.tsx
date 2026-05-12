import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ODA 스터디 — 국가별 개발협력 스터디 플랫폼",
  description: "KOICA 준비부터 파견국 심층 분석까지. 같은 목표를 가진 4–6명이 4주간 함께하는 국가별 맞춤 ODA 스터디.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
