import React from "react";
import { FaGavel, FaBriefcase, FaFileContract, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

// Define the practice areas with icons
const services = [
  {
    icon: <FaGavel size={40} />,
    title: "Criminal Law",
    desc: "Expert defense in criminal cases, ensuring justice prevails.",
  },
  {
    icon: <FaBriefcase size={40} />,
    title: "Corporate Law",
    desc: "Handling corporate disputes, contracts, and legal compliance.",
  },
  {
    icon: <FaFileContract size={40} />,
    title: "Civil Litigation",
    desc: "Resolving civil disputes efficiently and legally.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Family Law",
    desc: "Expert legal support for divorce, child custody & family matters.",
  },
];

const PracticeAreas = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-gray-900 text-white text-center">
      {/* Section Title with Animation */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-yellow-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Practice Areas
      </motion.h2>
      <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
        Adv. Brajendra Singh Kushwaha specializes in multiple legal domains to
        provide justice and expert legal solutions.
      </p>

      {/* Responsive Service Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 sm:p-8 rounded-xl shadow-lg bg-gradient-to-r from-gray-700 to-gray-600 transition-all duration-300 border border-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15, delay: index * 0.2 }}
            whileHover={{
                scale: 1.08,
                transition: { duration: 0.15, ease: "easeOut" }, // Smooth in and out
              }}
              
          >
            {/* Icon */}
            <div className="text-yellow-500 flex justify-center">{service.icon}</div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold mt-4 text-yellow-400">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;
