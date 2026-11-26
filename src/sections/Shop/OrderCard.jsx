import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { calculateOrderTotals } from "../../context/ShopContext";
import OrderStatusBadge from "./OrderStatusBadge";

function OrderCard({ order }) {
  const navigate = useNavigate();
  const { itemCount, total } = calculateOrderTotals(order.items);

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-deep-coffee/5 bg-white p-5 shadow-xs transition-shadow duration-200 hover:shadow-md sm:p-6">
      {/* Top Row: Order ID & Status Badge */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-mona text-sm font-bold text-deep-coffee sm:text-base">
            {order.id}
          </h3>
          <p className="mt-0.5 font-mona text-[11px] text-deep-coffee/60">
            Placed on {order.date} &middot; {itemCount}{" "}
            {itemCount === 1 ? "item" : "items"}
          </p>
        </div>

        <OrderStatusBadge status={order.status} />
      </div>

      {/* Bottom Row: Total Amount & Details Button */}
      <div className="mt-1 flex items-center justify-between">
        <span className="font-mona text-base font-bold text-deep-coffee sm:text-lg">
          ₹{total}
        </span>

        <button
          type="button"
          onClick={() => navigate(`/orders/${order.id}`)}
          className="inline-flex cursor-pointer items-center gap-1 rounded-lg bg-[#A75D20] px-4 py-1.5 font-mona text-xs font-medium text-white transition-colors hover:bg-[#8D4A15]"
        >
          <span>Details</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
