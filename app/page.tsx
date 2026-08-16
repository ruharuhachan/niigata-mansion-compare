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

const sortedUnitPrices = [...PUBLIC_LISTINGS].map(unitPrice).sort((a, b) => a - b);
const medianIndex = Math.floor(sortedUnitPrices.length / 2);
const medianUnitPrice = sortedUnitPrices.length % 2
  ? sortedUnitPrices[medianIndex]
  : (sortedUnitPrices[medianIndex - 1] + sortedUnitPrices[medianIndex]) / 2;

export default function Home() {
  const topics = [
    {
      no: "01",
      slug: "HOUSING",
      title: "住まいを選ぶ",
      text: "新築・中古マンションの公開情報を、価格・広さ・駅距離・固定費で比較する。",
      href: sitePath("/housing"),
      metric: String(PUBLIC_LISTINGS.length).padStart(2, "0"),
      unit: "観測物件",
      tone: "housing",
    },
    {
      no: "02",
      slug: "FOOD",
      title: "食から街を知る",
      text: "名物の一覧ではなく、料理人・店の思想・新潟で作る理由から日常の豊かさを見る。",
      href: sitePath("/food"),
      metric: String(RESTAURANTS.length).padStart(2, "0"),
      unit: "調査した店",
      tone: "food",
    },
    {
      no: "03",
      slug: "LIFE MAP",
      title: "生活圏を重ねる",
      text: "マンション、酒蔵、飲食店をD3.jsの地図に重ね、平日と休日の距離を読む。",
      href: sitePath("/map"),
      metric: String(MAP_PLACES.length).padStart(2, "0"),
      unit: "観測地点",
      tone: "map",
    },
    {
      no: "04",
      slug: "RELOCATION",
      title: "移住の条件を確認する",
      text: "仕事、車、冬、災害リスク、補助金。契約や転入の前に確認する順番を整理する。",
      href: sitePath("/relocation"),
      metric: "05",
      unit: "支援制度の入口",
      tone: "relocation",
    },
  ];

  return (
    <main className="portal-page atlas-portal-page">
      <header className="site-header portal-header atlas-site-header">
        <a className="brand portal-brand" href="#top" aria-label="NIIGATA LIFE ATLAS トップへ">
          <span className="shift-mark" aria-hidden="true">N</span>
          <span>NIIGATA LIFE ATLAS<small>新潟生活観測所</small></span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href={sitePath("/housing")}>住まい</a>
          <a href={sitePath("/food")}>食</a>
          <a href={sitePath("/map")}>生活地図</a>
          <a href={sitePath("/relocation")}>移住準備</a>
        </nav>
        <a className="button button-primary header-add" href={sitePath("/relocation#support")}>支援制度を見る →</a>
      </header>

      <section className="atlas-portal-hero" id="top">
        <div className="atlas-portal-copy">
          <div className="portal-overline"><span>I-TURN / U-TURN RELOCATION RESEARCH</span><b>NIIGATA CITY</b></div>
          <p className="atlas-portal-kana">新潟生活観測所</p>
          <h1><span>移住する前に、</span><em>暮らしを観測する。</em></h1>
          <p className="atlas-portal-lead">都会の便利さを忘れる必要はありません。住まい、食、移動、冬、支援制度を同じ物差しに置いて、新潟での毎日を決めるための非公式リサーチサイトです。</p>
          <div className="portal-actions">
            <a className="button button-primary" href="#topics">知りたいことから選ぶ ↓</a>
            <a className="button button-ghost" href={sitePath("/map")}>D3.js生活地図</a>
          </div>
          <p className="atlas-portal-note"><span /> PUBLIC DATA / LOCAL OBSERVATION / PRIMARY SOURCES</p>
        </div>

        <aside className="atlas-portal-menu" aria-label="調べたいトピック">
          <div className="atlas-menu-head"><span>WHAT DO YOU WANT TO KNOW?</span><b>04</b></div>
          {topics.map((topic) => (
            <a href={topic.href} key={topic.no}>
              <span>{topic.no}</span>
              <div><b>{topic.title}</b><small>{topic.slug}</small></div>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
          <p>魅力だけでなく、制約と確認先まで一緒に置く。結論ではなく、判断材料を増やします。</p>
        </aside>
      </section>

      <section className="topic-hub" id="topics">
        <div className="topic-hub-heading">
          <div><p className="kicker">START WITH A QUESTION / 01</p><h2>新潟で何をするかより、<br />何を確かめたいか。</h2></div>
          <p>移住情報をひとつの長い一覧にせず、いま気になっている論点から入れるようにしました。各ページは、公開情報の出典と観測日へ戻れます。</p>
        </div>
        <div className="topic-card-grid">
          {topics.map((topic) => (
            <a className={`topic-card topic-${topic.tone}`} href={topic.href} key={topic.no}>
              <div className="topic-card-top"><span>{topic.no}</span><small>{topic.slug}</small><i aria-hidden="true">↗</i></div>
              <h3>{topic.title}</h3>
              <p>{topic.text}</p>
              <div className="topic-card-metric"><strong>{topic.metric}</strong><span>{topic.unit}</span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="decision-route">
        <div className="decision-route-copy">
          <p className="kicker">BEFORE YOU MOVE / 02</p>
          <h2>移住は、<br />順番で失敗を減らせる。</h2>
          <p>支援金には転入前の居住歴や働き方、申請期限があります。物件契約を先に進める前に、使える制度と必要な証明を確認します。</p>
          <a className="button button-primary" href={sitePath("/relocation")}>移住準備ガイドを開く →</a>
        </div>
        <div className="decision-route-grid">
          <article><span>01 / SORT</span><h3>条件を並べる</h3><p>仕事を変えるか、車を持つか、東京へ何回戻るか。まず固定条件と希望を分けます。</p></article>
          <article><span>02 / TEST</span><h3>平日を試す</h3><p>観光の休日ではなく、通勤時間帯、雨、風、冬の移動を含む普通の日を体験します。</p></article>
          <article><span>03 / CHECK</span><h3>契約前に確認する</h3><p>支援金、ハザード、管理状況、駐車場を一次資料で確認してから契約へ進みます。</p></article>
        </div>
      </section>

      <section className="support-home-preview">
        <div className="support-home-intro">
          <p className="kicker">SUPPORT FINDER / 03</p>
          <h2>お金の話は、<br />引っ越す前に。</h2>
          <p>2026年度の新潟市・新潟県の公式情報から、都市部からの移住で候補になりやすい制度を整理しました。金額だけでなく、誰が・いつまでに・何を証明するかを確認できます。</p>
          <small>最終確認：2026.08.16　制度は予算・年度で変更されます。</small>
        </div>
        <div className="support-home-list">
          <a href={sitePath("/relocation#support")}><span>東京23区等から</span><b>単身 60万円<br />世帯 100万円</b><small>18歳未満1人につき100万円加算の対象あり</small></a>
          <a href={sitePath("/relocation#support")}><span>三大都市圏からテレワーク</span><b>単身 30万円<br />世帯 50万円</b><small>週20時間以上などの要件あり</small></a>
          <a href={sitePath("/relocation#support")}><span>1週間以上の体験居住</span><b>単身 3万円<br />世帯 5万円</b><small>体験開始3日前までの事前申込が必要</small></a>
          <a href={sitePath("/relocation#support")}><span>空き家の購入＋改修</span><b>合計 最大200万円</b><small>交付決定前の着手は原則対象外</small></a>
        </div>
      </section>

      <section className="atlas-home-preview">
        <div className="atlas-home-copy">
          <p className="kicker">NIIGATA LIFE ATLAS / 04</p>
          <h2>住まいと、<br />食と、酒を重ねる。</h2>
          <p>マンションの位置だけでは生活は見えません。D3.jsの地図に、店と新潟市の酒蔵を重ね、平日と休日の距離を一つの画面で見ます。</p>
          <a className="button button-primary" href={sitePath("/map")}>D3.jsの生活地図を開く →</a>
        </div>
        <div className="atlas-home-index">
          <div className="atlas-home-total"><span>OBSERVED PLACES</span><strong>{String(MAP_PLACES.length).padStart(2, "0")}</strong><small>住所・座標・出典・観測日つき</small></div>
          {(["housing", "brewery", "food"] as MapCategory[]).map((kind, index) => (
            <a href={sitePath(`/map?category=${kind}`)} key={kind}>
              <span>0{index + 1}</span>
              <i style={{ background: MAP_CATEGORY_META[kind].color }} />
              <b>{MAP_CATEGORY_META[kind].label}</b>
              <strong>{String(MAP_PLACES.filter((place) => place.kind === kind).length).padStart(2, "0")}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="area-section" id="areas">
        <div className="portal-heading">
          <div><p className="kicker">AREA NOTES / 05</p><h2>街は、距離ではなく<br />生活動線で見る。</h2></div>
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

      <section className="atlas-observation-strip" aria-label="データ概要">
        <div><span>HOUSING OBSERVATIONS</span><strong>{PUBLIC_LISTINGS.length}</strong></div>
        <div><span>MEDIAN UNIT PRICE</span><strong>{medianUnitPrice.toFixed(1)}<small>万円/㎡</small></strong></div>
        <div><span>MAP PLACES</span><strong>{MAP_PLACES.length}</strong></div>
        <div><span>LAST REVIEW</span><strong>2026.08.16</strong></div>
      </section>

      <section className="method-section" id="method">
        <div className="portal-section-label"><span>METHOD &amp; POLICY</span><b>新潟生活観測所について</b></div>
        <div className="method-grid">
          <h2>非公式だからこそ、<br />出典と限界を明記する。</h2>
          <div><b>01 / SOURCE</b><p>行政資料、ハザードマップ、不動産ポータル等の公開ページに戻れるリンクを付けます。</p></div>
          <div><b>02 / SNAPSHOT</b><p>価格や制度は変わります。最新情報を断定せず、いつ観測した情報かを表示します。</p></div>
          <div><b>03 / INDEPENDENT</b><p>新潟市・不動産会社・各掲載先の公式サイトではありません。最終判断は一次資料と現地確認で。</p></div>
        </div>
      </section>

      <footer className="portal-footer">
        <a className="brand portal-brand footer-brand" href="#top"><span className="shift-mark">N</span><span>NIIGATA LIFE ATLAS<small>新潟生活観測所</small></span></a>
        <p>移住する前に、暮らしを観測する。</p>
        <a href="#top">ページ上部へ ↑</a>
      </footer>
    </main>
  );
}
