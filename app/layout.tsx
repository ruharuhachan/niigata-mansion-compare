import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIIGATA SHIFT｜新潟移住の非公式リサーチガイド",
  description: "暮らし・エリア・住まい・街の変化を公開情報から読み解く、新潟移住の非公式リサーチサイト。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
