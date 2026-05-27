"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    bg: "/images/promo-bg.jpg",
    action: "PROMOTE",
    href: "/promo",
    shopHref: "https://arconinc.espwebsite.com/",
    shopLabel: "SHOP PROMO",
  },
  {
    bg: "/images/apparel-bg.jpg",
    action: "WEAR",
    href: "/apparel",
    shopHref: "https://arconinc.espwebsite.com/productresults/?searchterms=Apparel",
    shopLabel: "SHOP APPAREL",
  },
  {
    bg: "/images/print-bg.jpg",
    action: "PRINT",
    href: "/print",
    shopHref: null,
    shopLabel: null,
  },
  {
    bg: "/images/package-bg.jpg",
    action: "PACKAGE",
    href: "/package",
    shopHref: null,
    shopLabel: null,
  },
  {
    bg: "/images/ecommerce-bg.jpg",
    action: "MARKET",
    href: "/e-commerce",
    shopHref: null,
    shopLabel: null,
  },
  {
    bg: "/images/design-bg.jpg",
    action: "DESIGN",
    href: "/design",
    shopHref: null,
    shopLabel: null,
  },
];

// Button style pulled verbatim from static-site.js a.sr7-layer rule
const btnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50px",
  padding: "16px 34px",
  background: "#7f3d97",
  color: "#fff",
  font: "700 14px/1 'Roboto Condensed', Arial, sans-serif",
  letterSpacing: "3px",
  textDecoration: "none",
  textTransform: "uppercase",
  transition: "background 0.2s ease, transform 0.2s ease",
};

// sr7-txt style pulled verbatim from static-site.js sr7-txt rule
const txtStyle: React.CSSProperties = {
  display: "block",
  maxWidth: "min(1120px, 94vw)",
  fontFamily: "Poppins, Arial, sans-serif",
  fontWeight: 700,
  fontSize: "clamp(52px, 11vw, 168px)",
  lineHeight: 0.78,
  color: "#fff",
  textTransform: "uppercase",
  letterSpacing: 0,
  textShadow: "0 10px 34px rgba(0,0,0,.24)",
};

function hoverOn(el: HTMLElement) {
  el.style.background = "#710a96";
  el.style.transform = "translateY(-1px)";
}
function hoverOff(el: HTMLElement) {
  el.style.background = "#7f3d97";
  el.style.transform = "translateY(0)";
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setTransitioning(false);
    }, 350);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    // Outer wrapper — matches sr7-module.static-sr7-fallback
    <section
      style={{
        display: "block",
        position: "relative",
        overflow: "hidden",
        background: "#2d2926",
        minHeight: "620px",
        height: "100vh",
        color: "#fff",
      }}
    >
      {/* Background images — .static-sr7-bg: cover, center, scale(1.02) */}
      {slides.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${s.bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transform: "scale(1.02)",
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.7s ease",
          }}
        />
      ))}

      {/* Overlay — .static-sr7-bg::after: rgba(22,20,19,.24) */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(22,20,19,.24)" }} />

      {/* Content — left-aligned to match Revolution Slider layer positioning */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          textAlign: "left",
          padding: "clamp(60px,9vw,120px) 24px 96px",
          zIndex: 2,
          opacity: transitioning ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      >
        {/* Action word first (visually dominant) */}
        <div style={txtStyle}>{slide.action}</div>

        {/* YOUR BRAND. — purple dot per original HTML */}
        <div style={txtStyle}>
          YOUR BRAND<span style={{ color: "#7f3d97" }}>.</span>
        </div>

        {/* Buttons — left-aligned */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "14px",
            marginTop: "clamp(26px,4vw,48px)",
          }}
        >
          {slide.shopHref && (
            <a
              href={slide.shopHref}
              target="_blank"
              rel="noopener noreferrer"
              style={btnStyle}
              onMouseEnter={(e) => hoverOn(e.currentTarget)}
              onMouseLeave={(e) => hoverOff(e.currentTarget)}
            >
              {slide.shopLabel}
            </a>
          )}
          <Link
            href={slide.href}
            style={btnStyle}
            onMouseEnter={(e) => hoverOn(e.currentTarget)}
            onMouseLeave={(e) => hoverOff(e.currentTarget)}
          >
            LEARN MORE
          </Link>
        </div>
      </div>

      {/* Dot pagination */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          zIndex: 10,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              padding: 0,
              background: i === current ? "#7f3d97" : "rgba(255,255,255,0.6)",
              transform: i === current ? "scale(1.25)" : "scale(1)",
              transition: "background 0.3s, transform 0.3s",
            }}
          />
        ))}
      </div>

      {/* Prev arrow */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          left: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(255,255,255,0.7)",
          padding: "8px",
        }}
      >
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Next slide"
        style={{
          position: "absolute",
          right: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "rgba(255,255,255,0.7)",
          padding: "8px",
        }}
      >
        <svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
