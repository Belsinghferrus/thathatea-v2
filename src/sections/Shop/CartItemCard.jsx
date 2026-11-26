import { Minus, Plus, Trash2 } from "lucide-react";

function CartItemCard({ item, onUpdateQuantity, onRemove }) {
  const lineTotal = item.price * item.quantity;

  return (
    <div className="relative flex flex-col gap-4 rounded-2xl border border-deep-coffee/5 bg-white p-4 shadow-xs sm:flex-row sm:items-stretch sm:justify-between sm:p-5">
      {/* Left: Product Image + Info + Quantity */}
      <div className="flex gap-4">
        <div className="h-22 w-22 shrink-0 overflow-hidden rounded-xl bg-[#F6F1E7] sm:h-24 sm:w-24">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <span className="block font-mona text-[10px] font-medium text-caramel sm:text-[11px]">
              Thatha Tea Product
            </span>
            <h3 className="mt-0.5 font-mona text-sm font-bold text-deep-coffee sm:text-base">
              {item.name}
            </h3>
            <span className="mt-0.5 block font-mona text-[11px] font-medium text-emerald-600">
              {item.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="mt-3 inline-flex w-fit items-center rounded-lg border border-deep-coffee/15 bg-[#FCFBF9]">
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, -1)}
              aria-label={`Decrease quantity of ${item.name}`}
              className="flex h-7 w-7 cursor-pointer items-center justify-center text-deep-coffee/70 transition-colors hover:text-caramel"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="min-w-7 text-center font-mona text-xs font-semibold text-deep-coffee">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => onUpdateQuantity(item.id, 1)}
              aria-label={`Increase quantity of ${item.name}`}
              className="flex h-7 w-7 cursor-pointer items-center justify-center text-deep-coffee/70 transition-colors hover:text-caramel"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Right: Top Delete Icon + Bottom Total Price */}
      <div className="flex flex-row items-center justify-between sm:flex-col sm:items-end sm:justify-between">
        <button
          type="button"
          onClick={() => onRemove(item.id)}
          aria-label={`Remove ${item.name} from cart`}
          className="cursor-pointer rounded-md p-1 text-deep-coffee/45 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>

        <div className="text-right">
          <span className="block font-mona text-base font-bold text-deep-coffee sm:text-lg">
            ₹{lineTotal}
          </span>
          {item.quantity > 1 && (
            <span className="block font-mona text-[10px] text-deep-coffee/55">
              ₹{item.price} each
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
