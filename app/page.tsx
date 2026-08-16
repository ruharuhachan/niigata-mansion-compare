import { sitePath } from "./site-path";
import { PUBLIC_LISTINGS, unitPrice } from "./data/public-listings";
import { RESTAURANTS } from "./data/restaurants";
import { MAP_CATEGORY_META, MAP_PLACES, MapCategory } from "./data/places";

const AREAS = [
  {
    no: "01",
    name: "新潟駅南・米山",
    tag: "STATION SOUTH",
    text: "新幹線と在来線への近さを軸に、徒歩生活を組み立てやすいエリア。駅前再編の変化も現地で追いたい。",
    lens: "出張・二拠点 / 駅徒歩 / 再開発",
  },
  {
    no: "02",
    name: "万代・八千代",
    tag: "BANDAI",
    text: "商業と信濃川の距離が近い都心居住。バス動線、日常の買い物、冬の徒歩ルートまで見ておく。",
    lens: "買い物 / バス / 川との距離",
  },
  {
    no: "03",
    name: "古町・白山",
    tag: "FURUMACHI / HAKUSAN",
    text: "街の文化や飲食、行政・医療へのアクセスが魅力。建物の築年と周辺の更新計画を一緒に読む。",
    lens: "文化 / 医療 / 既存ストック",
  },
  {
    no: "04",
    name: "関屋・青山",
    tag: "SEKIYA / AOYAMA",
    text: "海と川、落ち着いた住宅地を選択肢に。JR越後線と車をどう使い分けるかで生活像が変わる。",
    lens: "住宅地 / JR越後線 / 車",
  },
];

const minPrice = Math.min(...PUBLIC_LISTINGS.map((item) => item.price));
const maxPrice = Math.max(...PUBLIC_LISTINGS.map((item) => item.price));
const sortedUnitPrices = [...PUBLIC_LISTINGS].map(unitPrice).sort((a, b) => a - b);
const medianIndex = Math.floor(sortedUnitPrices.length / 2);
const medianUnitPrice = sortedUnitPrices.length % 2
  ? sortedUnitPrices[medianIndex]
  : (sortedUnitPrices[medianIndex - 1] + sortedUnitPrices[medianIndex]) / 2;

