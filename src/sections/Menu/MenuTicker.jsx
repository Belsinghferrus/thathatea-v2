import { Wheat, Heart, Sparkles, Award, Coffee, Smile } from "lucide-react";

const RIBBON_ITEMS = [
  { text: "FRESH INGREDIENTS", icon: Wheat },
  { text: "BAKED WITH LOVE", icon: Heart },
  { text: "PREPARED IN HYGIENIC KITCHENS", icon: Sparkles },
  { text: "QUALITY YOU CAN TASTE", icon: Award },
  { text: "ALWAYS DELICIOUS", icon: Coffee },
  { text: "EVERY BITE, A LITTLE HAPPINESS", icon: Smile },
];

function MenuTicker() {
  const duplicatedItems = [...RIBBON_ITEMS, ...RIBBON_ITEMS, ...RIBBON_ITEMS];

  return (
    <div className="relative flex w-full overflow-hidden bg-[#3A1E0E] py-4 sm:py-5">
      <div className="flex w-max flex-nowrap items-center animate-menu-marquee hover:[animation-play-state:paused]">
        {duplicatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.text}-${index}`}
              className="flex shrink-0 items-center gap-2.5 px-5 lg:px-7"
            >
              <Icon
                className="h-4 w-4 shrink-0 text-[#D49653]"
                strokeWidth={1.8}
              />
              <span className="whitespace-nowrap font-mona text-[11px] font-medium uppercase tracking-[0.14em] text-[#F6EEDF] sm:text-xs">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes menu-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-menu-marquee {
          animation: menu-marquee 42s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default MenuTicker;
