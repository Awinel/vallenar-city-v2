"use client";
import { lilitaOne } from "../ui/fonts";
import { UserStatusProps } from "../lib/definitions";
import Link from "next/link";

const UserStatus = (props: UserStatusProps) => {
  return (
    <div
      className={`${lilitaOne.className} text-[var(--color-01)] font-bold text-4xl`}
    >
      {props.isAuthenticated ? (
        <button>Sign Out</button>
      ) : (
        <Link href="/login">
          <button>Log In</button>
        </Link>
      )}
    </div>
  );
};

export default UserStatus;
