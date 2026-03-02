import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/providers/MotionProvider";
import { StudioModeProvider } from "@/context/StudioModeContext";
import OnAirLoaderWrapper from "@/components/OnAirLoaderWrapper";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mekhi Carter — Television Journalist & Media Producer",
  description:
    "Portfolio of Mekhi Carter, television journalist, media producer, and community storyteller. Production experience at Sherri (Lionsgate/Debmar-Mercury) and The New York Post | Page Six.",
  keywords: [
    "Mekhi Carter",
    "television journalist",
    "media producer",
    "broadcast journalism",
    "Monmouth University",
    "Sherri",
    "Page Six",
  ],
  openGraph: {
    title: "Mekhi Carter — Television Journalist & Media Producer",
    description:
      "Television journalist, media producer, and community storyteller from Millville, NJ.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <StudioModeProvider>
          <MotionProvider>
            <CustomCursor />
            <OnAirLoaderWrapper />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </MotionProvider>
        </StudioModeProvider>
      </body>
    </html>
  );
}
