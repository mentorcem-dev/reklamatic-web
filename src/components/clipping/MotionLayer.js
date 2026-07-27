"use client";

import { useEffect } from "react";
import { animate, createTimeline, stagger } from "animejs";

export default function MotionLayer() {
  useEffect(() => {
    const root = document.querySelector("[data-motion-root]");
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const heroItems = root.querySelectorAll("[data-motion-hero]");
    if (heroItems.length) {
      createTimeline({ defaults: { duration: 900, ease: "outExpo" } })
        .add(heroItems, { opacity: { from: 0 }, y: { from: 32 }, delay: stagger(85) }, 80);
    }

    const revealItems = [...root.querySelectorAll("[data-motion-reveal]")];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        const children = entry.target.querySelectorAll("[data-motion-item]");
        animate(children.length ? children : entry.target, {
          opacity: { from: 0 },
          y: { from: 28 },
          scale: { from: 0.98 },
          delay: children.length ? stagger(75) : 0,
          duration: 780,
          ease: "outExpo",
          onComplete: () => {
            if (children.length) children.forEach((child) => child.style.removeProperty("transform"));
          },
        });
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -7%" });
    revealItems.forEach((item) => observer.observe(item));

    const cleanups = [...root.querySelectorAll("[data-motion-tilt]")].map((card) => {
      const move = (event) => {
        const box = card.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        card.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
        card.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
        card.style.setProperty("--spot-x", `${((x + 0.5) * 100).toFixed(1)}%`);
        card.style.setProperty("--spot-y", `${((y + 0.5) * 100).toFixed(1)}%`);
      };
      const leave = () => {
        card.style.setProperty("--tilt-x", "0deg");
        card.style.setProperty("--tilt-y", "0deg");
      };
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      return () => {
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", leave);
      };
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
