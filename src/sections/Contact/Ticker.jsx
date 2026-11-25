import { Wheat, Heart, Sparkles, Star, Coffee, Smile } from "lucide-react";

const tickerItems = [
  { text: "FRESH INGREDIENTS", icon: Wheat },
  { text: "BAKED WITH LOVE", icon: Heart },
  { text: "PREPARED IN HYGIENIC KITCHENS", icon: Sparkles },
  { text: "QUALITY YOU CAN TASTE", icon: Star },
  { text: "ALWAYS DELICIOUS", icon: Coffee },
  { text: "EVERY BITE, A LITTLE HAPPINESS", icon: Smile },
];

function Ticker() {
  const duplicatedItems = [...tickerItems, ...tickerItems];

  return (
    <div className="relative flex w-full overflow-hidden bg-deep-coffee py-5 sm:py-6">
      <div className="flex w-max flex-nowrap animate-marquee items-center hover:[animation-play-state:paused]">
        {duplicatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex shrink-0 items-center gap-3 px-6 sm:px-8">
              <Icon className="h-4 w-4 shrink-0 text-caramel" strokeWidth={2} />
              <span className="whitespace-nowrap font-mona text-xs font-semibold uppercase tracking-[0.15em] text-soft-ivory sm:text-sm">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-loop-contact {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee {
          animation: marquee-loop-contact 32s linear infinite;
        }
      `}} />
    </div>
  );
}

export default Ticker;
