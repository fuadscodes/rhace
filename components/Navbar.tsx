"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants";

export const Navbar = () => {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNavItems = () => {
    setShowNavItems(!showNavItems);
  };

  return (
    <nav className="flex-col justify-between items-center md:sticky top-0 px-[40px] backdrop-blur-[15px] duration-500 shadow-lg text-bold">
      <div className="flex justify-between items-center h-[72px]">
        <Link href="#hero">
          <Image
            src="/rhace-logo-dark.svg"
            alt="logo-dark"
            width="116"
            height="16"
            priority={true}
          />
        </Link>
        <ul className="hidden h-full gap-12 md:flex items-center cursor-pointer regular-16 text-gray-30">
          {NAV_LINKS.map((link) => (
            <Link
              className="transition-all hover:text-black-90 font-medium"
              href={link.href}
              key={link.key}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div
          onClick={() => {
            toggleNavItems();
          }}
          className="inline-block cursor-pointer md:hidden"
        >
          <Image src="menu.svg" alt="menu" width="24" height="24" />
        </div>
      </div>
      <div
        className={`overflow-hidden height duration-300 ease-in-out	 ${
          showNavItems && "h-[170px]"
        } ${!showNavItems && "h-[0px]"}`}
      >
        <ul className="flex-col justify-center cursor-pointer regular-16 text-gray-30">
          {NAV_LINKS.map((link) => (
            <Link
              className="transition-all hover:text-black-90 font-medium block mb-4"
              href={link.href}
              key={link.key}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};
