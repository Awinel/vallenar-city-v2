import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="">
      <ul className="">
        <li className="">
          <Link href="/">Inicio</Link>
        </li>
        <li className="">
          <Link href="/calendar">Calendario</Link>
        </li>
        <li className="">
          <Link href="/food">Comida</Link>
        </li>
        <li className="">
          <Link href="/stores">Tiendas</Link>
        </li>
        <li className="">
          <Link href="/cosmetics">Estilo y Belleza</Link>
        </li>
        <li className="">
          <Link href="/rent">Renta</Link>
        </li>
        <li className="">
          <Link href="/services">Servicios locales</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
