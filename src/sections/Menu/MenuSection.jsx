import { useMemo, useState } from "react";
import {
  Coffee,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  AlertCircle,
} from "lucide-react";
import sidebarIllustration from "../../assets/images/menu/menu-sidebar.png";
import bakerySketch from "../../assets/images/menu/sketch.png";
import topRightLeaves from "../../assets/images/profile/Pasted 26-11-2026 at 20.24.27.png";
import {
  getEffectivePrice,
  getProductCategoryId,
  hasPopularityData,
} from "../../services/productService";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";

const BEVERAGE_OPTIONS = [
  "Milk Tea",
  "Masala Tea",
  "Special Tea",
  "Herbal Tea",
  "Filter Coffee",
];

function MenuSection({
  products,
  categories,
  loading,
  error,
  onRetry,
  onQuickView,
}) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeBeverage, setActiveBeverage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;
  const showPopularSort = useMemo(
    () => hasPopularityData(products),
    [products]
  );

  const effectiveCategory = useMemo(() => {
    if (loading || activeCategory === "all") return activeCategory;
    const exists = categories.some((c) => String(c.id) === activeCategory);
    return exists ? activeCategory : "all";
  }, [categories, activeCategory, loading]);

  // Filter & Sort
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (effectiveCategory !== "all") {
      result = result.filter(
        (p) => String(getProductCategoryId(p)) === effectiveCategory
      );
    }

    const effectiveQuery = searchQuery.trim().toLowerCase();
    if (effectiveQuery) {
      result = result.filter(
        (p) =>
          String(p.name || "")
            .toLowerCase()
            .includes(effectiveQuery) ||
          String(p.description || "")
            .toLowerCase()
            .includes(effectiveQuery)
      );
    }

    if (sortOption === "price-low") {
      result.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b));
    } else if (sortOption === "price-high") {
      result.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a));
    } else if (sortOption === "name-asc") {
      result.sort((a, b) =>
        String(a.name || "").localeCompare(String(b.name || ""))
      );
    } else if (sortOption === "popular" && showPopularSort) {
      result.sort((a, b) => {
        const popA = Number(a.popularity ?? (a.is_popular ? 1 : 0));
        const popB = Number(b.popularity ?? (b.is_popular ? 1 : 0));
        return popB - popA;
      });
    }

    return result;
  }, [products, effectiveCategory, searchQuery, sortOption, showPopularSort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / itemsPerPage)
  );
  const safePage = Math.min(currentPage, totalPages);
  const paginatedProducts = filteredProducts.slice(
    (safePage - 1) * itemsPerPage,
    safePage * itemsPerPage
  );

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setActiveBeverage("");
    setCurrentPage(1);
  };

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    if (!value) setActiveBeverage("");
    setCurrentPage(1);
  };

  const handleSortChange = (value) => {
    setSortOption(value);
    setCurrentPage(1);
  };

  const handleBeverageClick = (label) => {
    if (activeBeverage === label) {
      setActiveBeverage("");
      setSearchQuery("");
    } else {
      setActiveBeverage(label);
      setActiveCategory("all");
      setSearchQuery(label);
    }
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setActiveCategory("all");
    setActiveBeverage("");
    setSearchQuery("");
    setSortOption("default");
    setCurrentPage(1);
  };

  const handlePageChange = (nextPage) => {
    if (nextPage < 1 || nextPage > totalPages) return;
    setCurrentPage(nextPage);
  };

  return (
    <section
      id="menu-catalog"
      className="relative w-full overflow-hidden bg-[#F4DFC4] pt-12 pb-28 sm:pt-14 lg:pb-32"
    >
      {/* Top-Left & Top-Right Subtle Botanical / Shop Sketch Decorations */}
      <img
        src={topRightLeaves}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 -left-10 z-0 w-56 -scale-x-100 opacity-30 mix-blend-multiply sm:w-72"
      />
      <img
        src={bakerySketch}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-16 z-0 w-80 opacity-20 mix-blend-multiply lg:w-[420px]"
      />
      <img
        src={topRightLeaves}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-8 z-0 w-52 opacity-25 mix-blend-multiply sm:w-72"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 lg:px-16">
        {/* Top Bar: Category Pills + Search + Sort */}
        <ProductFilters
          categories={categories}
          activeCategory={effectiveCategory}
          onCategoryChange={handleCategoryChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          sortOption={sortOption}
          onSortChange={handleSortChange}
          showPopularSort={showPopularSort}
        />

        {/* Mobile / Tablet Compact Beverage Bar */}
        <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-1 lg:hidden no-scrollbar">
          {BEVERAGE_OPTIONS.map((bev) => {
            const isSelected = activeBeverage === bev;
            return (
              <button
                key={bev}
                type="button"
                onClick={() => handleBeverageClick(bev)}
                className={`flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-2 font-mona text-xs font-medium transition-colors ${
                  isSelected
                    ? "bg-[#9C5D28] text-white"
                    : "bg-white/85 text-deep-coffee hover:bg-white"
                }`}
              >
                <Coffee className="h-3.5 w-3.5" />
                <span>{bev}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content: Left Sidebar + 4x2 Product Grid */}
        <div className="flex flex-col items-start gap-7 lg:flex-row">
          {/* Desktop Left Sidebar */}
          <aside className="hidden w-[250px] shrink-0 lg:block xl:w-[270px]">
            <div className="flex flex-col rounded-[28px] bg-white p-5 shadow-[0_8px_28px_rgba(44,24,16,0.05)]">
              <ul className="space-y-1">
                {BEVERAGE_OPTIONS.map((bev) => {
                  const isSelected = activeBeverage === bev;
                  return (
                    <li key={bev}>
                      <button
                        type="button"
                        onClick={() => handleBeverageClick(bev)}
                        className={`flex w-full cursor-pointer items-center gap-3 rounded-xl px-3.5 py-2.5 text-left font-mona text-sm transition-colors ${
                          isSelected
                            ? "bg-[#F4EFE8] font-semibold text-[#9C5D28]"
                            : "font-medium text-deep-coffee hover:bg-[#F9F5F0]"
                        }`}
                      >
                        <Coffee className="h-4 w-4 shrink-0 text-deep-coffee/75" />
                        <span>{bev}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Decorative Cake & Coffee Illustration */}
              <div className="mt-8 flex flex-col items-center px-2">
                <img
                  src={sidebarIllustration}
                  alt="Pastry and cup of coffee illustration"
                  className="h-auto w-44 object-contain"
                />
                <p className="mt-3 text-center font-allura text-3xl leading-tight text-caramel">
                  Every cup has
                  <br />a story
                </p>
              </div>
            </div>
          </aside>

          {/* Right Area: Grid / Skeletons / Error / Empty + Pagination */}
          <div className="w-full min-w-0 flex-1">
            {loading ? (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-5">
                {Array.from({ length: 8 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="h-[270px] animate-pulse rounded-[20px] bg-white/60 sm:h-[290px]"
                  />
                ))}
              </div>
            ) : error ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center rounded-[28px] bg-white/75 px-6 py-12 text-center backdrop-blur-sm">
                <AlertCircle className="mb-3 h-10 w-10 text-caramel" />
                <h3 className="font-mona text-lg font-bold text-deep-coffee">
                  Unable to load menu items
                </h3>
                <p className="mt-1 max-w-md font-mona text-sm text-deep-coffee/70">
                  {error}
                </p>
                <button
                  type="button"
                  onClick={onRetry}
                  className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#9C5D28] px-6 py-2.5 font-mona text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-deep-coffee"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Retry</span>
                </button>
              </div>
            ) : paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-5">
                {paginatedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    variant="grid"
                    onQuickView={onQuickView}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[360px] flex-col items-center justify-center rounded-[28px] bg-white/75 px-6 py-12 text-center backdrop-blur-sm">
                <Coffee className="mb-3 h-10 w-10 text-[#9C5D28]/45" />
                <h3 className="font-mona text-lg font-bold text-deep-coffee">
                  {activeBeverage
                    ? `${activeBeverage} is served fresh at our outlets`
                    : "No bakery products found"}
                </h3>
                <p className="mt-1 max-w-md font-mona text-sm text-deep-coffee/70">
                  {activeBeverage
                    ? "Online ordering currently lists our fresh bakery selection. Clear the filter to browse all bakery treats."
                    : "Try adjusting your search keyword or switching category filters."}
                </p>
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="mt-5 cursor-pointer rounded-full bg-[#9C5D28] px-6 py-2.5 font-mona text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-deep-coffee"
                >
                  Show All Bakery Items
                </button>
              </div>
            )}

            {/* Right-Aligned Circular Pagination Arrows */}
            {!loading && !error && totalPages > 1 && (
              <div className="mt-7 flex items-center justify-end gap-2.5">
                <span className="mr-2 font-mona text-xs font-medium text-deep-coffee/65">
                  Page {safePage} of {totalPages}
                </span>
                <button
                  type="button"
                  onClick={() => handlePageChange(safePage - 1)}
                  disabled={safePage === 1}
                  aria-label="Previous page"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#9C5D28]/25 bg-white text-[#9C5D28] shadow-xs transition-colors hover:bg-[#9C5D28] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-white disabled:hover:text-[#9C5D28]"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handlePageChange(safePage + 1)}
                  disabled={safePage === totalPages}
                  aria-label="Next page"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#9C5D28]/25 bg-white text-[#9C5D28] shadow-xs transition-colors hover:bg-[#9C5D28] hover:text-white disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-white disabled:hover:text-[#9C5D28]"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
