import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../constant/routes";
import { calculateOrderTotals, useShop } from "../../context/ShopContext";
import ShopLayout from "../../sections/Shop/ShopLayout";
import OrderStatusBadge from "../../sections/Shop/OrderStatusBadge";
import OrderItemsList from "../../sections/Shop/OrderItemsList";
import OrderSummaryCard from "../../sections/Shop/OrderSummaryCard";

function OrderDetails() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { orders } = useShop();

  const order = orders.find((o) => o.id === orderId);

  if (!order) {
    return (
      <ShopLayout>
        <div className="w-full max-w-[780px]">
          <button
            type="button"
            onClick={() => navigate(ROUTES.ORDERS)}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-deep-coffee/10 bg-white px-4 py-1.5 font-mona text-xs font-medium text-deep-coffee shadow-xs transition-colors hover:bg-white/80"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back</span>
          </button>

          <div className="mt-6 rounded-2xl border border-deep-coffee/5 bg-white p-8 text-center shadow-xs">
            <h1 className="font-mona text-lg font-bold text-deep-coffee">
              Order not found
            </h1>
            <p className="mt-1 font-mona text-xs text-deep-coffee/65">
              We could not find an order matching ID {orderId}.
            </p>
          </div>
        </div>
      </ShopLayout>
    );
  }

  const totals = calculateOrderTotals(order.items);

  return (
    <ShopLayout>
      {/* Narrower Left-Aligned Layout Leaving Room for Decorative Bakery Artwork */}
      <div className="w-full max-w-[780px]">
        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate(ROUTES.ORDERS)}
          className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-deep-coffee/10 bg-white px-4 py-1.5 font-mona text-xs font-medium text-deep-coffee shadow-xs transition-colors hover:bg-white/80"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back</span>
        </button>

        {/* Order Header */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-mona text-lg font-bold text-deep-coffee sm:text-xl">
              {order.id}
            </h1>
            <p className="mt-0.5 font-mona text-xs text-deep-coffee/65">
              Placed on {order.date}
            </p>
          </div>

          <OrderStatusBadge status={order.status} variant="solid" />
        </div>

        {/* Order Items Container */}
        <div className="mt-5">
          <OrderItemsList items={order.items} />
        </div>

        {/* Side-by-Side Bill Summary & Delivery Address */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          <OrderSummaryCard title="Bill Summary" totals={totals} />

          <div className="w-full rounded-2xl border border-deep-coffee/5 bg-white p-6 shadow-xs">
            <h2 className="font-mona text-base font-bold text-deep-coffee sm:text-lg">
              Delivery Address
            </h2>
            <p className="mt-4 font-mona text-sm font-semibold text-deep-coffee">
              {order.address.name}
            </p>
            <div className="mt-1.5 space-y-0.5 font-mona text-xs leading-relaxed text-deep-coffee/65">
              {order.address.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
}

export default OrderDetails;
