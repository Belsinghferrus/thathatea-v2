import { useState } from "react";
import AuthLayout from "../../sections/Auth/AuthLayout";
import SignInForm from "../../sections/Auth/SignInForm";
import OTPVerification from "../../sections/Auth/OTPVerification";

function SignIn() {
  const [step, setStep] = useState("form"); // "form" | "otp"
  const [otpTarget, setOtpTarget] = useState({ type: "mobile", destination: "" });
  const [verifyError, setVerifyError] = useState("");

  const handleRequestOtp = ({ type, destination }) => {
    setOtpTarget({ type, destination });
    setVerifyError("");
    setStep("otp");
  };

  const handleVerifyOtp = () => {
    // Backend OTP verification endpoint is not yet configured in this repository
    setVerifyError(
      "OTP verification backend is not connected yet. UI validation passed."
    );
  };

  return (
    <AuthLayout mode="signin">
      {step === "form" ? (
        <SignInForm onRequestOtp={handleRequestOtp} />
      ) : (
        <OTPVerification
          verificationType={otpTarget.type}
          destination={otpTarget.destination}
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

export default SignIn;
