import type { Metadata } from "next";
import { Archivo_Black, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";


const archivoBlack = Archivo_Black({
  variable: "--font-archivo",
  weight: "400",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grit Digital Performance",
  description: "Built on Grit.",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${libreBaskerville.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
