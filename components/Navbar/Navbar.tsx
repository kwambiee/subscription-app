"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
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

  useEffect(() => {
    
  }, [])


  return (
    <nav className="w-full fixed flex gap-1 justify-evenly sm:justify-between place-content-between px-4 py-1 place-items-center backdrop-blur-md bg-white/30">
      <div className="flex lg:basis-[30%]">
        <a href="/">
          <Image
            src={Images.logo}
            alt="logo"
            height={100}
            className="sm:ml-5 cursor-pointer"
          />
        </a>
        </div>

        <div className="flex">
          <h2 className="text-lg">Hello, <span className="text-blue text-bold">Iain Mosima</span></h2>
        </div>
    </nav>
  );
};

export default Navbar;
