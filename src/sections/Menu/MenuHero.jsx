import React from "react";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL IMAGE PATHS ---
import heroMainImg from "../../assets/images/menu/menu-hero.png";
import bakerySketchImg from "../../assets/images/menu/sketch.png";

function MenuHero() {
  return (
    <section className="relative w-full overflow-hidden bg-soft-ivory pt-32 pb-16 lg:pt-0 lg:pb-0 lg:min-h-svh">
      
      {/* Subtle Background Pattern */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(120,72,38,0.3) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* =========================================
          MAIN CONTENT CONTAINER
      ========================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-400 flex-col items-center lg:min-h-svh lg:flex-row lg:items-center lg:px-16">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="flex w-full flex-col justify-center px-6 lg:w-[40%] lg:px-0">
          <div className="max-w-107.5">
            
            {/* Kicker */}
            <p className="font-mona text-xs font-bold uppercase tracking-[0.24em] text-caramel sm:text-sm">
              Thatha Tea Menu
            </p>

            {/* Main Heading */}
            <h1 className="mt-4 font-thunder text-[4.5rem] leading-[0.85] tracking-[-0.02em] text-deep-coffee sm:text-[6rem] lg:text-[8rem] xl:text-[9rem]">
              BAKERY
            </h1>

            {/* Script Subheading */}
            <p className="mt-4 font-allura text-4xl text-caramel sm:text-5xl lg:text-[3.5rem]">
              Baked fresh. Just for you.
            </p>

            {/* Paragraph */}
            <p className="mt-8 max-w-95 font-mona text-base leading-[1.8] text-deep-coffee/80 sm:text-lg">
              Freshly baked every day with the finest ingredients, crafted to
              pair beautifully with every cup and every craving.
            </p>

          </div>
        </div>

        {/* RIGHT COLUMN: Visuals */}
        <div className="relative mt-16 flex w-full items-center justify-center lg:mt-0 lg:w-[60%] lg:h-svh">
          
          {/* Background Sketch (Hidden on small screens, visible on desktop) */}
          <div className="pointer-events-none absolute left-[-10%] top-[10%] z-0 w-[80%] lg:left-[-5%] lg:top-[15%] lg:w-[75%] xl:w-[65%]">
            <img
              src={bakerySketchImg}
              alt=""
              className="h-auto w-full object-contain opacity-50"
            />
          </div>

          {/* Main Food Image */}
          <div className="relative z-10 w-full max-w-150 px-6 lg:absolute lg:bottom-0 lg:right-0 lg:max-w-225 lg:px-0 xl:max-w-275">
            <img
              src={heroMainImg}
              alt="Bakery assortment with tea cup, bread, brownie and cookie"
              className="h-auto w-full object-contain drop-shadow-[0_20px_40px_rgba(44,24,16,0.15)] lg:scale-105 lg:origin-bottom-right"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default MenuHero;