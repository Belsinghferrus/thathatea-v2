import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constant/routes";

const CHECKOUT_STEPS = [
  { id: 1, label: "Cart", route: ROUTES.CART },
  { id: 2, label: "Address" },
  { id: 3, label: "Checkout" },
  { id: 4, label: "Payment" },
  { id: 5, label: "Confirm" },
];

function CheckoutStepper({ activeStep = 3, onStepClick }) {
  const navigate = useNavigate();

  const handleClick = (step) => {
    if (step.route && step.id < activeStep) {
      navigate(step.route);
      return;
    }
    if (onStepClick) {
      onStepClick(step.id);
    }
  };

  return (
    <nav
      aria-label="Checkout progress"
      className="mb-8 flex w-full items-center justify-center overflow-x-auto py-1 no-scrollbar"
    >
      <ol className="flex items-center">
        {CHECKOUT_STEPS.map((step, index) => {
          const isCompletedOrActive = step.id <= activeStep;
          const isInteractive =
            (step.route && step.id < activeStep) || Boolean(onStepClick);

          return (
            <Fragment key={step.id}>
              <li>
                <button
                  type="button"
                  onClick={() => handleClick(step)}
                  disabled={!isInteractive}
                  aria-current={step.id === activeStep ? "step" : undefined}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 font-mona text-[11px] font-medium whitespace-nowrap shadow-[0_2px_8px_rgba(44,24,16,0.06)] transition-colors sm:px-3.5 sm:py-1.5 sm:text-xs ${
                    isCompletedOrActive
                      ? "bg-[#A65E22] text-white"
                      : "bg-white text-[#101828]"
                  } ${isInteractive ? "cursor-pointer" : "cursor-default"}`}
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                      isCompletedOrActive
                        ? "bg-white/25 text-white"
                        : "bg-[#F4E6D3] text-[#64748B]"
                    }`}
                  >
                    {step.id}
                  </span>
                  <span>{step.label}</span>
                </button>
              </li>

              {index < CHECKOUT_STEPS.length - 1 && (
                <li
                  aria-hidden="true"
                  className="h-[1.5px] w-4 shrink-0 bg-[#E0A97B] sm:w-6 md:w-8"
                />
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

export default CheckoutStepper;
