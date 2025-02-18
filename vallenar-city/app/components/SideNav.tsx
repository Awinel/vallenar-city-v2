import Link from "next/link";
import NavLinks from "../ui/dashboard/nav-links";
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        href="/"
        className="mb-2 flex h-20 items-center  justify-center rounded-md bg-[var(--color-05)] p-4 md:h-52"
      >
        <Image
          alt="Vallenar City Logo"
          src="/logo.svg"
          width={100}
          height={100}
          className="md:w-52 md:h-52 "
        />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-amber-100 md:block"></div>
        <form>
          <button className="flex h-[110px] w-full grow items-center justify-center gap-2 rounded-md bg-amber-200 p-3 text-sm font-medium hover:bg-[var(--color-05)] hover:text-[var(--black)] md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
