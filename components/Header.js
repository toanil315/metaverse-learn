import Image from "next/image";
import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

export default function Header() {
  const { user } = useMoralis();
  return (
    <div className="max-w-5xl mx-auto p-5 bg-slate-900 border-b-2 border-pink-500 sticky top-0 z-50">
      <div className="relative grid grid-cols-5 lg:grid-cols-6 items-center">
        <div className="relative h-16 w-16 hidden lg:block">
          <Image className="rounded-full" src="https://links.papareact.com/3pi" layout="fill" />
        </div>
        <div className="info col-span-4 lg:text-center">
          <Avatar
            title="logout"
            logoutOnPress={true}
            className="relative w-36 h-36 xl:w-40 xl:h-40 border-4 border-pink-500 rounded-full cursor-pointer lg:mx-auto"
          />
          <h1 className="text-pink-500 text-xl pt-6">Welcome to PAPAFAM Metaverse</h1>
          <p className="text-pink-500 text-2xl font-bold truncate pt-1">{user.getUsername()}</p>
        </div>
        <ChangeUserName />
      </div>
    </div>
  );
}
