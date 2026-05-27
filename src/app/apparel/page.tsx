import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Apparel | Arcon Solutions Inc.",
  description: "Custom branded apparel — t-shirts, jackets, polos, and more for your team and brand.",
};

export default function ApparelPage() {
  return (
    <ServicePage
      title="Apparel"
      pageTitle="Wear"
      bgImage="/images/apparel-bg.jpg"
      shopHref="https://arconinc.espwebsite.com/productresults/?searchterms=Apparel"
      shopLabel="Shop Apparel"
      sections={[
        {
          heading: "Wear Your Brand",
          body: `<p>From t-shirts to jackets, and everything in-between we ensure that your decorated garment will leave a lasting impression, at unbeatable prices.</p>
<p>Arcon can help your team look and feel like a unified brand — whether you need uniforms, event shirts, promotional outerwear, or premium executive gifts.</p>`,
        },
        {
          heading: "What We Offer",
          dark: true,
          body: `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:40px 60px;">
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">T-Shirts</h3><p style="text-align:left;">Classic and modern cuts, screen printed or embroidered with your logo — perfect for events, giveaways, and uniforms.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Polos &amp; Button Downs</h3><p style="text-align:left;">Professional apparel for your team that represents your brand with class at every customer interaction.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Outerwear</h3><p style="text-align:left;">Jackets, vests, and pullovers that your team and clients will actually want to wear — keeping your brand visible year-round.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Headwear</h3><p style="text-align:left;">Hats, beanies, and visors branded with your logo for every season and occasion.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Bags</h3><p style="text-align:left;">Totes, backpacks, and duffel bags customized with your brand — functional gifts that keep working for you.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Uniforms</h3><p style="text-align:left;">Complete uniform programs for retail, hospitality, healthcare, and corporate environments.</p></div>
</div>`,
        },
      ]}
    />
  );
}
