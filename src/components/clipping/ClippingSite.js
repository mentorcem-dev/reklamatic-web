"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CampaignExperience from "./CampaignExperience";
import MotionLayer from "./MotionLayer";

const PHONE_DISPLAY = "+90 530 231 29 47";
const PHONE = "+905302312947";
const FORM_ENDPOINT = "https://docs.google.com/forms/d/e/1FAIpQLSfg9mhaZWRcuYezObFCOI8Uq7MzwE1LXvI8off-nJaXUWF-cg/formResponse";
const FORM_FIELDS = {
  mode: "entry.2090732694", name: "entry.2058097317", email: "entry.1007092747",
  phone: "entry.1344067601", company: "entry.183421694", market: "entry.2106359197",
  platforms: "entry.1509822955", budget: "entry.1636346258", source: "entry.1668084592",
  service: "entry.1875898320", message: "entry.910700140", locale: "entry.689776949",
  site: "entry.113667821",
};

function Wordmark() {
  return <span className="wordmark">reklamatic<span>.ai</span></span>;
}

function SectionTitle({ kicker, title, text }) {
  return <div className="section-title"><p className="kicker">{kicker}</p><h2>{title}</h2>{text && <p className="section-intro">{text}</p>}</div>;
}

function Header({ copy, locale }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const otherUrl = locale === "en" ? "/" : "/en";
  useEffect(() => {
    if (!open) return undefined;
    const close = (event) => { if (event.key === "Escape") { setOpen(false); menuRef.current?.focus(); } };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return <header className="nav-shell"><nav className="nav-pill" aria-label={locale === "en" ? "Main navigation" : "Ana navigasyon"}>
    <a className="brand" href="#top" aria-label="Reklamatic.ai"><Wordmark /></a>
    <div className={`nav-links ${open ? "open" : ""}`} id="site-mobile-nav">{copy.nav.map(([label, href]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}</div>
    <div className="nav-actions"><a className="language-link" href={otherUrl} hrefLang={locale === "en" ? "tr" : "en"}>{locale === "en" ? "TR" : "EN"}</a><a className="nav-cta" href="#brand-contact">{copy.cta}<span>↗</span></a><button ref={menuRef} className={`menu-button ${open ? "active" : ""}`} type="button" aria-expanded={open} aria-controls="site-mobile-nav" aria-label={open ? (locale === "en" ? "Close menu" : "Menüyü kapat") : copy.menu} onClick={() => setOpen((value) => !value)}><span /><span /></button></div>
  </nav></header>;
}

function HeroVideo({ copy }) {
  const videoRef = useRef(null);
  useEffect(() => {
    const node = videoRef.current;
    if (node && window.matchMedia("(prefers-reduced-motion: reduce)").matches) { node.removeAttribute("autoplay"); node.pause(); }
  }, []);
  return <figure className="hero-video">
    <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster="/media/generated/reklamatic-campaign-1.webp" aria-label={copy.visualAlt}><source src="/media/generated/reklamatic-showreel.mp4" type="video/mp4" /></video>
    <div className="hero-video-shade" aria-hidden="true" />
    <figcaption><span>{copy.visualLabel}</span><strong>{copy.visualTitle}</strong><p>{copy.visualText}</p></figcaption>
  </figure>;
}

function Hero({ copy }) {
  return <section className="hero" id="top"><div className="hero-visual" aria-hidden="true"><HeroVideo copy={copy} /></div><div className="hero-grid" aria-hidden="true" /><div className="container hero-layout">
    <div className="hero-copy"><p className="claim-badge" data-motion-hero><i aria-hidden="true" />{copy.kicker}</p><h1 data-motion-hero>{copy.titleA}<em>{copy.titleB}</em></h1><p className="hero-text" data-motion-hero>{copy.text}</p><div className="hero-buttons" data-motion-hero><a className="button button-primary" href={copy.primaryHref}>{copy.primary}<span>→</span></a><a className="button button-secondary" href={copy.secondaryHref}>{copy.secondary}<span>→</span></a></div>{copy.stats && <div className="hero-proof" data-motion-hero>{copy.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>}{copy.claimHref && <a className="claim-link" data-motion-hero href={copy.claimHref}>{copy.claimText} <b aria-hidden="true">→</b></a>}</div>
  </div></section>;
}

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { el.textContent = value.toLocaleString("tr-TR") + suffix; return undefined; }
    let raf;
    const io = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const duration = 1600;
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = (value * eased >= 10 ? Math.round(value * eased * 10) / 10 : (value * eased).toFixed(1)).toLocaleString("tr-TR") + suffix;
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [value, suffix]);
  return <b ref={ref}>{value.toLocaleString("tr-TR")}{suffix}</b>;
}

function ProdCard({ prod }) {
  const videoRef = useRef(null);
  useEffect(() => {
    const node = videoRef.current;
    if (!node) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) node.play().catch(() => {}); else node.pause(); });
    }, { threshold: 0.35 });
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return <figure className="prod-card" data-motion-item>
    <div className="prod-frame"><span className="phone-notch" aria-hidden="true" />
      <video ref={videoRef} muted loop playsInline preload="metadata" poster={prod.image} aria-label={prod.name}><source src={prod.video} type="video/mp4" /></video>
    </div>
    <figcaption><strong>{prod.name}</strong><span>{prod.role}</span></figcaption>
  </figure>;
}

