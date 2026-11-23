import React from "react";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL IMAGE PATHS ---
import sectionBg from "../../assets/images/story/exp-bg.png"; 
// Left Card (Bakery)
import bakeryLogo from "../../assets/images/story/exp-left-logo.png";
import bakeryMascot from "../../assets/images/story/left-mascot.png";
import bakeryDeco from "../../assets/images/story/cupcake-deco.png";
// Right Card (Chai)
import chaiLogo from "../../assets/images/story/exp-right-logo.png";
import chaiMascot from "../../assets/images/story/right-mascot.png";
import chaiDeco from "../../assets/images/story/teapot.png";

function TwoExpressions() {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 z-0">
        <img 
          src={sectionBg} 
          alt="" 
          className="h-full w-full object-cover object-center" 
        />
        {/* The requested color overlay */}
        <div className="absolute inset-0 bg-[#F5DFC3]/10" />
      </div>

      {/* =========================================
          MAIN CONTENT CONTAINER
      ========================================= */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        
        {/* HEADER SECTION */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="font-thunder text-4xl uppercase leading-[1] tracking-[-0.02em] sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="text-[#2C1810]">A Story, </span>
            <span className="text-[#A76024]">Two Expressions</span>
          </h2>
          <p className="mt-4 max-w-2xl font-mona text-sm leading-relaxed text-[#2C1810]/80 sm:text-base lg:text-lg">
            Different flavours. A shared soul. Explore our brands and the experiences we create.
          </p>
        </div>

        {/* 2-COLUMN GRID */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* =========================================
              LEFT CARD: BAKERY
          ========================================= */}
          <div className="relative flex min-h-[400px] flex-col overflow-hidden rounded-[1rem] bg-[#FCF7F0]">
            {/* Top Text Area */}
            <div className="relative z-20 p-8 sm:p-12">
              <img 
                src={bakeryLogo} 
                alt="Thatha Bread & Bakery" 
                className="mb-6 h-16 w-auto object-contain sm:h-20" 
              />
              <p className="max-w-[280px] font-mona text-sm leading-relaxed text-[#2C1810]/80 sm:text-base">
                Freshly baked goodness, familiar flavours, and the warmth in a neighbourhood bakery.
              </p>
            </div>

            {/* Bottom Absolute Images */}
            {/* Left Deco */}
            <img 
              src={bakeryDeco} 
              alt="" 
              className="absolute -bottom-10 -left-15 z-10 w-40 object-contain object-left-bottom opacity-80 sm:w-56" 
            />
            {/* Right Mascot */}
            <img 
              src={bakeryMascot} 
              alt="Bakery Mascot" 
              className="absolute -bottom-4 -right-4 z-20 w-[260px] object-contain object-bottom sm:-bottom-6 sm:-right-6 sm:w-[320px] lg:w-[350px]" 
            />
          </div>

          {/* =========================================
              RIGHT CARD: CHAI
          ========================================= */}
          <div className="relative flex min-h-[400px] flex-col overflow-hidden rounded-[1rem] bg-[#FCF7F0] ">
            {/* Top Text Area */}
            <div className="relative z-20 p-8 sm:p-12">
              <img 
                src={chaiLogo} 
                alt="Thatha Chai" 
                className="mb-6 h-16 w-auto object-contain sm:h-20" 
              />
              <p className="max-w-[280px] font-mona text-sm leading-relaxed text-[#2C1810]/80 sm:text-base">
                A modern expression of India's chai culture, bringing people together over a simple cup of tea.
              </p>
            </div>

            {/* Bottom Absolute Images */}
            {/* Left Deco */}
            <img 
              src={chaiDeco} 
              alt="" 
              className="absolute -bottom-10 -left-10 z-10 w-36 object-contain object-left-bottom opacity-80 sm:w-48" 
            />
            {/* Right Mascot */}
            <img 
              src={chaiMascot} 
              alt="Chai Mascot" 
              className="absolute -bottom-4 -right-4 z-20 w-[260px] object-contain object-bottom sm:-bottom-6 sm:-right-6 sm:w-[320px] lg:w-[350px]" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default TwoExpressions;