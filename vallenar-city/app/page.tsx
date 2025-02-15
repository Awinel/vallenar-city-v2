import Image from "next/image";
import Link from "next/link";
import StoreCard from "./components/StoreCard";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Link href="/users">Users</Link>
      <StoreCard />
    </main>
  );
}
