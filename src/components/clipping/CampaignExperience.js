"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./CampaignExperience.module.css";

const campaignImages = [
  "/media/generated/reklamatic-campaign-1.webp",
  "/media/generated/reklamatic-campaign-2.webp",
  "/media/generated/reklamatic-campaign-3.webp",
  "/media/generated/reklamatic-campaign-4.webp",
];

const copy = {
  en: {
    mediaKicker: "THE DISTRIBUTION STUDIO BEHIND CULTURE-MOVING CLIPS",
    mediaTitle: "A source becomes",
    mediaAccent: "a living media system.",
    mediaText: "Strategy, editorial selection, creator-ready formats, review, reporting and the next creative decision—designed as one connected operation.",
    play: "Campaign showreel",
    founder: "Studio note · 2 min",
    brands: ["NERA VALE", "VANTA", "AURA LABS", "NORTH/01", "MONO FM", "HALO RUN", "ARC HOUSE", "LUMA"],
    aboutKicker: "ABOUT THE STUDIO",
    aboutTitleA: "We make it easy for",
    aboutTitleB: "ambitious teams",
    aboutTitleC: "to turn one strong idea into a feed full of distinct moments.",
    aboutText: "Reklamatic is an independent clipping and short-form studio based in Istanbul. Fictional campaign worlds below show the range of the system—not past client claims.",
    metrics: [["48h", "typical first creative map"], ["3", "platform-native directions"], ["TR / EN", "bilingual editorial delivery"], ["100%", "human review before approval"]],
    casesKicker: "FICTIONAL CAMPAIGN WORLDS",
    casesTitle: "Every source deserves its own visual language.",
    casesText: "Four original campaign studies show how the same operating system adapts to music, founders, products and technology.",
    cases: [
      { brand: "NERA VALE", type: "Artist launch", title: "A release week told through rehearsal tension, fan lore and live-performance fragments.", stat: "36", label: "clip directions", image: 0 },
      { brand: "AYLA / MONO", type: "Founder podcast", title: "A design leader’s long-form thinking rebuilt as compact, useful arguments.", stat: "12", label: "episode arcs", image: 1 },
      { brand: "VANTA", type: "Consumer brand", title: "A sunset product world split into rituals, reactions, textures and creator POVs.", stat: "5", label: "creative territories", image: 2 },
      { brand: "AURA LABS", type: "Technology", title: "A complex AI workflow translated into demos, objections and before-after stories.", stat: "24", label: "launch assets", image: 3 },
    ],
    openCase: "View campaign anatomy",
    systemKicker: "HOW THE SYSTEM MOVES",
    systemTitle: "From one approved source to a measurable creative loop.",
    systemText: "The goal is not to cut everything. It is to find the few moments that can carry meaning, then give each one the right opening, frame, pace and destination.",
    stages: [
      ["01", "Source intelligence", "Rights, audience, context, claims and visual material are mapped before editing begins."],
      ["02", "Moment architecture", "We identify tensions, proofs, stories and demonstrations; then build hook families around them."],
      ["03", "Platform craft", "Each idea receives its own pacing, captions, framing, safe zones and ending—not a blind resize."],
      ["04", "Review & learning", "Approved signals become a documented next hypothesis. Performance is read honestly, never promised."],
    ],
    peopleKicker: "FICTIONAL STUDIO ROLES",
    peopleTitle: "Two concept characters showing the human decisions inside the system.",
    people: [
      { name: "Ayla Demir", role: "Editorial Director", note: "Turns source material into narrative territories, hook families and approval-ready briefs.", image: 1 },
      { name: "Mert Acar", role: "Creative Systems Lead", note: "Designs repeatable workflows across editing, motion, QA, delivery and learning notes.", image: 3 },
    ],
    fitKicker: "WHO WE BUILD FOR",
    fitTitle: "Different categories. Different rhythms. The same editorial discipline.",
    fits: [
      ["01", "Artists & labels", "Release worlds, live moments, archive footage and fan-language angles.", 0],
      ["02", "Founders & podcasts", "Arguments, stories, frameworks and repeatable points of view.", 1],
      ["03", "Products & brands", "Demonstrations, rituals, objections, comparisons and customer language.", 2],
      ["04", "Apps & technology", "Complex workflows translated into visible, useful short narratives.", 3],
      ["05", "Education & experts", "Lessons, transformations, myths and practical takeaways.", 1],
      ["06", "Communities & events", "People, energy, backstage access and moments worth belonging to.", 2],
    ],
    reviewKicker: "NOT BORING TESTIMONIALS",
    reviewTitle: "What fictional collaborators would say if this were already a case-study archive.",
    reviews: [
      ["“They did not just cut the episode. They found the argument we should have led with.”", "Derya Akın · MONO FM"],
      ["“Every clip felt like part of one launch world, but none of them felt duplicated.”", "Milo Kent · NERA VALE"],
      ["“The system made our technical product understandable without making it simplistic.”", "Selin Aras · AURA LABS"],
      ["“The approval trail was as thoughtful as the creative work.”", "Jonas Reed · NORTH/01"],
    ],
    researchKicker: "OPERATING PRINCIPLES",
    researchTitle: "The details that keep volume from becoming noise.",
    principles: [
      ["Context before hooks", "A sharp opening is useful only when the clip still represents the source fairly."],
      ["Variation with a reason", "Different cuts should test distinct stories, audiences or creative hypotheses."],
      ["Rights live in the brief", "Music, footage, claims, disclosures and usage boundaries are defined early."],
      ["Signals need limits", "Views, watch behavior and engagement can guide decisions; they do not prove revenue alone."],
    ],
  },
  tr: {
    mediaKicker: "MARKADAN CLIPPER AĞINA, CLIPPER AĞINDAN SOSYAL MEDYAYA",
    mediaTitle: "Bir kampanya",
    mediaAccent: "farklı hesaplarda yüzlerce anlatıma dönüşür.",
    mediaText: "Marka brief'i, kısa video üretimi, doğru clipper'larla eşleşme, yayın onayı, performans takibi ve ödeme yönetimi tek bir kampanya sistemi içinde ilerler.",
    play: "Kampanya akışını izle",
    founder: "Clipper modeli · 2 dk",
    brands: ["NERA VALE", "VANTA", "AURA LABS", "NORTH/01", "MONO FM", "HALO RUN", "ARC HOUSE", "LUMA"],
    aboutKicker: "STÜDYO HAKKINDA",
    aboutTitleA: "İddialı ekiplerin",
    aboutTitleB: "tek güçlü fikri",
    aboutTitleC: "birbirinden farklı anlarla dolu bir akışa çevirmesini kolaylaştırıyoruz.",
    aboutText: "Reklamatic, İstanbul merkezli bağımsız bir clipping ve kısa video stüdyosudur. Aşağıdaki kurgusal kampanya dünyaları sistemin aralığını gösterir; geçmiş müşteri iddiası değildir.",
    metrics: [["48 saat", "tipik ilk kreatif harita"], ["3", "platforma doğal yön"], ["TR / EN", "iki dilli editoryal teslim"], ["%100", "onay öncesi insan kontrolü"]],
    casesKicker: "KURGUSAL KAMPANYA DÜNYALARI",
    casesTitle: "Her kaynak kendi görsel dilini hak eder.",
    casesText: "Dört özgün kampanya çalışması aynı operasyon sisteminin müzik, kurucu, ürün ve teknolojiye nasıl uyarlandığını gösteriyor.",
    cases: [
      { brand: "NERA VALE", type: "Sanatçı lansmanı", title: "Prova gerilimi, hayran hikâyeleri ve canlı performans parçalarıyla anlatılan çıkış haftası.", stat: "36", label: "klip yönü", image: 0 },
      { brand: "AYLA / MONO", type: "Kurucu podcast’i", title: "Bir tasarım liderinin uzun düşüncelerinin kısa ve faydalı argümanlara dönüşümü.", stat: "12", label: "bölüm akışı", image: 1 },
      { brand: "VANTA", type: "Tüketici markası", title: "Ritüel, tepki, doku ve üretici bakışlarına ayrılan gün batımı ürün dünyası.", stat: "5", label: "kreatif alan", image: 2 },
      { brand: "AURA LABS", type: "Teknoloji", title: "Karmaşık bir AI iş akışının demo, itiraz ve önce-sonra hikâyelerine çevrilmesi.", stat: "24", label: "lansman varlığı", image: 3 },
    ],
    openCase: "Kampanya anatomisini gör",
    systemKicker: "SİSTEM NASIL İLERLER",
    systemTitle: "Tek onaylı kaynaktan ölçülebilir kreatif döngüye.",
    systemText: "Amaç her şeyi kesmek değildir. Anlamı taşıyabilecek birkaç anı bulmak, sonra her birine doğru açılış, kadraj, tempo ve hedefi vermektir.",
    stages: [
      ["01", "Kaynak zekâsı", "Haklar, kitle, bağlam, iddialar ve görsel malzeme kurgu başlamadan haritalanır."],
      ["02", "An mimarisi", "Gerilim, kanıt, hikâye ve demolar bulunur; etraflarında açılış aileleri kurulur."],
      ["03", "Platform zanaatı", "Her fikir kendi tempo, altyazı, kadraj, güvenli alan ve kapanışını alır; körlemesine boyutlanmaz."],
      ["04", "Değerlendirme ve öğrenme", "Onaylı sinyaller belgelenmiş sonraki hipoteze dönüşür. Performans dürüstçe okunur, vaat edilmez."],
    ],
    peopleKicker: "KURGUSAL STÜDYO ROLLERİ",
    peopleTitle: "Sistemdeki insan kararlarını gösteren iki konsept karakter.",
    people: [
      { name: "Ayla Demir", role: "Editoryal Direktör", note: "Kaynakları anlatı alanlarına, açılış ailelerine ve onaya hazır brief’lere dönüştürür.", image: 1 },
      { name: "Mert Acar", role: "Kreatif Sistemler Lideri", note: "Kurgu, motion, kalite, teslim ve öğrenme notları arasında tekrarlanabilir sistemler kurar.", image: 3 },
    ],
    fitKicker: "KİMLER İÇİN ÜRETİYORUZ",
    fitTitle: "Farklı kategoriler. Farklı ritimler. Aynı editoryal disiplin.",
    fits: [
      ["01", "Sanatçılar ve label’lar", "Çıkış dünyaları, canlı anlar, arşiv görüntüsü ve hayran dili.", 0],
      ["02", "Kurucular ve podcast’ler", "Argüman, hikâye, çerçeve ve tekrarlanabilir bakış açısı.", 1],
      ["03", "Ürünler ve markalar", "Demo, ritüel, itiraz, karşılaştırma ve müşteri dili.", 2],
      ["04", "Uygulamalar ve teknoloji", "Karmaşık akışların görünür ve faydalı kısa anlatılara çevrilmesi.", 3],
      ["05", "Eğitim ve uzmanlar", "Ders, dönüşüm, yanlış bilgi ve pratik çıkarımlar.", 1],
      ["06", "Topluluk ve etkinlikler", "İnsanlar, enerji, perde arkası ve ait olmaya değer anlar.", 2],
    ],
    reviewKicker: "SIKICI OLMAYAN YORUMLAR",
    reviewTitle: "Burası şimdiden dolu bir vaka arşivi olsaydı kurgusal iş ortaklarımız ne derdi?",
    reviews: [
      ["“Bölümü yalnızca kesmediler; en başta söylememiz gereken argümanı buldular.”", "Derya Akın · MONO FM"],
      ["“Her klip tek bir lansman dünyasına aitti ama hiçbiri tekrar gibi değildi.”", "Milo Kent · NERA VALE"],
      ["“Sistem teknik ürünümüzü basitleştirmeden anlaşılır hale getirdi.”", "Selin Aras · AURA LABS"],
      ["“Onay zinciri kreatif iş kadar düşünülmüştü.”", "Jonas Reed · NORTH/01"],
    ],
    researchKicker: "ÇALIŞMA İLKELERİ",
    researchTitle: "Hacmin gürültüye dönüşmesini engelleyen ayrıntılar.",
    principles: [
      ["Açılıştan önce bağlam", "Keskin başlangıç ancak klip kaynağı hâlâ dürüstçe temsil ediyorsa değerlidir."],
      ["Nedeni olan varyasyon", "Farklı kurgular farklı hikâye, kitle veya kreatif hipotezi sınamalıdır."],
      ["Haklar brief’in içindedir", "Müzik, görüntü, iddia, açıklama ve kullanım sınırı en başta tanımlanır."],
      ["Sinyalin sınırı vardır", "Görüntülenme, izleme ve etkileşim karar yönlendirir; tek başına geliri kanıtlamaz."],
    ],
  },
};

