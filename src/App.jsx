import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import BookAppointment from './Pages/BookAppointment';
import About from './Pages/About';
import Practice from './Pages/Practice';
import Footer from './Components/Footer'; 

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/about" element={<About />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
