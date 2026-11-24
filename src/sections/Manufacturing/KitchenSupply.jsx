import centralKitchenPhoto from "../../assets/images/manufacturing/5975285c-4861-4f0f-aafb-905195a4b24d 1.png";
import outletNightPhoto from "../../assets/images/home/outlet.png";
import signatureTeaPhoto from "../../assets/images/home/tea2.png";
import bgSketchArtwork from "../../assets/images/manufacturing/aa5245a7-8178-432b-908d-4a430025142b 1.png";
import cafeSketch from "../../assets/images/contact/b7bac949-a24f-462f-b173-624a713e5509 1.png";

function KitchenSupply() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8EBD7] py-20 lg:py-28">
      {/* Background Illustrated Artwork Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <img
          src={bgSketchArtwork}
          alt=""
          className="h-full w-full object-cover object-center opacity-30 mix-blend-multiply"
        />
        {/* Faint Storefront Line Sketch in Bottom Right */}
        <div className="absolute -bottom-10 right-0 w-[45%] opacity-20 mix-blend-multiply">
          <img src={cafeSketch} alt="" className="w-full object-contain" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Top Header Row: Asymmetrical Split */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Top-Left Heading */}
          <div className="lg:col-span-6">
            <h2 className="font-thunder text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.6rem] uppercase leading-[0.92] tracking-[-0.01em] text-[#2C1810]">
              MADE IN OUR
              <br />
              KITCHEN.
              <br />
              LOVED IN <span className="text-[#A76024]">EVERY</span>
              <br />
              <span className="text-[#A76024]">OUTLET.</span>
            </h2>
          </div>

          {/* Top-Right Explanatory Copy */}
          <div className="lg:col-span-6 lg:pt-3">
            <p className="max-w-[480px] font-mona text-xs sm:text-sm leading-relaxed text-[#2C1810]/80 lg:ml-auto">
              Everything you enjoy at Thatha Tea is produced in-house. We don&apos;t buy finished goods from the market and simply resell them. Our central Mother Kitchen prepares every product and delivers it to every outlet &mdash; keeping taste and quality recognizably consistent from the beginning.
            </p>
          </div>
        </div>

        {/* Middle / Center: 3 Staggered Circular Images & Bottom-Right Punchline */}
        <div className="relative mt-12 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
            {/* 3 Intersecting Staggered Circular Photos */}
            <div className="relative flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:col-span-8 lg:justify-start lg:gap-6 xl:gap-8">
              {/* Circle 1: Central Kitchen Bakery Chefs */}
              <div className="group relative h-44 w-44 sm:h-56 sm:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72 overflow-hidden rounded-full border-4 border-white shadow-2xl transition-transform duration-500 hover:scale-105">
                <img
                  src={centralKitchenPhoto}
                  alt="Thatha Tea Central Kitchen & Manufacturing team"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Circle 2: Elevated Center Storefront Outlet at Night */}
              <div className="group relative -mt-6 sm:-mt-10 lg:-mt-16 h-48 w-48 sm:h-60 sm:w-60 lg:h-72 lg:w-72 xl:h-80 xl:w-80 overflow-hidden rounded-full border-4 border-white shadow-2xl transition-transform duration-500 hover:scale-105 z-10">
                <img
                  src={outletNightPhoto}
                  alt="Thatha Tea illuminated cafe outlet at night"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Circle 3: Lower-Right Signature Steaming Chai */}
              <div className="group relative h-36 w-36 sm:h-44 sm:w-44 lg:h-52 lg:w-52 xl:h-56 xl:w-56 overflow-hidden rounded-full border-4 border-white shadow-2xl transition-transform duration-500 hover:scale-105">
                <img
                  src={signatureTeaPhoto}
                  alt="Signature authentic Thatha Tea cutting chai"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Bottom-Right Typography Block */}
            <div className="flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-left">
              <h3 className="font-thunder text-3xl sm:text-4xl lg:text-[3.2rem] xl:text-[3.8rem] uppercase leading-[0.92] tracking-[-0.01em] text-[#2C1810]">
                MADE FRESH.
                <br />
                MOVED FAST.
                <br />
                SERVED WITH
                <br />
                CARE.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KitchenSupply;
