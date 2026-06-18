import React from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div>
        <nav className='fixed top-0 left-0 w-full z-50 bg-[#0F172A] flex items-center justify-between px-[6vw] h-16 shadow-lg'>            
           <div className="flex items-center gap-3">
                <img
                src={logo}
                alt="Sarthak Care Clinic"
                className="h-14 w-auto object-contain rounded-lg"
                />

                <div>
                    <h2 className="text-white font-bold text-xl leading-none">
                    Sarthak Care
                    </h2>

                    <p className="text-cyan-400 text-m font-medium mt-0.5">
                    Clinic
                    </p>
                </div>

            </div>

            
            <div className='hidden md:flex gap-8'>
                <a
                  className='text-white/80 text-sm font-medium hover:text-[#00C6FF] transition-colors'
                  href='#home'
                >
                  Home
                </a>
                
                <a
                  className='text-white/80 text-sm font-medium hover:text-[#00C6FF] transition-colors'
                  href='#doctors'
                >
                  Our Doctors
                </a>
                
                <a
                  className='text-white/80 text-sm font-medium hover:text-[#00C6FF] transition-colors'
                  href='#services'
                >
                  Services
                </a>
                
                <a
                  className='text-white/80 text-sm font-medium hover:text-[#00C6FF] transition-colors'
                  href='#reviews'
                >
                  Reviews
                </a>
                
                <a
                  className='text-white/80 text-sm font-medium hover:text-[#00C6FF] transition-colors'
                  href='#contact'
                >
                  Contact Us
                </a>
              </div>

        </nav>
    </div>
  )
}

export default Navbar