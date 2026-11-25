import { useState } from "react";
import {
  ArrowRight,
  User,
  ChevronDown,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import teaGlassWithLeaves from "../../assets/images/contact/career-chai-_oXe-1La 3.png";
import greenLeavesBranch from "../../assets/images/contact/pngtree-fresh-tea-leaves-green-branch-camellia-sinensis-plant-png-image_16126042 1.png";
import formBgSketch from "../../assets/images/contact/b7bac949-a24f-462f-b173-624a713e5509 1.png";
import brownCurveBg from "../../assets/images/contact/form-brown-curve.png";

const ENQUIRY_CATEGORIES = ["Complaint", "Feedback", "Staff", "Franchise"];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    enquiryType: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSelectCategory = (category) => {
    setFormData((prev) => ({ ...prev, enquiryType: category }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMessage("Please fill in your Name, Phone Number, and Email.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section
      id="contact-form"
      className="relative w-full overflow-hidden bg-[#F7EBD5] py-16 sm:py-20 lg:py-24 xl:py-28"
    >
      {/* 1. Dark Brown Organic Wave in Section Background (Top-Left) */}
      <div className="pointer-events-none absolute top-0 left-0 z-0 select-none">
        <img
          src={brownCurveBg}
          alt=""
          className="h-auto w-[92vw] max-w-155 object-contain object-top-left sm:w-[80vw] sm:max-w-175 lg:w-[58vw] lg:max-w-215 xl:w-[54vw] xl:max-w-235"
        />
      </div>

      {/* 2. Architectural Café Sketch in Section Background (Right Side) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full select-none overflow-hidden sm:w-[80%] lg:w-[55%] xl:w-[50%]">
        <img
          src={formBgSketch}
          alt=""
          className="h-full w-full object-cover object-top-left opacity-50 mix-blend-multiply sm:object-center"
        />
      </div>

      {/* 3. Decorative Green Tea Leaves in Top-Left Corner */}
      <div className="pointer-events-none absolute -top-12 -left-12 sm:-top-16 sm:-left-16 lg:-top-20 lg:-left-20 z-20 w-36 sm:w-44 lg:w-56 select-none">
        <img
          src={greenLeavesBranch}
          alt=""
          className="w-full object-contain rotate-140"
        />
      </div>

      {/* 4. Decorative Green Tea Leaves in Bottom-Right Corner */}
      <div className="pointer-events-none absolute -bottom-12 -right-12 sm:-bottom-16 sm:-right-16 lg:-bottom-20 lg:-right-20 z-20 w-40 sm:w-52 lg:w-64 select-none">
        <img
          src={greenLeavesBranch}
          alt=""
          className="w-full object-contain -rotate-40"
        />
      </div>

      {/* 5. Main Section Content Area */}
      <div className="relative z-10 mx-auto w-full max-w-400 px-6 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Left Column: Heading, Subtitle & Steaming Chai */}
          <div className="flex flex-col justify-between pt-4 sm:pt-6 lg:col-span-5 lg:min-h-125 lg:pt-2 xl:min-h-135">
            {/* Heading & Subtitle sitting on top of the brown wave */}
            <div className="max-w-105">
              <h2 className="font-thunder text-4xl uppercase leading-[0.92] tracking-[-0.01em] text-soft-ivory sm:text-5xl lg:text-[3.8rem] xl:text-[4.4rem]">
                WE&apos;D LOVE TO HEAR
                <br />
                FROM YOU!
              </h2>

              <p className="mt-4 font-mona text-sm leading-relaxed text-soft-ivory/85 sm:mt-5 sm:text-base">
                Have a Question, suggestion or just want to share your Thatha
                Tea experience? Drop us a message.
              </p>
            </div>

            {/* Steaming Chai Asset grounded on the cream background below the brown wave */}
            <div className="pointer-events-none mt-8 flex justify-center sm:justify-start lg:mt-6">
              <img
                src={teaGlassWithLeaves}
                alt="Steaming Chai with aromatic tea leaves"
                className="w-48 sm:w-56 lg:w-64 xl:w-72 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column: Floating Form Card Exactly Matching Reference */}
          <div className="lg:col-span-7">
            <div className="relative rounded-4xl sm:rounded-[38px] border border-[#7D6451]/15 bg-[#FEF0DE] p-6 shadow-2xl sm:p-9 lg:p-10 xl:p-11">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="h-16 w-16 text-caramel" />
                  <h3 className="mt-4 font-thunder text-3xl uppercase tracking-wider text-deep-coffee">
                    Thank You!
                  </h3>
                  <p className="mt-2 max-w-sm font-mona text-sm text-deep-coffee/80">
                    Your enquiry has been received. Our team will get back to
                    you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        city: "",
                        enquiryType: "",
                      });
                    }}
                    className="mt-6 rounded-xl bg-caramel px-6 py-2.5 font-mona text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#8D4A15] cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 sm:gap-6"
                >
                  {errorMessage && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs font-mona text-red-700 border border-red-200">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Your Name & Phone Number */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    {/* Your Name */}
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#A6998B]" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="h-13.5 w-full rounded-[18px] border border-[#7D6451] bg-transparent py-3 pl-12 pr-4 font-mona text-sm text-deep-coffee placeholder:text-[#A6998B] focus:border-caramel focus:bg-white/40 focus:outline-hidden transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#A6998B]" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                        className="h-13.5 w-full rounded-[18px] border border-[#7D6451] bg-transparent py-3 pl-12 pr-4 font-mona text-sm text-deep-coffee placeholder:text-[#A6998B] focus:border-caramel focus:bg-white/40 focus:outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & City / Location */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    {/* Email */}
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#A6998B]" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="h-13.5 w-full rounded-[18px] border border-[#7D6451] bg-transparent py-3 pl-12 pr-4 font-mona text-sm text-deep-coffee placeholder:text-[#A6998B] focus:border-caramel focus:bg-white/40 focus:outline-hidden transition-all"
                      />
                    </div>

                    {/* City / Location */}
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#A6998B]" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City / Location"
                        className="h-13.5 w-full rounded-[18px] border border-[#7D6451] bg-transparent py-3 pl-12 pr-4 font-mona text-sm text-deep-coffee placeholder:text-[#A6998B] focus:border-caramel focus:bg-white/40 focus:outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: Enquiry Type with Expanded Category Box */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mona text-sm font-semibold text-[#50443A]">
                      Enquiry Type
                    </label>

                    {/* Category Box matching reference screenshot */}
                    <div className="rounded-[18px] border border-[#7D6451] bg-transparent p-4 sm:p-5 transition-all">
                      {/* Dropdown Header */}
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex w-full items-center justify-between text-left font-mona text-sm text-[#A6998B] cursor-pointer"
                      >
                        <span
                          className={
                            formData.enquiryType
                              ? "text-[#50443A] font-medium"
                              : "text-[#A6998B]"
                          }
                        >
                          {formData.enquiryType || "Choose a category"}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-[#7D6451] transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Expanded Options List */}
                      {isDropdownOpen && (
                        <div className="mt-4 flex flex-col gap-3.5 pt-2 border-t border-[#7D6451]/20">
                          {ENQUIRY_CATEGORIES.map((cat) => (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => handleSelectCategory(cat)}
                              className={`flex w-full items-center text-left font-mona text-sm transition-colors cursor-pointer py-1 ${
                                formData.enquiryType === cat
                                  ? "font-semibold text-caramel"
                                  : "text-[#807970] hover:text-deep-coffee"
                              }`}
                            >
                              <span>{cat}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex h-[45px] items-center justify-center gap-2 rounded-xl bg-caramel px-6 py-2.5 font-mona text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#8D4A15] hover:shadow-lg active:scale-95 disabled:opacity-50 cursor-pointer"
                    >
                      <span>{loading ? "SENDING..." : "SEND MESSAGE"}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
