import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import { Nav } from "./ui/nav";

export default function Home() {
  return (
    <main>
      <Header />
      <Nav />
    </main>
  );
}
