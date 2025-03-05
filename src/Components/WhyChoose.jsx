import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

// Key strengths
const strengths = [
  "10+ Years of Legal Expertise",
  "High Success Rate in Complex Cases",
  "Personalized & Client-Focused Approach",
  "Transparent and Honest Legal Advice",
  "Efficient Case Handling & Timely Solutions",
];

const WhyChoose = () => {
  return (
    <section className="py-16 px-6 sm:px-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white text-center">
      {/* Section Title with Gold Gradient */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why Choose Me?
      </motion.h2>
      <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        A dedicated legal expert providing strategic counsel, strong advocacy, and client-focused solutions.
      </p>

      {/* Bullet Points Section */}
      <div className="mt-10 max-w-3xl mx-auto text-left space-y-5">
        {strengths.map((strength, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3 text-lg text-gray-200"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <FaCheckCircle className="text-yellow-400 text-xl flex-shrink-0" />
            {strength}
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <a
          href="/contact"
          className="relative px-7 py-3 sm:px-9 sm:py-4 bg-yellow-500 text-gray-900 font-semibold text-lg sm:text-xl rounded-lg shadow-md transition-all hover:bg-yellow-600 hover:shadow-lg hover:-translate-y-1"
        >
          Get Legal Consultation
          {/* Glow Effect */}
          <span className="absolute inset-0 bg-yellow-400 opacity-30 blur-xl rounded-lg"></span>
        </a>
      </motion.div>
    </section>
  );
};

export default WhyChoose;