function TurkiyeWork({ copy }) {
  if (!copy) return null;
  return <section className="turkiye" id="turkiye" data-motion-reveal><div className="container">
    <SectionTitle kicker={copy.kicker} title={copy.title} text={copy.text} />
    <div className="turkiye-grid">
      {copy.cases.map((item) => <article className={item.video ? "turkiye-card has-media" : "turkiye-card"} key={item.name} data-motion-item style={{ "--accent": item.accent }}>
        <div className="turkiye-body">
          <header>
            <span className="turkiye-tag">{item.tag}</span>
            <h3>{item.name}</h3>
            <p className="turkiye-role">{item.role}</p>
          </header>
          <p>{item.text}</p>
          {item.highlight && <div className="turkiye-highlight"><i aria-hidden="true">✦</i><span>{item.highlight}</span></div>}
          {item.commentImage && <figure className="turkiye-shot">
            <Image src={item.commentImage} alt={item.commentAlt} width={900} height={936} sizes="(max-width: 820px) 92vw, 560px" />
            <figcaption>{item.comment?.meta}</figcaption>
          </figure>}
          <div className="work-tags">{item.tags.map((tag) => <em key={tag}>{tag}</em>)}</div>
        </div>
        {item.video && <div className="turkiye-media">
          <ProdCard prod={{ name: `@${item.handle}`, role: `${item.views} ${copy.viewsLabel || "görüntülenme"}`, video: item.video, image: item.image }} />
          <a className="turkiye-open" href={item.href} target="_blank" rel="noreferrer">{item.linkLabel} <b aria-hidden="true">↗</b></a>
        </div>}
      </article>)}
    </div>
    {copy.productions && <div className="turkiye-prods-head" data-motion-item><h3>{copy.productionsTitle}</h3><p>{copy.productionsText}</p></div>}
    {copy.productions && <div className="turkiye-prods">{copy.productions.map((prod) => <ProdCard prod={prod} key={prod.name} />)}</div>}
    {copy.formats && <div className="turkiye-formats" data-motion-item><span>{copy.formatsTitle}</span><div>{copy.formats.map((format) => <em key={format}>{format}</em>)}</div></div>}
    <p className="proof-note">{copy.note}</p>
  </div></section>;
}

function PhoneCard({ reel, locale }) {
  const videoRef = useRef(null);
  useEffect(() => {
    const node = videoRef.current;
    if (!node) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) node.play().catch(() => {}); else node.pause(); });
    }, { threshold: 0.35 });
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return <a className="phone-card" href={reel.url} target="_blank" rel="noreferrer" data-motion-item aria-label={`${reel.count} ${reel.suffix} ${locale === "tr" ? "görüntülenme, Instagram'da izle" : "views, watch on Instagram"}`}>
    <span className="phone-notch" aria-hidden="true" />
    {reel.video
      ? <video ref={videoRef} muted loop playsInline preload="metadata" poster={reel.image} aria-hidden="true"><source src={reel.video} type="video/mp4" /></video>
      : <Image src={reel.image} alt={reel.alt} fill sizes="(max-width: 700px) 82vw, 380px" />}
    <span className="phone-shade" aria-hidden="true" />
    <span className="phone-handle">@{reel.handle}</span>
    <span className="phone-views"><i aria-hidden="true">▶</i><CountUp value={reel.count} suffix={` ${reel.suffix}`} /><small>{locale === "tr" ? "görüntülenme" : "views"}</small></span>
    <span className="phone-open">{locale === "tr" ? "Instagram'da izle" : "Watch on Instagram"} ↗</span>
  </a>;
}

