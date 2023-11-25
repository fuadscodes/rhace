import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center sticky top-0 h-[67px] px-[40px] backdrop-blur-[30px] duration-500 shadow-lg text-bold">
        <Link href="/">
            <Image src="/rhace-logo-dark.svg" alt="logo-dark" width="116" height="16" priority={true} />
        </Link>
    </nav>
  )
}
