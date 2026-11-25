import { Users, Sparkles, TrendingUp, HeartHandshake } from "lucide-react";

const CAREER_TICKER_ITEMS = [
  { text: "GREAT TEAM", icon: Users },
  { text: "REAL OPPORTUNITIES", icon: Sparkles },
  { text: "LEARN & GROW", icon: TrendingUp },
  { text: "BE PART OF SOMETHING SPECIAL", icon: HeartHandshake },
];

function CareerTicker() {
  const repeatedItems = [
    ...CAREER_TICKER_ITEMS,
    ...CAREER_TICKER_ITEMS,
    ...CAREER_TICKER_ITEMS,
    ...CAREER_TICKER_ITEMS,
  ];

  return (
    <section
      aria-label="Career Highlights"
      className="relative w-full overflow-hidden border-y border-soft-ivory/10 bg-roast-brown py-4 sm:py-5"
    >
      <div className="flex w-max flex-nowrap animate-marquee-career items-center hover:[animation-play-state:paused]">
        {repeatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex shrink-0 items-center gap-2.5 px-6 sm:px-8"
            >
              <Icon
                className="h-4 w-4 shrink-0 text-caramel"
                strokeWidth={1.8}
              />
              <span className="whitespace-nowrap font-mona text-xs font-medium uppercase tracking-widest text-soft-ivory/95 sm:text-[13px]">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee-loop-career {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-career {
              animation: marquee-loop-career 30s linear infinite;
            }
          `,
        }}
      />
    </section>
  );
}

export default CareerTicker;
