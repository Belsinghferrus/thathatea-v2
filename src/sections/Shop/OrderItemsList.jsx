function OrderItemsList({ items }) {
  return (
    <div className="w-full rounded-2xl border border-deep-coffee/5 bg-white p-5 shadow-xs sm:p-6">
      <h2 className="font-mona text-sm font-bold text-deep-coffee sm:text-base">
        {items.length === 1 ? "Order Item" : "Order Items"}
      </h2>

      <div className="mt-4 divide-y divide-deep-coffee/8">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
          >
            <div className="flex items-center gap-3.5">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#F6F1E7] sm:h-16 sm:w-16">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-mona text-sm font-semibold text-deep-coffee">
                  {item.name}
                </h3>
                <span className="mt-0.5 block font-mona text-[11px] text-deep-coffee/60">
                  Qty: {item.quantity}
                </span>
              </div>
            </div>

            <span className="font-mona text-sm font-bold text-deep-coffee sm:text-base">
              ₹{item.price * item.quantity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderItemsList;
