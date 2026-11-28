import { useState } from "react";
import { Check } from "lucide-react";

const ADDRESS_LABELS = ["Home", "Office", "Other"];

const EMPTY_FORM = {
  id: "",
  label: "Home",
  fullName: "",
  mobile: "",
  line1: "",
  line2: "",
  city: "",
  pinCode: "",
  state: "",
  isDefault: false,
};

function validateAddressForm(form) {
  const errors = {};
  if (!form.label) errors.label = "Select an address label.";
  if (!form.fullName.trim()) errors.fullName = "Full name is required.";

  const digits = form.mobile.replace(/\D/g, "");
  if (!form.mobile.trim()) {
    errors.mobile = "Mobile number is required.";
  } else if (digits.length < 10) {
    errors.mobile = "Enter a valid mobile number.";
  }

  if (!form.line1.trim()) errors.line1 = "Address Line 1 is required.";
  if (!form.city.trim()) errors.city = "City is required.";

  const pinDigits = form.pinCode.replace(/\D/g, "");
  if (!form.pinCode.trim()) {
    errors.pinCode = "PIN code is required.";
  } else if (pinDigits.length !== 6) {
    errors.pinCode = "Enter a valid 6-digit PIN code.";
  }

  if (!form.state.trim()) errors.state = "State is required.";
  return errors;
}

