import heroBg from "../../assets/images/tech/Vintage-tea-bg 2.png";
import heroMascotAdmin from "../../assets/images/tech/thatha_tea_admin_mascot_transparent 1.png";

function Hero() {
  return (
    <section className="relative flex min-h-[92svh] w-full items-center overflow-hidden bg-soft-ivory pt-28 pb-12 lg:min-h-170 lg:pt-24 lg:pb-0 xl:min-h-185">
      {/* Vintage Tea Sketch Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover object-right opacity-55 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-linear-to-r from-soft-ivory from-30% via-soft-ivory/80 via-50% to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 mx-auto flex h-full w-full max-w-400 items-center px-6 lg:px-16">
        <div className="flex w-full flex-col items-start text-left lg:w-[44%]">
          {/* Main Heading - font-thunder, leading-[0.92], no font-bold */}
          <h1 className="font-thunder text-5xl uppercase leading-[0.92] tracking-[-0.01em] text-deep-coffee sm:text-6xl lg:text-[4.6rem] xl:text-[5.5rem]">
            A POWERED
            <br />
            BY OUR
            <br />
            OWN
          </h1>

          {/* Script Accent Word */}
          <span className="mt-1 font-allura text-4xl text-caramel sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem]">
            Technology
          </span>

          {/* Supporting Copy */}
          <p className="mt-4 max-w-95 font-mona text-xs leading-relaxed text-deep-coffee/80 sm:text-sm">
            Our in-house software, Thatha Notes, makes ordering, billing,
            inventory, and daily outlet operations simple, accurate, and easy.
          </p>
        </div>
      </div>

      {/* Right Side: Thatha Mascot + Admin Portal Desk Anchored Bottom-Right */}
      <div className="pointer-events-none relative z-10 mt-8 flex w-full justify-center px-4 lg:absolute lg:right-[4%] lg:bottom-0 lg:mt-0 lg:h-[82%] lg:w-[54%] lg:justify-end lg:px-0 xl:right-[6%] xl:h-[86%]">
        <img
          src={heroMascotAdmin}
          alt="Thatha Tea Admin Portal and Thatha Notes technology system"
          className="h-auto w-full max-w-135 object-contain object-bottom sm:max-w-165 lg:h-full lg:w-auto lg:max-w-full"
        />
      </div>
    </section>
  );
}

export default Hero;
