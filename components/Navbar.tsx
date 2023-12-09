import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "../constants";

export const Navbar = () => {
  return (
    <nav className="flex-col justi justify-between items-center sticky top-0 px-[40px] backdrop-blur-[15px] duration-500 shadow-lg text-bold">
      <div className="flex justify-center md:justify-between items-center h-[72px]">
        <Link href="/">
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
      </div>
    </nav>
  );
};
