import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  return (
<section className="py-16 px-6 bg-gray-900 text-white text-center md:py-16">

      <motion.h2
        className="text-3xl sm:text-4xl font-semibold text-yellow-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Contact Me
      </motion.h2>
      <p className="mt-2 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
        Get in touch for legal assistance or inquiries.
      </p>

      {/* Contact Form & Info */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
        {/* Contact Form */}
        <motion.form
          className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          action="https://formsubmit.co/ca3a0db8922c09fb9b5aaee2871f03ca"
          method="POST"
          target="_blank"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white text-sm sm:text-base outline-none border border-gray-600 focus:border-yellow-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white text-sm sm:text-base outline-none border border-gray-600 focus:border-yellow-400"
          />
          <textarea
            rows="4"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white text-sm sm:text-base outline-none border border-gray-600 focus:border-yellow-400"
          ></textarea>

          {/* Hidden Fields for Formsubmit */}
          <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" /> {/* Optional redirect URL */}
          <input type="hidden" name="_subject" value="New Contact Form Submission" />

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 rounded-lg transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {/* Contact Details */}
        <motion.div
          className="flex flex-col space-y-5 text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl border border-gray-700">
            <FaPhone className="text-yellow-500 text-lg sm:text-xl" />
            <span className="text-sm sm:text-base text-gray-300">
              +91 98765 43210
            </span>
          </div>
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl border border-gray-700">
            <FaEnvelope className="text-yellow-500 text-lg sm:text-xl" />
            <span className="text-sm sm:text-base text-gray-300">
              advbrajendra@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl border border-gray-700">
            <FaMapMarkerAlt className="text-yellow-500 text-lg sm:text-xl" />
            <span className="text-sm sm:text-base text-gray-300">
              Chamber No. 5, District Court, New Delhi
            </span>
          </div>
        </motion.div>
      </div>

     
    </section>
  );
};

export default Contact;