function ProofGallery({ copy }) {
  return <section className="proof" id="proof" data-motion-reveal><div className="container">
    <div className="proof-heading"><SectionTitle kicker={copy.kicker} title={copy.title} text={copy.text} /><div className="proof-metrics">{copy.metrics.map(([value, label]) => <div key={label} data-motion-item><strong>{value}</strong><span>{label}</span></div>)}</div></div>
  </div></section>;
}

function ShowcaseRail({ copy, locale }) {
  return <section className="showcase" id="showcase" data-motion-reveal><div className="container">
    <SectionTitle kicker={copy.showcaseKicker} title={copy.showcaseTitle} text={copy.showcaseText} />
    <div className="phone-rail">{copy.reels.map((reel) => <PhoneCard reel={reel} locale={locale} key={reel.url} />)}</div>
    <p className="proof-note">{copy.note}</p>
  </div></section>;
}

function ModelIntro({ copy }) {
  return <section className="model-intro" id="clipping-nedir" data-motion-reveal><div className="container">
    <div className="model-heading"><SectionTitle kicker={copy.kicker} title={copy.title} text={copy.text} /></div>
    <div className="definition-row">{copy.definitions.map(([label, text], index) => <article key={label} data-motion-item><span>0{index + 1}</span><div><h3>{label}</h3><p>{text}</p></div></article>)}</div>
    <div className="market-explainer" data-motion-item>
      <div><p className="kicker">{copy.contextKicker}</p><h3>{copy.contextTitle}</h3><p>{copy.contextText}</p><p>{copy.marketText}</p></div>
      <aside><strong>{copy.metric}</strong><span>{copy.metricLabel}</span><p>{copy.metricText}</p></aside>
    </div>
  </div></section>;
}

function GlobalWork({ copy }) {
  const marqueeLogos = [
    ["/media/logos/whop.png", "Whop"],
    ["/media/logos/cantina.png", "Cantina"],
    ["/media/logos/topps.svg", "Topps"],
    ["/media/logos/lovable.png", "Lovable"],
  ];
  return <section className="work" id="work" data-motion-reveal><div className="container">
    <div className="work-heading">
      <SectionTitle kicker={copy.kicker} title={copy.title} text={copy.text} />
      <aside className="whop-card" data-motion-item>
        <div className="whop-card-head">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/logos/whop.png" alt="Whop logo" width="44" height="44" />
          <span>{copy.partnerBadge}</span>
        </div>
        <p>{copy.partnerText}</p>
      </aside>
    </div>
    <div className="logo-bar" aria-label={copy.logosLabel} data-motion-item>
      {marqueeLogos.map(([src, alt]) => <span key={alt} className={`logo-chip logo-chip-${alt.toLowerCase()}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={`${alt} logo`} loading="lazy" />
        <b>{alt}</b>
      </span>)}
    </div>
    <div className="work-grid">
      {copy.projects.map((project) => <article className="work-card" key={project.name} data-motion-item>
        <figure>
          <Image src={project.image} alt={`${project.name}: ${project.role}`} fill sizes="(max-width: 700px) 92vw, 44vw" />
          {project.logo && <span className={`work-logo work-logo-${project.name.split(" ")[0].toLowerCase()}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={project.logo} alt={project.logoAlt} loading="lazy" />
          </span>}
        </figure>
        <div className="work-body">
          <header><h3>{project.name}</h3><span>{project.role}</span></header>
          <p>{project.text}</p>
          <div className="work-tags">{project.tags.map((tag) => <em key={tag}>{tag}</em>)}</div>
        </div>
      </article>)}
    </div>
    <p className="work-note">{copy.note}</p>
  </div></section>;
}

function Pathways({ copy }) {
  return <section className="pathways" data-motion-reveal><div className="container"><SectionTitle kicker={copy.kicker} title={copy.title} /><div className="pathway-split">{[copy.brand, copy.clipper].map((item, index) => <article key={item.label} data-motion-item><span>0{index + 1} / {item.label}</span><h3>{item.title}</h3><p>{item.text}</p><ol>{item.steps.map((step, stepIndex) => <li key={step}><b>0{stepIndex + 1}</b>{step}</li>)}</ol><a href={item.href}>{item.cta}<b>↗</b></a></article>)}</div></div></section>;
}

