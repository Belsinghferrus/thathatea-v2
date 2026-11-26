import { useState } from "react";
import GoogleSignIn from "./GoogleSignIn";

function SignUpForm({ initialValues, onRequestOtp }) {
  const [formData, setFormData] = useState({
    name: initialValues?.name || "",
    email: initialValues?.email || "",
    mobile: initialValues?.mobile || "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMobile = formData.mobile.trim();

    if (!trimmedName) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!/^\d{10,15}$/.test(trimmedMobile.replace(/[\s\-+()]/g, ""))) {
      setError("Please enter a valid mobile number.");
      return;
    }

    setError("");
    if (onRequestOtp) {
      onRequestOtp({
        name: trimmedName,
        email: trimmedEmail,
        mobile: trimmedMobile,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col space-y-3.5">
      <div>
        <label
          htmlFor="signup-name"
          className="mb-1 block font-mona text-[11px] font-semibold text-deep-coffee"
        >
          Name
        </label>
        <input
          id="signup-name"
          name="name"
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="h-11.5 w-full rounded-lg border border-deep-coffee/15 bg-transparent px-4 font-mona text-xs text-deep-coffee placeholder:text-deep-coffee/45 focus:border-caramel focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="signup-email"
          className="mb-1 block font-mona text-[11px] font-semibold text-deep-coffee"
        >
          Email
        </label>
        <input
          id="signup-email"
          name="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email"
          className="h-11.5 w-full rounded-lg border border-deep-coffee/15 bg-transparent px-4 font-mona text-xs text-deep-coffee placeholder:text-deep-coffee/45 focus:border-caramel focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="signup-mobile"
          className="mb-1 block font-mona text-[11px] font-semibold text-deep-coffee"
        >
          Mobile Number
        </label>
        <input
          id="signup-mobile"
          name="mobile"
          type="tel"
          autoComplete="tel"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter Number"
          className="h-11.5 w-full rounded-lg border border-deep-coffee/15 bg-transparent px-4 font-mona text-xs text-deep-coffee placeholder:text-deep-coffee/45 focus:border-caramel focus:outline-none"
        />
      </div>

      {error && (
        <p className="font-mona text-[11px] text-red-700">{error}</p>
      )}

      <button
        type="submit"
        className="mt-2 h-10.75 w-full cursor-pointer rounded-lg bg-[#3A1E0E] font-mona text-xs font-semibold text-white transition-colors hover:bg-deep-coffee"
      >
        Next
      </button>

      <GoogleSignIn />
    </form>
  );
}

export default SignUpForm;
