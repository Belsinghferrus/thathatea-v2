import { ArrowUpRight } from "lucide-react";
import heroBg from "../../assets/images/contact/adfc5988-159f-4f06-96db-da0d1a69142c 1.png";
import storefrontImg from "../../assets/images/contact/190d328c-ab20-4915-8a46-15c12818ff99 1.png";

function Hero() {
  const handleScrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-[92svh] w-full flex-col justify-end overflow-hidden bg-[#F7EBD5] pt-28 pb-0 lg:min-h-screen lg:pt-0">
      {/* Background Illustrated Image with Subtle Opacity */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover object-left-bottom opacity-30 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7EBD5]/70 via-[#F7EBD5]/30 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-end px-6 pb-16 sm:px-12 sm:pb-24 lg:px-16 lg:pb-20 xl:px-20 xl:pb-24">
        <div className="flex w-full flex-col items-center text-center lg:w-[46%] lg:items-start lg:text-left">
          {/* Decorative Script Kicker */}
          <span className="font-allura text-4xl text-[#A76024] sm:text-5xl lg:text-6xl xl:text-[4.2rem]">
            Brewed with care
          </span>

          {/* Main Heading - font-thunder, no font-bold, tight leading-[0.92] */}
          <h1 className="mt-2 font-thunder text-5xl uppercase leading-[0.92] tracking-[-0.01em] text-[#2C1810] sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6.5rem]">
            LET&apos;S BREW
            <br />
            SOMETHING
            <br />
            GREAT
          </h1>

          {/* Supporting Copy */}
          <p className="mt-5 max-w-[440px] font-mona text-sm leading-relaxed text-[#2C1810]/80 sm:text-base lg:text-lg">
            We&apos;d love to hear from you! Whether it&apos;s a question, feedback, partnership or just a hello &ndash; our door (and kettle) is always open.
          </p>

          {/* CTA: Get In Touch */}
          <button
            onClick={handleScrollToForm}
            className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#A76024] px-7 py-3.5 font-mona text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#8D4A15] hover:shadow-lg active:scale-95 cursor-pointer lg:mt-9"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

      {/* Right Side: Large Storefront Café Illustration Anchored to Bottom Right */}
      <div className="pointer-events-none relative z-10 flex w-full justify-center px-4 sm:px-6 lg:absolute lg:bottom-0 lg:right-4 xl:right-8 2xl:right-14 lg:h-[72vh] xl:h-[76vh] 2xl:h-[80vh] lg:max-h-[720px] xl:max-h-[780px] lg:w-[52%] xl:w-[50%] 2xl:w-[48%] lg:max-w-[820px] xl:max-w-[900px] lg:justify-end lg:px-0">
        <img
          src={storefrontImg}
          alt="Thatha Tea flagship cafe storefront"
          className="h-auto w-full max-w-[480px] object-contain object-bottom sm:max-w-[580px] lg:h-full lg:w-auto lg:max-w-full lg:object-bottom-right drop-shadow-2xl"
        />
      </div>
    </section>
  );
}

export default Hero;
