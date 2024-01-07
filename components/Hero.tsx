import Image from "next/image";

export const Hero = () => {
  return (
    <section className="max-container padding-container flex-co xl:flex items-center xl:h-[calc(100vh-72px)] scroll-mt-[72px]">
      <Image
        priority={true}
        src="/images/hero-image.avif"
        alt="motorcycle image"
        width="1550"
        height="300"
        className="xl:ml-[-450px] xl:mb-[150px] 2xl:hidden"
      />
      <Image
        priority={true}
        src="/images/hero-image.avif"
        alt="motorcycle image"
        width="4500"
        height="1550"
        className="hidden 2xl:block 2xl:ml-[-800px] 2xl:mb-[250px]"
      />
      <div className="text-black-90 xl:ml-[-100px] text-center xl:text-left px-[32px] py-[64px] xl:p-0">
        <h1 className="text-[32px] md:text-[40px] font-bold">
          SEARCH OR COMPARE
        </h1>
        <p className="w-full xl:w-[400px] text-[16px] md:text-[19px] font-light mt-[8px]">
          Discover information about motorcycles or compare two motorcycles on
          the rhace website or mobile app.
        </p>
      </div>
    </section>
  );
};
