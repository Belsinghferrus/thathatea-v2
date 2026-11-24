import teaGlassImg from "../../assets/images/contact/career-chai-_oXe-1La 3.png";

const PROCESS_STEPS = [
  {
    title: "PREMIUM INGREDIENTS",
    description: "We source the finest quality ingredients.",
  },
  {
    title: "MODERN EQUIPMENTS",
    description: "Advanced technology for consistent quality.",
  },
  {
    title: "IN-HOUSE PRODUCTION",
    description: "Hygienic standardizes & large-scale production.",
  },
  {
    title: "QUALITY CHECKS",
    description: "Strict quality and hygiene standards.",
  },
  {
    title: "SAFE PACKAGING",
    description: "Freshly packed to retain taste and texture.",
  },
  {
    title: "SUPPLY TO OUTLETS",
    description: "Delivered fresh to all our outlets.",
  },
];

function Process() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6EEDF] py-16 sm:py-20 lg:py-24">
      {/* Decorative Faint Tea Glass Watermark on Bottom Right */}
      <div className="pointer-events-none absolute -bottom-10 right-2 z-0 hidden w-44 opacity-20 mix-blend-multiply sm:block lg:w-56">
        <img
          src={teaGlassImg}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Decorative Script Section Heading */}
        <div className="text-center">
          <span className="font-allura text-3xl sm:text-4xl lg:text-5xl text-[#A76024]">
            Our Manufacturing Process
          </span>
        </div>

        {/* 6 Circular Steps Grid */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Circular Step Badge with Full Photo Fill */}
              <div className="group relative h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 overflow-hidden rounded-full border-2 border-white/90 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  src={teaGlassImg}
                  alt={step.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Step Title - font-thunder, no font-bold, leading-[1] */}
              <h3 className="mt-4 font-thunder text-base sm:text-lg lg:text-xl uppercase tracking-wider text-[#2C1810] leading-[1]">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="mt-1.5 max-w-[170px] font-mona text-xs leading-relaxed text-[#2C1810]/75">
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
