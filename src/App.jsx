import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import BookAppointment from './Pages/BookAppointment';
import NotFound from './Components/NotFound';

import Footer from './Components/Footer'; 

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-appointment" element={<BookAppointment />} />


        {/* Catch-all route for 404 page */}
        <Route path="*" element={<NotFound />} /> 


        
        
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
