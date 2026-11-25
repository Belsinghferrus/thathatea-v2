import facilityKitchenImg from "../../assets/images/manufacturing/image 2337.png";
import outletNightImg from "../../assets/images/outlet/Indra-nager.png";
import brandedChaiImg from "../../assets/images/home/tea.png";
import kitchenBgSketch from "../../assets/images/manufacturing/aa5245a7-8178-432b-908d-4a430025142b 1.png";

function KitchenSupply() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8EBD7] pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
      {/* Background Illustrated Artwork Layer (Tea Cup Bottom-Left + Cafe Sketch Bottom-Right) */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden">
        <img
          src={kitchenBgSketch}
          alt=""
          className="h-full w-full object-cover object-bottom opacity-80 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-400 px-6 lg:px-16">
        {/* Top Row: Left 4-Line Heading + Right Explanatory Paragraph */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <h2 className="font-thunder text-4xl uppercase leading-[0.92] tracking-[-0.01em] text-deep-coffee sm:text-5xl lg:text-[3.8rem] xl:text-[4.25rem]">
              MADE IN OUR
              <br />
              KITCHEN.
              <br />
              LOVED IN <span className="text-caramel">EVERY</span>
              <br />
              <span className="text-caramel">OUTLET.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-2">
            <p className="max-w-97.5 font-mona text-xs leading-relaxed text-deep-coffee/80 sm:text-[13px] lg:ml-auto">
              Everything you enjoy at Thatha Tea is produced in-house. We
              don&apos;t buy finished goods from the market and simply resell
              them. Our central Mother Kitchen prepares every product and
              delivers it to every outlet &mdash; keeping taste and quality
              recognizably consistent from the beginning.
            </p>
          </div>
        </div>

        {/* Staggered 3 Circular Photos + Bottom-Right Punchline */}
        <div className="relative mt-10 lg:mt-6 lg:min-h-105">
          {/* Mobile / Tablet Responsive Grid, Desktop Exact Staggered Composition */}
          <div className="flex flex-wrap items-center justify-center gap-6 lg:block">
            {/* Circle 1: Bottom-Left Manufacturing Facility */}
            <div className="h-52 w-52 overflow-hidden rounded-full sm:h-60 sm:w-60 lg:absolute lg:bottom-4 lg:left-[8%] lg:h-62.5 lg:w-62.5">
              <img
                src={facilityKitchenImg}
                alt="Thatha Tea central manufacturing kitchen facility"
                className="h-full w-full scale-125 object-cover object-[78%_45%]"
              />
            </div>

            {/* Circle 2: Elevated Center Thatha Tea Night Outlet */}
            <div className="h-48 w-48 overflow-hidden rounded-full sm:h-52 sm:w-52 lg:absolute lg:top-0 lg:left-[38%] lg:h-[225px] lg:w-[225px]">
              <img
                src={outletNightImg}
                alt="Thatha Tea illuminated cafe outlet at night"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Circle 3: Lower-Right Branded Thatha Tea Glass */}
            <div className="h-36 w-36 overflow-hidden rounded-full bg-[#D8C5A8] sm:h-40 sm:w-40 lg:absolute lg:bottom-0 lg:left-[56%] lg:h-[175px] lg:w-[175px]">
              <img
                src={brandedChaiImg}
                alt="Branded Thatha Tea cutting chai glass"
                className="h-full w-full scale-[1.55] object-cover object-[68%_55%]"
              />
            </div>

            {/* Bottom-Right Punchline Typography Block */}
            <div className="w-full text-center lg:absolute lg:right-0 lg:bottom-6 lg:w-auto lg:text-left">
              <h3 className="font-thunder text-3xl uppercase leading-[0.92] tracking-[-0.01em] text-deep-coffee sm:text-4xl lg:text-[2.75rem]">
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
