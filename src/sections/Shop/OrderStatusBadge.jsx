const STATUS_STYLES = {
  Delivered: "bg-emerald-50 text-emerald-700",
  Shipped: "bg-sky-50 text-sky-700",
  Processing: "bg-amber-50 text-amber-700",
};

const DETAILS_STATUS_STYLES = {
  Delivered: "bg-emerald-700 text-white",
  Shipped: "bg-[#123A5C] text-white",
  Processing: "bg-[#A75D20] text-white",
};

function OrderStatusBadge({ status, variant = "light" }) {
  const palette = variant === "solid" ? DETAILS_STATUS_STYLES : STATUS_STYLES;
  const badgeClass = palette[status] || "bg-deep-coffee/10 text-deep-coffee";

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-mona text-[11px] font-medium ${badgeClass}`}
    >
      {status}
    </span>
  );
}

export default OrderStatusBadge;
