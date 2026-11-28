function CheckoutOrderItems({ items }) {
  return (
    <section
      aria-label="Order Items"
      className="w-full rounded-2xl border border-deep-coffee/5 bg-white p-5 shadow-xs sm:p-6"
    >
      <h2 className="font-mona text-base font-bold text-[#101828]">
        Order Items ({items.length})
      </h2>

      <div className="mt-4 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex min-w-0 items-center gap-3.5">
              <img
                src={item.image}
                alt={item.name}
                className="h-12 w-12 shrink-0 rounded-lg object-cover bg-[#F6EFE2]"
              />
              <div className="min-w-0">
                <p className="truncate font-mona text-xs font-semibold text-[#101828] sm:text-sm">
                  {item.name}
                </p>
                <p className="mt-0.5 font-mona text-[11px] text-[#64748B]">
                  Qty: {item.quantity}
                </p>
              </div>
            </div>

            <span className="shrink-0 font-mona text-xs font-semibold text-[#101828] sm:text-sm">
              ₹{item.price * item.quantity}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CheckoutOrderItems;
