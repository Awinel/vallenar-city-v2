import React from "react";
import UserStatus from "./UserStatus";

const Header = () => {
  return (
    <header className="flex justify-evenly items-center p-5">
      <h1>
        <span className="text-[var(--color-01)]">Vall</span>
        <span className="text-[var(--color-02)]">enar</span>
        <span className="text-[var(--color-03)]">City</span>
      </h1>
      <img src="/logo.svg" alt="Vallenar City Logo" width={100} />
      <UserStatus isAuthenticated={false} />
    </header>
  );
};

export default Header;
