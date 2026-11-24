import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import menuTea from "../../assets/images/home/menu-tea.png";
import menuBun from "../../assets/images/home/menu-bun.png";
import menuCookies from "../../assets/images/home/menu-snacks.png";
import menuDrinks from "../../assets/images/home/menu-cake.png";

const BAKERY_ITEMS = [
  {
    name: "PREMIUM TEA",
    image: menuTea,
  },
  {
    name: "FRESH BAKES",
    image: menuBun,
  },
  {
    name: "BUTTER COOKIES",
    image: menuCookies,
  },
  {
    name: "COOL DRINKS",
    image: menuDrinks,
  },
];

function Bakery() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handlePrev = () => {
    setScrollIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setScrollIndex((prev) => (prev < BAKERY_ITEMS.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#4D2F1C] py-16 sm:py-20 lg:py-24 rounded-t-[32px] sm:rounded-t-[48px] lg:rounded-t-[56px]">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading, Copy & CTA */}
          <div className="flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-left">
            <span className="font-allura text-3xl sm:text-4xl lg:text-5xl text-[#A76024]">
              Our Bakery
            </span>

            <h2 className="mt-2 font-thunder text-4xl uppercase leading-[0.92] tracking-[-0.01em] text-[#F6EEDF] sm:text-5xl lg:text-[3.8rem] xl:text-[4.4rem]">
              BAKED WITH
              <br />
              CARE
            </h2>

            <p className="mt-4 max-w-[320px] font-mona text-sm leading-relaxed text-[#F6EEDF]/80 sm:text-base">
              Wide range of freshly baked goods prepared in our own facility.
            </p>

            <Link
              to="/menu"
              className="group mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#A76024] px-6 py-3 font-mona text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#8D4A15] hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <span>EXPLORE MENU</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: 4 Bakery Cards & Vertical Carousel Arrows */}
          <div className="relative flex items-center gap-3 sm:gap-4 lg:col-span-8">
            {/* Cards Grid / Row */}
            <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3.5 lg:gap-4">
              {BAKERY_ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#F6EEDF]/15 bg-[#2C1810] shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#A76024]/50"
                >
                  {/* Item Image */}
                  <div className="h-36 sm:h-44 w-full overflow-hidden bg-[#24130B]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Item Label Bar */}
                  <div className="bg-[#24130B] py-3 px-2 text-center">
                    <span className="font-mona text-[11px] sm:text-xs font-medium uppercase tracking-wider text-[#F6EEDF]/90">
                      {item.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Vertically Stacked Carousel Navigation Buttons to the Right */}
            <div className="flex flex-col gap-2 shrink-0">
              <button
                onClick={handleNext}
                aria-label="Next item"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F6EEDF]/30 bg-transparent text-[#F6EEDF] transition-all hover:border-[#A76024] hover:bg-[#A76024] cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <button
                onClick={handlePrev}
                aria-label="Previous item"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F6EEDF]/30 bg-transparent text-[#F6EEDF] transition-all hover:border-[#A76024] hover:bg-[#A76024] cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bakery;
