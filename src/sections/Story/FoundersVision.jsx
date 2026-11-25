import React from "react";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL IMAGE PATHS ---
import foundersBg from "../../assets/images/story/founder-bg.png";
import foundersImg from "../../assets/images/story/founders.png";
import directorLeftBg from "../../assets/images/story/director-left-bg.png";
import directorRightBg from "../../assets/images/story/director-right-bg.png";
import directorImg from "../../assets/images/story/director.png";

function FoundersVision() {
    return (
        // Outer wrapper to enforce the 300vh minimum height, centering content vertically
        <section className="relative flex min-h-[200vh] w-full flex-col justify-center overflow-hidden bg-soft-ivory py-24">

            <div className="mx-auto flex w-full max-w-350 flex-col gap-16 px-6 lg:px-12 xl:gap-24">

                <div className="relative w-full overflow-hidden rounded-2xl bg-[#FADFB6] pt-16 lg:pt-24">

                    {/* Background Sketch */}
                    <img
                        src={foundersBg}
                        alt=""
                        className="absolute inset-0 h-150 w-full object-contain object-top opacity-60 pointer-events-none"
                    />

                    {/* Top Section: Text & Image */}
                    <div className="relative z-10 flex flex-col px-8 sm:px-12 lg:flex-row lg:px-20">

                        {/* Left: Heading & Quote */}
                        <div className="flex w-full flex-col items-start lg:w-3/5">
                            <h2 className="font-thunder text-4xl  uppercase leading-none tracking-[-0.02em] text-deep-coffee sm:text-4xl lg:text-5xl xl:text-6xl">
                                A Dream Built on<br />Hard Work.<br />A Family Built on<br />Trust.
                            </h2>

                            <div className="mt-8 lg:mt-12">
                                <blockquote className="font-allura text-3xl leading-[1.3] text-caramel sm:text-2xl lg:text-2xl xl:text-[2rem]">
                                    “My dream was never just about<br className="hidden lg:block" /> building a business. It was about<br className="hidden lg:block" /> creating something people could<br className="hidden lg:block" /> trust, remember and feel<br className="hidden lg:block" /> connected to.”
                                </blockquote>
                                <p className="mt-4 text-right font-mona text-sm font-medium text-deep-coffee sm:text-base lg:pr-20">
                                    - Thatha, Founder
                                </p>
                            </div>
                        </div>

                        {/* Right: Founders Image (Overlapping the background) */}
                        <div className="relative mt-12 flex w-full items-end justify-center lg:mt-0  lg:justify-end">
                            <img
                                src={foundersImg}
                                alt="Thatha Tea Founders"
                                className="relative z-20 h-auto w-full max-w-125 object-contain object-bottom lg:absolute lg:-bottom-8 lg:-right-8 lg:max-w-162.5 xl:-right-16 xl:max-w-200"
                            />
                        </div>

                    </div>

                    {/* Bottom Section: White Text Card */}
                    <div className="relative z-30 mx-6 mb-12 mt-16 rounded-[2rem] bg-white p-8 shadow-2xl shadow-black/5 sm:mx-12 lg:mx-30 lg:mb-20 lg:p-16">
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-20">

                            {/* Left Column */}
                            <div className="flex flex-col gap-6 font-mona text-sm leading-relaxed text-deep-coffee/80 sm:text-base">
                                <p>
                                    The journey began with the business knowledge and experience passed down through generations. What followed was a journey of our own, built through determination, challenges and countless efforts.
                                </p>
                                <p>
                                    We didn't depend on shortcuts. We believed in our work, trusted our vision and kept moving forward.
                                </p>
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-col gap-6 font-mona text-sm leading-relaxed text-deep-coffee/80 sm:text-base">
                                <p>
                                    Every customer who walked through our doors became part of our story. Every new outlet became another milestone.
                                </p>
                                <p>
                                    Today, we are proud of how far we have come, but our dream is still growing. We want to bring the warmth of Thatha Tea to more people, more cities and more families.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>





                {/* DIRECTOR */}
                <div className="relative w-full overflow-hidden rounded-2xl bg-[#FADFB6]">

                    <img
                        src={directorLeftBg}
                        alt=""
                        className="absolute left-0 top-0 h-full w-[40%] object-contain object-top-left opacity-70 pointer-events-none"
                    />
                    <img
                        src={directorRightBg}
                        alt=""
                        className="absolute bottom-0 right-0 h-full w-[100%] object-cover object-bottom opacity-70 pointer-events-none"
                    />

                    {/* Reduced top padding (pt-12) to lower the overall height */}
                    <div className="relative z-10 flex flex-col items-center gap-8 px-8 pt-8 pb-0 sm:px-12 sm:pt-10 lg:flex-row lg:items-end lg:gap-16 lg:px-20 lg:pt-12 lg:pb-0">

                        {/* Image Container - sits flush at the bottom */}
                        <div className="relative flex w-full items-end justify-center lg:w-1/3">

                            {/* Half Circle Behind Director - centered on all screens */}
                            <div className="absolute bottom-0 left-1/2 h-47.5 w-80 -translate-x-1/2 rounded-t-full bg-white/40 sm:h-[175px] sm:w-87.5 lg:h-62.5 lg:w-112.5" />

                            <img
                                src={directorImg}
                                alt="Mrs. Vidhya, Director"
                                className="relative z-10 h-auto w-full max-w-72.5 object-contain object-bottom sm:max-w-87.5 lg:max-w-112.5"
                            />
                        </div>

                        {/* Right: Text Content */}
                        {/* Reduced bottom padding to pb-16 to tighten the height */}
                        <div className="flex w-full flex-col items-center text-center pb-8 sm:pb-10 lg:w-2/3 lg:items-start lg:text-left lg:pb-16">

                            <h2 className="font-thunder text-4xl uppercase leading-none tracking-[-0.02em] text-deep-coffee sm:text-5xl lg:text-4xl xl:text-5xl">
                                The Vision<br />
                                That <span className="text-caramel">Drives Us Forward.</span>
                            </h2>

                            <p className="mt-6 max-w-150 font-mona text-sm leading-relaxed text-deep-coffee/80 sm:text-base lg:mt-8 lg:text-lg">
                                The journey began with the business knowledge and experience passed down through generations. Today, our dream is bigger - to bring the warmth of Thatha Tea to more people, more cities and more families.
                            </p>

                            {/* Signature Area */}
                            <div className="mt-10 flex flex-col items-center lg:mt-12 lg:items-end lg:self-end lg:pr-12">
                                <span className="font-allura text-4xl text-caramel sm:text-5xl">
                                    Mrs. Vidhya
                                </span>
                                <span className="mt-1 font-mona text-sm font-bold uppercase tracking-[0.2em] text-deep-coffee">
                                    Director
                                </span>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default FoundersVision;