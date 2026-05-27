import type { Metadata } from "next";
import { Roboto, Roboto_Condensed, Poppins, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arconinc.com"),
  title: "Arcon Solutions | Build your brand, grow your brand!",
  description:
    "Arcon Solutions, Inc. is a creative marketing company offering custom promotional products, branded apparel, design services and more!",
  keywords: "promotional products, branded apparel, design services, printing, packaging, e-commerce, marketing",
  openGraph: {
    title: "Arcon Solutions | Build your brand, grow your brand!",
    description:
      "Arcon Solutions, Inc. is a creative marketing company offering custom promotional products, branded apparel, design services and more!",
    siteName: "Arcon Solutions Inc.",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/arcon-logo.png", width: 700, height: 250 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@arconsolutions",
    creator: "@arconsolutions",
  },
  verification: {
    google: "FANOUeFTQO0PLE5AWXEPDOdYpOV8U4Lbkv_6eT8i5GU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoCondensed.variable} ${poppins.variable} ${permanentMarker.variable} h-full`}>
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <meta name="theme-color" content="#6b1e98" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
