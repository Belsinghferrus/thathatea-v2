import chaiBoardImg from "../../assets/images/tech/427b4f82-4d2f-436c-bb51-732fef9af05a 1.png";

const PLATFORM_HIGHLIGHTS = [
  "SIMPLE TO USE",
  "FAST BILLING",
  "INVENTORY CONTROL",
  "BUILT FOR GROWTH",
];

function Platform() {
  return (
    <section className="relative min-h-40vh w-full bg-[#9F5B23] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto grid w-full max-w-350 grid-cols-1 items-center gap-8 px-6 lg:grid-cols-12 lg:gap-12 lg:px-16">
        {/* Left: Steaming Chai Glass on Wooden Board */}
        <div className="flex justify-center lg:col-span-5 lg:justify-start">
          <img
            src={chaiBoardImg}
            alt="Steaming Thatha Tea glass with spices and fresh tea leaves"
            className="w-full max-w-80 object-contain drop-shadow-xl sm:max-w-95 lg:-my-10 lg:max-w-105"
          />
        </div>

        {/* Right: Platform Copy & 4-Item Strip */}
        <div className="flex flex-col items-start text-left lg:col-span-7">
          <span className="font-mona text-[10px] font-semibold uppercase tracking-[0.18em] text-soft-ivory/80 sm:text-[11px]">
            BUILT FOR TEA SHOPS &amp; BAKERY OUTLETS
          </span>

          <h2 className="mt-2 font-thunder text-3xl uppercase leading-[0.94] tracking-[-0.01em] text-white sm:text-4xl lg:text-[3.1rem]">
            A PLATFORM THAT
            <br />
            UNDERSTANDS YOUR BUSINESS.
          </h2>

          <p className="mt-3 max-w-125 font-mona text-xs leading-relaxed text-soft-ivory/90 sm:text-sm">
            We built our own technology platform because every tea shop and
            bakery has unique needs. Designed to make your daily operations
            faster, simpler, and more reliable.
          </p>

          {/* 4-Item Divider Row */}
          <div className="mt-6 grid w-full max-w-135 grid-cols-2 gap-y-3 border-t border-white/20 pt-5 sm:grid-cols-4 sm:gap-y-0">
            {PLATFORM_HIGHLIGHTS.map((item, idx) => (
              <div
                key={item}
                className={`font-mona text-[10px] font-semibold uppercase tracking-wider text-white sm:text-[11px] ${
                  idx !== 0 ? "sm:border-l sm:border-white/25 sm:pl-4" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Platform;
