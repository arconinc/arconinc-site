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
      subtitle="DESIGN"
      bgImage="/images/design-bg.jpg"
      description={[
        "If you are looking to re-brand your company, build a website or just need an infographic, our design team will deliver an intelligent solution.",
        "Great design is the foundation of a strong brand. Our creative team brings strategic thinking and artistic excellence to every project — from a single logo to a full brand identity system.",
        "We collaborate closely with our clients to understand their vision and translate it into compelling visual communication that resonates with their audience.",
      ]}
      features={[
        "Logo & brand identity design",
        "Website design & development",
        "Marketing collateral",
        "Infographics & data visualization",
        "Social media graphics",
        "Trade show displays",
      ]}
    />
  );
}
