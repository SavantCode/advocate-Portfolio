import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../assets/lawyer.avif"; // Add your client's photo here
import Achievement from '../Components/Achievement'


const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeInOut" } },
};

const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-around min-h-screen px-10 py-16 bg-gradient-to-b from-[#fdfcf8] to-[#f8f6f2] text-gray-900 font-poppins">
      {/* Profile Photo */}
      <motion.div
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        className="w-96 h-96 rounded-full overflow-hidden shadow-lg"
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
        className="max-w-lg text-center md:text-left"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Advocate Branjendra Singh Kushwaha
        </h1>
        <h3 className="text-2xl font-medium text-gray-600 mb-5">
          Madhya Pradesh High Court
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          With over 15 years of extensive legal experience, Advocate [Client’s Name] 
          has been providing expert legal counsel in the Madhya Pradesh High Court. 
          His expertise spans across various domains, including <b>civil law, criminal defense, corporate law, and family disputes</b>.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Passionate about justice and client advocacy, he has successfully represented 
          numerous high-profile cases, ensuring fairness and legal integrity. His strategic 
          legal acumen and unwavering dedication have earned him a reputation for being a 
          trusted and results-driven legal expert.
        </p>
      </motion.div>
    </div>
    <Achievement/>
    </div>
  );
};

export default About;
