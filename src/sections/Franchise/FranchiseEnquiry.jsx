import { ArrowRight, Mail, Phone } from "lucide-react";
import kioskImg from "../../assets/images/franchaise/93585434-2035-46e0-8072-97838650a543 1.png";
import teaGlassWithLeaves from "../../assets/images/franchaise/career-chai-_oXe-1La 2.png";
import enquiryBg from "../../assets/images/franchaise/brew-success-bg.png";

function FranchiseEnquiry() {
  const handleEnquiryClick = () => {
    window.location.href = "mailto:info@thathatea.com?subject=Franchise%20Opportunity%20Enquiry";
  };

  return (
    <section
      id="franchise-enquiry"
      className="relative flex w-full items-center overflow-hidden bg-[#F4DCBF] py-14 sm:py-16 lg:py-20"
    >
      {/* Background Illustration with Crisp Dark Sketch Overlay matching the design */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={enquiryBg}
          alt=""
          className="h-full w-full object-cover object-center opacity-75 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: 3D Kiosk Storefront Illustration */}
          <div className="flex w-full items-center justify-center lg:col-span-5 lg:justify-start">
            <img
              src={kioskImg}
              alt="Thatha Tea Model Kiosk"
              className="w-full max-w-[340px] object-contain drop-shadow-2xl sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px]"
            />
          </div>

          {/* Right Column: Heading, Subtitle, CTA & Contact + Chai Asset */}
          <div className="relative flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            {/* Main Heading - strictly 3 lines with whitespace-nowrap and exact proportions */}
            <h2 className="font-thunder font-bold uppercase leading-[0.93] tracking-[-0.01em] text-[#2C1810] text-[34px] sm:text-[44px] md:text-[52px] lg:text-[48px] xl:text-[58px] 2xl:text-[64px]">
              <span className="block whitespace-nowrap">&ldquo;DON&apos;T JUST OPEN A STORE.</span>
              <span className="block whitespace-nowrap">CREATE THE PLACE PEOPLE</span>
              <span className="block whitespace-nowrap">LOOK FOR.&rdquo;</span>
            </h2>

            {/* Lower row: Copy + CTA on the left, Chai Glass on the right */}
            <div className="relative mt-5 flex w-full flex-col items-center lg:flex-row lg:items-end lg:justify-between">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Supporting Copy */}
                <p className="max-w-[420px] font-mona text-[13px] font-normal leading-[1.65] text-[#2C1810]/85 sm:text-[14px] lg:text-[15px]">
                  Build a business around a taste people
                  <br />
                  already trust, and give it your own
                  <br />
                  direction.
                </p>

                {/* Action Area: Enquire Now Button + Contact Details */}
                <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row sm:gap-6 lg:mt-8">
                  <button
                    onClick={handleEnquiryClick}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#A75D20] px-6 py-3 font-mona text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#8D4A15] hover:shadow-lg active:scale-95 cursor-pointer"
                  >
                    <span>ENQUIRE NOW</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <div className="flex flex-col items-center gap-1.5 sm:items-start sm:gap-1.5">
                    <a
                      href="mailto:info@thathatea.com"
                      className="flex items-center gap-2 font-mona text-[12px] sm:text-[13px] font-medium text-[#2C1810] transition-colors hover:text-[#A75D20]"
                    >
                      <Mail className="h-3.5 w-3.5 text-[#A75D20]" />
                      <span>info@thathatea.com</span>
                    </a>
                    <a
                      href="tel:+916385648484"
                      className="flex items-center gap-2 font-mona text-[12px] sm:text-[13px] font-medium text-[#2C1810] transition-colors hover:text-[#A75D20]"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#A75D20]" />
                      <span>+91 63856 48484</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Steaming Tea Glass Decorative Asset nestled on the right side of the content area */}
              <div className="pointer-events-none mt-6 flex justify-center sm:mt-8 lg:mt-0 lg:justify-end">
                <img
                  src={teaGlassWithLeaves}
                  alt="Steaming cup of chai with tea leaves"
                  className="w-[180px] object-contain drop-shadow-sm sm:w-[210px] md:w-[230px] lg:w-[240px] xl:w-[270px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FranchiseEnquiry;
