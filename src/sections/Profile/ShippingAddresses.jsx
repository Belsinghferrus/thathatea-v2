import { useState } from "react";
import { MapPin, Pencil, Trash2, Plus, CheckCircle2, X } from "lucide-react";
import { useShop } from "../../context/ShopContext";
import AddressForm from "../Shop/AddressForm";
import DeleteAddressModal from "./DeleteAddressModal";

function ShippingAddressCard({ address, onEdit, onDelete, onSetDefault }) {
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
    <article
      className={`flex flex-col justify-between rounded-[12px] bg-white p-6 transition-colors ${
        address.isDefault
          ? "border border-[#A75D20] ring-1 ring-[#A75D20]/15"
          : "border border-[#E6D9C5]"
      }`}
    >
      <div>
        {/* Top Row: Location Pin + Label + Default Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 shrink-0 text-[#A75D20]" />
            <span className="font-mona text-xs font-semibold uppercase tracking-wide text-deep-coffee">
              {address.label || "Home"}
            </span>
          </div>

          {address.isDefault && (
            <span className="rounded-full bg-[#F6EFE2] px-2.5 py-0.5 font-mona text-[11px] font-semibold text-[#A75D20]">
              Default
            </span>
          )}
        </div>

        {/* Address Details */}
        <div className="mt-3 space-y-1">
          <p className="font-mona text-sm font-semibold text-deep-coffee">
            {address.fullName}
          </p>
          {fullLine && (
            <p className="font-mona text-xs leading-relaxed text-deep-coffee/70 wrap-break-word">
              {fullLine}
            </p>
          )}
          {cityStatePin && (
            <p className="font-mona text-xs text-deep-coffee/70">
              {cityStatePin}
            </p>
          )}
          {address.mobile && (
            <p className="pt-0.5 font-mona text-xs font-medium text-deep-coffee/80">
              {address.mobile}
            </p>
          )}
        </div>
      </div>

      {/* Card Actions */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-[#F0E6D6] pt-3.5">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onEdit(address)}
            className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-lg bg-[#A75D20] px-3 font-mona text-xs font-medium text-white transition-colors hover:bg-[#8D4A15]"
          >
            <Pencil className="h-3 w-3" />
            <span>Edit</span>
          </button>

          <button
            type="button"
            onClick={() => onDelete(address)}
            className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border border-[#E6D9C5] bg-white px-3 font-mona text-xs font-medium text-deep-coffee/80 transition-colors hover:border-red-300 hover:text-red-700"
          >
            <Trash2 className="h-3 w-3" />
            <span>Delete</span>
          </button>
        </div>

        {!address.isDefault && (
          <button
            type="button"
            onClick={() => onSetDefault(address.id)}
            className="inline-flex h-8 cursor-pointer items-center gap-1 font-mona text-xs font-medium text-[#A75D20] transition-colors hover:text-[#8D4A15] hover:underline"
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Set as Default</span>
          </button>
        )}
      </div>
    </article>
  );
}

function ShippingAddresses() {
  const { addresses, saveAddress, deleteAddress, setDefaultAddress } = useShop();

  const [formMode, setFormMode] = useState(null); // null | "add" | "edit"
  const [editingAddress, setEditingAddress] = useState(null);
  const [addressToDelete, setAddressToDelete] = useState(null);

  const openAddForm = () => {
    setEditingAddress(null);
    setFormMode("add");
  };

  const openEditForm = (addr) => {
    setEditingAddress(addr);
    setFormMode("edit");
  };

  const closeForm = () => {
    setEditingAddress(null);
    setFormMode(null);
  };

  const handleSave = (data) => {
    saveAddress(data);
    closeForm();
  };

  const handleConfirmDelete = () => {
    if (!addressToDelete) return;
    deleteAddress(addressToDelete.id);
    if (editingAddress?.id === addressToDelete.id) {
      closeForm();
    }
    setAddressToDelete(null);
  };

  return (
    <div className="mt-10 w-full">
      {/* Section Header */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-mona text-[17px] font-semibold text-deep-coffee sm:text-[18px]">
            Shipping Addresses
          </h2>
          <p className="mt-0.5 font-mona text-[13px] text-deep-coffee/75 sm:text-sm">
            Manage your saved delivery addresses.
          </p>
        </div>

        {!formMode && (
          <button
            type="button"
            onClick={openAddForm}
            className="inline-flex h-8.5 shrink-0 cursor-pointer items-center justify-center gap-1.5 self-start rounded-lg bg-[#A75D20] px-4 font-mona text-xs font-medium text-white transition-colors hover:bg-[#8D4A15] sm:self-center"
          >
            <Plus className="h-3.5 w-3.5" />
            <span>Add New Address</span>
          </button>
        )}
      </div>

      {/* Inline Add / Edit Form */}
      {formMode && (
        <div className="mt-5 rounded-[12px] border border-[#E6D9C5] bg-white p-6">
          <div className="mb-4 flex items-center justify-between gap-2">
            <h3 className="font-mona text-sm font-semibold text-deep-coffee sm:text-base">
              {formMode === "edit"
                ? "Edit Shipping Address"
                : "Add New Shipping Address"}
            </h3>
            <button
              type="button"
              onClick={closeForm}
              aria-label="Close address form"
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-deep-coffee/60 transition-colors hover:bg-[#F4E6D3] hover:text-deep-coffee"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <AddressForm
            key={formMode === "edit" ? editingAddress?.id : "profile-new"}
            initialValues={formMode === "edit" ? editingAddress : null}
            submitLabel={formMode === "edit" ? "Save Changes" : "Save Address"}
            showDefaultCheckbox
            onSubmit={handleSave}
            onCancel={closeForm}
          />
        </div>
      )}

      {/* Saved Address Cards Grid or Empty State */}
      {addresses.length > 0 ? (
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {addresses.map((addr) => (
            <ShippingAddressCard
              key={addr.id}
              address={addr}
              onEdit={openEditForm}
              onDelete={setAddressToDelete}
              onSetDefault={setDefaultAddress}
            />
          ))}
        </div>
      ) : (
        !formMode && (
          <div className="mt-5 flex flex-col items-center rounded-[12px] border border-[#E6D9C5] bg-white px-6 py-10 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F6EFE2] text-[#A75D20]">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="mt-3 font-mona text-sm font-semibold text-deep-coffee sm:text-base">
              No saved addresses yet
            </h3>
            <p className="mt-1 max-w-xs font-mona text-xs leading-relaxed text-deep-coffee/70">
              Add a shipping address for a faster checkout experience.
            </p>
            <button
              type="button"
              onClick={openAddForm}
              className="mt-4 inline-flex h-8.5 cursor-pointer items-center gap-1.5 rounded-lg bg-[#A75D20] px-4 font-mona text-xs font-medium text-white transition-colors hover:bg-[#8D4A15]"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add New Address</span>
            </button>
          </div>
        )
      )}

      {/* Delete Confirmation Modal */}
      <DeleteAddressModal
        isOpen={Boolean(addressToDelete)}
        onCancel={() => setAddressToDelete(null)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

export default ShippingAddresses;
