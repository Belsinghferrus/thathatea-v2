import { ArrowDown } from "lucide-react";
import heroMascotImg from "../../assets/images/career/Rectangle 1.png";
import heroBgSketch from "../../assets/images/career/b2ba8bcd-1ae9-4e8f-9638-bbae2a3936a2 6.png";

function Hero() {
  const handleScrollToPositions = () => {
    const target = document.getElementById("open-positions");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-svh w-full items-center overflow-hidden bg-soft-ivory pt-28 pb-14 lg:pt-24 lg:pb-0">
      {/* Subtle Background Sketch */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={heroBgSketch}
          alt=""
          className="h-full w-full object-cover object-right opacity-15 mix-blend-multiply"
        />
      </div>

      {/* Main Container - Matches Footer Left/Right Padding */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-400 items-center px-6 lg:px-16">
        <div className="flex w-full flex-col items-start text-left lg:w-[46%]">
          {/* Decorative Script Kicker */}
          <span className="font-allura text-3xl text-caramel sm:text-4xl lg:text-[3.1rem] xl:text-[3.5rem]">
            Careers at Thatha
          </span>

          {/* Main Heading - font-thunder, leading-[0.92], no font-bold */}
          <h1 className="mt-1 font-thunder text-5xl uppercase leading-[0.92] tracking-[-0.01em] text-deep-coffee sm:text-6xl lg:text-[4.75rem] xl:text-[5.75rem]">
            MORE THAN
            <br />
            A JOB,
          </h1>

          {/* Supporting Copy */}
          <p className="mt-5 max-w-95 font-mona text-xs leading-relaxed text-deep-coffee/80 sm:text-sm">
            Be part of a team that serves great food, warm hospitality and
            experiences people love. Grow with us.
          </p>

          {/* CTA Button */}
          <button
            type="button"
            onClick={handleScrollToPositions}
            className="group mt-7 inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-caramel px-6 py-3 font-mona text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-[#8D4A15] active:scale-95"
          >
            <span>VIEW OPEN ROLES</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Right Side Mascot Behind Wooden Tea Counter */}
      <div className="pointer-events-none relative z-10 mt-8 flex w-full justify-center lg:absolute lg:right-[4%] lg:bottom-0 lg:mt-0 lg:h-[82%] lg:w-auto lg:justify-end xl:right-[6%] xl:h-[86%]">
        <img
          src={heroMascotImg}
          alt="Thatha Tea mascot serving tea behind traditional counter"
          className="h-72 w-auto object-contain object-bottom sm:h-96 lg:h-full"
        />
      </div>
    </section>
  );
}

export default Hero;
