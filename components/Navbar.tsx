import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center sticky top-0 h-[67px] px-[40px] backdrop-blur-[15px] duration-500 shadow-lg text-bold">
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
      <Image
        src="menu.svg"
        alt="menu"
        width="24"
        height="24"
        className="inline-block cursor-pointer md:hidden"
      />
    </nav>
  );
};
