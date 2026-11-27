import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function ProductCarousel({ items, renderItem, loading = false }) {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const touchStartX = useRef(null);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxStart = Math.max(0, items.length - visibleCount);
  const safeStart = Math.min(startIndex, maxStart);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxStart, prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const diff = touchStartX.current - endX;
    if (diff > 40) handleNext();
    if (diff < -40) handlePrev();
    touchStartX.current = null;
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="h-[290px] animate-pulse rounded-[20px] bg-white/80"
          />
        ))}
      </div>
    );
  }

  if (!items.length) return null;

  const visibleItems = items.slice(safeStart, safeStart + visibleCount);

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div
        className="grid flex-1 grid-cols-1 gap-4 transition-all duration-300 sm:grid-cols-2 lg:grid-cols-4"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visibleItems.map((item) => renderItem(item))}
      </div>

      {/* Circular Previous / Next Arrows on the Right */}
      {items.length > visibleCount && (
        <div className="hidden shrink-0 flex-col gap-2 sm:flex">
          <button
            type="button"
            onClick={handlePrev}
            disabled={safeStart === 0}
            aria-label="Previous best selling items"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-deep-coffee/20 bg-white text-deep-coffee shadow-xs transition-colors hover:border-caramel hover:text-caramel disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={safeStart >= maxStart}
            aria-label="Next best selling items"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-deep-coffee/20 bg-white text-deep-coffee shadow-xs transition-colors hover:border-caramel hover:text-caramel disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductCarousel;
