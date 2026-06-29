import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const ContactUs = () => {
  const headingRef = useScrollAnimation()
  const cardRef    = useScrollAnimation()
  const mapRef     = useScrollAnimation()

  return (
    <section id="contact" className="py-12 px-[6vw] bg-gradient-to-b from-cyan-50 to-white">

      {/* Heading */}
      <div ref={headingRef} className="fade-up text-center mb-8">
        <span className="text-cyan-600 font-semibold uppercase tracking-wider text-xs">
          Visit Us
        </span>
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mt-2">
          Find Our Clinic
        </h2>
        <p className="text-gray-600 mt-2 text-sm max-w-xl mx-auto">
          Easily locate us and connect with our healthcare specialists.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">

        {/* Info Card — slides from left */}
        <div
          ref={cardRef}
          className="slide-left bg-white rounded-2xl p-6 shadow-lg border border-slate-100
                     flex flex-col justify-between h-[380px]"
        >
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
              Visit Our Clinic
            </h3>

            <div className="space-y-3">

              <div className="bg-cyan-50/50 border border-cyan-100 rounded-xl p-3
                              flex items-start gap-3 hover:border-cyan-300
                              hover:bg-cyan-50 transition-all duration-300 group">
                <span className="text-base mt-0.5 group-hover:scale-110 transition-transform duration-300">📍</span>
                <div>
                  <h4 className="font-semibold text-xs text-cyan-800 leading-tight">Address</h4>
                  <p className="text-gray-600 text-xs mt-1">
                    Sarthak Care Clinic, Sector 75, Noida
                  </p>
                </div>
              </div>

              <div className="bg-cyan-50/50 border border-cyan-100 rounded-xl p-3
                              flex items-start gap-3 hover:border-cyan-300
                              hover:bg-cyan-50 transition-all duration-300 group">
                <span className="text-base mt-0.5 group-hover:scale-110 transition-transform duration-300">📞</span>
                <div>
                  <h4 className="font-semibold text-xs text-cyan-800 leading-tight">Call Us</h4>
                  <div className="flex flex-col gap-0.5 mt-1">
                    <a href="tel:8800755448"
                       className="text-gray-600 text-xs hover:text-cyan-600 transition-colors">
                      +91 88007 55448
                    </a>
                    <a href="tel:9557466646"
                       className="text-gray-600 text-xs hover:text-cyan-600 transition-colors">
                      +91 95574 66646
                    </a>
                    <a href="tel:9911401172"
                       className="text-gray-600 text-xs hover:text-cyan-600 transition-colors">
                      +91 99114 01172
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-50/50 border border-cyan-100 rounded-xl p-3
                              flex items-start gap-3 hover:border-cyan-300
                              hover:bg-cyan-50 transition-all duration-300 group">
                <span className="text-base mt-0.5 group-hover:scale-110 transition-transform duration-300">✉</span>
                <div>
                  <h4 className="font-semibold text-xs text-cyan-800 leading-tight">Email</h4>
                  <div className="flex flex-col gap-0.5 mt-1">
                    <a href="mailto:doctor@sarthakcareclinic.com"
                       className="text-gray-600 text-xs hover:text-cyan-600 transition-colors break-all">
                      doctor@sarthakcareclinic.com
                    </a>
                    <a href="mailto:drsujeetnarainmd@yahoo.com"
                       className="text-gray-600 text-xs hover:text-cyan-600 transition-colors break-all">
                      drsujeetnarainmd@yahoo.com
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/dkCqJTgk4HpjkrmS8"
            target="_blank"
            rel="noopener noreferrer"
            className="self-center bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5
                       rounded-full text-sm font-semibold transition-all shadow-sm
                       hover:-translate-y-0.5 hover:shadow-cyan-400/30 hover:shadow-md
                       active:scale-95"
          >
            Get Directions →
          </a>
        </div>

        {/* Map — slides from right */}
        <div
          ref={mapRef}
          className="slide-right stagger-2 rounded-2xl overflow-hidden shadow-lg
                     h-[380px] border border-slate-100 hover:shadow-xl
                     hover:border-cyan-200 transition-all duration-300"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8511255806984!2d77.38127057533335!3d28.574232875696623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefbc987dc011%3A0xc9809d12aca30023!2sDr.%20Sujeet%20Narain!5e0!3m2!1sen!2sin!4v1781761457102!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sarthak Care Clinic Location"
          />
        </div>

      </div>
    </section>
  )
}

export default ContactUs