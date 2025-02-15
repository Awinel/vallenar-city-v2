import type { Metadata } from "next";
import "./globals.css";
import { Lilita_One, Nunito } from "next/font/google";

const lilitaOne = Lilita_One({
  variable: "--font-lilita-one",
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Vallenar City",
  description: "Pagina Web para la Ciudad de Vallenar, Chile. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lilitaOne.variable} ${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
