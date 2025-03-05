import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white text-center">
      {/* Page Title */}
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

      {/* Contact Form & Info (Balanced Layout) */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto items-center">
        {/* Contact Form */}
        <motion.form
          className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-700 text-white text-sm sm:text-base outline-none border border-gray-600 focus:border-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white text-sm sm:text-base outline-none border border-gray-600 focus:border-yellow-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-700 text-white text-sm sm:text-base outline-none border border-gray-600 focus:border-yellow-400"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium py-3 rounded-lg transition"
          >
            Send Message
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

      {/* Google Maps (Optional) */}
      <motion.div
        className="mt-10 w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <iframe
          title="Google Map"
          className="w-full h-56 sm:h-72 md:h-80"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed/v1/place?q=New+Delhi+District+Court&key=YOUR_GOOGLE_MAPS_API_KEY"
          allowFullScreen
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Contact;
