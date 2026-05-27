import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Promo | Arcon Solutions Inc.",
  description: "Custom promotional products for trade shows, corporate gifts, and brand marketing.",
};

export default function PromoPage() {
  return (
    <ServicePage
      title="Promo"
      pageTitle="Promo"
      bgImage="/images/promo-bg.jpg"
      shopHref="https://arconinc.espwebsite.com/"
      shopLabel="Shop Our Products"
      sections={[
        {
          heading: "Promote & Prosper",
          body: `<p>The first rule of your business is: ALWAYS talk about your business. The last thing you need your company to be is some weird secret club. We're marketing experts with vast experience in helping you find and deliver your message.</p>
<p>Whether you're launching a new product, need branded items for trade shows, or corporate/executive/holiday gifts for potential and current clients, we have you covered.</p>`,
        },
        {
          heading: "Arcon Can Help Your Team With",
          dark: true,
          body: `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:40px 60px;">
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Drinkware</h3><p style="text-align:left;">Put your money where their mouths are — Customized cups, mugs, bottles, and tumblers that will put your brand in client's hands and on their minds.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Tech</h3><p style="text-align:left;">From promotional USB car chargers to personalized Bluetooth speakers these promotional technology products are perfect for every customer and employee.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Golf</h3><p style="text-align:left;">Represent your brand on the course. Custom golf gifts are perfect for your golfing customers and company golf events! Stock up on logo golf balls, tees, divot tools and more.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Awards</h3><p style="text-align:left;">Honor, praise and affirm — a well-chosen and finely crafted recognition gift does it all! Promotional awards are lasting mementos that celebrate a job well done.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Tradeshow</h3><p style="text-align:left;">Make your best impression with high-quality, trade show promotional products to draw clients to you.</p></div>
  <div><h3 style="font-family:'Roboto Condensed',Arial,sans-serif;font-weight:700;font-size:18px;color:#fff;text-transform:uppercase;margin-bottom:10px;text-align:center;">Writing</h3><p style="text-align:left;">We use writing utensils every day. Customizable writing instruments like pens, pencils, markers and more!</p></div>
</div>`,
        },
        {
          heading: "Shop Our Products",
          body: `<p>No matter what industry you're in, your brand is everything! Browse our quality on-trend custom printed promotional products at the very best prices to help you achieve success whatever your budget or ideas.</p>`,
        },
      ]}
    />
  );
}
