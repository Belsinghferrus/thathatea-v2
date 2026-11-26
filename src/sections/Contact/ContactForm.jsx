import { useState } from "react";
import {
  ArrowRight,
  User,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  FileText,
  MessageSquare,
} from "lucide-react";

// --- REPLACE THESE IMPORTS WITH YOUR ACTUAL IMAGE PATHS ---
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
    subject: "",
    message: "",
  });

  // Default to false so it opens on click
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    setIsDropdownOpen(false); // Close dropdown on select
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setErrorMessage("Please fill in your Name, Phone Number, Email, and Message.");
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
      {/* 1. Dark Brown Organic Wave (Pushed down slightly on mobile to fit text better) */}
      <div className="pointer-events-none absolute left-0 top-8 z-0 select-none sm:top-0 lg:top-0">
        <img
          src={brownCurveBg}
          alt=""
          className="h-auto w-[100vw] max-w-[500px] object-contain object-top-left opacity-95 sm:w-[80vw] sm:max-w-[700px] lg:w-[58vw] lg:max-w-[860px] xl:w-[54vw] xl:max-w-[940px]"
        />
      </div>

      {/* 2. Architectural Café Sketch (Reduced opacity on mobile) */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full select-none overflow-hidden sm:w-[80%] lg:w-[55%] xl:w-[50%]">
        <img
          src={formBgSketch}
          alt=""
          className="h-full w-full object-cover object-top-left opacity-20 mix-blend-multiply sm:object-center lg:opacity-50"
        />
      </div>

      {/* 3. Top-Left Leaves */}
      <div className="pointer-events-none absolute -left-12 -top-12 z-20 w-36 select-none sm:-left-16 sm:-top-16 sm:w-44 lg:-left-20 lg:-top-20 lg:w-56">
        <img
          src={greenLeavesBranch}
          alt=""
          className="w-full rotate-140 object-contain"
        />
      </div>

      {/* 4. Bottom-Right Leaves */}
      <div className="pointer-events-none absolute -bottom-12 -right-12 z-20 w-40 select-none sm:-bottom-16 sm:-right-16 sm:w-52 lg:-bottom-20 lg:-right-20 lg:w-64">
        <img
          src={greenLeavesBranch}
          alt=""
          className="w-full -rotate-40 object-contain"
        />
      </div>

      {/* 5. Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          
          {/* Left Column: Heading & Chai Glass */}
          <div className="flex flex-col justify-between pt-8 sm:pt-6 lg:col-span-5 lg:min-h-[500px] lg:pt-2 xl:min-h-[540px]">
            <div className="max-w-[420px]">
              <h2 className="font-thunder text-4xl uppercase leading-[0.92] tracking-[-0.01em] text-[#F6EEDF] sm:text-5xl lg:text-[3.8rem] xl:text-[4.4rem]">
                WE&apos;D LOVE TO HEAR
                <br />
                FROM YOU!
              </h2>

              <p className="mt-4 font-mona text-sm leading-relaxed text-[#F6EEDF]/85 sm:mt-5 sm:text-base">
                Have a Question, suggestion or just want to share your Thatha
                Tea experience? Drop us a message.
              </p>
            </div>

            {/* Steaming Chai Asset (Hidden on mobile) */}
            <div className="pointer-events-none mt-8 hidden justify-center lg:flex lg:justify-start lg:mt-6">
              <img
                src={teaGlassWithLeaves}
                alt="Steaming Chai with aromatic tea leaves"
                className="w-48 object-contain drop-shadow-2xl sm:w-56 lg:w-64 xl:w-72"
              />
            </div>
          </div>

          {/* Right Column: Floating Form Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[32px] border border-[#7D6451]/15 bg-[#FEF0DE] p-6 shadow-2xl sm:rounded-[38px] sm:p-9 lg:p-10 xl:p-11">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="h-16 w-16 text-[#A76024]" />
                  <h3 className="mt-4 font-thunder text-3xl uppercase tracking-wider text-[#2C1810]">
                    Thank You!
                  </h3>
                  <p className="mt-2 max-w-sm font-mona text-sm text-[#2C1810]/80">
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
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-6 cursor-pointer rounded-xl bg-[#A76024] px-6 py-2.5 font-mona text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#8D4A15]"
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
                    <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 p-3 font-mona text-xs text-red-700">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#A6998B]" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="h-[54px] w-full rounded-[18px] border border-[#7D6451] bg-transparent py-3 pl-12 pr-4 font-mona text-sm text-[#2C1810] placeholder:text-[#A6998B] transition-all focus:border-[#A76024] focus:bg-white/40 focus:outline-none"
                      />
                    </div>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#A6998B]" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                        className="h-[54px] w-full rounded-[18px] border border-[#7D6451] bg-transparent py-3 pl-12 pr-4 font-mona text-sm text-[#2C1810] placeholder:text-[#A6998B] transition-all focus:border-[#A76024] focus:bg-white/40 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & City */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#A6998B]" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        className="h-[54px] w-full rounded-[18px] border border-[#7D6451] bg-transparent py-3 pl-12 pr-4 font-mona text-sm text-[#2C1810] placeholder:text-[#A6998B] transition-all focus:border-[#A76024] focus:bg-white/40 focus:outline-none"
                      />
                    </div>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-4.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#A6998B]" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City / Location"
                        className="h-[54px] w-full rounded-[18px] border border-[#7D6451] bg-transparent py-3 pl-12 pr-4 font-mona text-sm text-[#2C1810] placeholder:text-[#A6998B] transition-all focus:border-[#A76024] focus:bg-white/40 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 3: Enquiry Type (Dropdown) */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mona text-sm font-semibold text-[#50443A]">
                      Enquiry Type
                    </label>
                    <div className="rounded-[18px] border border-[#7D6451] bg-transparent p-4 transition-all sm:p-5 relative z-20">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex w-full cursor-pointer items-center justify-between text-left font-mona text-sm"
                      >
                        <span
                          className={
                            formData.enquiryType
                              ? "font-medium text-[#50443A]"
                              : "text-[#A6998B]"
                          }
                        >
                          {formData.enquiryType || "Choose a category"}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-[#7D6451] transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Options */}
                      {isDropdownOpen && (
                        <div className="absolute left-0 top-full mt-2 w-full rounded-[18px] border border-[#7D6451] bg-[#FEF0DE] p-4 shadow-xl sm:p-5">
                          <div className="flex flex-col gap-3.5">
                            {ENQUIRY_CATEGORIES.map((cat) => (
                              <button
                                key={cat}
                                type="button"
                                onClick={() => handleSelectCategory(cat)}
                                className={`flex w-full cursor-pointer items-center py-1 text-left font-mona text-sm transition-colors ${
                                  formData.enquiryType === cat
                                    ? "font-semibold text-[#A76024]"
                                    : "text-[#807970] hover:text-[#2C1810]"
                                }`}
                              >
                                <span>{cat}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Subject */}
                  <div className="relative">
                    <FileText className="pointer-events-none absolute left-4.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-[#A6998B]" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="h-[54px] w-full rounded-[18px] border border-[#7D6451] bg-transparent py-3 pl-12 pr-4 font-mona text-sm text-[#2C1810] placeholder:text-[#A6998B] transition-all focus:border-[#A76024] focus:bg-white/40 focus:outline-none"
                    />
                  </div>

                  {/* Row 5: Message */}
                  <div className="relative">
                    <MessageSquare className="pointer-events-none absolute left-4.5 top-5 h-4.5 w-4.5 text-[#A6998B]" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      required
                      rows={4}
                      className="w-full resize-none rounded-[18px] border border-[#7D6451] bg-transparent py-4 pl-12 pr-4 font-mona text-sm text-[#2C1810] placeholder:text-[#A6998B] transition-all focus:border-[#A76024] focus:bg-white/40 focus:outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group inline-flex h-[45px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#A76024] px-6 py-2.5 font-mona text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#8D4A15] hover:shadow-lg active:scale-95 disabled:opacity-50"
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