export type PublicListing = {
  id: string;
  name: string;
  price: number;
  area: number;
  layout: string;
  station: string;
  stationMinutes: number;
  builtYear: number;
  neighborhood: "駅前" | "駅南" | "万代" | "関屋";
  address: string;
  longitude: number;
  latitude: number;
  observedOn: string;
  sourceUrl: string;
};

/**
 * 公開ページを観測した時点のスナップショットです。
 * 現在も販売中であることを示す在庫一覧ではありません。
 */
export const PUBLIC_LISTINGS: PublicListing[] = [
  {
    id: "city-tower-niigata-3970",
    name: "シティタワー新潟",
    price: 3970,
    area: 79.65,
    layout: "3LDK",
    station: "新潟",
    stationMinutes: 5,
    builtYear: 2010,
    neighborhood: "駅南",
    address: "新潟県新潟市中央区天神1丁目12-7",
    longitude: 139.059509,
    latitude: 37.910255,
    observedOn: "2026-08-09",
    sourceUrl: "https://suumo.jp/ms/chuko/niigata/sc_niigatashichuo/nc_21415553/",
  },
  {
    id: "iconic-tower-niigata-4990",
    name: "アイコニックタワー新潟ステーション",
    price: 4990,
    area: 80.75,
    layout: "3LDK",
    station: "新潟",
    stationMinutes: 4,
    builtYear: 2025,
    neighborhood: "駅前",
    address: "新潟県新潟市中央区花園1丁目1-14",
    longitude: 139.059387,
    latitude: 37.910439,
    observedOn: "2026-08-15",
    sourceUrl: "https://suumo.jp/ms/chuko/niigata/sc_niigatashichuo/nc_78980771/",
  },
  {
    id: "the-premier-niigata-bandai-bridge-6500",
    name: "ザ・プレミア新潟萬代橋",
    price: 6500,
    area: 88.33,
    layout: "2LDK",
    station: "新潟",
    stationMinutes: 11,
    builtYear: 2017,
    neighborhood: "万代",
    address: "新潟県新潟市中央区万代2丁目4-34",
    longitude: 139.05513,
    latitude: 37.918282,
    observedOn: "2026-08-16",
    sourceUrl: "https://suumo.jp/ms/chuko/niigata/sc_niigatashichuo/nc_20418061/",
  },
  {
    id: "dia-palace-bandai-east-2350",
    name: "ダイアパレスシアース万代東棟",
    price: 2350,
    area: 60.68,
    layout: "3LDK",
    station: "新潟",
    stationMinutes: 11,
    builtYear: 1995,
    neighborhood: "万代",
    address: "新潟県新潟市中央区万代5丁目7-2",
    longitude: 139.059082,
    latitude: 37.919922,
    observedOn: "2026-08-16",
    sourceUrl: "https://suumo.jp/ms/chuko/niigata/sc_niigatashichuo/",
  },
  {
    id: "surpass-sekiya-2580",
    name: "サーパス関屋",
    price: 2580,
    area: 73.38,
    layout: "3LDK",
    station: "関屋",
    stationMinutes: 11,
    builtYear: 1999,
    neighborhood: "関屋",
    address: "新潟県新潟市中央区関新2丁目1-15",
    longitude: 139.022522,
    latitude: 37.907108,
    observedOn: "2026-08-16",
    sourceUrl: "https://suumo.jp/ms/chuko/niigata/sc_niigatashichuo/",
  },
  {
    id: "dia-palace-bandai-south-2590",
    name: "ダイアパレスシアース万代南棟",
    price: 2590,
    area: 67.17,
    layout: "2LDK",
    station: "新潟",
    stationMinutes: 10,
    builtYear: 1995,
    neighborhood: "万代",
    address: "新潟県新潟市中央区万代5丁目7-2",
    longitude: 139.059082,
    latitude: 37.919922,
    observedOn: "2026-08-16",
    sourceUrl: "https://suumo.jp/ms/chuko/niigata/sc_niigatashichuo/",
  },
  {
    id: "apa-garden-court-2680",
    name: "アパガーデンコート新潟駅前",
    price: 2680,
    area: 77.05,
    layout: "2LDK",
    station: "新潟",
    stationMinutes: 6,
    builtYear: 1999,
    neighborhood: "駅前",
    address: "新潟県新潟市中央区花園1丁目1-8",
    longitude: 139.055969,
    latitude: 37.91135,
    observedOn: "2026-08-16",
    sourceUrl: "https://suumo.jp/ms/chuko/niigata/sc_niigatashichuo/nj_129/",
  },
  {
    id: "apa-garden-place-3950",
    name: "アパガーデンプレイス新潟駅",
    price: 3950,
    area: 95.99,
    layout: "4LDK",
    station: "新潟",
    stationMinutes: 3,
    builtYear: 2000,
    neighborhood: "駅前",
    address: "新潟県新潟市中央区花園1丁目4-3",
    longitude: 139.062759,
    latitude: 37.91338,
    observedOn: "2026-08-16",
    sourceUrl: "https://suumo.jp/ms/chuko/niigata/sc_niigatashichuo/oz_15103191/",
  },
  {
    id: "iconic-tower-niigata-4490",
    name: "アイコニックタワー新潟ステーション",
    price: 4490,
    area: 65.23,
    layout: "2LDK",
    station: "新潟",
    stationMinutes: 4,
    builtYear: 2025,
    neighborhood: "駅前",
    address: "新潟県新潟市中央区花園1丁目1-14",
    longitude: 139.059387,
    latitude: 37.910439,
    observedOn: "2026-07-23",
    sourceUrl: "https://suumo.jp/ms/chuko/niigata/sc_niigatashichuo/nc_78659054/",
  },
];

export function unitPrice(listing: PublicListing) {
  return listing.price / listing.area;
}
