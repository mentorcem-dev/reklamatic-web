"use client";

import { useEffect, useRef, useState } from "react";

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

function Hero({ copy, ticker }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const frame = window.requestAnimationFrame(() => {
      videoRef.current?.pause();
      setPlaying(false);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);
  function toggleVideo() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) { videoRef.current.play(); setPlaying(true); }
    else { videoRef.current.pause(); setPlaying(false); }
  }
  return (
    <section className="hero" id="top">
      <div className="hero-grid grid-lines" aria-hidden="true" />
      <div className="hero-orb orb-one" aria-hidden="true" /><div className="hero-orb orb-two" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="kicker"><i />{copy.kicker}</p>
          <h1>{copy.titleA}<br /><em>{copy.titleB}</em></h1>
          <p className="hero-text">{copy.text}</p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#contact">{copy.primary}<span>↗</span></a>
            <a className="button button-quiet" href="#process">{copy.secondary}<span>↓</span></a>
          </div>
          <div className="hero-pills">{copy.pills.map((pill) => <span key={pill}>✓ {pill}</span>)}</div>
        </div>
        <div className="hero-visual">
          <div className="video-frame">
            <video ref={videoRef} autoPlay muted loop playsInline poster="/media/reklamatic-production-poster.jpg" aria-label={copy.visualLabel}>
              <source src="/media/reklamatic-production-sample.mp4" type="video/mp4" />
            </video>
            <div className="video-top"><span>REKLAMATIC / CLIP 001</span><span>9:16</span></div>
            <div className="video-caption"><small>{copy.visualLabel}</small><strong>{copy.visualTitle}</strong></div>
            <button className="video-toggle" type="button" onClick={toggleVideo} aria-label={playing ? copy.pause : copy.play}>{playing ? "Ⅱ" : "▶"}</button>
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

function Services({ copy }) {
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
    <section className="section services" id="services">
      <div className="container">
        <SectionTitle kicker={copy.kicker} title={copy.title} text={copy.intro} />
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

function Proof({ copy }) {
  return (
    <section className="section proof" id="proof">
      <div className="container">
        <div className="proof-heading"><SectionTitle kicker={copy.kicker} title={copy.title} /><p>{copy.text}</p></div>
        <div className="metric-grid">{copy.metrics.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
        <div className="proof-gallery">
          {copy.images.map(([src, alt, title, text], index) => <figure className={index === 0 ? "wide" : ""} key={src}><img src={src} width={index === 0 ? 2394 : index === 1 ? 1490 : 1512} height={index === 0 ? 716 : index === 1 ? 780 : 805} alt={alt} loading="lazy" decoding="async" /><figcaption><strong>{title}</strong><span>{text}</span></figcaption></figure>)}
        </div>
        <p className="proof-note">{copy.note}</p>
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
  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();
    if (!data.get("name") || !email.includes("@") || !data.get("message") || !data.get("consent")) {
      setError(copy.labels.required);
      return;
    }
    setError("");
    const subject = locale === "en" ? `Clipping brief — ${data.get("company") || data.get("name")}` : `Clipping talebi — ${data.get("company") || data.get("name")}`;
    const body = [`Name / Ad: ${data.get("name")}`, `Email: ${email}`, `Phone / WhatsApp: ${data.get("phone") || "-"}`, `Company / Channel: ${data.get("company") || "-"}`, `Market: ${data.get("market")}`, `Platforms: ${data.get("platforms") || "-"}`, `Budget: ${data.get("budget")}`, `Source URL: ${data.get("source") || "-"}`, `Service: ${data.get("service")}`, "", String(data.get("message"))].join("\n");
    window.location.href = `mailto:info@reklamatic.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return (
    <section className="section contact" id="contact">
      <div className="container contact-shell">
        <div className="contact-copy"><SectionTitle kicker={copy.kicker} title={copy.title} text={copy.text} /><div className="direct"><span>{copy.direct}</span><a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a><a href="https://wa.me/905302312947" target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div>
        <form onSubmit={submit} noValidate>
          <div className="form-row"><label>{copy.labels.name}<input name="name" autoComplete="name" required /></label><label>{copy.labels.email}<input name="email" type="email" autoComplete="email" required /></label></div>
          <div className="form-row"><label>{copy.labels.phone}<input name="phone" type="tel" autoComplete="tel" /></label><label>{copy.labels.company}<input name="company" autoComplete="organization" /></label></div>
          <div className="form-row"><label>{copy.labels.market}<select name="market">{copy.markets.map((market) => <option key={market}>{market}</option>)}</select></label><label>{copy.labels.platforms}<input name="platforms" placeholder={copy.labels.platformsHint} /></label></div>
          <div className="form-row"><label>{copy.labels.budget}<select name="budget">{copy.budgets.map((budget) => <option key={budget}>{budget}</option>)}</select></label><label>{copy.labels.source}<input name="source" type="url" inputMode="url" placeholder="https://" /></label></div>
          <label>{copy.labels.service}<select name="service">{copy.services.map((service) => <option key={service}>{service}</option>)}</select></label>
          <label>{copy.labels.message}<textarea name="message" rows="4" required /></label>
          <label className="consent"><input type="checkbox" name="consent" required /><span>{copy.labels.consent} <a href={locale === "en" ? "/privacy" : "/tr/privacy"} target="_blank">{copy.labels.privacy}</a>.</span></label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button button-dark" type="submit">{copy.labels.submit}<span>↗</span></button>
        </form>
      </div>
    </section>
  );
}

function Footer({ copy, nav, locale }) {
  return (
    <footer><div className="container footer-grid"><div><a href="#top"><Wordmark /></a><p>{copy.line}</p><span>© 2026 Reklamatic. {copy.rights}</span></div><div><strong>{copy.explore}</strong>{nav.slice(0, 4).map(([label, url]) => <a href={url} key={url}>{label}</a>)}</div><div><strong>{copy.contact}</strong><a href="mailto:info@reklamatic.ai">info@reklamatic.ai</a><a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a><a href="https://wa.me/905302312947" target="_blank" rel="noreferrer">WhatsApp ↗</a></div><div><strong>{copy.legal}</strong><a href={locale === "en" ? "/privacy" : "/tr/privacy"}>{copy.privacy}</a><a href={locale === "en" ? "/terms" : "/tr/terms"}>{copy.terms}</a><a href={locale === "en" ? "/tr" : "/"}>{locale === "en" ? "Türkçe" : "English"}</a></div></div></footer>
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
    <div className="site" lang={locale}>
      <a className="skip-link" href="#clipping">{copy.skip}</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <Header copy={copy} locale={locale} />
      <main><Hero copy={copy.hero} ticker={copy.ticker} /><WhatSection copy={copy.what} /><ProcessSection copy={copy.process} /><UseCases copy={copy.useCases} /><Services copy={copy.services} /><Proof copy={copy.proof} /><Compare copy={copy.compare} /><Faq copy={copy.faq} /><Contact copy={copy.contact} locale={locale} /></main>
      <Footer copy={copy.footer} nav={copy.nav} locale={locale} />
    </div>
  );
}
