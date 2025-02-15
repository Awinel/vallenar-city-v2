"use client";

import Link from "next/link";
import { nunito } from "./fonts";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Calendario",
    href: "/calendar",
  },
  {
    name: "Tiendas",
    href: "/stores",
  },
  {
    name: "Comida",
    href: "/food",
  },
  {
    name: "Estilo",
    href: "/style",
  },
  {
    name: "Publicaciones",
    href: "/publications",
  },
  {
    name: "Servicios Publicos",
    href: "/services",
  },
];

export const NavLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-row justify-evenly bg-[var(--color-01)] flex-wrap">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `${nunito.className} font-bold text-base text-[var(--white)] p-2 m-3 border-[var(--color-01)] border-b-2 hover:border-b-2 hover:border-[var(--white)] transition duration-500 ease-in-out`,
              {
                "border-b-2 border-[var(--white)]": pathname === link.href,
              }
            )}
          >
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
};
