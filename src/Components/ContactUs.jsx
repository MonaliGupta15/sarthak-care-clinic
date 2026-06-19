import React from 'react'

const ContactUs = () => {
  return (
    <section id="contact" className="py-12 px-[6vw] bg-gradient-to-b from-cyan-50 to-white">
        <div className="text-center mb-8">
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
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 flex flex-col justify-between h-[380px]">

                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
                    Visit Our Clinic
                  </h3>

                  <div className="space-y-3">

                    <div className="bg-cyan-50/50 border border-cyan-100 rounded-xl p-3 flex items-start gap-3">
                      <span className="text-base mt-0.5">📍</span>
                      <div>
                        <h4 className="font-semibold text-xs text-cyan-800 leading-tight">Address</h4>
                        <p className="text-gray-600 text-xs mt-1">Sarthak Care Clinic, Sector 75, Noida</p>
                      </div>
                    </div>

                    <div className="bg-cyan-50/50 border border-cyan-100 rounded-xl p-3 flex items-start gap-3">
                      <span className="text-base mt-0.5">📞</span>
                      <div>
                        <h4 className="font-semibold text-xs text-cyan-800 leading-tight">Call Us</h4>
                        <p className="text-gray-600 text-xs mt-1 leading-snug">
                          +91 8800755448, &nbsp; +91 9557466646, &nbsp; +91 9911401172
                        </p>
                      </div>
                    </div>

                    <div className="bg-cyan-50/50 border border-cyan-100 rounded-xl p-3 flex items-start gap-3">
                      <span className="text-base mt-0.5">✉</span>
                      <div>
                        <h4 className="font-semibold text-xs text-cyan-800 leading-tight">Email</h4>
                        <p className="text-gray-600 text-xs mt-1 leading-snug break-all">
                          doctor@sarthakcareclinic.com | drsujeetnarainmd@yahoo.com
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/dkCqJTgk4HpjkrmS8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition shadow-sm"
                >
                  Get Directions
                </a>
            </div>

            

        <div className="rounded-2xl overflow-hidden shadow-lg h-[380px] border border-slate-100">
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