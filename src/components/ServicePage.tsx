import Link from "next/link";

interface ServicePageProps {
  title: string;
  pageTitle: string;
  bgImage: string;
  sections: Array<{
    heading: string;
    body: string;
    dark?: boolean;
  }>;
  shopHref?: string;
  shopLabel?: string;
  ctaText?: string;
}

const btnStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "50px",
  padding: "16px 34px",
  background: "#7f3d97",
  color: "#fff",
  fontFamily: "'Roboto Condensed', Arial, sans-serif",
  fontWeight: 700,
  fontSize: "14px",
  letterSpacing: "3px",
  textDecoration: "none",
  textTransform: "uppercase" as const,
  border: "none",
  cursor: "pointer",
  transition: "background 0.2s ease",
};

export default function ServicePage({
  title,
  pageTitle,
  bgImage,
  sections,
  shopHref,
  shopLabel,
  ctaText,
}: ServicePageProps) {
  return (
    <>
      {/* Hero — same overlay style as homepage slider */}
      <section
        style={{
          position: "relative",
          minHeight: "420px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundImage: `url(${bgImage})`,
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
            {pageTitle}
          </h1>
        </div>
      </section>

      {/* Content sections */}
      {sections.map((section, i) => (
        <section
          key={i}
          style={{
            background: section.dark ? "#2d2a26" : "#fff",
            padding: "80px 30px",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            {section.heading && (
              <h2
                style={{
                  fontFamily: "'Roboto Condensed', Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(24px, 4vw, 40px)",
                  textTransform: "uppercase",
                  color: section.dark ? "#fff" : "#333",
                  marginTop: 0,
                  marginBottom: "30px",
                  textAlign: "center",
                }}
              >
                {section.heading}
              </h2>
            )}
            <div
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: section.dark ? "#bbb" : "#555",
                maxWidth: "800px",
                margin: "0 auto",
              }}
              dangerouslySetInnerHTML={{ __html: section.body }}
            />
          </div>
        </section>
      ))}

      {/* Shop / CTA buttons */}
      {(shopHref || ctaText) && (
        <section
          style={{
            background: "#fff",
            padding: "40px 30px 80px",
            textAlign: "center",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
            {shopHref && (
              <a
                href={shopHref}
                target="_blank"
                rel="noopener noreferrer"
                style={btnStyle}
              >
                {shopLabel ?? "Shop Now"}
              </a>
            )}
            {ctaText && (
              <Link href="/contact" style={btnStyle}>
                {ctaText}
              </Link>
            )}
          </div>
        </section>
      )}
    </>
  );
}
