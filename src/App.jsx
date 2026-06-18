import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Review from './Components/Review'
import Footer from './Components/Footer'
import Feedback from './Components/Feedback'
import ContactUs from './Components/ContactUs'
import OurDoctor from './Components/OurDoctor'
import OurService from './Components/OurService'


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='pt-16'>
        <Hero/>
      </div>
      <OurDoctor/>
      <OurService/>
      <Review/>
      <Feedback/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App