function MediaShowcase({ text }) {
  const [active, setActive] = useState("showreel");
  return (
    <section className={styles.media} aria-labelledby="campaign-media-title" data-motion-reveal>
      <div className={styles.mediaCopy}>
        <p className={styles.eyebrow} data-motion-item>{text.mediaKicker}</p>
        <h2 id="campaign-media-title" data-motion-item>{text.mediaTitle} <em>{text.mediaAccent}</em></h2>
        <p data-motion-item>{text.mediaText}</p>
      </div>
      <div className={styles.showreel} data-motion-item data-motion-tilt>
        {active === "showreel" ? (
          <video autoPlay muted loop playsInline poster={campaignImages[0]} aria-label={text.play}>
            <source src="/media/generated/reklamatic-showreel.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image src={campaignImages[1]} fill sizes="100vw" alt="" />
        )}
        <div className={styles.showreelShade} />
        <div className={styles.showreelTop}><span>REKLAMATIC / 2026</span><span>TR + EN · 16:9 / 9:16 / 1:1</span></div>
        <div className={styles.showreelBottom}>
          <div><small>{active === "showreel" ? "00:08" : "02:00"}</small><strong>{active === "showreel" ? text.play : text.founder}</strong></div>
          <div className={styles.mediaTabs} role="tablist" aria-label={text.play}>
            <button type="button" role="tab" aria-selected={active === "showreel"} onClick={() => setActive("showreel")}>● {text.play}</button>
            <button type="button" role="tab" aria-selected={active === "founder"} onClick={() => setActive("founder")}>▶ {text.founder}</button>
          </div>
        </div>
      </div>
      <div className={styles.brandRail} aria-label="Fictional campaign brands">
        <div>{[...text.brands, ...text.brands].map((brand, index) => <span key={`${brand}-${index}`}>{brand}</span>)}</div>
      </div>
    </section>
  );
}

