import { Mail, Phone } from "lucide-react";
import stallToOutletImg from "../../assets/images/tech/image 2364.png";

function GrowingFamilies() {
  return (
    <section className="relative w-full overflow-hidden bg-deep-coffee py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-400 grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12 lg:gap-12 lg:px-16">
        {/* Left Column: Heading & Story Copy */}
        <div className="flex flex-col items-start text-left lg:col-span-5">
          <span className="font-mona text-[10px] font-semibold uppercase tracking-[0.2em] text-caramel sm:text-[11px]">
            GROWING DAY BY DAY
          </span>

          <h2 className="mt-2 font-thunder text-4xl uppercase leading-[0.92] tracking-[-0.01em] text-soft-ivory sm:text-5xl lg:text-[3.5rem]">
            FROM ONE STALL
            <br />
            TO MANY TEA FAMILIES.
          </h2>

          <p className="mt-4 max-w-105 font-mona text-xs leading-relaxed text-soft-ivory/80 sm:text-sm">
            Our story started with a small tea stall and a big dream. Today, we
            bring the same warmth, quality, and honest conversations to every
            new outlet across towns and cities.
          </p>
        </div>

        {/* Right Column: Road Illustration + Contact Links */}
        <div className="relative flex flex-col items-center lg:col-span-7 lg:items-end">
          <img
            src={stallToOutletImg}
            alt="Journey from one Thatha Tea stall to modern tea outlets"
            className="w-full max-w-165 object-contain"
          />

          <div className="mt-4 flex flex-col items-center gap-2 self-center lg:items-end lg:self-end">
            <a
              href="mailto:info@thathatea.com"
              className="flex items-center gap-2 font-mona text-xs text-soft-ivory/85 transition-colors hover:text-caramel"
            >
              <Mail className="h-3.5 w-3.5 text-caramel" />
              <span>info@thathatea.com</span>
            </a>
            <a
              href="tel:+916385648484"
              className="flex items-center gap-2 font-mona text-xs text-soft-ivory/85 transition-colors hover:text-caramel"
            >
              <Phone className="h-3.5 w-3.5 text-caramel" />
              <span>+91 63856 48484</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowingFamilies;
