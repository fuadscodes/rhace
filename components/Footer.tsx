import Link from "next/link"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="bg-black-90 text-white px-[40px] py-[20px] flex justify-center items-center">
        <div className="flex-col justify-center">
            <div className="flex justify-center mb-[4px]">
                <Link href="/">
                    <Image src="/rhace-logo-light.svg" alt="logo-light" width="116" height="16" priority={true} />
                </Link>
            </div>
            <span className="text-small">© 2023 fuadscodes</span>
        </div>
    </footer>
  )
}
