import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa"; // Dropdown icon

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqList = [
    { question: "How do I schedule a consultation?", answer: "You can schedule a consultation by calling our office or filling out the contact form on our website." },
    { question: "What are your legal fees?", answer: "Our fees depend on the complexity of your case. We provide transparent pricing during the initial consultation." },
    { question: "Do you handle High Court cases?", answer: "Yes, we specialize in High Court cases, including civil, criminal, and corporate matters." },
    { question: "What documents do I need to bring for my case?", answer: "It's best to bring any relevant legal documents, contracts, or evidence related to your case." },
    { question: "Can I get legal advice before filing a case?", answer: "Absolutely! We offer expert legal consultations to discuss your situation before taking legal action." },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* ✅ Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-white mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* ✅ FAQ List */}
        <div className="space-y-6 text-left">
          {faqList.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-5 rounded-lg shadow-lg cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semiboldtext-white">{faq.question}</h3>
                <FaChevronDown
                  className={`text-white transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-300">{faq.answer}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