export default function CampaignExperience({ locale, compact = false }) {
  const text = copy[locale] || copy.en;
  if (compact) return <MediaShowcase text={text} />;
  return (
    <>
      <MediaShowcase text={text} />
      <section className={styles.about}>
        <div className={styles.sectionHead}><p className={styles.eyebrow}>{text.aboutKicker}</p><h2>{text.aboutTitleA} <span className={styles.inlinePortrait}><Image src={campaignImages[1]} fill sizes="100px" alt="" /></span> <em>{text.aboutTitleB}</em> {text.aboutTitleC}</h2><p>{text.aboutText}</p></div>
        <div className={styles.metrics}>{text.metrics.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
      </section>

      <section className={styles.cases} id="campaign-library">
        <div className={styles.sectionHead}><p className={styles.eyebrow}>{text.casesKicker}</p><h2>{text.casesTitle}</h2><p>{text.casesText}</p></div>
        <div className={styles.caseGrid}>{text.cases.map((item, index) => <article className={index === 0 ? styles.caseWide : ""} key={item.brand}>
          <div className={styles.caseImage}><Image src={campaignImages[item.image]} fill sizes={index === 0 ? "(max-width: 800px) 100vw, 66vw" : "(max-width: 800px) 100vw, 34vw"} alt={`${item.brand} — ${item.type}`} /><span>{item.type}</span></div>
          <div className={styles.caseBody}><div><small>0{index + 1} / {item.brand}</small><h3>{item.title}</h3></div><div className={styles.caseStat}><strong>{item.stat}</strong><span>{item.label}</span></div><a href="#contact">{text.openCase}<b>↗</b></a></div>
        </article>)}</div>
      </section>

      <section className={styles.system}>
        <div className={styles.sectionHead}><p className={styles.eyebrow}>{text.systemKicker}</p><h2>{text.systemTitle}</h2><p>{text.systemText}</p></div>
        <div className={styles.systemGrid}>
          <div className={styles.systemVisual}>
            <div className={styles.sourceCard}><small>APPROVED SOURCE / 48:12</small><strong>One conversation. Four narrative territories.</strong><div><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
            <div className={styles.clipStack}>{["HOOK / 00:18", "PROOF / 00:27", "STORY / 00:41"].map((label, index) => <div key={label} style={{ "--shift": index }}><small>{label}</small><b>9:16</b><span /></div>)}</div>
            <div className={styles.signalCard}><small>LEARNING NOTE</small><strong>Specific claims held attention longer.</strong><span>Next hypothesis →</span></div>
          </div>
          <div className={styles.stages}>{text.stages.map(([number, title, body]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
        </div>
      </section>

      <section className={styles.people}>
        <div className={styles.sectionHead}><p className={styles.eyebrow}>{text.peopleKicker}</p><h2>{text.peopleTitle}</h2></div>
        <div className={styles.peopleGrid}>{text.people.map((person) => <article key={person.name}><div><Image src={campaignImages[person.image]} fill sizes="(max-width: 700px) 100vw, 50vw" alt={person.name} /></div><small>{person.role}</small><h3>{person.name}</h3><p>{person.note}</p></article>)}</div>
      </section>

      <section className={styles.fit}>
        <div className={styles.fitHeading}><p className={styles.eyebrow}>{text.fitKicker}</p><h2>{text.fitTitle}</h2></div>
        <div className={styles.fitList}>{text.fits.map(([number, title, body, image]) => <article key={number}><span>{number}</span><div className={styles.fitThumb}><Image src={campaignImages[image]} fill sizes="110px" alt="" /></div><h3>{title}</h3><p>{body}</p><b>↗</b></article>)}</div>
      </section>

      <section className={styles.reviews}>
        <div className={styles.sectionHead}><p className={styles.eyebrow}>{text.reviewKicker}</p><h2>{text.reviewTitle}</h2></div>
        <div className={styles.reviewRail}><div>{[...text.reviews, ...text.reviews].map(([quote, author], index) => <blockquote key={`${author}-${index}`}><span>★★★★★</span><p>{quote}</p><footer>{author}</footer></blockquote>)}</div></div>
      </section>

      <section className={styles.principles}>
        <div className={styles.sectionHead}><p className={styles.eyebrow}>{text.researchKicker}</p><h2>{text.researchTitle}</h2></div>
        <div className={styles.principleGrid}>{text.principles.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>
    </>
  );
}
