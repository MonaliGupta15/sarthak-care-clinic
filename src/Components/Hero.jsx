import React from "react";
import doctor1 from "../assets/doctor1.jpeg";
import doctor2 from "../assets/doctor3.PNG";
import ECGLine from "./ECGLine";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-[#0F172A] via-[#132238] to-cyan-900 overflow-hidden">

      <div className="max-w-7xl mx-auto px-[6vw] pt-6 pb-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium mb-2">
              Trusted Healthcare in Sector 75, Noida
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Expert Care
              <span className="text-cyan-400"> For Your </span>
              Health &
              <span className="text-cyan-400"> Wellbeing</span>
            </h1>
            {/* ECG Animation */}
            <div className="max-w-md mt-4">
                <ECGLine/>
            </div>

            <p className="text-gray-300 text-lg mt-2 max-w-xl leading-relaxed">
              Personalized Cardiology and Gynecology care with experienced
              specialists committed to your health and comfort.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">

              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-4 rounded-full font-semibold transition">
                Book Appointment
              </button>

              <button className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 px-8 py-4 rounded-full font-semibold transition">
                Call Now
              </button>

            </div>

            {/* Trust Cards */}
            <div className="flex gap-6 mt-8 flex-wrap">

              <div className="bg-white/10 backdrop-blur-lg px-6 py-4 rounded-2xl">
                <h3 className="text-cyan-300 text-2xl font-bold">4.9★</h3>
                <p className="text-gray-300 text-sm">Patient Rating</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg px-6 py-4 rounded-2xl">
                <h3 className="text-cyan-300 text-2xl font-bold">2+</h3>
                <p className="text-gray-300 text-sm">Specialists</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg px-6 py-4 rounded-2xl">
                <h3 className="text-cyan-300 text-2xl font-bold">24/7</h3>
                <p className="text-gray-300 text-sm">Care Support</p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">

            <div className="relative">

              {/* Doctor 1 */}
              <div className="bg-white rounded-[30px] shadow-2xl p-4 w-[220px]">
                <img
                  src={doctor1}
                  alt="Dr Mandakini"
                  className="rounded-[20px] w-full h-[240px] object-cover"
                />

                <div className="mt-4">
                  <h3 className="font-bold text-slate-800">
                    Dr. Mandakini
                  </h3>

                  <p className="text-cyan-600 text-sm">
                    Gynecologist
                  </p>
                </div>
              </div>

              {/* Doctor 2 */}
              <div className="absolute top-24 left-42 bg-white rounded-[30px] shadow-2xl p-4 w-[220px]">

                <img
                  src={doctor2}
                  alt="Dr Sujeet"
                  className="rounded-[20px] w-full h-[240px] object-cover"
                />

                <div className="mt-4">
                  <h3 className="font-bold text-slate-800">
                    Dr. Sujeet Narain
                  </h3>

                  <p className="text-cyan-600 text-sm">
                    Cardiologist
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;