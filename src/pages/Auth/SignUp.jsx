import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constant/routes";
import AuthLayout from "../../sections/Auth/AuthLayout";
import SignUpForm from "../../sections/Auth/SignUpForm";
import OTPVerification from "../../sections/Auth/OTPVerification";

function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState("form"); // "form" | "otp"
  const [registrationData, setRegistrationData] = useState(null);
  const [verifyError, setVerifyError] = useState("");

  const handleRequestOtp = (data) => {
    setRegistrationData(data);
    setVerifyError("");
    setStep("otp");
  };

  const handleBack = () => {
    if (step === "otp") {
      setVerifyError("");
      setStep("form");
      return;
    }
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate(ROUTES.HOME);
    }
  };

  const handleVerifyOtp = () => {
    // Backend registration OTP endpoint is not yet configured in this repository
    setVerifyError(
      "Registration OTP backend is not connected yet. UI validation passed."
    );
  };

  const termsFooter =
    step === "form" ? (
      <p className="font-mona text-[11px] text-deep-coffee/80">
        By signing in, you agree to our{" "}
        <Link to="/terms" className="font-medium text-caramel hover:underline">
          Terms
        </Link>{" "}
        and{" "}
        <Link to="/privacy" className="font-medium text-caramel hover:underline">
          Privacy
        </Link>
        .
      </p>
    ) : null;

  return (
    <AuthLayout
      mode="signup"
      compactLogo={step === "form"}
      footerNote={termsFooter}
      onBack={handleBack}
    >
      {step === "form" ? (
        <SignUpForm
          initialValues={registrationData}
          onRequestOtp={handleRequestOtp}
        />
      ) : (
        <OTPVerification
          verificationType="signup"
          destination={registrationData?.mobile || ""}
          onVerify={handleVerifyOtp}
          onResend={() => {
            setVerifyError("");
            return true;
          }}
          serverError={verifyError}
        />
      )}
    </AuthLayout>
  );
}

export default SignUp;
