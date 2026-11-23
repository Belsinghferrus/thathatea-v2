import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { Coffee, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constant/routes.js";
import mascot from "../../assets/images/home/hero-mascot.png";
import bg from "../../assets/images/home/hero-bg.png";
import { getGraphemes } from "../../utils/getGraphemes.js";



// 1. Language Array for the animation
const CHAI_LANGUAGES = ["தேநீர்", "ಚಹಾ", "టీ", "चाय", "Chai", "ചായ"];

// 2. Custom Icon for "Our Story"
function StoryIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="12" cy="12" r="1.4" fill="currentColor" />
            <path
                d="M12 5.2v2.1M12 16.7v2.1M18.8 12h-2.1M7.3 12H5.2M17 7l-1.5 1.5M8.5 15.5 7 17M17 17l-1.5-1.5M8.5 8.5 7 7"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
            />
        </svg>
    );
}

// 3. Updated Stats to match the screenshot
const stats = [
    { value: "33+", lines: ["Years of", "Tradition"] },
    { value: "50+", lines: ["Outlets", "Across Cities"] },
    { value: "1M+", lines: ["Cups Served", "Every Month"] },
];

function Hero() {
    const rootRef = useRef(null);
    const navigate = useNavigate();

    // State for Language Animation
    const [langIndex, setLangIndex] = useState(0);
    const textRef = useRef(null);

    // Cycle Languages
    useEffect(() => {
        const interval = setInterval(() => {
            setLangIndex((prev) => (prev + 1) % CHAI_LANGUAGES.length);
        }, 2500); // Changes every 2.5 seconds
        return () => clearInterval(interval);
    }, []);

    // Animate the text when language changes
    useEffect(() => {
        if (!textRef.current) return;

        const chars = textRef.current.querySelectorAll(".chai-char");

        gsap.fromTo(
            chars,
            { y: 20, opacity: 0, rotateX: -90 },
            {
                y: 0,
                opacity: 1,
                rotateX: 0,
                duration: 0.8,
                stagger: 0.05,
                ease: "back.out(1.7)",
                overwrite: true
            }
        );
    }, [langIndex]);

    // Main GSAP Page Load Animations
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (reduceMotion) return;

            gsap.set(
                [".hero-kicker", ".hero-title-line", ".hero-copy", ".hero-actions > *", ".hero-stats > *"],
                { autoAlpha: 0, y: 22 }
            );

            gsap.set(".hero-mascot", { autoAlpha: 0, scale: 0.94, x: 24 });
            gsap.set(".hero-spotlight", { autoAlpha: 0, scale: 0.92 });

            const tl = gsap.timeline({ defaults: { ease: "cubic-bezier(0.16, 1, 0.3, 1)" } });

            tl.to(".hero-spotlight", { autoAlpha: 1, scale: 1, duration: 0.8 })
                .to(".hero-mascot", { autoAlpha: 1, scale: 1, x: 0, duration: 1 }, 0.05)
                .to(".hero-kicker", { autoAlpha: 1, y: 0, duration: 0.45 }, 0.16)
                .to(".hero-title-line", { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.08 }, 0.22)
                .to(".hero-copy", { autoAlpha: 1, y: 0, duration: 0.45 }, 0.38)
                .to(".hero-actions > *", { autoAlpha: 1, y: 0, duration: 0.42, stagger: 0.08 }, 0.56)
                .to(".hero-stats > *", { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.06 }, 0.68);

            // Floating animations
            gsap.to(".hero-mascot-float", {
                y: -8,
                duration: 3.4,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
            });
        }, rootRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={rootRef}
            className="relative isolate overflow-hidden text-deep-coffee min-h-[100svh] lg:min-h-screen"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center "
                style={{ backgroundImage: `url(${bg})` }}
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_48%,rgba(167,96,36,0.08),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(44,24,16,0.08),transparent_30%)] " />

            <div className="relative mx-auto flex w-full max-w-[1600px] flex-col justify-center px-6 pb-12 pt-30 sm:px-10 lg:px-16 lg:pb-0 lg:pt-20 h-full min-h-[100svh]">

                <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block xl:w-[54%]">
                    <div className="relative h-full w-full">
                        <div className="hero-spotlight absolute bottom-[8%] right-[10%] h-[52vh] w-[52vh] rounded-full bg-[radial-gradient(circle,rgba(237,184,115,0.22)_0%,rgba(237,184,115,0.10)_34%,rgba(237,184,115,0)_72%)] blur-2xl" />

                        {/* Mascot Image */}
                        <div className="hero-mascot hero-mascot-float absolute bottom-0 right-[-2%] xl:right-0">
                            <img
                                src={mascot}
                                alt="Thatha Tea mascot pouring chai"
                                width={860}
                                height={980}
                                loading="eager"
                                className="h-[85vh] max-h-[980px] w-auto max-w-none object-contain object-bottom xl:h-[92vh]"
                            />
                        </div>

                        <div className="absolute bottom-[4%] right-[12%] h-[38px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(44,24,16,0.22)_0%,rgba(44,24,16,0.10)_38%,rgba(44,24,16,0.00)_80%)] blur-xl" />
                    </div>
                </div>

                <div className="relative z-20 grid items-center gap-10 lg:grid-cols-[minmax(500px,600px)_1fr] h-full">

                    {/* Mobile Image (Shows on top) */}
                    <div className="order-1 relative z-10 flex items-center justify-center lg:hidden mt-10">
                        <div className="hero-mascot hero-mascot-float relative">
                            <div className="hero-spotlight absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(237,184,115,0.18)_0%,rgba(237,184,115,0.06)_42%,rgba(237,184,115,0)_74%)] blur-2xl" />
                            <img
                                src={mascot}
                                alt="Thatha Tea mascot pouring chai"
                                width={860}
                                height={980}
                                loading="eager"
                                className="relative z-10 h-auto w-full max-w-[380px] object-contain sm:max-w-[460px]"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="order-2 relative z-20 w-full pb-4 text-center lg:order-1 lg:text-left lg:pb-0">
                        <div className="mx-auto w-full max-w-[580px] lg:ml-0 lg:mr-0 lg:max-w-[550px] xl:ml-[20%]">

                            {/* Animated "Chai" Script Heading */}
                            <div className="hero-kicker flex items-center justify-center lg:justify-start gap-2 text-[2.8rem] leading-[0.9] text-caramel sm:text-[3.2rem] lg:text-[3.8rem] xl:text-[4.2rem] font-allura">

                                {/* Animated Word Container */}
                                <span
                                    ref={textRef}
                                    className="inline-flex justify-center lg:justify-start whitespace-nowrap min-w-[130px]"
                                    style={{ perspective: "1000px" }}
                                >
                                    {getGraphemes(CHAI_LANGUAGES[langIndex]).map((char, index) => (
                                        <span
                                            key={`${langIndex}-${index}`}
                                            className="chai-char inline-block origin-bottom"
                                        >
                                            {char}
                                        </span>
                                    ))}
                                </span>

                                <span>that</span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="hero-title-line mt-2 text-[2.5rem] uppercase leading-[0.95] ] text-deep-coffee sm:text-[4.5rem] md:text-[5.0rem] lg:text-[4.5rem] xl:text-[6.5rem] font-thunder font-bold" >
                                <span className="block">Connects</span>
                                <span className="block">Generations</span>
                            </h1>

                            {/* Body Text */}
                            <p className="hero-copy mx-auto mt-6 max-w-[32rem] text-[1.05rem] leading-[1.6] text-deep-coffee/80 sm:text-[1.1rem] lg:mx-0 lg:mt-4 lg:max-w-[28rem] lg:text-[1.15rem] font-mona ">
                                From our family recipe to your cup, <span className="font-semibold text-caramel">Thatha Tea</span> serves warmth, tradition &amp; time.
                            </p>

                            {/* Buttons */}
                            <div className="hero-actions mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:mt-4 lg:justify-start">
                                <button
                                    onClick={() => navigate(ROUTES.MENU)}
                                    className="inline-flex min-h-[56px] min-w-[200px] items-center justify-center gap-2.5 rounded-2xl bg-caramel px-8 text-[0.9rem] font-mona font-semibold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-deep-coffee"
                                >
                                    <Coffee className="h-[18px] w-[18px]" />
                                    Explore Menu
                                </button>

                                <button
                                    onClick={() => navigate(ROUTES.STORY || "/story")}
                                    className="inline-flex min-h-[56px] min-w-[200px] items-center justify-center gap-2.5 rounded-2xl border border-deep-coffee/20 bg-soft-ivory px-8 text-[0.9rem] font-mona font-semibold uppercase tracking-widest text-deep-coffee transition-all duration-300 hover:-translate-y-1 hover:border-deep-coffee hover:bg-deep-coffee hover:text-warm-cream"
                                >
                                    <StoryIcon />
                                    Our Story
                                </button>
                            </div>

                            {/* Stats Area */}
                            <div className="hero-stats mt-12 grid grid-cols-3 gap-4 sm:gap-6 lg:mt-8 lg:max-w-[500px]">
                                {stats.map((stat, index) => (
                                    <div
                                        key={stat.value}
                                        className={[
                                            "flex flex-col items-center lg:items-start text-center lg:text-left",
                                            index !== 0 ? "border-l border-deep-coffee/15 pl-4 sm:pl-6" : "",
                                        ].join(" ")}
                                    >
                                        <span className="text-[1.6rem] font-thunder font-bold text-caramel sm:text-[2rem]">
                                            {stat.value}
                                        </span>
                                        <div className="mt-1 font-mona text-[0.65rem] font-semibold uppercase tracking-wider text-deep-coffee sm:text-[0.75rem]">
                                            {stat.lines.map((line) => (
                                                <p key={line} className="leading-snug">{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;