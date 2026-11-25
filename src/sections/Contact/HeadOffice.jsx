import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import headOfficeBg from "../../assets/images/contact/ad060866-2c5c-4a55-a859-8a525e1e426e 1.png";
import mascotWelcome from "../../assets/images/contact/40f03185-c647-4468-a09a-1014ef3f1550 1.png";
import mascotPeeking from "../../assets/images/contact/Group 2087324512.png";
import curvedShape from "../../assets/images/contact/Vector.png";
import chennaiPhoto from "../../assets/images/outlet/Indra-nager.png";

function HeadOffice() {
  return (
    <section className="relative flex w-full flex-col justify-end overflow-hidden bg-linear-to-b from-[#FAF1E3] via-[#FDF6EA] to-[#F8EBD7] pt-16 sm:pt-20 lg:pt-24 pb-0">
      {/* Background Illustrated Image - Clean & Bright */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={headOfficeBg}
          alt=""
          className="h-full w-full object-cover object-center opacity-45 mix-blend-multiply"
        />
        {/* Soft Center Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45)_0%,transparent_70%)]" />
      </div>

      {/* Decorative Curved Peach Shape on Upper-Left */}
      <div className="pointer-events-none absolute -top-16 -left-16 z-0 w-64 sm:w-80 lg:w-96 opacity-45">
        <img src={curvedShape} alt="" className="w-full object-contain" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-400 px-6 lg:px-16">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Left Column: Franchise Invitation */}
          <div className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left pb-12 sm:pb-16 lg:pb-20">
            <h2 className="font-thunder text-4xl uppercase leading-[0.92] tracking-[-0.01em] text-deep-coffee sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem]">
              READY TO START YOUR
              <br />
              TEA JOURNEY?
            </h2>

            <p className="mt-4 max-w-95 font-mona text-sm leading-relaxed text-deep-coffee/80 sm:text-base">
              Join India&apos;s most loved tea café franchise and build a
              successful business with a brand that people trust.
            </p>

            <Link
              to="/franchise"
              className="group mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-caramel px-7 py-3.5 font-mona text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#8D4A15] hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <span>KNOW ABOUT FRANCHISE</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <div className="mt-6 flex flex-col items-center gap-2 sm:items-start">
              <a
                href="mailto:info@thathatea.com"
                className="flex items-center gap-2 font-mona text-xs font-medium text-deep-coffee/85 transition-colors hover:text-caramel sm:text-sm"
              >
                <Mail className="h-4 w-4 text-caramel" />
                <span>info@thathatea.com</span>
              </a>
              <a
                href="tel:+916385648484"
                className="flex items-center gap-2 font-mona text-xs font-medium text-deep-coffee/85 transition-colors hover:text-caramel sm:text-sm"
              >
                <Phone className="h-4 w-4 text-caramel" />
                <span>+91 63856 48484</span>
              </a>
            </div>
          </div>

          {/* Center Mascot Resting Flush with Bottom */}
          <div className="relative flex justify-center lg:col-span-3 lg:justify-center items-end">
            <img
              src={mascotWelcome}
              alt="Thatha Tea welcoming mascot"
              className="w-60 sm:w-70 lg:w-80 xl:w-87.5 object-contain object-bottom drop-shadow-xl"
            />
          </div>

          {/* Right Column: Two Staggered Office Cards */}
          <div className="relative flex flex-col gap-6 sm:flex-row sm:gap-6 lg:col-span-4 lg:flex-col lg:gap-6 pb-12 sm:pb-16 lg:pb-16">
            {/* Card 1: Bangalore Head Office (Higher & Left) */}
            <div className="relative w-full rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur-xs border border-white/40 transition-transform duration-300 hover:-translate-y-1 sm:max-w-72.5 lg:max-w-77.5 lg:-translate-x-4">
              {/* Decorative Peeking Mascot */}
              <div className="pointer-events-none absolute -top-8 right-6 w-14">
                <img
                  src={mascotPeeking}
                  alt=""
                  className="w-full object-contain"
                />
              </div>

              <h3 className="font-thunder text-lg uppercase tracking-wider text-deep-coffee">
                BANGALORE HEAD OFFICE
              </h3>

              <div className="mt-3 flex gap-3">
                <img
                  src={chennaiPhoto}
                  alt="Bangalore Office"
                  className="h-16 w-16 rounded-xl object-cover shrink-0"
                />
                <div className="flex flex-col gap-1 text-[11px] font-mona text-deep-coffee/80">
                  <p className="flex items-start gap-1.5 leading-snug">
                    <MapPin className="h-3.5 w-3.5 text-caramel shrink-0 mt-0.5" />
                    <span>
                      No. 124, 1st Cross, Indiranagar, Bangalore - 560038
                    </span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Mail className="h-3 w-3 text-caramel shrink-0" />
                    <span>info@thathatea.com</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone className="h-3 w-3 text-caramel shrink-0" />
                    <span>+91 63856 48484</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Chennai Head Office (Lower & Right) */}
            <div className="relative w-full rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur-xs border border-white/40 transition-transform duration-300 hover:-translate-y-1 sm:max-w-72.5 lg:max-w-77.5 lg:translate-x-6">
              {/* Decorative Peeking Mascot */}
              <div className="pointer-events-none absolute -top-8 right-6 w-14">
                <img
                  src={mascotPeeking}
                  alt=""
                  className="w-full object-contain"
                />
              </div>

              <h3 className="font-thunder text-lg uppercase tracking-wider text-deep-coffee">
                CHENNAI HEAD OFFICE
              </h3>

              <div className="mt-3 flex gap-3">
                <img
                  src={chennaiPhoto}
                  alt="Chennai Office"
                  className="h-16 w-16 rounded-xl object-cover shrink-0"
                />
                <div className="flex flex-col gap-1 text-[11px] font-mona text-deep-coffee/80">
                  <p className="flex items-start gap-1.5 leading-snug">
                    <MapPin className="h-3.5 w-3.5 text-caramel shrink-0 mt-0.5" />
                    <span>No. 45, Anna Salai, T. Nagar, Chennai - 600017</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Mail className="h-3 w-3 text-caramel shrink-0" />
                    <span>info@thathatea.com</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone className="h-3 w-3 text-caramel shrink-0" />
                    <span>+91 63856 48484</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeadOffice;
