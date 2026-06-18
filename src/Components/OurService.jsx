import React from 'react'

const services = [
  {
    icon: "❤️",
    title: "Cardiology",
    description: "Diagnosis and treatment of heart-related conditions."
  },
  {
    icon: "👩",
    title: "Gynecology",
    description: "Complete women's healthcare and consultation."
  },
  {
    icon: "🧪",
    title: "Lab Tests",
    description: "Accurate and reliable diagnostic services."
  },
  {
    icon: "📋",
    title: "Health Checkups",
    description: "Preventive health screenings and wellness plans."
  },
  {
    icon: "💊",
    title: "Chronic Disease Care",
    description: "Management of diabetes, hypertension and more."
  },
  {
    icon: "🩺",
    title: "Preventive Care",
    description: "Regular checkups to maintain long-term health."
  }
];
const OurService = () => {
  return (
  <section
       id="services"
       className="scroll-mt-20 py-24 bg-gradient-to-b from-white to-cyan-50"
>        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="text-5xl font-bold text-slate-800 mt-3">
            Healthcare Services We Offer
          </h2>

          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Comprehensive healthcare solutions delivered by experienced specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-cyan-500"              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-3xl mb-6">
                  {service.icon}
                </div>
            
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {service.title}
                </h3>
            
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
            
                <p className="mt-6 text-cyan-600 font-semibold">
                  Expert Care Available
                </p>
              </div>
            ))}
        </div>

    </section>
  )
}

export default OurService