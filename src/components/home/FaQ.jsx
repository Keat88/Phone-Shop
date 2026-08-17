import  { useState } from "react";

const FaQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqsData = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards (Visa, MasterCard, American Express), digital wallets, and secure online payment options.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard delivery typically takes 2-5 business days. Express shipping options are available at checkout.",
    },
    {
      question: "Are all products original with warranty?",
      answer:
        "Yes, 100% of our products are genuine and come with official brand manufacturer warranties.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 14-day hassle-free return policy for unused items in original packaging.",
    },
    {
      question: "How can I track my order status?",
      answer:
        "Once your order is shipped, you will receive an email with a tracking code to follow your package in real time.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* Badge & Header */}
        <span className="inline-block bg-orange-50 text-orange-500 border border-orange-200/60 text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3">
          FAQ
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mt-3 max-w-lg leading-relaxed">
          Everything you need to know about our products, delivery, warranties, and store policies.
        </p>

       
        <div className="w-full mt-10 flex flex-col gap-3 text-left">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-lg transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-orange-300 bg-orange-50/20 shadow-sm"
                    : "border-gray-100 bg-gray-50/50 hover:border-gray-200 hover:bg-gray-50"
                }`}
              >
                {/* Header Button */}
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 text-left cursor-pointer focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span
                    className={`text-sm sm:text-base font-semibold transition-colors duration-200 ${
                      isOpen ? "text-orange-400" : "text-gray-900"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "bg-orange-400 border-orange-400 text-white rotate-180"
                        : "bg-white border-gray-200 text-gray-500"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>

                {/* Animated Body Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-5">
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1 border-t border-orange-100/60">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaQ;