import Footer from "../components/Footer";
import Header from "../components/Header";
import { Nav } from "../ui/nav";
import StoreList from "../components/StoreList";

export default function Home() {
  return (
    <main>
      <Header />
      <Nav />
      <StoreList />
      <Footer />
    </main>
  );
}
