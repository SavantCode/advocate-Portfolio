import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../assets/lawyer.avif"; 
import Achievement from "./Achievement";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } },
};

const NewAbout = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 md:px-12 py-16 bg-gradient-to-b from-[#fdfcf8] to-[#f8f6f2] text-gray-900 font-poppins">
      {/* Profile Photo */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg mb-8 lg:mb-0"
      >
        <img
          src={profilePhoto}
          alt="Advocate"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* About Text */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="max-w-xl text-center lg:text-left px-4"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Advocate Brajendra Singh
        </h1>
        <h3 className="text-xl md:text-2xl font-medium text-gray-600 mb-4">
          Madhya Pradesh High Court
        </h3>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          With over 15 years of extensive legal experience, Advocate Brajendra Singh Kushwaha 
          provides expert legal counsel in the Madhya Pradesh High Court. 
          His expertise spans across <b>civil law, criminal defense, corporate law, and family disputes</b>.
        </p>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
          Passionate about justice and client advocacy, he has successfully represented 
          numerous high-profile cases, ensuring fairness and legal integrity. His strategic 
          legal acumen and unwavering dedication make him a trusted and results-driven legal expert.
        </p>
      </motion.div>
    </div>
  );
};

export default NewAbout;
