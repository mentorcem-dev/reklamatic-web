import Image from "next/image";
import styles from "./CampaignExperience.module.css";

const media = [
  "/media/generated/reklamatic-campaign-1.webp",
  "/media/generated/reklamatic-app-lumen.webp",
  "/media/generated/reklamatic-music-noctra.webp",
  "/media/generated/reklamatic-streamer-raidline.webp",
  "/media/generated/reklamatic-network-velocity.webp",
];

const copy = {
  en: {
    kicker: "MANAGED CLIPPING CAMPAIGNS",
    title: "One contract connects the brand, the clips and the distribution.",
    text: "Reklamatic plans short-form campaigns for apps, music releases and publishers. We turn approved campaign material into clip directions, assign suitable clippers from our managed network, coordinate approval and report eligible views under the written agreement.",
    primary: "Request a campaign scope",
    secondary: "Share clipper interest",
    steps: [
      ["01", "Brief & contract", "Audience, message, platforms, deliverables, eligible-view definition, reporting period and any guarantee are written before launch."],
      ["02", "Creative pack", "Approved footage, music, claims, links and brand rules become clear clip directions and platform-ready source packs."],
      ["03", "Managed clipper allocation", "Reklamatic assigns suitable clippers and accounts for the campaign. This is managed distribution, not an open self-service job board."],
      ["04", "Approval, publishing & reporting", "Brand approval comes before publishing. Platform analytics are checked against the contract and invalid or excluded traffic is not counted."],
    ],
    reelKicker: "CAMPAIGN SHOWREEL",
    reelTitle: "See the range of short-form directions a single campaign can support.",
    reelText: "See how app demos, music moments and publisher footage can become platform-ready short-form directions for managed distribution.",
    reelLabel: "Reklamatic creative showreel",
    categories: ["APP CAMPAIGNS", "MUSIC RELEASES", "PUBLISHERS", "BRAND STORIES", "SHORT-FORM DISTRIBUTION"],
    examplesKicker: "CAMPAIGN CONCEPTS",
    examplesTitle: "Three campaign structures, each built for a different buyer.",
    examplesText: "LUMEN, NOCTRA and RAIDLINE show how the source, clipper direction and reporting plan change by campaign type. These are example concepts; the figures and scope are set in each brand's contract.",
    examples: [
      { name: "LUMEN", type: "App advertising", image: 1, title: "Product demonstrations, objection answers and use-case stories prepared for short-form distribution.", details: [["Input", "Approved product footage and claims"], ["Clipper direction", "Demo, comparison and problem-solution formats"], ["Reported", "Eligible views, watch signals and tracked clicks when scoped"]] },
      { name: "NOCTRA", type: "Music release", image: 2, title: "A release campaign built from performance, rehearsal, archive and artist-approved story material.", details: [["Input", "Cleared music and approved release footage"], ["Clipper direction", "Performance, lore and release-moment formats"], ["Reported", "Eligible views and platform engagement in the agreed period"]] },
      { name: "RAIDLINE", type: "Publisher campaign", image: 3, title: "Publisher moments distributed through context-safe, self-contained clips.", details: [["Input", "Approved episodes, transcripts and editorial limits"], ["Clipper direction", "Argument, reaction and story formats"], ["Reported", "Eligible views, watch behavior and link actions when available"]] },
    ],
    guaranteeKicker: "CONTRACT-DEFINED VIEW GUARANTEE",
    guaranteeTitle: "The guarantee is a written campaign term—not a promise of virality.",
    guaranteeText: "When a campaign includes a view guarantee, the agreement states the target, eligible platforms and accounts, measurement source, reporting window, geography if relevant, exclusions and the remedy for a shortfall. Organic reach, sales, profit and viral outcomes are never guaranteed by that term.",
    guaranteeItems: [["Counted", "Eligible views shown by the agreed platform analytics"], ["Excluded", "Invalid traffic, deleted posts, out-of-scope accounts and other written exclusions"], ["Controlled", "Brand approval, account list, campaign window and reporting trail"], ["Resolved", "Any shortfall follows the remedy written in the campaign agreement"]],
    networkKicker: "HOW THE CLIPPER NETWORK IS MANAGED",
    networkTitle: "Clippers receive a controlled campaign pack, not an open-ended claim.",
    networkText: "Reklamatic matches the campaign with suitable clippers, supplies approved material and rules, checks submissions, coordinates publishing permissions and consolidates reporting. Clipper interest does not guarantee onboarding, assignments or earnings.",
    networkSteps: [["Fit", "Category, language, platform and editing style"], ["Rules", "Rights, claims, disclosures, links and prohibited topics"], ["Review", "Human QA and brand approval before publishing"], ["Report", "Post-level records and agreed platform analytics"]],
    proofKicker: "WHAT A BUYER CAN VERIFY",
    proofTitle: "Every campaign leaves a clear operating trail.",
    proof: [["Written campaign scope", "Deliverables, roles, platforms, timing and commercial terms are visible before launch."], ["Approval record", "The brand knows which material and clip directions were approved for publishing."], ["Defined guarantee logic", "The view target and every counting rule exist in the agreement when a guarantee is sold."], ["Campaign reporting", "Reporting identifies the source platform, account/post scope and agreed measurement period."]],
  },
  tr: {
    kicker: "YÖNETİLEN CLIPPING KAMPANYALARI",
    title: "Tek sözleşme markayı, klipleri ve dağıtımı birbirine bağlar.",
    text: "Reklamatic; uygulamalar, müzik yayınları ve yayıncılar için kısa video kampanyaları planlar. Onaylı kampanya materyalini klip yönlerine dönüştürür, yönetilen ağımızdan uygun clipper'ları atar, onayı koordine eder ve uygun görüntülenmeleri yazılı sözleşmeye göre raporlar.",
    primary: "Kampanya kapsamı iste",
    secondary: "Clipper ilgini paylaş",
    steps: [
      ["01", "Brief ve sözleşme", "Kitle, mesaj, platformlar, teslimatlar, uygun görüntülenme tanımı, rapor dönemi ve varsa garanti lansmandan önce yazılır."],
      ["02", "Kreatif paket", "Onaylı görüntü, müzik, iddia, bağlantı ve marka kuralları net klip yönlerine ve platforma hazır kaynak paketlerine dönüşür."],
      ["03", "Yönetilen clipper ataması", "Reklamatic kampanya için uygun clipper ve hesapları atar. Bu, açık self-servis iş panosu değil; yönetilen dağıtımdır."],
      ["04", "Onay, yayın ve rapor", "Marka onayı yayından önce gelir. Platform analitiği sözleşmeye göre kontrol edilir; geçersiz veya hariç trafik sayılmaz."],
    ],
    reelKicker: "KAMPANYA SHOWREEL'İ",
    reelTitle: "Tek kampanyanın destekleyebileceği kısa video yönlerini görün.",
    reelText: "Uygulama demolarının, müzik anlarının ve yayıncı görüntülerinin yönetilen dağıtıma hazır kısa video yönlerine nasıl dönüşebileceğini görün.",
    reelLabel: "Reklamatic kreatif showreel'i",
    categories: ["UYGULAMA KAMPANYALARI", "MÜZİK YAYINLARI", "YAYINCILAR", "MARKA HİKÂYELERİ", "KISA VİDEO DAĞITIMI"],
    examplesKicker: "KAMPANYA KONSEPTLERİ",
    examplesTitle: "Farklı alıcılar için üç kampanya yapısı.",
    examplesText: "LUMEN, NOCTRA ve RAIDLINE; kaynak, clipper yönü ve rapor planının kampanya türüne göre nasıl değiştiğini gösterir. Bunlar örnek konseptlerdir; adetler ve kapsam her markanın sözleşmesinde belirlenir.",
    examples: [
      { name: "LUMEN", type: "Uygulama reklamı", image: 1, title: "Kısa video dağıtımı için hazırlanan ürün demoları, itiraz yanıtları ve kullanım hikâyeleri.", details: [["Girdi", "Onaylı ürün görüntüsü ve iddialar"], ["Clipper yönü", "Demo, karşılaştırma ve sorun-çözüm formatları"], ["Rapor", "Kapsama göre uygun görüntülenme, izleme sinyali ve takipli tıklama"]] },
      { name: "NOCTRA", type: "Müzik yayını", image: 2, title: "Performans, prova, arşiv ve sanatçı onaylı hikâye materyalinden kurulan yayın kampanyası.", details: [["Girdi", "Hakları temizlenmiş müzik ve onaylı yayın görüntüsü"], ["Clipper yönü", "Performans, hikâye ve yayın anı formatları"], ["Rapor", "Mutabık dönemde uygun görüntülenme ve platform etkileşimi"]] },
      { name: "RAIDLINE", type: "Yayıncı kampanyası", image: 3, title: "Yayıncı anlarının bağlamı koruyan, tek başına anlaşılır kliplerle dağıtımı.", details: [["Girdi", "Onaylı bölümler, transkript ve editoryal sınırlar"], ["Clipper yönü", "Argüman, tepki ve hikâye formatları"], ["Rapor", "Uygun görüntülenme, izleme davranışı ve varsa bağlantı aksiyonu"]] },
    ],
    guaranteeKicker: "SÖZLEŞMEDE TANIMLI GÖRÜNTÜLENME GARANTİSİ",
    guaranteeTitle: "Garanti yazılı kampanya koşuludur; viral olma sözü değildir.",
    guaranteeText: "Kampanyada görüntülenme garantisi varsa sözleşme hedefi, uygun platform ve hesapları, ölçüm kaynağını, rapor dönemini, gerekiyorsa coğrafyayı, hariçleri ve eksik kalma telafisini yazar. Organik erişim, satış, kâr veya viral sonuç bu koşulla garanti edilmez.",
    guaranteeItems: [["Sayılan", "Mutabık platform analitiğinde görünen uygun görüntülenmeler"], ["Hariç", "Geçersiz trafik, silinen gönderi, kapsam dışı hesap ve yazılı diğer hariçler"], ["Kontrol", "Marka onayı, hesap listesi, kampanya dönemi ve rapor izi"], ["Çözüm", "Eksik kalma durumunda kampanya sözleşmesindeki telafi uygulanır"]],
    networkKicker: "CLIPPER AĞI NASIL YÖNETİLİR?",
    networkTitle: "Clipper'lar açık uçlu vaat değil, kontrollü kampanya paketi alır.",
    networkText: "Reklamatic kampanyayı uygun clipper'larla eşleştirir; onaylı materyal ve kuralları verir, gönderimleri kontrol eder, yayın izinlerini koordine eder ve raporu birleştirir. İlgi paylaşmak onboarding, görev veya kazanç garantisi vermez.",
    networkSteps: [["Uyum", "Kategori, dil, platform ve kurgu stili"], ["Kurallar", "Haklar, iddialar, açıklamalar, linkler ve yasaklı konular"], ["Kontrol", "Yayın öncesi insan kalite kontrolü ve marka onayı"], ["Rapor", "Gönderi bazlı kayıt ve mutabık platform analitiği"]],
    proofKicker: "ALICI NEYİ DOĞRULAYABİLİR?",
    proofTitle: "Her kampanya doğrulanabilir bir operasyon izi bırakır.",
    proof: [["Yazılı kampanya kapsamı", "Teslimatlar, roller, platformlar, süre ve ticari koşullar lansman öncesi görünürdür."], ["Onay kaydı", "Marka hangi materyal ve klip yönlerinin yayın için onaylandığını bilir."], ["Tanımlı garanti mantığı", "Garanti satılıyorsa görüntülenme hedefi ve tüm sayım kuralları sözleşmede yer alır."], ["Kampanya raporu", "Rapor kaynak platformu, hesap/gönderi kapsamını ve mutabık ölçüm dönemini belirtir."]],
  },
};

