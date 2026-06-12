"use client";

import { useEffect } from "react";

/**
 * Плавное появление секций при скролле.
 * - Работает через IntersectionObserver
 * - Если JS выключен — контент виден сразу (класс reveal-ready не ставится)
 * - Уважает prefers-reduced-motion
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!targets.length) return;

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((t, i) => {
      t.style.setProperty("--reveal-delay", `${Math.min(i % 3, 2) * 90}ms`);
      observer.observe(t);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
