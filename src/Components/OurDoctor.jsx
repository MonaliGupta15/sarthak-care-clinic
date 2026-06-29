import React from "react"
import doctor1 from "../assets/doctor1.jpeg"
import doctor2 from "../assets/doctor3.PNG"
import { FaCheckCircle } from "react-icons/fa"
import useScrollAnimation from "../hooks/useScrollAnimation"

const doctors = [
  {
    image: doctor1,
    name: "Dr. Mandakini Kumari",
    role: "Senior Gynecologist & Obstetrician",
    experience: "15+ Years Experience",
    qualification: "MBBS, MD",
    specializations: ["Women's Health", "Pregnancy Care", "Infertility", "Preventive Care"],
  },
  {
    image: doctor2,
    name: "Dr. Sujeet Narain",
    role: "Consultant Cardiologist",
    experience: "20+ Years Experience",
    qualification: "MBBS, MD, DNB (Cardiology)",
    specializations: ["Heart Care", "ECG & Echo", "Hypertension", "Preventive Cardiology"],
  },
]

const OurDoctor = () => {
  const headingRef = useScrollAnimation()
  const card1Ref   = useScrollAnimation()
  const card2Ref   = useScrollAnimation()

  return (
    <section id="doctors" className="py-12 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-[6vw]">

        {/* Heading */}
        <div ref={headingRef} className="text-center mb-8 fade-up">
          <span className="text-cyan-600 font-semibold uppercase tracking-wider text-xs">
            Our Doctors
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mt-2">
            Meet Our Specialists
          </h2>
          <p className="text-gray-600 mt-2 text-sm max-w-xl mx-auto">
            Expert Cardiology and Gynecology care delivered with
            compassion, experience, and a patient-first approach.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Card 1 — slides from left */}
          <div
            ref={card1Ref}
            className="slide-left bg-white rounded-2xl overflow-hidden shadow-lg
                       border border-slate-100 hover:-translate-y-1 hover:shadow-xl
                       transition-all duration-300 flex flex-col md:flex-row"
          >
            <div className="relative md:w-2/5 w-full min-h-[220px] md:min-h-0 shine-wrap">
              <img
                src={doctors[0].image}
                alt={doctors[0].name}
                className="absolute inset-0 w-full h-full object-cover object-top
                           transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1
                              rounded-full shadow text-xs font-semibold text-cyan-700 z-10">
                Specialist
              </div>
            </div>
            <DoctorContent doctor={doctors[0]} />
          </div>

          {/* Card 2 — slides from right */}
          <div
            ref={card2Ref}
            className="slide-right stagger-2 bg-white rounded-2xl overflow-hidden shadow-lg
                       border border-slate-100 hover:-translate-y-1 hover:shadow-xl
                       transition-all duration-300 flex flex-col md:flex-row"
          >
            <div className="relative md:w-2/5 w-full min-h-[220px] md:min-h-0 shine-wrap">
              <img
                src={doctors[1].image}
                alt={doctors[1].name}
                className="absolute inset-0 w-full h-full object-cover object-top
                           transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1
                              rounded-full shadow text-xs font-semibold text-cyan-700 z-10">
                Specialist
              </div>
            </div>
            <DoctorContent doctor={doctors[1]} />
          </div>

        </div>
      </div>
    </section>
  )
}

const DoctorContent = ({ doctor }) => (
  <div className="p-5 flex-1 flex flex-col justify-between">
    <div>
      <h3 className="text-xl lg:text-2xl font-bold text-slate-800">{doctor.name}</h3>
      <p className="text-cyan-600 text-xs font-semibold mt-1">{doctor.role}</p>
      <p className="text-gray-500 text-xs mt-1">{doctor.qualification}</p>

      <div className="mt-3 inline-flex items-center bg-cyan-50 text-cyan-700
                      px-3 py-1 rounded-full text-xs font-medium">
        ⭐ {doctor.experience}
      </div>

      <div className="mt-4">
        <h4 className="font-semibold text-xs text-slate-700 mb-2">Specializations</h4>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {doctor.specializations.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
              <FaCheckCircle className="text-cyan-500 text-[10px]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <button className="mt-5 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2
                       rounded-full text-xs font-semibold transition-all self-start
                       shadow-sm hover:-translate-y-0.5 hover:shadow-cyan-400/30
                       hover:shadow-md active:scale-95">
      Book Appointment
    </button>
  </div>
)

export default OurDoctor