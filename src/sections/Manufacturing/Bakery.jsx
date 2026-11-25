import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ROUTES } from "../../constant/routes";
import premiumTeaImg from "../../assets/images/home/tea2.png";
import freshBakesImg from "../../assets/images/home/bun.png";
import butterCookiesImg from "../../assets/images/home/biscuit.png";
import coolDrinksImg from "../../assets/images/home/coffee.png";

const BAKERY_ITEMS = [
  {
    name: "PREMIUM TEA",
    image: premiumTeaImg,
    imgClass: "scale-110 object-bottom",
  },
  {
    name: "FRESH BAKES",
    image: freshBakesImg,
    imgClass: "scale-[1.22] object-[20%_center]",
  },
  {
    name: "BUTTER COOKIES",
    image: butterCookiesImg,
    imgClass: "object-cover object-center",
  },
  {
    name: "COOL DRINKS",
    image: coolDrinksImg,
    imgClass: "object-cover object-center",
  },
];

function Bakery() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % BAKERY_ITEMS.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + BAKERY_ITEMS.length) % BAKERY_ITEMS.length
    );
  };

  const orderedItems = [
    ...BAKERY_ITEMS.slice(startIndex),
    ...BAKERY_ITEMS.slice(0, startIndex),
  ];

  return (
    <section className="relative w-full bg-soft-ivory">
      <div className="w-full overflow-hidden rounded-3xl bg-roast-brown py-14 sm:rounded-3xl sm:py-16 lg:rounded-3xl lg:py-20">
        <div className="mx-auto w-full max-w-400 px-6 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Heading, Copy & CTA */}
            <div className="flex flex-col items-start text-left lg:col-span-3">
              <span className="font-allura text-3xl text-caramel sm:text-4xl">
                Our Bakery
              </span>

              <h2 className="mt-1 font-thunder text-4xl uppercase leading-[0.92] tracking-[-0.01em] text-soft-ivory sm:text-5xl lg:text-[3.4rem]">
                BAKED WITH
                <br />
                CARE
              </h2>

              <p className="mt-3 max-w-57.5 font-mona text-xs leading-relaxed text-soft-ivory/80 sm:text-[13px]">
                Wide range of freshly baked goods prepared in our own facility.
              </p>

              <Link
                to={ROUTES.MENU}
                className="group mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-caramel px-5 py-2.5 font-mona text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-[#8D4A15] active:scale-95"
              >
                <span>EXPLORE MENU</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right Column: 4 Bakery Cards + Vertically Stacked Arrows */}
            <div className="flex items-center gap-3 sm:gap-4 lg:col-span-9">
              <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {orderedItems.map((item) => (
                  <div
                    key={item.name}
                    className="group relative aspect-[3/3.8] overflow-hidden rounded-xl bg-deep-coffee"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${item.imgClass}`}
                    />
                    {/* Bottom Dark Gradient Overlay + Label Inside Card */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center bg-linear-to-t from-[#1A0D07]/95 via-[#1A0D07]/55 to-transparent pt-10 pb-3 px-2">
                      <span className="font-mona text-[10px] font-medium uppercase tracking-wider text-soft-ivory sm:text-[11px]">
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vertically Stacked Carousel Navigation Buttons */}
              <div className="flex shrink-0 flex-col gap-2">
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next bakery item"
                  className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-soft-ivory/35 text-soft-ivory/80 transition-colors hover:border-caramel hover:bg-caramel hover:text-white"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous bakery item"
                  className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-soft-ivory/35 text-soft-ivory/80 transition-colors hover:border-caramel hover:bg-caramel hover:text-white"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bakery;