function Heading({ kicker, title, text }) {
  return <div className={styles.heading}><p>{kicker}</p><h2>{title}</h2>{text && <span>{text}</span>}</div>;
}

export default function CampaignExperience({ locale }) {
  const text = copy[locale] || copy.en;
  return <div className={styles.experience}>
    <section className={styles.model} id="campaign-model">
      <div className={styles.wrap}><Heading kicker={text.kicker} title={text.title} text={text.text} /><div className={styles.actions}><a href="#brand-contact">{text.primary} <b>↗</b></a><a href="#clipper-contact">{text.secondary}</a></div><div className={styles.stepGrid}>{text.steps.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div>
    </section>

    <section className={styles.reel} aria-labelledby="showreel-title">
      <div className={styles.wrap}><Heading kicker={text.reelKicker} title={text.reelTitle} text={text.reelText} /></div>
      <div className={styles.videoFrame}><video controls muted playsInline preload="metadata" poster={media[0]} aria-label={text.reelLabel}><source src="/media/generated/reklamatic-showreel.mp4" type="video/mp4" /></video><div className={styles.reelStamp}><span>REKLAMATIC / SHOWREEL</span><span>TR + EN</span></div></div>
      <div className={styles.categoryRail} aria-label={text.reelKicker}>{text.categories.map((item) => <span key={item}>{item}</span>)}</div>
    </section>

    <section className={styles.examples} id="campaign-examples">
      <div className={styles.wrap}><Heading kicker={text.examplesKicker} title={text.examplesTitle} text={text.examplesText} /><div className={styles.exampleStack}>{text.examples.map((item, index) => <article className={styles[`example${index + 1}`]} key={item.name}><div className={styles.exampleImage}><Image src={media[item.image]} fill sizes="(max-width: 700px) 100vw, 55vw" alt={`${item.name} — ${item.type}`} /></div><div className={styles.exampleBody}><small>{item.type} / {item.name}</small><h3>{item.title}</h3><dl>{item.details.map(([term, value]) => <div key={term}><dt>{term}</dt><dd>{value}</dd></div>)}</dl></div></article>)}</div></div>
    </section>

    <section className={styles.guarantee} id="view-guarantee">
      <div className={styles.wrap}><div className={styles.guaranteeIntro}><Heading kicker={text.guaranteeKicker} title={text.guaranteeTitle} text={text.guaranteeText} /><div className={styles.contractVisual} aria-hidden="true"><span>CAMPAIGN SCOPE</span><i /><i /><i /><b>VIEW RULES ✓</b></div></div><div className={styles.guaranteeGrid}>{text.guaranteeItems.map(([title, body]) => <article key={title}><strong>{title}</strong><p>{body}</p></article>)}</div></div>
    </section>

    <section className={styles.network} id="clipper-network">
      <div className={styles.wrap}><div className={styles.networkMedia}><Image src={media[4]} fill sizes="(max-width: 700px) 100vw, 48vw" alt={locale === "tr" ? "Velocity X1 demo kampanyasının Reklamatic clipper ağına dağıtımını gösteren konsept görsel" : "Concept visual showing the distribution of the Velocity X1 demo campaign through the Reklamatic clipper network"} /></div><div className={styles.networkCopy}><Heading kicker={text.networkKicker} title={text.networkTitle} text={text.networkText} /><div>{text.networkSteps.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></div>
    </section>

    <section className={styles.proof} id="operating-proof">
      <div className={styles.wrap}><Heading kicker={text.proofKicker} title={text.proofTitle} /><div className={styles.proofGrid}>{text.proof.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div>
    </section>
  </div>;
}
