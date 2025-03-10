import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Nav } from "../ui/nav";

export const metadata: Metadata = {
  title: "Vallenar City",
  description: "Pagina Web para la Ciudad de Vallenar, Chile. ",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <Nav />
      {children}
      <Footer />
    </>
  );
}
