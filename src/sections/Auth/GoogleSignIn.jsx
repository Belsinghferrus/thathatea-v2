import { useState } from "react";

function GoogleSignIn() {
  const [notice, setNotice] = useState("");

  const handleGoogleClick = () => {
    setNotice(
      "Google OAuth is not yet configured in this frontend build. Please use email or mobile OTP."
    );
  };

  return (
    <div className="mt-5 w-full">
      {/* Divider */}
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-deep-coffee/20" />
        <span className="font-mona text-[11px] font-medium text-deep-coffee/80">
          Or Sign in with
        </span>
        <span className="h-px flex-1 bg-deep-coffee/20" />
      </div>

      {/* Centered Multicolored Google Icon */}
      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={handleGoogleClick}
          aria-label="Sign in with Google"
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.3 0 6.08-1.09 8.1-2.96l-3.88-3.05c-1.09.73-2.48 1.16-4.22 1.16-3.24 0-5.99-2.19-6.97-5.13H1.03v3.14C3.04 21.14 7.21 24 12 24Z"
            />
            <path
              fill="#FBBC05"
              d="M5.03 14.02A7.18 7.18 0 0 1 4.65 12c0-.7.13-1.39.38-2.02V6.84H1.03A11.98 11.98 0 0 0 0 12c0 1.94.46 3.77 1.03 5.16l4-3.14Z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.8 0 3.41.62 4.68 1.84l3.51-3.51C18.07 1.19 15.3 0 12 0 7.21 0 3.04 2.86 1.03 6.84l4 3.14C6.01 6.94 8.76 4.75 12 4.75Z"
            />
          </svg>
        </button>
      </div>

      {notice && (
        <p className="mt-2 text-center font-mona text-[11px] text-caramel">
          {notice}
        </p>
      )}
    </div>
  );
}

export default GoogleSignIn;
