"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./CampaignExperience.module.css";

function Heading({ kicker, title, text, dark = false }) {
  return <div className={`${styles.heading} ${dark ? styles.dark : ""}`}><p>{kicker}</p><h2>{title}</h2>{text && <span>{text}</span>}</div>;
}

function StoryStage({ story }) {
  return <div className={styles.storyStage} data-story-stage data-active="0" aria-hidden="true">
    <div className={styles.stageTop}><span>REKLAMATIC / CAMPAIGN LOOP</span><b>00:20</b></div>
    <div className={styles.sourceTile}><small>APPROVED SOURCE</small><i /><i /><i /></div>
    <div className={styles.stageLine}><i /><i /><i /><i /></div>
    <div className={styles.clipTiles}><div><b>9:16</b><span>HOOK</span></div><div><b>9:16</b><span>CONTEXT</span></div><div><b>9:16</b><span>CTA</span></div></div>
    <div className={styles.stageReport}><span>ELIGIBLE VIEWS</span><div><i /><i /><i /><i /><i /></div></div>
    <strong className={styles.stageLabel}>{story.steps[0][3]}</strong>
  </div>;
}

function Story({ copy }) {
  return <section className={styles.story} id="clipping-story" data-story>
    <div className={styles.storyHeader}><Heading kicker={copy.kicker} title={copy.title} text={copy.intro} dark /></div>
    <div className={styles.storyLayout}>
      <StoryStage story={copy} />
      <div className={styles.storySteps}>{copy.steps.map(([time, title, body, signal], index) => <article key={time} data-story-step data-index={index} data-active={index === 0 ? "true" : "false"}><span>{time}</span><small>{signal}</small><h3>{title}</h3><p>{body}</p></article>)}</div>
    </div>
  </section>;
}

function Showreel({ copy }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setReduced(query.matches);
      if (query.matches) {
        videoRef.current?.pause();
        setPlaying(false);
      } else {
        videoRef.current?.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      }
    };
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const toggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) videoRef.current.play().then(() => setPlaying(true)).catch(() => {});
    else { videoRef.current.pause(); setPlaying(false); }
  };

  return <section className={styles.reel} data-motion-reveal>
    <div className={styles.wrap}><Heading kicker={copy.kicker} title={copy.title} text={copy.text} dark /></div>
    <div className={styles.reelFrame} data-motion-item>
      <video ref={videoRef} muted loop playsInline controls preload="metadata" poster="/media/generated/reklamatic-campaign-1.webp" aria-label={copy.label} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}><source src="/media/generated/reklamatic-showreel.mp4" type="video/mp4" /></video>
      <button type="button" onClick={toggle} aria-label={playing ? copy.pause : copy.play} aria-pressed={playing}>{playing ? "Ⅱ" : "▶"}</button>
      <div className={styles.reelMeta}><span>REKLAMATIC / SHOWREEL</span><span>{reduced ? "MANUAL PLAY" : "AUTO LOOP"}</span></div>
    </div>
  </section>;
}

function OperationsVisual({ slots }) {
  return <div className={styles.browser} role="img" aria-label="Conceptual Reklamatic operations view with generic channel and campaign queue states">
    <div className={styles.browserBar}><i /><i /><i /><span>reklamatic / operations</span><b>● LIVE</b></div>
    <div className={styles.browserBody}>
      <aside><strong>R</strong><i /><i /><i /><i /></aside>
      <div className={styles.queue}>
        <header><div><small>CAMPAIGN QUEUE</small><h3>Approved distribution</h3></div><span>MULTI-CHANNEL</span></header>
        <div className={styles.queueRail}><i /><i /><i /><i /></div>
        {slots.map(([number, channel, status], index) => <div className={styles.slot} key={number}><span>{number}</span><div><strong>{channel}</strong><small>CAMPAIGN SLOT</small></div><b data-status={index}>{status}</b></div>)}
      </div>
    </div>
  </div>;
}

function Operations({ copy }) {
  return <section className={styles.operations} id="operations" data-motion-reveal>
    <div className={styles.wrap}><div className={styles.opsCopy} data-motion-item><span className={styles.badge}>{copy.badge}</span><Heading kicker={copy.kicker} title={copy.title} text={copy.text} /><p>{copy.note}</p><a href={copy.href}>{copy.cta}<b>↗</b></a></div><div data-motion-item data-parallax><OperationsVisual slots={copy.slots} /></div></div>
  </section>;
}

function Filmstrip({ copy }) {
  return <section className={styles.film} data-filmstrip data-motion-reveal>
    <div className={styles.wrap}><Heading kicker={copy.kicker} title={copy.title} text={copy.text} dark /></div>
    <div className={styles.filmTrack} data-film-track>{copy.items.map(([name, category, src, alt], index) => <figure key={name} data-motion-item><div><Image src={src} fill sizes="(max-width: 700px) 82vw, 46vw" alt={alt} /></div><figcaption><span>0{index + 1} / {category}</span><strong>{name}</strong></figcaption></figure>)}</div>
  </section>;
}

function Economics({ copy }) {
  return <section className={styles.economics} id="terms" data-motion-reveal><div className={styles.wrap}><Heading kicker={copy.kicker} title={copy.title} /><div className={styles.economicSplit}><article data-motion-item><span>BRAND</span><h3>{copy.brandTitle}</h3><p>{copy.brandText}</p></article><article data-motion-item><span>CLIPPER</span><h3>{copy.clipperTitle}</h3><p>{copy.clipperText}</p><code>{copy.formula}</code></article></div></div></section>;
}

export default function CampaignExperience({ copy }) {
  return <div className={styles.experience}>
    <Story copy={copy.story} />
    <Showreel copy={copy.reel} />
    <Operations copy={copy.operations} />
    <Filmstrip copy={copy.film} />
    <Economics copy={copy.economics} />
  </div>;
}
