import ProductCard from "./ProductCard";
import ProductCarousel from "./ProductCarousel";

function BestSellingSection({ products, loading, onQuickView }) {
  // Use verified popular/bestseller products if flagged by API; otherwise show curated first 8 bakery items without fake Popular badges
  const featuredProducts = (() => {
    if (!Array.isArray(products) || products.length === 0) return [];
    const flagged = products.filter(
      (p) => p?.is_popular === true || p?.is_bestseller === true
    );
    return (flagged.length > 0 ? flagged : products).slice(0, 8);
  })();

  if (!loading && featuredProducts.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#FBF4E8] py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-16">
        {/* Left-Side Heading */}
        <div className="w-full shrink-0 lg:w-[220px]">
          <p className="font-allura text-3xl leading-none text-caramel sm:text-4xl">
            Our favourite
          </p>
          <h2 className="mt-1 font-thunder text-[2.75rem] uppercase leading-[0.88] tracking-tight text-deep-coffee sm:text-5xl">
            BEST SELLING
            <br />
            ITEMS
          </h2>
          <p className="mt-3 font-mona text-xs leading-relaxed text-deep-coffee/70 sm:text-sm">
            The most loved treats by our Customer
          </p>
        </div>

        {/* Right-Side 4-Card Carousel */}
        <div className="min-w-0 flex-1">
          <ProductCarousel
            items={featuredProducts}
            loading={loading}
            renderItem={(product) => (
              <ProductCard
                key={product.id}
                product={product}
                variant="bestseller"
                onQuickView={onQuickView}
              />
            )}
          />
        </div>
      </div>
    </section>
  );
}

export default BestSellingSection;
