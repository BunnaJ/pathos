// pages/faq.js
'use client'
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "How do I create an account?",
    answer: "Creating an account is simple! Just click on the 'Sign Up' button on the homepage and fill out the required information.",
  },
  {
    question: "What is the refund policy?",
    answer: "Our refund policy allows full refunds within 14 days of purchase, provided that the service has not been used.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our customer support team by emailing support@example.com or by calling our hotline at +123 456 7890.",
  },
  {
    question: "Where can I find the latest updates?",
    answer: "Stay updated by following our blog and social media channels where we post regular updates and announcements.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl space-y-8">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 max-w-lg mx-auto mb-6">
        Here are some of the most common questions we receive. Click on each question to reveal the answer.
      </p>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-lg font-semibold text-gray-800">{item.question}</h2>
              <FaChevronDown
                className={` text-primary transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <p className="mt-4 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
