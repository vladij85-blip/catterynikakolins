"use client";

import { useEffect, useRef } from "react";

/**
 * Плюшевый золотой британец, нарисованный в SVG.
 * Фишка: изумрудные зрачки следят за курсором.
 */
export default function CatHero() {
  const leftPupil = useRef<SVGCircleElement>(null);
  const rightPupil = useRef<SVGCircleElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const eyes = [
      { ref: leftPupil, cx: 150, cy: 195 },
      { ref: rightPupil, cx: 250, cy: 195 },
    ];

    const onMove = (e: PointerEvent) => {
      const svg = svgRef.current;
      if (!svg) return;
      const rect = svg.getBoundingClientRect();
      for (const eye of eyes) {
        const ex = rect.left + (eye.cx / 400) * rect.width;
        const ey = rect.top + (eye.cy / 400) * rect.height;
        const angle = Math.atan2(e.clientY - ey, e.clientX - ex);
        const dist = Math.min(7, Math.hypot(e.clientX - ex, e.clientY - ey) / 30);
        eye.ref.current?.setAttribute("cx", String(eye.cx + Math.cos(angle) * dist));
        eye.ref.current?.setAttribute("cy", String(eye.cy + Math.sin(angle) * dist));
      }
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="cat-stage" aria-hidden="true">
      <div className="cat-blob" />
      <svg
        ref={svgRef}
        className="cat-svg"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Золотой британский кот с изумрудными глазами"
      >
        {/* уши */}
        <path d="M95 130 Q80 55 135 80 Q160 92 168 120 Z" fill="#e8951a" />
        <path d="M305 130 Q320 55 265 80 Q240 92 232 120 Z" fill="#e8951a" />
        <path d="M105 118 Q98 72 138 90 Q155 100 158 118 Z" fill="#ffd9a3" />
        <path d="M295 118 Q302 72 262 90 Q245 100 242 118 Z" fill="#ffd9a3" />
        {/* голова */}
        <ellipse cx="200" cy="220" rx="150" ry="138" fill="#f7b04a" />
        <ellipse cx="200" cy="250" rx="118" ry="98" fill="#ffd9a3" opacity="0.7" />
        {/* щёки-шиншилловый типпинг */}
        <ellipse cx="92" cy="235" rx="34" ry="44" fill="#e8951a" opacity="0.5" />
        <ellipse cx="308" cy="235" rx="34" ry="44" fill="#e8951a" opacity="0.5" />
        {/* глаза */}
        <ellipse cx="150" cy="195" rx="34" ry="36" fill="#0c5e42" />
        <ellipse cx="250" cy="195" rx="34" ry="36" fill="#0c5e42" />
        <ellipse cx="150" cy="195" rx="28" ry="30" fill="#2bb98a" />
        <ellipse cx="250" cy="195" rx="28" ry="30" fill="#2bb98a" />
        <circle ref={leftPupil} cx="150" cy="195" r="11" fill="#1d1410" />
        <circle ref={rightPupil} cx="250" cy="195" r="11" fill="#1d1410" />
        <circle cx="140" cy="184" r="6" fill="#ffffff" opacity="0.9" />
        <circle cx="240" cy="184" r="6" fill="#ffffff" opacity="0.9" />
        {/* нос и рот */}
        <path d="M188 248 Q200 240 212 248 Q206 264 200 264 Q194 264 188 248 Z" fill="#ff8fa3" />
        <path d="M200 264 Q200 278 184 282" stroke="#3a2a1e" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M200 264 Q200 278 216 282" stroke="#3a2a1e" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/* усы */}
        <g stroke="#3a2a1e" strokeWidth="4" strokeLinecap="round" opacity="0.75">
          <path d="M120 252 Q80 246 48 232" fill="none" />
          <path d="M120 266 Q78 268 44 262" fill="none" />
          <path d="M280 252 Q320 246 352 232" fill="none" />
          <path d="M280 266 Q322 268 356 262" fill="none" />
        </g>
        {/* лапки */}
        <ellipse cx="140" cy="356" rx="44" ry="26" fill="#f7b04a" />
        <ellipse cx="260" cy="356" rx="44" ry="26" fill="#f7b04a" />
        <g fill="#ff8fa3" opacity="0.85">
          <circle cx="126" cy="354" r="6" />
          <circle cx="140" cy="350" r="6" />
          <circle cx="154" cy="354" r="6" />
          <circle cx="246" cy="354" r="6" />
          <circle cx="260" cy="350" r="6" />
          <circle cx="274" cy="354" r="6" />
        </g>
      </svg>
    </div>
  );
}
