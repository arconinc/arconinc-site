"use client";

import HeroSlider from "@/components/HeroSlider";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    name: "PROMO",
    icon: "/images/icon-promo.png",
    href: "/promo",
    description:
      "Whether you're launching a new product, need branded items for trade shows, or corporate/executive/holiday gifts for potential and current clients, we have you covered.",
  },
  {
    name: "APPAREL",
    icon: "/images/icon-apparel.png",
    href: "/apparel",
    description:
      "From t-shirts to jackets, and everything in-between we ensure that your decorated garment will leave a lasting impression, at unbeatable prices.",
  },
  {
    name: "DESIGN",
    icon: "/images/icon-design.png",
    href: "/design",
    description:
      "If you are looking to re-brand your company, build a website or just need a infographic, our design team will deliver an intelligent solution.",
  },
  {
    name: "PACKAGE",
    icon: "/images/icon-package.png",
    href: "/package",
    description:
      "Boxes, bags, and mailers in all shapes and sizes customized to your brand and vision.",
  },
  {
    name: "PRINT",
    icon: "/images/icon-print.png",
    href: "/print",
    description:
      "From letterhead, stationary and business cards to high-end direct mail, brochures and catalogs, we can source and deliver the very best prices.",
  },
  {
    name: "ECOMMERCE",
    icon: "/images/icon-ecommerce.png",
    href: "/e-commerce",
    description:
      "Whether multiple locations or one corporate office our e-commerce platforms centralize all your products into a single shopping cart experience.",
  },
];

const testimonials = [
  {
    quote:
      "Arcon has allowed our company to be more efficient. Our employees can now enjoy the luxury of an internal company store where they can easily purchase apparel and promotional items, all tied in with our brand.",
    author: "Bay & Bay Transportation",
  },
  {
    quote:
      "Arcon is a great company with a staff that goes above and beyond to help us with our needs. I have been working with Arcon for over ten years and appreciate the service they have provided to our company.",
    author: "Associated Bag",
  },
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
          color: "#555",
          marginBottom: "20px",
          textAlign: "left",
        }}
      >
        &ldquo;{testimonials[current].quote}&rdquo;
      </p>
      <p
        style={{
          fontFamily: "'Roboto Condensed', Arial, sans-serif",
          fontWeight: 700,
          fontSize: "15px",
          color: "#333",
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        {testimonials[current].author}
      </p>
      {/* Dot pagination */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Testimonial ${i + 1}`}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              padding: 0,
              background: i === current ? "#7f3d97" : "#ccc",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Our Thought Process — white bg, 110px top/bottom padding matching vc_custom_1563553841985 */}
      <section
        style={{
          background: "#fff",
          padding: "110px 30px",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Roboto Condensed', Arial, sans-serif",
              fontWeight: 700,
              fontSize: "35px",
              lineHeight: "44px",
              color: "#333",
              textTransform: "uppercase",
              marginBottom: "35px",
              marginTop: 0,
            }}
          >
            Our Thought Process
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555",
              margin: 0,
              textAlign: "left",
            }}
          >
            We strive to think differently, outside the box, breaking the mold of typical business
            relationships. In the pursuit of success, we work side-by-side with our clients;
            building their brand and agenda through our core values of service and commitment.
          </p>
        </div>
      </section>

      {/* Arcon Can Help — dark bg with triangle separators top and bottom */}
      <div style={{ position: "relative" }}>
        {/* Top triangle separator (white triangle pointing down into dark section) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
            lineHeight: 0,
            zIndex: 1,
          }}
        >
          <svg
            viewBox="0 0 1200 45"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "45px" }}
          >
            <polygon points="0,0 1200,0 0,45" fill="#fff" />
          </svg>
        </div>

        <section
          style={{
            background: "#2d2a26",
            padding: "100px 30px 170px",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "30px", paddingRight: "30px" }}>
            <h2
              style={{
                fontFamily: "'Roboto Condensed', Arial, sans-serif",
                fontWeight: 700,
                fontSize: "35px",
                lineHeight: "44px",
                color: "#fff",
                textTransform: "uppercase",
                textAlign: "center",
                marginTop: "50px",
                marginBottom: "85px",
              }}
            >
              Arcon Can Help Your Team With
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "40px 60px",
              }}
            >
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  style={{ textDecoration: "none", display: "block" }}
                >
                  <div style={{ textAlign: "center", marginBottom: "15px" }}>
                    <Image
                      src={service.icon}
                      alt={service.name}
                      width={75}
                      height={75}
                      style={{ display: "inline-block" }}
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Roboto Condensed', Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#fff",
                      textTransform: "uppercase",
                      marginBottom: "10px",
                      marginTop: 0,
                      textAlign: "center",
                    }}
                  >
                    {service.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.7",
                      color: "#bbb",
                      margin: 0,
                      textAlign: "left",
                    }}
                  >
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom triangle separator (white triangle pointing up from dark section) */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
            lineHeight: 0,
            zIndex: 1,
          }}
        >
          <svg
            viewBox="0 0 1200 45"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "45px" }}
          >
            <polygon points="1200,45 0,45 1200,0" fill="#fff" />
          </svg>
        </div>
      </div>

      {/* Testimonials — light bg, carousel */}
      <section
        style={{
          background: "#f6f6f6",
          padding: "85px 30px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Roboto Condensed', Arial, sans-serif",
              fontWeight: 700,
              fontSize: "35px",
              lineHeight: "44px",
              color: "#333",
              textTransform: "uppercase",
              textAlign: "center",
              marginTop: 0,
              marginBottom: "15px",
            }}
          >
            Testimonials
          </h2>
          <TestimonialCarousel />
        </div>
      </section>
    </>
  );
}
