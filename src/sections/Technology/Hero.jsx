import React from "react";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL IMAGE PATHS ---
import heroBg from "../../assets/images/tech/Vintage-tea-bg.webp";
import heroMascotAdmin from "../../assets/images/tech/thatha_tea_admin_mascot_transparent 1.png";

function TechHero() {
  return (
    // 100vh section, relative for background, flex-col for mobile, flex-row for desktop
    <section className="relative flex min-h-[90svh] w-full flex-col justify-center overflow-hidden bg-[#F6EEDF] pt-32 pb-0 lg:flex-row lg:items-center lg:pt-0">
      
      {/* =========================================
          BACKGROUND IMAGE & GRADIENT OVERLAY
      ========================================= */}
      <div className="pointer-events-none absolute inset-0  z-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover object-right opacity-30  mix-blend-multiply"
        />
        {/* Gradient overlay to make the left-side text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6EEDF] from-30% via-[#F6EEDF]/80 via-50% to-transparent" />
      </div>

      {/* =========================================
          MAIN CONTENT CONTAINER (Max 1300px)
      ========================================= */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-[1300px] flex-col items-center px-6 lg:flex-row lg:items-center lg:px-8">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="flex w-full flex-col items-center text-center lg:w-[48%] lg:items-start lg:text-left">
          
          {/* Main Heading */}
          <h1 className="font-thunder text-6xl uppercase leading-[1] tracking-[-0.02em] text-[#2C1810] sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
            A Powered
            <br />
            By Our
            <br />
            Own
          </h1>

          {/* Script Accent Word */}
          <span className="mt-2 font-allura text-5xl text-[#A76024] sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
            Technology
          </span>

          {/* Supporting Copy (Text matched from reference image) */}
          <p className="mt-6 max-w-[440px] font-mona text-sm leading-relaxed text-[#2C1810]/80 sm:text-base lg:text-lg">
            Our in-house software, Thatha Notes makes ordering simple and help you track, grow and manage your outlet everyday.
          </p>

        </div>

        {/* RIGHT COLUMN: Mascot Image (Anchored to bottom) */}
        {/* On mobile, it sits in normal flow. On desktop, it's absolute bottom right. */}
        <div className="relative mt-12 flex w-full items-end justify-center lg:absolute lg:top-40 lg:right-0 lg:mt-0 lg:w-[60%] lg:justify-end">
          <img
            src={heroMascotAdmin}
            alt="Thatha Tea Admin Portal and Thatha Notes technology system"
            className="w-full max-w-[350px] object-contain object-bottom sm:max-w-[500px] lg:max-w-[850px] xl:max-w-[950px]"
          />
        </div>

      </div>
    </section>
  );
}

export default TechHero;