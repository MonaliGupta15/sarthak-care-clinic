import React from "react";
import doctor1 from "../assets/doctor1.jpeg";
import doctor2 from "../assets/doctor3.PNG";

const doctors = [
  {
    image: doctor1,
    name: "Dr. Mandakini Kumari",
    role: "Senior Gynecologist & Obstetrician",
    experience: "15+ Years Experience",
    qualification: "MBBS, MD",
    specializations: [
      "Women's Health",
      "Pregnancy Care",
      "Infertility",
      "Preventive Care",
    ],
  },
  {
    image: doctor2,
    name: "Dr. Sujeet Narain",
    role: "Consultant Cardiologist",
    experience: "20+ Years Experience",
    qualification: "MBBS, MD, DNB (Cardiology)",
    specializations: [
      "Heart Care",
      "ECG & Echo",
      "Hypertension",
      "Preventive Cardiology",
    ],
  },
];

const OurDoctor = () => {
  return (
    <section id="doctors" className="py-8 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-[6vw]">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-600 font-semibold uppercase tracking-wider">
            Our Doctors
          </span>

          <h2 className="text-5xl font-bold text-slate-800 mt-3">
            Meet Our Specialists
          </h2>

          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Expert Cardiology and Gynecology care delivered with
            compassion, experience, and a patient-first approach.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid lg:grid-cols-2 gap-10">

          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              {/* Image */}
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-[280px] object-cover object-top"
                />

                <div className="absolute top-5 left-5 bg-white px-4 py-2 rounded-full shadow-lg text-sm font-semibold text-cyan-700">
                  Specialist
                </div>
              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-3xl font-bold text-slate-800">
                  {doctor.name}
                </h3>

                <p className="text-cyan-600 font-semibold mt-2">
                  {doctor.role}
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  {doctor.qualification}
                </p>

                <div className="mt-5 inline-flex items-center bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">
                  ⭐ {doctor.experience}
                </div>

                {/* Specializations */}
                <div className="mt-6">
                  <h4 className="font-semibold text-slate-700 mb-3">
                    Specializations
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {doctor.specializations.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100 text-slate-700 px-3 py-2 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition">
                  Book Appointment
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurDoctor;