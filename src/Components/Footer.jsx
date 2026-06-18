import React from "react";
import logo from "../assets/logo.jpg";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-[4vw]">

        {/* Top Section */}
        <div className="py-6 border-b border-white/10">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

            {/* Brand */}
            <div>
              <img
                src={logo}
                alt="Sarthak Care Clinic"
                className="h-16 w-auto rounded-lg mb-5"
              />

              <h2 className="text-3xl font-bold mb-4">
                Sarthak Care
                <span className="text-cyan-400"> Clinic</span>
              </h2>

              <p className="text-gray-400 leading-relaxed">
                Delivering trusted healthcare with compassion,
                expertise, and excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                Quick Links
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-cyan-400 transition">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#doctors" className="hover:text-cyan-400 transition">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="#services" className="hover:text-cyan-400 transition">
                    Services
                  </a>
                </li>

                <li>
                  <a href="#reviews" className="hover:text-cyan-400 transition">
                    Reviews
                  </a>
                </li>

                <li>
                  <a href="#contact" className="hover:text-cyan-400 transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Clinic Address
              </h3>

              <div className="text-gray-400 leading-8">
                <p>
                  📍 Sarthak Care Clinic
                </p>

                <p>
                  Shop No. 13
                </p>

                <p>
                  Panchsheel Pratishtha
                </p>

                <p>
                  Shopping Mart
                </p>

                <p>
                  Sector 75, Noida
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Contact Info
              </h3>

              <div className="space-y-3 text-gray-400">

                <p className="hover:text-cyan-400 transition">📞 +91 8800755448</p>
                <p className="hover:text-cyan-400 transition">📞 +91 9557466646</p>
                <p className="hover:text-cyan-400 transition">📞 +91 9911401172</p>

                <div className="pt-2">
                  <p className="hover:text-cyan-400 transition">✉doctor@sarthakcareclinic.com</p>
                  <p className="hover:text-cyan-400 transition">✉drsujeetnarainmd@yahoo.com</p>
                </div>

              </div>
            </div>

          </div>
          <div className="mt-6">
  <h3 className="text-lg font-semibold mb-4">
    Follow Us
  </h3>

  <div className="flex gap-4">

    <a
      href="https://wa.me/918800755448"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:scale-110 transition"
    >
      <FaWhatsapp className="text-white text-xl" />
    </a>

    <a
      href="https://www.facebook.com/people/Sarthak-care-clinic/100071995903918/"
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:scale-110 transition"
    >
      <FaFacebookF className="text-white text-lg" />
    </a>

  </div>
</div>
        </div>

        {/* Bottom Section */}
        <div className="py-4 text-center text-gray-500 text-sm">

          <p>
            © 2026 Sarthak Care Clinic. All Rights Reserved.
          </p>

          <p className="mt-2">
            Designed & Developed by IndiCorp IT Solutions Pvt Ltd.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;