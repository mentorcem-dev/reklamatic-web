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
  return <figure className="hero-video">
    <video autoPlay muted loop playsInline preload="metadata" poster="/media/generated/reklamatic-campaign-1.webp" aria-label={copy.visualAlt}><source src="/media/generated/reklamatic-showreel.mp4" type="video/mp4" /></video>
    <div className="hero-video-shade" aria-hidden="true" />
    <figcaption><span>{copy.visualLabel}</span><strong>{copy.visualTitle}</strong><p>{copy.visualText}</p></figcaption>
  </figure>;
}

function Hero({ copy }) {
  return <section className="hero" id="top"><div className="hero-grid" aria-hidden="true" /><div className="container hero-layout">
    <div className="hero-copy"><p className="kicker" data-motion-hero>{copy.kicker}</p><h1 data-motion-hero>{copy.titleA}<em>{copy.titleB}</em></h1><p className="hero-text" data-motion-hero>{copy.text}</p><div className="hero-buttons" data-motion-hero><a className="button button-primary" href={copy.primaryHref}>{copy.primary}<span>↗</span></a><a className="button button-secondary" href={copy.secondaryHref}>{copy.secondary}<span>↗</span></a></div><p className="hero-status" data-motion-hero>{copy.status}</p></div>
    <div className="hero-visual" data-motion-hero data-parallax><HeroVideo copy={copy} /></div>
  </div></section>;
}

