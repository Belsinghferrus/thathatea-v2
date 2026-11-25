import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Phone, X } from "lucide-react";
import { ROUTES } from "../../constant/routes";
import popupBg from "../../assets/images/franchaise/f96172de-1c6c-43c7-9049-e1cdd5749b8b 1.png";

function FranchisePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Start 5-second timer on mount; clear on unmount so navigating away & back resets it
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Trigger subtle entrance animation frame after mount
  useEffect(() => {
    if (!isOpen) return;
    const raf = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(raf);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  }, []);

  // Prevent background scrolling and support Escape key dismissal while open
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, handleClose]);

  const handleOurStory = () => {
    document.body.style.overflow = "";
    setIsOpen(false);
    navigate(ROUTES.STORY);
  };

  const handleFranchiseEnquiry = () => {
    document.body.style.overflow = "";
    setIsOpen(false);
    const target = document.getElementById("franchise-enquiry");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href =
        "mailto:info@thathatea.com?subject=Franchise%20Opportunity%20Enquiry";
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="franchise-popup-heading"
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex items-end justify-center bg-black/45 px-4 pb-5 backdrop-blur-[1px] transition-opacity duration-300 sm:px-6 sm:pb-8 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Centered Bottom Promotional Popup Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-305 overflow-hidden rounded-[22px] bg-[#FCEBD3] shadow-2xl transition-all duration-300 ease-out lg:aspect-[5996/572] lg:rounded-4xl lg:bg-transparent ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {/* Background Asset (Tea Glass Left + Storefront Sketch Right) */}
        <img
          src={popupBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-left lg:object-center"
        />

        {/* Subtle Mobile/Tablet Readability Scrim (Desktop uses clean open cream wave) */}
        <div className="pointer-events-none absolute inset-0 bg-[#FCEBD3]/75 lg:bg-transparent" />

        {/* Close Button (Top-Right) */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close promotional popup"
          className="absolute top-3 right-3.5 z-20 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-deep-coffee/70 transition-colors hover:bg-deep-coffee/10 hover:text-deep-coffee"
        >
          <X className="h-4 w-4" strokeWidth={2} />
        </button>

        {/* Content Row */}
        <div className="relative z-10 flex h-full w-full flex-col items-start justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6 lg:flex-row lg:items-center lg:gap-6 lg:py-0 lg:pl-32 lg:pr-12 xl:pl-35">
          {/* Left Copy */}
          <div className="max-w-125 pr-6 lg:pr-0">
            <h2
              id="franchise-popup-heading"
              className="font-mona text-sm font-bold uppercase leading-tight tracking-tight text-deep-coffee sm:text-base lg:text-[17px]"
            >
              READY TO MAKE THE FAMILIAR YOURS?
            </h2>
            <p className="mt-1 font-mona text-xs leading-snug text-deep-coffee/85 sm:text-[13px]">
              Let&apos;s talk about your location, franchise fit, and next step.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 lg:shrink-0">
            <button
              type="button"
              onClick={handleOurStory}
              className="group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-[#3A1D0F] px-4 py-2.5 font-mona text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-deep-coffee active:scale-95 sm:px-5"
            >
              <span>OUR STORY</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              type="button"
              onClick={handleFranchiseEnquiry}
              className="group inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full bg-caramel px-4 py-2.5 font-mona text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-[#8D4A15] active:scale-95 sm:px-5"
            >
              <span>FRANCHISE ENQUIRY</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href="tel:+916385648484"
              className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-[#3A1D0F] px-4 py-2.5 font-mona text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-deep-coffee active:scale-95 sm:px-5"
            >
              <span>BOOK A CALL</span>
              <Phone className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FranchisePopup;