export default function Home() {
  return (
    <main className="portal-page">
      <header className="site-header portal-header">
        <a className="brand portal-brand" href="#top" aria-label="NIIGATA SHIFT トップへ">
          <span className="shift-mark" aria-hidden="true">N</span>
          <span>NIIGATA SHIFT<small>UNOFFICIAL</small></span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#areas">エリア</a>
          <a href="#life">暮らし</a>
          <a href={sitePath("/map")}>地図</a>
          <a href={sitePath("/food")}>食</a>
          <a href="#method">このサイトについて</a>
        </nav>
        <a className="button button-primary header-add" href={sitePath("/housing")}>住まいデータを見る →</a>
      </header>

      <section className="portal-hero" id="top">
        <div className="portal-hero-copy">
          <div className="portal-overline"><span>INDEPENDENT RELOCATION RESEARCH</span><b>NIIGATA CITY</b></div>
          <p className="portal-side-note">NOT A CITY PROMOTION.<br />A DECISION TOOL.</p>
          <h1>新潟に住む、を<br /><em>解像する。</em></h1>
          <p className="portal-lead">観光の延長ではなく、毎日の移動、冬、住まい、街の変化まで。新潟移住を自分の条件で考えるための、非公式リサーチノートです。</p>
          <div className="portal-actions">
            <a className="button button-primary" href="#start">移住の論点から見る</a>
            <a className="button button-ghost" href={sitePath("/map")}>生活地点マップ</a>
          </div>
        </div>
        <aside className="portal-coordinate" aria-label="サイトの4つの視点">
          <div className="coordinate-head"><span>38.2682° N / 140.8694° E</span><i>UNOFFICIAL</i></div>
          <div className="coordinate-grid">
            <div><span>01</span><b>MOVE</b><small>移動を設計する</small></div>
            <div><span>02</span><b>LIVE</b><small>暮らしを試算する</small></div>
            <div><span>03</span><b>HOME</b><small>住まいを比較する</small></div>
            <div><span>04</span><b>CHANGE</b><small>街の更新を読む</small></div>
          </div>
          <p>現地確認と一次情報への入口をつくる。結論を代わりに出すのではなく、判断材料を増やすサイトです。</p>
        </aside>
      </section>

      <section className="portal-intro" id="start">
        <div className="portal-section-label"><span>START HERE</span><b>移住前に分けて考える</b></div>
        <div className="portal-intro-copy">
          <p className="portal-large-copy">「新潟が好き」と「新潟で暮らせる」の間には、<em>いくつかの具体的な問い</em>があります。</p>
          <p>職場までの距離、車を持つか、雪の日の動線、住居費、地盤と水害。魅力だけでなく制約も同じ画面に置き、優先順位を言葉と数字に変えていきます。</p>
        </div>
        <div className="question-strip">
          <span><b>Q1</b>平日の移動は？</span>
          <span><b>Q2</b>車は必要？</span>
          <span><b>Q3</b>冬の徒歩圏は？</span>
          <span><b>Q4</b>住居費の上限は？</span>
        </div>
      </section>

      <section className="area-section" id="areas">
        <div className="portal-heading">
          <div><p className="kicker">AREA NOTES / 01</p><h2>街は、距離ではなく<br />生活動線で見る。</h2></div>
          <p>同じ中央区でも、駅・商業・川・海との関係で暮らし方は変わります。最初の内見前に、候補エリアを2つ以上歩くための入口です。</p>
        </div>
        <div className="area-grid">
          {AREAS.map((area) => (
            <article className="area-card" key={area.no}>
              <div><span>{area.no}</span><small>{area.tag}</small></div>
              <h3>{area.name}</h3>
              <p>{area.text}</p>
              <b>{area.lens}</b>
            </article>
          ))}
        </div>
      </section>

      <section className="life-section" id="life">
        <div className="portal-heading light-portal-heading">
          <div><p className="kicker">REALITY CHECK / 02</p><h2>移住後の日常を、<br />4つのレンズで。</h2></div>
          <p>季節や時間帯を変えて現地を見ると、地図だけでは分からない差が見えてきます。</p>
        </div>
        <div className="life-grid">
          <article><span>01 / MOBILITY</span><h3>車と公共交通</h3><p>「車なしで可能か」ではなく、雨雪の日も含めて許容できるか。バスの最終時刻、駐車場代、除雪動線まで試算する。</p></article>
          <article><span>02 / WINTER</span><h3>冬の暮らし</h3><p>積雪量の数字だけで決めず、風、濡れ、路面、建物入口から目的地までの連続した動線を確認する。</p></article>
          <article><span>03 / GROUND</span><h3>水と地盤</h3><p>河川・津波・内水・液状化は別のリスク。住所単位でハザードマップを重ね、避難先まで歩いてみる。</p></article>
          <article><span>04 / ACCESS</span><h3>東京との距離</h3><p>新幹線所要時間だけでなく、自宅から駅、待ち時間、最終列車、月の往復回数を含めた総コストで考える。</p></article>
        </div>
        <div className="official-links">
          <span>PRIMARY SOURCES</span>
          <a href="https://iju.niigata.jp/ijushienkin/" target="_blank" rel="noreferrer">新潟市の移住支援情報 ↗</a>
          <a href="https://www.city.niigata.lg.jp/kurashi/bosai/hinanjo/kouzui_hinanchizu/sougou_map/bosai_03sougouR8.html" target="_blank" rel="noreferrer">中央区ハザードマップ ↗</a>
          <a href="https://www.city.niigata.lg.jp/kurashi/bosai/hinanjo/kouzui_hinanchizu/bosai_ekijyoka.html" target="_blank" rel="noreferrer">液状化ハザードマップ ↗</a>
        </div>
      </section>

      <section className="atlas-home-preview">
        <div className="atlas-home-copy">
          <p className="kicker">NIIGATA LIFE ATLAS / 03</p>
          <h2>住まいと、<br />食と、酒を重ねる。</h2>
          <p>マンションの位置だけでは生活は見えません。D3.jsの地図に、都会の人へ薦めたい店と新潟市の酒蔵を重ね、平日と休日の距離を一つの画面で見ます。</p>
          <a className="button button-primary" href={sitePath("/map")}>D3.jsの生活地図を開く →</a>
        </div>
        <div className="atlas-home-index">
          <div className="atlas-home-total"><span>OBSERVED PLACES</span><strong>{String(MAP_PLACES.length).padStart(2, "0")}</strong><small>住所・座標・出典・観測日つき</small></div>
          {(["housing", "brewery", "food"] as MapCategory[]).map((kind, index) => (
            <a href={sitePath("/map")} key={kind}>
              <span>0{index + 1}</span>
              <i style={{ background: MAP_CATEGORY_META[kind].color }} />
              <b>{MAP_CATEGORY_META[kind].label}</b>
              <strong>{String(MAP_PLACES.filter((place) => place.kind === kind).length).padStart(2, "0")}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="food-home-preview">
        <div className="food-home-copy">
          <p className="kicker">NIIGATA CITY TABLE / 04</p>
          <h2>“ご当地グルメ”より、<br />誰が、なぜ作るか。</h2>
          <p>料理人の経歴、店の思想、公開インタビューを起点に、都会の同価格帯と比べても行く理由がある新潟市の店を調べます。</p>
          <a className="button button-primary" href={sitePath("/food")}>食のリサーチを開く →</a>
        </div>
        <div className="food-home-index">
          {RESTAURANTS.slice(0, 3).map((restaurant, index) => (
            <a href={`/food#research`} key={restaurant.id}>
              <span>{String(index + 1).padStart(2, "0")} / {restaurant.area}</span>
              <h3>{restaurant.name}</h3>
              <p>{restaurant.lead}</p>
              <b>{restaurant.cuisine}　{restaurant.budget}</b>
            </a>
          ))}
          <div><strong>{String(RESTAURANTS.length).padStart(2, "0")}</strong><span>RESEARCHED<br />PLACES</span><small>取材・公式・審査員評へリンク</small></div>
        </div>
      </section>

      <section className="housing-preview">
        <div className="housing-preview-copy">
          <p className="kicker">OPEN HOUSING OBSERVATORY / 05</p>
          <h2>公開情報を、<br />比較できるデータへ。</h2>
          <p>中古マンションの公開ページを観測時点の記録として整理。D3.jsで駅距離・㎡単価・広さ・価格の関係を動かして見られます。</p>
          <a className="button button-primary" href={sitePath("/housing")}>公開DBと比較ツールを開く →</a>
        </div>
        <div className="housing-stats">
          <div><span>OBSERVATIONS</span><strong>{String(PUBLIC_LISTINGS.length).padStart(2, "0")}</strong><small>公開情報の観測件数</small></div>
          <div><span>ASKING PRICE</span><strong>{minPrice.toLocaleString("ja-JP")}<i>–</i>{maxPrice.toLocaleString("ja-JP")}</strong><small>万円 / 観測時点</small></div>
          <div><span>MEDIAN UNIT</span><strong>{medianUnitPrice.toFixed(1)}</strong><small>万円 / ㎡</small></div>
          <p>在庫一覧ではありません。掲載終了を含む観測ログとして、出典と確認日を残しています。</p>
        </div>
      </section>

      <section className="method-section" id="method">
        <div className="portal-section-label"><span>METHOD &amp; POLICY</span><b>このサイトについて</b></div>
        <div className="method-grid">
          <h2>非公式だからこそ、<br />出典と限界を明記する。</h2>
          <div><b>01 / SOURCE</b><p>行政資料、ハザードマップ、不動産ポータル等の公開ページに戻れるリンクを付けます。</p></div>
          <div><b>02 / SNAPSHOT</b><p>価格や在庫は変わります。最新情報を断定せず、いつ観測した情報かを表示します。</p></div>
          <div><b>03 / INDEPENDENT</b><p>新潟市・不動産会社・各物件の公式サイトではありません。最終判断は一次資料と現地確認で。</p></div>
        </div>
      </section>

      <footer className="portal-footer">
        <a className="brand portal-brand footer-brand" href="#top"><span className="shift-mark">N</span><span>NIIGATA SHIFT<small>UNOFFICIAL</small></span></a>
        <p>新潟移住の非公式リサーチガイド</p>
        <a href="#top">ページ上部へ ↑</a>
      </footer>
    </main>
  );
}
