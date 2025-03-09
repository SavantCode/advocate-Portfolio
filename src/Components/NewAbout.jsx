import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../assets/lawyer.avif"; // Add your client's photo here
import Achievement from './Achievement';

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } },
};

const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-around min-h-screen px-6 sm:px-10 py-20 bg-gradient-to-b from-[#fdfcf8] to-[#f8f6f2] text-gray-900 font-poppins">
        
        {/* Profile Photo */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg mt-16 sm:mt-28 md:mt-0"
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
          className="max-w-lg text-center md:text-left mt-8 md:mt-0 px-4"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Advocate Branjendra Singh 
          </h1>
          <h3 className="text-xl sm:text-2xl font-medium text-gray-600 mb-5">
            Madhya Pradesh High Court
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            With over 15 years of extensive legal experience, Advocate [Client’s Name] 
            has been providing expert legal counsel in the Madhya Pradesh High Court. 
            His expertise spans across various domains, including <b>civil law, criminal defense, corporate law, and family disputes</b>.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mt-4">
            Passionate about justice and client advocacy, he has successfully represented 
            numerous high-profile cases, ensuring fairness and legal integrity. His strategic 
            legal acumen and unwavering dedication have earned him a reputation for being a 
            trusted and results-driven legal expert.
          </p>
        </motion.div>
      </div>
      <Achievement />
    </div>
  );
};

export default About;
