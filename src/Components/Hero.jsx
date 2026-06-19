import React from "react";
import doctor1 from "../assets/doctor1.jpeg";
import doctor2 from "../assets/doctor3.PNG";
import ECGLine from "./ECGLine";
import heroBg from '../assets/herobg.avif'

const Hero = () => {
  return (
    <section
        id="home"
        className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden"
    >
        {/* Background Image */}
        <img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/90 via-[#132238]/90 to-cyan-900/90"></div>

          {/* Decorative Glow */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
              <div className="relative max-w-7xl mx-auto px-[6vw] w-full">
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">

            <span className="inline-block self-start px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-3">
              Trusted Healthcare in Sector 75, Noida
            </span>

            <h1 className="text-4xl lg:text-4xl font-bold text-white leading-tight">
              Expert Care
              <span className="text-cyan-400"> For Your </span>
              Health &
              <span className="text-cyan-400"> Wellbeing</span>
            </h1>
            {/* ECG Animation */}
            <div className="max-w-s mt-2">
                <ECGLine/>
            </div>

            <p className="text-gray-300 text-sm mt-3 max-w-lg leading-relaxed">
              Personalized Cardiology and Gynecology care with experienced
              specialists committed to your health and comfort.
            </p>

            <div className="flex flex-wrap gap-3 mt-5">

              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition shadow-md hover:shadow-cyan-500/20">
                Book Appointment
              </button>

              <button className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 px-6 py-2.5 rounded-full text-sm font-semibold transition">
                Call Now
              </button>

            </div>

            {/* Trust Badges */}
            <div className="flex gap-3 mt-6 flex-wrap">

              <div className="bg-white/5 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl flex items-center gap-2">
                <span className="text-yellow-400 text-sm">★</span>
                <div>
                  <span className="text-cyan-300 font-bold text-sm">4.9</span>
                  <span className="text-gray-300 text-xs ml-1">Rating</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl flex items-center gap-2">
                <span className="text-cyan-400 text-sm">👨‍⚕️</span>
                <div>
                  <span className="text-cyan-300 font-bold text-sm">2+</span>
                  <span className="text-gray-300 text-xs ml-1">Doctors</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-xl flex items-center gap-2">
                <span className="text-emerald-400 text-sm">⏱️</span>
                <div>
                  <span className="text-cyan-300 font-bold text-sm">24/7</span>
                  <span className="text-gray-300 text-xs ml-1">Support</span>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center lg:justify-end lg:pr-10 mt-8 lg:mt-0">

            <div className="relative h-[270px] w-[310px]">

              {/* Doctor 1 */}
              <div className="absolute top-0 left-0 bg-white rounded-2xl shadow-xl p-2 w-[145px] border border-slate-100/50 hover:scale-105 transition-all duration-300 z-10">
                <img
                  src={doctor1}
                  alt="Dr Mandakini"
                  className="rounded-xl w-full h-[175px] object-cover object-top"
                />

                <div className="mt-2 text-center">
                  <h3 className="font-bold text-xs text-slate-800 leading-tight">
                    Dr. Mandakini
                  </h3>

                  <p className="text-cyan-600 text-[10px] font-semibold mt-0.5">
                    Gynecologist
                  </p>
                </div>
              </div>

              {/* Doctor 2 */}
              <div className="absolute top-12 left-36 bg-white rounded-2xl shadow-xl p-2 w-[145px] border border-slate-100/50 hover:scale-105 transition-all duration-300 z-20">

                <img
                  src={doctor2}
                  alt="Dr Sujeet"
                  className="rounded-xl w-full h-[175px] object-cover object-top"
                />

                <div className="mt-2 text-center">
                  <h3 className="font-bold text-xs text-slate-800 leading-tight">
                    Dr. Sujeet Narain
                  </h3>

                  <p className="text-cyan-600 text-[10px] font-semibold mt-0.5">
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