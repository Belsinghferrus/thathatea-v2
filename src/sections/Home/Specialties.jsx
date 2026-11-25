import React, {useRef} from "react";
import { Coffee, ArrowRight, ArrowLeft } from "lucide-react";

import teaImg from "../../assets/images/home/tea2.png";
import bakeImg from "../../assets/images/home/bun.png"; // Use your actual bake image
import cookieImg from "../../assets/images/home/biscuit.png";
import drinkImg from "../../assets/images/home/coffee.png";
import chaiImg from "../../assets/images/home/tea1.png"; 

const specialties = [
    { id: 1, title: "PREMIUM TEA", img: teaImg },
    { id: 2, title: "FRESH BAKES", img: bakeImg },
    { id: 3, title: "BUTTER COOKIES", img: cookieImg },
    { id: 4, title: "COOL DRINKS", img: drinkImg },
    { id: 5, title: "SPECIAL CHAI", img: chaiImg }, 
  ];
  
  function Specialties() {
    const trackRef = useRef(null);
    const duplicatedSpecialties = [...specialties, ...specialties];
  
    // Function to skip the animation forward
    const handleNext = () => {
      if (trackRef.current) {
        const anims = trackRef.current.getAnimations();
        if (anims.length > 0) {
          // 30s total for 5 cards = 6s (6000ms) per card
          anims[0].currentTime += 6000; 
        }
      }
    };
  
    // Function to skip the animation backward
    const handlePrev = () => {
      if (trackRef.current) {
        const anims = trackRef.current.getAnimations();
        if (anims.length > 0) {
          anims[0].currentTime -= 6000; 
        }
      }
    };
  
    return (
      <div className="relative z-30 mx-auto -mt-24 w-full max-w-[1263px] px-4 lg:-mt-40 lg:px-0">
        
        {/* Main Floating Container */}
        <div className="relative flex flex-col overflow-hidden rounded-[23px] border-t border-b border-caramel/30 bg-[linear-gradient(0deg,#F5DFC3_-4.41%,#F6EEDF_100%)] px-6 py-10 shadow-2xl shadow-black/5 lg:block lg:h-[361px] lg:px-0 lg:py-0">
          
          {/* LEFT SIDE: Text Content */}
          <div className="relative z-10 flex w-full flex-col items-center text-center lg:absolute lg:left-7.5 lg:top-[75px] lg:h-33 lg:w-[259px] lg:items-start lg:text-left">
            
            <div className="flex items-center gap-2 text-caramel">
              <Coffee className="h-5 w-5" />
              <span className="font-allura text-3xl sm:text-4xl lg:text-[2rem]">Our Specialties</span>
            </div>
  
            <h2 className="mt-2 font-thunder text-4xl font-bold uppercase leading-none tracking-[-0.02em] text-deep-coffee sm:text-5xl lg:text-[3.2rem]">
              More Than<br />Just Tea
            </h2>
  
            <p className="mt-3 max-w-75 font-mona text-sm leading-[1.4] text-deep-coffee/80">
              A perfect blend of premium tea,<br className="hidden lg:block" /> delicious snacks & sweet moments.
            </p>
  
            <button className="group mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-caramel px-6 py-4 font-mona text-xs font-semibold uppercase tracking-widest text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-deep-coffee">
              Explore Menu
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
  
          {/* RIGHT SIDE: Looping Carousel */}
          <div className="relative mt-8 flex w-full items-center gap-4 lg:absolute lg:left-[317px] lg:top-7 lg:mt-0 lg:h-[305px] lg:w-[calc(100%-317px-120px)]">
            
            <div className="relative flex w-full overflow-hidden">
              
              {/* The Animated Track - Note the ref added here */}
              <div 
                ref={trackRef}
                className="flex w-max animate-marquee gap-5 pt-1 pb-1 hover:[animation-play-state:paused]"
              >
                {duplicatedSpecialties.map((item, index) => (
                  <div 
                    key={`${item.id}-${index}`} 
                    className="group relative h-[305px] w-62.5 shrink-0 snap-start overflow-hidden rounded-[18px] border border-caramel bg-deep-coffee shadow-sm"
                  >
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-x-0 bottom-0 h-35 bg-linear-to-t from-deep-coffee via-deep-coffee/80 to-transparent" />
                    
                    <div className="absolute inset-x-0 bottom-0 flex h-[75px] items-center justify-center">
                      <h3 className="font-mona text-[13px] font-semibold tracking-[0.15em] text-warm-cream">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
  
            </div>
  
          </div>
  
          {/* ARROWS - Connected to handlers */}
          <div className="mt-6 flex w-full items-center justify-center gap-4 lg:absolute lg:right-7.5 lg:top-7.5 lg:mt-0 lg:w-auto lg:flex-col z-20">
            <button 
              onClick={handlePrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-caramel bg-warm-cream/50 backdrop-blur-sm text-caramel transition-colors hover:bg-caramel hover:text-white"
              aria-label="Previous"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={handleNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-caramel bg-warm-cream/50 backdrop-blur-sm text-caramel transition-colors hover:bg-caramel hover:text-white"
              aria-label="Next"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
  
        </div>
  
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}} />
      </div>
    );
  }
  
  export default Specialties;