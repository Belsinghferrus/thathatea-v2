import { Link } from "react-router-dom";
import { ROUTES } from "../../constant/routes";

function OrderSummaryCard({
  title = "Order Summary",
  totals,
  showActions = false,
  onCheckout,
}) {
  const { itemCount, subtotal, gst, shipping, total } = totals;

  return (
    <div className="w-full rounded-2xl border border-deep-coffee/5 bg-white p-6 shadow-xs">
      <h2 className="font-mona text-base font-bold text-deep-coffee sm:text-lg">
        {title}
      </h2>

      <div className="mt-4 space-y-2.5 font-mona text-xs sm:text-[13px]">
        <div className="flex items-center justify-between text-deep-coffee/75">
          <span>
            Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
          </span>
          <span className="font-semibold text-deep-coffee">₹{subtotal}</span>
        </div>

        <div className="flex items-center justify-between text-deep-coffee/75">
          <span>GST (18%)</span>
          <span className="font-semibold text-deep-coffee">₹{gst}</span>
        </div>

        <div className="flex items-center justify-between text-deep-coffee/75">
          <span>Shipping</span>
          {shipping === 0 ? (
            <span className="font-semibold text-emerald-600">FREE</span>
          ) : (
            <span className="font-semibold text-deep-coffee">₹{shipping}</span>
          )}
        </div>
      </div>

      <hr className="my-4 border-deep-coffee/10" />

      <div className="flex items-center justify-between font-mona text-sm font-bold text-deep-coffee sm:text-base">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      {showActions && (
        <div className="mt-5 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={onCheckout}
            className="h-10 w-full cursor-pointer rounded-lg bg-[#A75D20] font-mona text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#8D4A15]"
          >
            Proceed to Checkout
          </button>

          <Link
            to={ROUTES.MENU}
            className="font-mona text-[11px] font-medium text-[#1D5C96] hover:underline"
          >
            Continue shopping
          </Link>
        </div>
      )}
    </div>
  );
}

export default OrderSummaryCard;
