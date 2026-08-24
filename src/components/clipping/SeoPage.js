import Link from "next/link";
import Image from "next/image";
import { seoPages } from "@/lib/clippingSeoContent";
import styles from "./SeoPage.module.css";
import MotionLayer from "./MotionLayer";

const home = (locale) => locale === "en" ? "/en" : "/";
const fullUrl = (locale, path) => `https://reklamatic.ai${locale === "en" ? "/en/" : "/"}${path}`;
const localPath = (locale, path) => `${locale === "en" ? "/en/" : "/"}${path}`;
const serviceFaq = (locale) => locale === "tr" ? [["Kampanyada kaç içerik yayımlanır?", "İçerik ve hesap sayısı; hedef, bütçe, platform ve kampanya süresine göre teklifte netleştirilir. Sabit dağıtım planı, kampanyaya uygun hesap setiyle kurulur."], ["Paylaşımlar kimin hesabından yapılır?", "Onaylanan videolar, kampanyaya atanmış ve marka tarafından onaylanmış clipper hesaplarında yayımlanır."], ["Görüntülenme garantisi var mı?", "Evet. Görüntülenme garantili paket seçildiğinde uygun view hedefi sözleşmeye yazılır; Reklamatic hedef tamamlanana kadar dağıtımı ve gerektiğinde telafi yayınlarını sürdürür."]] : [["How are deliverables decided?", "Content and account volume are defined by objective, budget, platform and campaign duration. A fixed distribution plan can cover a campaign-matched account set."], ["Where are clips published?", "Approved videos are published through clipper accounts assigned to the campaign and approved by the brand."], ["Are views guaranteed?", "Yes. When a guaranteed-view package is selected, the eligible-view target is written into the agreement and Reklamatic continues distribution, including replacement publishing when needed, until it is delivered."]];

function Logo() { return <span className={styles.logo}>reklamatic<span>.ai</span></span>; }

