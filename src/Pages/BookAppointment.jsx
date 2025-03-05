import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { InlineWidget } from "react-calendly";

const BookAppointment = () => {
  return (
    <section className="py-16 px-4 sm:px-12 bg-gray-900 text-white text-center min-h-screen">
      {/* Page Header */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-yellow-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Schedule a Legal Consultation
      </motion.h2>
      <p className="mt-3 text-lg text-gray-300 max-w-2xl mx-auto">
        Book a one-on-one consultation with <span className="text-yellow-400 font-semibold">Adv. Brajendra Singh Kushwaha</span> to discuss your legal matters in detail.
      </p>

      {/* Calendly Inline Widget (No Scrollbar, Responsive) */}
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-yellow-400 flex items-center justify-center">
            <FaCalendarAlt className="mr-2" /> Choose a Time Slot
          </h3>
          <div className="mt-4">
            <InlineWidget
              url="https://calendly.com/rahulkcoding2023/30min"
              styles={{
                height: "750px", // Adjusts dynamically, no scrollbar
                minHeight: "500px", // Works well for mobile
              }}
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-12 max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg text-left">
        <h3 className="text-xl font-semibold text-yellow-400">Need Assistance?</h3>
        <p className="text-gray-300 mt-2">
          If you have any issues booking your appointment, feel free to reach out:
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center">
            <FaPhoneAlt className="text-yellow-500 mr-2" />
            <span>+91 98765 43210</span>
          </li>
          <li className="flex items-center">
            <FaEnvelope className="text-yellow-500 mr-2" />
            <span>advbrajendra@gmail.com</span>
          </li>
          <li className="flex items-center">
            <FaMapMarkerAlt className="text-yellow-500 mr-2" />
            <span>Chamber No. 5, District Court, New Delhi</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BookAppointment;
