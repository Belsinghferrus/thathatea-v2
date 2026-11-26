import React from "react";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL IMAGE PATHS ---
import brandedChaiImg from "../../assets/images/home/tea.png";
import processBgSketch from "../../assets/images/manufacturing/processBgSketch.webp";

const PROCESS_STEPS = [
  {
    line1: "PREMIUM",
    line2: "INGREDIENTS",
    description: "We source the finest quality ingredients.",
  },
  {
    line1: "MODERN",
    line2: "EQUIPMENTS",
    description: "Advanced technology for consistent quality.",
  },
  {
    line1: "IN-HOUSE",
    line2: "PRODUCTION",
    description: "Hygienic, standardised & large-scale production.",
  },
  {
    line1: "QUALITY",
    line2: "CHECKS",
    description: "Strict quality and hygiene standards.",
  },
  {
    line1: "SAFE",
    line2: "PACKAGING",
    description: "Freshly packed to retain taste and texture.",
  },
  {
    line1: "SUPPLY TO",
    line2: "OUTLETS",
    description: "Delivered fresh to all our outlets.",
  },
];

function Process() {
  return (
    // Section background with no bottom padding to keep it tight
    <section className="relative w-full overflow-hidden bg-[#F6EEDF] py-16 lg:py-24">
      
      {/* Right-Side Background Sketch */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={processBgSketch}
          alt=""
          className="h-full w-full object-cover object-bottom-right opacity-30 mix-blend-multiply"
        />
      </div>

      {/* =========================================
          MAIN CONTENT CONTAINER (Max Width & Centered)
      ========================================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1300px] px-6 lg:px-8">
        
        {/* Decorative Script Section Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="font-allura text-4xl text-[#A76024] sm:text-5xl lg:text-[3.5rem]">
            Our Manufacturing Process
          </span>
        </div>

        {/* 6 Circular Steps Grid */}
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:mt-16 lg:grid-cols-6 lg:gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              
              {/* Circular Photo Badge */}
              <div className="relative h-28 w-28 overflow-hidden rounded-full bg-[#D8C5A8] sm:h-32 sm:w-32 lg:h-36 lg:w-36">
                <img
                  src={brandedChaiImg}
                  alt={`${step.line1} ${step.line2}`}
                  className="h-full w-full scale-[1.55] object-cover object-[68%_55%]"
                />
              </div>

              {/* Step Title */}
              <h3 className="mt-5 font-thunder text-lg uppercase leading-[0.95] tracking-[0.02em] text-[#2C1810] sm:text-xl lg:text-[1.35rem]">
                {step.line1}
                <br />
                {step.line2}
              </h3>

              {/* Step Description */}
              <p className="mt-2 max-w-[160px] font-mona text-xs leading-[1.4] text-[#2C1810]/70 sm:text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;