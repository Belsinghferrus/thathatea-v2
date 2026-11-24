import { Coffee, BarChart3, Leaf, Headphones, Megaphone } from "lucide-react";
import whyPartnerBg from "../../assets/images/franchaise/image 2354.png";

const benefits = [
  {
    icon: Coffee,
    title: "ESTABLISHED BRAND",
    description: "Strong brand recall with thousands of happy customers.",
  },
  {
    icon: BarChart3,
    title: "PROVEN BUSINESS MODEL",
    description: "Low risk, high returns with a tested and successful business model.",
  },
  {
    icon: Leaf,
    title: "QUALITY PRODUCTS",
    description: "Premium tea, handpicked ingredients & consistent taste.",
  },
  {
    icon: Headphones,
    title: "END TO END SUPPORT",
    description: "From site selection to operations - we are with you at every step.",
  },
  {
    icon: Megaphone,
    title: "MARKETING SUPPORT",
    description: "Brand promotions, marketing strategies & digital support.",
  },
];

function WhyPartner() {
  return (
    <section className="relative flex min-h-[50svh] w-full items-center overflow-hidden bg-[#F6DFC0] py-20 lg:py-28">
      {/* Background Illustration with exact #F6DFC0 tone */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={whyPartnerBg}
          alt=""
          className="h-full w-full object-cover object-center opacity-70 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-center px-6 lg:px-16 xl:px-24">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="font-thunder text-4xl uppercase leading-[0.92] tracking-[-0.01em] text-deep-coffee sm:text-5xl lg:text-6xl xl:text-[4rem]">
            Why Partner With<br />Thatha Tea?
          </h2>
        </div>

        {/* 5 Horizontally Aligned Benefits */}
        <div className="mt-14 grid w-[90%] grid-cols-1 gap-10 sm:grid-cols-2 md:gap-8 lg:mt-20 lg:grid-cols-5 lg:gap-6 xl:gap-8">
          {benefits.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* Bare Outline Icon Matching Design Reference */}
                <div className="flex h-12 w-12 items-center justify-center text-[#A76024] transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="h-8 w-8 text-[#A76024]" strokeWidth={1.8} />
                </div>

                {/* Benefit Title - Exact Figma Specs: Mona Sans, 600 SemiBold, 22px, 33px line-height, uppercase, #2C1810 */}
                <h3 className="mt-5  text-base font-semibold uppercase tracking-normal text-[#2C1810] sm:text-lg lg:text-[18px] lg:leading-[33px]">
                  {item.title}
                </h3>

                {/* Benefit Description */}
                <p className="mt-2.5 max-w-[240px] font-mona text-xs leading-relaxed text-deep-coffee/80 sm:text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyPartner;
