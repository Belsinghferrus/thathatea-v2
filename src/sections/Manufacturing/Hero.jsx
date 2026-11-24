import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "../../assets/images/contact/adfc5988-159f-4f06-96db-da0d1a69142c 1.png";
import heroBakeryImg from "../../assets/images/manufacturing/image 2337.png";

function Hero() {
  return (
    <section className="relative flex min-h-[92svh] w-full flex-col justify-end overflow-hidden bg-[#F8EBD7] pt-28 pb-0 lg:min-h-screen lg:pt-0">
      {/* Background Illustrated Image with Subtle Opacity */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover object-left-bottom opacity-25 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8EBD7]/80 via-[#F8EBD7]/40 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-end px-6 pb-16 sm:px-12 sm:pb-24 lg:px-16 lg:pb-20 xl:px-20 xl:pb-24">
        <div className="flex w-full flex-col items-center text-center lg:w-[48%] lg:items-start lg:text-left">
          {/* Decorative Script Kicker */}
          <span className="font-allura text-4xl text-[#A76024] sm:text-5xl lg:text-6xl xl:text-[4.2rem]">
            Our Manufacturing
          </span>

          {/* Main Heading - font-thunder, leading-[0.92], no font-bold */}
          <h1 className="mt-2 font-thunder text-5xl uppercase leading-[0.92] tracking-[-0.01em] text-[#2C1810] sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6.5rem]">
            FROM INGREDIENTS
            <br />
            <span className="text-[#A76024]">TO EVERY OUTLET</span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-5 max-w-[460px] font-mona text-sm leading-relaxed text-[#2C1810]/80 sm:text-base lg:text-lg">
            Our state-of-the-art central kitchen and bakery facility brings together traditional recipes, modern technology and strict quality standards to deliver the same great taste, every time.
          </p>

          {/* CTA: Explore Our Menu */}
          <Link
            to="/menu"
            className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#A76024] px-7 py-3.5 font-mona text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#8D4A15] hover:shadow-lg active:scale-95 cursor-pointer lg:mt-9"
          >
            <span>EXPLORE OUR MENU</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Right Side: Commercial Bakery Facility & Mascot Illustration Anchored to Bottom Right */}
      <div className="pointer-events-none relative z-10 flex w-full justify-center px-4 sm:px-6 lg:absolute lg:bottom-0 lg:right-0 lg:h-[76vh] xl:h-[82vh] 2xl:h-[86vh] lg:w-[54%] xl:w-[52%] 2xl:w-[50%] lg:justify-end lg:px-0">
        <img
          src={heroBakeryImg}
          alt="Thatha Tea manufacturing and bakery facility"
          className="h-auto w-full max-w-[540px] object-contain object-bottom sm:max-w-[680px] lg:h-full lg:w-auto lg:max-w-full lg:object-bottom-right drop-shadow-2xl"
        />
      </div>
    </section>
  );
}

export default Hero;
