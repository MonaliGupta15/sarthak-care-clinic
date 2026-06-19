import React from 'react'
import doctorimg from '../assets/Doctor.jpg'

const Feedback = () => {
  return (
<section id="feedback" className="py-12 bg-gradient-to-b from-cyan-50 to-white">
  <div className="max-w-5xl mx-auto px-[6vw]">

    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">

      <div className="grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="bg-[#0F172A] p-8 lg:p-10 text-white flex flex-col justify-center">

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

            <div className="flex items-center gap-3.5">
              <span className="text-xl bg-white/10 rounded-lg h-9 w-9 flex items-center justify-center shrink-0">⭐</span>
              <div>
                <h3 className="font-semibold text-sm text-slate-100">4.9 Patient Rating</h3>
                <p className="text-gray-400 text-xs mt-0.5">
                  Trusted by hundreds of patients
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <span className="text-xl bg-white/10 rounded-lg h-9 w-9 flex items-center justify-center shrink-0">❤️</span>
              <div>
                <h3 className="font-semibold text-sm text-slate-100">Compassionate Care</h3>
                <p className="text-gray-400 text-xs mt-0.5">
                  Patient-first healthcare approach
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <span className="text-xl bg-white/10 rounded-lg h-9 w-9 flex items-center justify-center shrink-0">👨‍⚕️</span>
              <div>
                <h3 className="font-semibold text-sm text-slate-100">Experienced Specialists</h3>
                <p className="text-gray-400 text-xs mt-0.5">
                  Cardiology & Gynecology experts
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="p-6 lg:p-8">

          <h3 className="text-2xl font-bold text-slate-800 mb-1">
            Share Your Experience
          </h3>

          <p className="text-gray-500 text-sm mb-5">
            We'd love to hear about your visit.
          </p>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your experience..."
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2.5 rounded-xl text-sm font-semibold transition shadow-sm"
            >
              Submit Feedback
            </button>

          </form>

        </div>

      </div>

    </div>

  </div>
</section>
  )
}

export default Feedback