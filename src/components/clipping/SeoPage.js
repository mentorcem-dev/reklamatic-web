import Link from "next/link";
import Image from "next/image";
import { seoPages } from "@/lib/clippingSeoContent";
import styles from "./SeoPage.module.css";
import MotionLayer from "./MotionLayer";

const home = (locale) => locale === "tr" ? "/tr" : "/";
const fullUrl = (locale, path) => `https://reklamatic.ai${locale === "tr" ? "/tr/" : "/"}${path}`;
const localPath = (locale, path) => `${locale === "tr" ? "/tr/" : "/"}${path}`;
const serviceFaq = (locale) => locale === "tr" ? [["Kampanyada kaç içerik yayımlanır?", "İçerik ve clipper sayısı; bütçe, platform, hedef kitle ve kampanya süresine göre teklifte netleştirilir."], ["Paylaşımlar kimin hesabından yapılır?", "Onaylanan videolar, kampanya için atanmış ve marka tarafından onaylanmış clipper hesaplarında yayımlanır."], ["Görüntülenme garantisi var mı?", "Bazı kampanyalarda sözleşme uygun view hedefini, ölçüm kaynağını, hesapları, dönemi, hariçleri ve eksik kalma telafisini tanımlar. Satış, kâr veya viral sonuç garanti edilmez."]] : [["How are deliverables decided?", "Counts, versions, assigned accounts, revisions and timing are written in the proposal after reviewing the campaign brief."], ["Where are clips published?", "Approved videos are published through clipper accounts assigned to the campaign and approved by the brand."], ["Are views guaranteed?", "Some agreements define an eligible-view target, measurement source, accounts, reporting window, exclusions and shortfall remedy. Sales, profit and virality are not guaranteed."]];

function Logo() { return <span className={styles.logo}>reklamatic<span>.ai</span></span>; }

const visualAccents = ["#0878ff", "#725cff", "#00a986", "#ff7a45", "#db3e76"];

