import React from "react";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL IMAGE PATHS ---
import awardBg from "../../assets/images/story/awardbg.png"; // The right background illustration
import awardBadge from "../../assets/images/story/award.svg"; // The individual gold badge (if you have individual ones, map them here)

const awardsData = [
  {
    title: "Most Growing Tea Cafe Franchise Chain of the Year 2025.",
    date: "MAY 23rd 2025",
    badge: awardBadge,
  },
  {
    title: "Best Tea Cafe Franchise Chain of the Year 2024.",
    date: "JUN 7th 2024",
    badge: awardBadge,
  },
  {
    title: "Best Tea Cafe Franchise of 2023.",
    date: "SEP 30th 2023",
    badge: awardBadge,
  },
  {
    title: "Best Emerging Tea Cafe Franchise of the Year 2023.",
    date: "JUN 25th 2023",
    badge: awardBadge,
  },
];

function Awards() {
  return (
    // Exact 50vh min-height, bg color #F6EEDF
    <section className="relative flex min-h-[50vh] w-full items-center overflow-hidden bg-soft-ivory py-16 lg:py-0">
      
      {/* RIGHT BACKGROUND ILLUSTRATION */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[45%] lg:block">
        <img 
          src={awardBg} 
          alt="" 
          className="h-full w-full object-cover object-bottom-left opacity-70" 
        />
      </div>

      {/* =========================================
          MAIN CONTENT CONTAINER
      ========================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-400 flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16 lg:px-16 xl:px-24">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="flex w-full flex-col items-center text-center lg:w-[35%] lg:items-start lg:text-left">
          
          {/* Script Kicker */}
          <span className="font-allura text-4xl text-caramel sm:text-5xl lg:text-6xl xl:text-[4rem]">
            Awards & Recognition
          </span>

          {/* Main Heading */}
          <h2 className="mt-2 font-thunder text-4xl  uppercase leading-none tracking-[-0.02em] sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
            <span className="text-deep-coffee">Trust Earned.</span><br />
            <span className="text-caramel">Recognition<br />Shared.</span>
          </h2>

        </div>

        {/* RIGHT COLUMN: 4 Award Badges */}
        <div className="grid w-full grid-cols-2 gap-8 sm:gap-10 lg:w-[65%] lg:grid-cols-4 lg:gap-6 xl:gap-10">
          {awardsData.map((award, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              {/* Badge Image */}
              <div className="relative flex h-30 w-30 items-center justify-center sm:h-27.5 sm:w-27.5 lg:h-57.5 lg:w-57.5">
                <img 
                  src={award.badge} 
                  alt="Award Badge" 
                  className="h-full w-full object-contain "
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 max-w-50 font-mona text-xs font-semibold leading-snug text-deep-coffee sm:text-sm">
                {award.title}
              </h3>

              {/* Date */}
              <p className="mt-2 font-mona text-[10px] font-medium tracking-wider text-deep-coffee/60 sm:text-xs">
                {award.date}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Awards;