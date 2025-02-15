import { lilitaOne } from "../ui/fonts";

export default function Page() {
  return (
    <main>
      <h1 className={`${lilitaOne.className} text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3"></div>
    </main>
  );
}
