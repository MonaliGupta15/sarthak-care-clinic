import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Review from './Components/Review'
import Footer from './Components/Footer'
import Feedback from './Components/Feedback'
import ContactUs from './Components/ContactUs'
import OurDoctor from './Components/OurDoctor'
import OurService from './Components/OurService'
import { FaCalendarCheck } from "react-icons/fa";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <OurDoctor/>
      <OurService/>
      <Review/>
      <Feedback/>
      <ContactUs/>
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-50 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-cyan-500/40 flex items-center gap-2 transition-all duration-300 hover:scale-105"
      >
        <FaCalendarCheck />
      <span className="hidden sm:inline">
        Book Appointment
      </span>
      </a>
      <Footer/>

    </div>
  )
}

export default App