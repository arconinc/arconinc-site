"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer
      style={{
        background: "#2d2a26",
        color: "#fff",
      }}
    >
      {/* Main footer content — 3 equal columns matching original wf-1-3 layout */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 30px 50px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px",
        }}
      >
        {/* Column 1: Logo + address */}
        <div>
          <Image
            src="/images/nav-logo.png"
            alt="Arcon Solutions Inc."
            width={250}
            height={72}
            style={{ display: "block", marginBottom: "20px" }}
          />
          <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#ccc", margin: 0 }}>
            2915 Commers Drive, Suite 1500,
            <br />
            Eagan, MN 55121
          </p>
          <p style={{ fontSize: "14px", color: "#ccc", marginTop: "10px" }}>952.882.6069</p>
        </div>

        {/* Column 2: Empty (matches original site) */}
        <div />

        {/* Column 3: Newsletter signup */}
        <div>
          <h3
            style={{
              fontFamily: "'Roboto Condensed', Arial, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "20px",
              marginTop: 0,
            }}
          >
            Sign-Up to Stay Updated
          </h3>
          {status === "success" ? (
            <p style={{ color: "#a0e080", fontSize: "14px" }}>Thank you for signing up!</p>
          ) : (
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail *"
                required
                style={{
                  display: "block",
                  width: "100%",
                  padding: "10px 14px",
                  background: "#fff",
                  border: "1px solid #ccc",
                  color: "#333",
                  fontSize: "14px",
                  marginBottom: "12px",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  display: "inline-block",
                  padding: "12px 30px",
                  background: "#7f3d97",
                  color: "#fff",
                  fontFamily: "'Roboto Condensed', Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#6b1e98")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#7f3d97")}
              >
                {status === "loading" ? "Submitting…" : "Submit"}
              </button>
              {status === "error" && (
                <p style={{ color: "#f88", fontSize: "12px", marginTop: "8px" }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "14px 30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "12px",
            color: "#888",
          }}
        >
          <span>© 2019 Arcon Solutions, Inc. All Rights Reserved.</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/media" style={{ color: "#888", textDecoration: "none" }}>
              Media
            </Link>
            <Link href="/contact" style={{ color: "#888", textDecoration: "none" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
