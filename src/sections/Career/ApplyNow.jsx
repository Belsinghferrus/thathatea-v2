import { useEffect, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import applyBgImg from "../../assets/images/career/Vintage-tea-bg 1.png";

const ROLE_OPTIONS = [
  "TEA MASTER / TEA BREWER",
  "CASHIER",
  "KITCHEN HELPER / COOK",
  "BARISTA",
];

function ApplyNow({ selectedRole }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    role: selectedRole || "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedRole) {
      setFormData((prev) => ({ ...prev, role: selectedRole }));
      setSubmitted(false);
    }
  }, [selectedRole]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="apply-now"
      className="relative w-full overflow-hidden bg-[#F5E7CE] py-16 sm:py-20 lg:py-24"
    >
      {/* Full Vintage Tea & Bread Sketch Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={applyBgImg}
          alt=""
          className="h-full w-full object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-400 px-6 lg:px-16">
        {/* Heading & Subtitle */}
        <div className="text-center">
          <h2 className="font-thunder text-4xl uppercase leading-[0.92] tracking-[-0.01em] text-deep-coffee sm:text-5xl lg:text-[3.25rem]">
            APPLY NOW
          </h2>
          <p className="mt-2 font-mona text-xs text-deep-coffee/75 sm:text-sm">
            We&apos;d love to learn more about you! Fill out the form below.
          </p>
        </div>

        {/* Form Card */}
        <div className="mx-auto mt-10 max-w-140 rounded-2xl border border-deep-coffee/10 bg-[#FFFDF9]/95 p-6 shadow-xl sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle2 className="h-12 w-12 text-caramel" />
              <h3 className="mt-4 font-thunder text-3xl uppercase leading-none text-deep-coffee">
                APPLICATION RECEIVED
              </h3>
              <p className="mt-2 max-w-95 font-mona text-xs leading-relaxed text-deep-coffee/75 sm:text-sm">
                Thank you, {formData.fullName || "Applicant"}! We&apos;ve noted
                your interest for{" "}
                <span className="font-semibold text-deep-coffee">
                  {formData.role || "our team"}
                </span>
                . Our hiring team will reach out soon.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    experience: "",
                    role: "",
                    message: "",
                  });
                }}
                className="mt-6 cursor-pointer rounded-lg bg-caramel px-6 py-2.5 font-mona text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#8D4A15]"
              >
                SUBMIT ANOTHER APPLICATION
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="career-full-name"
                    className="mb-1.5 block font-mona text-[10px] font-semibold uppercase tracking-wider text-deep-coffee"
                  >
                    FULL NAME *
                  </label>
                  <input
                    id="career-full-name"
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-full border border-deep-coffee/15 bg-[#FBF6EE] px-4 py-2.5 font-mona text-xs text-deep-coffee placeholder:text-deep-coffee/40 focus:border-caramel focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="career-email"
                    className="mb-1.5 block font-mona text-[10px] font-semibold uppercase tracking-wider text-deep-coffee"
                  >
                    EMAIL ADDRESS *
                  </label>
                  <input
                    id="career-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-full border border-deep-coffee/15 bg-[#FBF6EE] px-4 py-2.5 font-mona text-xs text-deep-coffee placeholder:text-deep-coffee/40 focus:border-caramel focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Experience */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="career-phone"
                    className="mb-1.5 block font-mona text-[10px] font-semibold uppercase tracking-wider text-deep-coffee"
                  >
                    PHONE NUMBER *
                  </label>
                  <input
                    id="career-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-full border border-deep-coffee/15 bg-[#FBF6EE] px-4 py-2.5 font-mona text-xs text-deep-coffee placeholder:text-deep-coffee/40 focus:border-caramel focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="career-experience"
                    className="mb-1.5 block font-mona text-[10px] font-semibold uppercase tracking-wider text-deep-coffee"
                  >
                    EXPERIENCE (YEARS)
                  </label>
                  <input
                    id="career-experience"
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g. 2 years / Fresher"
                    className="w-full rounded-full border border-deep-coffee/15 bg-[#FBF6EE] px-4 py-2.5 font-mona text-xs text-deep-coffee placeholder:text-deep-coffee/40 focus:border-caramel focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 3: Applying For Role */}
              <div>
                <label
                  htmlFor="career-role"
                  className="mb-1.5 block font-mona text-[10px] font-semibold uppercase tracking-wider text-deep-coffee"
                >
                  APPLYING FOR ROLE *
                </label>
                <select
                  id="career-role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full rounded-full border border-deep-coffee/15 bg-[#FBF6EE] px-4 py-2.5 font-mona text-xs text-deep-coffee focus:border-caramel focus:outline-none"
                >
                  <option value="">Select a position</option>
                  {ROLE_OPTIONS.map((roleOption) => (
                    <option key={roleOption} value={roleOption}>
                      {roleOption}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Message / Cover Letter */}
              <div>
                <label
                  htmlFor="career-message"
                  className="mb-1.5 block font-mona text-[10px] font-semibold uppercase tracking-wider text-deep-coffee"
                >
                  MESSAGE / COVER LETTER
                </label>
                <textarea
                  id="career-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us briefly about yourself and why you'd like to join..."
                  className="w-full resize-none rounded-2xl border border-deep-coffee/15 bg-[#FBF6EE] px-4 py-3 font-mona text-xs text-deep-coffee placeholder:text-deep-coffee/40 focus:border-caramel focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-caramel px-6 py-3 font-mona text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-[#8D4A15] active:scale-[0.99]"
              >
                <span>SUBMIT APPLICATION</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ApplyNow;
