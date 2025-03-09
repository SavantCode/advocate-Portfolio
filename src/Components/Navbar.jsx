import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaBalanceScale } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo / Name - Responsive Handling */}
        <div className="flex items-center space-x-2">
          <FaBalanceScale className="text-yellow-400 text-3xl" />
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
            Adv. <span className="hidden sm:inline">Brajendra Singh Kushwaha</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          
          
          <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
          <li><Link to="/book-appointment" className="hover:text-yellow-400">Book Appointment</Link></li>
        </ul>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-center text-lg py-4 space-y-4">
          <li><Link to="/" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link></li>
          
          <li><Link to="/contact" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link to="/book-appointment" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Book Appointment</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
