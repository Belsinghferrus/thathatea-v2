import { useEffect, useState } from "react";
import { X, Wheat, Egg, UtensilsCrossed } from "lucide-react";
import {
  getFallbackProductImage,
  getProductImageUrl,
  formatPrice,
  getEffectivePrice,
} from "../../services/productService";

function buildKeyInformation(product) {
  const bullets = [];
  if (product.description) {
    const sentences = product.description
      .split(/(?<=[.!?])\s+|—/)
      .map((s) => s.trim())
      .filter((s) => s.length > 8);
    sentences.slice(0, 3).forEach((s) => bullets.push(s));
  }
  if (product.weight && Number(product.weight) > 0) {
    bullets.push(`Net quantity: ${product.weight} ${product.unit || ""}`.trim());
  }
  if (typeof product.gst === "number" && product.gst >= 0) {
    bullets.push(`Applicable GST: ${product.gst}%`);
  }
  if (bullets.length === 0) {
    bullets.push("Prepared fresh for Thatha Tea outlets.");
  }
  return bullets.slice(0, 4);
}

function FoodTypeBadge({ dietary }) {
  const isNonVeg = String(dietary || "").toLowerCase().includes("non");
  return (
    <div
      className={`flex h-9 w-9 shrink-0 flex-col items-center justify-center rounded-md border-2 bg-white ${
        isNonVeg ? "border-[#B91C1C]" : "border-[#15803D]"
      }`}
    >
      <span
        className={`h-3.5 w-3.5 rounded-full ${
          isNonVeg ? "bg-[#B91C1C]" : "bg-[#15803D]"
        }`}
      />
      <span
        className={`mt-0.5 font-mona text-[7px] font-bold uppercase leading-none ${
          isNonVeg ? "text-[#B91C1C]" : "text-[#15803D]"
        }`}
      >
        {isNonVeg ? "NON" : "VEG"}
      </span>
    </div>
  );
}

function ProductQuickViewModal({ product, triggerRef, onClose }) {
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    if (!product) return undefined;

    const triggerEl = triggerRef?.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      if (triggerEl && typeof triggerEl.focus === "function") {
        triggerEl.focus();
      }
    };
  }, [product, onClose, triggerRef]);

  if (!product) return null;

  const apiImageUrl = getProductImageUrl(product);
  const fallbackImage = getFallbackProductImage(product.category_name);
  const displayImage = !imgFailed && apiImageUrl ? apiImageUrl : fallbackImage;

  const isNonVeg = String(product.dietary || "").toLowerCase().includes("non");
  const foodTypeLabel = product.dietary
    ? isNonVeg
      ? "Non-Vegetarian"
      : "Vegetarian"
    : "Not specified";

  // Display verified metadata only; never infer allergen/egg from dietary label
  const glutenValue =
    product.maida || product.gluten || product.gluten_info || "Not specified";
  const eggValue =
    product.egg || product.egg_info || "Not specified";

  const keyBullets = buildKeyInformation(product);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-[2px] animate-modal-fade"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-[680px] overflow-y-auto rounded-[28px] bg-[#FBF0E0] p-6 shadow-2xl sm:p-8 animate-modal-scale"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-5 right-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-deep-coffee/10 text-deep-coffee transition-colors hover:bg-deep-coffee/20 focus:outline-2 focus:outline-offset-2 focus:outline-caramel"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Product Introduction */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="h-36 w-36 shrink-0 overflow-hidden rounded-2xl bg-[#EEDCC5] shadow-sm sm:h-40 sm:w-40">
            <img
              src={displayImage}
              alt={product.name}
              onError={() => setImgFailed(true)}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex-1 pr-6">
            <h2
              id="quick-view-title"
              className="font-mona text-2xl font-bold leading-tight text-deep-coffee sm:text-[28px]"
            >
              {product.name}
            </h2>
            <p className="mt-2 font-mona text-sm leading-relaxed text-[#A76024] sm:text-[15px]">
              {product.description || "Freshly prepared at Thatha Tea."}
            </p>
            <p className="mt-3 font-mona text-base font-bold text-deep-coffee">
              {formatPrice(getEffectivePrice(product))}
            </p>
          </div>
        </div>

        {/* 2x2 Product Information Cards */}
        <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {/* 1. Product Category */}
          <div className="flex items-center gap-3.5 rounded-2xl bg-white px-4 py-3.5 shadow-[0_3px_12px_rgba(44,24,16,0.05)]">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FBF0E0] text-caramel">
              <UtensilsCrossed className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="font-mona text-xs font-medium text-[#D9822B]">
                Product Category
              </p>
              <p className="truncate font-mona text-base font-bold text-deep-coffee">
                {product.category_name || "Bakery"}
              </p>
            </div>
          </div>

          {/* 2. Food Type */}
          <div className="flex items-center gap-3.5 rounded-2xl bg-white px-4 py-3.5 shadow-[0_3px_12px_rgba(44,24,16,0.05)]">
            <FoodTypeBadge dietary={product.dietary} />
            <div className="min-w-0">
              <p className="font-mona text-xs font-medium text-[#D9822B]">
                Food Type
              </p>
              <p className="truncate font-mona text-base font-bold text-deep-coffee">
                {foodTypeLabel}
              </p>
            </div>
          </div>

          {/* 3. Maida / Gluten */}
          <div className="flex items-center gap-3.5 rounded-2xl bg-white px-4 py-3.5 shadow-[0_3px_12px_rgba(44,24,16,0.05)]">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FBF0E0] text-caramel">
              <Wheat className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="font-mona text-xs font-medium text-[#D9822B]">
                Maida / Gluten
              </p>
              <p className="truncate font-mona text-base font-bold text-deep-coffee">
                {glutenValue}
              </p>
            </div>
          </div>

          {/* 4. Egg */}
          <div className="flex items-center gap-3.5 rounded-2xl bg-white px-4 py-3.5 shadow-[0_3px_12px_rgba(44,24,16,0.05)]">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FBF0E0] text-caramel">
              <Egg className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="font-mona text-xs font-medium text-[#D9822B]">
                Egg
              </p>
              <p className="truncate font-mona text-base font-bold text-deep-coffee">
                {eggValue}
              </p>
            </div>
          </div>
        </div>

        {/* Key Information Section */}
        <div className="mt-6">
          <div className="rounded-xl bg-[#E8BA88] px-4 py-2.5">
            <h3 className="font-mona text-sm font-semibold text-deep-coffee sm:text-base">
              Key Information
            </h3>
          </div>

          <ul className="mt-3.5 space-y-2 pl-5 font-mona text-sm text-deep-coffee list-disc">
            {keyBullets.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes modal-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modal-scale {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-fade {
          animation: modal-fade 180ms ease-out forwards;
        }
        .animate-modal-scale {
          animation: modal-scale 200ms ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default ProductQuickViewModal;
