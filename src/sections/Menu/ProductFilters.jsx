import React from "react";
import { Search, ChevronDown, Coffee, Cookie, CakeSlice, Croissant, Utensils } from "lucide-react";

// Map category names to icons
const getCategoryIcon = (name) => {
  const lower = name.toLowerCase();
  if (lower.includes("cookie")) return Cookie;
  if (lower.includes("muffin") || lower.includes("cake")) return CakeSlice;
  if (lower.includes("bun")) return Croissant;
  if (lower.includes("other")) return Utensils;
  return Coffee;
};

export default function ProductFilters({
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
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6">
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide lg:pb-0">
        <button
          onClick={() => onCategoryChange("all")}
          className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 font-mona text-[13px] font-semibold uppercase tracking-wider transition-all ${
            activeCategory === "all"
              ? "bg-[#9C5D28] text-white shadow-md"
              : "bg-white/80 text-[#2C1810] hover:bg-white"
          }`}
        >
          <Coffee className="h-4 w-4" />
          All
        </button>

        {categories.map((cat) => {
          const Icon = getCategoryIcon(cat.name);
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(String(cat.id))}
              className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 font-mona text-[13px] font-semibold uppercase tracking-wider transition-all ${
                activeCategory === String(cat.id)
                  ? "bg-[#9C5D28] text-white shadow-md"
                  : "bg-white/80 text-[#2C1810] hover:bg-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Search & Sort */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="relative flex-1 lg:w-64">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#2C1810]/50" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-full border border-[#A76024]/20 bg-white/80 py-3 pl-11 pr-4 font-mona text-sm text-[#2C1810] outline-none placeholder:text-[#2C1810]/40 focus:border-[#9C5D28] focus:ring-2 focus:ring-[#9C5D28]/20"
          />
        </div>

        <div className="relative">
          <select
            value={sortOption}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none cursor-pointer rounded-full border border-[#A76024]/20 bg-white/80 py-3 pl-4 pr-10 font-mona text-sm font-medium text-[#2C1810] outline-none focus:border-[#9C5D28] focus:ring-2 focus:ring-[#9C5D28]/20"
          >
            {showPopularSort && <option value="popular">Sort By : Popular</option>}
            <option value="default">Sort By : Default</option>
            <option value="price-low">Price : Low to High</option>
            <option value="price-high">Price : High to Low</option>
            <option value="name-asc">Name : A to Z</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9C5D28]" />
        </div>
      </div>
    </div>
  );
}