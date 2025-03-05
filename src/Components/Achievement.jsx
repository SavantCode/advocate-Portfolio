import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaBalanceScale, FaBriefcase, FaTrophy } from "react-icons/fa";

const Achievement = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* 🔹 Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-yellow-400 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Achievements & Experience
        </motion.h2>

        {/* 🔹 Achievements Grid (Mobile → 1 Col, Tablet → 2 Col, Desktop → 3 Col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AchievementCard icon={<FaBalanceScale />} count={500} label="Cases Handled" />
          <AchievementCard icon={<FaBriefcase />} count={15} label="Years of Experience" />
          <AchievementCard icon={<FaTrophy />} count={10} label="Legal Awards" />
        </div>
      </div>
    </section>
  );
};

/* 🔥 Reusable Achievement Card (Now with better responsiveness) */
const AchievementCard = ({ icon, count, label }) => (
  <div className="flex flex-col items-center p-6 rounded-lg shadow-md bg-gray-800 border border-gray-700">
    <div className="text-5xl md:text-6xl text-yellow-400 mb-4">{icon}</div>
    <h3 className="text-3xl md:text-4xl font-bold text-white">
      <CountUp start={0} end={count} duration={3} />+
    </h3>
    <p className="text-lg md:text-xl text-gray-400 mt-2">{label}</p>
  </div>
);

export default Achievement;
