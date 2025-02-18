import Footer from "../components/Footer";
import Header from "../components/Header";
import { Nav } from "../ui/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <Nav />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
