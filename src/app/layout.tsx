import type { Metadata } from "next";
import { Inter, Cinzel, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Pandit Gangadhar Kotagi | Renowned Vedic Astrologer & Spiritual Consultant",
  description: "Experience scientific Vedic astrology calculations, exact planetary degree analysis, and ethical spiritual guidance by Dr. Pandit Gangadhar Kotagi. Over 20 years of professional experience.",
  keywords: ["Vedic Astrology", "Astrologist", "Dr. Pandit Gangadhar Kotagi", "Horoscope Analysis", "KP System", "Vastu Shastra", "Scientific Astrology"],
  openGraph: {
    title: "Dr. Pandit Gangadhar Kotagi | Renowned Vedic Astrologer & Spiritual Consultant",
    description: "Experience scientific Vedic astrology calculations, exact planetary degree analysis, and ethical spiritual guidance by Dr. Pandit Gangadhar Kotagi.",
    type: "website",
    locale: "en_IN",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} ${cormorant.variable} ${greatVibes.variable} scroll-smooth`}
    >
      <body className="bg-[#080808] text-[#FAF8F2] font-sans antialiased min-h-screen selection:bg-[#C8A24C] selection:text-[#080808]">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
