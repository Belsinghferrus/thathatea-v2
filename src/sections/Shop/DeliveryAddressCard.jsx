import { useState } from "react";
import { MapPin, Pencil, X, Plus } from "lucide-react";
import AddressForm from "./AddressForm";

function SavedAddressTile({
  address,
  isSelected,
  onSelect,
  onEdit,
  showEditButton = true,
}) {
  const fullLine = [address.line1, address.line2].filter(Boolean).join(", ");
  const cityStatePin = [
    address.city,
    address.state && address.pinCode
      ? `${address.state} – ${address.pinCode}`
      : address.state || address.pinCode,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div
      onClick={() => onSelect && onSelect(address.id)}
      className={`flex flex-col justify-between gap-4 rounded-xl bg-[#F6EFE2] p-4 transition-colors sm:flex-row sm:items-center sm:p-5 ${
        isSelected ? "ring-1 ring-[#A65E22]/30" : ""
      } ${onSelect ? "cursor-pointer" : ""}`}
    >
      <div className="min-w-0 flex-1 space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mona text-sm font-semibold text-[#101828]">
            {address.fullName}
          </span>
          {(address.isDefault || isSelected) && (
            <span className="rounded-full bg-white px-2.5 py-0.5 font-mona text-[11px] font-medium text-[#A65E22] shadow-2xs">
              {address.isDefault ? "Default" : address.label}
            </span>
          )}
        </div>

        {fullLine && (
          <p className="font-mona text-xs leading-relaxed text-[#64748B] wrap-break-word">
            {fullLine}
          </p>
        )}

        {cityStatePin && (
          <p className="font-mona text-xs text-[#64748B]">{cityStatePin}</p>
        )}

        {address.mobile && (
          <p className="font-mona text-xs text-[#64748B]">{address.mobile}</p>
        )}
      </div>

      {showEditButton && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(address);
          }}
          className="inline-flex h-8.5 shrink-0 cursor-pointer items-center justify-center gap-1.5 self-start rounded-lg bg-[#A65E22] px-4 font-mona text-xs font-medium text-white transition-colors hover:bg-[#8D4A15] sm:self-center"
        >
          <Pencil className="h-3.5 w-3.5" />
          <span>Edit</span>
        </button>
      )}
    </div>
  );
}

function DeliveryAddressCard({
  addresses,
  selectedAddress,
  onSelectAddress,
  onSaveAddress,
}) {
  const [mode, setMode] = useState("view"); // "view" | "edit" | "new"
  const [editingAddress, setEditingAddress] = useState(null);

  const openEditMode = (addr) => {
    setEditingAddress(addr);
    setMode("edit");
  };

  const openNewMode = () => {
    setEditingAddress(null);
    setMode("new");
  };

  const handleClose = () => {
    setEditingAddress(null);
    setMode("view");
  };

  const handleSave = (data) => {
    onSaveAddress(data);
    setEditingAddress(null);
    setMode("view");
  };

  const isExpanded = mode === "edit" || mode === "new";

  return (
    <section
      aria-label="Delivery Address"
      className="w-full rounded-2xl border border-deep-coffee/5 bg-white p-5 shadow-xs sm:p-6"
    >
      {/* Card Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MapPin className="h-4.5 w-4.5 shrink-0 text-[#101828]" />
          <h2 className="font-mona text-base font-bold text-[#101828]">
            {mode === "new" ? "New Delivery Address" : "Delivery Address"}
          </h2>
        </div>

        {isExpanded ? (
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close address form"
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-[#64748B] transition-colors hover:bg-[#F4E6D3] hover:text-[#101828]"
          >
            <X className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={openNewMode}
            className="inline-flex cursor-pointer items-center gap-1 font-mona text-xs font-medium text-[#64748B] transition-colors hover:text-[#A65E22]"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Add New</span>
          </button>
        )}
      </div>

      {/* Edit Mode Subheading */}
      {mode === "edit" && (
        <div className="mt-4 flex items-center gap-2 text-[#101828]">
          <Pencil className="h-3.5 w-3.5 text-[#64748B]" />
          <h3 className="font-mona text-sm font-semibold">
            Edit Delivery Address
          </h3>
        </div>
      )}

      {/* Inline Reusable Address Form */}
      {isExpanded && (
        <div className="mt-4">
          <AddressForm
            key={mode === "edit" ? editingAddress?.id : "new"}
            initialValues={mode === "edit" ? editingAddress : null}
            submitLabel="Save & Use This Address"
            showDefaultCheckbox={false}
            onSubmit={handleSave}
            onCancel={handleClose}
          />
        </div>
      )}

      {/* Saved Address Card(s) */}
      {addresses.length > 0 ? (
        <div className={`${isExpanded ? "mt-5" : "mt-4"} space-y-3`}>
          {addresses.map((addr) => (
            <SavedAddressTile
              key={addr.id}
              address={addr}
              isSelected={selectedAddress?.id === addr.id}
              onSelect={isExpanded ? undefined : onSelectAddress}
              onEdit={openEditMode}
              showEditButton
            />
          ))}
        </div>
      ) : (
        !isExpanded && (
          <div className="mt-4 rounded-xl bg-[#F6EFE2] p-5 text-center">
            <p className="font-mona text-xs text-[#64748B]">
              No delivery address saved yet.
            </p>
            <button
              type="button"
              onClick={openNewMode}
              className="mt-3 inline-flex h-8.5 cursor-pointer items-center gap-1.5 rounded-lg bg-[#A65E22] px-4 font-mona text-xs font-medium text-white hover:bg-[#8D4A15]"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add Delivery Address</span>
            </button>
          </div>
        )
      )}
    </section>
  );
}

export default DeliveryAddressCard;
