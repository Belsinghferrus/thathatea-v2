import { Mail, Phone, ArrowRight } from "lucide-react";
import mascotWelcome from "../../assets/images/franchaise/mascot-welcome.png";
import mascotShape from "../../assets/images/franchaise/mascot-shape.png";
import brewSuccessBg from "../../assets/images/franchaise/brew-success-bg.png";

const stats = [
  { value: "50+", label: "OUTLET" },
  { value: "1M+", label: "HAPPY CUSTOMER" },
  { value: "30+", label: "CITIES" },
  { value: "32+", label: "YEARS OF TRUST" },
];

function BrewSuccess() {
  const handleEnquire = () => {
    const enquirySection = document.getElementById("franchise-enquiry");
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "mailto:info@thathatea.com?subject=Franchise%20Enquiry";
    }
  };

  return (
    <section className="relative flex w-full flex-col justify-end overflow-hidden bg-[#F7EAD7] pt-16 lg:pt-20 pb-0">
      {/* Background Illustration with Sketch Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={brewSuccessBg}
          alt=""
          className="h-full w-full object-cover object-center opacity-70 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-end px-6 sm:px-12 lg:grid-cols-12 lg:gap-8 lg:px-16 xl:px-24">
        {/* Left Column: Mascot with Vector Shape Backdrop */}
        <div className="relative flex w-full items-end justify-center lg:col-span-6 lg:justify-start">
          <div className="relative w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[520px] xl:max-w-[560px]">
            {/* The Exact Vector Shape from Figma */}
            <img
              src={mascotShape}
              alt=""
              className="pointer-events-none absolute bottom-0 left-[13%] w-[68%] object-contain object-bottom -translate-y-1.5 z-0"
            />

            {/* Welcoming Mascot Image Resting Flush at the Bottom */}
            <img
              src={mascotWelcome}
              alt="Thatha Tea welcoming you to partner"
              className="relative z-10 w-full object-contain object-bottom"
            />
          </div>
        </div>

        {/* Right Column: Content, CTAs, and Stats */}
        <div className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left pb-12 sm:pb-14 lg:pb-16 xl:pb-20">
          {/* Main Heading */}
          <h2 className="font-thunder text-4xl font-bold uppercase leading-[0.95] tracking-[-0.01em] text-deep-coffee sm:text-5xl lg:text-6xl xl:text-[4.2rem]">
            Let's Brew Success<br />Together!
          </h2>

          {/* Subtext */}
          <p className="mt-4 max-w-[480px] font-mona text-sm leading-relaxed text-deep-coffee/80 sm:text-base">
            Join the Thatha Tea family and be your own boss today.
          </p>

          {/* Action Row: Enquire Button + Contact Details */}
          <div className="mt-7 flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
            <button
              onClick={handleEnquire}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#A75D20] px-7 py-3 font-mona text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-deep-coffee"
            >
              <span>Enquire Now</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center gap-1.5 sm:items-start text-xs font-mona text-deep-coffee/80">
              <a
                href="mailto:info@thathatea.com"
                className="flex items-center gap-2 hover:text-caramel transition-colors"
              >
                <Mail className="h-4 w-4 text-caramel" />
                <span>info@thathatea.com</span>
              </a>
              <a
                href="tel:+916385648484"
                className="flex items-center gap-2 hover:text-caramel transition-colors"
              >
                <Phone className="h-4 w-4 text-caramel" />
                <span>+91 63856 48484</span>
              </a>
            </div>
          </div>

          {/* Business Statistics Grid */}
          <div className="mt-10 grid w-full max-w-[580px] grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0 pt-6 border-t border-deep-coffee/15">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center lg:items-start text-center lg:text-left ${
                  index !== 0 ? "sm:border-l sm:border-deep-coffee/15 sm:pl-5" : ""
                }`}
              >
                <span className="font-thunder text-3xl font-bold text-deep-coffee sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-0.5 font-mona text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-deep-coffee/60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrewSuccess;
