import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "../../constant/routes";
import heroKitchenBg from "../../assets/images/manufacturing/image 2337.png";
import heroMascot from "../../assets/images/manufacturing/5975285c-4861-4f0f-aafb-905195a4b24d 1.png";
import wheatWatermark from "../../assets/images/manufacturing/1106b8f3-96cb-4a3c-bcff-45f986a95880 3.png";

function Hero() {
  return (
    <section className="relative flex min-h-svh w-full flex-col justify-between overflow-hidden bg-[#F8EBD7] pt-28 pb-10 lg:flex-row lg:items-center lg:pt-24 lg:pb-0">
      {/* Full-Width Manufacturing Kitchen Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroKitchenBg}
          alt="Thatha Tea state-of-the-art central kitchen and bakery facility"
          className="h-full w-full scale-[1.15] object-cover object-[76%_58%] lg:object-[70%_58%]"
        />
        {/* Smooth Solid-to-Transparent Cream Gradient on Left */}
        <div className="absolute inset-0 bg-linear-to-r from-[#F8EBD7] from-26% via-[#F8EBD7]/90 via-40% to-transparent to-68%" />
        {/* Mobile Top & Bottom Cream Fade Matching Mobile Reference */}
        <div className="absolute inset-x-0 top-0 h-[36%] bg-linear-to-b from-[#F8EBD7] via-[#F8EBD7]/80 to-transparent lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-[22%] bg-linear-to-t from-[#F8EBD7] via-[#F8EBD7]/75 to-transparent lg:hidden" />
      </div>

      {/* Subtle Wheat Stalks Watermark Top-Left */}
      <div className="pointer-events-none absolute top-16 left-0 z-0 w-48 opacity-20 mix-blend-multiply sm:w-60 lg:w-72">
        <img src={wheatWatermark} alt="" className="h-auto w-full object-contain" />
      </div>

      {/* Main Content Container - Shared Left/Right Alignment Across Entire Page */}
      <div className="relative z-20 mx-auto flex w-full max-w-350 items-center px-6 lg:h-full lg:px-16">
        <div className="flex w-full flex-col items-start text-left lg:w-[48%]">
          {/* Decorative Script Kicker */}
          <span className="font-allura text-[2.35rem] text-caramel sm:text-5xl lg:text-[3.1rem] xl:text-[3.5rem]">
            Our Manufacturing
          </span>

          {/* Main Heading - Strictly 2 Lines, font-thunder, leading-[0.92], no font-bold */}
          <h1 className="mt-1 font-thunder text-[2.65rem] uppercase leading-[0.92] tracking-[-0.01em] text-deep-coffee sm:text-6xl lg:text-[4.35rem] xl:text-[5.15rem]">
            <span className="block sm:whitespace-nowrap">FROM INGREDIENTS</span>
            <span className="block text-caramel sm:whitespace-nowrap">
              TO EVERY OUTLET
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-4 max-w-66.25 font-mona text-xs leading-relaxed text-deep-coffee/85 sm:max-w-100 sm:text-sm lg:mt-5">
            Our state-of-the-art central kitchen and bakery facility brings
            together traditional recipes, modern technology and strict quality
            standards to deliver the same great taste, every time.
          </p>

          {/* CTA: Explore Menu */}
          <Link
            to={ROUTES.MENU}
            className="group mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-caramel px-5 py-2.5 font-mona text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-[#8D4A15] active:scale-95 sm:px-6 sm:py-3 sm:text-xs lg:mt-7"
          >
            <span>EXPLORE MENU</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Thatha Mascot: Bottom-Left/Center on Mobile With Soft Bottom Fade, Anchored Bottom-Right on Desktop */}
      <div className="pointer-events-none relative z-10 mt-6 flex w-full justify-start px-3 sm:px-8 lg:absolute lg:bottom-0 lg:left-[44%] lg:mt-0 lg:h-[70%] lg:w-auto lg:justify-start lg:px-0 xl:left-[43%] xl:h-[73%]">
        <div className="relative">
          <img
            src={heroMascot}
            alt="Thatha Tea mascot welcoming to our central kitchen"
            className="h-72 w-auto object-contain object-bottom sm:h-88 lg:h-full"
          />
          <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-[#F8EBD7] via-[#F8EBD7]/70 to-transparent lg:hidden" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
