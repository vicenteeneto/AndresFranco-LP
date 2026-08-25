"use client";

import { useEffect } from "react";

/**
 * A single IntersectionObserver for the whole page.
 *
 * Server components opt in by adding `data-reveal` (or `data-reveal="image"`)
 * to any element — no client component wrapper, no extra JavaScript per
 * section. Elements are unobserved once revealed, and users who prefer
 * reduced motion never see a transition (handled in CSS).
 */
export default function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (nodes.length === 0) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    nodes.forEach((n) => {
      // Anything already inside the first viewport reveals immediately,
      // so the hero never flashes empty.
      if (n.getBoundingClientRect().top < window.innerHeight * 0.92) {
        n.classList.add("is-visible");
      } else {
        observer.observe(n);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
