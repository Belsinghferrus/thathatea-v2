import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS, ROUTES } from "../constant/routes.js";
import logo from "../assets/images/logo.webp";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    // Handle scroll for background blur/shadow
    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close dropdown on route change
    useEffect(() => {
        setIsDropdownOpen(false);
    }, [location.pathname]);

    // Close on Escape key
    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") setIsDropdownOpen(false);
        };

        if (isDropdownOpen) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isDropdownOpen]);

    // Nav Link Class (Thin font, only color changes on hover, no background)
    const navLinkClass = ({ isActive }) =>
        [
            "relative text-[13px] lg:text-[14px] font-mona font-light tracking-widest uppercase transition-colors duration-300 px-2 py-1",
            isActive 
                ? "text-[#A76024] font-normal" // Active state
                : "text-[#2C1810] hover:text-[#F5DFC3]", // Hover state - ONLY color changes
        ].join(" ");

    return (
        <>
            <header
                className={[
                    "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
                    isScrolled
                        ? "border-b border-[#A76024]/20 bg-[#F5DFC3]/90 shadow-[0_4px_20px_rgba(44,24,16,0.05)] backdrop-blur-lg"
                        : "bg-transparent",
                ].join(" ")}
            >
                <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-4 lg:px-12">
                    
                    {/* Logo */}
                    <NavLink
                        to={ROUTES.HOME}
                        className="relative z-[60] shrink-0"
                        aria-label="Thatha Tea home"
                    >
                        <img
                            src={logo}
                            alt="Thatha Tea logo"
                            className={[
                                "w-auto object-contain transition-all duration-300",
                                isScrolled ? "h-12 sm:h-14" : "h-14 sm:h-16 lg:h-20",
                            ].join(" ")}
                        />
                    </NavLink>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden items-center gap-4 lg:flex xl:gap-6" aria-label="Primary">
                        {NAV_LINKS.map((link) => (
                            <NavLink key={link.path} to={link.path} className={navLinkClass}>
                                {({ isActive }) => (
                                    <span className="relative inline-flex flex-col items-center">
                                        {link.label}
                                        <span
                                            className={[
                                                "absolute -bottom-1 h-[2px] rounded-full bg-[#A76024] transition-all duration-300",
                                                isActive ? "w-full opacity-100" : "w-0 opacity-0",
                                            ].join(" ")}
                                        />
                                    </span>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3 lg:gap-4">
                        
                        {/* Order Online Button */}
                        <NavLink
                            to={ROUTES.MENU}
                            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#2C1810] px-6 py-3 lg:px-7 lg:py-3.5 text-xs lg:text-sm font-mona font-normal tracking-wider text-[#F5DFC3] shadow-md transition-all duration-300 hover:bg-[#4D2F1C] hover:shadow-lg"
                        >
                            Order Online
                        </NavLink>

                        {/* Hamburger Button (Caramel) */}
                        <button
                            type="button"
                            aria-label={isDropdownOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isDropdownOpen}
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className={[
                                "relative z-[60] inline-flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full transition-all duration-300",
                                isDropdownOpen 
                                    ? "bg-[#2C1810] text-[#F5DFC3]" 
                                    : "bg-[#A76024] text-[#F5DFC3] hover:bg-[#8f501e]",
                            ].join(" ")}
                        >
                            <div className="relative h-4 w-5">
                                <span className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-[6px] rounded-full bg-current transition-all duration-300 ${isDropdownOpen ? "translate-y-0 rotate-45" : ""}`} />
                                <span className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 rounded-full bg-current transition-all duration-300 ${isDropdownOpen ? "opacity-0" : "opacity-100"}`} />
                                <span className={`absolute left-0 top-1/2 h-[1.5px] w-full translate-y-[6px] rounded-full bg-current transition-all duration-300 ${isDropdownOpen ? "-translate-y-0 -rotate-45" : ""}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Invisible Overlay to close dropdown when clicking outside */}
            {isDropdownOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-transparent" 
                    onClick={() => setIsDropdownOpen(false)} 
                />
            )}

            {/* User Actions & Mobile Nav Dropdown Panel */}
            <div
                className={[
                    "fixed right-4 top-20 lg:right-12 lg:top-24 z-50 w-[calc(100vw-2rem)] max-w-[320px] origin-top-right rounded-3xl bg-[#F6EEDF] p-4 shadow-2xl ring-1 ring-[#2C1810]/10 transition-all duration-300 ease-out",
                    isDropdownOpen ? "scale-100 opacity-100 translate-y-0 visible" : "scale-95 opacity-0 -translate-y-4 invisible pointer-events-none"
                ].join(" ")}
            >
                {/* Mobile Main Navigation Links (Hidden on Desktop) */}
                <div className="flex flex-col gap-1 lg:hidden mb-4 pb-4 border-b border-[#2C1810]/10">
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `px-4 py-3 font-mona font-light tracking-widest uppercase text-sm transition-colors ${
                                    isActive ? "text-[#A76024] font-normal" : "text-[#2C1810] hover:text-[#A76024]"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    {/* Mobile Order Online */}
                    <NavLink
                        to={ROUTES.MENU}
                        className="mt-3 inline-flex sm:hidden w-full items-center justify-center rounded-xl bg-[#2C1810] px-4 py-3 font-mona text-sm tracking-wider text-[#F5DFC3]"
                    >
                        Order Online
                    </NavLink>
                </div>

                {/* User Actions (Login, Cart, Profile) */}
                <div className="flex flex-col gap-1">
                    <p className="px-4 pb-2 text-xs font-mona font-semibold uppercase tracking-widest text-[#2C1810]/50">
                        My Account
                    </p>
                    
                    {/* Profile */}
                    <button className="flex items-center gap-3 w-full px-4 py-3 text-left font-mona text-[#2C1810] transition-colors hover:text-[#A76024]">
                        <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Profile</span>
                    </button>

                    {/* Cart */}
                    <button className="flex items-center justify-between w-full px-4 py-3 text-left font-mona text-[#2C1810] transition-colors hover:text-[#A76024]">
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span>Cart</span>
                        </div>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#A76024] text-[10px] text-white">0</span>
                    </button>

                    {/* Login */}
                    <button className="flex items-center gap-3 w-full px-4 py-3 text-left font-mona text-[#2C1810] transition-colors hover:text-[#A76024]">
                        <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <span>Login / Register</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Navbar;