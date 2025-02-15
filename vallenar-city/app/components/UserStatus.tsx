"use client";
import { lilitaOne } from "../ui/fonts";
import { UserStatusProps } from "../lib/definitions";
const UserStatus = (props: UserStatusProps) => {
  return (
    <div
      className={`${lilitaOne.className} text-[var(--color-01)] font-bold text-4xl`}
    >
      {props.isAuthenticated ? (
        <button>Sign Out</button>
      ) : (
        <button>Log In</button>
      )}
    </div>
  );
};

export default UserStatus;
