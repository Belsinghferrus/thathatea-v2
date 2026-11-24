import React from "react";
import { Wheat, Heart, Sparkles, Star, Coffee, Smile } from "lucide-react";

const tickerItems = [
  { text: "FRESH INGREDIENTS", icon: Wheat },
  { text: "BAKED WITH LOVE", icon: Heart },
  { text: "PREPARED IN HYGIENIC KITCHENS", icon: Sparkles },
  { text: "QUALITY YOU CAN TASTE", icon: Star },
  { text: "ALWAYS DELICIOUS", icon: Coffee },
  { text: "EVERY BITE, A LITTLE HAPPINESS", icon: Smile },
];

function FranchiseTicker() {
  // Duplicate the array exactly once for a perfect 50% seamless loop
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    // Dark brown background, hidden overflow to clip the scrolling track
    <div className="relative flex w-full overflow-hidden bg-[#2C1810] py-6">
      
      {/* The Animated Track */}
      <div className="flex w-max flex-nowrap animate-marquee items-center hover:[animation-play-state:paused]">
        {duplicatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index} 
              className="flex shrink-0 items-center gap-3 px-8"
            >
              {/* Icon colored to match the caramel accent */}
              <Icon className="h-4 w-4 shrink-0 text-[#A76024]" strokeWidth={2} />
              
              {/* Text - whitespace-nowrap ensures it stays on a single line */}
              <span className="whitespace-nowrap font-mona text-xs font-semibold uppercase tracking-[0.15em] text-[#F6EEDF] sm:text-sm">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* Custom Keyframes for the Seamless Loop */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-loop {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee {
          animation: marquee-loop 30s linear infinite;
        }
      `}} />
    </div>
  );
}

export default FranchiseTicker;