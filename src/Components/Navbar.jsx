import React, { useState } from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: "Home",        href: "#home"     },
    { label: "Our Doctors", href: "#doctors"  },
    { label: "Services",    href: "#services" },
    { label: "Reviews",     href: "#reviews"  },
    { label: "Contact Us",  href: "#contact"  },
  ]

  return (
    <nav className='nav-enter fixed top-0 left-0 w-full z-50 bg-[#0F172A]/95
                    backdrop-blur-md border-b border-white/5 shadow-md'>

      {/* Main bar */}
      <div className='flex items-center justify-between px-[6vw] h-14'>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-md flex items-center justify-center
                          h-10 w-10 shadow-sm hover:scale-105 transition-transform duration-300">
            <img
              src={logo}
              alt="Sarthak Care Clinic"
              className="h-full w-full object-contain rounded"
            />
          </div>
          <div>
            <h2 className="text-white font-bold text-lg leading-none">Sarthak Care</h2>
            <p className="text-cyan-400 text-xs font-semibold mt-0.5 uppercase tracking-wider">
              Clinic
            </p>
          </div>
        </div>

        {/* Desktop links */}
        <div className='hidden md:flex items-center gap-6'>
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
              className='text-slate-300 hover:text-cyan-400 text-sm font-medium
                         transition-all duration-200 hover:scale-105
                         opacity-0 animate-fade-up'
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:8800755448"
            className='opacity-0 animate-fade-up delay-700 bg-cyan-500 hover:bg-cyan-600
                       text-white text-sm font-semibold px-4 py-1.5 rounded-full
                       transition-all duration-200 hover:-translate-y-0.5
                       shadow-md hover:shadow-cyan-500/30'
          >
            Book Appointment
          </a>
        </div>

        {/* Hamburger — mobile only */}
        {/* Hamburger — mobile only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden flex flex-col justify-center items-center
                       w-10 h-10 gap-1.5 rounded-lg hover:bg-white/10
                       transition-all duration-200 z-50'
          >
            <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300
                              ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300
                              ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300
                              ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className='flex flex-col px-[6vw] py-4 gap-1 bg-[#0F172A]
                  border-t border-white/5'>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className='text-slate-300 hover:text-cyan-400 hover:bg-white/5
                         text-sm font-medium py-2.5 px-3 rounded-lg
                         transition-all duration-200'
            >
              {link.label}
            </a>
          ))}

          {/* Book Appointment CTA */}
          <a
            href="tel:8800755448"
            onClick={() => setIsOpen(false)}
            className='mt-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm
                       font-semibold px-4 py-2.5 rounded-full text-center
                       transition-all duration-200 shadow-md'
          >
            Book Appointment
          </a>
        </div>
      </div>

    </nav>
  )
}

export default Navbar