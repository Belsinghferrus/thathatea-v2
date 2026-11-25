import React from "react";

const stats = [
  { value: "1370+", label: "HAPPY CUSTOMERS DAILY" },
  { value: "4+", label: "YEARS OF EXPERIENCE" },
  { value: "18+", label: "CITIES REACHED" },
  { value: "150+", label: "TEAM MEMBERS" },
];

function StatsBreak() {
  // Duplicate the array for the seamless mobile loop
  const duplicatedStats = [...stats, ...stats, ...stats];

  return (
    // Dark brown background, fixed height
    <div className="relative flex h-22.5 w-full items-center overflow-hidden bg-deep-coffee text-soft-ivory">
      
      {/* DESKTOP VIEW: Static and evenly spaced */}
      <div className="mx-auto hidden w-full max-w-400 items-center justify-evenly px-6 lg:flex">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            {/* Stat Item */}
            <div className="flex flex-col items-center text-center">
              <span className="font-thunder text-2xl text-[#D8A15E] xl:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 font-mona text-[11px] font-medium tracking-widest uppercase xl:text-xs">
                {stat.label}
              </span>
            </div>

            {/* Vertical Divider (Except after the last item) */}
            {index !== stats.length - 1 && (
              <div className="h-8 w-[1px] bg-soft-ivory/20" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* MOBILE VIEW: Looping Marquee */}
      <div className="flex w-full lg:hidden">
        <div className="flex w-max animate-marquee items-center">
          {duplicatedStats.map((stat, index) => (
            <div 
              key={index} 
              className="flex w-50 shrink-0 flex-col items-center text-center"
            >
              <span className="font-thunder text-xl font-bold text-[#D8A15E]">
                {stat.value}
              </span>
              <span className="mt-1 font-mona text-[10px] font-medium tracking-widest uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-stats {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } 
        }
        .animate-marquee {
          animation: marquee-stats 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}

export default StatsBreak;