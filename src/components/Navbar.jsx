import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS, ROUTES } from "../constant/routes.js";
import { useShop } from "../context/ShopContext.jsx";
import { 
    ShoppingCart, 
    User, 
    LogOut, 
    Package, 
    ChevronDown 
} from "lucide-react";
import logo from "../assets/images/logo.webp";

// TEMPORARY DEMO NAVIGATION: Set to false or remove before production launch
const ENABLE_DEMO_NAV_LINKS = true;

const DEMO_NAV_LINKS = [
    { label: "My Orders", path: ROUTES.ORDERS, icon: Package },
    { label: "My Profile", path: ROUTES.PROFILE, icon: User },
];

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isMenuHovered, setIsMenuHovered] = useState(false);
    
    const location = useLocation();
    const { cartTotals } = useShop();
    
    // Mock Auth State - Replace with your actual Auth Context
    const isLoggedIn = false; 

    const profileRef = useRef(null);
    const menuRef = useRef(null);

    // Handle scroll for background blur/shadow
    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close dropdowns on route change
    useEffect(() => {
        setIsDropdownOpen(false);
        setIsProfileOpen(false);
        setIsMenuHovered(false);
    }, [location.pathname]);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setIsProfileOpen(false);
            }
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuHovered(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close on Escape key
    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsDropdownOpen(false);
                setIsProfileOpen(false);
                setIsMenuHovered(false);
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    // Filter out "CAREER" from NAV_LINKS
    const filteredNavLinks = NAV_LINKS.filter(link => link.label.toUpperCase() !== "CAREER");

    // Nav Link Class
    const navLinkClass = ({ isActive }) =>
        [
            "relative text-[13px] lg:text-[14px] font-mona font-light tracking-widest uppercase transition-colors duration-300 px-2 py-1",
            isActive 
                ? "text-caramel font-normal" 
                : "text-deep-coffee hover:text-caramel", 
        ].join(" ");

    return (
        <>
            <header
                className={[
                    "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
                    isScrolled
                        ? " bg-warm-cream/90 shadow-[0_4px_20px_rgba(44,24,16,0.05)] backdrop-blur-lg"
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
                    <nav className="hidden items-center gap-2.5 lg:flex xl:gap-5" aria-label="Primary">
                        {filteredNavLinks.map((link) => {
                            // Handle the MENU dropdown special case
                            if (link.label.toUpperCase() === "MENU") {
                                return (
                                    <div 
                                        key={link.path}
                                        className="relative"
                                        ref={menuRef}
                                        onMouseEnter={() => setIsMenuHovered(true)}
                                        onMouseLeave={() => setIsMenuHovered(false)}
                                    >
                                        <button
                                            onClick={() => setIsMenuHovered(!isMenuHovered)}
                                            className={navLinkClass({ isActive: location.pathname.includes('/menu') })}
                                        >
                                            <span className="relative inline-flex flex-row items-center">
                                                {link.label}
                                                <ChevronDown className={`ml-1 inline-block h-3 w-3 transition-transform ${isMenuHovered ? 'rotate-180' : ''}`} />
                                                <span
                                                    className={[
                                                        "absolute -bottom-1 h-[2px] rounded-full bg-caramel transition-all duration-300",
                                                        location.pathname.includes('/menu') ? "w-full opacity-100" : "w-0 opacity-0",
                                                    ].join(" ")}
                                                />
                                            </span>
                                        </button>

                                        {/* Menu Dropdown */}
                                        <div 
                                            className={`absolute left-0 top-full mt-2 w-48 origin-top-left rounded-xl bg-soft-ivory p-2 shadow-xl ring-1 ring-deep-coffee/10 transition-all duration-200 ${
                                                isMenuHovered ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
                                            }`}
                                        >
                                            <NavLink 
                                                to={ROUTES.MENU} 
                                                className="block rounded-lg px-4 py-2.5 text-sm font-mona text-deep-coffee hover:bg-warm-cream hover:text-caramel"
                                            >
                                                Our Menu
                                            </NavLink>
                                            <NavLink 
                                                to={ROUTES.MANUFACTURING || "/manufacturing"} 
                                                className="block rounded-lg px-4 py-2.5 text-sm font-mona text-deep-coffee hover:bg-warm-cream hover:text-caramel"
                                            >
                                                Manufacturing
                                            </NavLink>
                                        </div>
                                    </div>
                                );
                            }

                            // Regular links
                            return (
                                <NavLink key={link.path} to={link.path} className={navLinkClass}>
                                    {({ isActive }) => (
                                        <span className="relative inline-flex flex-col items-center">
                                            {link.label}
                                            <span
                                                className={[
                                                    "absolute -bottom-1 h-[2px] rounded-full bg-caramel transition-all duration-300",
                                                    isActive ? "w-full opacity-100" : "w-0 opacity-0",
                                                ].join(" ")}
                                            />
                                        </span>
                                    )}
                                </NavLink>
                            );
                        })}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4 lg:gap-6">
                        
                        {/* TEMPORARY DEMO NAVIGATION: Added to right side as icons */}
                        {ENABLE_DEMO_NAV_LINKS && (
                            <div className="hidden lg:flex items-center gap-4 border-r border-deep-coffee/10 pr-4 mr-1">
                                {DEMO_NAV_LINKS.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <NavLink
                                            key={link.path}
                                            to={link.path}
                                            className="group relative flex items-center justify-center text-deep-coffee/70 transition-colors hover:text-caramel"
                                            title={`DEMO: ${link.label}`}
                                        >
                                            <Icon className="h-5 w-5" strokeWidth={1.8} />
                                            {/* Tiny Demo Badge */}
                                            <span className="absolute -right-2 -top-1.5 text-[8px] font-bold text-red-500">
                                                DEMO
                                            </span>
                                        </NavLink>
                                    );
                                })}
                            </div>
                        )}

                        {/* Cart Icon */}
                        <NavLink 
                            to={ROUTES.CART} 
                            className="relative text-deep-coffee transition-colors hover:text-caramel"
                        >
                            <ShoppingCart className="h-6 w-6" strokeWidth={1.8} />
                            {cartTotals.itemCount > 0 && (
                                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                                    {cartTotals.itemCount}
                                </span>
                            )}
                        </NavLink>

                        {/* Profile / Login Icon (Desktop) */}
                        <div className="relative hidden lg:block" ref={profileRef}>
                            {isLoggedIn ? (
                                <button 
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className="flex items-center gap-2 text-deep-coffee transition-colors hover:text-caramel"
                                >
                                    <User className="h-6 w-6" strokeWidth={1.8} />
                                </button>
                            ) : (
                                <NavLink 
                                    to={ROUTES.SIGNIN}
                                    className="flex items-center gap-2 text-deep-coffee transition-colors hover:text-caramel"
                                >
                                    <User className="h-6 w-6" strokeWidth={1.8} />
                                    <span className="text-sm font-mona font-medium uppercase tracking-wider">Login</span>
                                </NavLink>
                            )}

                            {/* Profile Dropdown (Only if logged in) */}
                            {isLoggedIn && isProfileOpen && (
                                <div className="absolute right-0 top-full mt-4 w-48 origin-top-right rounded-xl bg-soft-ivory p-2 shadow-xl ring-1 ring-deep-coffee/10">
                                    <NavLink to={ROUTES.PROFILE} className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-mona text-deep-coffee hover:bg-warm-cream hover:text-caramel">
                                        <User className="h-4 w-4" /> Profile
                                    </NavLink>
                                    <NavLink to={ROUTES.ORDERS} className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-mona text-deep-coffee hover:bg-warm-cream hover:text-caramel">
                                        <Package className="h-4 w-4" /> My Orders
                                    </NavLink>
                                    <button className="flex w-full items-center gap-3 rounded-lg px-4 py-2.5 text-left text-sm font-mona text-red-600 hover:bg-red-50">
                                        <LogOut className="h-4 w-4" /> Logout
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Hamburger Button (Mobile Only) */}
                        <button
                            type="button"
                            aria-label={isDropdownOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isDropdownOpen}
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className={[
                                "relative z-[60] inline-flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 lg:hidden",
                                isDropdownOpen 
                                    ? "bg-deep-coffee text-warm-cream" 
                                    : "bg-caramel text-warm-cream hover:bg-[#8f501e]",
                            ].join(" ")}
                        >
                            <div className="relative h-4 w-5">
                                <span className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1.5 rounded-full bg-current transition-all duration-300 ${isDropdownOpen ? "translate-y-0 rotate-45" : ""}`} />
                                <span className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 rounded-full bg-current transition-all duration-300 ${isDropdownOpen ? "opacity-0" : "opacity-100"}`} />
                                <span className={`absolute left-0 top-1/2 h-[1.5px] w-full translate-y-1.5 rounded-full bg-current transition-all duration-300 ${isDropdownOpen ? "-translate-y-0 -rotate-45" : ""}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Invisible Overlay to close dropdown when clicking outside */}
            {isDropdownOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-transparent lg:hidden" 
                    onClick={() => setIsDropdownOpen(false)} 
                />
            )}

            {/* Mobile Nav Dropdown Panel */}
            <div
                className={[
                    "fixed right-4 top-20 z-50 w-[calc(100vw-2rem)] max-w-[320px] origin-top-right rounded-3xl bg-soft-ivory p-4 shadow-2xl ring-1 ring-deep-coffee/10 transition-all duration-300 ease-out lg:hidden",
                    isDropdownOpen ? "scale-100 opacity-100 translate-y-0 visible" : "scale-95 opacity-0 -translate-y-4 invisible pointer-events-none"
                ].join(" ")}
            >
                {/* Mobile Main Navigation Links */}
                <div className="flex flex-col gap-1 border-b border-deep-coffee/10 pb-4">
                    {filteredNavLinks.map((link) => (
                        <div key={link.path}>
                            {link.label.toUpperCase() === "MENU" ? (
                                <div className="flex flex-col">
                                    <span className="px-4 py-3 font-mona font-light uppercase tracking-widest text-sm text-deep-coffee">
                                        Menu
                                    </span>
                                    <div className="ml-4 flex flex-col border-l border-deep-coffee/10 pl-2">
                                        <NavLink to={ROUTES.MENU} className="px-4 py-2 font-mona text-sm text-deep-coffee/80 hover:text-caramel">Our Menu</NavLink>
                                        <NavLink to={ROUTES.MANUFACTURING || "/manufacturing"} className="px-4 py-2 font-mona text-sm text-deep-coffee/80 hover:text-caramel">Manufacturing</NavLink>
                                    </div>
                                </div>
                            ) : (
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `block px-4 py-3 font-mona font-light tracking-widest uppercase text-sm transition-colors ${
                                            isActive ? "text-caramel font-normal" : "text-deep-coffee hover:text-caramel"
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile User Actions */}
                <div className="flex flex-col gap-1 pt-4">
                    <p className="px-4 pb-2 text-xs font-mona font-semibold uppercase tracking-widest text-deep-coffee/50">
                        My Account
                    </p>
                    
                    {isLoggedIn ? (
                        <>
                            <NavLink to={ROUTES.PROFILE} className="flex items-center gap-3 w-full px-4 py-3 text-left font-mona text-deep-coffee transition-colors hover:text-caramel">
                                <User className="w-5 h-5 opacity-70" /> Profile
                            </NavLink>
                            <NavLink to={ROUTES.ORDERS} className="flex items-center gap-3 w-full px-4 py-3 text-left font-mona text-deep-coffee transition-colors hover:text-caramel">
                                <Package className="w-5 h-5 opacity-70" /> My Orders
                            </NavLink>
                            <button className="flex items-center gap-3 w-full px-4 py-3 text-left font-mona text-red-600 transition-colors hover:text-red-700">
                                <LogOut className="w-5 h-5 opacity-70" /> Logout
                            </button>
                        </>
                    ) : (
                        <NavLink to={ROUTES.SIGNIN} className="flex items-center gap-3 w-full px-4 py-3 text-left font-mona text-deep-coffee transition-colors hover:text-caramel">
                            <User className="w-5 h-5 opacity-70" /> Login / Register
                        </NavLink>
                    )}
                </div>

                {/* TEMPORARY DEMO NAVIGATION (Mobile) */}
                {ENABLE_DEMO_NAV_LINKS && (
                    <div className="flex flex-col gap-1 pt-4 border-t border-deep-coffee/10 mt-2">
                        <p className="px-4 pb-2 text-xs font-mona font-semibold uppercase tracking-widest text-red-500/70">
                            Demo Links
                        </p>
                        {DEMO_NAV_LINKS.map((link) => {
                            const Icon = link.icon;
                            return (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `flex items-center justify-between px-4 py-3 font-mona text-sm font-light uppercase tracking-widest transition-colors ${
                                            isActive ? "text-caramel font-normal" : "text-deep-coffee hover:text-caramel"
                                        }`
                                    }
                                >
                                    <div className="flex items-center gap-6">
                                        <Icon className="h-5 w-5 opacity-70" />
                                        <span>{link.label}</span>
                                    </div>
                                    <span className="rounded-full bg-red-100 px-2 py-0.5 mb-4 text-[9px] font-semibold tracking-wider text-red-600">
                                        DEMO
                                    </span>
                                </NavLink>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

export default Navbar;