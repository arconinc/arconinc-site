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
      subtitle="MARKET"
      bgImage="/images/ecommerce-bg.jpg"
      description={[
        "Whether multiple locations or one corporate office our e-commerce platforms centralize all your products into a single shopping cart experience.",
        "We build fully branded online stores where your employees, clients, or customers can easily order branded products — apparel, promotional items, and more — with your logo and brand standards built in.",
        "Our platform manages inventory, fulfillment, and reporting so you can focus on running your business while we handle the rest.",
      ]}
      features={[
        "Branded online company stores",
        "Employee reward & recognition portals",
        "Multi-location ordering",
        "Inventory management",
        "Automated fulfillment",
        "Real-time reporting & analytics",
      ]}
    />
  );
}
