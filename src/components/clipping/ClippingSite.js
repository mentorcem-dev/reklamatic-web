"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CampaignExperience from "./CampaignExperience";
import MotionLayer from "./MotionLayer";

const PHONE_DISPLAY = "+90 530 231 29 47";
const PHONE = "+905302312947";

function Wordmark() {
  return <span className="wordmark">reklamatic<span>.ai</span></span>;
}

function SectionTitle({ kicker, title, text, centered = false }) {
  return (
    <div className={`section-title ${centered ? "centered" : ""}`}>
      <p className="kicker"><i />{kicker}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}

function Header({ copy, locale }) {
  const [open, setOpen] = useState(false);
  const otherUrl = locale === "en" ? "/tr" : "/";
  const otherLabel = locale === "en" ? "TR" : "EN";

  return (
    <header className="nav-shell">
      <nav className="nav-pill" aria-label={locale === "en" ? "Main navigation" : "Ana navigasyon"}>
        <a className="brand" href="#top" aria-label="Reklamatic.ai"><Wordmark /></a>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {copy.nav.map(([label, url]) => <a key={url} href={url} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="mobile-contact" href="#contact" onClick={() => setOpen(false)}>{copy.cta}</a>
        </div>
        <div className="nav-actions">
          <a className="language-link" href={otherUrl} hrefLang={locale === "en" ? "tr" : "en"} aria-label={locale === "en" ? "Türkçe sürüm" : "English version"}>{otherLabel}</a>
          <a className="nav-cta" href="#contact">{copy.cta}<span>↗</span></a>
          <button className={`menu-button ${open ? "active" : ""}`} type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={copy.menu}><span /><span /></button>
        </div>
      </nav>
    </header>
  );
}

function FlowCanvas({ label }) {
  return (
    <div className="flow-canvas" role="img" aria-label={label}>
      <div className="flow-source" aria-hidden="true">
        <div className="flow-scene"><i /><i /><i /></div>
        <div className="flow-timeline"><i /></div>
      </div>
      <div className="flow-rail" aria-hidden="true"><i /><i /><i /></div>
      <div className="flow-clips" aria-hidden="true">
        {[0, 1, 2].map((item) => <div className={`flow-clip flow-clip-${item + 1}`} key={item}><span /><b /><em /></div>)}
      </div>
      <div className="flow-signal" aria-hidden="true"><i /><i /><i /><i /></div>
    </div>
  );
}

function Hero({ copy, ticker }) {
  return (
    <section className="hero" id="top">
      <div className="hero-grid grid-lines" aria-hidden="true" />
      <div className="hero-orb orb-one" aria-hidden="true" /><div className="hero-orb orb-two" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="kicker" data-motion-hero><i />{copy.kicker}</p>
          <h1 data-motion-hero>{copy.titleA}<br /><em>{copy.titleB}</em></h1>
          <p className="hero-text" data-motion-hero>{copy.text}</p>
          <div className="hero-buttons" data-motion-hero>
            <a className="button button-primary" href="#contact">{copy.primary}<span>↗</span></a>
            <a className="button button-quiet" href={copy.secondaryHref || "#process"}>{copy.secondary}<span>↓</span></a>
          </div>
          <div className="hero-pills" data-motion-hero>{copy.pills.map((pill) => <span key={pill}>✓ {pill}</span>)}</div>
        </div>
        <div className="hero-visual" data-motion-hero>
          <div className="video-frame">
            <FlowCanvas label={copy.visualAlt} />
            <div className="video-top"><span>REKLAMATIC / CLIPPING FLOW</span><span>9:16</span></div>
            <div className="video-caption"><small>{copy.visualLabel}</small><strong>{copy.visualTitle}</strong></div>
            <div className="focus-corners" aria-hidden="true"><i /><i /><i /><i /></div>
          </div>
          <div className="float-card float-hook"><span>{copy.floating[0]}</span><strong>{copy.floating[1]}</strong></div>
          <div className="float-card float-wave"><span>{copy.floating[2]}</span><div>{[22, 35, 28, 48, 42, 63, 55, 76, 61, 88, 70].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div></div>
        </div>
      </div>
      <div className="ticker" aria-label="Content types"><div>{[...ticker, ...ticker].map((item, i) => <span key={`${item}-${i}`}>{item}<b>✦</b></span>)}</div></div>
    </section>
  );
}

function HomePathways({ locale }) {
  const cards = locale === "tr" ? [
    ["MARKALAR İÇİN", "Reklamını clipper ağıyla büyüt", "Kampanyanı oluştur; içerik üretimi, doğru hesaplarla eşleşme, yayın takibi ve raporlamayı tek yerden yönet.", "/tr/markalar-icin", "Kampanya seçeneklerini gör"],
    ["CLIPPER'LAR İÇİN", "Üret, kendi hesabında paylaş, kazan", "Sosyal medya hesabın ve içerik yeteneğinle ağa katıl; sana uygun marka kampanyalarında çalış.", "/tr/clipper-ol", "Clipper ol"],
    ["SİSTEM NASIL ÇALIŞIR?", "Brief'ten yayına kadar her adım açık", "Marka kampanyayı açar, clipper içerik üretir, Reklamatic kontrol eder; paylaşım ve sonuçlar takip edilir.", "/tr/clipping-kampanyalari", "Süreci incele"],
  ] : [
    ["FOR BRANDS", "Scale campaigns through a clipper network", "Plan creative, match the right accounts, review publishing and measure delivery in one place.", "/for-brands", "Explore brand campaigns"],
    ["FOR CLIPPERS", "Create, publish and earn", "Join with your social channels and creative skills, then work on campaigns that match your audience.", "/for-clippers", "Become a clipper"],
    ["HOW IT WORKS", "A clear path from brief to live posts", "The brand opens a campaign, clippers create, Reklamatic reviews, and verified publishing is reported.", "/clipping-campaigns", "Explore the system"],
  ];
  return <section className="section pathways" data-motion-reveal><div className="container"><SectionTitle kicker={locale === "tr" ? "İKİ TARAF, TEK SİSTEM" : "TWO SIDES, ONE SYSTEM"} title={locale === "tr" ? "Burada ne yapmak istediğini seç." : "Choose how you want to take part."} text={locale === "tr" ? "Reklamatic markalara dağıtım gücü, içerik üreticilerine ise yeni iş fırsatları sunar. Her yolun kendi sayfası, süreci ve başvurusu var." : "Reklamatic gives brands distributed reach and creators new campaign opportunities, each with a dedicated path."} /><div className="pathway-grid">{cards.map(([eyebrow, title, text, href, cta], index) => <a href={href} key={href} className={index === 0 ? "pathway-card featured-path" : "pathway-card"} data-motion-item data-motion-tilt><span>0{index + 1} / {eyebrow}</span><h3>{title}</h3><p>{text}</p><b>{cta} ↗</b></a>)}</div></div></section>;
}

function EditorialShowcase({ locale }) {
  const text = locale === "tr"
    ? { kicker: "KAYNAKTAN SİSTEME", title: "Tek bir uzun kaynağın içindeki farklı kısa video fırsatları.", note: "Özgün konsept görseli · Reklamatic müşteri sonucu veya performans kanıtı değildir.", alt: "Bir podcast kaynağının insan editoryal seçimiyle farklı dikey video fikirlerine dönüşmesini gösteren Reklamatic konsept görseli" }
    : { kicker: "FROM SOURCE TO SYSTEM", title: "Different short-form opportunities inside one long-form source.", note: "Original concept visual · not a Reklamatic client result or performance claim.", alt: "Reklamatic concept visual showing one podcast source becoming different vertical video ideas through human editorial selection" };
  return <section className="editorial-showcase" aria-labelledby="editorial-showcase-title"><div className="container"><figure><div className="editorial-image"><Image src="/media/generated/clipping-system.webp" width={1717} height={916} sizes="(max-width: 700px) 100vw, 1180px" priority alt={text.alt} /></div><figcaption><div><span>{text.kicker}</span><h2 id="editorial-showcase-title">{text.title}</h2></div><p>{text.note}</p></figcaption></figure></div></section>;
}

function ClipperRole({ copy }) {
  return (
    <section className="section what" id="clipper-role">
      <div className="container">
        <SectionTitle kicker={copy.kicker} title={copy.title} text={copy.text} />
        <div className="what-grid">
          {copy.items.map(([number, title, text], index) => <article className={index === 1 ? "featured" : ""} key={title}><div className="card-index"><span>{number}</span><i>{index === 1 ? "✦" : "↗"}</i></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <p className="fineprint">{copy.note}</p>
      </div>
    </section>
  );
}

function BecomeClipper({ copy }) {
  return (
    <section className="section use-cases" id="become-clipper">
      <div className="container use-layout">
        <SectionTitle kicker={copy.kicker} title={copy.title} text={copy.text} />
        <div className="use-list">{copy.items.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><b>✓</b></article>)}<a className="button button-primary" href="#clipper-contact" style={{ marginTop: 24 }}>{copy.cta}<span>↗</span></a><p className="proof-note">{copy.note}</p></div>
      </div>
    </section>
  );
}

function WhatSection({ copy }) {
  return (
    <section className="section what" id="clipping">
      <div className="container">
        <SectionTitle kicker={copy.kicker} title={copy.title} text={copy.text} />
        <div className="what-grid">
          {copy.cards.map(([number, title, text], index) => (
            <article className={index === 1 ? "featured" : ""} key={number}>
              <div className="card-index"><span>{number}</span><i>{index === 0 ? "⌕" : index === 1 ? "✦" : "↗"}</i></div>
              <h3>{title}</h3><p>{text}</p>
              <div className={`card-graphic graphic-${index + 1}`} aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ copy }) {
  return (
    <section className="section process" id="process">
      <div className="container">
        <SectionTitle kicker={copy.kicker} title={copy.title} centered />
        <div className="process-line" aria-hidden="true" />
        <div className="process-grid">
          {copy.steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </div>
    </section>
  );
}

function UseCases({ copy }) {
  return (
    <section className="section use-cases">
      <div className="container use-layout">
        <SectionTitle kicker={copy.kicker} title={copy.title} />
        <div className="use-list">
          {copy.items.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></article>)}
        </div>
      </div>
    </section>
  );
}

function BrandCampaigns({ copy }) {
  const [active, setActive] = useState(0);
  const current = copy.tabs[active];
  function moveTab(event, index) {
    const last = copy.tabs.length - 1;
    const next = event.key === "ArrowRight" ? (index === last ? 0 : index + 1) : event.key === "ArrowLeft" ? (index === 0 ? last : index - 1) : event.key === "Home" ? 0 : event.key === "End" ? last : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    document.getElementById(`service-tab-${next}`)?.focus();
  }
  return (
    <section className="section services" id="brand-campaigns">
      <div className="container">
        <SectionTitle kicker={copy.kicker} title={copy.title} text={copy.intro} />
        <div className="metric-grid">{copy.overview.map(([title, text]) => <article key={title}><strong style={{ fontSize: 22 }}>{title}</strong><span>{text}</span></article>)}</div>
        <div className="service-tabs" role="tablist" aria-label={copy.kicker}>
          {copy.tabs.map((tab, index) => <button key={tab.label} id={`service-tab-${index}`} type="button" role="tab" aria-selected={active === index} aria-controls="service-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => moveTab(event, index)}>{String(index + 1).padStart(2, "0")}<span>{tab.label}</span></button>)}
        </div>
        <div className="service-panel" id="service-panel" role="tabpanel" aria-labelledby={`service-tab-${active}`} tabIndex="0">
          <div><span className="service-number">0{active + 1}</span><h3>{current.title}</h3><p>{current.desc}</p><a className="button button-primary" href="#contact">{copy.ask}<span>↗</span></a></div>
          <dl>{current.facts.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}</dl>
        </div>
        <p className="fineprint">{copy.note}</p>
      </div>
    </section>
  );
}

function SafetyMeasurement({ copy }) {
  return (
    <section className="section proof" id="measurement">
      <div className="container">
        <div className="proof-heading"><SectionTitle kicker={copy.kicker} title={copy.title} /><p>{copy.text}</p></div>
        <div className="metric-grid">{copy.pillars.map(([title, text]) => <article key={title}><strong style={{ fontSize: 24 }}>{title}</strong><span>{text}</span></article>)}</div>
        <div className="comparison-wrap"><table><thead><tr>{copy.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{copy.rows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>
        <p className="proof-note">{copy.note}</p>
      </div>
    </section>
  );
}

function BrandSafety({ copy }) {
  return (
    <section className="section what" id="brand-safety">
      <div className="container">
        <SectionTitle kicker={copy.kicker} title={copy.title} text={copy.text} />
        <div className="what-grid">{copy.items.map(([title, text], index) => <article className={index === 1 ? "featured" : ""} key={title}><div className="card-index"><span>0{index + 1}</span><i>✓</i></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        <p className="fineprint">{copy.note}</p>
      </div>
    </section>
  );
}

function ScenarioVisual({ index, label }) {
  const backgrounds = ["linear-gradient(135deg,#0b2342,#086fd8 55%,#9bd4ff)", "linear-gradient(135deg,#081a34,#4967e9 55%,#d8e6ff)", "linear-gradient(135deg,#091a2d,#335d74 50%,#b9d5cc)"];
  return <div role="img" aria-label={label} style={{ height: 325, background: backgrounds[index], display: "grid", placeItems: "center", overflow: "hidden" }}><div className={`card-graphic graphic-${index + 1}`} style={{ width: 220, height: 150, transform: "scale(1.35)" }} aria-hidden="true"><i /><i /><i /><i /><i /><i /></div></div>;
}

function CampaignScenarios({ copy }) {
  return (
    <section className="section proof" id="campaign-examples">
      <div className="container">
        <div className="proof-heading"><SectionTitle kicker={copy.kicker} title={copy.title} /><p>{copy.text}</p></div>
        <div className="proof-gallery">
          {copy.items.map((item, index) => <figure className={index === 0 ? "wide" : ""} key={item.title}>
            {index === 0 ? <Image className="scenario-image" src="/media/generated/illustrative-campaigns.webp" width={1722} height={907} sizes="(max-width: 700px) 100vw, 1180px" alt={item.alt} /> : <ScenarioVisual index={index} label={item.alt} />}
            <figcaption><strong><small>{copy.label}</small><br />{item.title}</strong><span><b>{copy.source}:</b> {item.source}<br /><b>{copy.goal}:</b> {item.goal}<br /><b>{copy.outputs}:</b> {item.outputs}<br /><b>{copy.signals}:</b> {item.signals}</span></figcaption>
          </figure>)}
        </div>
        <p className="proof-note">{copy.note}</p>
      </div>
    </section>
  );
}

function Resources({ copy }) {
  return (
    <section className="section what" id="resources">
      <div className="container">
        <SectionTitle kicker={copy.kicker} title={copy.title} text={copy.text} />
        <figure className="resources-visual"><Image src="/media/generated/clipping-resources.webp" width={1536} height={1024} sizes="(max-width: 700px) 100vw, 1180px" alt={copy.title} /><figcaption>{copy.kicker} · Reklamatic editorial study</figcaption></figure>
        <div className="what-grid">
          {copy.items.map(([tag, title, text, points], index) => <article className={index === 1 ? "featured" : ""} key={title}><div className="card-index"><span>{tag}</span><i>+</i></div><h3>{title}</h3><p>{text}</p><details><summary>{copy.open}</summary><div className="hero-pills">{points.map((point) => <span key={point}>✓ {point}</span>)}</div></details></article>)}
        </div>
      </div>
    </section>
  );
}

function Compare({ copy }) {
  return (
    <section className="section comparison">
      <div className="container">
        <SectionTitle kicker={copy.kicker} title={copy.title} centered />
        <div className="comparison-wrap"><table><thead><tr>{copy.headers.map((header, index) => <th className={index === 1 ? "selected" : ""} key={header}>{header}</th>)}</tr></thead><tbody>{copy.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td className={index === 1 ? "selected" : ""} key={cell}>{index === 1 && <i>✓</i>}{cell}</td>)}</tr>)}</tbody></table></div>
        <p className="comparison-note">{copy.disclaimer}</p>
      </div>
    </section>
  );
}

function Faq({ copy }) {
  return (
    <section className="section faq" id="faq">
      <div className="container faq-layout">
        <SectionTitle kicker={copy.kicker} title={copy.title} />
        <div className="faq-list">{copy.items.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </div>
    </section>
  );
}

function Contact({ copy, locale }) {
  const [error, setError] = useState("");
  const [mode, setMode] = useState("brand");
  const tabRefs = useRef([]);
  useEffect(() => {
    const syncMode = () => setMode(window.location.hash === "#clipper-contact" ? "clipper" : "brand");
    syncMode();
    window.addEventListener("hashchange", syncMode);
    return () => window.removeEventListener("hashchange", syncMode);
  }, []);
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();
    if (!data.get("name") || !email.includes("@") || !data.get("message") || !data.get("consent")) {
      setError(copy.labels.required);
      return;
    }
    setError("");
    const isClipper = data.get("mode") === "clipper";
    const subject = isClipper ? (locale === "en" ? `Clipper interest — ${data.get("name")}` : `Clipper adaylığı — ${data.get("name")}`) : (locale === "en" ? `Brand clipping brief — ${data.get("company") || data.get("name")}` : `Marka clipping talebi — ${data.get("company") || data.get("name")}`);
    const body = [`Path / Akış: ${isClipper ? "Clipper" : "Brand / Marka"}`, `Name / Ad: ${data.get("name")}`, `Email: ${email}`, `Phone / WhatsApp: ${data.get("phone") || "-"}`, `Company / Channel: ${data.get("company") || "-"}`, `Market: ${data.get("market") || "-"}`, `Platforms: ${data.get("platforms") || "-"}`, `Budget: ${data.get("budget") || "-"}`, `Source / Portfolio URL: ${data.get("source") || "-"}`, `Service / Specialty: ${data.get("service") || "-"}`, "", String(data.get("message"))].join("\n");
    window.location.href = `mailto:info@reklamatic.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  function handleTabKeyDown(event) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "ArrowLeft" || event.key === "Home" ? 0 : 1;
    setMode(nextIndex === 0 ? "brand" : "clipper");
    tabRefs.current[nextIndex]?.focus();
  }
  return (
    <section className="section contact" id="contact">
      <span id="brand-contact" /> <span id="clipper-contact" />
      <div className="container contact-shell">
        <div className="contact-copy"><SectionTitle kicker={copy.kicker} title={copy.title} text={copy.text} /><div className="direct"><span>{copy.direct}</span><a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a><a href="https://wa.me/905302312947" target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div>
        <form onSubmit={submit} noValidate>
          <input type="hidden" name="mode" value={mode} />
          <div className="service-tabs" role="tablist" aria-label={copy.modeLabel} style={{ marginTop: 0, marginBottom: 22, gridTemplateColumns: "1fr 1fr" }}>
            <button ref={(node) => { tabRefs.current[0] = node; }} id="contact-tab-brand" type="button" role="tab" aria-selected={mode === "brand"} aria-controls="contact-panel" tabIndex={mode === "brand" ? 0 : -1} onKeyDown={handleTabKeyDown} onClick={() => setMode("brand")}><span>{copy.modes.brand}</span></button>
            <button ref={(node) => { tabRefs.current[1] = node; }} id="contact-tab-clipper" type="button" role="tab" aria-selected={mode === "clipper"} aria-controls="contact-panel" tabIndex={mode === "clipper" ? 0 : -1} onKeyDown={handleTabKeyDown} onClick={() => setMode("clipper")}><span>{copy.modes.clipper}</span></button>
          </div>
          <div id="contact-panel" role="tabpanel" aria-labelledby={mode === "brand" ? "contact-tab-brand" : "contact-tab-clipper"}>
          <div className="form-row"><label>{copy.labels.name}<input name="name" autoComplete="name" required /></label><label>{copy.labels.email}<input name="email" type="email" autoComplete="email" required /></label></div>
          <div className="form-row"><label>{copy.labels.phone}<input name="phone" type="tel" autoComplete="tel" /></label><label>{copy.labels.company}<input name="company" autoComplete="organization" /></label></div>
          {mode === "brand" ? <>
            <div className="form-row"><label>{copy.labels.market}<select name="market">{copy.markets.map((market) => <option key={market}>{market}</option>)}</select></label><label>{copy.labels.platforms}<input name="platforms" placeholder={copy.labels.platformsHint} /></label></div>
            <div className="form-row"><label>{copy.labels.budget}<select name="budget">{copy.budgets.map((budget) => <option key={budget}>{budget}</option>)}</select></label><label>{copy.labels.source}<input name="source" type="url" inputMode="url" placeholder="https://" /></label></div>
            <label>{copy.labels.service}<select name="service">{copy.services.map((service) => <option key={service}>{service}</option>)}</select></label>
          </> : <>
            <div className="form-row"><label>{copy.labels.portfolio}<input name="source" type="url" inputMode="url" placeholder="https://" /></label><label>{copy.labels.specialty}<select name="service">{copy.specialties.map((item) => <option key={item}>{item}</option>)}</select></label></div>
          </>}
          <p className="fineprint" style={{ marginBottom: 16 }}>{copy.safetyNote}</p>
          <label>{mode === "brand" ? copy.labels.message : copy.labels.clipperMessage}<textarea name="message" rows="4" required /></label>
          <label className="consent"><input type="checkbox" name="consent" required /><span>{copy.labels.consent} <a href={locale === "en" ? "/privacy" : "/tr/privacy"} target="_blank">{copy.labels.privacy}</a>.</span></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button button-dark" type="submit">{copy.labels.submit}<span>↗</span></button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer({ copy, nav, locale }) {
  const directory = locale === "en" ? [["Clipping agency", "/clipping-agency"], ["For brands", "/for-brands"], ["For clippers", "/for-clippers"], ["Resources", "/blog"], ["FAQ", "/faq"]] : [["Clipping ajansı", "/tr/clipping-ajansi"], ["Markalar için", "/tr/markalar-icin"], ["Clipper adayları", "/tr/clipper-ol"], ["Kaynaklar", "/tr/blog"], ["SSS", "/tr/sss"]];
  return (
    <footer><div className="container footer-grid"><div><a href="#top"><Wordmark /></a><p>{copy.line}</p><span>© 2026 Reklamatic. {copy.rights}</span></div><div><strong>{copy.explore}</strong>{directory.map(([label, url]) => <a href={url} key={url}>{label}</a>)}</div><div><strong>{copy.contact}</strong><a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a><a href="https://wa.me/905302312947" target="_blank" rel="noreferrer">WhatsApp ↗</a></div><div><strong>{copy.legal}</strong><a href={locale === "en" ? "/privacy" : "/tr/privacy"}>{copy.privacy}</a><a href={locale === "en" ? "/terms" : "/tr/terms"}>{copy.terms}</a><a href={locale === "en" ? "/tr" : "/"}>{locale === "en" ? "Türkçe" : "English"}</a></div></div></footer>
  );
}

export default function ClippingSite({ copy, locale }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": "https://reklamatic.ai/#organization", name: "Reklamatic.ai", url: "https://reklamatic.ai", email: "info@reklamatic.ai", telephone: PHONE, areaServed: "Worldwide", knowsLanguage: ["en", "tr"] },
      { "@type": "WebSite", "@id": "https://reklamatic.ai/#website", url: "https://reklamatic.ai", name: "Reklamatic.ai", publisher: { "@id": "https://reklamatic.ai/#organization" }, inLanguage: ["en", "tr"] },
      { "@type": "Service", name: locale === "en" ? "Short-form video clipping" : "Kısa video clipping hizmeti", provider: { "@id": "https://reklamatic.ai/#organization" }, areaServed: "Worldwide", serviceType: "Short-form video editing and content repurposing" },
      { "@type": "FAQPage", mainEntity: copy.faq.items.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) },
    ],
  };
  return (
    <div className="site" lang={locale} data-motion-root>
      <MotionLayer />
      <a className="skip-link" href="#clipping">{copy.skip}</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Header copy={copy} locale={locale} />
      {locale === "tr" ? <main><Hero copy={copy.hero} ticker={copy.ticker} /><CampaignExperience locale={locale} compact /><HomePathways locale={locale} /><WhatSection copy={copy.what} /><ProcessSection copy={copy.process} /><CampaignScenarios copy={copy.scenarios} /><Faq copy={copy.faq} /><Contact copy={copy.contact} locale={locale} /></main> : <main><Hero copy={copy.hero} ticker={copy.ticker} /><CampaignExperience locale={locale} /><EditorialShowcase locale={locale} /><WhatSection copy={copy.what} /><ClipperRole copy={copy.clipperRole} /><BrandCampaigns copy={copy.services} /><BecomeClipper copy={copy.becomeClipper} /><ProcessSection copy={copy.process} /><SafetyMeasurement copy={copy.measurement} /><BrandSafety copy={copy.brandSafety} /><CampaignScenarios copy={copy.scenarios} /><Resources copy={copy.resources} /><Compare copy={copy.compare} /><Faq copy={copy.faq} /><Contact copy={copy.contact} locale={locale} /></main>}
      <Footer copy={copy.footer} nav={copy.nav} locale={locale} />
    </div>
  );
}
