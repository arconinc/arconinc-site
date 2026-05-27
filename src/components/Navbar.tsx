"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/promo", label: "Promo" },
  { href: "/apparel", label: "Apparel" },
  { href: "/print", label: "Print" },
  { href: "/package", label: "Package" },
  { href: "/e-commerce", label: "E-Commerce" },
  { href: "/design", label: "Design" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

function FacebookIcon() {
  return (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when overlay open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Fixed header bar */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: "90px",
        }}
      >
        {/* Logo */}
        <Link href="/" aria-label="Arcon Solutions Inc. – Home">
          <Image
            src="/images/nav-logo.png"
            alt="Arcon Solutions Inc."
            width={250}
            height={72}
            priority
            style={{ display: "block" }}
          />
        </Link>

        {/* Right side: social icons + hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href="https://www.facebook.com/Arcon.Solutions/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook page opens in new window"
            style={{ color: "#fff", lineHeight: 0 }}
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/arconsolutions/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram page opens in new window"
            style={{ color: "#fff", lineHeight: 0 }}
          >
            <InstagramIcon />
          </a>
          <a
            href="https://twitter.com/arconsolutions"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X page opens in new window"
            style={{ color: "#fff", lineHeight: 0 }}
          >
            <XIcon />
          </a>

          {/* Hamburger button */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            style={{
              background: "#7f3d97",
              border: "2px solid #7f3d97",
              borderRadius: 0,
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
              width: "46px",
              height: "46px",
              padding: "10px",
              lineHeight: 0,
            }}
          >
            <span style={{ display: "block", width: "20px", height: "2px", background: "#fff" }} />
            <span style={{ display: "block", width: "20px", height: "2px", background: "#fff" }} />
            <span style={{ display: "block", width: "20px", height: "2px", background: "#fff" }} />
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(22,17,19,0.97)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              padding: "8px",
              lineHeight: 0,
            }}
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <nav>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, textAlign: "center" }}>
              {navLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: "8px" }}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      fontFamily: "'Roboto Condensed', Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: "28px",
                      letterSpacing: "3px",
                      textTransform: "uppercase",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "10px 40px",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#b06ec7")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
