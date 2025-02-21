"use client";

import Link from "next/link";
import { nunito } from "../fonts";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Calendario",
    href: "/dashboard/calendar-admin",
  },
  {
    name: "Tiendas",
    href: "/dashboard/stores-admin",
  },
  {
    name: "Comida",
    href: "/dashboard/food-admin/",
  },
  {
    name: "Estilo",
    href: "/dashboard/style-admin",
  },
  {
    name: "Publicaciones",
    href: "/dashboard/publications-admin",
  },
  {
    name: "Servicios Publicos",
    href: "/dashboard/services-admin",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap md:inline">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `${nunito.className} flex h-[48px] grow items-center justify-center rounded-md bg-amber-200 p-3 text-sm font-medium hover:bg-[var(--color-05)] hover:text-[var(--black)] my-1 mx-1 md:mx-0 md:flex-none md:justify-start md:p-2 md:px-3`,
              {
                "bg-amber-400": pathname === link.href,
              }
            )}
          >
            <p className="p-2 m-1]">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