function splitParas(text) {
  const sentences = text.split(/(?<=[.!?])\s+(?=[A-ZÇĞİÖŞÜ"“0-9])/);
  const paras = [];
  for (let index = 0; index < sentences.length; index += 2) paras.push(sentences.slice(index, index + 2).join(" "));
  return paras;
}

const scrollVideoPages = new Set(["campaigns"]);

const pageVisualMap = {
  artist: ["strategy", "choose-agency"],
  studio: ["about", "agency"],
  clipperdesk: ["clippers", "contact", "faq"],
  podcast: ["podcast", "what-is-clipping", "repurposing"],
  product: ["brands", "clipping-vs-ugc", "reels"],
  publisher: ["campaigns", "cases", "shorts"],
  technology: ["blog", "pricing", "tiktok"],
};
const V = {
  studio: "/media/higgsfield/reklamatic-istanbul-studio.webp",
  desk: "/media/higgsfield/reklamatic-clipper-desk.webp",
  stage: "/media/higgsfield/reklamatic-music-stage.webp",
  editorial: "/media/higgsfield/reklamatic-editorial-desk.webp",
  workstation: "/media/higgsfield/reklamatic-clipper-workstation.webp",
  app: "/media/higgsfield/reklamatic-app-launch.webp",
  command: "/media/higgsfield/reklamatic-campaign-command-center.webp",
  product: "/media/higgsfield/reklamatic-product-campaign.webp",
  release: "/media/higgsfield/reklamatic-music-release.webp",
  grid: "/media/higgsfield/reklamatic-phone-grid.webp",
  board: "/media/higgsfield/reklamatic-storyboard-wall.webp",
  rooftop: "/media/higgsfield/reklamatic-rooftop-shoot.webp",
};
// slot başına farklı görsel: [stage, scene, editorial] — aynı sayfada tekrar yok
const slotVisuals = {
  brands: [V.app, V.grid, V.command],
  clippers: [V.desk, V.workstation, V.grid],
  campaigns: [V.command, V.rooftop, V.grid],
  pricing: [V.editorial, V.command, V.studio],
  cases: [V.product, V.rooftop, V.grid],
  agency: [V.studio, V.board, V.release],
  about: [V.board, V.studio, V.rooftop],
  contact: [V.workstation, V.desk, V.studio],
  faq: [V.desk, V.board, V.editorial],
  blog: [V.editorial, V.board, V.editorial],
  "what-is-clipping": [V.product, V.grid, V.release],
  podcast: [V.workstation, V.release, V.board],
  repurposing: [V.board, V.workstation, V.product],
  tiktok: [V.grid, V.product, V.rooftop],
  reels: [V.rooftop, V.app, V.grid],
  shorts: [V.grid, V.command, V.rooftop],
  strategy: [V.stage, V.board, V.release],
  "choose-agency": [V.release, V.studio, V.stage],
  "clipping-vs-ugc": [V.app, V.rooftop, V.product],
};
const SLOT_INDEX = { stage: 0, scene: 1, editorial: 2 };
function pageVisual(page, slot = "editorial") {
  const group = Object.entries(pageVisualMap).find(([, keys]) => keys.includes(page.key))?.[0] || (page.type === "Article" ? "podcast" : "technology");
  const assigned = slotVisuals[page.key]?.[SLOT_INDEX[slot]];
  if (slot === "editorial" && page.image) return { group, src: page.image };
  return { group, src: assigned || page.image || V.editorial };
}

function VisualStage({ page, locale }) {
  const copy = page[locale];
  const { src } = pageVisual(page, "stage");
  const labels = locale === "tr" ? ["İÇERİK ONAYI", "YAYINA HAZIR", "SONUÇ TAKİBİ"] : ["CONTENT APPROVAL", "READY TO PUBLISH", "RESULT TRACKING"];
  return <div className={styles.visualStage} role="img" aria-label={copy.headline} data-motion-tilt>
    <Image className={styles.stagePhoto} src={src} fill sizes="(max-width: 980px) 500px, 38vw" alt="" priority />
    <div className={styles.stageShade} />
    <div className={styles.visualChrome}><span /><span /><span /><b>REKLAMATIC</b></div>
    <div className={styles.stageCaption}><small>{copy.kicker}</small></div>
    <div className={styles.visualFooter}>
      {labels.map((label) => <span key={label}><i />{label}</span>)}
    </div>
  </div>;
}

function MethodStrip({ locale }) {
  const items = locale === "tr"
    ? [["01", "Kampanya", "Hedef, bütçe ve marka kuralları"], ["02", "Eşleşme", "Doğru konu, hesap ve kitle"], ["03", "Yayın", "Clipper'ın kendi sosyal medya hesabı"], ["04", "Rapor", "Doğrulanan paylaşım ve sonuçlar"]]
    : [["01", "Source rights", "Permission and boundaries"], ["02", "Human judgment", "Moment, context and story"], ["03", "Platform fit", "Format, captions and pacing"], ["04", "Honest measurement", "Signal, limit and next decision"]];
  return <section className={styles.methodStrip} aria-label={locale === "tr" ? "Reklamatic çalışma ilkeleri" : "Reklamatic operating principles"} data-motion-reveal>
    <div className={styles.container}>{items.map(([number, title, text]) => <article key={number} data-motion-item><span>{number}</span><div><strong>{title}</strong><small>{text}</small></div></article>)}</div>
  </section>;
}

function experiencePreset(page, locale) {
  const tr = {
    clippers: { kicker: "CLIPPER AVANTAJI", title: "Kanalının para kazanmasını bekleme.", text: "Kabul ettiğin kampanyayı üret, uygun hesabında paylaş ve doğrulanan her 1.000 uygun görüntülenmeden kampanya oranıyla kazan.", metrics: [["0", "platform para kazanma şartı"], ["1.000", "uygun view ödeme birimi"], ["∞", "gelecek kampanya erişimi"]], flow: ["Kampanyayı seç", "İçeriği üret", "Yayınla", "View'dan kazan"] },
    "what-is-clipping": { kicker: "MODELİN ÖZÜ", title: "Bir kaynak. Birçok klip. Gerçek hesaplarda dağıtım.", text: "Clipping yalnızca video kesmek değildir; markanın onaylı içeriğini platforma doğal kısa videolara dönüştürüp clipper hesaplarında yayınlamaktır.", metrics: [["01", "onaylı kaynak"], ["9:16", "platforma doğal klip"], ["₺", "uygun view geliri"]], flow: ["Kaynak", "Klip", "Clipper hesabı", "Görüntülenme", "Ödeme"] },
    brands: { kicker: "YÖNETİLEN DAĞITIM", title: "Ana model görüntülenme hedefi; sabit dağıtım alternatif.", text: "İçerik üretimi, marka onayı, clipper eşleşmesi, yayın doğrulama ve raporlama tek ekipte. Görüntülenme paketinde uygun view hedefi tamamlanana kadar dağıtım sürer.", metrics: [["300 Mn+", "geçmiş platform görüntülenmesi"], ["84,4 Mn", "tek Reels rekoru"], ["WHOP", "resmi partner altyapısı"]], flow: ["Form", "Kreatif", "Onay", "Dağıtım", "Teslim"] },
    campaigns: { kicker: "KAMPANYA MOTORU", title: "Formdan doğrulanmış view teslimine beş adım.", text: "Marka hedefini yazar; Reklamatic modeli, kreatifi, marka onayını, uygun clipper eşleşmesini, yayın takvimini ve doğrulanmış sonucu yönetir.", metrics: [["5 ADIM", "net kampanya akışı"], ["300M+", "geçmiş platform view"], ["SABİT", "hesap seti seçeneği"]], flow: ["Hedef", "Teklif", "Kreatif", "Yayın", "Rapor"] },
    cases: { kicker: "KATEGORİYE GÖRE PLAN", title: "Her ürün aynı videoyla anlatılmaz.", text: "Uygulama demosu, müzik yayını, streamer kesiti ve ürün anlatısı için farklı kaynak, hook, hesap eşleşmesi ve rapor yapısı kurarız.", metrics: [["4", "ana kampanya formatı"], ["2", "satın alma modeli"], ["1", "doğrulanmış rapor"]], flow: ["Kaynak", "Yaratıcı yön", "Hesap eşleşmesi", "Yayın", "Rapor"] },
    contact: { kicker: "İKİ AYRI BAŞVURU", title: "Reklam vermek ve clipper olmak aynı form değildir.", text: "Marka; hedef, bütçe ve dağıtım modelini paylaşır. Clipper; herkese açık hesaplarını, kategorisini ve kitle coğrafyasını gönderir.", metrics: [["MARKA", "kampanya teklifi"], ["CLIPPER", "ağ başvurusu"], ["DOĞRUDAN", "e-posta ve telefon"]], flow: ["Form", "İnceleme", "Teklif", "Onboarding"] },
    pricing: { kicker: "İKİ SATIN ALMA MODELİ", title: "Sabit dağıtım veya garantili görüntülenme.", text: "Hesap seti ve günlük yayın sayısına göre sabit plan seçin ya da uygun view hedefini sözleşmeye yazdırın. Kampanyalar çoğunlukla ₺25.000–₺250.000+ bandında kurgulanır; formda kendi aralığını seçersin. Teklifler KDV hariç iletilir.", metrics: [["SABİT", "hesap ve yayın planı"], ["VIEW", "garantili teslim modeli"], ["ŞEFFAF", "tek teklif ve rapor"]], flow: ["Kapsam", "Teklif", "Yayın", "Rapor"] },
  };
  const en = {
    clippers: { kicker: "THE CLIPPER ADVANTAGE", title: "Do not wait for channel monetization.", text: "Accept a campaign, create the clip, publish through an eligible account and earn the listed campaign rate for each verified block of 1,000 eligible views.", metrics: [["0", "platform monetization required"], ["1,000", "eligible-view payout unit"], ["∞", "future campaign access"]], flow: ["Choose", "Create", "Publish", "Earn"] },
    "what-is-clipping": { kicker: "THE MODEL", title: "One source. Many clips. Distributed through real accounts.", text: "Clipping is more than cutting video: it turns approved brand material into platform-native short videos and publishes them through clipper accounts.", metrics: [["01", "approved source"], ["9:16", "platform-native clip"], ["$", "eligible-view income"]], flow: ["Source", "Clip", "Clipper account", "Views", "Payout"] },
    brands: { kicker: "MANAGED DISTRIBUTION", title: "Eligible-view delivery first; fixed distribution when you need it.", text: "Production, brand approval, clipper matching, publishing verification and reporting run through one team. Eligible-view packages continue distribution until delivery.", metrics: [["300M+", "historical platform views"], ["84.4M", "single-Reel record"], ["WHOP", "official partner infrastructure"]], flow: ["Form", "Creative", "Approve", "Distribute", "Deliver"] },
    campaigns: { kicker: "CAMPAIGN ENGINE", title: "Five steps from form to verified delivery.", text: "The brand sets the objective. Reklamatic manages the model, creative, approval, suitable clipper matching, publishing and verified delivery.", metrics: [["5 STEPS", "clear campaign flow"], ["300M+", "historical platform views"], ["FIXED", "account-set option"]], flow: ["Goal", "Proposal", "Creative", "Publish", "Report"] },
    cases: { kicker: "CATEGORY-SPECIFIC PLANS", title: "Every product needs a different short-form system.", text: "App demos, music releases, streamer clips and product stories use different sources, hooks, account matching and reporting structures.", metrics: [["4", "core campaign formats"], ["2", "buying models"], ["1", "verified report"]], flow: ["Source", "Creative direction", "Account match", "Publish", "Report"] },
    contact: { kicker: "TWO APPLICATION PATHS", title: "Advertising and becoming a clipper require different information.", text: "Brands share an objective, budget and distribution model. Clippers share public accounts, categories and audience geography.", metrics: [["BRAND", "campaign proposal"], ["CLIPPER", "network application"], ["DIRECT", "email and phone"]], flow: ["Form", "Review", "Proposal", "Onboarding"] },
    pricing: { kicker: "TWO BUYING MODELS", title: "Fixed distribution or guaranteed views.", text: "Choose a fixed account-set and daily publishing plan, or write an eligible-view target into the agreement. Campaigns are typically scoped between €2,500 and €15,000+; you pick your own range in the form.", metrics: [["FIXED", "account and publishing plan"], ["VIEWS", "guaranteed delivery"], ["CLEAR", "one proposal and report"]], flow: ["Scope", "Proposal", "Publish", "Report"] },
  };
  const base = locale === "tr"
    ? { kicker: "REKLAMATIC DAĞITIM SİSTEMİ", title: "Kısa video üretiminden gerçek dağıtıma.", text: "300 milyondan fazla geçmiş görüntülenme deneyimini; aktif clipper ağı, içerik üretimi ve ölçülebilir kampanya yönetimiyle birleştiriyoruz.", metrics: [["300M+", "geçmiş platform view"], ["SET", "hesap seti dağıtımı"], ["1K", "clipper ödeme birimi"]], flow: ["Kaynak", "Klip", "Hesap", "View", "Rapor"] }
    : { kicker: "REKLAMATIC DISTRIBUTION SYSTEM", title: "From short-form production to real distribution.", text: "We combine more than 300 million historical platform views with an active clipper network, content production and measurable campaign operations.", metrics: [["300M+", "historical platform views"], ["SET", "account-set distribution"], ["1K", "clipper payout unit"]], flow: ["Source", "Clip", "Account", "Views", "Report"] };
  return (locale === "tr" ? tr : en)[page.key] || base;
}

function PageExperience({ page, locale }) {
  const preset = experiencePreset(page, locale);
  const hasScrollVideo = scrollVideoPages.has(page.key);
  return <section className={styles.pageExperience} data-motion-reveal>
    <div className={[styles.container, styles.experienceGrid].join(" ")}>
      <div className={styles.experienceCopy} data-motion-item><p className={styles.kicker}>{preset.kicker}</p><h2>{preset.title}</h2><p>{preset.text}</p><div className={styles.experienceMetrics}>{preset.metrics.map(([value, label]) => <article key={`${value}-${label}`}><strong>{value}</strong><span>{label}</span></article>)}</div></div>
      {hasScrollVideo ? <div className={styles.scrollFilm} data-motion-item data-scroll-film aria-label={preset.title}>
        <video muted playsInline preload="metadata" poster={page.image} data-scroll-video aria-hidden="true"><source src="/media/higgsfield/reklamatic-clipping-scroll.mp4" type="video/mp4" /></video>
        <div className={styles.filmShade} />
        <div className={styles.filmTop}><span>REKLAMATIC / LIVE CAMPAIGN SYSTEM</span><b>{locale === "tr" ? "SCROLL İLE İLERLET" : "SCROLL TO ADVANCE"}</b></div>
        <div className={styles.filmCaption}><small>{preset.kicker}</small><strong>{locale === "tr" ? "Kaynak → klip → gerçek hesap → uygun view" : "Source → clip → real account → eligible view"}</strong></div>
        <div className={styles.filmProgress}>{preset.flow.map((item, index) => <span key={item} style={{ "--flow-index": index }}><i />{item}</span>)}</div>
      </div> : <div className={styles.experienceScene} data-motion-item data-motion-tilt role="img" aria-label={preset.title}>
        <Image className={styles.scenePhoto} src={pageVisual(page, "scene").src} fill sizes="(max-width: 980px) 650px, 46vw" alt="" />
        <div className={styles.sceneShade2} />
        <div className={styles.sceneCaption}><small>{preset.kicker}</small></div>
        <div className={styles.sceneFlow}>{preset.flow.map((item, index) => <span key={item} style={{ "--flow-index": index }}>{item}</span>)}</div>
      </div>}
    </div>
  </section>;
}

function EditorialMedia({ page, locale }) {
  const { group, src } = pageVisual(page, "editorial");
  const labelMap = locale === "tr" ? { artist: "Müzik kampanyası", studio: "İstanbul içerik stüdyosu", clipperdesk: "Clipper çalışma alanı", podcast: "Podcast ve kurucu anlatısı", product: "Uygulama kampanyası", publisher: "Yayıncı kampanyası", technology: "Yönetilen clipper dağıtımı" } : { artist: "Music campaign", studio: "Istanbul content studio", clipperdesk: "Clipper workspace", podcast: "Podcast and founder narrative", product: "App campaign", publisher: "Publisher campaign", technology: "Managed clipper distribution" };
  const label = labelMap[group];
  const note = page.type === "Article" ? (locale === "tr" ? "Reklamatic editoryal görseli" : "Reklamatic editorial visual") : page.key === "cases" ? (locale === "tr" ? "Kaynak → içerik yönü → dağıtım → raporlama" : "Source → creative direction → distribution → reporting") : (locale === "tr" ? "Reklamatic kampanya görseli" : "Reklamatic campaign visual");
  return <section className={styles.editorialMedia} data-motion-reveal><div className={styles.container}><figure data-motion-item><Image src={src} width={1376} height={768} sizes="(max-width: 700px) 100vw, 1120px" alt={`${page[locale].kicker}: ${label}`} /><figcaption><span>{label}</span><small>{note}</small></figcaption></figure></div></section>;
}

function pageSchema(page, locale) {
  const copy = page[locale];
  const canonical = fullUrl(locale, page.paths[locale]);
  const graph = [{ "@type": "Organization", "@id": "https://reklamatic.ai/#organization", name: "Reklamatic.ai", url: "https://reklamatic.ai", email: "info@reklamatic.ai", telephone: "+905302312947", address: { "@type": "PostalAddress", streetAddress: "Fenerbahçe Mah. Iğrıp Sk. No: 13 İç Kapı No: 1", addressLocality: "Kadıköy", addressRegion: "İstanbul", addressCountry: "TR" } }, { "@type": "WebSite", "@id": "https://reklamatic.ai/#website", name: "Reklamatic.ai", url: "https://reklamatic.ai", publisher: { "@id": "https://reklamatic.ai/#organization" }, inLanguage: ["en", "tr"] }, { "@type": "BreadcrumbList", "@id": `${canonical}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: locale === "tr" ? "Ana sayfa" : "Home", item: `https://reklamatic.ai${home(locale)}` }, { "@type": "ListItem", position: 2, name: copy.headline, item: canonical }] }];
  const entityType = page.type === "Article" ? "BlogPosting" : page.type === "FAQPage" || page.type === "Service" ? "WebPage" : page.type;
  const entity = { "@type": entityType, "@id": `${canonical}#page`, url: canonical, name: copy.headline, headline: copy.headline, description: copy.description, inLanguage: locale, isPartOf: { "@id": "https://reklamatic.ai/#website" }, breadcrumb: { "@id": `${canonical}#breadcrumb` } };
  if (page.type === "Article") { entity.author = page.author ? { "@type": "Person", name: page.author.name, jobTitle: page.author.title[locale], worksFor: { "@id": "https://reklamatic.ai/#organization" } } : { "@id": "https://reklamatic.ai/#organization" }; entity.publisher = { "@id": "https://reklamatic.ai/#organization" }; entity.mainEntityOfPage = canonical; entity.datePublished = page.published || "2026-07-27"; entity.dateModified = page.updated || page.published || "2026-07-28"; entity.image = `https://reklamatic.ai${page.image || (locale === "tr" ? "/og-clipping-tr.png" : "/og-clipping.png")}`; }
  graph.push(entity);
  if (page.type === "Service") graph.push({ "@type": "Service", "@id": `${canonical}#service`, name: copy.headline, description: copy.description, provider: { "@id": "https://reklamatic.ai/#organization" }, areaServed: "Worldwide", url: canonical });
  const faqItems = copy.faq || (page.type === "Service" ? serviceFaq(locale) : null);
  if (faqItems) graph.push({ "@type": "FAQPage", "@id": `${canonical}#faq`, mainEntity: faqItems.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) });
  if (page.key === "blog") graph.push({ "@type": "ItemList", "@id": `${canonical}#guides`, itemListElement: seoPages.filter((item) => item.type === "Article").map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item[locale].headline, url: fullUrl(locale, item.paths[locale]) })) });
  return { "@context": "https://schema.org", "@graph": graph };
}

export function seoMetadata(page, locale) {
  const copy = page[locale];
  const canonical = fullUrl(locale, page.paths[locale]);
  return {
    title: { absolute: copy.title }, description: copy.description,
    alternates: { canonical, languages: { en: fullUrl("en", page.paths.en), tr: fullUrl("tr", page.paths.tr), "x-default": fullUrl("tr", page.paths.tr) } },
    openGraph: { title: copy.title, description: copy.description, url: canonical, locale: locale === "tr" ? "tr_TR" : "en_US", type: page.type === "Article" ? "article" : "website", images: [{ url: page.image || (locale === "tr" ? "/og-clipping-tr.png" : "/og-clipping.png"), width: 1200, height: 630, alt: copy.headline }] },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.description, images: [page.image || (locale === "tr" ? "/og-clipping-tr.png" : "/og-clipping.png")] },
  };
}

