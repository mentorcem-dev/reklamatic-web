"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function MotionLayer() {
  useEffect(() => {
    const root = document.querySelector("[data-motion-root]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!root || reduced.matches) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    let lenis;
    let lenisTick;
    if (window.matchMedia("(min-width: 960px) and (pointer: fine)").matches) {
      lenis = new Lenis({ lerp: 0.095, smoothWheel: true, syncTouch: false });
      lenis.on("scroll", ScrollTrigger.update);
      lenisTick = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(lenisTick);
      gsap.ticker.lagSmoothing(0);
    }

    const context = gsap.context(() => {
      const heroItems = root.querySelectorAll("[data-motion-hero]");
      // Keep above-the-fold content visible on first paint. Position-only
      // movement keeps the entrance polished without a blank mobile frame.
      gsap.fromTo(heroItems, { y: 20 }, { y: 0, duration: 0.65, stagger: 0.06, ease: "power3.out", clearProps: "transform" });

      root.querySelectorAll("[data-motion-reveal]").forEach((section) => {
        const items = section.querySelectorAll("[data-motion-item]");
        gsap.fromTo(items.length ? items : section, { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: section, start: "top 84%", once: true } });
      });

      const story = root.querySelector("[data-story]");
      const stage = story?.querySelector("[data-story-stage]");
      const steps = story ? [...story.querySelectorAll("[data-story-step]")] : [];
      if (stage && steps.length) {
        const label = stage.querySelector("strong");
        const activate = (step, index) => {
          stage.dataset.active = String(index);
          steps.forEach((item) => { item.dataset.active = item === step ? "true" : "false"; });
          if (label) label.textContent = step.querySelector("small")?.textContent || "";
        };
        steps.forEach((step, index) => ScrollTrigger.create({ trigger: step, start: "top 58%", end: "bottom 42%", onEnter: () => activate(step, index), onEnterBack: () => activate(step, index) }));
      }

      root.querySelectorAll("[data-parallax]").forEach((item) => gsap.fromTo(item, { y: 28 }, { y: -28, ease: "none", scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: 0.8 } }));
      root.querySelectorAll("[data-film-track]").forEach((track) => gsap.fromTo(track, { xPercent: 1.5 }, { xPercent: -1.5, ease: "none", scrollTrigger: { trigger: track, start: "top bottom", end: "bottom top", scrub: 1 } }));
    }, root);

    const showWithoutMotion = () => {
      context.revert();
      root.querySelectorAll("[data-motion-hero], [data-motion-item], [data-motion-reveal]").forEach((item) => {
        item.style.removeProperty("opacity");
        item.style.removeProperty("visibility");
        item.style.removeProperty("transform");
      });
      if (lenisTick) gsap.ticker.remove(lenisTick);
      lenis?.destroy();
    };
    const handleReducedMotion = (event) => {
      if (event.matches) showWithoutMotion();
    };
    reduced.addEventListener("change", handleReducedMotion);

    const refresh = () => ScrollTrigger.refresh();
    refresh();
    document.fonts?.ready.then(refresh);
    root.querySelectorAll("img").forEach((image) => {
      if (!image.complete) image.addEventListener("load", refresh, { once: true });
    });
    root.querySelectorAll("video").forEach((video) => {
      if (video.readyState < 1) video.addEventListener("loadedmetadata", refresh, { once: true });
    });
    return () => {
      reduced.removeEventListener("change", handleReducedMotion);
      context.revert();
      if (lenisTick) gsap.ticker.remove(lenisTick);
      lenis?.destroy();
    };
  }, []);

  return null;
}
