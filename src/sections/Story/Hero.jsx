import React from "react";
import { Coffee } from "lucide-react";

import mascotNamaste from "../../assets/images/story/story-mascot-hero.png";
import fullBgItems from "../../assets/images/story/storybg.png"; 
import decoWheat from "../../assets/images/story/grain.png";
import decoBoiler from "../../assets/images/story/tea-pour.png";

function StoryHero() {
  return (
    // Section is a flex column to center text vertically on mobile
    <section className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden bg-[#F4E8D4] pt-32 pb-0 lg:pt-0 lg:pb-0">
      
      {/* =========================================
          BACKGROUND LAYERS
      ========================================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        
        {/* 1. Full Background Image */}
        <img 
          src={fullBgItems} 
          alt="" 
          className="absolute inset-0 h-full w-full object-cover object-right" 
        />

        {/* 2. Left-to-Right Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#F4E8D4_42.79%,rgba(246,220,187,0)_100%)]" />

        {/* 3. Sub Decorations */}
        <img 
          src={decoWheat} 
          alt="" 
          className="absolute -left-10 top-10 z-10 w-32 opacity-100 sm:w-48 lg:left-0 lg:top-0 lg:w-56" 
        />
        
        <img 
          src={decoBoiler} 
          alt="" 
          className="absolute bottom-10 left-6 z-10 w-20 opacity-100 sm:w-24 lg:bottom-20 lg:left-[35%] lg:w-36" 
        />
      </div>

      {/* =========================================
          TEXT CONTENT (Restricted to left side on desktop)
      ========================================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-12 lg:px-24 xl:px-32">
        
        <div className="flex w-full flex-col items-center text-center lg:w-[55%] lg:items-start lg:text-left xl:w-[50%]">
          
          <span className="font-allura text-3xl text-[#A76024] sm:text-4xl lg:text-5xl xl:text-[4rem]">
            Our Story, brewed with heart
          </span>

          <h1 className="mt-2 font-thunder text-4xl font-bold uppercase leading-[1] tracking-[-0.02em] text-[#2C1810] sm:text-5xl lg:text-6xl xl:text-[5rem]">
            More Than Tea.<br />
            <span className="text-[#A76024]">A Legacy</span> Brewed<br />
            With Love.
          </h1>

          <p className="mt-5 max-w-[450px] font-mona text-sm leading-relaxed text-[#2C1810]/80 sm:text-base lg:mt-6 lg:max-w-[500px]">
            From a family's business roots to a growing tea destination, Thatha Tea
            brings people together through authentic taste, freshly prepared
            treats and the warmth of a familiar place
          </p>

          <button className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#A76024] px-6 py-3 font-mona text-[11px] font-semibold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#2C1810] lg:mt-10 lg:px-7 lg:py-3.5 lg:text-xs">
            <Coffee className="h-4 w-4" />
            Explore Manufacturing
          </button>

        </div>
      </div>

      {/* =========================================
          MASCOT (Mobile: normal flow, Desktop: absolute bottom)
      ========================================= */}
      <div className="relative z-10 mt-20 flex w-full justify-center lg:absolute bottom-0 lg:right-[10%] xl:right-[20%] lg:mt-0 lg:w-auto">
        <img
          src={mascotNamaste}
          alt="Thatha Tea mascot in namaste pose"
          className="w-full max-w-[280px] object-contain object-bottom sm:max-w-[350px] lg:max-w-[450px] xl:max-w-[550px]"
        />
      </div>

    </section>
  );
}

export default StoryHero;