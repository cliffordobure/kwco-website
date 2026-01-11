// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { Scale, Facebook, Linkedin, Youtube } from "lucide-react";
import logo from "./../assets/sklogo.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img
                src={logo}
                alt="KWCO Advocates"
                className="w-40 h-auto mb-4"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A distinguished legal practice in Nairobi, Kenya, committed to delivering 
              excellence in legal services across diverse practice areas.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link
                  to="/our-people"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Our People
                </Link>
              </li>
              <li>
                <Link
                  to="/insights"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Client Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Practice Areas</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/practice-areas/litigation"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Litigation
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas/credit-collection"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Credit Collection
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas/conveyancing"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Conveyancing
                </Link>
              </li>
              <li>
                <Link
                  to="/practice-areas/dispute-resolution"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Dispute Resolution
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Connect With Us</h4>
            <p className="text-gray-400 mb-6 text-sm">Follow us on social media</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/kwcoadvocates"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://linkedin.com/company/kamuti-waweru-company-advocates"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://youtube.com/@kwco-advocates?si=vD6JqIsuMEBnVBAA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-xl hover:bg-blue-600 transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} KWCO - Kamuti Waweru & Co. Advocates. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