function ProofGallery({ copy }) {
  return <section className="proof" id="proof" data-motion-reveal><div className="container">
    <div className="proof-heading"><SectionTitle kicker={copy.kicker} title={copy.title} text={copy.text} /><div className="proof-metrics">{copy.metrics.map(([value, label]) => <div key={label} data-motion-item><strong>{value}</strong><span>{label}</span></div>)}</div></div>
    <div className="proof-showcase">
      <figure className="proof-profile" data-motion-item><div><Image src={copy.profile[2]} alt={copy.profile[3]} fill sizes="(max-width: 700px) 84vw, 31vw" /></div><figcaption><span>{copy.profile[0]}</span><strong>{copy.profile[1]}</strong></figcaption></figure>
      <div className="proof-details">{copy.details.map(([value, label, src, crop, alt]) => <figure className={`proof-detail proof-detail-${crop}`} key={`${src}-${crop}`} data-motion-item><div><Image src={src} alt={alt} fill sizes="(max-width: 700px) 84vw, 39vw" /></div><figcaption><span>{value} · {label}</span></figcaption></figure>)}</div>
    </div>
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
  const strip = [...marqueeLogos, ...marqueeLogos, ...marqueeLogos];
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
    <div className="logo-marquee" aria-label={copy.logosLabel}>
      <div className="logo-track">
        {strip.map(([src, alt], index) => <span key={`${alt}-${index}`} className={`logo-chip logo-chip-${alt.toLowerCase()}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={index < marqueeLogos.length ? `${alt} logo` : ""} aria-hidden={index >= marqueeLogos.length} loading="lazy" />
          <b>{alt}</b>
        </span>)}
      </div>
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
    const sync = () => setMode(window.location.hash === "#clipper-contact" ? "clipper" : "brand");
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
    <div className="contact-copy" data-motion-item><SectionTitle kicker={copy.kicker} title={copy.title} text={copy.text} /><div className="direct"><span>{copy.direct}</span><a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a><a href="https://wa.me/905302312947" target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div>
    <form onSubmit={submit} noValidate data-motion-item><input type="hidden" name="mode" value={mode} /><div className="contact-tabs" role="tablist" aria-label={copy.modeLabel}><button ref={(node) => { tabs.current[0] = node; }} type="button" role="tab" aria-selected={mode === "brand"} aria-controls="contact-panel" tabIndex={mode === "brand" ? 0 : -1} onKeyDown={handleTab} onClick={() => selectMode("brand")}>{copy.modes.brand}</button><button ref={(node) => { tabs.current[1] = node; }} type="button" role="tab" aria-selected={mode === "clipper"} aria-controls="contact-panel" tabIndex={mode === "clipper" ? 0 : -1} onKeyDown={handleTab} onClick={() => selectMode("clipper")}>{copy.modes.clipper}</button></div>
      <div id="contact-panel" role="tabpanel"><div className="form-row"><label>{copy.labels.name}<input name="name" autoComplete="name" required /></label><label>{copy.labels.email}<input name="email" type="email" autoComplete="email" required /></label></div><div className="form-row"><label>{copy.labels.phone}<input name="phone" type="tel" autoComplete="tel" /></label><label>{copy.labels.company}<input name="company" autoComplete="organization" /></label></div>
      {mode === "brand" ? <><div className="form-row"><label>{copy.labels.market}<select name="market">{copy.markets.map((item) => <option key={item}>{item}</option>)}</select></label><label>{copy.labels.platforms}<input name="platforms" placeholder={copy.labels.platformsHint} /></label></div><div className="form-row"><label>{copy.labels.budget}<select name="budget">{copy.budgets.map((item) => <option key={item}>{item}</option>)}</select></label><label>{copy.labels.source}<input name="source" type="url" inputMode="url" placeholder="https://" /></label></div><label>{copy.labels.service}<select name="service">{copy.services.map((item) => <option key={item}>{item}</option>)}</select></label></> : <div className="form-row"><label>{copy.labels.portfolio}<input name="source" type="url" inputMode="url" placeholder="https://" /></label><label>{copy.labels.specialty}<select name="service">{copy.specialties.map((item) => <option key={item}>{item}</option>)}</select></label></div>}
      <p className="form-note">{copy.safetyNote}</p><label>{mode === "brand" ? copy.labels.message : copy.labels.clipperMessage}<textarea name="message" rows="4" required /></label><label className="consent"><input type="checkbox" name="consent" required /><span>{copy.labels.consent} <a href={locale === "en" ? "/en/privacy" : "/privacy"} target="_blank">{copy.labels.privacy}</a>.</span></label>{error && <p className="form-error" role="alert">{error}</p>}{status === "success" && <p className="form-success" role="status">{copy.labels.success}</p>}{status === "failed" && <p className="form-error" role="alert">{copy.labels.failed}</p>}<button className="button button-dark" type="submit" disabled={status === "sending"}>{status === "sending" ? copy.labels.sending : copy.labels.submit}<span>↗</span></button></div>
    </form>
  </div></section>;
}

function Footer({ copy, locale }) {
  const links = locale === "tr" ? [["Markalar için", "/markalar-icin"], ["Clipper ol", "/clipper-ol"], ["Nasıl çalışır?", "/clipping-kampanyalari"], ["Blog", "/blog"]] : [["For brands", "/en/for-brands"], ["For clippers", "/en/for-clippers"], ["How it works", "/en/clipping-campaigns"], ["Blog", "/en/blog"]];
  return <footer><div className="container footer-grid"><div><a href="#top"><Wordmark /></a><p>{copy.line}</p><span>© 2026 Reklamatic. {copy.rights}</span></div><div><strong>{copy.explore}</strong>{links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div><div><strong>{copy.contact}</strong><a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a></div><div><strong>{copy.legal}</strong><a href={locale === "tr" ? "/privacy" : "/en/privacy"}>{copy.privacy}</a><a href={locale === "tr" ? "/terms" : "/en/terms"}>{copy.terms}</a><a href={locale === "tr" ? "/en" : "/"}>{locale === "tr" ? "English" : "Türkçe"}</a></div></div></footer>;
}

export default function ClippingSite({ copy, locale }) {
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": "https://reklamatic.ai/#organization", name: "Reklamatic.ai", url: "https://reklamatic.ai", email: "info@reklamatic.ai", telephone: PHONE, areaServed: "TR", knowsLanguage: ["en", "tr"] }, { "@type": "WebSite", "@id": "https://reklamatic.ai/#website", name: "Reklamatic.ai", url: "https://reklamatic.ai", publisher: { "@id": "https://reklamatic.ai/#organization" }, inLanguage: ["en", "tr"] }, { "@type": "Service", name: locale === "tr" ? "Clipping ajansı ve clipper dağıtım hizmeti" : "Clipping agency and clipper distribution service", provider: { "@id": "https://reklamatic.ai/#organization" }, areaServed: "TR", serviceType: "Short-form production, active clipper network distribution and eligible-view campaign reporting" }, { "@type": "FAQPage", mainEntity: copy.faq.items.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }] };
  return <div className="site" lang={locale} data-motion-root><MotionLayer /><a className="skip-link" href="#main-content">{copy.skip}</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><Header copy={copy} locale={locale} /><main id="main-content"><Hero copy={copy.hero} /><ProofGallery copy={copy.proof} /><ModelIntro copy={copy.model} /><GlobalWork copy={copy.work} /><Pathways copy={copy.pathways} /><CampaignExperience copy={copy.experience} /><Faq copy={copy.faq} /><Contact copy={copy.contact} locale={locale} /></main><Footer copy={copy.footer} locale={locale} /></div>;
}
