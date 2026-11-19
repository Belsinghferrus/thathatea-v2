import React, { useState, useEffect } from "react";

const features = [
  "SALES INSIGHTS",
  "INVENTORY CONTROL",
  "CENTRALIZED SUPPLY",
  "MENU & PRICING",
  "SCALABLE OPERATIONS",
];

function FeaturesBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Mobile Animation: Cycle through items every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    // Deep coffee background, exact height of 64px
    <div className="relative flex h-[64px] w-full items-center overflow-hidden bg-[#2C1810] text-[#F6EEDF]">
      
      {/* DESKTOP VIEW: Static and evenly spaced */}
      <div className="mx-auto hidden w-full max-w-[1600px] items-center justify-evenly px-6 lg:flex">
        {features.map((feature, index) => (
          <span 
            key={index} 
            className="font-mona text-[13px] font-semibold uppercase tracking-[0.15em]"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* MOBILE VIEW: Elegant Fade & Slide Rotation */}
      <div className="relative flex h-[64px] w-full items-center justify-center overflow-hidden lg:hidden">
        {features.map((feature, index) => (
          <span
            key={index}
            className={`
              absolute font-mona text-[13px] font-semibold uppercase tracking-[0.15em] 
              transition-all duration-700 ease-in-out
              ${
                index === activeIndex
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0 pointer-events-none"
              }
            `}
          >
            {feature}
          </span>
        ))}
      </div>

    </div>
  );
}

export default FeaturesBar;