import type { Metadata } from "next";
import { sitePath } from "./site-path";
import "./globals.css";
import "./modern-home.css";
import "./support-home-fix.css";

export const metadata: Metadata = {
  title: "NIIGATA LIFE ATLAS｜新潟生活観測所",
  description: "移住する前に、暮らしを観測する。住まい、食、移動、冬、支援制度を公開情報から読み解く、新潟移住の非公式リサーチサイト。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: sitePath("/favicon.svg"),
    shortcut: sitePath("/favicon.svg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <style>{`:root { --life-atlas-hero: url("${sitePath("/niigata-city-hero.webp")}"); }`}</style>
        {children}
        <a
          className="pairing-lab-orbit"
          href="https://ruharuhachan.github.io/niigata-pairing-lab/"
          target="_blank"
          rel="noreferrer"
          aria-label="新潟ペアリングラボを新しいタブで開く"
        >
          <small>ANOTHER PROJECT</small>
          <strong>新潟<br />ペアリング<br />ラボ</strong>
          <span aria-hidden="true">↗</span>
        </a>
      </body>
    </html>
  );
}
