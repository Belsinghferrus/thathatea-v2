import React from "react";
import { ArrowUpRight } from "lucide-react";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL IMAGE PATHS ---
// Left Side Background Image
import ctaLeftBg from "../../assets/images/story/cta-left.png";
// Right Side Image
import imgShop from "../../assets/images/story/cta-right.png";

function CallToAction() {
  return (
    // Section is 80vh on desktop, and flex-row on large screens
    <section className="flex w-full flex-col lg:h-[80vh] lg:min-h-[80vh] lg:flex-row">

      <div className="relative flex w-full flex-col justify-center overflow-hidden bg-[#FADEBE] px-8 py-20 sm:px-16 lg:w-1/2 lg:px-20 xl:px-28">
        
        {/* Left Background Image (Elements anchored to the right) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-right-bottom bg-no-repeat opacity-100 lg:bg-cover lg:bg-right"
          style={{ backgroundImage: `url(${ctaLeftBg})` }}
        />

        {/* Left Content Container */}
        <div className="relative z-20 flex flex-col items-start max-w-[450px]">
          <h2 className="font-thunder text-5xl uppercase leading-[1] tracking-[-0.02em] text-[#2C1810] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Your<br />Favourite<br />Cup is<br />Waiting.
          </h2>
          
          <p className="mt-6 font-mona text-sm leading-relaxed text-[#2C1810]/80 sm:text-base lg:text-lg">
            Freshly prepared treats, delicious tea and a welcoming place. Come experience the warmth of Thatha Tea.
          </p>

          <button className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#A76024] px-6 py-3.5 font-mona text-xs font-semibold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#2C1810] lg:mt-10 lg:px-8 lg:py-4 lg:text-sm">
            Explore Menu
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 lg:h-5 lg:w-5" />
          </button>
        </div>
      </div>


      <div className="relative flex w-full flex-col justify-center overflow-hidden bg-[#2C1810] px-8 py-20 sm:px-16 lg:w-1/2 lg:px-20 xl:px-28">
        
        {/* Right Content Container */}
        <div className="relative z-20 flex flex-col items-start max-w-[450px]">
          <h2 className="font-thunder text-5xl uppercase leading-[1] tracking-[-0.01em] text-[#FADEBE] sm:text-6xl lg:text-7xl xl:text-[4.5rem]">
            Be Part of<br />Our<br />Growing<br />Story.
          </h2>
          
          <p className="mt-6 font-mona text-sm leading-relaxed text-[#F6EEDF]/80 sm:text-base lg:text-lg">
            Bring the Thatha Tea experience to your city. Let's create something meaningful together.
          </p>

          <button className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#A76024] px-6 py-3.5 font-mona text-xs font-semibold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#F6EEDF] hover:text-[#2C1810] lg:mt-10 lg:px-8 lg:py-4 lg:text-sm">
            Franchise Enquiry
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 lg:h-5 lg:w-5" />
          </button>
        </div>

        {/* Right PNG Image (Absolute bottom right) */}
        <div className="pointer-events-none absolute bottom-0 right-0 z-10 w-full max-w-[300px]  sm:max-w-[300px] lg:max-w-[300px] xl:max-w-[450px]">
          <img 
            src={imgShop} 
            alt="Thatha Tea Shop" 
            className="h-auto w-full object-contain object-right-bottom" 
          />
        </div>

      </div>

    </section>
  );
}

export default CallToAction;