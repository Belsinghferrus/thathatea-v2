import React from "react";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL IMAGE PATHS ---
import facilityKitchenImg from "../../assets/images/manufacturing/thathatea-bake.png";
import outletNightImg from "../../assets/images/outlet/Indra-nager.png";
import brandedChaiImg from "../../assets/images/home/tea.png";
import kitchenBgSketch from "../../assets/images/manufacturing/kitchenbgsketch.webp";

function KitchenSupply() {
  return (
    // Background color #F8EBD7 with generous vertical padding
    <section className="relative w-full overflow-hidden bg-[#F8EBD7] py-20 lg:py-28">
      
      {/* =========================================
          BACKGROUND ILLUSTRATED SKETCH
      ========================================= */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <img
          src={kitchenBgSketch}
          alt=""
          className="h-full w-full object-cover object-bottom opacity-60 mix-blend-multiply"
        />
      </div>

      {/* =========================================
          MAIN CONTENT CONTAINER (Max 1400px)
      ========================================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        
        {/* TOP ROW: Heading & Paragraph */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Main Heading */}
          <div>
            <h2 className="font-thunder text-5xl uppercase leading-[1] tracking-[-0.02em] text-[#2C1810] sm:text-5xl lg:text-[4rem] xl:text-[5rem]">
              Made in our<br />
              Kitchen.<br />
              Loved in <span className="text-[#A76024]">Every</span><br />
              <span className="text-[#A76024]">Outlet.</span>
            </h2>
          </div>

          {/* Paragraph */}
          <div className="flex justify-start lg:justify-end lg:pt-4">
            <p className="max-w-[480px] font-mona text-sm leading-relaxed text-[#2C1810]/80 sm:text-base lg:text-[17px]">
              Everything you enjoy at Thatha Tea is produced in-house. We
              don't buy finished goods from the market and simply resell
              them. Our central Mother Kitchen prepares every product and
              delivers it to every outlet — keeping taste and quality
              recognizably consistent from the beginning.
            </p>
          </div>

        </div>

        {/* =========================================
            BOTTOM AREA: Staggered Circles & Punchline
        ========================================= */}
        {/* Relative container to hold the absolute elements on desktop */}
        <div className="relative mt-16 flex flex-col items-center gap-12 lg:mt-10 lg:block lg:h-[550px] lg:w-full">
          
          {/* 1. Kitchen Image (Bottom Left) */}
          <div className="relative z-20 h-64 w-64 overflow-hidden rounded-full shadow-lg sm:h-72 sm:w-72 lg:absolute lg:bottom-8 lg:left-[5%] lg:h-[320px] lg:w-[320px]">
            <img
              src={facilityKitchenImg}
              alt="Thatha Tea central manufacturing kitchen facility"
              className="h-full w-full scale-125 object-contain "
            />
          </div>

          {/* 2. Outlet Image (Center Top) */}
          <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full shadow-lg sm:h-72 sm:w-72 lg:absolute lg:left-[34%] lg:top-0 lg:h-[380px] lg:w-[380px]">
            <img
              src={outletNightImg}
              alt="Thatha Tea illuminated cafe outlet at night"
              className="h-full w-full object-cover object-top"
            />
          </div>

          {/* 3. Tea Glass Image (Bottom Right) */}
          <div className="relative z-20 h-48 w-48 overflow-hidden rounded-full bg-[#D8C5A8] shadow-lg sm:h-56 sm:w-56 lg:absolute lg:bottom-[10%] lg:left-[63%] lg:h-[260px] lg:w-[260px]">
            <img
              src={brandedChaiImg}
              alt="Branded Thatha Tea cutting chai glass"
              className="h-full w-full scale-[1] object-cover object-[80%_50%]"
            />
          </div>

          {/* 4. Bottom-Right Punchline Typography */}
          <div className="relative z-20 w-full text-center lg:absolute lg:bottom-10 lg:-right-15 lg:w-auto lg:text-left">
            <h3 className="font-thunder text-4xl uppercase leading-[1] tracking-[-0.02em] text-[#2C1810] sm:text-5xl lg:text-[3.5rem]">
              Made Fresh.<br />
              Moved Fast.<br />
              Served With<br />
              Care.
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}

export default KitchenSupply;