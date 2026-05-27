"use client";

import { useState } from "react";

const inputStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "12px 16px",
  border: "1px solid #ddd",
  background: "#fff",
  color: "#333",
  fontSize: "14px",
  marginBottom: "16px",
  boxSizing: "border-box",
  outline: "none",
  fontFamily: "inherit",
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    services: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Contact from ${form.company || "website"} — ${form.services || "General inquiry"}`,
          message: `Company: ${form.company}\nServices Interested In: ${form.services}\n\n${form.message}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", services: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero — matches Revolution Slider style for contact page */}
      <section
        style={{
          position: "relative",
          minHeight: "420px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: "url(/images/contact-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(22,20,19,0.55)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "120px 24px 80px" }}>
          <h1
            style={{
              fontFamily: "'Roboto Condensed', Arial, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(52px, 11vw, 120px)",
              lineHeight: 0.9,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: 0,
              textShadow: "0 10px 34px rgba(0,0,0,.24)",
              margin: 0,
            }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact info — 3 columns with Permanent Marker headings */}
      <section
        style={{
          background: "#fff",
          padding: "80px 30px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Permanent Marker', cursive",
                fontWeight: 400,
                fontSize: "30px",
                marginBottom: "20px",
                marginTop: 0,
                color: "#333",
              }}
            >
              Our Location
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555", margin: 0 }}>
              2915 Commers Drive, Suite 1500
              <br />
              Eagan, MN 55121
            </p>
          </div>
          <div>
            <h2
              style={{
                fontFamily: "'Permanent Marker', cursive",
                fontWeight: 400,
                fontSize: "30px",
                marginBottom: "20px",
                marginTop: 0,
                color: "#333",
              }}
            >
              Give Us a Call
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555", margin: 0 }}>
              office: 952.882.6069
              <br />
              fax: 952.882.5279
            </p>
          </div>
          <div>
            <h2
              style={{
                fontFamily: "'Permanent Marker', cursive",
                fontWeight: 400,
                fontSize: "30px",
                marginBottom: "20px",
                marginTop: 0,
                color: "#333",
              }}
            >
              Drop a Line
            </h2>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555", margin: 0 }}>
              <a
                href="mailto:info@arconinc.com"
                style={{ color: "#555", textDecoration: "none" }}
              >
                info@arconinc.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact form — "LET'S WORK TOGETHER" */}
      <section
        style={{
          background: "#fff",
          padding: "60px 30px 100px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Roboto Condensed', Arial, sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              textTransform: "uppercase",
              color: "#333",
              marginTop: "25px",
              marginBottom: "20px",
            }}
          >
            Let&apos;s Work Together
          </h2>
          <p style={{ fontSize: "15px", color: "#555", marginBottom: "40px" }}>
            Please fill out the form below and a team member will get back to you as soon as possible!
          </p>

          {status === "success" ? (
            <p style={{ fontSize: "16px", color: "#5a9e5a", padding: "20px" }}>
              Thank you! A team member will be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                style={inputStyle}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                required
                style={inputStyle}
              />
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your Company"
                style={inputStyle}
              />
              <input
                type="text"
                name="services"
                value={form.services}
                onChange={handleChange}
                placeholder="What services are you interested in?"
                style={inputStyle}
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project!"
                rows={8}
                style={{ ...inputStyle, resize: "vertical" }}
              />
              {status === "error" && (
                <p style={{ color: "#c00", fontSize: "13px", marginBottom: "12px" }}>
                  Something went wrong. Please email us at{" "}
                  <a href="mailto:info@arconinc.com">info@arconinc.com</a>.
                </p>
              )}
              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    display: "inline-block",
                    padding: "14px 40px",
                    background: "#7f3d97",
                    color: "#fff",
                    fontFamily: "'Roboto Condensed', Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#6b1e98")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#7f3d97")}
                >
                  {status === "loading" ? "Sending…" : "Send It"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
