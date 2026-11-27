import {
  Coffee,
  Cookie,
  CakeSlice,
  Croissant,
  Utensils,
  Search,
  ChevronDown,
} from "lucide-react";

const CATEGORY_ICON_MAP = {
  Cookies: Cookie,
  Muffin: CakeSlice,
  Bun: Croissant,
  Cakes: CakeSlice,
  Others: Utensils,
};

function getCategoryIcon(name) {
  return CATEGORY_ICON_MAP[String(name || "").trim()] || Coffee;
}

function ProductFilters({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortOption,
  onSortChange,
  showPopularSort,
}) {
  return (
    <div className="mb-7 flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
      {/* Category Navigation Container */}
      <div
        role="tablist"
        aria-label="Bakery Categories"
        className="flex items-center gap-1.5 overflow-x-auto rounded-full bg-white p-1.5 shadow-[0_4px_18px_rgba(44,24,16,0.06)] no-scrollbar"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === "all"}
          onClick={() => onCategoryChange("all")}
          className={`flex shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 font-mona text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
            activeCategory === "all"
              ? "bg-[#9C5D28] text-white shadow-sm"
              : "text-[#5C4033] hover:bg-[#F6EFE6]"
          }`}
        >
          <Coffee className="h-3.5 w-3.5" />
          <span>All</span>
        </button>

        {categories.map((cat) => {
          const Icon = getCategoryIcon(cat.name);
          const idStr = String(cat.id);
          const isActive = activeCategory === idStr;

          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onCategoryChange(idStr)}
              className={`flex shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 font-mona text-xs font-semibold uppercase tracking-wider transition-colors duration-200 ${
                isActive
                  ? "bg-[#9C5D28] text-white shadow-sm"
                  : "text-[#5C4033] hover:bg-[#F6EFE6]"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Search & Sorting Controls */}
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        {/* Search Input */}
        <div className="relative w-full sm:w-56 lg:w-64">
          <Search className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-[#9C5D28]/65" />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search..."
            aria-label="Search bakery products"
            className="w-full rounded-full bg-white py-2.5 pr-4 pl-10 font-mona text-sm text-deep-coffee shadow-[0_4px_14px_rgba(44,24,16,0.05)] outline-none transition-shadow placeholder:text-[#5C4033]/50 focus:ring-2 focus:ring-[#9C5D28]/35"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative w-full sm:w-auto">
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            aria-label="Sort products"
            className="w-full cursor-pointer appearance-none rounded-full bg-white py-2.5 pr-10 pl-5 font-mona text-xs font-semibold text-[#5C4033] shadow-[0_4px_14px_rgba(44,24,16,0.05)] outline-none transition-shadow focus:ring-2 focus:ring-[#9C5D28]/35 sm:text-sm"
          >
            <option value="default">Sort By : Featured</option>
            {showPopularSort && <option value="popular">Sort By : Popular</option>}
            <option value="price-low">Price : Low to High</option>
            <option value="price-high">Price : High to Low</option>
            <option value="name-asc">Name : A to Z</option>
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-[#9C5D28]" />
        </div>
      </div>
    </div>
  );
}

export default ProductFilters;
