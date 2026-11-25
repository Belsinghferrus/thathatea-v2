import React from "react";
import { Coffee, Leaf } from "lucide-react";

const tickerItems = [
  { text: "FRESHLY BREWED", icon: "cup" },
  { text: "WARM CUPS", icon: "leaf" },
  { text: "SINCE 1991", icon: "cup" },
  { text: "FAMILIAR FLAVOURS", icon: "leaf" },
  { text: "TEA TIME STORIES", icon: "cup" },
  { text: "EVERYDAY COMFORT", icon: "leaf" },
];

function Ticker() {
  // Triple the array to ensure the ticker is long enough to seamlessly loop on ultra-wide screens
  const duplicatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    // Exact 20px height, deep coffee background, soft ivory text
    <div className="relative flex h-12.5 w-full overflow-hidden bg-deep-coffee text-soft-ivory">
      
      {/* Animated Track */}
      <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3 px-6">
            
            {/* Icons scaled down to fit perfectly within the 20px height */}
            {item.icon === "cup" ? (
              <Coffee className="h-2.5 w-2.5 opacity-80" />
            ) : (
              <Leaf className="h-2.5 w-2.5 opacity-80" />
            )}
            
            {/* Text */}
            <span className="font-mona text-[12px] font-medium uppercase tracking-[0.2em] whitespace-nowrap">
              {item.text}
            </span>
            
          </div>
        ))}
      </div>

      {/* Custom Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Adjust based on the number of duplicates */
        }
        .animate-marquee {
          animation: ticker-marquee 40s linear infinite;
        }
      `}} />
    </div>
  );
}

export default Ticker;