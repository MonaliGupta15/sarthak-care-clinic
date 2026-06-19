import React from 'react'
import { FaHeartbeat, FaFemale, FaFlask, FaFileMedical, FaBriefcaseMedical, FaStethoscope } from 'react-icons/fa'

const services = [
  {
    icon: <FaHeartbeat className="text-cyan-600 text-2xl" />,
    title: "Cardiology",
    description: "Diagnosis and treatment of heart-related conditions."
  },
  {
    icon: <FaFemale className="text-cyan-600 text-2xl" />,
    title: "Gynecology",
    description: "Complete women's healthcare and consultation."
  },
  {
    icon: <FaFlask className="text-cyan-600 text-2xl" />,
    title: "Lab Tests",
    description: "Accurate and reliable diagnostic services."
  },
  {
    icon: <FaFileMedical className="text-cyan-600 text-2xl" />,
    title: "Health Checkups",
    description: "Preventive health screenings and wellness plans."
  },
  {
    icon: <FaBriefcaseMedical className="text-cyan-600 text-2xl" />,
    title: "Chronic Disease Care",
    description: "Management of diabetes, hypertension and more."
  },
  {
    icon: <FaStethoscope className="text-cyan-600 text-2xl" />,
    title: "Preventive Care",
    description: "Regular checkups to maintain long-term health."
  }
];

const OurService = () => {
  return (
    <section
      id="services"
      className="scroll-mt-14 py-12 bg-gradient-to-b from-white to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-[6vw]">
        <div className="text-center mb-8">
          <span className="text-cyan-600 font-semibold uppercase tracking-wider text-xs">
            Our Services
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mt-2">
            Healthcare Services We Offer
          </h2>

          <p className="text-gray-600 mt-2 text-sm max-w-xl mx-auto">
            Comprehensive healthcare solutions delivered by experienced specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
                  className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-[0_15px_40px_rgba(6,182,212,0.25)] hover:-translate-y-1 transition-all duration-300 border border-slate-100 hover:border-cyan-200 flex flex-col justify-between"            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-cyan-50 flex items-center justify-center mb-4 shadow-sm group-hover:bg-cyan-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
                  {service.icon}
                </div>
            
                <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-2">
                  {service.title}
                </h3>
            
                <p className="text-gray-500 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            
              <p className="mt-4 text-cyan-600 text-xs font-semibold hover:text-cyan-700 transition">
                Expert Care Available →
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurService