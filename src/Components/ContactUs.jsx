import React from 'react'

const ContactUs = () => {
  return (
    <section id="contact" className="py-8 px-10 bg-gradient-to-b from-cyan-50 to-white">
        <div className="text-center mb-10">
            <span className="text-cyan-600 font-semibold uppercase tracking-wider">
              Visit Us
            </span>

            <h2 className="text-5xl font-bold text-slate-800 mt-3">
              Find Our Clinic
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Easily locate us and connect with our healthcare specialists.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="bg-white rounded-[32px] p-10 shadow-xl">

                <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
                  Visit Our Clinic
                </h3>

                <div className="space-y-5">

                <div className="bg-cyan-50 rounded-2xl p-5">
                  <h4 className="font-semibold text-cyan-700 mb-2">
                    📍 Address
                  </h4>
                  <p className="text-gray-600">
                    Sarthak Care Clinic
                    <br />
                    Sector 75, Noida
                  </p>
                </div>

                <div className="bg-cyan-50 rounded-2xl p-5">
                  <h4 className="font-semibold text-cyan-700 mb-2">
                    📞 Call Us
                  </h4>
                  <p className="text-gray-600">+91 8800755448</p>
                  <p className="text-gray-600">+91 9557466646</p>
                  <p className="text-gray-600">+91 9911401172</p>
                </div>

                <div className="bg-cyan-50 rounded-2xl p-5">
                  <h4 className="font-semibold text-cyan-700 mb-2">
                    ✉ Email
                  </h4>
                  <p className="text-gray-600">
                    doctor@sarthakcareclinic.com
                  </p>
                  <p className="text-gray-600">
                    drsujeetnarainmd@yahoo.com
                  </p>
                </div>

            </div>

                <a
                href="https://maps.app.goo.gl/dkCqJTgk4HpjkrmS8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-10 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition"
                >
                Get Directions
                </a>
            </div>

            

        <div className="rounded-[32px] overflow-hidden shadow-xl h-[500px]">
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