function VisualStage({ page, locale }) {
  const copy = page[locale];
  const accent = visualAccents[Math.abs(page.key.split("").reduce((total, character) => total + character.charCodeAt(0), 0)) % visualAccents.length];
  const labels = locale === "tr"
    ? { source: "MARKA KAMPANYASI", map: "CLIPPER EŞLEŞMESİ", cut: "İÇERİK ONAYI", ready: "YAYINA HAZIR", signal: "SONUÇ TAKİBİ", clips: ["Üret", "Onayla", "Paylaş"] }
    : { source: "APPROVED SOURCE", map: "MOMENT MAP", cut: "EDITORIAL SELECT", ready: "PLATFORM READY", signal: "LEARNING SIGNAL", clips: ["Hook", "Context", "Pacing"] };

  return <div className={styles.visualStage} style={{ "--page-accent": accent }} role="img" aria-label={copy.headline} data-motion-tilt>
    <div className={styles.visualChrome}><span /><span /><span /><b>REKLAMATIC / CLIP SYSTEM</b></div>
    <div className={styles.sourcePanel}>
      <small>{labels.source}</small>
      <strong>{copy.kicker}</strong>
      <div className={styles.timeline}><i /><i /><i /><i /><i /></div>
      <span>16:42</span>
    </div>
    <div className={styles.flowArrow}><i /><span>{labels.map}</span></div>
    <div className={styles.clipDeck}>
      {labels.clips.map((label, index) => <div className={styles.clipCard} key={label}>
        <small>0{index + 1}</small><span>{label}</span><i />
      </div>)}
    </div>
    <div className={styles.visualFooter}>
      <span><i />{labels.cut}</span><span><i />{labels.ready}</span><span><i />{labels.signal}</span>
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

function EditorialMedia({ page, locale }) {
  const mediaGroups = {
    artist: ["agency", "strategy", "choose-agency"],
    podcast: ["about", "podcast", "what-is-clipping", "repurposing"],
    product: ["brands", "clipping-vs-ugc", "reels"],
    publisher: ["campaigns", "cases", "shorts"],
    technology: ["blog", "pricing", "tiktok", "clippers", "contact", "faq"],
  };
  const group = Object.entries(mediaGroups).find(([, keys]) => keys.includes(page.key))?.[0] || (page.type === "Article" ? "podcast" : "technology");
  const srcMap = { artist: "/media/generated/reklamatic-music-noctra.webp", podcast: "/media/generated/reklamatic-campaign-2.webp", product: "/media/generated/reklamatic-app-lumen.webp", publisher: "/media/generated/reklamatic-streamer-raidline.webp", technology: "/media/generated/reklamatic-network-velocity.webp" };
  const src = srcMap[group];
  const labelMap = locale === "tr" ? { artist: "Müzik kampanyası", podcast: "Podcast ve kurucu anlatısı", product: "Uygulama kampanyası", publisher: "Yayıncı kampanyası", technology: "Yönetilen clipper dağıtımı" } : { artist: "Music campaign", podcast: "Podcast and founder narrative", product: "App campaign", publisher: "Publisher campaign", technology: "Managed clipper distribution" };
  const label = labelMap[group];
  const note = page.key === "cases" ? (locale === "tr" ? "Reklamatic örnek kampanya konsepti" : "Reklamatic example campaign concept") : (locale === "tr" ? "Reklamatic kampanya görseli" : "Reklamatic campaign visual");
  return <section className={styles.editorialMedia} data-motion-reveal><div className={styles.container}><figure data-motion-item><Image src={src} width={1376} height={768} sizes="(max-width: 700px) 100vw, 1120px" alt={`${page[locale].kicker}: ${label}`} /><figcaption><span>{label}</span><small>{note}</small></figcaption></figure></div></section>;
}

function pageSchema(page, locale) {
  const copy = page[locale];
  const canonical = fullUrl(locale, page.paths[locale]);
  const graph = [{ "@type": "BreadcrumbList", "@id": `${canonical}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: locale === "tr" ? "Ana sayfa" : "Home", item: `https://reklamatic.ai${home(locale)}` }, { "@type": "ListItem", position: 2, name: copy.headline, item: canonical }] }];
  const entityType = page.type === "Article" ? "BlogPosting" : page.type === "FAQPage" || page.type === "Service" ? "WebPage" : page.type;
  const entity = { "@type": entityType, "@id": `${canonical}#page`, url: canonical, name: copy.headline, headline: copy.headline, description: copy.description, inLanguage: locale, isPartOf: { "@type": "WebSite", name: "Reklamatic.ai", url: "https://reklamatic.ai" }, breadcrumb: { "@id": `${canonical}#breadcrumb` } };
  if (page.type === "Article") { entity.author = { "@type": "Organization", name: "Reklamatic.ai" }; entity.publisher = { "@type": "Organization", name: "Reklamatic.ai" }; }
  graph.push(entity);
  if (page.type === "Service") graph.push({ "@type": "Service", "@id": `${canonical}#service`, name: copy.headline, description: copy.description, provider: { "@type": "Organization", name: "Reklamatic.ai", url: "https://reklamatic.ai" }, areaServed: "Worldwide", url: canonical });
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
    alternates: { canonical, languages: { en: fullUrl("en", page.paths.en), tr: fullUrl("tr", page.paths.tr), "x-default": fullUrl("en", page.paths.en) } },
    openGraph: { title: copy.title, description: copy.description, url: canonical, locale: locale === "tr" ? "tr_TR" : "en_US", type: page.type === "Article" ? "article" : "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: copy.headline }] },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.description, images: ["/og.png"] },
  };
}

export default function SeoPage({ page, locale }) {
  const copy = page[locale];
  const faqItems = copy.faq || (page.type === "Service" ? serviceFaq(locale) : null);
  const related = page.related.map((key) => seoPages.find((item) => item.key === key)).filter(Boolean);
  const contactPage = seoPages.find((item) => item.key === "contact");
  const languageUrl = localPath(locale === "tr" ? "en" : "tr", page.paths[locale === "tr" ? "en" : "tr"]);
  const ctaUrl = page.key === "clippers" ? `${home(locale)}#clipper-contact` : page.key === "contact" ? `${home(locale)}#contact` : localPath(locale, contactPage.paths[locale]);
  const articleLayout = page.type === "Article";
  const referenceLayout = page.type === "FAQPage" || page.type === "ContactPage" || page.key === "clippers";
  const serviceLayout = page.type === "Service" || page.key === "pricing";
  const editorialLayout = !articleLayout && !referenceLayout && !serviceLayout;
  const highlightBlock = copy.highlights?.length ? <section className={styles.highlights} data-motion-reveal><div className={styles.container}><div className={styles.highlightGrid}>{copy.highlights.map(([title, text], index) => <article key={title} data-motion-item data-motion-tilt><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></article>)}</div></div></section> : null;
  const faqBlock = faqItems ? <section className={styles.faq} id="faq"><div className={styles.container}><p className={styles.kicker}>FAQ</p><h2>{locale === "tr" ? "Sık sorulan sorular" : "Frequently asked questions"}</h2><div>{faqItems.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section> : null;
  const contractNote = locale === "tr" ? "Kampanya sözleşmesi içerik, hesap, onay, yayın ve raporlama kapsamını yazar. Uygun view garantisi varsa hedef, sayım yöntemi, hariçler ve eksik kalma telafisi de burada tanımlanır." : "The campaign agreement defines clips, accounts, approval, publishing and reporting. When an eligible-view guarantee is included, it also states the target, counting method, exclusions and shortfall remedy.";
  return <div className={styles.page} data-motion-root>
    <MotionLayer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema(page, locale)).replace(/</g, "\\u003c") }} />
    <header className={styles.header}><nav aria-label={locale === "tr" ? "Ana navigasyon" : "Main navigation"}><Link href={home(locale)}><Logo /></Link><div className={styles.navLinks}><Link href={localPath(locale, seoPages.find((item) => item.key === "brands").paths[locale])}>{locale === "tr" ? "Markalar için" : "For brands"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "clippers").paths[locale])}>{locale === "tr" ? "Clipper ol" : "For clippers"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "campaigns").paths[locale])}>{locale === "tr" ? "Nasıl çalışır?" : "How it works"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "cases").paths[locale])}>{locale === "tr" ? "Kampanyalar" : "Campaigns"}</Link></div><details className={styles.mobileMenu}><summary aria-label={locale === "tr" ? "Menüyü aç" : "Open menu"}>☰</summary><div><Link href={localPath(locale, seoPages.find((item) => item.key === "brands").paths[locale])}>{locale === "tr" ? "Markalar için" : "For brands"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "clippers").paths[locale])}>{locale === "tr" ? "Clipper ol" : "For clippers"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "campaigns").paths[locale])}>{locale === "tr" ? "Nasıl çalışır?" : "How it works"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "cases").paths[locale])}>{locale === "tr" ? "Kampanyalar" : "Campaigns"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "about").paths[locale])}>{locale === "tr" ? "Hakkımızda" : "About"}</Link></div></details><Link className={styles.lang} href={languageUrl} hrefLang={locale === "tr" ? "en" : "tr"}>{locale === "tr" ? "EN" : "TR"}</Link><Link className={styles.navCta} href={localPath(locale, contactPage.paths[locale])}>{locale === "tr" ? "Reklam ver" : "Contact"} ↗</Link></nav></header>
    <main>
      <section className={[styles.hero, serviceLayout ? styles.heroService : styles.heroSimple].join(" ")}><div className={styles.orb} /><div className={[styles.container, serviceLayout ? styles.heroGrid : styles.heroSolo].join(" ")}><div className={styles.heroCopy}><nav className={styles.breadcrumb} aria-label="Breadcrumb" data-motion-hero><Link href={home(locale)}>{locale === "tr" ? "Ana sayfa" : "Home"}</Link><span>/</span><span>{copy.kicker}</span></nav><p className={styles.kicker} data-motion-hero>{copy.kicker}</p><h1 data-motion-hero>{copy.headline}</h1><p className={styles.lead} data-motion-hero>{copy.lead}</p>{!articleLayout && <div className={styles.actions} data-motion-hero><Link className={styles.primary} href={ctaUrl}>{copy.cta} <span>↗</span></Link>{!referenceLayout && <Link className={styles.secondary} href={localPath(locale, seoPages.find((item) => item.key === "faq").paths[locale])}>{locale === "tr" ? "Soruları incele" : "Review common questions"}</Link>}</div>}</div>{serviceLayout && <VisualStage page={page} locale={locale} />}</div></section>
      {serviceLayout && highlightBlock}
      {serviceLayout && <MethodStrip locale={locale} />}
      {editorialLayout && <EditorialMedia page={page} locale={locale} />}
      {(articleLayout || editorialLayout || referenceLayout) && highlightBlock}
      {referenceLayout && faqBlock}
      <section className={[styles.content, articleLayout || referenceLayout ? styles.contentWide : "", articleLayout ? styles.contentArticle : "", referenceLayout ? styles.contentReference : ""].join(" ")}><div className={styles.container}><div className={styles.article}>{copy.sections.map(([title, text], index) => <section key={title} id={"section-" + (index + 1)} data-motion-reveal><span>0{index + 1}</span><h2>{title}</h2><p>{text}</p></section>)}</div>{(serviceLayout || editorialLayout) && <aside><div className={styles.asideCard}><strong>{locale === "tr" ? "Bu sayfada" : "On this page"}</strong>{copy.sections.map(([title], index) => <a href={"#section-" + (index + 1)} key={title}>{title}</a>)}</div>{serviceLayout && <div className={styles.asideCard}><strong>{locale === "tr" ? "Sözleşme çerçevesi" : "Contract frame"}</strong><p>{contractNote}</p></div>}</aside>}</div></section>
      {articleLayout && <EditorialMedia page={page} locale={locale} />}
      {!referenceLayout && faqBlock}
      <section className={styles.related}><div className={styles.container}><p className={styles.kicker}>{locale === "tr" ? "Sonraki adım" : "Continue exploring"}</p><h2>{locale === "tr" ? "İlgili rehberler ve hizmetler" : "Related guides and services"}</h2><div className={styles.relatedGrid}>{related.map((item) => <Link href={localPath(locale, item.paths[locale])} key={item.key}><span>{item[locale].kicker}</span><h3>{item[locale].headline}</h3><b>↗</b></Link>)}</div></div></section>
      {!articleLayout && <section className={styles.finalCta}><div className={styles.container}><p>{locale === "tr" ? "Marka kampanyası veya clipper ilgi paylaşımı için doğru yolu seçin." : "Choose the right path for a brand campaign or clipper interest."}</p><h2>{locale === "tr" ? "Kampanya kapsamınızı yazılı olarak netleştirin." : "Define your campaign scope in writing."}</h2><Link className={styles.primary} href={ctaUrl}>{copy.cta} <span>↗</span></Link></div></section>}
    </main>
    <footer className={styles.footer}><div className={styles.container}><div><Link href={home(locale)}><Logo /></Link><p>{locale === "tr" ? "Uygulama, müzik ve yayıncılar için yönetilen clipping kampanyaları." : "Managed clipping campaigns for apps, music and publishers."}</p></div><div><strong>{locale === "tr" ? "Çalışma yolları" : "Work with us"}</strong><Link href={localPath(locale, seoPages.find((item) => item.key === "brands").paths[locale])}>{locale === "tr" ? "Reklam ver" : "For brands"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "clippers").paths[locale])}>{locale === "tr" ? "Clipper ilgisi" : "For clippers"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "pricing").paths[locale])}>{locale === "tr" ? "Kampanya bütçesi" : "Pricing"}</Link></div><div><strong>{locale === "tr" ? "Keşfet" : "Resources"}</strong><Link href={localPath(locale, seoPages.find((item) => item.key === "campaigns").paths[locale])}>{locale === "tr" ? "Nasıl çalışır?" : "How it works"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "cases").paths[locale])}>{locale === "tr" ? "Kampanya örnekleri" : "Campaign examples"}</Link><Link href={localPath(locale, seoPages.find((item) => item.key === "faq").paths[locale])}>{locale === "tr" ? "Sık sorulanlar" : "FAQ"}</Link></div><div><strong>{locale === "tr" ? "İletişim" : "Contact"}</strong><a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a><a href="tel:+905302312947">+90 530 231 29 47</a><Link href={locale === "tr" ? "/tr/privacy" : "/privacy"}>{locale === "tr" ? "Gizlilik" : "Privacy"}</Link></div></div></footer>
  </div>;
}
