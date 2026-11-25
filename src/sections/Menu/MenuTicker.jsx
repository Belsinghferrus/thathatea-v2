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

function MenuTicker() {
  // Duplicate the array to create a seamless scrolling effect
  const duplicatedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    // Dark brown background
    <div className="relative flex w-full overflow-hidden bg-deep-coffee py-6">
      
      {/* The Animated Track - Added flex-nowrap to prevent wrapping */}
      <div className="flex w-max flex-nowrap animate-marquee items-center hover:[animation-play-state:paused]">
        {duplicatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index} 
              className="flex shrink-0 items-center gap-3 px-6 lg:px-8"
            >
              {/* Icon colored to match the caramel accent */}
              <Icon className="h-4 w-4 shrink-0 text-caramel" strokeWidth={2} />
              
              {/* Text - Added whitespace-nowrap to ensure it stays on one line */}
              <span className="whitespace-nowrap font-mona text-xs font-semibold uppercase tracking-[0.15em] text-soft-ivory sm:text-sm">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* Custom Keyframes for the Marquee Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-bakery {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } 
        }
        .animate-marquee {
          animation: marquee-bakery 40s linear infinite;
        }
      `}} />
    </div>
  );
}

export default MenuTicker;