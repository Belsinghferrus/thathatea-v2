import { useState } from "react";
import GoogleSignIn from "./GoogleSignIn";

function SignInForm({ onRequestOtp }) {
  const [identifier, setIdentifier] = useState("");
  const [error, setError] = useState("");

  const detectIdentifierType = (value) => {
    const trimmed = value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(trimmed)) {
      return { valid: true, type: "email", value: trimmed };
    }

    const digitsOnly = trimmed.replace(/[\s\-+()]/g, "");
    if (/^\d{10,15}$/.test(digitsOnly)) {
      return { valid: true, type: "mobile", value: trimmed };
    }

    return { valid: false, type: null, value: trimmed };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = detectIdentifierType(identifier);
    if (!result.valid) {
      setError("Please enter a valid email address or mobile number.");
      return;
    }
    setError("");
    if (onRequestOtp) {
      onRequestOtp({ type: result.type, destination: result.value });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col">
      <div>
        <label
          htmlFor="signin-identifier"
          className="mb-1.5 block font-mona text-[11px] font-semibold text-deep-coffee"
        >
          Email / Mobile Number
        </label>
        <input
          id="signin-identifier"
          type="text"
          autoComplete="username"
          value={identifier}
          onChange={(e) => {
            setIdentifier(e.target.value);
            if (error) setError("");
          }}
          placeholder="Enter Email or Mobile Number"
          className="h-[49px] w-full rounded-lg border border-deep-coffee/15 bg-transparent px-4 font-mona text-xs text-deep-coffee placeholder:text-deep-coffee/45 focus:border-caramel focus:outline-none"
        />
        {error && (
          <p className="mt-1.5 font-mona text-[11px] text-red-700">{error}</p>
        )}
      </div>

      <button
        type="submit"
        className="mt-6 h-[43px] w-full cursor-pointer rounded-lg bg-[#3A1E0E] font-mona text-xs font-semibold text-white transition-colors hover:bg-deep-coffee"
      >
        Next
      </button>

      <GoogleSignIn />
    </form>
  );
}

export default SignInForm;
