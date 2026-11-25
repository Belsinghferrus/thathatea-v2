import teaMasterIcon from "../../assets/images/career/image 2309.png";
import cashierIcon from "../../assets/images/career/image 2310.png";
import kitchenHelperIcon from "../../assets/images/career/image 2311.png";
import baristaIcon from "../../assets/images/career/image 2312.png";
import paperTextureBg from "../../assets/images/career/image 2363.png";
import jobsSectionBg from "../../assets/images/career/b2ba8bcd-1ae9-4e8f-9638-bbae2a3936a2 6.png";

const JOB_ROLES = [
  {
    id: "tea-master",
    title: "TEA MASTER / TEA BREWER",
    subtitle: "Brew different types of tea with consistent taste and quality",
    icon: teaMasterIcon,
    responsibilities: [
      "Brew different types of tea with consistent taste and quality",
      "Maintain hygiene and cleanliness of the tea-making area",
      "Monitor stock of tea leaves, milk, sugar, and other ingredients",
      "Ensure fast and accurate preparation during peak hours",
    ],
    requirements: [
      "Basic cooking skills",
      "Knowledge of food safety",
      "Ability to work in a fast-paced environment",
      "6 months experience preferred",
    ],
    shiftTiming: "6:00 AM - 2:00 PM / 2:00 PM - 10:00 PM",
    experience: "Minimum 1+ Year",
  },
  {
    id: "cashier",
    title: "CASHIER",
    subtitle: "Handle POS billing, payments, and friendly customer interactions",
    icon: cashierIcon,
    responsibilities: [
      "Greet customers warmly and take accurate food & tea orders",
      "Operate POS billing system and handle cash/UPI payments",
      "Maintain clean and organized front-counter appearance",
      "Coordinate smoothly with kitchen and brewing staff",
    ],
    requirements: [
      "Basic math & billing skills",
      "Polite communication & customer service",
      "Ability to work in a fast-paced environment",
      "6 months experience preferred",
    ],
    shiftTiming: "6:00 AM - 2:00 PM / 2:00 PM - 10:00 PM",
    experience: "Fresher - 1 Year",
  },
  {
    id: "kitchen-helper",
    title: "KITCHEN HELPER / COOK",
    subtitle: "Prepare snacks and maintain kitchen hygiene standards",
    icon: kitchenHelperIcon,
    responsibilities: [
      "Prepare fresh snacks, buns, and savouries per standard recipes",
      "Maintain hygiene and cleanliness of kitchen prep stations",
      "Assist with ingredient prep, storage, and stock rotation",
      "Ensure fast and accurate preparation during peak hours",
    ],
    requirements: [
      "Basic cooking skills",
      "Knowledge of food safety",
      "Ability to work in a fast-paced environment",
      "6 months experience preferred",
    ],
    shiftTiming: "6:00 AM - 2:00 PM / 2:00 PM - 10:00 PM",
    experience: "Minimum 1+ Year",
  },
  {
    id: "barista",
    title: "BARISTA",
    subtitle: "Prepare coffee-based and tea-based specialty beverages",
    icon: baristaIcon,
    responsibilities: [
      "Prepare specialty hot & cold beverages with consistent quality",
      "Maintain hygiene and cleanliness of the beverage counter",
      "Monitor stock of coffee, syrups, milk, and other ingredients",
      "Ensure fast and accurate preparation during peak hours",
    ],
    requirements: [
      "Beverage preparation skills",
      "Knowledge of food safety",
      "Ability to work in a fast-paced environment",
      "6 months experience preferred",
    ],
    shiftTiming: "6:00 AM - 2:00 PM / 2:00 PM - 10:00 PM",
    experience: "Minimum 1+ Year",
  },
];

function OpenPositions({ onSelectRole }) {
  const handleApplyClick = (roleTitle) => {
    if (onSelectRole) {
      onSelectRole(roleTitle);
    }
    const target = document.getElementById("apply-now");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="open-positions"
      className="relative w-full overflow-hidden bg-soft-ivory py-16 sm:py-20 lg:py-24"
    >
      {/* Background Sketch */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={jobsSectionBg}
          alt=""
          className="h-full w-full object-cover object-bottom-right opacity-20 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-400 px-6 lg:px-16">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="font-thunder text-4xl uppercase leading-[0.92] tracking-[-0.01em] text-deep-coffee sm:text-5xl lg:text-[3.5rem]">
            JOIN OUR TEA
            <br />
            SHOP TEAM
          </h2>
        </div>

        {/* 2x2 Job Cards Grid */}
        <div className="mx-auto mt-12 grid max-w-260 grid-cols-1 gap-7 md:grid-cols-2 lg:gap-8">
          {JOB_ROLES.map((role) => (
            <div
              key={role.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-deep-coffee/10 bg-[#F4E3C8] shadow-lg transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Card Top Caramel Header */}
              <div className="flex items-center gap-4 bg-[#A05A22] px-5 py-4 sm:px-6">
                <img
                  src={role.icon}
                  alt={role.title}
                  className="h-14 w-16 shrink-0 object-contain sm:h-16 sm:w-20"
                />
                <div className="text-left">
                  <h3 className="font-thunder text-xl uppercase leading-none tracking-wide text-white sm:text-2xl">
                    {role.title}
                  </h3>
                  <p className="mt-1 font-mona text-[11px] leading-snug text-white/90 sm:text-xs">
                    {role.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body with Vintage Paper Texture */}
              <div className="relative flex flex-1 flex-col justify-between p-5 sm:p-6">
                <img
                  src={paperTextureBg}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-80 mix-blend-multiply"
                />

                <div className="relative z-10">
                  {/* Key Responsibilities */}
                  <h4 className="font-mona text-[10px] font-bold uppercase tracking-wider text-deep-coffee sm:text-[11px]">
                    KEY RESPONSIBILITIES:
                  </h4>
                  <ul className="mt-2 space-y-1 font-mona text-[11px] leading-relaxed text-deep-coffee/85 sm:text-xs">
                    {role.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="mt-0.5 text-caramel">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Requirements */}
                  <h4 className="mt-4 font-mona text-[10px] font-bold uppercase tracking-wider text-deep-coffee sm:text-[11px]">
                    REQUIREMENTS:
                  </h4>
                  <ul className="mt-2 space-y-1 font-mona text-[11px] leading-relaxed text-deep-coffee/85 sm:text-xs">
                    {role.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="mt-0.5 text-caramel">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Shift Timing, Experience & Apply Button */}
                <div className="relative z-10 mt-5">
                  <div className="flex flex-col justify-between gap-2 rounded-lg bg-white/75 px-4 py-2.5 sm:flex-row sm:items-center">
                    <div>
                      <span className="block font-mona text-[9px] font-semibold uppercase tracking-wider text-deep-coffee/60">
                        Shift Timing
                      </span>
                      <span className="font-mona text-[11px] font-semibold text-deep-coffee">
                        {role.shiftTiming}
                      </span>
                    </div>
                    <div className="sm:text-right">
                      <span className="block font-mona text-[9px] font-semibold uppercase tracking-wider text-deep-coffee/60">
                        Experience
                      </span>
                      <span className="font-mona text-[11px] font-semibold text-deep-coffee">
                        {role.experience}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      onClick={() => handleApplyClick(role.title)}
                      className="cursor-pointer rounded-lg bg-deep-coffee px-7 py-2.5 font-mona text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm transition-colors duration-200 hover:bg-caramel"
                    >
                      APPLY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpenPositions;
