import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

// Testimonials data
const testimonials = [
  {
    name: "Rahul Sharma",
    feedback:
      "Adv. Brajendra Singh Kushwaha provided exceptional legal support. His strategic approach helped me win my case efficiently.",
    profession: "Business Owner",
  },
  {
    name: "Anjali Verma",
    feedback:
      "Very knowledgeable and professional lawyer. He explained everything clearly and kept me informed throughout my case.",
    profession: "Software Engineer",
  },
  {
    name: "Vikram Patel",
    feedback:
      "Highly recommended! His expertise in corporate law is outstanding, and he ensured the best outcome for my company.",
    profession: "Entrepreneur",
  },
  {
    name: "Pooja Mehra",
    feedback:
      "His approach is client-friendly and honest. He provided me with the best legal solutions, and I'm really grateful.",
    profession: "Doctor",
  },
  {
    name: "Sanjay Mehta",
    feedback:
      "Outstanding legal knowledge and professionalism. He handled my business case with great expertise and efficiency.",
    profession: "Startup Founder",
  },
  {
    name: "Meera Kapoor",
    feedback:
      "A highly skilled lawyer who provides clear and strategic legal advice. I felt confident throughout the entire process.",
    profession: "Marketing Manager",
  },

];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white text-center">
      {/* Section Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-yellow-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        What My Clients Say
      </motion.h2>
      

      {/* Testimonials Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="text-yellow-500 text-3xl mb-4 mx-auto" />
            
            {/* Feedback */}
            <p className="text-gray-300 italic">"{testimonial.feedback}"</p>

            {/* Client Info */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-yellow-400">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-400">{testimonial.profession}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