function AddressForm({
  initialValues = null,
  heading = "",
  submitLabel = "Save & Use This Address",
  showDefaultCheckbox = false,
  onSubmit,
  onCancel,
}) {
  const [form, setForm] = useState(() =>
    initialValues
      ? {
          id: initialValues.id || "",
          label: initialValues.label || "Home",
          fullName: initialValues.fullName || "",
          mobile: initialValues.mobile || "",
          line1: initialValues.line1 || "",
          line2: initialValues.line2 || "",
          city: initialValues.city || "",
          pinCode: initialValues.pinCode || "",
          state: initialValues.state || "",
          isDefault: Boolean(initialValues.isDefault),
        }
      : EMPTY_FORM
  );
  const [errors, setErrors] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSaving) return;

    const validationErrors = validateAddressForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSaving(true);
    try {
      onSubmit({
        ...form,
        id: initialValues?.id || undefined,
        fullName: form.fullName.trim(),
        mobile: form.mobile.trim(),
        line1: form.line1.trim(),
        line2: form.line2.trim(),
        city: form.city.trim(),
        pinCode: form.pinCode.trim(),
        state: form.state.trim(),
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {heading && (
        <h3 className="font-mona text-sm font-semibold text-[#101828]">
          {heading}
        </h3>
      )}

      {/* Address Label Pills */}
      <div>
        <span className="mb-1.5 block font-mona text-xs font-medium text-[#101828]">
          Address Label <span className="text-red-600">*</span>
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {ADDRESS_LABELS.map((lbl) => {
            const isActive = form.label === lbl;
            return (
              <button
                key={lbl}
                type="button"
                onClick={() => setForm((prev) => ({ ...prev, label: lbl }))}
                className={`cursor-pointer rounded-full border px-4 py-1 font-mona text-xs font-medium transition-colors ${
                  isActive
                    ? "border-[#A65E22] bg-[#A65E22] text-white"
                    : "border-[#101828]/15 bg-white text-[#101828] hover:border-[#A65E22]"
                }`}
              >
                {lbl}
              </button>
            );
          })}
        </div>
        {errors.label && (
          <p className="mt-1 font-mona text-[11px] text-red-600">
            {errors.label}
          </p>
        )}
      </div>

      {/* Full Name & Mobile Number */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="address-fullName"
            className="mb-1.5 block font-mona text-xs font-medium text-[#101828]"
          >
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            id="address-fullName"
            name="fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Mr. Tea Kumar"
            className="h-10 w-full rounded-lg bg-[#F4E6D3] px-3.5 font-mona text-xs text-[#101828] outline-none placeholder:text-[#64748B]/70 focus:ring-2 focus:ring-[#A65E22]/35"
          />
          {errors.fullName && (
            <p className="mt-1 font-mona text-[11px] text-red-600">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="address-mobile"
            className="mb-1.5 block font-mona text-xs font-medium text-[#101828]"
          >
            Mobile Number <span className="text-red-600">*</span>
          </label>
          <input
            id="address-mobile"
            name="mobile"
            type="tel"
            value={form.mobile}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="h-10 w-full rounded-lg bg-[#F4E6D3] px-3.5 font-mona text-xs text-[#101828] outline-none placeholder:text-[#64748B]/70 focus:ring-2 focus:ring-[#A65E22]/35"
          />
          {errors.mobile && (
            <p className="mt-1 font-mona text-[11px] text-red-600">
              {errors.mobile}
            </p>
          )}
        </div>
      </div>

      {/* Address Line 1 */}
      <div>
        <label
          htmlFor="address-line1"
          className="mb-1.5 block font-mona text-xs font-medium text-[#101828]"
        >
          Address Line 1 <span className="text-red-600">*</span>
        </label>
        <input
          id="address-line1"
          name="line1"
          type="text"
          value={form.line1}
          onChange={handleChange}
          placeholder="Flat / Block / Room number, Building name"
          className="h-10 w-full rounded-lg bg-[#F4E6D3] px-3.5 font-mona text-xs text-[#101828] outline-none placeholder:text-[#64748B]/70 focus:ring-2 focus:ring-[#A65E22]/35"
        />
        {errors.line1 && (
          <p className="mt-1 font-mona text-[11px] text-red-600">
            {errors.line1}
          </p>
        )}
      </div>

      {/* Address Line 2 */}
      <div>
        <label
          htmlFor="address-line2"
          className="mb-1.5 block font-mona text-xs font-medium text-[#101828]"
        >
          Address Line 2
        </label>
        <input
          id="address-line2"
          name="line2"
          type="text"
          value={form.line2}
          onChange={handleChange}
          placeholder="Street, Area, Landmark (optional)"
          className="h-10 w-full rounded-lg bg-[#F4E6D3] px-3.5 font-mona text-xs text-[#101828] outline-none placeholder:text-[#64748B]/70 focus:ring-2 focus:ring-[#A65E22]/35"
        />
      </div>

      {/* City & PIN Code */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="address-city"
            className="mb-1.5 block font-mona text-xs font-medium text-[#101828]"
          >
            City <span className="text-red-600">*</span>
          </label>
          <input
            id="address-city"
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            placeholder="Coimbatore"
            className="h-10 w-full rounded-lg bg-[#F4E6D3] px-3.5 font-mona text-xs text-[#101828] outline-none placeholder:text-[#64748B]/70 focus:ring-2 focus:ring-[#A65E22]/35"
          />
          {errors.city && (
            <p className="mt-1 font-mona text-[11px] text-red-600">
              {errors.city}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="address-pinCode"
            className="mb-1.5 block font-mona text-xs font-medium text-[#101828]"
          >
            PIN Code <span className="text-red-600">*</span>
          </label>
          <input
            id="address-pinCode"
            name="pinCode"
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={form.pinCode}
            onChange={handleChange}
            placeholder="492001"
            className="h-10 w-full rounded-lg bg-[#F4E6D3] px-3.5 font-mona text-xs text-[#101828] outline-none placeholder:text-[#64748B]/70 focus:ring-2 focus:ring-[#A65E22]/35"
          />
          {errors.pinCode && (
            <p className="mt-1 font-mona text-[11px] text-red-600">
              {errors.pinCode}
            </p>
          )}
        </div>
      </div>

      {/* State */}
      <div>
        <label
          htmlFor="address-state"
          className="mb-1.5 block font-mona text-xs font-medium text-[#101828]"
        >
          State <span className="text-red-600">*</span>
        </label>
        <input
          id="address-state"
          name="state"
          type="text"
          value={form.state}
          onChange={handleChange}
          placeholder="Enter state"
          className="h-10 w-full rounded-lg bg-[#F4E6D3] px-3.5 font-mona text-xs text-[#101828] outline-none placeholder:text-[#64748B]/70 focus:ring-2 focus:ring-[#A65E22]/35"
        />
        {errors.state && (
          <p className="mt-1 font-mona text-[11px] text-red-600">
            {errors.state}
          </p>
        )}
      </div>

      {/* Optional Default Shipping Address Checkbox */}
      {showDefaultCheckbox && (
        <label className="flex cursor-pointer items-center gap-2.5 pt-0.5 font-mona text-xs text-[#101828]">
          <input
            type="checkbox"
            name="isDefault"
            checked={form.isDefault}
            onChange={handleChange}
            className="h-4 w-4 cursor-pointer rounded border-deep-coffee/30 accent-[#A65E22]"
          />
          <span>Set as default shipping address</span>
        </label>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={isSaving}
          className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#A65E22] px-5 font-mona text-xs font-semibold text-white transition-colors hover:bg-[#8D4A15] disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Check className="h-3.5 w-3.5" />
          <span>{submitLabel}</span>
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="inline-flex h-10 cursor-pointer items-center justify-center rounded-lg border border-[#A65E22]/45 bg-white px-5 font-mona text-xs font-semibold text-[#2C1810] transition-colors hover:bg-[#F6EFE2]"
        >
          Discard
        </button>
      </div>
    </form>
  );
}

export default AddressForm;
