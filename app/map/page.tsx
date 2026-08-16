/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import PlaceAtlas from "../components/PlaceAtlas";
import { MAP_CATEGORY_META, MAP_PLACES, MapCategory } from "../data/places";

export const metadata: Metadata = {
  title: "NIIGATA LIFE ATLAS｜住まい・酒蔵・店を重ねる生活地図",
  description: "新潟市のマンション、酒蔵、飲食店を同じ座標系で切り替えて探索する、D3.jsの非公式リサーチマップ。",
};

const categoryCount = (kind: MapCategory) => MAP_PLACES.filter((place) => place.kind === kind).length;

export default function MapPage() {
  return (
    <main className="map-page">
      <header className="site-header portal-header map-header">
        <a className="brand portal-brand" href="/" aria-label="NIIGATA SHIFT 移住トップへ">
          <span className="shift-mark" aria-hidden="true">N</span>
          <span>NIIGATA SHIFT<small>UNOFFICIAL</small></span>
        </a>
        <nav aria-label="ページナビゲーション">
          <a href="/">移住トップ</a>
          <a href="/housing">住まい</a>
          <a href="/food">食</a>
          <a href="#method">地図の読み方</a>
        </nav>
        <a className="button button-primary header-add" href="#atlas">地図を探索 →</a>
      </header>

      <section className="map-hero" id="top">
        <div className="map-hero-copy">
          <p className="database-breadcrumb"><a href="/">移住トップ</a><span>/</span>生活地点マップ</p>
          <div className="map-overline"><span>D3.JS / MULTI-LAYER CITY RESEARCH</span><b>NIIGATA</b></div>
          <h1>街の魅力を、<br /><em>点ではなく距離</em>で見る。</h1>
          <p>住まい、食、酒蔵を別々のリストにしない。日常の拠点と、休日に足を延ばす目的地を同じ地図へ重ねて、新潟でどんな生活圏をつくれるかを考えます。</p>
          <a className="button button-primary" href="#atlas">生活地図を動かす ↓</a>
        </div>
        <aside className="map-hero-ledger" aria-label="収録地点数">
          <div><span>PLACE DATA</span><strong>{String(MAP_PLACES.length).padStart(2, "0")}</strong><small>観測地点</small></div>
          {(["housing", "brewery", "food"] as MapCategory[]).map((kind, index) => (
            <div className="map-hero-row" key={kind}>
              <span>0{index + 1}</span>
              <i style={{ background: MAP_CATEGORY_META[kind].color }} />
              <b>{MAP_CATEGORY_META[kind].label}</b>
              <strong>{String(categoryCount(kind)).padStart(2, "0")}</strong>
            </div>
          ))}
          <p>1つの地点データ形式を、カテゴリごとの詳細情報で拡張しています。</p>
        </aside>
      </section>

      <section className="atlas-section" id="atlas">
        <div className="atlas-heading">
          <div><p className="kicker">NIIGATA LIFE ATLAS / 01</p><h2>レイヤーを重ねて、<br />生活圏を読む。</h2></div>
          <p>色のレイヤーをオン・オフし、地図をドラッグ、地点を選択。住所やエリアで検索できます。西蒲まで含めた全域表示と、地点単位の拡大を行き来してください。</p>
        </div>
        <PlaceAtlas places={MAP_PLACES} />
        <p className="atlas-coordinate-note">座標は住所から取得した代表点です。建物入口・店舗入口・敷地内の厳密な位置とは異なる場合があります。訪問や購入の判断には、参照元と公式地図を確認してください。</p>
      </section>

      <section className="map-method" id="method">
        <div><p className="kicker">REUSABLE DATA MODEL / 02</p><h2>地図は一枚。<br />データだけを増やす。</h2></div>
        <div className="map-method-grid">
          <article><span>01 / COMMON</span><h3>共通項目</h3><p>名称、カテゴリ、住所、緯度経度、エリア、出典、観測日をすべての地点に持たせます。</p></article>
          <article><span>02 / EXTEND</span><h3>カテゴリ固有</h3><p>マンションは価格と築年、店は料理と利用場面、酒蔵は酒類と見学情報を追加します。</p></article>
          <article><span>03 / TRACE</span><h3>出典へ戻る</h3><p>地図は結論ではなく入口。営業・販売・見学条件が変わる情報は、観測日と参照元を残します。</p></article>
          <article><span>04 / NEXT</span><h3>次に増やせるもの</h3><p>ブルワリー、酒販店、市場、温泉、医療、コワーキングも同じ仕組みへ追加できます。</p></article>
        </div>
      </section>

      <footer className="portal-footer">
        <a className="brand portal-brand footer-brand" href="/"><span className="shift-mark">N</span><span>NIIGATA SHIFT<small>UNOFFICIAL</small></span></a>
        <p>NIIGATA LIFE ATLAS / D3.JS PLACE RESEARCH</p>
        <a href="#top">ページ上部へ ↑</a>
      </footer>
    </main>
  );
}
