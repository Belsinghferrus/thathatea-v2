import logo from "../../assets/images/logo.webp";
import pageBgArt from "../../assets/images/sigin/Pasted 26-11-2026 at 18.59.09.png";
import rightBottomPlantation from "../../assets/images/sigin/Pasted 26-11-2026 at 18.58.56.png";
import AuthIllustration from "./AuthIllustration";
import AuthBackButton from "./AuthBackButton";

function AuthLayout({
  mode = "signin",
  compactLogo = false,
  footerNote = null,
  onBack,
  children,
}) {
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center overflow-x-hidden bg-[#F8F1E4] p-4 sm:p-6 lg:p-8">
      {/* Full-Viewport Subtle Illustrated Cream Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src={pageBgArt}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center mix-blend-multiply"
        />
      </div>

      {/* Centered Two-Panel Auth Container (1143 x 683 Reference Proportions) */}
      <main className="relative z-10 grid w-full max-w-285.75 grid-cols-1 overflow-hidden rounded-[28px] bg-[#FBF4E8] shadow-[0_24px_60px_rgba(44,24,16,0.14)] lg:h-170.75 lg:grid-cols-[47.5%_52.5%]">
        {/* Left Illustration Panel */}
        <AuthIllustration mode={mode} />

        {/* Right Form / Verification Panel */}
        <div className="relative flex flex-col items-center justify-between overflow-hidden bg-[#FBF4E8] px-6 py-8 sm:px-12 sm:py-10 lg:px-14 lg:py-10">
          {onBack && (
            <AuthBackButton
              onClick={onBack}
              className="absolute top-6 left-6 z-20"
            />
          )}

          {/* Bottom Tea Plantation Line-Art */}
          <img
            src={rightBottomPlantation}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-0 w-full object-contain object-bottom mix-blend-multiply"
          />

          {/* Top Logo */}
          <div
            className={`relative z-10 flex w-full justify-center ${
              compactLogo ? "mt-1 mb-4" : "mt-4 mb-6 lg:mt-6"
            }`}
          >
            <img
              src={logo}
              alt="Thatha Tea"
              className="h-16 w-auto object-contain sm:h-18"
            />
          </div>

          {/* Center Form / OTP Content */}
          <div className="relative z-10 flex w-full max-w-100 flex-1 flex-col justify-center">
            {children}
          </div>

          {/* Bottom Optional Terms & Privacy Footer */}
          <div className="relative z-10 mt-5 min-h-5 w-full text-center">
            {footerNote}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AuthLayout;
