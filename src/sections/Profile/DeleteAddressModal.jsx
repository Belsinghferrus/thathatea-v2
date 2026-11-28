import { useEffect } from "react";
import { X } from "lucide-react";

function DeleteAddressModal({ isOpen, onCancel, onConfirm }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-address-title"
      onClick={onCancel}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-[1px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm rounded-2xl border border-[#E6D9C5] bg-white p-6 shadow-xl"
      >
        <button
          type="button"
          onClick={onCancel}
          aria-label="Close confirmation"
          className="absolute top-4 right-4 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full text-[#64748B] transition-colors hover:bg-[#F4E6D3] hover:text-deep-coffee"
        >
          <X className="h-4 w-4" />
        </button>

        <h3
          id="delete-address-title"
          className="font-mona text-base font-bold text-deep-coffee"
        >
          Delete Address?
        </h3>
        <p className="mt-2 font-mona text-xs leading-relaxed text-deep-coffee/70 sm:text-[13px]">
          Are you sure you want to remove this shipping address?
        </p>

        <div className="mt-5 flex items-center justify-end gap-2.5">
          <button
            type="button"
            onClick={onCancel}
            className="h-9 cursor-pointer rounded-lg border border-deep-coffee/20 bg-white px-4 font-mona text-xs font-medium text-deep-coffee transition-colors hover:bg-[#F6EFE2]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="h-9 cursor-pointer rounded-lg bg-[#A75D20] px-4 font-mona text-xs font-medium text-white transition-colors hover:bg-[#8D4A15]"
          >
            Delete Address
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAddressModal;
