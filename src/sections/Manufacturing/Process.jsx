import brandedChaiImg from "../../assets/images/home/tea.png";
import processBgSketch from "../../assets/images/manufacturing/b2ba8bcd-1ae9-4e8f-9638-bbae2a3936a2 4.png";

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
    <section className="relative w-full overflow-hidden bg-soft-ivory py-14 sm:py-16 lg:py-20">
      {/* Right-Side Background Sketch (Tea Glass, Samosa, Palm Trees & Leaves) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={processBgSketch}
          alt=""
          className="h-full w-full object-cover object-bottom-right opacity-30 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-400 px-6 lg:px-16">
        {/* Decorative Script Section Heading */}
        <div className="text-center">
          <span className="font-allura text-3xl text-caramel sm:text-4xl lg:text-[2.75rem]">
            Our Manufacturing Process
          </span>
        </div>

        {/* 6 Circular Steps Grid - Clean Circles Without White Borders or Shadows */}
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              {/* Circular Photo Badge */}
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-[#D8C5A8] sm:h-28 sm:w-28 lg:h-31 lg:w-31">
                <img
                  src={brandedChaiImg}
                  alt={`${step.line1} ${step.line2}`}
                  className="h-full w-full scale-[1.55] object-cover object-[68%_55%]"
                />
              </div>

              {/* Step Title - 2 Lines, font-thunder, no font-bold */}
              <h3 className="mt-4 font-thunder text-lg uppercase leading-[0.95] tracking-[0.01em] text-deep-coffee sm:text-xl">
                {step.line1}
                <br />
                {step.line2}
              </h3>

              {/* Step Description */}
              <p className="mt-1.5 max-w-[145px] font-mona text-[11px] leading-[1.35] text-deep-coffee/75">
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
