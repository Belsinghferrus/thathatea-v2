import heroBg from "../../assets/images/franchaise/image 2295.png";
import storefrontImg from "../../assets/images/franchaise/image 2353.png";

function Hero() {
  return (
    <section className="relative flex min-h-[92svh] w-full flex-col justify-end overflow-hidden bg-[#F8EBD7] pt-28 pb-0 lg:min-h-screen lg:pt-0">
      {/* Background Illustrated Image */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover object-bottom-left opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#F5EAD8]/60 via-transparent to-transparent lg:from-[#F5EAD8]/30" />
      </div>

      {/* Main Content: Left Text Column */}
      <div className="relative z-10 mx-auto flex w-full max-w-400 items-end px-6 pb-20 sm:pb-34 lg:px-16 lg:pb-24 xl:pb-58">
        <div className="flex w-full flex-col items-center text-center lg:w-[38%] lg:items-start lg:text-left">
          {/* Script Kicker */}
          <span className="font-allura text-4xl text-caramel sm:text-5xl lg:text-6xl xl:text-[4.2rem]">
            Our Outlets
          </span>

          {/* Main Heading */}
          <h1 className="mt-2 font-thunder text-5xl uppercase leading-[0.92] tracking-[-0.01em] text-deep-coffee sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6.5rem]">
            Brewing
            <br />
            Happiness
            <br />
            Since 1991
          </h1>

          {/* Subtext matching reference design */}
          <p className="mt-5 max-w-95 font-mona text-sm leading-relaxed text-deep-coffee/80 sm:text-base lg:text-lg">
            Familiar flavours, thoughtful spaces, and a reason to come back.
          </p>
        </div>
      </div>

      {/* Right Side: Large Storefront Illustration Anchored to Bottom Right */}
      <div className="relative z-10 flex w-full justify-center lg:absolute lg:bottom-0 lg:left-[36%] xl:left-[35%] lg:h-[68vh] xl:h-[72vh] 2xl:h-[76vh] pointer-events-none">
        <img
          src={storefrontImg}
          alt="Thatha Tea flagship cafe storefront"
          className="w-full max-w-125 object-contain object-bottom sm:max-w-162.5 lg:max-w-none lg:w-auto lg:h-full lg:object-bottom-left drop-shadow-2xl"
        />
      </div>
    </section>
  );
}

export default Hero;
