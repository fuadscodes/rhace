import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-[64px] md:py-[120px] px-[32px] scroll-mt-[72px] bg-gray-10 grid md:grid-cols-2 gap-4"
    >
      <div>
        <h5 className="text-xl font-medium my-2">{`Let's Connect`}</h5>
        <p className="mb-4 max-w-md font-light">
          {`I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!`}
        </p>
        <div className="flex flex-row gap-2">
          <Link
            href="https://github.com/fuadscodes"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={GithubIcon} alt="Github Icon" width={42} height={42} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/fuad-herac-a69311218/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              width={42}
              height={42}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
