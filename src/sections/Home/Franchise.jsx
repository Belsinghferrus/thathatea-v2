import React from "react";
import { ArrowRight } from "lucide-react";
import mascotThumbsUp from "../../assets/images/home/mascot1.png"; 
import decoLeftImage from "../../assets/images/home/tea-leaf.png"; 

function Franchise() {
  return (
    // 1. Removed bottom padding (pb-0) so the mascot can hit the absolute bottom edge
    <section className="relative w-full overflow-hidden bg-[#F6EEDF] pt-16 pb-0 lg:pt-24 lg:pb-0">
      
      {/* LEFT DECORATION - Hidden on mobile, visible on desktop */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-[30%] lg:block">
        <img 
          src={decoLeftImage} 
          alt="" 
          className="h-full w-full object-cover object-left-bottom"
        />
      </div>

      {/* MAIN CONTENT CONTAINER */}
      {/* 2. Changed items-center to items-end on desktop so the mascot drops to the bottom */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-end gap-12 px-6 lg:grid-cols-2 lg:gap-8 lg:px-16">
        
        {/* TEXT CONTENT */}
        {/* 3. Added lg:ml-[30%] to push the content 30% from the left, and some bottom padding so it doesn't hit the absolute floor */}
        <div className="flex w-full flex-col items-center text-center lg:ml-[40%] lg:items-start lg:pb-24 lg:text-left">
          
          {/* Kicker */}
          <span className="font-allura text-4xl text-caramel sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
            Partner with Thatha tea
          </span>

          {/* Main Heading */}
          <h2 className="mt-2 font-thunder text-4xl font-bold uppercase leading-[1] tracking-[-0.02em] text-deep-coffee sm:text-5xl lg:text-6xl xl:text-[4rem]">
            Own a Tea Cafe<br />That People Want.
          </h2>

          {/* Body Text */}
          <p className="mt-6 max-w-[480px] font-mona text-sm leading-relaxed text-deep-coffee/80 sm:text-base lg:text-lg">
            Be a part of a trusted, fast-growing brand with a strong customer base, proven model and complete support.
          </p>

          {/* Button */}
          <button className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-caramel px-6 py-3.5 font-mona text-xs font-semibold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-deep-coffee lg:mt-10 lg:px-8 lg:py-4 lg:text-sm">
            Explore Franchise
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 lg:h-5 lg:w-5" />
          </button>

        </div>

        {/* MASCOT IMAGE */}
        {/* Flushed to the bottom right */}
        <div className="relative flex h-full w-full items-end justify-center lg:justify-end">
          <img
            src={mascotThumbsUp}
            alt="Thatha giving a thumbs up holding tea"
            className="w-full max-w-[320px] object-contain object-bottom sm:max-w-[450px] lg:max-w-[600px]"
          />
        </div>

      </div>
    </section>
  );
}

export default Franchise;