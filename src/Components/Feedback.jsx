import React from 'react'
import doctorimg from '../assets/Doctor.jpg'

const Feedback = () => {
  return (
<section id="feedback" className="py-8 bg-gradient-to-b from-cyan-50 to-white">
  <div className="max-w-6xl mx-auto px-[6vw]">

    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden">

      <div className="grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="bg-[#0F172A] p-12 text-white flex flex-col justify-center">

          <span className="text-cyan-400 font-semibold uppercase tracking-wider">
            Patient Feedback
          </span>

          <h2 className="text-5xl font-bold mt-4 leading-tight">
            Your Voice Helps Us Improve
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed">
            Every review helps us provide better care and improve
            the experience of our patients.
          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">
              <span className="text-3xl">⭐</span>
              <div>
                <h3 className="font-semibold">4.9 Patient Rating</h3>
                <p className="text-gray-400 text-sm">
                  Trusted by hundreds of patients
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">❤️</span>
              <div>
                <h3 className="font-semibold">Compassionate Care</h3>
                <p className="text-gray-400 text-sm">
                  Patient-first healthcare approach
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">👨‍⚕️</span>
              <div>
                <h3 className="font-semibold">Experienced Specialists</h3>
                <p className="text-gray-400 text-sm">
                  Cardiology & Gynecology experts
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="p-10 lg:p-12">

          <h3 className="text-3xl font-bold text-slate-800 mb-2">
            Share Your Experience
          </h3>

          <p className="text-gray-500 mb-8">
            We'd love to hear about your visit.
          </p>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your experience..."
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-2xl font-semibold transition"
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