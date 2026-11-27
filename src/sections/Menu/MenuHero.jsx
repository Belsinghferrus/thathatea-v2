import heroMainImg from "../../assets/images/menu/menu-hero.png";
import bakerySketchImg from "../../assets/images/menu/sketch.png";

function MenuHero() {
  return (
    <section className="relative flex min-h-svh w-full items-center overflow-hidden bg-[#FBF4E8] pt-28 pb-12 sm:pt-32 sm:pb-16 lg:py-0">
      {/* Subtle Background Dot Texture */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(120,72,38,0.35) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-360 flex-col items-center px-6 lg:min-h-svh lg:flex-row lg:items-center lg:px-16">
        {/* Left Column: Text Content */}
        <div className="flex w-full flex-col justify-center lg:w-[42%]">
          <div className="max-w-110">
            <p className="font-mona text-xs font-semibold uppercase tracking-[0.22em] text-caramel sm:text-sm">
              THATHA TEA MENU
            </p>

            <h1 className="mt-2 font-thunder text-[4.5rem] leading-[0.86] tracking-[-0.02em] text-deep-coffee sm:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem]">
              BAKERY
            </h1>

            <p className="mt-2 font-allura text-4xl leading-none text-caramel sm:text-5xl lg:text-[3.25rem]">
              Baked fresh. Just for you
            </p>

            <p className="mt-5 max-w-95 font-mona text-sm leading-relaxed text-deep-coffee/80 sm:text-base">
              Freshly baked every day with the finest ingredients, crafted to
              pair beautifully with every cup and every craving.
            </p>
          </div>
        </div>

        {/* Right Column: Sketch Background + Main Bakery Illustration */}
        <div className="relative mt-10 flex w-full items-center justify-center lg:mt-0 lg:w-[58%]">
          {/* Faded Bakery Oven & Baker Sketch */}
          <div className="pointer-events-none absolute -top-6 left-1/2 z-0 w-[92%] -translate-x-1/2 opacity-40 sm:w-[82%] lg:-top-10 lg:left-[2%] lg:w-[82%] lg:translate-x-0">
            <img
              src={bakerySketchImg}
              alt=""
              aria-hidden="true"
              className="h-auto w-full object-contain mix-blend-multiply"
            />
          </div>

          {/* Main Bakery Assortment Illustration */}
          <div className="relative z-10 w-full max-w-140 lg:ml-auto lg:max-w-170">
            <img
              src={heroMainImg}
              alt="Thatha Tea bakery assortment with tea cup, bun, brownie, cookie, and branded pack"
              className="h-auto w-full object-contain drop-shadow-[0_20px_36px_rgba(44,24,16,0.14)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuHero;
