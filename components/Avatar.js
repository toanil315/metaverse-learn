import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";

export default function Avatar({logoutOnPress, userName, className}) {
    const {user, logout} = useMoralis();
  return (
    <div onClick={logoutOnPress && logout} className={className} title={logoutOnPress && "log out"}>
      <Image className="rounded-full" src={`https://avatars.dicebear.com/api/pixel-art/${userName || user.getUsername()}.svg`} layout="fill" />
    </div>
  );
}
