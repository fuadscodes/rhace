import Image from "next/image"

export const Hero = () => {
  return (
    <section className="max-container padding-container flex items-center h-[calc(100vh-67px)]">
      <Image src="/hero-image.avif" width="1400" height="300" priority={true} className="ml-[-480px] mb-[150px]" />
      <div className="text-black-90">
        <h1 className="text-[40px] font-bold">SEARCH OR COMPARE</h1>
        <div className="w-[400px] text-[19px] font-light">
            Discover information about motorcycles or compare two motorcycles on the rhace website or mobile app.
        </div>
      </div>
     
    </section>
  )
}
