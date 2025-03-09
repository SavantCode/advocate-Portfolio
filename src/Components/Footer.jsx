import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGavel } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 flex items-center">
            Adv. Brajendra Singh
          </h2>
          <p className="mt-3 text-sm">
            Experienced advocate providing expert legal services in Criminal, Civil, Corporate, and Family Law.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="/" className="hover:text-yellow-500 transition">Home</a></li>
            <li><a href="/contact" className="hover:text-yellow-500 transition">Contact</a></li>
            <li><a href="/book-appointment" className="hover:text-yellow-500 transition">Book Appointment</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Contact Info</h3>
          <ul className="mt-3 space-y-3">
            <li className="flex items-center">
              <FaPhoneAlt className="text-yellow-500 mr-2" />
              +91 98765 43210
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-yellow-500 mr-2" />
              advbrajendra@gmail.com
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="text-yellow-500 mr-2" />
              Chamber No. 5, District Court, New Delhi
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400">Follow Me</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-10"></div>

      {/* Copyright Text */}
      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} Adv. Brajendra Singh. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
