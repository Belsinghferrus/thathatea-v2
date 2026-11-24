import { useState } from "react";
import { Star, ArrowRight } from "lucide-react";
import outletImg from "../../assets/images/home/outlet.png";

const outletsData = [
  {
    id: "01",
    name: "Kamanahalli",
    rating: 5,
    testimonial:
      "From day one, Kamanahalli embraced the warm taste of Thatha Tea. Consistent quality and family-friendly atmosphere made it the town's go-to chai spot.",
    image: outletImg,
  },
  {
    id: "02",
    name: "Indira Nagar",
    rating: 5,
    testimonial:
      "A lively cafe experience catering to youthful energy and traditional tea lovers alike. A buzzing hub with record daily footfall.",
    image: outletImg,
  },
  {
    id: "03",
    name: "Kasturi Nagar",
    rating: 5,
    testimonial:
      "Our customer retention here is extraordinary. Guests love the authentic chai recipes, fresh snacks, and welcoming service.",
    image: outletImg,
  },
  {
    id: "04",
    name: "Kithaganur",
    rating: 5,
    testimonial:
      "The combination of fresh ingredients, everyday value branding, and built-in consistency made this the first place that came to mind when we went out for chai.",
    image: outletImg,
  },
  {
    id: "05",
    name: "KR Puram",
    rating: 5,
    testimonial:
      "Strategically situated with exceptional community love. Delivering comfort and genuine flavors across every cup served.",
    image: outletImg,
  },
];

function FeaturedOutlets() {
  const [activeOutletIndex, setActiveOutletIndex] = useState(3); // 04 Kithaganur active by default

  const currentOutlet = outletsData[activeOutletIndex];

  return (
    <section className="relative w-full overflow-hidden bg-[#2C1810] text-[#F6EEDF]">
      {/* Top Banner Strip */}
      <div className="relative z-20 flex w-full items-center justify-center border-b border-white/10 bg-[#3F2314] py-3.5 px-6">
        <span className="font-mona text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#F5DFC3]/90 text-center">
          FRESH INGREDIENTS &bull; BAKED WITH LOVE &bull; PREPARED IN HYGIENIC KITCHENS &bull; QUALITY YOU CAN TASTE &bull; ALWAYS DELICIOUS &bull; EVERY BITE, A LITTLE HAPPINESS
        </span>
      </div>

      {/* Main Outlet Display Canvas */}
      <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] w-full flex flex-col justify-between">
        {/* Background Image with Dark Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src={currentOutlet.image}
            alt={currentOutlet.name}
            className="h-full w-full object-cover object-center transition-all duration-700 brightness-75 scale-100"
          />
          {/* Deep Coffee Overlay Gradients for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/60 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/90 via-[#2C1810]/40 to-transparent" />
        </div>

        {/* Top Content Area: Section Title, Outlet Info & Testimonial */}
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pt-12 sm:px-12 sm:pt-16 lg:px-16 lg:pt-20">
          {/* Section Kicker Heading */}
          <h2 className="font-thunder text-3xl uppercase tracking-wider text-white/90 sm:text-4xl lg:text-5xl">
            Five Stores. Five Real Stories.
          </h2>

          {/* Active Outlet Details */}
          <div className="mt-8 flex flex-col items-start max-w-[620px] sm:mt-12">
            {/* Outlet Number */}
            <span className="font-thunder text-5xl font-bold tracking-tight text-caramel/90 sm:text-6xl lg:text-7xl">
              {currentOutlet.id}
            </span>

            {/* Star Rating Indicator */}
            <div className="mt-3 flex items-center gap-1.5 text-amber-400">
              {[...Array(currentOutlet.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Outlet Name */}
            <h3 className="mt-2 font-thunder text-4xl uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
              {currentOutlet.name}
            </h3>

            {/* Testimonial Quote */}
            <p className="mt-4 font-mona text-sm leading-relaxed text-[#F6EEDF]/90 sm:text-base lg:text-lg">
              "{currentOutlet.testimonial}"
            </p>

            {/* View Outlet CTA */}
            <button
              onClick={() => {
                const faqSec = document.getElementById("faq");
                if (faqSec) faqSec.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F5DFC3] px-6 py-3 font-mona text-xs font-semibold uppercase tracking-wider text-deep-coffee shadow-lg transition-all duration-300 hover:bg-caramel hover:text-white"
            >
              <span>View Outlet</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom Horizontal Outlet Selector Tabs */}
        <div className="relative z-10 w-full border-t border-white/15 bg-black/40 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-[1600px] overflow-x-auto px-4 py-4 sm:px-8 sm:py-5 lg:px-16">
            <div className="flex w-full items-center justify-between gap-4 min-w-[600px]">
              {outletsData.map((outlet, index) => {
                const isActive = index === activeOutletIndex;
                return (
                  <button
                    key={outlet.id}
                    onClick={() => setActiveOutletIndex(index)}
                    className={`group flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 text-left ${
                      isActive
                        ? "bg-white/15 border-b-2 border-caramel shadow-inner"
                        : "opacity-65 hover:opacity-100 hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`font-thunder text-lg transition-colors ${
                        isActive ? "text-caramel font-bold" : "text-white/60"
                      }`}
                    >
                      {outlet.id}
                    </span>
                    <span
                      className={`font-mona text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                        isActive ? "text-white font-semibold" : "text-white/80"
                      }`}
                    >
                      {outlet.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedOutlets;