export default function SeoPage({ page, locale }) {
  const copy = page[locale];
  const faqItems = copy.faq || (page.type === "Service" ? serviceFaq(locale) : null);
  const related = page.related.map((key) => seoPages.find((item) => item.key === key)).filter(Boolean);
  const contactPage = seoPages.find((item) => item.key === "contact");
  const languageUrl = localPath(locale === "tr" ? "en" : "tr", page.paths[locale === "tr" ? "en" : "tr"]);
  const ctaUrl = page.key === "clippers" ? `${home(locale)}#clipper-contact` : page.key === "contact" ? `${home(locale)}#contact` : `${home(locale)}#brand-contact`;
  const articleLayout = page.type === "Article";
  const referenceLayout = page.type === "FAQPage" || page.type === "ContactPage" || page.key === "clippers";
  const serviceLayout = page.type === "Service" || page.key === "pricing";
  const editorialLayout = !articleLayout && !referenceLayout && !serviceLayout;
  const highlightBlock = copy.highlights?.length ? <section className={styles.highlights} data-motion-reveal><div className={styles.container}><div className={styles.highlightGrid}>{copy.highlights.map(([title, text], index) => <article key={title} data-motion-item data-motion-tilt><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</div></div></section> : null;
  const faqBlock = faqItems ? <section className={styles.faq} id="faq"><div className={styles.container}><p className={styles.kicker}>FAQ</p><h2>{locale === "tr" ? "Sık sorulan sorular" : "Frequently asked questions"}</h2><div>{faqItems.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section> : null;
  const contractNote = locale === "tr" ? "Görüntülenme garantili pakette hedef sözleşmeye yazılır; Reklamatic uygun view hedefi tamamlanana kadar dağıtımı sürdürür. Sabit pakette hesap seti uygun hesap, günlük yayın adedi ve süre teklifte netleşir." : "With a guaranteed-view package, the target is written into the agreement and Reklamatic continues distribution until it is delivered. Fixed plans define a campaign-matched account set, daily publishing volume and duration.";
  return <div className={styles.page} data-motion-root>
    <MotionLayer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema(page, locale)).replace(/</g, "\\u003c") }} />
    <header className={styles.header}><nav aria-label={locale === "tr" ? "Ana navigasyon" : "Main navigation"}><Link href={home(locale)}><Logo /></Link>{(() => {
      const navItems = [
        ["brands", locale === "tr" ? "Markalar için" : "For brands"],
        ["clippers", locale === "tr" ? "Clipper ol" : "For clippers"],
        ["campaigns", locale === "tr" ? "Nasıl çalışır?" : "How it works"],
        ["pricing", locale === "tr" ? "Fiyatlandırma" : "Pricing"],
        ["blog", "Blog"],
      ];
      const activeKey = page.type === "Article" ? "blog" : page.key;
      const link = (key) => localPath(locale, seoPages.find((item) => item.key === key).paths[locale]);
      return <>
        <div className={styles.navLinks}>{navItems.map(([key, label]) => <Link key={key} href={link(key)} className={activeKey === key ? styles.activeLink : undefined} aria-current={activeKey === key ? "page" : undefined}>{label}</Link>)}</div>
        <details className={styles.mobileMenu}><summary aria-label={locale === "tr" ? "Menüyü aç" : "Open menu"}>☰</summary><div>{navItems.map(([key, label]) => <Link key={key} href={link(key)}>{label}</Link>)}<Link href={link("about")}>{locale === "tr" ? "Hakkımızda" : "About"}</Link></div></details>
      </>;
    })()}<Link className={styles.lang} href={languageUrl} hrefLang={locale === "tr" ? "en" : "tr"}>{locale === "tr" ? "EN" : "TR"}</Link><Link className={styles.navCta} href={localPath(locale, contactPage.paths[locale])}>{locale === "tr" ? "Reklam ver" : "Contact"} →</Link></nav></header>
    <main>
      <section className={[styles.hero, serviceLayout ? styles.heroService : styles.heroSimple].join(" ")}><div className={styles.orb} /><div className={[styles.container, serviceLayout ? styles.heroGrid : styles.heroSolo].join(" ")}><div className={styles.heroCopy}><nav className={styles.breadcrumb} aria-label="Breadcrumb" data-motion-hero><Link href={home(locale)}>{locale === "tr" ? "Ana sayfa" : "Home"}</Link><span>/</span><span>{copy.kicker}</span></nav><p className={styles.kicker} data-motion-hero>{copy.kicker}</p><h1 data-motion-hero>{copy.headline}</h1><p className={styles.lead} data-motion-hero>{copy.lead}</p>{articleLayout && <div className={styles.articleMeta} data-motion-hero><span>{page.author ? `${page.author.name} · ${page.author.title[locale]}` : "Reklamatic Editorial"}</span><time dateTime={page.updated || page.published || "2026-07-28"}>{locale === "tr" ? "Güncelleme" : "Updated"}: {page.updated || page.published || "2026-07-28"}</time><span>{page.readTime?.[locale] || (locale === "tr" ? "4 dk okuma" : "4 min read")}</span></div>}{!articleLayout && <div className={styles.actions} data-motion-hero><Link className={styles.primary} href={ctaUrl}>{copy.cta} <span>↗</span></Link>{!referenceLayout && <Link className={styles.secondary} href={localPath(locale, seoPages.find((item) => item.key === "faq").paths[locale])}>{locale === "tr" ? "Soruları incele" : "Review common questions"}</Link>}</div>}</div>{serviceLayout && <VisualStage page={page} locale={locale} />}</div></section>
      <PageExperience page={page} locale={locale} />
      {serviceLayout && highlightBlock}
      {serviceLayout && <MethodStrip locale={locale} />}
      {editorialLayout && <EditorialMedia page={page} locale={locale} />}
      {(articleLayout || editorialLayout || referenceLayout) && highlightBlock}
      {referenceLayout && <EditorialMedia page={page} locale={locale} />}
      {referenceLayout && faqBlock}
      <section className={[styles.content, articleLayout || referenceLayout ? styles.contentWide : "", articleLayout ? styles.contentArticle : "", referenceLayout ? styles.contentReference : ""].join(" ")}><div className={styles.container}><div className={styles.article}>{copy.sections.map(([title, text], index) => <section key={title} id={"section-" + (index + 1)} data-motion-reveal><span>0{index + 1}</span><h2>{title}</h2>{splitParas(text).map((para, paraIndex) => <p key={paraIndex}>{para}</p>)}</section>)}</div>{(serviceLayout || editorialLayout) && <aside><div className={styles.asideCard}><strong>{locale === "tr" ? "Bu sayfada" : "On this page"}</strong>{copy.sections.map(([title], index) => <a href={"#section-" + (index + 1)} key={title}>{title}</a>)}</div>{serviceLayout && <div className={styles.asideCard}><strong>{locale === "tr" ? "Sözleşme çerçevesi" : "Contract frame"}</strong><p>{contractNote}</p></div>}</aside>}</div></section>
      {articleLayout && <EditorialMedia page={page} locale={locale} />}
      {!referenceLayout && faqBlock}
      <section className={styles.related}><div className={styles.container}><p className={styles.kicker}>{locale === "tr" ? "Sonraki adım" : "Continue exploring"}</p><h2>{locale === "tr" ? "İlgili rehberler ve hizmetler" : "Related guides and services"}</h2><div className={styles.relatedGrid}>{related.map((item) => <Link href={localPath(locale, item.paths[locale])} key={item.key}><span>{item[locale].kicker}</span><h3>{item[locale].headline}</h3><b>↗</b></Link>)}</div></div></section>
      {!articleLayout && <section className={styles.finalCta}><div className={styles.container}><p>{locale === "tr" ? "Marka için garantili dağıtım · Clipper için uygun view geliri" : "Guaranteed distribution for brands · Eligible-view income for clippers"}</p><h2>{locale === "tr" ? "Garantili dağıtımı başlat veya clipper olarak kazanmaya başla." : "Start guaranteed distribution or begin earning as a clipper."}</h2><Link className={styles.primary} href={ctaUrl}>{copy.cta} <span>↗</span></Link></div></section>}
    </main>
    <footer className={styles.footer}><div className={styles.container}><div><Link href={home(locale)}><Logo /></Link><p>{locale === "tr" ? "Uygulama, müzik ve yayıncılar için yönetilen clipping kampanyaları." : "Managed clipping campaigns for apps, music and publishers."}</p></div><div><strong>{locale === "tr" ? "Çalışma yolları" : "Work with us"}</strong><Link href={localPath(locale, seoPages.find((item) => item.key === "brands").paths[locale])}>{locale === "tr" ? "Reklam ver" : "For brands"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "clippers").paths[locale])}>{locale === "tr" ? "Clipper ilgisi" : "For clippers"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "pricing").paths[locale])}>{locale === "tr" ? "Kampanya bütçesi" : "Pricing"}</Link></div><div><strong>{locale === "tr" ? "Keşfet" : "Resources"}</strong><Link href={localPath(locale, seoPages.find((item) => item.key === "campaigns").paths[locale])}>{locale === "tr" ? "Nasıl çalışır?" : "How it works"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "cases").paths[locale])}>{locale === "tr" ? "Kampanya örnekleri" : "Campaign examples"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "faq").paths[locale])}>{locale === "tr" ? "Sık sorulanlar" : "FAQ"}</Link></div><div><strong>{locale === "tr" ? "İletişim" : "Contact"}</strong><a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a><a href="tel:+905302312947">+90 530 231 29 47</a><address className={styles.footerAddress}>Fenerbahçe Mah. Iğrıp Sk. No: 13 İç Kapı No: 1, Kadıköy / İstanbul</address><Link href={locale === "tr" ? "/privacy" : "/en/privacy"}>{locale === "tr" ? "Gizlilik" : "Privacy"}</Link></div></div></footer>
  </div>;
}
