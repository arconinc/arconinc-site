import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Design Services | Arcon Solutions Inc.",
  description:
    "From rebranding to infographics and websites, our design team delivers intelligent creative solutions.",
};

export default function DesignPage() {
  return (
    <ServicePage
      title="Design Services"
      pageTitle="Design"
      bgImage="/images/design-bg.jpg"
      ctaText="Start a Project"
      sections={[
        {
          heading: "Design That Works",
          body: `<p>If you are looking to re-brand your company, build a website or just need an infographic, our design team will deliver an intelligent solution.</p>
<p>Great design is the foundation of a strong brand. Our creative team brings strategic thinking and artistic excellence to every project — from a single logo to a full brand identity system.</p>
<p>We collaborate closely with our clients to understand their vision and translate it into compelling visual communication that resonates with their audience.</p>`,
        },
        {
          heading: "What We Design",
          dark: true,
          body: `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:40px 60px;">
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Logo &amp; Brand Identity</h3><p style="text-align:left;">Distinctive logos and cohesive brand systems that set your business apart and build recognition.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Website Design</h3><p style="text-align:left;">Modern, responsive websites designed to engage visitors and drive conversions for your business.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Marketing Collateral</h3><p style="text-align:left;">Brochures, flyers, and sales sheets that communicate your value clearly and professionally.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Infographics</h3><p style="text-align:left;">Data visualization and infographics that transform complex information into clear, compelling visuals.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Social Media Graphics</h3><p style="text-align:left;">Scroll-stopping visuals optimized for every platform to grow your online presence.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Trade Show Displays</h3><p style="text-align:left;">Eye-catching booth graphics and display materials that make your brand shine at any event.</p></div>
</div>`,
        },
      ]}
    />
  );
}
