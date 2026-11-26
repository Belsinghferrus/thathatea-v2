import React, { useState, useEffect, useMemo } from "react";
import {
  Coffee,
  Search,
  ChevronDown,
  Eye,
  ArrowLeft,
  ArrowRight,
  Cookie,
  CakeSlice,
  Croissant,
  Utensils,
  Loader2,
} from "lucide-react";

// --- API ENDPOINTS ---
const API_PRODUCTS = "https://note-api.thathatea.com/api/app/product/list";
const API_CATEGORIES = "https://note-api.thathatea.com/api/app/category/list";
const IMAGE_BASE_URL = "https://note-api.thathatea.com/images/menu/";

// --- ICON MAP ---
const CATEGORY_ICON_MAP = {
  Others: Utensils,
  Cookies: Cookie,
  Muffin: CakeSlice,
  Bun: Croissant,
  Cakes: CakeSlice,
  "Tea & Coffee Raw Materials": Coffee,
};
const DEFAULT_ICON = Coffee;

const getCategoryIcon = (name) => CATEGORY_ICON_MAP[name] || DEFAULT_ICON;

// --- HELPERS ---
const getProductCategoryId = (product) =>
  product.categorylink ?? product.category_id ?? product.categoryId;

const getProductImageUrl = (product) => {
  const first = Array.isArray(product.image_names) && product.image_names[0];
  return first ? `${IMAGE_BASE_URL}${first}` : null;
};

const getEffectivePrice = (product) => {
  const selling = parseFloat(product.selling_price);
  const base = parseFloat(product.price);
  return selling > 0 ? selling : base;
};

const productHasDiscount = (product) => {
  const selling = parseFloat(product.selling_price);
  const base = parseFloat(product.price);
  return selling > 0 && selling < base;
};

const formatPrice = (price) => {
  const num = Number(price);
  if (!Number.isFinite(num)) return "—";
  return num % 1 === 0 ? `₹${num}` : `₹${num.toFixed(2)}`;
};

const extractList = (json) => {
  if (Array.isArray(json)) return json;
  if (Array.isArray(json?.data)) return json.data;
  return null;
};

