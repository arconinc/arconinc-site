import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Package | Arcon Solutions Inc.",
  description: "Custom boxes, bags, and mailers in all shapes and sizes, customized to your brand and vision.",
};

export default function PackagePage() {
  return (
    <ServicePage
      title="Package"
      pageTitle="Package"
      bgImage="/images/package-bg.jpg"
      ctaText="Get a Quote"
      sections={[
        {
          heading: "Package Your Brand",
          body: `<p>Boxes, bags, and mailers in all shapes and sizes customized to your brand and vision.</p>
<p>Packaging is often the first physical touchpoint your customer has with your brand. We help you make that moment count with beautifully designed, structurally sound packaging solutions.</p>`,
        },
        {
          heading: "Packaging Solutions",
          dark: true,
          body: `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:40px 60px;">
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Custom Boxes</h3><p style="text-align:left;">From simple kraft boxes to luxury rigid options, custom printed to your exact specifications.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Shopping Bags</h3><p style="text-align:left;">Paper and plastic shopping bags branded with your logo for retail and gifting.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Mailers</h3><p style="text-align:left;">Poly mailers, bubble mailers, and custom-branded shipping boxes for e-commerce and direct mail.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Tissue &amp; Inserts</h3><p style="text-align:left;">Branded tissue paper, inserts, and fillers that complete the unboxing experience.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Hang Tags &amp; Labels</h3><p style="text-align:left;">Custom hang tags, stickers, and labels that add a professional finish to your products.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Sustainable</h3><p style="text-align:left;">Eco-friendly packaging options made from recycled and renewable materials.</p></div>
</div>`,
        },
      ]}
    />
  );
}
