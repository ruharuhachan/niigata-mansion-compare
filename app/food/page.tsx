/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { sitePath } from "../site-path";
import RestaurantResearch from "../components/RestaurantResearch";
import { RESTAURANTS } from "../data/restaurants";

export const metadata: Metadata = {
  title: "NIIGATA CITY TABLE｜都会の人のための新潟市レストラン研究",
  description: "料理人の経歴、店の思想、公開インタビューから選ぶ、新潟市の非公式レストランリサーチ。",
};

const featured = RESTAURANTS[0];

export default function FoodPage() {
  return (
    <main className="food-page">
      <header className="site-header portal-header food-header">
        <a className="brand portal-brand" href={sitePath("/")} aria-label="NIIGATA SHIFT 移住トップへ">
          <span className="shift-mark" aria-hidden="true">N</span>
          <span>NIIGATA SHIFT<small>UNOFFICIAL</small></span>
        </a>
        <nav aria-label="ページナビゲーション">
          <a href={sitePath("/")}>移住トップ</a>
          <a href={sitePath("/map")}>地図</a>
          <a href="#research">店を探す</a>
          <a href="#policy">掲載基準</a>
        </nav>
        <a className="button button-primary header-add" href={sitePath("/housing")}>住まいDB →</a>
      </header>

      <section className="food-hero" id="top">
        <div className="food-hero-copy">
          <p className="database-breadcrumb"><a href={sitePath("/")}>移住トップ</a><span>/</span>食のリサーチ</p>
          <div className="food-overline"><span>CITY TABLE / INDEPENDENT FOOD RESEARCH</span><b>NIIGATA</b></div>
          <h1>名物ではなく、<br /><em>料理人</em>で選ぶ。</h1>
          <p>都会の舌を捨てなくていい。料理人の修業歴、店の思想、新潟で作る必然性まで調べて、わざわざ行く理由のある店だけを集めます。</p>
          <div className="food-hero-actions"><a className="button button-primary" href="#research">掲載店を見る</a><a className="button button-ghost" href="#policy">選び方を読む</a></div>
        </div>
        <aside className="food-manifesto">
          <div className="food-plate" aria-hidden="true"><span>味</span><i>NIIGATA<br />CITY</i></div>
          <div><span>THE QUESTION</span><p>東京にもある店か、<br />新潟でしか成立しない店か。</p></div>
          <small>NOT RANKED / NOT SPONSORED / SOURCE-LED</small>
        </aside>
      </section>

      <section className="food-feature">
        <div className="food-feature-number"><span>FIRST FIND</span><b>01</b><small>FURUMACHI</small></div>
        <div className="food-feature-copy">
          <p className="kicker">EDITOR&apos;S FIRST FIND / 実食済</p>
          <h2>{featured.name}</h2>
          <p className="food-feature-lead">{featured.lead}</p>
          <div className="food-feature-columns">
            <div><span>WHY IT WORKS</span><p>{featured.tasteRead}</p></div>
            <div><span>THE BACKGROUND</span><p>{featured.chefStory}</p></div>
          </div>
          <div className="food-feature-links"><a href={featured.researchUrl} target="_blank" rel="noreferrer">取材・紹介記事を読む ↗</a><a href={featured.officialUrl} target="_blank" rel="noreferrer">公式Instagram ↗</a></div>
        </div>
        <blockquote><span>LOCAL NOTE</span><p>元ホテル中華料理長の技術があるから、無化調でも“やさしいだけ”にならない。古町で一番最初に紹介したい店。</p></blockquote>
      </section>

      <RestaurantResearch restaurants={RESTAURANTS} />

      <section className="food-policy" id="policy">
        <div><p className="kicker">EDITORIAL POLICY / 03</p><h2>「うまい」を、<br />根拠のない点数にしない。</h2></div>
        <div className="food-policy-grid">
          <article><span>01 / PERSON</span><h3>料理人を調べる</h3><p>どこで技術を身につけ、なぜ新潟で店をつくるのか。公開インタビューや公式プロフィールに戻れるようにします。</p></article>
          <article><span>02 / TASTE</span><h3>うまさを分解する</h3><p>素材名だけでなく、香り、火入れ、食感、余韻、酒との関係を言葉にします。実食前の記述は「読み」として区別します。</p></article>
          <article><span>03 / CONTEXT</span><h3>都会との比較軸を置く</h3><p>安い・量が多いではなく、同価格帯の東京の店と比べても行く理由があるか、新潟でしか成立しない価値があるかを見ます。</p></article>
          <article><span>04 / UPDATE</span><h3>営業情報は公式へ</h3><p>営業時間、価格、予約条件は変わります。このページは編集リサーチであり、訪問前は必ず各店の公式情報を確認してください。</p></article>
        </div>
        <p className="food-disclaimer">掲載は広告ではなく、順位も付けていません。公開情報と現地メモをもとにした非公式の選定です。料理の感じ方には個人差があり、未訪問店の「TASTE READ」は公開情報からの編集上の推論を含みます。</p>
      </section>

      <footer className="portal-footer">
        <a className="brand portal-brand footer-brand" href={sitePath("/")}><span className="shift-mark">N</span><span>NIIGATA SHIFT<small>UNOFFICIAL</small></span></a>
        <p>NIIGATA CITY TABLE / SOURCE-LED FOOD NOTES</p>
        <a href="#top">ページ上部へ ↑</a>
      </footer>
    </main>
  );
}
