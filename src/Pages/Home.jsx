import React from 'react'

import Hero from '../Components/Hero'
// import About from '../Components/About'

import Services from '../Components/Services'
import Testimonials from '../Components/Testimonials'
import WhyChoose from '../Components/WhyChoose'
import FAQ from '../Components/FAQ'
import Achievement from '../Components/Achievement'
import Contact from './Contact'

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Testimonials />
            <Achievement/>
            <Contact/>
            <WhyChoose />
            <FAQ/>

        </div>
    )
}

export default Home