function Faq({ copy }) {
  return <section className="faq" id="faq" data-motion-reveal><div className="container faq-layout"><SectionTitle kicker={copy.kicker} title={copy.title} /><div className="faq-list" data-motion-item>{copy.items.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>;
}

function Contact({ copy, locale }) {
  const [mode, setMode] = useState("brand");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");
  const tabs = useRef([]);
  useEffect(() => {
    const sync = () => {
      const tip = new URLSearchParams(window.location.search).get("tip");
      if (window.location.hash === "#clipper-contact" || tip === "clipper") setMode("clipper");
      else if (window.location.hash === "#brand-contact" || tip === "marka" || tip === "brand") setMode("brand");
    };
    sync(); window.addEventListener("hashchange", sync); return () => window.removeEventListener("hashchange", sync);
  }, []);
  const selectMode = (next, focus = false) => { setMode(next); if (focus) tabs.current[next === "brand" ? 0 : 1]?.focus(); };
  const handleTab = (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    selectMode(event.key === "ArrowLeft" || event.key === "Home" ? "brand" : "clipper", true);
  };
  const submit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    if (!data.get("name") || !email.includes("@") || !data.get("message") || !data.get("consent")) { setError(copy.labels.required); setStatus("idle"); return; }
    setError("");
    const clipper = data.get("mode") === "clipper";
    const payload = new FormData();
    const values = {
      mode: clipper ? "Clipper" : (locale === "tr" ? "Marka" : "Brand"), name: data.get("name"), email,
      phone: data.get("phone") || "-", company: data.get("company") || "-", market: data.get("market") || "-",
      platforms: data.get("platforms") || "-", budget: data.get("budget") || "-", source: data.get("source") || "-",
      service: data.get("service") || "-", message: data.get("message"), locale: locale.toUpperCase(),
      site: window.location.href,
    };
    Object.entries(values).forEach(([key, value]) => payload.append(FORM_FIELDS[key], String(value)));
    setStatus("sending");
    try {
      await fetch(FORM_ENDPOINT, { method: "POST", mode: "no-cors", body: payload });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("failed");
    }
  };
  return <section className="contact" id="contact" data-motion-reveal><span id="brand-contact" /><span id="clipper-contact" /><div className="container contact-shell">
    <div className="contact-copy" data-motion-item><SectionTitle kicker={copy.kicker} title={copy.title} text={copy.text} /><div className="direct"><span>{copy.direct}</span><a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a><a href="https://wa.me/905302312947" target="_blank" rel="noreferrer">WhatsApp ↗</a><address className="office-address">Fenerbahçe Mah. Iğrıp Sk. No: 13 İç Kapı No: 1, Kadıköy / İstanbul</address></div></div>
    <form onSubmit={submit} noValidate data-motion-item><input type="hidden" name="mode" value={mode} /><div className="contact-tabs" role="tablist" aria-label={copy.modeLabel}><button ref={(node) => { tabs.current[0] = node; }} type="button" role="tab" aria-selected={mode === "brand"} aria-controls="contact-panel" tabIndex={mode === "brand" ? 0 : -1} onKeyDown={handleTab} onClick={() => selectMode("brand")}>{copy.modes.brand}</button><button ref={(node) => { tabs.current[1] = node; }} type="button" role="tab" aria-selected={mode === "clipper"} aria-controls="contact-panel" tabIndex={mode === "clipper" ? 0 : -1} onKeyDown={handleTab} onClick={() => selectMode("clipper")}>{copy.modes.clipper}</button></div>
      <div id="contact-panel" role="tabpanel"><div className="form-row"><label>{copy.labels.name}<input name="name" autoComplete="name" required /></label><label>{copy.labels.email}<input name="email" type="email" autoComplete="email" required /></label></div><div className="form-row"><label>{copy.labels.phone}<input name="phone" type="tel" autoComplete="tel" /></label><label>{copy.labels.company}<input name="company" autoComplete="organization" /></label></div>
      {mode === "brand" ? <><div className="form-row"><label>{copy.labels.market}<select name="market">{copy.markets.map((item) => <option key={item}>{item}</option>)}</select></label><label>{copy.labels.platforms}<input name="platforms" placeholder={copy.labels.platformsHint} /></label></div><div className="form-row"><label>{copy.labels.budget}<select name="budget">{copy.budgets.map((item) => <option key={item}>{item}</option>)}</select></label><label>{copy.labels.source}<input name="source" type="url" inputMode="url" placeholder="https://" /></label></div><label>{copy.labels.service}<select name="service">{copy.services.map((item) => <option key={item}>{item}</option>)}</select></label></> : <div className="form-row"><label>{copy.labels.portfolio}<input name="source" type="url" inputMode="url" placeholder="https://" /></label><label>{copy.labels.specialty}<select name="service">{copy.specialties.map((item) => <option key={item}>{item}</option>)}</select></label></div>}
      <p className="form-note">{copy.safetyNote}</p><label>{mode === "brand" ? copy.labels.message : copy.labels.clipperMessage}<textarea name="message" rows="4" required /></label><label className="consent"><input type="checkbox" name="consent" required /><span>{copy.labels.consent} <a href={locale === "en" ? "/en/privacy" : "/privacy"} target="_blank">{copy.labels.privacy}</a>.</span></label>{error && <p className="form-error" role="alert">{error}</p>}{status === "success" && <p className="form-success" role="status">{copy.labels.success}</p>}{status === "failed" && <p className="form-error" role="alert">{copy.labels.failed}</p>}<button className="button button-dark" type="submit" disabled={status === "sending"}>{status === "sending" ? copy.labels.sending : copy.labels.submit}<span>↗</span></button></div>
    </form>
  </div></section>;
}

