import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Print | Arcon Solutions Inc.",
  description: "From business cards to catalogs, Arcon delivers high-quality print solutions at the very best prices.",
};

export default function PrintPage() {
  return (
    <ServicePage
      title="Print"
      pageTitle="Print"
      bgImage="/images/print-bg.jpg"
      ctaText="Get a Quote"
      sections={[
        {
          heading: "Print Your Brand",
          body: `<p>From letterhead, stationary and business cards to high-end direct mail, brochures and catalogs, we can source and deliver the very best prices.</p>
<p>Our print solutions cover everything your business needs to communicate professionally — whether it's a single-page flyer or a full product catalog.</p>`,
        },
        {
          heading: "What We Print",
          dark: true,
          body: `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:40px 60px;">
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Business Cards</h3><p style="text-align:left;">Make a lasting first impression with premium business cards in a variety of finishes.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Brochures &amp; Flyers</h3><p style="text-align:left;">Eye-catching marketing materials designed to inform and inspire your audience.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Direct Mail</h3><p style="text-align:left;">High-impact direct mail campaigns that deliver your message directly to your target audience.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Catalogs</h3><p style="text-align:left;">Professionally printed catalogs and booklets showcasing your products and services.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Stationery</h3><p style="text-align:left;">Letterhead, envelopes, and notepads that reinforce your brand in every communication.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Signage</h3><p style="text-align:left;">Banners, posters, and signs for trade shows, events, and retail environments.</p></div>
</div>`,
        },
      ]}
    />
  );
}
