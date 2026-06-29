import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Feedback = () => {
  const leftRef  = useScrollAnimation()
  const rightRef = useScrollAnimation()

  return (
    <section id="feedback" className="py-12 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-5xl mx-auto px-[6vw]">

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-2">

            {/* Left — slides from left */}
            <div
              ref={leftRef}
              className="slide-left bg-[#0F172A] p-8 lg:p-10 text-white
                         flex flex-col justify-center"
            >
              <span className="text-cyan-400 font-semibold uppercase tracking-wider text-xs">
                Patient Feedback
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold mt-2 leading-tight">
                Your Voice Helps Us Improve
              </h2>

              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Every review helps us provide better care and improve
                the experience of our patients.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  {
                    icon: "⭐",
                    title: "4.9 Patient Rating",
                    sub: "Trusted by hundreds of patients"
                  },
                  {
                    icon: "❤️",
                    title: "Compassionate Care",
                    sub: "Patient-first healthcare approach"
                  },
                  {
                    icon: "👨‍⚕️",
                    title: "Experienced Specialists",
                    sub: "Cardiology & Gynecology experts"
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 group"
                  >
                    <span className="text-xl bg-white/10 group-hover:bg-cyan-500/20
                                     rounded-lg h-9 w-9 flex items-center justify-center
                                     shrink-0 transition-all duration-300
                                     group-hover:scale-110">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold text-sm text-slate-100">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — slides from right */}
            <div
              ref={rightRef}
              className="slide-right stagger-2 p-6 lg:p-8"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-1">
                Share Your Experience
              </h3>
              <p className="text-gray-500 text-sm mb-5">
                We'd love to hear about your visit.
              </p>

              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5
                             text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400
                             focus:border-transparent transition-all duration-200
                             hover:border-cyan-300"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5
                             text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400
                             focus:border-transparent transition-all duration-200
                             hover:border-cyan-300"
                />

                <textarea
                  rows="4"
                  placeholder="Tell us about your experience..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5
                             text-sm resize-none focus:outline-none focus:ring-2
                             focus:ring-cyan-400 focus:border-transparent
                             transition-all duration-200 hover:border-cyan-300"
                />

                <button
                  type="button"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2.5
                             rounded-xl text-sm font-semibold transition-all shadow-sm
                             hover:-translate-y-0.5 hover:shadow-cyan-400/30
                             hover:shadow-md active:scale-95"
                >
                  Submit Feedback
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Feedback