import { Link } from "react-router-dom";
import { ROUTES } from "../../constant/routes";

function OrderSummaryCard({
  title = "Order Summary",
  totals,
  showActions = false,
  onCheckout,
  buttonLabel = "Proceed to Checkout",
  totalClassName = "text-deep-coffee",
  errorMessage = "",
  disabled = false,
}) {
  const { itemCount, subtotal, gst, shipping, total } = totals;

  return (
    <div className="w-full rounded-2xl border border-deep-coffee/5 bg-white p-6 shadow-xs">
      <h2 className="font-mona text-base font-bold text-[#101828] sm:text-lg">
        {title}
      </h2>

      <div className="mt-4 space-y-2.5 font-mona text-xs sm:text-[13px]">
        <div className="flex items-center justify-between text-[#64748B]">
          <span>
            Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
          </span>
          <span className="font-semibold text-[#101828]">₹{subtotal}</span>
        </div>

        <div className="flex items-center justify-between text-[#64748B]">
          <span>GST (18%)</span>
          <span className="font-semibold text-[#101828]">₹{gst}</span>
        </div>

        <div className="flex items-center justify-between text-[#64748B]">
          <span>Shipping</span>
          {shipping === 0 ? (
            <span className="font-semibold text-[#00BF83]">FREE</span>
          ) : (
            <span className="font-semibold text-[#101828]">₹{shipping}</span>
          )}
        </div>
      </div>

      <hr className="my-4 border-deep-coffee/10" />

      <div
        className={`flex items-center justify-between font-mona text-sm font-bold sm:text-base ${totalClassName}`}
      >
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      {errorMessage && (
        <p className="mt-3 font-mona text-xs text-red-600">{errorMessage}</p>
      )}

      {showActions && (
        <div className="mt-5 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={onCheckout}
            disabled={disabled}
            className="h-10 w-full cursor-pointer rounded-lg bg-[#A65E22] font-mona text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#8D4A15] disabled:cursor-not-allowed disabled:opacity-55"
          >
            {buttonLabel}
          </button>

          <Link
            to={ROUTES.MENU}
            className="font-mona text-[11px] font-medium text-[#12365E] hover:underline"
          >
            Continue shopping
          </Link>
        </div>
      )}
    </div>
  );
}

export default OrderSummaryCard;
