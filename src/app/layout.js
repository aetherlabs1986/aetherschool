import { Inter, Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollObserver from "@/components/ScrollObserver";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Aether School | Formación en IA para personas reales",
  description:
    "Talleres y programas de inteligencia artificial adaptados a cada persona. Para mujeres, mayores, jóvenes, profesores, médicos y empresas. Sin tecnicismos.",
  keywords: "IA, inteligencia artificial, formación, talleres, cursos, Aether School, Aether Labs",
  openGraph: {
    title: "Aether School | Formación en IA para personas reales",
    description: "Talleres y programas de inteligencia artificial adaptados a cada persona.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${syne.variable} ${space.variable} ${mono.variable}`}>
      <body>
        <ScrollObserver />
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