export default function MenuSection() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // --- FETCH DATA ---
  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      const [prodSettled, catSettled] = await Promise.allSettled([
        fetch(API_PRODUCTS).then((r) => r.json()),
        fetch(API_CATEGORIES).then((r) => r.json()),
      ]);

      if (cancelled) return;

      if (prodSettled.status === "fulfilled") {
        const list = extractList(prodSettled.value);
        setProducts(list || []);
      }

      if (catSettled.status === "fulfilled") {
        const list = extractList(catSettled.value);
        if (list) {
          setCategories(
            list.map((c) => ({ ...c, icon: getCategoryIcon(c.name) }))
          );
        }
      }

      setLoading(false);
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, []);

  // Reset active category if missing
  useEffect(() => {
    if (loading || activeCategory === "all") return;
    const exists = categories.some((c) => String(c.id) === activeCategory);
    if (!exists) setActiveCategory("all");
  }, [categories, activeCategory, loading]);

  // --- FILTER & SORT ---
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "all") {
      result = result.filter(
        (p) => String(getProductCategoryId(p)) === activeCategory
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      result = result.filter(
        (p) =>
          (p.name || "").toLowerCase().includes(q) ||
          (p.description || "").toLowerCase().includes(q)
      );
    }

    if (sortOption === "price-low") {
      result.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b));
    } else if (sortOption === "price-high") {
      result.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a));
    } else if (sortOption === "newest") {
      result.sort((a, b) => {
        const ta = a.created_at ? new Date(a.created_at).getTime() : 0;
        const tb = b.created_at ? new Date(b.created_at).getTime() : 0;
        return tb - ta || (b.id || 0) - (a.id || 0);
      });
    }

    return result;
  }, [products, activeCategory, searchQuery, sortOption]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, sortOption]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F4EADD]">
        <Loader2 className="h-10 w-10 animate-spin text-[#A76024]" />
      </div>
    );
  }

  return (
    <section className="min-h-screen w-full bg-[#F4EADD] pb-24 pt-8 font-mona relative overflow-hidden">
      {/* Optional: Background texture (you can replace with an actual image if you have one) */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #A76024 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 md:px-6">
        {/* =========================================
            TOP BAR (Category Pills, Search, Sort)
        ========================================= */}
        <div className="mb-8 flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          
          {/* Category Tabs Container */}
          <div className="flex items-center gap-1.5 overflow-x-auto rounded-full bg-white/60 p-1.5 backdrop-blur-md shadow-sm no-scrollbar">
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-[#9C5D28] text-white shadow-md"
                  : "text-[#5C4033] hover:bg-white/80"
              }`}
            >
              <Coffee className="h-3.5 w-3.5" />
              All
            </button>
            {categories.map((cat) => {
              const Icon = cat.icon;
              const idStr = String(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(idStr)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === idStr
                      ? "bg-[#9C5D28] text-white shadow-md"
                      : "text-[#5C4033] hover:bg-white/80"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search & Sort */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C5D28]/60" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-white/80 py-3 pl-12 pr-4 text-sm text-[#3E2723] outline-none placeholder:text-[#5C4033]/50 focus:ring-2 focus:ring-[#9C5D28]/30 shadow-sm backdrop-blur-sm transition-all"
              />
            </div>

            {/* Sort */}
            <div className="relative w-full sm:w-auto">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full appearance-none rounded-full bg-white/80 py-3 pl-5 pr-12 text-sm font-medium text-[#5C4033] outline-none focus:ring-2 focus:ring-[#9C5D28]/30 shadow-sm backdrop-blur-sm cursor-pointer"
              >
                <option value="popular">Sort By : Popular</option>
                <option value="newest">Sort By : Newest</option>
                <option value="price-low">Price : Low to High</option>
                <option value="price-high">Price : High to Low</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C5D28]" />
            </div>
          </div>
        </div>

        {/* =========================================
            MAIN CONTENT (Sidebar + Grid)
        ========================================= */}
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          
          {/* Sidebar */}
          <aside className="hidden w-[280px] shrink-0 lg:block sticky top-8">
            <div className="rounded-[32px] bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-mona transition-colors ${
                      activeCategory === "all"
                        ? "bg-[#F4F0EA] text-[#9C5D28] font-semibold"
                        : "text-[#5C4033] hover:bg-[#F9F7F4]"
                    }`}
                  >
                    <Coffee className="h-4 w-4" />
                    All Items
                  </button>
                </li>
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const idStr = String(cat.id);
                  return (
                    <li key={cat.id}>
                      <button
                        onClick={() => setActiveCategory(idStr)}
                        className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-mona transition-colors ${
                          activeCategory === idStr
                            ? "bg-[#F4F0EA] text-[#9C5D28] font-semibold"
                            : "text-[#5C4033] hover:bg-[#F9F7F4]"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {cat.name}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Decorative Sidebar Illustration */}
              <div className="mt-12 mb-4 flex flex-col items-center justify-center">
                <div className="relative w-40 h-32 mb-4">
                  <div className="absolute bottom-0 left-0 w-24 h-16 bg-[#E8DCC8] rounded-t-full rounded-bl-full opacity-60" />
                  <div className="absolute bottom-2 right-0 w-20 h-20 bg-[#D4C3AB] rounded-full flex items-center justify-center shadow-inner">
                     <CakeSlice className="w-10 h-10 text-[#9C5D28]/50" />
                  </div>
                  <div className="absolute top-0 right-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                     <Coffee className="w-6 h-6 text-[#9C5D28]" />
                  </div>
                </div>
                <p className="font-allura italic text-3xl text-[#9C5D28] text-center leading-tight">
                  Every cup has<br/>a story
                </p>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1 w-full">
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {paginatedProducts.map((product) => {
                  const price = getEffectivePrice(product);
                  const originalPrice = parseFloat(product.price);
                  const discounted = productHasDiscount(product);
                  const imageUrl = getProductImageUrl(product);

                  return (
                    <div
                      key={product.id}
                      className="group flex flex-col overflow-hidden rounded-[24px] bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      {/* Image Container */}
                      <div className="relative h-[200px] w-full overflow-hidden bg-[#F4EADD]">
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-[#E8DCC8]">
                            <Coffee className="h-10 w-10 text-[#9C5D28]/30" />
                          </div>
                        )}

                        {/* Top Right Logo/Badge (as seen in your screenshot) */}
                        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm overflow-hidden p-1">
                           <img src="/thatha-logo.png" alt="Logo" className="h-full w-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                           {/* Fallback icon if logo image is missing */}
                           <Coffee className="h-4 w-4 text-[#9C5D28] absolute" />
                        </div>
                      </div>

                      {/* Content Container (White Background) */}
                      <div className="flex flex-1 flex-col p-4 sm:p-5">
                        <h3 className="text-base sm:text-lg font-bold text-[#2C1810] leading-tight line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-[#5C4033]/70 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>
                        
                        {/* Price & Add Button */}
                        <div className="mt-auto pt-5 flex items-end justify-between">
                          <div className="flex flex-col">
                            <span className="text-lg sm:text-xl font-bold text-[#2C1810]">
                              {formatPrice(price)}
                            </span>
                            {discounted && (
                              <span className="text-xs font-semibold text-[#B85B30] line-through">
                                {formatPrice(originalPrice)}
                              </span>
                            )}
                          </div>
                          <button className="rounded-xl bg-[#F2F2F2] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#2C1810] transition-colors hover:bg-[#E5E5E5] active:scale-95">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex h-[400px] flex-col items-center justify-center rounded-[32px] bg-white/50 backdrop-blur-sm">
                <Coffee className="mb-4 h-12 w-12 text-[#9C5D28]/30" />
                <p className="text-lg font-bold text-[#5C4033]">No products found</p>
                <p className="text-sm text-[#5C4033]/70">Try adjusting your search or filters.</p>
              </div>
            )}

            {/* Pagination (Right Aligned) */}
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-end gap-2 pr-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#9C5D28]/20 bg-white text-[#9C5D28] transition-all hover:bg-[#9C5D28]/10 disabled:opacity-30 disabled:hover:bg-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#9C5D28]/20 bg-white text-[#9C5D28] transition-all hover:bg-[#9C5D28]/10 disabled:opacity-30 disabled:hover:bg-white"
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