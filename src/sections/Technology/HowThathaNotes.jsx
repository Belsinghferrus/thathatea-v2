import easyOrderingImg from "../../assets/images/tech/image 2308.png";
import inventoryImg from "../../assets/images/tech/inventory-CNX20Qxh 1.png";
import salesImg from "../../assets/images/tech/sales-CYmXBs38 1.png";
import menuImg from "../../assets/images/tech/menu-D1wIKzbv 1.png";
import outletPerfImg from "../../assets/images/tech/notesMap-BklYcAA- 1.png";
import supportImg from "../../assets/images/tech/b87d1a4c-4a24-4ffc-b0d1-1fc7294ef242 1.png";
import kettleSketch from "../../assets/images/tech/ea0a6013-0723-4c7f-8418-bcc514cabed1 8.png";
import rightBgArtwork from "../../assets/images/tech/ad060866-2c5c-4a55-a859-8a525e1e426e 3.png";

const FEATURE_CARDS = [
  {
    titleLine1: "EASY",
    titleLine2: "ORDERING",
    description:
      "Take orders quickly at counter or table with a simple, fast, and intuitive interface.",
    image: easyOrderingImg,
  },
  {
    titleLine1: "INVENTORY",
    titleLine2: "MANAGEMENT",
    description:
      "Track stock levels in real time and get low-stock alerts before you run out.",
    image: inventoryImg,
  },
  {
    titleLine1: "SALES",
    titleLine2: "ANALYTICS",
    description:
      "Understand your sales trends, top items, and outlet performance easily.",
    image: salesImg,
  },
  {
    titleLine1: "MENU",
    titleLine2: "MANAGEMENT",
    description:
      "Update items, prices, and availability across all your outlets.",
    image: menuImg,
  },
  {
    titleLine1: "OUTLET",
    titleLine2: "PERFORMANCE",
    description:
      "Compare outlets, monitor sales, and keep every store aligned and on track.",
    image: outletPerfImg,
  },
  {
    titleLine1: "SUPPORT &",
    titleLine2: "GUIDANCE",
    description:
      "Our team guides you with insights and best practices to help your business grow.",
    image: supportImg,
  },
];

const BOTTOM_STRIP = [
  "BUILT FOR SPEED",
  "EASY TO LEARN",
  "MADE FOR OUR BRAND",
  "READY FOR GROWTH",
];

function HowThathaNotes() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8EBD7] pt-16 pb-0 sm:pt-20">
      {/* Full-Section Background Artwork (Warm Waves, Storefront & Tea Glass) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 bottom-12 z-0">
        <img
          src={rightBgArtwork}
          alt=""
          className="h-full w-full object-cover object-bottom"
        />
      </div>

      {/* Top-Left Faint Kettle Sketch */}
      <div className="pointer-events-none absolute top-4 left-4 z-0 w-24 opacity-25 mix-blend-multiply sm:left-8 sm:w-32">
        <img src={kettleSketch} alt="" className="h-auto w-full object-contain" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-400 px-6 pb-16 sm:pb-20 lg:px-16">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="font-thunder text-3xl uppercase leading-[0.95] tracking-[-0.01em] text-deep-coffee sm:text-4xl lg:text-[3rem]">
            HOW THATHA NOTES HELPS YOU
          </h2>
        </div>

        {/* 3x2 Feature Cards Grid */}
        <div className="mx-auto mt-10 grid max-w-290 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {FEATURE_CARDS.map((card) => (
            <div
              key={`${card.titleLine1}-${card.titleLine2}`}
              className="flex items-center justify-between gap-4 rounded-2xl border border-deep-coffee/5 bg-white/95 p-5 shadow-md transition-transform duration-300 hover:-translate-y-1 sm:p-6"
            >
              <div className="flex-1 text-left">
                <h3 className="font-mona text-sm font-bold uppercase leading-tight text-deep-coffee sm:text-base">
                  {card.titleLine1}
                  <br />
                  {card.titleLine2}
                </h3>
                <p className="mt-2 font-mona text-[11px] leading-relaxed text-deep-coffee/70 sm:text-xs">
                  {card.description}
                </p>
              </div>

              <div className="h-24 w-24 shrink-0 sm:h-28 sm:w-28">
                <img
                  src={card.image}
                  alt={`${card.titleLine1} ${card.titleLine2}`}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Caramel Strip */}
      <div className="relative z-10 w-full bg-caramel py-4">
        <div className="mx-auto flex w-full max-w-400 flex-wrap items-center justify-center gap-y-2 px-6 lg:px-16">
          {BOTTOM_STRIP.map((item, idx) => (
            <div
              key={item}
              className={`px-5 font-mona text-[10px] font-semibold uppercase tracking-widest text-soft-ivory sm:px-8 sm:text-xs ${
                idx !== 0 ? "sm:border-l sm:border-soft-ivory/30" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowThathaNotes;
