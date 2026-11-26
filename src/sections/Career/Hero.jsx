import React from "react";
import { ArrowDown } from "lucide-react";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL IMAGE PATHS ---
import heroMascotImg from "../../assets/images/career/career-mascot.png";
import vintageBg from "../../assets/images/career/Vintage-tea-bg.webp";

function CareerHero() {
  const handleScrollToPositions = () => {
    const target = document.getElementById("open-positions");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // 100svh on both mobile and desktop. Flex column on mobile, row on desktop.
    <section className="relative flex min-h-[90svh] w-full flex-col overflow-hidden bg-[#F6EEDF] pt-28 pb-0 lg:flex-row lg:items-center lg:pt-0">
      
      {/* =========================================
          BACKGROUND IMAGE (Reduced Opacity)
      ========================================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={vintageBg}
          alt="Vintage Tea Background"
          className="h-full w-full object-cover object-center opacity-40" 
        />
      </div>

      {/* =========================================
          MAIN CONTENT CONTAINER (Max 1200px)
      ========================================= */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1400px] flex-col items-center px-6 lg:flex-row lg:items-center lg:px-8">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="flex w-full flex-col items-center text-center lg:w-[45%] lg:items-start lg:text-left">
          
          {/* Script Kicker */}
          <span className="font-allura text-4xl text-[#A76024] sm:text-5xl lg:text-6xl xl:text-[4rem]">
            Careers at Thatha
          </span>

          {/* Main Heading */}
          <h1 className="mt-2 font-thunder text-6xl uppercase leading-[0.9] tracking-[-0.02em] text-[#2C1810] sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
            More Than<br />A Job,
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 max-w-[420px] font-mona text-sm leading-relaxed text-[#2C1810]/80 sm:text-base lg:text-lg">
            Be part of a team that serves great food, brings people together and creates brighter days. Grow with us.
          </p>

          {/* CTA Button */}
          <button
            type="button"
            onClick={handleScrollToPositions}
            className="group mt-8 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#A76024] px-6 py-3.5 font-mona text-xs font-semibold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#2C1810] active:scale-95 lg:mt-10 lg:px-8 lg:py-4 lg:text-sm"
          >
            <span>Explore Open Roles</span>
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1 lg:h-5 lg:w-5" />
          </button>
        </div>

        {/* RIGHT COLUMN: Mascot Image (Made much larger) */}
        {/* On mobile, it sits in normal flow. On desktop, it's absolute bottom right. */}
        <div className="relative mt-12 flex w-full flex-grow items-end justify-center lg:absolute lg:top-60 lg:right-0 lg:mt-0 lg:h-full lg:w-[65%] lg:justify-end">
          <img
            src={heroMascotImg}
            alt="Thatha Tea mascot serving tea behind traditional counter"
            className="w-full max-w-[450px] object-contain object-bottom sm:max-w-[600px] lg:max-w-[1050px] xl:max-w-[1250px]"
          />
        </div>

      </div>
    </section>
  );
}

export default CareerHero;