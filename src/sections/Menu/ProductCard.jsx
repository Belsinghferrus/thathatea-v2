import { useState } from "react";
import { Eye, Sparkles } from "lucide-react";
import { useShop } from "../../context/ShopContext";
import {
  formatPrice,
  getEffectivePrice,
  getFallbackProductImage,
  getOriginalPrice,
  getProductImageUrl,
  isProductAvailable,
  productHasDiscount,
} from "../../services/productService";

function ProductCard({ product, variant = "grid", onQuickView }) {
  const { addToCart } = useShop();
  const [imgFailed, setImgFailed] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const apiImageUrl = getProductImageUrl(product);
  const fallbackImage = getFallbackProductImage(product.category_name);
  const displayImage = !imgFailed && apiImageUrl ? apiImageUrl : fallbackImage;

  const sellingPrice = getEffectivePrice(product);
  const originalPrice = getOriginalPrice(product);
  const hasDiscount = productHasDiscount(product);
  const available = isProductAvailable(product);
  const isVerifiedPopular =
    product?.is_popular === true || product?.is_bestseller === true;

  const handleAdd = (e) => {
    e.stopPropagation();
    if (!available) return;
    addToCart({
      id: product.id,
      name: product.name,
      price: sellingPrice,
      image: displayImage,
      inStock: available,
      min: product.min,
      max: product.max,
    });
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1100);
  };

  const handleOpenQuickView = (e) => {
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product, e.currentTarget);
    }
  };

  const eyeButton = (
    <button
      type="button"
      onClick={handleOpenQuickView}
      aria-label={`Quick view ${product.name}`}
      className="absolute top-3 right-3 z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-opacity duration-200 hover:bg-black/65 focus:opacity-100 focus:outline-2 focus:outline-offset-2 focus:outline-white opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
    >
      <Eye className="h-4 w-4" />
    </button>
  );

  if (variant === "bestseller") {
    return (
      <article className="group relative flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_6px_22px_rgba(44,24,16,0.06)] transition-shadow duration-200 hover:shadow-[0_12px_28px_rgba(44,24,16,0.11)]">
        {/* Upper Product Image */}
        <div className="relative h-40 w-full shrink-0 overflow-hidden bg-[#F4EADD]">
          <img
            src={displayImage}
            alt={product.name}
            onError={() => setImgFailed(true)}
            loading="lazy"
            className="h-full w-full object-cover"
          />

          {isVerifiedPopular && (
            <span className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-0.5 font-mona text-[10px] font-bold uppercase tracking-wider text-caramel shadow-xs">
              <Sparkles className="h-2.5 w-2.5" />
              Popular
            </span>
          )}

          {eyeButton}
        </div>

        {/* Lower White Product Info */}
        <div className="flex flex-1 flex-col p-4">
          <h3 className="line-clamp-1 font-mona text-sm font-bold text-deep-coffee sm:text-[15px]">
            {product.name}
          </h3>
          <p className="mt-1 line-clamp-2 min-h-[2.4em] font-mona text-xs leading-snug text-deep-coffee/65">
            {product.description || "Freshly prepared at Thatha Tea."}
          </p>

          <div className="mt-auto flex items-end justify-between gap-2 pt-3">
            <div className="flex flex-col">
              <span className="font-mona text-base font-bold text-deep-coffee">
                {formatPrice(sellingPrice)}
              </span>
              {hasDiscount && (
                <span className="font-mona text-[11px] font-medium text-caramel line-through">
                  {formatPrice(originalPrice)}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={handleAdd}
              disabled={!available}
              className={`cursor-pointer rounded-lg px-3.5 py-1.5 font-mona text-[11px] font-bold uppercase tracking-wide transition-colors ${
                !available
                  ? "cursor-not-allowed bg-neutral-200 text-neutral-400"
                  : justAdded
                    ? "bg-deep-coffee text-white"
                    : "bg-[#F3EFEA] text-deep-coffee hover:bg-caramel hover:text-white"
              }`}
            >
              {!available ? "Out" : justAdded ? "Added" : "Add"}
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex h-[270px] w-full flex-col justify-end overflow-hidden rounded-[20px] bg-[#2C1810] shadow-[0_8px_24px_rgba(44,24,16,0.12)] transition-shadow duration-200 hover:shadow-[0_14px_32px_rgba(44,24,16,0.18)] sm:h-[290px]">
      {/* Full-Background Product Image */}
      <img
        src={displayImage}
        alt={product.name}
        onError={() => setImgFailed(true)}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Bottom Gradient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#180B05]/95 via-[#180B05]/50 to-transparent"
      />

      {/* Quick-View Eye Icon */}
      {eyeButton}

      {/* Bottom Product Info & Action */}
      <div className="relative z-10 flex flex-col p-4">
        <h3 className="line-clamp-1 font-mona text-sm font-bold text-white sm:text-base">
          {product.name}
        </h3>
        <p className="mt-0.5 line-clamp-2 min-h-[2.4em] font-mona text-[11px] leading-snug text-white/80 sm:text-xs">
          {product.description || "Freshly baked at Thatha Tea."}
        </p>

        <div className="mt-3 flex items-end justify-between gap-2">
          <div className="flex flex-col leading-tight">
            <span className="font-mona text-base font-bold text-white sm:text-lg">
              {formatPrice(sellingPrice)}
            </span>
            {hasDiscount && (
              <span className="font-mona text-[11px] font-medium text-[#E8BA88] line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAdd}
            disabled={!available}
            className={`cursor-pointer rounded-lg px-4 py-1.5 font-mona text-[11px] font-bold uppercase tracking-wider text-white transition-colors ${
              !available
                ? "cursor-not-allowed bg-white/20 text-white/60"
                : justAdded
                  ? "bg-deep-coffee"
                  : "bg-[#A76024] hover:bg-[#8E4F1B]"
            }`}
          >
            {!available ? "Out" : justAdded ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
