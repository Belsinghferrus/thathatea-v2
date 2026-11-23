import React from "react";
import { Coffee } from "lucide-react";

// --- REPLACE THIS IMPORT WITH YOUR ACTUAL IMAGE PATH ---
import bannerBg from "../../assets/images/story/family-banner-bg.png"; 

function FamilyBanner() {
  return (
    <section className="relative flex min-h-[220px] w-full items-center justify-center overflow-hidden lg:min-h-[300px]">
      
      {/* =========================================
          BACKGROUND IMAGE & OVERLAY
      ========================================= */}
      <div className="absolute inset-0 z-0 bg-[#A76024]">
        <img 
          src={bannerBg} 
          alt="" 
          className="h-full w-full object-cover object-center" 
        />
      </div>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <div className="relative z-10 flex w-full flex-col items-center px-6 text-center">
        
        {/* Heading */}
        <h2 className="font-thunder text-3xl uppercase leading-[0.9] tracking-[-0.02em] sm:text-4xl lg:text-5xl xl:text-[3.5rem]">
          <span className="block text-[#2C1810]">Two Path, One</span>
          <span className="mt-1 block text-[#F6EEDF]">Thatha Tea Family</span>
        </h2>

        {/* Decorative Divider with Animated Steam */}
        <div className="mt-5 flex items-center gap-4">
          <div className="h-[1.5px] w-12 bg-[#F6EEDF]/60 sm:w-16" />
          
          {/* Coffee Icon Container */}
          <div className="relative flex items-center justify-center">
            
            {/* Steam Wisps */}
            <div className="absolute bottom-full left-1/2 flex -translate-x-1/2 gap-[2px]">
              <div className="steam-wisp steam-wisp-1"></div>
              <div className="steam-wisp steam-wisp-2"></div>
            </div>

            <Coffee className="h-5 w-5 text-[#F6EEDF]" strokeWidth={1.5} />
          </div>

          <div className="h-[1.5px] w-12 bg-[#F6EEDF]/60 sm:w-16" />
        </div>

      </div>

      {/* =========================================
          CSS KEYFRAMES FOR THE STEAM EFFECT
      ========================================= */}
      <style dangerouslySetInnerHTML={{__html: `
        .steam-wisp {
          width: 3px;
          height: 8px;
          background-color: #F6EEDF;
          border-radius: 50%;
          opacity: 0;
          filter: blur(1.5px);
          transform-origin: bottom center;
        }

        .steam-wisp-1 {
          animation: riseSteam 3s ease-out infinite;
        }

        .steam-wisp-2 {
          animation: riseSteam 3s ease-out 1.5s infinite;
        }

        @keyframes riseSteam {
          0% {
            transform: translateY(0) scale(1) translateX(0);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) scale(1.5) translateX(2px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-20px) scale(2.5) translateX(-2px);
            opacity: 0;
          }
        }
      `}} />
    </section>
  );
}

export default FamilyBanner;