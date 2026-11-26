import { useMemo, useState } from "react";
import { Check, Pencil } from "lucide-react";
import topRightLeaves from "../../assets/images/profile/Pasted 26-11-2026 at 20.24.27.png";
import bottomRightBakery from "../../assets/images/profile/Pasted 26-11-2026 at 20.24.40.png";

const STORAGE_KEY = "thatha_user_profile";

function getStoredUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return {
      fullName: parsed.fullName || "",
      email: parsed.email || "",
      phone: parsed.phone || "",
    };
  } catch {
    return null;
  }
}

function validateProfile(data) {
  const fullName = data.fullName.trim();
  const email = data.email.trim();
  const phone = data.phone.trim();

  if (!fullName) {
    return { valid: false, message: "Full name is required." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { valid: false, message: "Please enter a valid email address." };
  }
  if (!/^\d{10,15}$/.test(phone.replace(/[\s\-+()]/g, ""))) {
    return { valid: false, message: "Please enter a valid phone number." };
  }
  return { valid: true, cleaned: { fullName, email, phone } };
}

function PersonalInformation() {
  const initialUser = getStoredUser() || {
    fullName: "",
    email: "",
    phone: "",
  };

  const [savedProfile, setSavedProfile] = useState(initialUser);
  const [formData, setFormData] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  const hasChanges = useMemo(
    () =>
      formData.fullName.trim() !== savedProfile.fullName.trim() ||
      formData.email.trim() !== savedProfile.email.trim() ||
      formData.phone.trim() !== savedProfile.phone.trim(),
    [formData, savedProfile]
  );

  const validation = useMemo(() => validateProfile(formData), [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setHasInteracted(true);
    if (error) setError("");
    if (notice) setNotice("");
  };

  const handleEnterEditMode = () => {
    setFormData(savedProfile);
    setHasInteracted(false);
    setError("");
    setNotice("");
    setIsEditing(true);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    if (!isEditing || isSaving || !hasChanges) return;

    if (!validation.valid) {
      setError(validation.message);
      return;
    }

    setIsSaving(true);
    // Backend profile update API is not yet configured in this repository.
    // Keep validation strict and inform the user without fabricating a server update.
    setIsSaving(false);
    setFormData(validation.cleaned);
    setNotice("Validation passed. Profile update API is not connected yet.");
  };

  const handleCancel = () => {
    setFormData(savedProfile);
    setHasInteracted(false);
    setError("");
    setNotice("");
    setIsEditing(false);
  };

  const liveError =
    error || (isEditing && hasInteracted && !validation.valid ? validation.message : "");

  const renderStaticValue = (val) =>
    val.trim() ? (
      <span className="truncate font-mona text-base text-deep-coffee">
        {val}
      </span>
    ) : (
      <span className="font-mona text-base text-deep-coffee/50">
        Not provided
      </span>
    );

  return (
    <section className="relative w-full overflow-hidden bg-[#F6F1E7] pt-28 pb-16 sm:pt-32 lg:min-h-130 lg:pt-32 lg:pb-20">
      {/* Top-Right Decorative Botanical Leaves */}
      <img
        src={topRightLeaves}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-14 right-0 z-0 w-52 object-contain object-top-right opacity-45 mix-blend-multiply sm:w-72 lg:w-87.5"
      />

      {/* Bottom-Right Tea & Bakery Illustration (Flush Against Footer) */}
      <img
        src={bottomRightBakery}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 -bottom-8 z-0 w-[320px] object-contain object-bottom-right opacity-90 mix-blend-multiply sm:-bottom-12 sm:w-115 lg:-bottom-16 lg:w-155 xl:-bottom-20 xl:w-170"
      />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <div className="w-full max-w-179.75">
          {/* Dynamic Heading & Description */}
          <h1 className="font-mona text-[26px] font-bold leading-tight text-deep-coffee transition-opacity duration-200 sm:text-[28px]">
            {isEditing ? "Edit Profile" : "My Profile"}
          </h1>
          <p className="mt-1 font-mona text-[13px] text-deep-coffee/75 transition-opacity duration-200 sm:text-sm">
            {isEditing
              ? "Update your personal information below."
              : "View and update your account details."}
          </p>

          {/* Section Heading */}
          <h2 className="mt-8 font-mona text-[17px] font-semibold text-deep-coffee sm:text-[18px]">
            Personal Information
          </h2>

          {/* Two-Column Profile Content */}
          <form onSubmit={handleSaveChanges} className="mt-5">
            {/* First Row: Full name & Email Address */}
            <div className="grid grid-cols-1 gap-4.75 sm:grid-cols-2">
              <div>
                <label
                  htmlFor={isEditing ? "profile-fullname" : undefined}
                  className="mb-1.5 block font-mona text-sm font-semibold text-deep-coffee"
                >
                  Full name
                </label>
                {isEditing ? (
                  <input
                    id="profile-fullname"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="h-12.25 w-full cursor-text rounded-[10px] border border-deep-coffee/25 bg-white px-4 font-mona text-base text-deep-coffee transition-all duration-200 placeholder:text-deep-coffee/40 hover:border-caramel/60 focus:border-caramel focus:ring-2 focus:ring-caramel/15 focus:outline-none"
                  />
                ) : (
                  <div className="flex h-12.25 w-full cursor-default items-center rounded-[10px] bg-[#ECE3D3]/75 px-4 transition-all duration-200">
                    {renderStaticValue(savedProfile.fullName)}
                  </div>
                )}
              </div>

              <div>
                <label
                  htmlFor={isEditing ? "profile-email" : undefined}
                  className="mb-1.5 block font-mona text-sm font-semibold text-deep-coffee"
                >
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    id="profile-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className="h-12.25 w-full cursor-text rounded-[10px] border border-deep-coffee/25 bg-white px-4 font-mona text-base text-deep-coffee transition-all duration-200 placeholder:text-deep-coffee/40 hover:border-caramel/60 focus:border-caramel focus:ring-2 focus:ring-caramel/15 focus:outline-none"
                  />
                ) : (
                  <div className="flex h-12.25 w-full cursor-default items-center rounded-[10px] bg-[#ECE3D3]/75 px-4 transition-all duration-200">
                    {renderStaticValue(savedProfile.email)}
                  </div>
                )}
              </div>
            </div>

            {/* Second Row: Phone Number on Left, Right Column Empty */}
            <div className="mt-5 grid grid-cols-1 gap-4.75 sm:grid-cols-2">
              <div>
                <label
                  htmlFor={isEditing ? "profile-phone" : undefined}
                  className="mb-1.5 block font-mona text-sm font-semibold text-deep-coffee"
                >
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    id="profile-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="h-12.25 w-full cursor-text rounded-[10px] border border-deep-coffee/25 bg-white px-4 font-mona text-base text-deep-coffee transition-all duration-200 placeholder:text-deep-coffee/40 hover:border-caramel/60 focus:border-caramel focus:ring-2 focus:ring-caramel/15 focus:outline-none"
                  />
                ) : (
                  <div className="flex h-12.25 w-full cursor-default items-center rounded-[10px] bg-[#ECE3D3]/75 px-4 transition-all duration-200">
                    {renderStaticValue(savedProfile.phone)}
                  </div>
                )}
              </div>
            </div>

            {/* Validation / Integration Feedback */}
            {liveError && (
              <p className="mt-3 font-mona text-xs text-red-700">{liveError}</p>
            )}
            {notice && (
              <p className="mt-3 font-mona text-xs text-caramel">{notice}</p>
            )}

            {/* Action Buttons */}
            <div className="mt-7 flex items-center gap-3">
              {isEditing ? (
                <>
                  <button
                    type="submit"
                    disabled={isSaving || !hasChanges || !validation.valid}
                    className="inline-flex h-8.5 w-36.75 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[#A75D20] font-mona text-xs font-medium text-white transition-all duration-200 hover:bg-[#8D4A15] disabled:cursor-not-allowed disabled:opacity-55"
                  >
                    <Check className="h-3.5 w-3.5" />
                    <span>{isSaving ? "Saving..." : "Save Changes"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCancel}
                    className="h-8.5 w-24.75 cursor-pointer rounded-lg border border-deep-coffee/25 bg-transparent font-mona text-xs font-medium text-deep-coffee transition-all duration-200 hover:bg-deep-coffee/5"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={handleEnterEditMode}
                  className="inline-flex h-8.5 w-36.75 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[#A75D20] font-mona text-xs font-medium text-white transition-all duration-200 hover:bg-[#8D4A15]"
                >
                  <Pencil className="h-3.5 w-3.5" />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PersonalInformation;
