import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqBg from "../../assets/images/franchaise/fd2c7064-b120-4ac7-9980-ebcece1a7937 1.png";

const faqs = [
  {
    id: "01",
    question: "How much does a franchise require?",
    answer:
      "The investment depends on the model (Kiosk or Dine-In), outlet size, location, and setup requirements. Our team will guide you based on your preferred city and investment range.",
  },
  {
    id: "02",
    question: "Do I need food business experience?",
    answer:
      "No prior experience in the food or beverage industry is required. We provide comprehensive training for you and your staff, covering brewing techniques, kitchen management, hygiene standards, customer service, and POS operations.",
  },
  {
    id: "03",
    question: "Can you help me find a location?",
    answer:
      "Yes! Our experienced real estate and operations team will assist you in identifying, evaluating, and securing high-footfall locations that fit our target demographic and local market viability.",
  },
  {
    id: "04",
    question: "What support do I receive before launch?",
    answer:
      "Before launch, you receive complete store layout design, kitchen equipment sourcing, interior branding guidelines, staff recruitment and training, inventory setup, and launch marketing support.",
  },
  {
    id: "05",
    question: "Is support available after the outlet opens?",
    answer:
      "Absolutely. We provide continuous support including centralized raw material supply, seasonal menu updates, regular quality audits, digital marketing campaigns, and technical support for operations.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First question expanded by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="relative flex min-h-[85svh] w-full items-center overflow-hidden bg-[#F6EDDF] py-20 lg:py-28"
    >
      {/* Background with Tea Glass and Shop Sketch */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={faqBg}
          alt=""
          className="h-full w-full object-cover object-left-bottom opacity-85"
        />
        <div className="absolute inset-0 bg-[#F6EDDF]/40" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-start gap-12 px-6 sm:px-12 lg:grid-cols-12 lg:gap-12 lg:px-16 xl:px-24">
        {/* Left Column: Heading and Intro */}
        <div className="flex flex-col items-center text-center lg:col-span-5 lg:items-start lg:text-left lg:pt-4">
          <h2 className="font-thunder text-4xl font-bold uppercase leading-[0.95] tracking-[-0.01em] text-deep-coffee sm:text-5xl lg:text-6xl xl:text-[4.2rem]">
            Good Questions.
            <br />
            Clear Answers.
          </h2>

          <p className="mt-5 max-w-[380px] font-mona text-sm leading-relaxed text-deep-coffee/80 sm:text-base lg:text-lg">
            Everything you need to know before taking the first step towards a Thatha Tea franchise.
          </p>
        </div>

        {/* Right Column: Accordion Questions */}
        <div className="flex w-full flex-col gap-4 lg:col-span-7">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-2xl bg-white shadow-md shadow-black/5 transition-all duration-300 border border-deep-coffee/5"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-neutral-50/80 sm:p-6"
                >
                  <span className="font-mona text-sm font-semibold tracking-wide text-deep-coffee sm:text-base">
                    {faq.id}. {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F6EEDF] text-deep-coffee transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-caramel text-white" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {/* Animated Collapsible Answer Body */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-deep-coffee/5 px-5 pb-6 pt-3 sm:px-6">
                      <p className="font-mona text-xs leading-relaxed text-deep-coffee/75 sm:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
