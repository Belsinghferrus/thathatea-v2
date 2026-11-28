import React from "react";
import { Plus, Minus, Eye } from "lucide-react";
import {
  getEffectivePrice,
  getOriginalPrice,
  productHasDiscount,
  getProductImageUrl,
  formatPrice,
} from "../../services/productService"; // Adjust path to your menuData file

export default function ProductCard({ 
  product, 
  variant = "grid", 
  onQuickView,
  qty = 0,
  onAdd,
  onIncrement,
  onDecrement
}) {
  const price = getEffectivePrice(product);
  const originalPrice = getOriginalPrice(product);
  const hasDiscount = productHasDiscount(product);
  const imageUrl = getProductImageUrl(product) || "https://thathatea.com/_next/image?url=/images/logo.png&w=256&q=75";
  
  return (
    <div className="group relative flex flex-col  rounded-[20px] bg-[#FCF7F0] shadow-sm transition-all duration-300 hover:shadow-md">
      
      {/* Image Section with Gradient Overlay */}
      <div className="relative h-[300px] w-full overflow-hidden sm:h-[240px] xl:h-[350px]">
        <img
          src={imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src = "https://thathatea.com/_next/image?url=/images/logo.png&w=256&q=75";
          }}
        />
        
        {/* Quick View Button (Optional, based on your old code) */}
        {onQuickView && (
          <button 
            onClick={() => onQuickView(product)}
            className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[#2C1810] opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100"
          >
            <Eye className="h-4 w-4" />
          </button>
        )}

        {/* Dark Gradient for readability */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/80 to-transparent pointer-events-none" />
        
        {/* Content inside the gradient */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col p-3 sm:p-4 z-10">
          <h3 className="font-mona text-sm font-bold text-white sm:text-base line-clamp-1">
            {product.name}
          </h3>
          <p className="mt-1 font-mona text-[10px] text-white/70 sm:text-xs line-clamp-2">
            {product.description || "A warm and soft eggless treat."}
          </p>
          
          {/* Price and Action Toggle */}
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-thunder text-lg text-white sm:text-xl">
                {formatPrice(price)}
              </span>
              {hasDiscount && (
                <span className="font-mona text-xs text-white/50 line-through">
                  {formatPrice(originalPrice)}
                </span>
              )}
            </div>

            {/* Add to Cart Toggle */}
            {qty === 0 ? (
              <button
                onClick={() => onAdd(product.id)}
                className="rounded-md bg-[#9C5D28] px-4 py-1.5 font-mona text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#7a4720]"
              >
                ADD
              </button>
            ) : (
              <div className="flex items-center gap-3 rounded-md bg-[#9C5D28] px-2 py-1.5 text-white">
                <button onClick={() => onDecrement(product.id)} className="hover:text-gray-300">
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="font-mona text-sm font-semibold min-w-[12px] text-center">
                  {qty}
                </span>
                <button onClick={() => onIncrement(product.id)} className="hover:text-gray-300">
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}