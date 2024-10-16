"use client";

import { faqs } from "../../../../db/data";
import { useState } from "react";

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full p-4 text-left text-gray-700 font-medium"
            >
              <span>{faq.questions}</span>
              <svg
                className={`w-5 h-5 transition-transform transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
              style={{ maxHeight: activeIndex === index ? "500px" : "0" }}
            >
              <div className="p-4 text-gray-600 bg-gray-50">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqAccordion;
