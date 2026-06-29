import React from "react"
import doctor1 from "../assets/doctor1.jpeg"
import doctor2 from "../assets/doctor3.PNG"
import ECGLine from "./ECGLine"
import heroBg from '../assets/herobg.avif'

const particles = [
  { top: "15%", left: "10%", size: 3, duration: "4s", delay: "0s"   },
  { top: "25%", left: "80%", size: 5, duration: "6s", delay: "1s"   },
  { top: "60%", left: "20%", size: 3, duration: "5s", delay: "0.5s" },
  { top: "70%", left: "70%", size: 4, duration: "7s", delay: "2s"   },
  { top: "40%", left: "90%", size: 3, duration: "4s", delay: "1.5s" },
  { top: "80%", left: "40%", size: 5, duration: "6s", delay: "0.8s" },
  { top: "10%", left: "55%", size: 3, duration: "5s", delay: "3s"   },
  { top: "50%", left: "5%",  size: 4, duration: "8s", delay: "2.5s" },
]

const Hero = () => {
  return (
    <section
      id="home"  
      className="relative min-h-screen lg:min-h-[90vh] flex items-center overflow-hidden pt-14 w-full"
    >
      {/* Background */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/90 via-[#132238]/90 to-cyan-900/90" />

      {/* Glow Blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl glow-pulse" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl glow-pulse-slow" />

      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-[6vw] w-full py-12 overflow-x-hidden">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <div className="relative self-start mb-3 opacity-0 animate-fade-up delay-100">
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20
                               text-cyan-300 text-xs font-semibold">
                Trusted Healthcare in Sector 75, Noida
              </span>
              <span className="absolute inset-0 rounded-full border border-cyan-400/40 ping-ring" />
            </div>

            {/* Heading */}
            <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight
               opacity-0 animate-fade-up delay-200">
                Expert Care
                <span className="text-cyan-400"> For Your </span>
                Health &
                <span className="text-cyan-400"> Wellbeing</span>
                <span className="text-cyan-400 cursor-blink ml-1">|</span>
            </h1>

            {/* ECG */}
            <div className="max-w-s mt-2 opacity-0 animate-fade-up delay-300">
              <ECGLine />
            </div>

            {/* Para */}
            <p className="text-gray-300 text-sm mt-3 w-full leading-relaxed
                          opacity-0 animate-fade-up delay-500">
              Personalized Cardiology and Gynecology care with experienced
              specialists committed to your health and comfort.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-5 opacity-0 animate-fade-up delay-700">
              <a
                href="#contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5
                           rounded-full text-sm font-semibold transition shadow-md
                           hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:scale-95"
              >
                Book Appointment
              </a>
              <a
                href="tel:8800755448"
                className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/10
                           px-6 py-2.5 rounded-full text-sm font-semibold transition
                           hover:-translate-y-0.5 active:scale-95"
              >
                Call Now
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-3 mt-6 flex-wrap">
              {[
                { icon: "★",   value: "4.9",  label: "Rating",  color: "text-yellow-400", delay: "delay-300" },
                { icon: "👨‍⚕️", value: "2+",   label: "Doctors", color: "text-cyan-400",   delay: "delay-500" },
                { icon: "⏱️",  value: "24/7", label: "Support", color: "text-emerald-400", delay: "delay-700" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className={`opacity-0 animate-fade-up ${badge.delay} bg-white/5
                              border border-white/10 backdrop-blur-md px-3.5 py-1.5
                              rounded-xl flex items-center gap-2
                              hover:border-cyan-400/40 hover:bg-white/10
                              transition-all duration-300 cursor-default`}
                >
                  <span className={`${badge.color} text-sm`}>{badge.icon}</span>
                  <div>
                    <span className="text-cyan-300 font-bold text-sm">{badge.value}</span>
                    <span className="text-gray-300 text-xs ml-1">{badge.label}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
          {/* END LEFT */}

          {/* RIGHT — hidden on mobile */}
          <div className="hidden lg:flex relative justify-end lg:pr-10
                          opacity-0 animate-fade-up delay-300">
            <div className="relative h-[270px] w-[310px]">

              {/* Doctor 1 */}
              <div className="absolute top-0 left-0 bg-white rounded-2xl shadow-xl p-2
                              w-[145px] border border-slate-100/50 z-10 float-card-1
                              hover:scale-105 transition-transform duration-300">
                <img
                  src={doctor1}
                  alt="Dr Mandakini"
                  className="rounded-xl w-full h-[175px] object-cover object-top"
                />
                <div className="mt-2 text-center">
                  <h3 className="font-bold text-xs text-slate-800 leading-tight">Dr. Mandakini</h3>
                  <p className="text-cyan-600 text-[10px] font-semibold mt-0.5">Gynecologist</p>
                </div>
              </div>

              {/* Doctor 2 */}
              <div className="absolute top-12 left-36 bg-white rounded-2xl shadow-xl p-2
                              w-[145px] border border-slate-100/50 z-20 float-card-2
                              hover:scale-105 transition-transform duration-300">
                <img
                  src={doctor2}
                  alt="Dr Sujeet"
                  className="rounded-xl w-full h-[175px] object-cover object-top"
                />
                <div className="mt-2 text-center">
                  <h3 className="font-bold text-xs text-slate-800 leading-tight">Dr. Sujeet Narain</h3>
                  <p className="text-cyan-600 text-[10px] font-semibold mt-0.5">Cardiologist</p>
                </div>
              </div>

            </div>
          </div>
          {/* END RIGHT */}

        </div>
        {/* END GRID */}

      </div>
      {/* END CONTENT */}

    </section>
  )
}

export default Hero