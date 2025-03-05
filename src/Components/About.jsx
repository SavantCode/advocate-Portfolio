import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-16 text-center px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Your Advocate</h2>
      <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
        Adv. Brajendra Singh Kushwaha is a highly experienced legal professional
        specializing in criminal defense, corporate law, and civil litigation.
        With over 10+ years of practice, he has successfully represented numerous clients in complex cases.
      </p>
      <button className="mt-6 px-6 py-3 bg-gray-900 text-white font-semibold text-lg rounded-lg hover:bg-gray-700 transition">
        Learn More
      </button>
    </section>
  );
};

export default About;
