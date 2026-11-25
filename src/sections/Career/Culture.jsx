import { ArrowRight } from "lucide-react";
import ovalShape from "../../assets/images/career/Background.png";
import cultureMascot from "../../assets/images/career/image 2290.png";
import chaiCornerImg from "../../assets/images/career/career-chai-_oXe-1La 1.png";

function Culture() {
  const handleScrollToApply = () => {
    const target = document.getElementById("apply-now");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-r from-[#361D11] via-deep-coffee to-[#22120B] pt-14 pb-0 lg:py-0 lg:min-h-85">
      <div className="relative z-10 mx-auto grid w-full max-w-400 grid-cols-1 items-center gap-8 px-6 lg:min-h-85 lg:grid-cols-12 lg:px-16">
        {/* Left Column: Thatha Mascot Inside Tilted Caramel Oval */}
        <div className="relative order-2 flex h-full items-end justify-center lg:order-1 lg:col-span-5">
          <div className="relative flex w-full max-w-75 items-end justify-center sm:max-w-85 lg:max-w-90">
            <img
              src={ovalShape}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-2 left-1/2 w-[88%] -translate-x-1/2 object-contain"
            />
            <img
              src={cultureMascot}
              alt="Thatha Tea welcoming team culture mascot"
              className="relative z-10 w-[84%] object-contain object-bottom"
            />
          </div>
        </div>

        {/* Right Column: Culture Copy & CTA */}
        <div className="order-1 flex flex-col items-start text-left lg:order-2 lg:col-span-7 lg:py-16 lg:pl-8">
          <span className="font-mona text-[11px] font-semibold uppercase tracking-[0.2em] text-caramel">
            OUR CULTURE
          </span>

          <h2 className="mt-2 font-thunder text-4xl uppercase leading-[0.92] tracking-[-0.01em] text-soft-ivory sm:text-5xl lg:text-[3.4rem]">
            A WARM &amp; GROWING
            <br />
            WORKPLACE
          </h2>

          <p className="mt-3 max-w-100 font-mona text-xs leading-relaxed text-soft-ivory/80 sm:text-sm">
            At Thatha Tea, we value people, craft, and a shared love for
            creating memorable tea experiences.
          </p>

          <button
            type="button"
            onClick={handleScrollToApply}
            className="group mt-6 inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-caramel px-5 py-2.5 font-mona text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-[#8D4A15] active:scale-95"
          >
            <span>APPLY NOW</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Bottom-Right Decorative Steaming Chai & Leaves */}
      <div className="pointer-events-none absolute right-2 bottom-0 z-10 hidden w-40 sm:block lg:right-8 lg:w-52 xl:w-60">
        <img
          src={chaiCornerImg}
          alt=""
          className="h-auto w-full object-contain object-bottom"
        />
      </div>
    </section>
  );
}

export default Culture;
