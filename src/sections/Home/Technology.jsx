import React from "react";
import { ArrowRight } from "lucide-react";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL PNG PATHS ---
import mascotTablet from "../../assets/images/home/tech-mascot.png";
import dashboardImg from "../../assets/images/home/tech.png";

function Technology() {
    return (
        // 1. Removed bottom padding (pb-0) and added items-end to align to the bottom
        <section className="relative flex min-h-[70vh] w-full items-end overflow-hidden bg-white pt-16 pb-0">

            <div className="relative z-10 mx-auto grid w-full  grid-cols-1 items-end gap-8 px-6 lg:grid-cols-2 lg:gap-8 lg:px-16">

                {/* LEFT COLUMN: Mascot (Flush to bottom) */}
                <div className="relative flex h-full items-end justify-center lg:justify-start">
                    {/* 2. Reduced Mascot size from 550px to 450px max-width */}
                    <img
                        src={mascotTablet}
                        alt="Thatha using a tablet"
                        className="relative z-10 w-full lg:ml-40 max-w-70 object-contain object-bottom sm:max-w-87.5 lg:max-w-112.5"
                    />
                </div>

                {/* RIGHT COLUMN: Text Content (Centered vertically) */}
                {/* Added self-center to keep the text in the middle while images sit at the bottom */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:self-center pb-12 lg:pb-20">

                    <span className="font-allura text-4xl text-caramel sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
                        Technology & Data
                    </span>

                    <h2 className="mt-2 font-thunder text-4xl font-bold uppercase leading-none tracking-[-0.02em] text-deep-coffee sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
                        The Engine Behind<br />Our Growth.
                    </h2>

                    <p className="mt-6 max-w-135 font-mona text-sm leading-relaxed text-deep-coffee/80 sm:text-base lg:text-lg">
                        A strong brand grows with great taste and smarter operations. Our
                        in-house technology and data-driven systems bring efficiency,
                        consistency and scalable growth across every outlet.
                    </p>

                    <button className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-caramel px-5 py-3.5 font-mona text-xs font-semibold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-deep-coffee lg:mt-10 lg:px-8 lg:py-4 lg:text-sm">
                        Explore Technology
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 lg:h-5 lg:w-5" />
                    </button>

                </div>

                {/* DASHBOARD IMAGE (Absolute positioned at the exact bottom right on desktop) */}
                <div className="relative mt-8 flex w-full justify-center lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-[25%] lg:justify-end">
                    {/* 3. Reduced Dashboard size from 850px to 600px max-width */}
                    <img
                        src={dashboardImg}
                        alt="Thatha Tea Admin Dashboard"
                        className="w-full max-w-87.5 object-contain drop-shadow-2xl lg:max-w-150"
                    />
                </div>
            </div>
        </section>
    );
}

export default Technology;