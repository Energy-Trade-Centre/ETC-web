import type { Metadata } from 'next';
import JsonLd from '@/components/seo/json-ld';
import { ArrowUpRight, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ETC | 英国・欧州の電力取引プラットフォーム — 日本語市場データ',
  description:
    '英国（GB）のPPA参考価格レンジと蓄電池（BESS）市場構造を日本語で提供。ETCは英国を拠点とする機関投資家向け電力取引プラットフォームです。コーポレートPPAの価格シグナル・取引構造・市場動向を発信します。',
  alternates: {
    canonical: 'https://jp.energytradecentre.com',
    languages: {
      'en-GB': 'https://energytradecentre.com',
      ja: 'https://jp.energytradecentre.com',
      'x-default': 'https://energytradecentre.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'ETC Japan',
    title: 'ETC | 英国・欧州の電力取引データを、日本語で',
    description:
      '英国のPPA参考価格レンジとBESS市場構造を日本語で提供する、機関投資家向け電力取引プラットフォーム。',
    images: [{ url: 'https://energytradecentre.com/opengraph-image', width: 1200, height: 630 }],
  },
};

// 英国PPA参考価格レンジ（Pay-as-Produced、£/MWh、REGO別）。
// 2025年下半期時点のETC参考値 — 更新時はこのテーブルと asOf を差し替える。
const PRICE_DATA_AS_OF = '2025年下半期';
const ppaRanges = [
  { tech: '洋上風力', y3: '75–78', y5: '73–76', y10: '70–74' },
  { tech: '陸上風力', y3: '55–62', y5: '52–58', y10: '50–55' },
  { tech: '太陽光', y3: '48–55', y5: '45–52', y10: '42–48' },
];

// 英国BESSの収益スタック — 定性的な構造説明（数値ベンチマークは公開準備中）。
const bessStack = [
  {
    name: '周波数応答（Dynamic Containment 等）',
    description:
      '系統周波数の急変を1秒未満で抑制する英国NESOのサービス群。日次オークションで調達され、蓄電池が供給の中心を占めます。',
  },
  {
    name: '卸電力アービトラージ',
    description:
      '前日・当日市場での安値充電・高値放電。再エネ比率の上昇に伴う価格変動の拡大が収益機会を生みます。',
  },
  {
    name: 'バランシングメカニズム（BM）',
    description:
      '英国の需給調整の仕組み。ゲートクローズ後の調整力として蓄電池の参加が拡大しており、収益構成に占める割合が増加しています。',
  },
  {
    name: '容量市場（Capacity Market）',
    description:
      '需給ひっ迫時の供給力確保に対する容量収入。オークションで落札した契約に基づく、稼働可能性ベースの安定収益です。',
  },
];

const platformCards = [
  {
    tag: 'PPAプラットフォーム',
    title: 'マッチング・組成・約定執行',
    description:
      '英国のコーポレートPPA・ユーティリティPPAについて、カウンターパーティのマッチングから契約締結までを一気通貫で提供しています。',
  },
  {
    tag: 'ETC INTEL',
    title: '市場インテリジェンス',
    description:
      '先渡価格シグナル、オフテイカー需要、ルート・トゥ・マーケット、政策・規制動向 — 欧州エネルギー市場の一次情報を体系化しています。',
  },
  {
    tag: '2026年ロードマップ',
    title: '再エネアセット・BESS・グリッドデータ',
    description:
      '再エネ発電所の売買（Asset Exchange）、蓄電池の取引・最適化（BESS Exchange）、系統データ、24/7カーボンフリー電力マッチングを開発中です。',
  },
];

export default function JapanPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Energy Trade Centre',
          alternateName: 'ETC',
          url: 'https://energytradecentre.com',
          description:
            '英国を拠点とする機関投資家向け電力取引プラットフォーム。PPAの価格発見・組成・約定執行と市場インテリジェンスを提供。',
          address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
          areaServed: ['GB', 'JP'],
          contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: 'daniel@energytradecentre.com' },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'ETC Japan',
          url: 'https://jp.energytradecentre.com',
          inLanguage: 'ja',
        }}
      />

      {/* ミニヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-etc-black/80 backdrop-blur-xl border-b border-subtle">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              <div className="w-2 h-5 bg-signal rounded-sm" />
              <div className="w-2 h-5 bg-signal/60 rounded-sm" />
              <div className="w-2 h-5 bg-signal/30 rounded-sm" />
            </div>
            <span className="text-base font-bold text-white tracking-tight">ETC</span>
            <span className="text-[11px] font-medium text-etc-500 mono mt-0.5">JAPAN</span>
          </div>
          <a
            href="https://energytradecentre.com"
            className="inline-flex items-center gap-1 text-[12px] font-medium text-etc-400 hover:text-white transition-colors"
          >
            English site <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </header>

      <main className="pt-14">
        {/* ヒーロー */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 grid-bg" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-signal signal-pulse" />
              <span className="text-[11px] font-medium text-etc-500 uppercase tracking-wider">
                英国拠点 &middot; 欧州で展開 &middot; 日本語での市場情報発信を開始
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
              英国・欧州の電力取引データを、
              <br />
              <span className="etc-gradient">日本語で。</span>
            </h1>
            <p className="mt-8 text-lg text-etc-400 leading-relaxed max-w-2xl">
              ETC（Energy Trade Centre）は、英国を拠点とする機関投資家向けの電力取引プラットフォームです。
              PPA（電力購入契約）の価格シグナル、カウンターパーティ動向、取引構造 &mdash;
              欧州市場の一次情報を、日本の需要家・発電事業者・投資家の皆さまに日本語でお届けします。
            </p>
          </div>
        </section>

        {/* ETCについて */}
        <section className="surface-2 border-y border-subtle py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">ETCについて</h2>
            <div className="grid sm:grid-cols-3 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
              {platformCards.map((c) => (
                <div key={c.tag} className="surface-1 p-7">
                  <div className="text-[10px] font-semibold text-signal uppercase tracking-widest mb-3 mono">
                    {c.tag}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{c.title}</h3>
                  <p className="text-[13px] text-etc-500 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 英国PPA参考価格レンジ */}
        <section className="py-16 lg:py-20" id="ppa-data">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-[10px] font-semibold text-signal uppercase tracking-widest mb-3 mono">
              マーケットデータ 01 &middot; PPA
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              ETC GB PPA Index &mdash; 英国PPA参考価格レンジ
            </h2>
            <p className="mt-4 text-[14px] text-etc-400 leading-relaxed max-w-2xl">
              英国（GB）市場における技術別・年限別のPay-as-Produced（発電量連動型）PPA参考レンジです。
              ETCが公表するベンチマーク「ETC GB PPA Index」（{PRICE_DATA_AS_OF}版）に基づき、
              日本語で参照できる英国PPAの価格情報として定期的に更新していきます。
            </p>

            <div className="mt-8 card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-subtle">
                      <th className="px-6 py-4 text-[11px] font-semibold text-etc-500 uppercase tracking-wider">技術</th>
                      <th className="px-6 py-4 text-[11px] font-semibold text-etc-500 uppercase tracking-wider">3年</th>
                      <th className="px-6 py-4 text-[11px] font-semibold text-etc-500 uppercase tracking-wider">5年</th>
                      <th className="px-6 py-4 text-[11px] font-semibold text-etc-500 uppercase tracking-wider">10年</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ppaRanges.map((r) => (
                      <tr key={r.tech} className="border-b border-subtle last:border-0">
                        <td className="px-6 py-4 text-[14px] font-medium text-white">{r.tech}</td>
                        <td className="px-6 py-4 mono text-[14px] text-etc-300">£{r.y3}</td>
                        <td className="px-6 py-4 mono text-[14px] text-etc-300">£{r.y5}</td>
                        <td className="px-6 py-4 mono text-[14px] text-etc-300">£{r.y10}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 surface-2 border-t border-subtle">
                <p className="text-[11px] text-etc-600 leading-relaxed">
                  単位: £/MWh（Pay-as-Produced、REGO（英国再エネ証書）は含まず）。{PRICE_DATA_AS_OF}時点のETC参考レンジであり、
                  拘束力のあるオファー・勧誘ではありません。実際の価格は出力カーテイルメント、プロファイル、信用条件、
                  契約構造および市場環境により変動します。最新のレンジはお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 英国BESS市場 */}
        <section className="surface-2 border-y border-subtle py-16 lg:py-20" id="bess-data">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-[10px] font-semibold text-signal uppercase tracking-widest mb-3 mono">
              マーケットデータ 02 &middot; BESS
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              英国BESS（系統用蓄電池）の収益スタック
            </h2>
            <p className="mt-4 text-[14px] text-etc-400 leading-relaxed max-w-2xl">
              英国は系統用蓄電池の先行市場です。収益は単一の制度ではなく、複数市場の組み合わせ
              （収益スタック）で構成されます。日本の需給調整市場・容量市場の設計を検討するうえでも参考になる構造です。
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-px bg-subtle rounded-xl overflow-hidden border border-subtle">
              {bessStack.map((s) => (
                <div key={s.name} className="surface-1 p-7">
                  <div className="w-8 h-px bg-signal mb-5" />
                  <h3 className="text-[15px] font-semibold text-white mb-2">{s.name}</h3>
                  <p className="text-[13px] text-etc-500 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 card px-6 py-5 flex items-center gap-4">
              <div className="text-[10px] font-semibold text-amber uppercase tracking-widest mono shrink-0">
                準備中
              </div>
              <p className="text-[13px] text-etc-400 leading-relaxed">
                英国BESSの取引ベンチマーク（トーリング料率・収益実績レンジ）は、ETCのBESS
                Exchange（2026年ロードマップ）に合わせて公開予定です。
              </p>
            </div>
          </div>
        </section>

        {/* 日本市場への視点 */}
        <section className="py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">なぜ日本向けに発信するのか</h2>
            <div className="mt-6 grid lg:grid-cols-2 gap-10 max-w-4xl">
              <p className="text-[14px] text-etc-400 leading-relaxed">
                日本のコーポレートPPA市場は拡大の初期段階にあり、制度整備とともに取引が本格化しつつあります。
                一方、英国・欧州は先行市場として、価格発見の仕組み、契約構造（Pay-as-Produced・ベースロード・
                スリーブ型・バーチャル型）、蓄電池の収益モデルなど、参照可能な実例を積み重ねてきました。
              </p>
              <p className="text-[14px] text-etc-400 leading-relaxed">
                ETCは現在、英国市場に注力しています。日本市場への本格展開に先立ち、まずは欧州の一次データと
                取引構造の知見を日本語で継続的に発信していきます。ご関心のある需要家・発電事業者・投資家の方は、
                お気軽にご連絡ください。
              </p>
            </div>
          </div>
        </section>

        {/* お問い合わせ */}
        <section className="surface-2 border-t border-subtle py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              更新情報の受け取り・お問い合わせ
            </h2>
            <p className="mt-4 text-[14px] text-etc-400 leading-relaxed max-w-xl mx-auto">
              英国PPA参考レンジの更新やBESSベンチマークの公開情報をご希望の方、
              または欧州市場についてのご相談は、メールにてご連絡ください（日本語可）。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:daniel@energytradecentre.com?subject=Japan%20market%20data"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-etc-black bg-signal hover:bg-signal-dim rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" />
                メールで問い合わせる
              </a>
              <a
                href="https://energytradecentre.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-etc-300 border border-subtle hover:border-etc-600 hover:bg-white/[0.03] rounded-lg transition-colors"
              >
                英語サイトを見る <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ミニフッター */}
      <footer className="surface-1 border-t border-subtle">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-etc-600">
            &copy; {new Date().getFullYear()} Energy Trade Centre Ltd. All rights reserved.
          </p>
          <p className="text-[11px] text-etc-600">
            ロンドン（英国） &middot; 本ページは情報提供を目的としたものです
          </p>
        </div>
      </footer>
    </>
  );
}
