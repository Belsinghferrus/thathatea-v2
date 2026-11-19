import React from "react";
import { ArrowRight } from "lucide-react";

import mascotChair from "../../assets/images/home/mascot2.png"; 
import decoLeaves from "../../assets/images/home/leaf.png";
import decoGlass from "../../assets/images/home/tea-bg.png"; 
import decoScroll from "../../assets/images/home/wrap.png";
import decoSpices from "../../assets/images/home/cramb.png";
import decoBoiler from "../../assets/images/home/beaker.png";
import decoTeaPour from "../../assets/images/home/tea-pour.png"; 

function Story() {
  return (
    // 1. 100svh, flex layout, no bottom padding
    <section className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-soft-ivory pt-24 pb-0">
      
      {/* =========================================
          DECORATIVE BACKGROUND IMAGES
      ========================================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* 1. Top Left Leaves */}
        <img 
          src={decoLeaves} 
          alt="" 
          className="absolute -left-10 top-10 w-32 opacity-100 lg:left-4 lg:top-16 lg:w-48 xl:w-56" 
        />
        
        {/* 2. Bottom Left Glass */}
        <img 
          src={decoGlass} 
          alt="" 
          className="absolute -left-6 bottom-0 w-38 opacity-100 lg:left-0 lg:bottom-0 lg:w-40 xl:w-88" 
        />
        
        {/* 3. Top Center Scroll */}
        <img 
          src={decoScroll} 
          alt="" 
          className="absolute left-[45%] top-8 w-16 opacity-100 lg:left-[58%] lg:top-200 lg:w-24" 
        />
        
        {/* 4. Bottom Mid Spices (Crumbs) */}
        <img 
          src={decoSpices} 
          alt="" 
          className="absolute bottom-16 left-[35%] w-12 opacity-100 lg:bottom-24 lg:left-[45%] lg:w-20" 
        />

        {/* 5. Top Right Tea Pour */}
        <img 
          src={decoTeaPour} 
          alt="" 
          className="absolute -right-10 top-10 w-32 opacity-100 lg:right-0 lg:top-16 lg:w-48 xl:w-56" 
        />

        {/* 6. Bottom Right Boiler (Flush with the bottom) */}
        <img 
          src={decoBoiler} 
          alt="" 
          className="absolute -bottom-4 right-0 hidden w-32 opacity-100 sm:block md:w-48 lg:-bottom-6 lg:right-8 lg:w-56 xl:w-64" 
        />
      </div>

      {/* =========================================
          MAIN CONTENT CONTAINER
      ========================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-6 lg:px-16">
        <div className="grid flex-1 grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          
          {/* LEFT COLUMN: Mascot (Flush with the bottom) */}
          <div className="relative flex h-full items-end justify-center lg:justify-end mt-12 lg:mt-0">
            {/* 2. Reduced Mascot Size & Aligned to bottom edge */}
            <img
              src={mascotChair}
              alt="Thatha enjoying a cup of chai in a rocking chair"
              className="relative z-10 w-full max-w-[320px] object-contain object-bottom sm:max-w-[400px] lg:max-w-[480px] xl:max-w-[550px] translate-y-0 lg:translate-y-2"
            />
          </div>

          {/* RIGHT COLUMN: Text Content (Centered vertically) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left pb-16 lg:pb-0 lg:pt-12">
            
            {/* Script Heading */}
            <span className="font-allura text-4xl text-caramel sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              Our Story
            </span>

            {/* 3. Reduced Font Size & Tighter Line Spacing */}
            <h2 className="mt-2 font-thunder text-3xl font-bold uppercase leading-[1.2] tracking-[-0.02em] text-deep-coffee sm:text-4xl lg:text-5xl xl:text-[3rem]">
  A Little Chai
  <br /> 
  A Lifetime of Memories
</h2>

            {/* Body Text (Reduced size) */}
            <p className="mt-6 max-w-[480px] font-mona text-sm leading-relaxed text-deep-coffee/80 sm:text-base lg:mt-8 lg:text-lg xl:max-w-[520px]">
              Some memories begin with a cup of chai. Some conversations happen
              over endless refills. And some of our favourite moments are the
              simplest ones. That's the feeling we celebrate at Thatha Tea.
            </p>

            {/* Elegant Button (Keep the rounded style from Code 2) */}
            <button className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-caramel px-5 py-3.5 font-mona text-xs font-semibold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-deep-coffee lg:mt-10 lg:px-4 lg:py-4 lg:text-sm">
              Our Story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 lg:h-5 lg:w-5" />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;