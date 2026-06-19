import React from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
    <div>
        <nav className='fixed top-0 left-0 w-full z-50 bg-[#0F172A]/90 backdrop-blur-md flex items-center justify-between px-[6vw] h-14 border-b border-white/5 shadow-md'>            
           <div className="flex items-center gap-3">
                <div className="bg-white p-1 rounded-md flex items-center justify-center h-10 w-10 shadow-sm">
                    <img
                    src={logo}
                    alt="Sarthak Care Clinic"
                    className="h-full w-full object-contain rounded"
                    />
                </div>

                <div>
                    <h2 className="text-white font-bold text-lg leading-none">
                    Sarthak Care
                    </h2>

                    <p className="text-cyan-400 text-xs font-semibold mt-0.5 uppercase tracking-wider">
                    Clinic
                    </p>
                </div>

            </div>

            
            <div className='hidden md:flex gap-6'>
                <a
                  className='text-slate-300 hover:text-cyan-400 text-sm font-medium transition-all duration-200 hover:scale-105'
                  href='#home'
                >
                  Home
                </a>
                
                <a
                  className='text-slate-300 hover:text-cyan-400 text-sm font-medium transition-all duration-200 hover:scale-105'
                  href='#doctors'
                >
                  Our Doctors
                </a>
                
                <a
                  className='text-slate-300 hover:text-cyan-400 text-sm font-medium transition-all duration-200 hover:scale-105'
                  href='#services'
                >
                  Services
                </a>
                
                <a
                  className='text-slate-300 hover:text-cyan-400 text-sm font-medium transition-all duration-200 hover:scale-105'
                  href='#reviews'
                >
                  Reviews
                </a>
                
                <a
                  className='text-slate-300 hover:text-cyan-400 text-sm font-medium transition-all duration-200 hover:scale-105'
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