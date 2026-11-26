import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "../../constant/routes";
import signInBgArt from "../../assets/images/sigin/Pasted 26-11-2026 at 18.58.43.png";
import signInMascot from "../../assets/images/sigin/Pasted 26-11-2026 at 18.58.19.png";
import signUpBgArt from "../../assets/images/sigin/Pasted 26-11-2026 at 18.57.35.png";
import signUpMascot from "../../assets/images/sigin/Pasted 26-11-2026 at 18.57.51.png";

function AuthIllustration({ mode = "signin" }) {
  const navigate = useNavigate();

  if (mode === "signup") {
    return (
      <div className="relative flex min-h-[360px] w-full flex-col justify-between overflow-hidden bg-[#8E400A] p-7 sm:p-9 lg:min-h-full lg:p-10">
        {/* Background Storefront & Palm Silhouettes */}
        <img
          src={signUpBgArt}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
        />

        {/* Top-Left Heading & Description */}
        <div className="relative z-10">
          <h1 className="font-thunder text-4xl leading-[0.95] tracking-tight text-white sm:text-[2.75rem]">
            Hello there!
          </h1>
          <p className="mt-2 font-mona text-xs leading-snug text-white/90 sm:text-[13px]">
            Enter your Details and join with us
          </p>
        </div>

        {/* Namaste Mascot Bottom-Left */}
        <img
          src={signUpMascot}
          alt="Thatha Tea mascot welcoming new members"
          className="pointer-events-none absolute bottom-0 left-0 z-10 h-[62%] w-auto object-contain object-bottom-left sm:h-[66%] lg:h-[68%]"
        />

        {/* Bottom-Center Sign In Switch Button Layered Above Mascot */}
        <div className="relative z-20 mt-44 flex justify-center sm:mt-48 lg:mt-0 lg:pb-2">
          <button
            type="button"
            onClick={() => navigate(ROUTES.SIGNIN)}
            className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#FBF4E8] px-7 py-3 font-mona text-xs font-semibold uppercase tracking-wider text-caramel shadow-md transition-all duration-200 hover:bg-white active:scale-95"
          >
            <span>SIGN IN</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-[360px] w-full flex-col justify-between overflow-hidden bg-[#F7D7AD] p-7 sm:p-9 lg:min-h-full lg:p-10">
      {/* Background Leaves & Storefront Line Art */}
      <img
        src={signInBgArt}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-bottom-left opacity-45 mix-blend-multiply"
      />

      {/* Top-Left Heading & Description */}
      <div className="relative z-10 max-w-[270px]">
        <h1 className="font-thunder text-4xl leading-[0.95] tracking-tight text-deep-coffee sm:text-[2.75rem]">
          Welcome Back!
        </h1>
        <p className="mt-2 font-mona text-xs leading-snug text-[#9C521B] sm:text-[13px]">
          Your favourite tea, your familiar taste, your happy place.
        </p>
      </div>

      {/* Left-Facing Mascot Bottom-Right */}
      <img
        src={signInMascot}
        alt="Thatha Tea mascot welcoming you back"
        className="pointer-events-none absolute right-0 bottom-0 z-10 h-[58%] w-auto object-contain object-bottom-right sm:h-[62%] lg:h-[64%]"
      />

      {/* Bottom-Center Sign Up Switch Button Layered Above Mascot */}
      <div className="relative z-20 mt-44 flex justify-center sm:mt-48 lg:mt-0 lg:pb-2">
        <button
          type="button"
          onClick={() => navigate(ROUTES.SIGNUP)}
          className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#A75D20] px-7 py-3 font-mona text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-[#8D4A15] active:scale-95"
        >
          <span>SIGN UP</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}

export default AuthIllustration;
