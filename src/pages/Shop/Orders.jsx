import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constant/routes";
import { useShop } from "../../context/ShopContext";
import ShopLayout from "../../sections/Shop/ShopLayout";
import OrderCard from "../../sections/Shop/OrderCard";

const FILTER_TABS = ["All", "Processing", "Shipped", "Delivered"];

function Orders() {
  const { orders } = useShop();
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOrders = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return orders.filter((order) => {
      const matchesStatus =
        activeFilter === "All" || order.status === activeFilter;
      const matchesSearch =
        !query || order.id.toLowerCase().includes(query);
      return matchesStatus && matchesSearch;
    });
  }, [orders, activeFilter, searchQuery]);

  return (
    <ShopLayout>
      <div className="w-full max-w-[1160px]">
        {/* Page Header */}
        <h1 className="font-mona text-[26px] font-bold leading-tight text-deep-coffee sm:text-[28px]">
          My Orders
        </h1>
        <p className="mt-1 font-mona text-[13px] text-deep-coffee/75 sm:text-sm">
          Check your Orders
        </p>

        {/* Filter Tabs & Order ID Search */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  className={`cursor-pointer rounded-full px-4 py-1.5 font-mona text-xs font-medium transition-colors ${
                    isActive
                      ? "bg-deep-coffee text-white"
                      : "border border-deep-coffee/10 bg-white text-deep-coffee/70 hover:text-deep-coffee"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by order ID..."
            aria-label="Search by order ID"
            className="h-9 w-full rounded-lg border border-deep-coffee/10 bg-white px-3.5 font-mona text-xs text-deep-coffee placeholder:text-deep-coffee/45 focus:border-caramel focus:outline-none sm:w-56"
          />
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-deep-coffee/5 bg-white p-10 text-center shadow-xs">
            <p className="font-mona text-sm font-semibold text-deep-coffee">
              No matching orders found
            </p>
            <p className="mt-1 font-mona text-xs text-deep-coffee/65">
              Try adjusting your filter or search query, or explore our menu.
            </p>
            <Link
              to={ROUTES.MENU}
              className="mt-4 inline-flex rounded-lg bg-[#A75D20] px-5 py-2 font-mona text-xs font-medium text-white hover:bg-[#8D4A15]"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="mt-6 flex flex-col gap-4">
            {filteredOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>
    </ShopLayout>
  );
}

export default Orders;
