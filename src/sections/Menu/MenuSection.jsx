import { useMemo, useState } from "react";
import {
  Coffee,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  AlertCircle,
  Loader2,
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

  // Local cart state for the UI toggle (Replace with your actual Context in production)
  const [cartQuantities, setCartQuantities] = useState({});

  const itemsPerPage = 8;
  const showPopularSort = useMemo(() => hasPopularityData(products), [products]);

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
          String(p.name || "").toLowerCase().includes(effectiveQuery) ||
          String(p.description || "").toLowerCase().includes(effectiveQuery)
      );
    }

    if (sortOption === "price-low") {
      result.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b));
    } else if (sortOption === "price-high") {
      result.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a));
    } else if (sortOption === "name-asc") {
      result.sort((a, b) => String(a.name || "").localeCompare(String(b.name || "")));
    } else if (sortOption === "popular" && showPopularSort) {
      result.sort((a, b) => {
        const popA = Number(a.popularity ?? (a.is_popular ? 1 : 0));
        const popB = Number(b.popularity ?? (b.is_popular ? 1 : 0));
        return popB - popA;
      });
    }

    return result;
  }, [products, effectiveCategory, searchQuery, sortOption, showPopularSort]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedProducts = filteredProducts.slice(
    (safePage - 1) * itemsPerPage,
    safePage * itemsPerPage
  );

  // Cart Handlers
  const handleAdd = (id) => {
    setCartQuantities((prev) => ({ ...prev, [id]: 1 }));
  };
  const handleIncrement = (id) => {
    setCartQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };
  const handleDecrement = (id) => {
    setCartQuantities((prev) => {
      const newQty = (prev[id] || 0) - 1;
      if (newQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  // Filter Handlers
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
    // MODIFIED: Fixed height 100svh with flex-col
    <section
      id="menu-catalog"
      className="relative flex h-[100svh] w-full flex-col overflow-hidden bg-[#F4DFC4] pt-24 pb-6 lg:pt-28"
    >
      {/* Background Decorations */}
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

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1340px] flex-col px-6 lg:px-10">
        
        {/* Top Bar */}
        <div className="shrink-0">
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

          {/* Mobile/Tablet Beverage Bar */}
          <div className="mb-4 flex items-center gap-2 overflow-x-auto pb-1 lg:hidden no-scrollbar shrink-0">
            {BEVERAGE_OPTIONS.map((bev) => {
              const isSelected = activeBeverage === bev;
              return (
                <button
                  key={bev}
                  type="button"
                  onClick={() => handleBeverageClick(bev)}
                  className={`flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-2 font-mona text-xs font-medium transition-colors ${
                    isSelected ? "bg-[#9C5D28] text-white" : "bg-white/85 text-deep-coffee hover:bg-white"
                  }`}
                >
                  <Coffee className="h-3.5 w-3.5" />
                  <span>{bev}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-1 gap-6 overflow-hidden lg:flex-row lg:items-stretch">
          
          {/* Sidebar (Desktop) */}
          <aside className="hidden w-[240px] shrink-0 lg:flex xl:w-[258px]">
            <div className="flex h-full w-full flex-col justify-between overflow-y-auto rounded-[26px] bg-white p-5 shadow-[0_8px_28px_rgba(44,24,16,0.05)] scrollbar-hide">
              <ul className="space-y-1.5">
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

              <div className="mt-6 flex flex-col items-center px-2 pb-2">
                <img
                  src={sidebarIllustration}
                  alt="Pastry and cup of coffee illustration"
                  className="h-auto w-48 object-contain"
                />
                <p className="mt-4 text-center font-allura text-[32px] leading-tight text-caramel">
                  Every cup has
                  <br />a story
                </p>
              </div>
            </div>
          </aside>

          {/* Right Area: Grid + Pagination */}
          <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
            
            {/* Scrollable Grid Area */}
            <div className="flex-1 overflow-y-auto pr-2 pb-4 scrollbar-hide">
              {loading ? (
                <div className="flex h-full items-center justify-center">
                   <Loader2 className="h-10 w-10 animate-spin text-[#9C5D28]" />
                </div>
              ) : error ? (
                <div className="flex min-h-[360px] flex-col items-center justify-center rounded-[28px] bg-white/75 px-6 py-12 text-center backdrop-blur-sm">
                  <AlertCircle className="mb-3 h-10 w-10 text-caramel" />
                  <h3 className="font-mona text-lg font-bold text-deep-coffee">Unable to load menu items</h3>
                  <p className="mt-1 max-w-md font-mona text-sm text-deep-coffee/70">{error}</p>
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
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 lg:gap-5">
                  {paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      variant="grid"
                      onQuickView={onQuickView}
                      qty={cartQuantities[product.id] || 0}
                      onAdd={handleAdd}
                      onIncrement={handleIncrement}
                      onDecrement={handleDecrement}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex min-h-[360px] flex-col items-center justify-center rounded-[28px] bg-white/75 px-6 py-12 text-center backdrop-blur-sm">
                  <Coffee className="mb-3 h-10 w-10 text-[#9C5D28]/45" />
                  <h3 className="font-mona text-lg font-bold text-deep-coffee">
                    {activeBeverage ? `${activeBeverage} is served fresh at our outlets` : "No bakery products found"}
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
            </div>

            {/* Pagination - Anchored to bottom right */}
            {!loading && !error && totalPages > 1 && (
              <div className="mt-2 flex shrink-0 items-center justify-end gap-2.5 px-2">
                <button
                  type="button"
                  onClick={() => handlePageChange(safePage - 1)}
                  disabled={safePage === 1}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#9C5D28]/25 bg-white text-[#9C5D28] shadow-sm transition-colors hover:bg-[#9C5D28] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handlePageChange(safePage + 1)}
                  disabled={safePage === totalPages}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#9C5D28]/25 bg-white text-[#9C5D28] shadow-sm transition-colors hover:bg-[#9C5D28] hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
            
          </div>
        </div>
      </div>
      
      {/* Utility to hide scrollbar */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}

export default MenuSection;