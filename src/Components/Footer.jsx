import React from "react";
import logo from "../assets/logo.jpg";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-[6vw]">

        {/* Top Section */}
        <div className="py-8 border-b border-white/10">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {/* Brand */}
            <div>
              <div className="bg-white p-1 rounded-md flex items-center justify-center h-10 w-10 mb-3 shadow-sm">
                <img
                  src={logo}
                  alt="Sarthak Care Clinic"
                  className="h-full w-full object-contain rounded"
                />
              </div>

              <h2 className="text-xl font-bold mb-2">
                Sarthak Care
                <span className="text-cyan-400"> Clinic</span>
              </h2>

              <p className="text-gray-400 text-xs leading-relaxed">
                Delivering trusted healthcare with compassion,
                expertise, and excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-white uppercase tracking-wider">
                Quick Links
              </h3>

              <ul className="space-y-1.5 text-xs text-gray-400">
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
              <h3 className="text-sm font-semibold mb-3 text-white uppercase tracking-wider">
                Clinic Address
              </h3>

              <div className="text-xs text-gray-400 leading-relaxed space-y-1">
                <p>📍 Sarthak Care Clinic</p>
                <p>Shop No. 13, Panchsheel Pratishtha</p>
                <p>Shopping Mart, Sector 75, Noida</p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold mb-3 text-white uppercase tracking-wider">
                Contact Info
              </h3>

              <div className="space-y-1.5 text-xs text-gray-400">

                <p className="hover:text-cyan-400 transition">📞 +91 8800755448</p>
                <p className="hover:text-cyan-400 transition">📞 +91 9557466646</p>
                <p className="hover:text-cyan-400 transition">📞 +91 9911401172</p>

                <div className="pt-1.5 space-y-1 border-t border-white/5 mt-1.5">
                  <p className="hover:text-cyan-400 transition">✉ doctor@sarthakcareclinic.com</p>
                  <p className="hover:text-cyan-400 transition">✉ drsujeetnarainmd@yahoo.com</p>
                </div>

              </div>
            </div>

          </div>
          
          {/* Follow Us */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                Follow Us
              </h3>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://wa.me/918800755448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 hover:scale-110 transition"
                >
                  <FaWhatsapp className="text-white text-base" />
                </a>

                <a
                  href="https://www.facebook.com/people/Sarthak-care-clinic/100071995903918/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600 hover:scale-110 transition"
                >
                  <FaFacebookF className="text-white text-sm" />
                </a>
              </div>
            </div>

            <div className="text-gray-500 text-[10px] text-right md:block hidden">
              <p>© 2026 Sarthak Care Clinic. All Rights Reserved.</p>
              <p className="mt-0.5">Designed & Developed by IndiCorp IT Solutions Pvt Ltd.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-4 text-center text-gray-500 text-[10px] md:hidden">
          <p>© 2026 Sarthak Care Clinic. All Rights Reserved.</p>
          <p className="mt-1">Designed & Developed by IndiCorp IT Solutions Pvt Ltd.</p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;