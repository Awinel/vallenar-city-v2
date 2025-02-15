import React from "react";
import UserStatus from "./UserStatus";
import { lilitaOne } from "../ui/fonts";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-evenly items-center p-5">
      <h1>
        <span
          className={`${lilitaOne.className} text-[var(--color-01)] font-bold text-4xl`}
        >
          Vall
        </span>
        <span
          className={`${lilitaOne.className} text-[var(--color-02)] font-bold text-4xl`}
        >
          enar
        </span>
        <span
          className={`${lilitaOne.className} text-[var(--color-03)] font-bold text-4xl`}
        >
          City
        </span>
      </h1>
      <Image
        src="/logo.svg"
        alt="Vallenar City Logo"
        width={120}
        height={120}
      />
      <UserStatus isAuthenticated={false} />
    </header>
  );
};

export default Header;
