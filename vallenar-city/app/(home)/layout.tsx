import type { Metadata } from "next";
import "../globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Nav } from "../ui/nav";

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
      <body className="">
        <Header />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