function Footer({ copy, locale }) {
  const links = locale === "tr" ? [["Markalar için", "/markalar-icin"], ["Clipper ol", "/clipper-ol"], ["Nasıl çalışır?", "/clipping-kampanyalari"], ["Blog", "/blog"]] : [["For brands", "/en/for-brands"], ["For clippers", "/en/for-clippers"], ["How it works", "/en/clipping-campaigns"], ["Blog", "/en/blog"]];
  return <footer><div className="container footer-grid"><div><a href="#top"><Wordmark /></a><p>{copy.line}</p><span>© 2026 Reklamatic. {copy.rights}</span></div><div><strong>{copy.explore}</strong>{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div><div><strong>{copy.contact}</strong><a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a><address className="footer-address">Fenerbahçe Mah. Iğrıp Sk. No: 13 İç Kapı No: 1, Kadıköy / İstanbul</address></div><div><strong>{copy.legal}</strong><a href={locale === "tr" ? "/privacy" : "/en/privacy"}>{copy.privacy}</a><a href="/privacy#kvkk">{locale === "tr" ? "KVKK Aydınlatma" : "KVKK Notice (TR)"}</a><a href={locale === "tr" ? "/terms" : "/en/terms"}>{copy.terms}</a><a href={locale === "tr" ? "/en" : "/"}>{locale === "tr" ? "English" : "Türkçe"}</a></div></div></footer>;
}

export default function ClippingSite({ copy, locale }) {
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": "https://reklamatic.ai/#organization", name: "Reklamatic.ai", url: "https://reklamatic.ai", email: "info@reklamatic.ai", telephone: PHONE, areaServed: "TR", knowsLanguage: ["en", "tr"], address: { "@type": "PostalAddress", streetAddress: "Fenerbahçe Mah. Iğrıp Sk. No: 13 İç Kapı No: 1", addressLocality: "Kadıköy", addressRegion: "İstanbul", addressCountry: "TR" } }, { "@type": "WebSite", "@id": "https://reklamatic.ai/#website", name: "Reklamatic.ai", url: "https://reklamatic.ai", publisher: { "@id": "https://reklamatic.ai/#organization" }, inLanguage: ["en", "tr"] }, { "@type": "Service", name: locale === "tr" ? "Clipping ajansı ve clipper dağıtım hizmeti" : "Clipping agency and clipper distribution service", provider: { "@id": "https://reklamatic.ai/#organization" }, areaServed: "TR", serviceType: "Short-form production, active clipper network distribution and eligible-view campaign reporting" }, { "@type": "FAQPage", mainEntity: copy.faq.items.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }] };
  return <div className="site" lang={locale} data-motion-root><MotionLayer /><a className="skip-link" href="#main-content">{copy.skip}</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><Header copy={copy} locale={locale} /><main id="main-content"><Hero copy={copy.hero} /><GlobalWork copy={copy.work} /><ShowcaseRail copy={copy.proof} locale={locale} /><TurkiyeWork copy={copy.turkiye} /><Pathways copy={copy.pathways} /><ModelIntro copy={copy.model} /><CampaignExperience copy={copy.experience} /><ProofGallery copy={copy.proof} /><Faq copy={copy.faq} /><Contact copy={copy.contact} locale={locale} /></main><Footer copy={copy.footer} locale={locale} /></div>;
}
