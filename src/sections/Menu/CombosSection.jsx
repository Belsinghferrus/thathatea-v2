import { useState } from "react";
import mascotImg from "../../assets/images/menu/combo-mascot.png";
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

function ComboCard({ product }) {
  const { addToCart } = useShop();
  const [imgFailed, setImgFailed] = useState(false);

  const apiImageUrl = getProductImageUrl(product);
  const fallbackImage = getFallbackProductImage(product.category_name);
  const displayImage = !imgFailed && apiImageUrl ? apiImageUrl : fallbackImage;

  const sellingPrice = getEffectivePrice(product);
  const originalPrice = getOriginalPrice(product);
  const hasDiscount = productHasDiscount(product);
  const available = isProductAvailable(product);
  const savingsAmount = hasDiscount ? originalPrice - sellingPrice : 0;

  return (
    <div
      onClick={() => {
        if (available) {
          addToCart({
            id: product.id,
            name: product.name,
            price: sellingPrice,
            image: displayImage,
            inStock: available,
            min: product.min,
            max: product.max,
          });
        }
      }}
      className="flex cursor-pointer items-center gap-3.5 rounded-2xl bg-[#FBF4E8] p-3.5 shadow-md transition-transform duration-200 hover:-translate-y-0.5"
    >
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#EEDCC5]">
        <img
          src={displayImage}
          alt={product.name}
          onError={() => setImgFailed(true)}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        {hasDiscount && savingsAmount > 0 && (
          <span className="mb-1 inline-block rounded-full bg-caramel px-2 py-0.5 font-mona text-[10px] font-bold text-white">
            Save {formatPrice(savingsAmount)}
          </span>
        )}
        <h3 className="line-clamp-2 font-mona text-xs font-bold leading-snug text-deep-coffee sm:text-sm">
          {product.name}
        </h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="font-mona text-sm font-bold text-deep-coffee">
            {formatPrice(sellingPrice)}
          </span>
          {hasDiscount && (
            <span className="font-mona text-[11px] text-caramel line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function CombosSection({ products }) {
  // Prefer products that have an actual verified discount in the API; otherwise show first 3 verified products
  const featuredOffers = (() => {
    if (!Array.isArray(products) || products.length === 0) return [];
    const discounted = products.filter((p) => productHasDiscount(p));
    return (discounted.length >= 3 ? discounted : products).slice(0, 3);
  })();

  if (featuredOffers.length === 0) return null;

  return (
    <section className="relative w-full bg-[#3A1E0E] pt-10 pb-12 lg:flex lg:min-h-71.25 lg:items-center lg:py-0">
      <div className="relative mx-auto flex w-full max-w-360 flex-col items-center gap-6 px-6 lg:block lg:px-16">
        {/* Overlapping Thatha Tea Mascot on Left (Flush to Bottom, Head Overlapping Top) */}
        <div className="relative -mt-20 w-60 shrink-0 sm:w-72 lg:absolute lg:bottom-0 lg:left-12 lg:mt-0 lg:w-86.25 xl:left-16 xl:w-93.75">
          <img
            src={mascotImg}
            alt="Thatha Tea Mascot"
            className="h-auto w-full object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)]"
          />
        </div>

        {/* Right Content: Heading + 3 Horizontal Cream Cards */}
        <div className="w-full lg:py-14 lg:pl-90 xl:pl-98.75">
          <h2 className="text-center font-thunder text-3xl uppercase tracking-wide text-white sm:text-4xl lg:text-left lg:text-[2.75rem]">
            COMBOS &amp; SPECIAL OFFERS
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {featuredOffers.map((product) => (
              <ComboCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CombosSection;
