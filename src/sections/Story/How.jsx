import React from "react";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL IMAGE PATHS ---
import leftBgSketch from "../../assets/images/story/how-bg.png"; 
import imgKettle from "../../assets/images/story/wisdom.png"; 
import imgShop from "../../assets/images/story/beginning.png"; 
import imgMap from "../../assets/images/story/family.png"; 

const milestones = [
  {
    title: "INHERITED WISDOM",
    desc: "A grandfather's business ideology became the first foundation.",
    img: imgKettle,
  },
  {
    title: "DETERMINED BEGINNINGS",
    desc: "The vision moved forward through independent effort and belief.",
    img: imgShop,
  },
  {
    title: "A GROWING FAMILY",
    desc: "Outlets, customers and partners became part of one shared story.",
    img: imgMap,
  },
];

function HowItBegan() {
  return (
    // Outer section has the gradient, ensuring the left and right edges have the #EEDCC2 color
    <section className="relative flex max-h-[60vh] w-full flex-col justify-center overflow-hidden bg-[linear-gradient(90deg,#EEDCC2_0%,#F6EEDF_15%,#F6EEDF_85%,#EEDCC2_100%)] py-16 lg:py-24">
      
      {/* LEFT BACKGROUND SKETCH - Reduced height and pinned to bottom left */}
      <div className="pointer-events-none absolute bottom-0 -left-20 z-0 hidden h-[400px] w-[25%] lg:block xl:h-[500px]">
        <img 
          src={leftBgSketch} 
          alt="" 
          className="h-full w-full object-contain object-left-bottom opacity-50 mix-blend-multiply" 
        />
      </div>

      {/* =========================================
          MAIN CONTENT CONTAINER (Capped at 1300px)
      ========================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1300px] flex-col items-center px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center pt-14 text-center">
          <h2 className="font-allura text-4xl text-[#A76024] sm:text-5xl lg:text-7xl">
            How It All Began
          </h2>
          <p className="mt-4 max-w-2xl font-mona text-sm leading-relaxed text-[#2C1810]/80 sm:text-base lg:text-lg">
            A legacy carried forward, one honest step at a time.
          </p>
        </div>

        {/* 3-COLUMN GRID */}
        <div className="mt-16 grid w-full grid-cols-1 gap-12 md:grid-cols-3 lg:mt-24 lg:gap-8 xl:gap-16">
          {milestones.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              {/* Image Container with max-h-40 */}
              <div className="flex h-[160px] w-full items-end justify-center">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-40 w-auto max-w-full object-contain object-bottom"
                />
              </div>

              {/* Title */}
              <h3 className="mt-8 font-thunder text-2xl font-bold uppercase tracking-wide text-[#2C1810] lg:text-[1.75rem]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-[320px] font-mona text-xs leading-relaxed text-[#2C1810]/70 sm:text-sm lg:text-[15px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItBegan;