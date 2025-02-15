import Link from "next/link";
import React from "react";
import Copyright from "../ui/Copyright";
import { NavLinks } from "../ui/policies/nav-links";

const Footer = () => {
  return (
    <footer className="grid grid-cols-3 m-0 text-sm text-[var(--white)] bg-[var(--color-01)]">
      <div className="flex flex-col text-center m-2 justify-center">
        <NavLinks />
      </div>
      <Copyright />
      <div className="flex flex-col text-center m-2 justify-center">
        <Link href="#" className=" hover:font-bold">
          Correo Electronico
        </Link>
        <Link
          href="https://www.instagram.com/_benjaht_/#"
          className="hover:font-bold"
        >
          Instagram
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
