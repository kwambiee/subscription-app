"use client";
import Image from "next/image";
import { useState } from "react";
import "./Navbar.scss";
import Logo from "../../public/Davis.png";
import Link from "next/link";

const Navbar = ({ userId }: { userId: string }) => {
  const [hubsToggle, setHubsToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  function toggleHandler(option?: string) {
    switch (option) {
      case "hubs":
        setMenuToggle((prev) => !prev);
        setHubsToggle(false);
        break;

      case "link":
        setMenuToggle((prev) => !prev);
        setHubsToggle(false);
        break;

      default:
        setMenuToggle(false);
        setHubsToggle(false);
        break;
    }
  }

  return (
    <nav className="flex justify-between w-full">
      <Link href="/" className="flex items-center">
        <Image
          src={Logo}
          alt="Davis and ShirtLiff logo"
          className="w-10 h-10 mr-5"
        />
        <p className="font-semibold">Davis & ShirtLiff</p>
      </Link>
      <div className="flex">
        <h2 className="text-lg">
          Hello, <span className="text-blue text-bold">User {userId}</span>
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;
