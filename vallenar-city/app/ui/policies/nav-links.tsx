"use client";

import Link from "next/link";
import { nunito } from "../fonts";

const links = [
  {
    name: "Acerca de Nosotros",
    href: "/policies/#about-us",
  },
  {
    name: "Terminos y Condiciones",
    href: "/policies/#terms-of-use",
  },
  {
    name: "Politica de Privacidad",
    href: "/policies/#privacy",
  },
  {
    name: "Preguntas Frecuentes",
    href: "/policies/#faq",
  },
];

export const NavLinks = () => {
  return (
    <div className="">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${nunito.className} hover:font-bold`}
          >
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
};
