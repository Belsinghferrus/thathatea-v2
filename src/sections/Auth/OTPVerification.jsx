import { useEffect, useRef, useState } from "react";
import GoogleSignIn from "./GoogleSignIn";

const OTP_LENGTH = 6;
const RESEND_SECONDS = 60;

function OTPVerification({
  verificationType = "mobile", // "mobile" | "email" | "signup"
  destination = "",
  onVerify,
  onResend,
  isSubmitting = false,
  serverError = "",
}) {
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const [localError, setLocalError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const inputRefs = useRef([]);

  // 60-second countdown timer with cleanup on unmount
  useEffect(() => {
    if (secondsLeft <= 0) return undefined;
    const timerId = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timerId);
  }, [secondsLeft]);

  const formatTime = (sec) => {
    const mins = String(Math.floor(sec / 60)).padStart(2, "0");
    const rem = String(sec % 60).padStart(2, "0");
    return `${mins}:${rem}`;
  };

  const handleDigitChange = (index, rawValue) => {
    const cleaned = rawValue.replace(/\D/g, "");
    setLocalError("");
    setStatusMessage("");

    if (!cleaned) {
      const next = [...digits];
      next[index] = "";
      setDigits(next);
      return;
    }

    // Handle multi-digit paste or mobile autofill
    if (cleaned.length > 1) {
      const next = [...digits];
      for (let i = 0; i < OTP_LENGTH - index && i < cleaned.length; i += 1) {
        next[index + i] = cleaned[i];
      }
      setDigits(next);
      const focusIdx = Math.min(index + cleaned.length, OTP_LENGTH - 1);
      inputRefs.current[focusIdx]?.focus();
      return;
    }

    const next = [...digits];
    next[index] = cleaned;
    setDigits(next);

    if (index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (digits[index]) {
        const next = [...digits];
        next[index] = "";
        setDigits(next);
      } else if (index > 0) {
        const next = [...digits];
        next[index - 1] = "";
        setDigits(next);
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);
    if (!pasted) return;
    e.preventDefault();
    const next = Array(OTP_LENGTH).fill("");
    for (let i = 0; i < pasted.length; i += 1) {
      next[i] = pasted[i];
    }
    setDigits(next);
    setLocalError("");
    const focusIdx = Math.min(pasted.length, OTP_LENGTH - 1);
    inputRefs.current[focusIdx]?.focus();
  };

  const handleResendClick = async () => {
    if (secondsLeft > 0 || isSubmitting) return;
    setLocalError("");
    setStatusMessage("");
    const ok = onResend ? await onResend() : true;
    if (ok !== false) {
      setDigits(Array(OTP_LENGTH).fill(""));
      setSecondsLeft(RESEND_SECONDS);
      setStatusMessage("A new verification code has been requested.");
      inputRefs.current[0]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = digits.join("");
    if (code.length < OTP_LENGTH) {
      setLocalError("Please enter the complete 6-digit verification code.");
      return;
    }
    setLocalError("");
    if (onVerify) {
      onVerify(code);
    }
  };

  const renderDescription = () => {
    if (verificationType === "signup") {
      return (
        <p className="mt-1.5 font-mona text-xs leading-relaxed text-deep-coffee/75">
          We have sent 6-digit code at your registered Mobile
          <br />
          number and Email
        </p>
      );
    }

    const label =
      verificationType === "email" ? "Email" : "Mobile number";
    return (
      <div className="mt-1.5 font-mona text-xs leading-relaxed text-deep-coffee/75">
        <p>We have sent 6-digit code at your {label}</p>
        {destination && (
          <p className="mt-0.5 font-medium text-deep-coffee">{destination}</p>
        )}
      </div>
    );
  };

  const errorToShow = localError || serverError;

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col items-center">
      {/* Heading & Destination */}
      <div className="text-center">
        <h2 className="font-mona text-base font-bold text-deep-coffee sm:text-lg">
          Verification Code
        </h2>
        {renderDescription()}
      </div>

      {/* 6 Individual OTP Boxes */}
      <div
        className="mt-6 flex w-full justify-between gap-2 sm:gap-3"
        onPaste={handlePaste}
      >
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            autoComplete={index === 0 ? "one-time-code" : "off"}
            aria-label={`Digit ${index + 1}`}
            placeholder="_"
            value={digit}
            onChange={(e) => handleDigitChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="h-[48px] w-11 rounded-lg border border-deep-coffee/15 bg-white text-center font-mona text-base font-semibold text-deep-coffee shadow-xs transition-colors placeholder:text-deep-coffee/40 focus:border-caramel focus:ring-2 focus:ring-caramel/20 focus:outline-none sm:h-[50px] sm:w-[47px]"
          />
        ))}
      </div>

      {/* Resend OTP Countdown */}
      <div className="mt-2.5 flex w-full justify-end">
        <button
          type="button"
          onClick={handleResendClick}
          disabled={secondsLeft > 0 || isSubmitting}
          className={`font-mona text-[11px] underline underline-offset-2 transition-colors ${
            secondsLeft > 0
              ? "cursor-default text-deep-coffee/55"
              : "cursor-pointer font-medium text-caramel hover:text-deep-coffee"
          }`}
        >
          {secondsLeft > 0
            ? `Resend the OTP ${formatTime(secondsLeft)}`
            : "Resend the OTP"}
        </button>
      </div>

      {/* Validation / Status Messages */}
      {errorToShow && (
        <p className="mt-2 text-center font-mona text-[11px] text-red-700">
          {errorToShow}
        </p>
      )}
      {statusMessage && (
        <p className="mt-2 text-center font-mona text-[11px] text-caramel">
          {statusMessage}
        </p>
      )}

      {/* Done Button */}
      <button
        type="submit"
        disabled={isSubmitting || digits.join("").length < OTP_LENGTH}
        className="mt-5 h-[43px] w-full cursor-pointer rounded-lg bg-[#3A1E0E] font-mona text-xs font-semibold text-white transition-colors hover:bg-deep-coffee disabled:cursor-not-allowed disabled:opacity-65"
      >
        {isSubmitting ? "Verifying..." : "Done"}
      </button>

      {/* Google Sign In Divider & Icon */}
      <GoogleSignIn />
    </form>
  );
}

export default OTPVerification;
