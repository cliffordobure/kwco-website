// src/components/Navigation.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Scale, ArrowRight } from "lucide-react";
import logo from "./../assets/sklogo.jpg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Function to handle smooth scrolling for home page sections
  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're not on the home page, navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  // Check if we should use scroll behavior or regular navigation
  const isHomePage = location.pathname === "/";

  const navItems = [
    {
      label: "Home",
      href: "/",
      sectionId: "home",
      isScrollable: true,
    },
    {
      label: "About Us",
      href: "/about",
      sectionId: "about",
      isScrollable: true,
      dropdown: [
        { label: "Our Story", href: "/about/our-story" },
        { label: "Mission & Vision", href: "/about/mission-vision" },
        {
          label: "Core Values",
          href: "/about/core-values",
          sectionId: "values",
          isScrollable: true,
        },
        { label: "Practice Areas", href: "/practice-areas" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      label: "Our People",
      href: "/our-people",
      sectionId: "our-people",
      isScrollable: true,
    },
    {
      label: "Client Insights",
      href: "/insights",
      sectionId: "insights",
      isScrollable: true,
    },
    {
      label: "Contact Us",
      href: "/contact",
      sectionId: "contact",
      isScrollable: true,
    },
    {
      label: "Samlex",
      href: "https://lawfirm-saas-client.vercel.app/",
      isExternal: true,
    },
  ];

  const handleNavClick = (e, item) => {
    if (item.isScrollable && isHomePage) {
      e.preventDefault();
      handleSectionClick(item.sectionId);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/98 backdrop-blur-md shadow-2xl border-b border-slate-800"
          : "bg-slate-950/95 backdrop-blur-sm shadow-xl border-b border-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                handleSectionClick("home");
              }
            }}
          >
            <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
              <img
                src={logo}
                alt="KWCO Advocates"
                className="w-40 h-auto transition-all duration-300"
              />
            </div>
          </Link>

          {/* Corporate Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex items-center cursor-pointer py-2 text-gray-300 hover:text-white transition-all duration-300 relative"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.isScrollable && isHomePage ? (
                      <button
                        onClick={(e) => handleNavClick(e, item)}
                        className="flex items-center font-medium hover:text-white transition-all duration-300 uppercase text-xs tracking-widest"
                      >
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center font-medium hover:text-white transition-all duration-300 uppercase text-xs tracking-widest"
                      >
                        <span className="relative">
                          {item.label}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                      </Link>
                    )}
                    {activeDropdown === index && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900/98 backdrop-blur-md shadow-2xl border border-slate-800 overflow-hidden animate-fade-in-up">
                        <div className="p-2">
                          {item.dropdown.map((dropItem, dropIndex) =>
                            dropItem.isScrollable && isHomePage ? (
                              <button
                                key={dropIndex}
                                onClick={(e) => handleNavClick(e, dropItem)}
                                className="w-full text-left px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white transition-all duration-300 group/item uppercase text-xs tracking-widest font-medium"
                              >
                                <div className="flex items-center justify-between">
                                  <span>
                                    {dropItem.label}
                                  </span>
                                  <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-0 group-hover/item:translate-x-1" />
                                </div>
                              </button>
                            ) : (
                              <Link
                                key={dropIndex}
                                to={dropItem.href}
                                className="block px-4 py-3 text-gray-300 hover:bg-slate-800 hover:text-white transition-all duration-300 group/item uppercase text-xs tracking-widest font-medium"
                              >
                                <div className="flex items-center justify-between">
                                  <span>
                                    {dropItem.label}
                                  </span>
                                  <ArrowRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-x-0 group-hover/item:translate-x-1" />
                                </div>
                              </Link>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium relative group uppercase text-xs tracking-widest"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                ) : item.isScrollable && isHomePage ? (
                  <button
                    onClick={(e) => handleNavClick(e, item)}
                    className="py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium relative group uppercase text-xs tracking-widest"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium relative group uppercase text-xs tracking-widest"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/consultation"
              className="bg-white text-slate-900 px-8 py-3 hover:bg-slate-100 transition-all duration-300 font-bold flex items-center group uppercase text-xs tracking-widest"
            >
              Get Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Corporate Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-180 opacity-0"
                    : "rotate-0 opacity-100"
                }`}
              >
                <Menu className="w-6 h-6 text-white" />
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-0 opacity-100"
                    : "rotate-180 opacity-0"
                }`}
              >
                <X className="w-6 h-6 text-white" />
              </span>
            </div>
          </button>
        </div>

        {/* Corporate Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-slate-900/98 backdrop-blur-md border-t border-slate-800 shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="py-4 space-y-2">
              {navItems.map((item, index) => (
                <div key={index} className="px-4">
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-4 text-gray-300 hover:bg-slate-800 hover:text-white transition-all duration-300 font-medium uppercase text-xs tracking-widest"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : item.isScrollable && isHomePage ? (
                    <button
                      onClick={(e) => handleNavClick(e, item)}
                      className="w-full text-left px-4 py-4 text-gray-300 hover:bg-slate-800 hover:text-white transition-all duration-300 font-medium uppercase text-xs tracking-widest"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-4 py-4 text-gray-300 hover:bg-slate-800 hover:text-white transition-all duration-300 font-medium uppercase text-xs tracking-widest"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropItem, dropIndex) =>
                        dropItem.isScrollable && isHomePage ? (
                          <button
                            key={dropIndex}
                            onClick={(e) => handleNavClick(e, dropItem)}
                            className="w-full text-left px-4 py-3 text-gray-400 hover:bg-slate-800 hover:text-white transition-all duration-300 flex items-center justify-between group uppercase text-xs tracking-widest"
                          >
                            <span>{dropItem.label}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                          </button>
                        ) : (
                          <Link
                            key={dropIndex}
                            to={dropItem.href}
                            className="block px-4 py-3 text-gray-400 hover:bg-slate-800 hover:text-white transition-all duration-300 flex items-center justify-between group uppercase text-xs tracking-widest"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span>{dropItem.label}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-4 pt-4">
                <Link
                  to="/consultation"
                  className="block w-full bg-white text-slate-900 px-6 py-4 hover:bg-slate-100 transition-all duration-300 shadow-lg text-center font-bold flex items-center justify-center group uppercase text-xs tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
