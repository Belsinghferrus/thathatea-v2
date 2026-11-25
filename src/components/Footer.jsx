import React from "react";
import { MapPin, Mail, Phone, Store, ArrowUpRight, Apple, Play } from "lucide-react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../constant/routes.js";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL IMAGE PATHS ---
import logo from "../assets/images/logo.webp";
import footerBg from "../assets/images/footer.png"; // The tea estate background
import footerTea from "../assets/images/home/tea.png"; // The tea cup & cookies on the right
import footerCake from "../assets/images/footer-cake.png"; // Cake slice on CTA card

const footerLinks = [
    { name: "HOME", path: ROUTES.HOME },
    { name: "STORY", path: ROUTES.STORY },
    { name: "MENU", path: ROUTES.MENU },
    { name: "CAREER", path: ROUTES.CAREER },
    { name: "TECHNOLOGY", path: ROUTES.TECHNOLOGY },
    { name: "MANUFACTURING", path: ROUTES.MANUFACTURING },
    { name: "FRANCHISE", path: ROUTES.FRANCHISE },
    { name: "CONTACT", path: ROUTES.CONTACT },
];

function Footer() {
    return (
        // Applied #4D2F1C background. Removed bottom padding so the image hits the absolute bottom.
        <footer className="relative w-full overflow-hidden bg-roast-brown text-soft-ivory pt-20 pb-0 mb-0">

            {/* BACKGROUND IMAGES */}
            <div className="pointer-events-none absolute inset-0 z-0">
                <img
                    src={footerBg}
                    alt=""
                    className="absolute bottom-0 left-0 w-full object-cover object-top opacity-90"
                />
                {/* Floating Tea Cup & Cookies (Bottom Right) */}
                <img
                    src={footerTea}
                    alt=""
                    className="absolute bottom-0 right-0 hidden w-50 object-contain lg:block xl:w-62.5"
                />
            </div>

            {/* MAIN CONTENT */}
            <div className="relative z-10 mx-auto w-full max-w-400 px-6 lg:px-16">

                {/* TOP QUOTE */}
                <div className="mb-16 flex justify-center text-center lg:mb-20">
                    <h2 className="font-allura text-3xl text-soft-ivory sm:text-4xl lg:text-[2.8rem] leading-[1.4]">
                        “From One Kettle, Many Stories.<br />
                        From One Dream, Many Families.”
                    </h2>
                </div>

                {/* 5-COLUMN GRID */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-2">

                    {/* COLUMN 1: Logo & About */}
                    <div className="flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:text-left">
                        <img src={logo} alt="Thatha Tea" className="mb-6 h-20 object-contain" />
                        <p className="max-w-70 font-mona text-xs leading-relaxed text-soft-ivory/80 sm:text-sm">
                            What started as a single tea stall has grown into a family loved across cities. Thatha Tea blends tradition, warmth, and the authentic taste of home in every cup we serve.
                        </p>
                    </div>

                    {/* COLUMN 2: Quick Links */}
                    <div className="flex flex-col items-center lg:col-span-2 lg:items-start">
                        <h3 className="mb-6 font-mona text-sm font-semibold uppercase tracking-widest text-[#E1CBB1]">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col items-center gap-3 lg:items-start">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className="font-mona text-xs font-medium uppercase tracking-wider text-soft-ivory/80 transition-colors hover:text-[#E1CBB1] sm:text-sm"
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3: Get in Touch */}
                    <div className="flex flex-col items-center lg:col-span-2 lg:items-start">
                        <h3 className="mb-6 font-mona text-sm font-semibold uppercase tracking-widest text-[#E1CBB1]">
                            Get in Touch
                        </h3>
                        <ul className="flex flex-col items-center gap-5 lg:items-start">
                            <li className="flex items-start gap-3 text-center lg:text-left">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E1CBB1]" />
                                <span className="font-mona text-xs leading-relaxed text-soft-ivory/80 sm:text-sm">
                                    17/1, Saint Thomas Town,<br />Kammonahalli<br />Bengaluru, KA 560084
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 shrink-0 text-[#E1CBB1]" />
                                <a href="mailto:info@thathatea.com" className="font-mona text-xs text-soft-ivory/80 hover:text-[#E1CBB1] sm:text-sm">
                                    info@thathatea.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 shrink-0 text-[#E1CBB1]" />
                                <a href="tel:+916385648484" className="font-mona text-xs text-soft-ivory/80 hover:text-[#E1CBB1] sm:text-sm">
                                    +91 63856 48484
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* COLUMN 4: Mobile App */}
                    <div className="flex flex-col items-center lg:col-span-2 lg:items-start">
                        <h3 className="mb-6 font-mona text-sm font-semibold uppercase tracking-widest text-[#E1CBB1]">
                            Our Mobile App
                        </h3>
                        <p className="mb-4 text-center font-mona text-xs text-soft-ivory/80 sm:text-sm lg:text-left">
                            Order your favourite chai on the go. Coming soon to App Store and Google Play.
                        </p>
                        <div className="flex flex-col gap-3">
                            <button className="flex items-center gap-3 rounded-full border border-soft-ivory/20 bg-transparent px-4 py-2 transition-colors hover:bg-soft-ivory/10">
                                <Apple className="h-5 w-5" />
                                <div className="flex flex-col items-start">
                                    <span className="text-[9px] uppercase tracking-wider text-soft-ivory/60">Coming Soon On</span>
                                    <span className="font-mona text-xs font-semibold">App Store</span>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 rounded-full border border-soft-ivory/20 bg-transparent px-4 py-2 transition-colors hover:bg-soft-ivory/10">
                                <Play className="h-5 w-5" />
                                <div className="flex flex-col items-start">
                                    <span className="text-[9px] uppercase tracking-wider text-soft-ivory/60">Coming Soon On</span>
                                    <span className="font-mona text-xs font-semibold">Google Play</span>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* COLUMN 5: CTA Card */}
                    <div className="relative mt-8 flex justify-center lg:col-span-3 lg:mt-0 lg:justify-end">
                        <div className="relative w-full max-w-85 rounded-3xl bg-linear-to-br from-soft-ivory to-[#E1CBB1] p-8 shadow-2xl">
                            {/* Floating Cake Slice (Top Right of CTA Card) */}
                            <img
                                src={footerCake}
                                alt=""
                                aria-hidden="true"
                                className="pointer-events-none absolute -top-14 -right-6 z-20 w-28 object-contain drop-shadow-xl sm:w-32"
                            />

                          

                            {/* Header with Icon next to Text */}
                            <div className="mb-5 flex items-center gap-4">
                                <Store className="h-10 w-10 text-deep-coffee" strokeWidth={1.5} />
                                <h4 className="font-mona text-[1.4rem] font-medium leading-[1.2] text-deep-coffee">
                                    Start Your Own<br />Thatha Tea Outlet
                                </h4>
                            </div>

                            {/* Body Text */}
                            <p className="mb-8 font-mona text-[15px] leading-[1.6] text-deep-coffee">
                                Be a Part of Our Growing Tea Family<br />
                                Bring Home the Taste of Tradition,<br />
                                Build Your Own Legacy, and Grow<br />
                                With Us.
                            </p>

                            {/* Animated Gradient Button */}
                            <NavLink to="/franchise">
  <button className="group flex w-full items-center justify-between rounded-xl bg-[linear-gradient(270deg,#884E20,#A56023,#884E20)] bg-size-[200%_auto] px-6 py-4 font-mona text-[13px] font-semibold uppercase tracking-wider text-white shadow-lg animate-gradient-right-left">
    Franchise Enquiry
    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
  </button>
</NavLink>
                        </div>

            
                    </div>

                </div>

                {/* BOTTOM BAR - Overlays the background image */}
                {/* Added relative z-20, mt-32 to push it down, and removed the border-t to match the image */}
                <div className="relative z-20 mt-32 lg:mr-60 flex flex-col items-center justify-between gap-2 py-6 lg:flex-row">
                    <p className="font-mona text-[11px] text-soft-ivory sm:text-xs">
                        © 2026 Thatha Tea. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="/privacy" className="font-mona text-[11px] text-soft-ivory hover:text-soft-ivory sm:text-xs">Privacy Policy</a>
                        <a href="/refund" className="font-mona text-[11px] text-soft-ivory hover:text-soft-ivory sm:text-xs">Refund Policy</a>
                        <a href="/terms" className="font-mona text-[11px] text-soft-ivory hover:text-soft-ivory sm:text-xs">Terms & Conditions</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;