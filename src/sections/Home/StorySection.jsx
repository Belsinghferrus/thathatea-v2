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
    // 1. Added -mt-24 lg:-mt-56 to pull Story behind Specialties. Adjusted pt to push content down.
    <section className="relative flex min-h-[90svh] w-full flex-col justify-center overflow-hidden bg-soft-ivory -mt-24 pt-40 pb-0 lg:-mt-50 lg:pt-56">
      
      {/* Decorative Images */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img src={decoLeaves} alt="" className="absolute -left-10 top-10 w-32 opacity-100 lg:left-4 lg:top-16 lg:w-48 xl:w-56" />
        {/* Fixed w-38 to w-40 and w-88 to w-80 for Tailwind compatibility */}
        <img src={decoGlass} alt="" className="absolute -left-6 bottom-0 w-40 opacity-100 lg:left-0 lg:bottom-0 lg:w-40 xl:w-80" />
        {/* Fixed lg:top-200 to lg:top-50 */}
        <img src={decoScroll} alt="" className="absolute left-[45%] top-8 w-16 opacity-100 lg:left-[68%] lg:top-75 lg:w-24" />
        <img src={decoSpices} alt="" className="absolute bottom-16 left-[35%] w-12 opacity-100 lg:bottom-24 lg:left-[45%] lg:w-20" />
        <img src={decoTeaPour} alt="" className="absolute -right-10 top-10 w-32 opacity-100 lg:right-0 lg:top-16 lg:w-48 xl:w-56" />
        <img src={decoBoiler} alt="" className="absolute -bottom-4 right-0 hidden w-32 opacity-100 sm:block md:w-48 lg:-bottom-6 lg:right-8 lg:w-56 xl:w-64" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-400 flex-1 flex-col px-6 lg:px-16">
        
        {/* 2. Changed items-center to items-stretch so the left column reaches the bottom */}
        <div className="grid flex-1 grid-cols-1 items-stretch gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          
          {/* LEFT COLUMN: Mascot - Flushed to the bottom */}
          {/* Removed mt-12, added flex-col justify-end */}
          <div className="relative flex flex-col justify-end items-center ">
            <img
              src={mascotChair}
              alt="Thatha enjoying a cup of chai in a rocking chair"
              className="relative z-10 w-full max-w-80 object-contain object-bottom sm:max-w-100 lg:max-w-120 xl:max-w-137.5 translate-y-0 lg:translate-y-0"
            />
          </div>

          {/* RIGHT COLUMN: Text Content */}
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:text-left pb-16 lg:pb-0 lg:pt-12">
            
            <span className="font-allura text-4xl text-caramel sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              Our Story
            </span>

            <h2 className="mt-2 font-thunder text-3xl font-bold uppercase leading-[1.2] tracking-[-0.02em] text-deep-coffee sm:text-4xl lg:text-5xl xl:text-[3rem]">
              A Little Chai<br />
              A Lifetime of Memories
            </h2>

            <p className="mt-6 max-w-120 font-mona text-sm leading-relaxed text-deep-coffee/80 sm:text-base lg:mt-8 lg:text-lg xl:max-w-130">
              Some memories begin with a cup of chai. Some <br /> conversations happen
              over endless refills. And <br /> some of our favourite moments are the
              simplest <br /> ones. That's the feeling we celebrate at Thatha Tea.
            </p>

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