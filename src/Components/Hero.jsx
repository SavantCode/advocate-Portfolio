import React from "react";
import { motion } from "framer-motion";
import { FaGavel } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white py-20 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between">
      {/* Left: Hero Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold text-yellow-400 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Adv. Brajendra Singh Kushwaha  
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-300 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Trusted & Experienced Advocate in Criminal, Corporate, Civil & Family Law.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-yellow-500 text-gray-900 font-semibold text-lg rounded-lg hover:bg-yellow-600 transition"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Get Legal Advice
        </motion.a>
      </div>

      {/* Right: Lawyer Image / Legal Illustration */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img /// put the advocate image here
          src="https://images.unsplash.com/photo-1624797432677-6f803a98acb3?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Advocate Brajendra Singh Kushwaha"
          className="rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Subtle Background Elements */}
      <div className="absolute top-10 left-10 text-gray-700 opacity-20 text-6xl">
        <FaGavel />
      </div>
      <div className="absolute bottom-10 right-10 text-gray-700 opacity-20 text-6xl">
        ⚖️
      </div>
    </section>
  );
};

export default Hero;
