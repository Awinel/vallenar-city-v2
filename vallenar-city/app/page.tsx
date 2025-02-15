import Footer from "./components/Footer";
import Header from "./components/Header";
import CalendarCard from "./ui/calendar/CalendarCard";
import { Nav } from "./ui/nav";

export default function Home() {
  return (
    <main>
      <Header />
      <Nav />
      <div className="flex flex-row m-5 gap-5 flex-wrap">
        <CalendarCard />
      </div>
      <Footer />
    </main>
  );
}
