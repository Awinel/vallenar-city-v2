"use client";
import { UserStatusProps } from "../lib/definitions";
const UserStatus = (props: UserStatusProps) => {
  return (
    <div>
      {props.isAuthenticated ? (
        <button>Sign Out</button>
      ) : (
        <button>Log In</button>
      )}
    </div>
  );
};

export default UserStatus;
