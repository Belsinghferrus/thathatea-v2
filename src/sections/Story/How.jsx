import React from "react";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL IMAGE PATHS ---
import leftBgSketch from "../../assets/images/story/how-bg1.png"; 
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
    // Changed max-h to min-h to prevent clipping. Gradient creates the solid #F6EEDF center.
    <section className="relative flex min-h-[60vh] w-full flex-col justify-center overflow-hidden bg-[linear-gradient(90deg,#EEDCC2_0%,#F6EEDF_15%,#F6EEDF_85%,#EEDCC2_100%)] py-16 lg:py-24">
      
      {/* LEFT BACKGROUND SKETCH - Adjusted responsive sizes */}
      <div className="pointer-events-none absolute -left-10 bottom-0 z-0 hidden h-[300px] w-[20%] lg:block lg:h-[350px] lg:w-[25%] xl:h-[450px]">
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
        <div className="flex flex-col items-center text-center">
          <h2 className="font-allura text-4xl text-[#A76024] sm:text-5xl lg:text-7xl">
            How It All Began
          </h2>
          <p className="mt-4 max-w-2xl font-mona text-sm leading-relaxed text-[#2C1810]/80 sm:text-base lg:text-lg">
            A legacy carried forward, one honest step at a time.
          </p>
        </div>

        {/* 3-COLUMN GRID */}
        <div className="mt-12 grid w-full grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 lg:mt-20 lg:gap-8 xl:gap-16">
          {milestones.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              {/* Image Container - Responsive Height */}
              <div className="flex h-[140px] w-full items-end justify-center md:h-[160px]">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-h-full w-auto max-w-full object-contain object-bottom"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 font-thunder text-2xl font-bold uppercase tracking-wide text-[#2C1810] lg:mt-8 lg:text-[1.75rem]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-[320px] font-mona text-sm leading-relaxed text-[#2C1810]/70 lg:text-[15px]">
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