import React from "react";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL IMAGE PATHS ---
import mascotTray from "../../assets/images/story/who-are-we.png";
import decoCupcake from "../../assets/images/story/cupcake.png";
import decoKettle from "../../assets/images/story/tea-pour.png";
import decoScroll from "../../assets/images/story/wrap.png";

function WhoWeAre() {
  return (
    // Section with zero bottom padding so the mascot sits perfectly flush
    <section className="relative flex min-h-[80svh] w-full flex-col justify-center overflow-hidden bg-soft-ivory pt-32 pb-0 lg:pt-0 lg:pb-0">
      
      {/* =========================================
          BACKGROUND DECORATIONS (Scaled down)
      ========================================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Top Left Cupcake */}
        <img 
          src={decoCupcake} 
          alt="" 
          className="absolute left-4 top-12 w-14 opacity-60 sm:left-10 sm:top-16 sm:w-20 lg:left-16 lg:top-24 lg:w-24" 
        />
        {/* Middle Left Kettle */}
        <img 
          src={decoKettle} 
          alt="" 
          className="absolute left-[35%] top-[25%] w-16 opacity-50 sm:w-24 lg:left-[40%] lg:top-[30%] lg:w-32" 
        />
        {/* Top Right Scroll */}
        <img 
          src={decoScroll} 
          alt="" 
          className="absolute right-4 top-16 w-12 opacity-70 sm:right-12 sm:top-20 sm:w-16 lg:right-24 lg:top-24 lg:w-20" 
        />
      </div>

      {/* =========================================
          TEXT CONTENT (Pushed to the right)
      ========================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-400 justify-center px-6 lg:justify-end lg:px-16 xl:px-32">
        
        {/* Text Container restricts width on desktop so it sits on the right half */}
        <div className="flex w-full flex-col items-center text-center lg:w-[55%] lg:items-start lg:text-left xl:w-[50%]">
          
          {/* Script Kicker */}
          <span className="font-allura text-4xl text-caramel sm:text-5xl lg:text-6xl xl:text-[4rem]">
            Who we are
          </span>

          {/* Main Heading */}
          <h2 className="mt-2 font-thunder text-4xl  uppercase leading-none tracking-[-0.02em] text-deep-coffee sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
            Built on Legacy.<br />
            Grown Through<br />
            <span className="text-caramel">Determination.</span>
          </h2>

          {/* Two-Column Text Area */}
          <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2 md:gap-8 lg:mt-12 xl:gap-10">
            
            {/* Paragraph 1 (With Drop Cap) */}
            <p className="font-mona text-xs leading-relaxed text-deep-coffee/80 sm:text-sm lg:text-[15px]">
              <span className="float-left mr-2 mt-1 font-thunder text-[3rem] leading-[0.75] text-caramel sm:text-[3.5rem]">
                O
              </span>
              ur story begins with the business wisdom and experience of the founder's
              grandfather, A foundation of practical knowledge, resilience and an instinct
              for serving people well.
            </p>

            {/* Paragraph 2 */}
            <p className="font-mona text-xs leading-relaxed text-deep-coffee/80 sm:text-sm lg:text-[15px]">
              The founder carried that spirit forward with his own effort and determination.
              Without outside support, the journey grew through challenges and hard work
              into a business at crores-level scale. Through every chapter, quality and
              customer trust remained the priority.
            </p>

          </div>
        </div>
      </div>

      {/* =========================================
          MASCOT (Mobile: normal flow, Desktop: absolute bottom left)
      ========================================= */}
      {/* The wrapper handles the mobile stacking. On desktop, it anchors to the bottom left */}
      <div className="relative z-10 mt-12 flex w-full justify-center lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:w-1/2 lg:justify-start xl:left-[8%]">
        <img
          src={mascotTray}
          alt="Thatha holding a tray of tea and snacks"
          className="w-full max-w-65 object-contain object-bottom sm:max-w-80 lg:max-w-112.5 xl:max-w-137.5"
        />
      </div>

    </section>
  );
}

export default WhoWeAre;