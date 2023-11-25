import Image from "next/image"

export const Hero = () => {
  return (
    <section id="hero" className="max-container padding-container flex-co xl:flex items-center xl:h-[calc(100vh-67px)] scroll-mt-[67px]">
      <Image 
        priority={true} 
        src="/hero-image.avif" 
        alt="motorcycle image" 
        width="1400" 
        height="300" 
        className="xl:ml-[-450px] xl:mb-[150px]" 
      />
      <div className="text-black-90 xl:ml-[-35px] text-center xl:text-left p-[64px] xl:p-0">
        <h1 className="text-[40px] font-bold">SEARCH OR COMPARE</h1>
        <p className="w-full xl:w-[400px] text-[19px] font-light">
          Discover information about motorcycles or compare two motorcycles on the rhace website or mobile app.
        </p>
      </div>
    </section>
  )
}
