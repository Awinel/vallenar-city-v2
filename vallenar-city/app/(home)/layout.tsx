import Footer from "../components/Footer";
import Header from "../components/Header";
import { Nav } from "../ui/nav";

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
