import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "E-Commerce Solutions | Arcon Solutions Inc.",
  description:
    "Custom e-commerce platforms that centralize all your branded products into a single shopping cart experience.",
};

export default function ECommercePage() {
  return (
    <ServicePage
      title="E-Commerce Solutions"
      pageTitle="Market"
      bgImage="/images/ecommerce-bg.jpg"
      ctaText="Get Started"
      sections={[
        {
          heading: "Your Brand, Online",
          body: `<p>Whether multiple locations or one corporate office our e-commerce platforms centralize all your products into a single shopping cart experience.</p>
<p>We build fully branded online stores where your employees, clients, or customers can easily order branded products — apparel, promotional items, and more — with your logo and brand standards built in.</p>
<p>Our platform manages inventory, fulfillment, and reporting so you can focus on running your business while we handle the rest.</p>`,
        },
        {
          heading: "Platform Features",
          dark: true,
          body: `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:40px 60px;">
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Branded Company Stores</h3><p style="text-align:left;">Fully branded online storefronts that reflect your identity and simplify product ordering for your team.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Reward &amp; Recognition</h3><p style="text-align:left;">Employee reward portals that motivate your team with curated branded merchandise and incentives.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Multi-Location Ordering</h3><p style="text-align:left;">Support for multiple offices and locations from a single platform, keeping ordering consistent company-wide.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Inventory Management</h3><p style="text-align:left;">Real-time inventory tracking so you always know what's in stock and when to reorder.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Automated Fulfillment</h3><p style="text-align:left;">Orders picked, packed, and shipped automatically — no manual processing required on your end.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Reporting &amp; Analytics</h3><p style="text-align:left;">Real-time dashboards and reports giving you full visibility into orders, spend, and trends.</p></div>
</div>`,
        },
      ]}
    />
  );
}
