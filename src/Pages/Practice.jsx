import React from "react";
import { motion } from "framer-motion";
import { FaGavel, FaBalanceScale, FaBuilding, FaUsers, FaLandmark, FaShieldAlt } from "react-icons/fa";

const practiceAreas = [
  { icon: <FaGavel />, title: "Criminal Defense", desc: "Expert defense in criminal trials and appeals." },
  { icon: <FaBalanceScale />, title: "Civil Litigation", desc: "Handling disputes related to property, contracts, and family law." },
  { icon: <FaBuilding />, title: "Corporate Law", desc: "Legal advisory for businesses, contracts, and commercial disputes." },
  { icon: <FaUsers />, title: "Family Law", desc: "Divorce, child custody, domestic violence protection." },
  { icon: <FaLandmark />, title: "Constitutional Law", desc: "Writ petitions, fundamental rights, and public interest litigation." },
  { icon: <FaShieldAlt />, title: "Cyber Law", desc: "Online fraud, hacking, and intellectual property cases." },
];

const Practice = () => {
  return (
    <div className="bg-gray-100 text-gray-900 py-16">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/path-to-legal-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Expert Legal Services</h1>
          <p className="text-lg text-gray-300 mt-3 max-w-2xl mx-auto">
            Providing professional legal representation in Madhya Pradesh High Court across various legal domains.
          </p>
          <button className="mt-5 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold text-lg rounded-lg hover:bg-yellow-400 transition">
            Get a Consultation
          </button>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Practice Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-yellow-500 text-4xl">{area.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{area.title}</h3>
              <p className="text-gray-600 mt-2">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          <details className="bg-gray-800 p-4 rounded-lg mb-4 cursor-pointer">
            <summary className="font-semibold text-lg">How do I schedule a consultation?</summary>
            <p className="mt-2 text-gray-300">You can schedule a consultation by calling our office or filling out the contact form below.</p>
          </details>
          <details className="bg-gray-800 p-4 rounded-lg mb-4 cursor-pointer">
            <summary className="font-semibold text-lg">What are your legal fees?</summary>
            <p className="mt-2 text-gray-300">Legal fees depend on the complexity of the case. Contact us for a customized quote.</p>
          </details>
          <details className="bg-gray-800 p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold text-lg">Do you handle High Court cases?</summary>
            <p className="mt-2 text-gray-300">Yes, Advocate Brajendra Singh Kushwaha specializes in High Court cases.</p>
          </details>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">If you need legal assistance, feel free to contact us for a consultation.</p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold text-lg rounded-lg hover:bg-yellow-400 transition">
          Contact Now
        </button>
      </section>
    </div>
  );
};

export default Practice;
