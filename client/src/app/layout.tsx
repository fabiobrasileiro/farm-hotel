import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fontDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const fontSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fazenda Hotel",
  description: "Sistema de gestão completo para hospedagens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontDisplay.variable} ${fontSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}