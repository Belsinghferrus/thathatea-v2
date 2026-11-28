import { ArrowLeft } from "lucide-react";

function AuthBackButton({ onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Go back"
      className={`group inline-flex cursor-pointer items-center gap-1.5 bg-transparent font-mona text-xs font-semibold text-deep-coffee transition-colors duration-200 hover:text-caramel focus:outline-2 focus:outline-offset-2 focus:outline-caramel sm:text-[13px] ${className}`}
    >
      <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
      <span>Back</span>
    </button>
  );
}

export default AuthBackButton;
