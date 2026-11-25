import mascotGesturing from "../../assets/images/tech/8d5d2ae5-fa35-4387-8709-0be6f63de28a 1.png";
import ovalBg from "../../assets/images/tech/oval-bg.png";
import bgSketch from "../../assets/images/tech/b2ba8bcd-1ae9-4e8f-9638-bbae2a3936a2 7.png";

const OUTLET_STATS = [
  { value: "50+", line1: "OUTLET", line2: "" },
  { value: "1M+", line1: "HAPPY", line2: "CUSTOMER" },
  { value: "2+", line1: "STATES", line2: "" },
  { value: "32+", line1: "YEARS OF", line2: "TRUST" },
];

function OutletsMap() {
  return (
    <section className="relative w-full overflow-hidden bg-soft-ivory pt-14 pb-0 lg:pt-16">
      {/* Background Sketch (Storefront Left + Tea Glass & Samosa Right) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={bgSketch}
          alt=""
          className="h-full w-full object-cover object-bottom opacity-50 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-400 grid-cols-1 items-end gap-10 px-6 lg:grid-cols-12 lg:gap-12 lg:px-16">
        {/* Left Column: Thatha Mascot in Front of Oval Shape, Cropped Cleanly at Bottom */}
        <div className="relative order-2 flex items-end justify-center lg:order-1 lg:col-span-5">
          <div className="relative flex w-full max-w-85 items-end justify-center sm:max-w-97.5 lg:max-w-110">
            <img
              src={ovalBg}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-4 left-1/2 w-[84%] -translate-x-1/2 object-contain"
            />
            <img
              src={mascotGesturing}
              alt="Thatha Tea mascot presenting outlet network"
              className="relative z-10 w-[86%] object-contain object-bottom lg:-mb-16"
            />
          </div>
        </div>

        {/* Right Column: Bengaluru Map Card + Centered 4 Stats with Dividers */}
        <div className="order-1 flex flex-col items-center pb-10 lg:order-2 lg:col-span-7 lg:pb-12">
          {/* Bengaluru Map Card */}
          <div className="relative h-65 w-full max-w-155 overflow-hidden rounded-2xl border border-deep-coffee/10 bg-white shadow-xl sm:h-77.5">
            <iframe
              title="Thatha Tea Bengaluru Outlets Map"
              src="https://maps.google.com/maps?q=Bengaluru,Karnataka&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* 4 Centered Stats Row Below Map */}
          <div className="mt-7 grid w-full max-w-135 grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0">
            {OUTLET_STATS.map((stat, idx) => (
              <div
                key={stat.value}
                className={`flex flex-col items-center px-3 text-center ${
                  idx !== 0 ? "sm:border-l sm:border-deep-coffee/20" : ""
                }`}
              >
                <span className="font-mona text-xl font-bold leading-none text-deep-coffee sm:text-2xl">
                  {stat.value}
                </span>
                <span className="mt-1.5 font-mona text-[9px] font-medium uppercase leading-tight tracking-wider text-deep-coffee/80 sm:text-[10px]">
                  {stat.line1}
                  {stat.line2 && (
                    <>
                      <br />
                      {stat.line2}
                    </>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OutletsMap;
