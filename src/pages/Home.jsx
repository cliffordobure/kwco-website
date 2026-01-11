/* eslint-disable no-unused-vars */
// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Check,
  Scale,
  Briefcase,
  FileText,
  Clock,
  Target,
  Shield,
  Award,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Lightbulb,
  Eye,
  ChevronRight,
  Star,
  TrendingUp,
  Zap,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

// Import banner images
import sliderOne from "./../assets/hero-sliders/pngwing.com (7).png";
import sliderTwo from "./../assets/hero-sliders/pngwing.com (8).png";
import sliderThree from "./../assets/hero-sliders/pngwing.com (9).png";
import sliderFour from "./../assets/hero-sliders/pngwing.com (10).png";

import bank from "./../assets/client/kingdom bank.png";
import Melvin from "./../assets/team/Melvin.jpg";
import Jackline from "./../assets/newImages/jackylanding.jpg";
import Seif from "./../assets/newImages/seifbest.jpg";
import bidico from "./../assets/client/bidco_logo.png";
import hashi from "./../assets/headers/hashi.png";
import Skbig from "./../assets/newImages/skbest4.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Array of your banner images
  const bannerImages = [sliderOne, sliderTwo, sliderThree, sliderFour];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(slideInterval);
  }, [bannerImages.length]);

  // Mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerImages.length) % bannerImages.length
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const practiceAreas = [
    {
      id: "litigation",
      icon: <Scale className="w-12 h-12" />,
      title: "Litigation",
      description:
        "Comprehensive litigation services across civil, commercial, and constitutional matters with proven track record.",
      link: "/practice-areas/litigation",
      stats: "95% Success Rate",
    },
    {
      id: "debt-collection",
      icon: <Briefcase className="w-12 h-12" />,
      title: "Debt Collection",
      description:
        "Strategic debt recovery solutions to help businesses and financial institutions maximize recovery rates.",
      link: "/practice-areas/debt-collection",
      stats: "87% Recovery Rate",
    },
    {
      id: "conveyancing",
      icon: <FileText className="w-12 h-12" />,
      title: "Conveyancing",
      description:
        "Full-service conveyancing solutions for property transactions with meticulous attention to detail.",
      link: "/practice-areas/conveyancing",
      stats: "500+ Transactions",
    },
    {
      id: "dispute-resolution",
      icon: <Shield className="w-12 h-12" />,
      title: "Dispute Resolution",
      description:
        "Alternative dispute resolution services including mediation and arbitration for cost-effective solutions.",
      link: "/practice-areas/dispute-resolution",
      stats: "92% Settlement Rate",
    },
  ];

  const testimonials = [
    {
      client: "Sarah Kimani",
      position: "CEO, TechStart Kenya",
      content:
        "KWCO Advocates delivered exceptional results in our complex litigation case. Their strategic approach and attention to detail exceeded our expectations.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      client: "David Ochieng",
      position: "Managing Director, FinanceCorp",
      content:
        "The debt collection team at KWCO is simply outstanding. They recovered 95% of our outstanding debts within 6 months.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      client: "Grace Wanjiku",
      position: "Property Developer",
      content:
        "Their conveyancing services are impeccable. Every transaction was handled with precision and professionalism.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  const stats = [
    {
      number: "15+",
      label: "Years Experience",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      number: "Proven",
      label: "Track Record",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "Client",
      label: "Satisfaction",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "24/7",
      label: "Client Support",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const coreValues = [
    {
      title: "Excellence",
      description:
        "We maintain the highest standards of legal practice and client service.",
      icon: <Star className="w-12 h-12 text-blue-400" />,
    },
    {
      title: "Integrity",
      description:
        "Honesty and ethical conduct in all our professional relationships.",
      icon: <Shield className="w-12 h-12 text-blue-400" />,
    },
    {
      title: "Innovation",
      description:
        "Embracing modern legal solutions and technology for better outcomes.",
      icon: <Lightbulb className="w-12 h-12 text-blue-400" />,
    },
    {
      title: "Client Focus",
      description:
        "Dedicated to understanding and exceeding our clients' expectations.",
      icon: <Users className="w-12 h-12 text-blue-400" />,
    },
  ];

  const recentInsights = [
    {
      title: "Posta Kenya",
      category: "Financial",
      description:
        "Successfully handled complex debt recovery and legal compliance matters for this national postal service provider.",
      image: bank,
    },
    {
      title: "Hashi Energy",
      category: "Technology",
      description:
        "Provided comprehensive legal services for energy sector regulations and commercial transactions.",
      image: hashi,
    },
    {
      title: "Bidco Africa",
      category: "Manufacturing",
      description:
        "Expert legal guidance for corporate governance, compliance, and commercial law matters.",
      image: bidico,
    },
  ];

  const teamMembers = [
    {
      name: "SK Waweru",
      position: "Managing Partner",
      expertise: ["Debt Collection", "Banking Law", "Debt Recovery"],
      experience: "15+ Years",
      image: Skbig,
      achievements: [
        "500+ Cases Handled",
        "95% Success Rate",
        "Expert Negotiator",
      ],
    },
    {
      name: "Jackline Jowi",
      position: "Credit collector",
      expertise: ["Debt Collection", "Credit Management"],
      experience: "",
      image: Jackline,
      achievements: [
        "Landmark Cases",
      ],
    },
    {
      name: "Seif Mohammed",
      position: "Partner",
      expertise: ["Debt Collection", "Credit Management"],
      experience: "",
      image: Seif,
      achievements: [
        "500+ Transactions"
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 corporate-font">
      {/* Corporate Hero Section - Bowmans Style */}
      <section
        id="home"
        className="relative min-h-[38vh] flex items-center justify-center overflow-hidden bg-slate-950"
      >
        {/* Dark Professional Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/65 to-slate-950/85"></div>
        </div>

        {/* Image Slider Background with Parallax */}
        <div className="absolute inset-0 w-full h-full">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            >
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={image}
                  alt={`Law office banner ${index + 1}`}
                  className="absolute inset-0 w-full h-full hero-image"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-900/40"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Navigation Arrows with Hover Effects */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110 hover:shadow-2xl group"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 group-hover:translate-x-[-2px] transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-110 hover:shadow-2xl group"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 group-hover:translate-x-[2px] transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Enhanced Slide Indicators with Progress */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-500 scale-125 shadow-lg shadow-blue-500/50"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Corporate Hero Content - Bowmans Style */}
        <div className="relative z-10 text-left max-w-7xl mx-auto px-6 lg:px-12 py-10">
          <div className="max-w-3xl">
            {/* Corporate Main Title - Large, Bold, Uppercase */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-6 text-white leading-[0.95] tracking-tight uppercase">
              EXCELLENCE IN
              <br />
              <span className="text-slate-300">LEGAL PRACTICE</span>
            </h1>

            {/* Professional Tagline */}
            <div className="mb-6 max-w-xl">
              <p className="text-base md:text-lg lg:text-xl font-light text-gray-300 leading-relaxed">
                Trusted by leading organizations for strategic legal solutions across Kenya and beyond.
              </p>
            </div>

            {/* Corporate CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-white/95 text-slate-900 font-semibold px-12 py-4 text-sm md:text-base uppercase tracking-[0.35em] shadow-[0_18px_45px_-15px_rgba(15,23,42,0.4)] hover:bg-white hover:shadow-[0_22px_55px_-18px_rgba(15,23,42,0.55)] hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Legal Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-3 border border-white/50 text-white px-12 py-4 text-sm md:text-base uppercase tracking-[0.35em] bg-white/0 hover:bg-white/10 hover:border-white transition-all duration-300 font-semibold backdrop-blur-sm shadow-[0_18px_45px_-25px_rgba(15,23,42,0.8)] hover:shadow-[0_22px_55px_-22px_rgba(15,23,42,0.85)] hover:-translate-y-0.5"
              >
                Our Expertise
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Corporate Stats Display */}
            <div className="mt-12 pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-left"
                  >
                    <div className="text-5xl font-black text-white mb-3 tracking-tight">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-base font-normal uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Corporate Stats Section */}
      <section className="py-24 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-6xl font-black text-white mb-4 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate About Section */}
      <section id="about" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="mb-8">
              <span className="text-gray-400 font-semibold text-xs uppercase tracking-widest">
                About Our Firm
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tight leading-tight">
              KAMUTI WAWERU & CO. ADVOCATES
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl leading-relaxed font-light">
              A distinguished legal practice committed to delivering exceptional legal services 
              across a broad spectrum of practice areas. Our team of seasoned legal practitioners 
              offers unparalleled expertise, strategic advocacy, and bespoke legal solutions 
              tailored to meet the unique needs of our esteemed clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {[
              {
                icon: <Target className="w-7 h-7 text-white" />,
                title: "OUR MISSION",
                description:
                  "To be the premier law firm in Kenya by creating meaningful experiences for each client through innovative legal solutions.",
              },
              {
                icon: <Eye className="w-7 h-7 text-white" />,
                title: "OUR VISION",
                description:
                  "To be recognized as Kenya's most trusted legal partner, setting industry standards for excellence and innovation.",
              },
              {
                icon: <Clock className="w-7 h-7 text-white" />,
                title: "OUR EXPERIENCE",
                description:
                  "With 15+ years of cumulative experience in Kenya's legal system, we bring deep expertise to every case.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-900 p-10 border-l-4 border-white hover:border-gray-400 transition-all duration-300 group"
              >
                <div className="mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-5 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Corporate Navigation Links */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/about"
              className="inline-flex items-center bg-white text-slate-900 font-bold px-8 py-4 uppercase tracking-wide hover:bg-slate-100 transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
            {[
              { to: "/about/our-story", text: "Our Story" },
              { to: "/about/mission-vision", text: "Mission & Vision" },
              { to: "/about/core-values", text: "Core Values" },
            ].map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 uppercase tracking-wide hover:bg-white hover:text-slate-900 transition-all duration-300 font-bold"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Core Values Section */}
      <section
        id="values"
        className="py-32 bg-slate-900"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="mb-8">
              <span className="text-gray-400 font-semibold text-xs uppercase tracking-widest">
                Our Foundation
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tight leading-tight">
              CORE VALUES
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
              The principles that guide our practice and define our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-slate-950 p-8 border-t-4 border-white hover:border-gray-400 transition-all duration-300 group"
              >
                <div className="mb-8">
                  {React.cloneElement(value.icon, { className: "w-10 h-10 text-white" })}
                </div>
                <h3 className="text-lg font-black mb-4 text-white uppercase tracking-tight">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Practice Areas Section */}
      <section id="practice-areas" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="mb-8">
              <span className="text-gray-400 font-semibold text-xs uppercase tracking-widest">
                What We Do
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tight leading-tight">
              PRACTICE AREAS
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
              Comprehensive expert services across four core practice areas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {practiceAreas.map((area, index) => (
              <div
                key={area.id}
                className="group bg-slate-900 border-l-4 border-white hover:border-gray-400 transition-all duration-300 p-10"
              >
                <div className="mb-8">
                  {React.cloneElement(area.icon, {
                    className: "w-10 h-10 text-white",
                  })}
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-black mb-3 text-white uppercase tracking-tight">
                    {area.title}
                  </h3>
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest">
                    {area.stats}
                  </span>
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed font-light">
                  {area.description}
                </p>
                <Link
                  to={area.link}
                  className="inline-flex items-center text-white font-bold uppercase tracking-wide hover:text-gray-400 transition-colors gap-3 text-sm"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              to="/practice-areas"
              className="inline-flex items-center bg-white text-slate-900 font-bold px-8 py-4 uppercase tracking-wide hover:bg-slate-100 transition-all duration-300"
            >
              View All Practice Areas
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Our People Section */}
      <section
        id="our-people"
        className="py-32 bg-slate-900"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="mb-8">
              <span className="text-gray-400 font-semibold text-xs uppercase tracking-widest">
                Our Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tight leading-tight">
              OUR PEOPLE
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
              Experienced professionals committed to delivering excellence in legal services
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-slate-950 overflow-hidden border-b-4 border-white hover:border-gray-400 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-96">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full team-image grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black mb-2 text-white uppercase tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 font-medium mb-4 text-sm uppercase tracking-widest">
                    {member.position}
                  </p>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">
                    {member.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              to="/our-people"
              className="inline-flex items-center bg-white text-slate-900 font-bold px-8 py-4 uppercase tracking-wide hover:bg-slate-100 transition-all duration-300"
            >
              Meet Our Full Team
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Client Insights Section */}
      <section id="insights" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="mb-8">
              <span className="text-gray-400 font-semibold text-xs uppercase tracking-widest">
                Trusted Partnerships
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tight leading-tight">
              OUR CLIENTS
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
              Delivering excellence to leading organizations across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {recentInsights.map((insight, index) => (
              <div
                key={index}
                className="group bg-slate-900 p-10 border-t-4 border-white hover:border-gray-400 transition-all duration-300"
              >
                <div className="flex flex-col items-center mb-8">
                  <div className="w-32 h-32 bg-white p-6 flex items-center justify-center">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-full client-logo opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">
                    {insight.title}
                  </h3>
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-widest inline-block mb-4">
                    {insight.category}
                  </span>
                  <p className="text-gray-400 leading-relaxed text-sm font-light">
                    {insight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link
              to="/insights"
              className="inline-flex items-center bg-white text-slate-900 font-bold px-8 py-4 uppercase tracking-wide hover:bg-slate-100 transition-all duration-300"
            >
              View All Clients
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Corporate Testimonials Section */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="mb-8">
              <span className="text-gray-400 font-semibold text-xs uppercase tracking-widest">
                Client Success Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tight leading-tight">
              TESTIMONIALS
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
              Trusted by clients across Kenya for our dedication and results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-slate-950 p-10 border-l-4 border-white hover:border-gray-400 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-white fill-white"
                    />
                  ))}
                </div>
                <div className="mb-8">
                  <p className="text-lg text-gray-300 leading-relaxed font-light">
                    "{testimonial.content}"
                  </p>
                </div>
                <div className="border-t border-gray-800 pt-6">
                  <p className="font-black text-lg text-white uppercase tracking-tight">{testimonial.client}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Contact Section */}
      <section id="contact" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <div className="mb-8">
              <span className="text-gray-400 font-semibold text-xs uppercase tracking-widest">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 uppercase tracking-tight leading-tight">
              CONTACT US
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light">
              Ready to discuss your legal needs? We're here to help
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mb-20">
            {[
              {
                icon: <MapPin className="w-7 h-7 text-white" />,
                title: "VISIT US",
                content: [
                  "Nineth Planet Apartments",
                  "Suite P4 Karbarnet Gardens",
                  "Gong Rd, Nairobi",
                ],
              },
              {
                icon: <Phone className="w-7 h-7 text-white" />,
                title: "CALL US",
                content: ["020 20202 8640", "0792 280 484"],
              },
              {
                icon: <Mail className="w-7 h-7 text-white" />,
                title: "EMAIL US",
                content: ["info@kwco.legal", "www.kwco.legal"],
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="bg-slate-900 p-10 border-t-4 border-white hover:border-gray-400 transition-all duration-300"
              >
                <div className="mb-6">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-black mb-6 text-white uppercase tracking-tight">
                  {contact.title}
                </h3>
                {contact.content.map((line, lineIndex) => (
                  <p key={lineIndex} className="text-gray-400 mb-2 text-sm font-light">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mb-20">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-slate-900 font-bold px-10 py-5 uppercase tracking-wide hover:bg-slate-100 transition-all duration-300 text-base"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>

          <div className="bg-slate-900 p-12 border-l-4 border-white">
            <div className="mb-6">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tight">
              EMERGENCY LEGAL SERVICES
            </h3>
            <p className="text-gray-400 mb-6 text-sm font-light">
              For urgent legal matters outside office hours
            </p>
            <p className="text-4xl font-black text-white tracking-tight">+254 725 766457</p>
          </div>
        </div>
      </section>

      {/* Corporate Final CTA Section */}
      <section className="py-32 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <div className="mb-8">
              <span className="text-gray-400 font-semibold text-xs uppercase tracking-widest">
                Start Your Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-10 text-white leading-[0.95] tracking-tight uppercase">
              READY TO WORK WITH
              <br />
              <span className="text-slate-300">EXCELLENCE?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed font-light mb-12">
              Let our experienced team of legal professionals guide you through your legal matters. 
              Experience the difference that dedicated, professional legal services can make for your case.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-slate-900 font-bold px-10 py-5 text-base uppercase tracking-wide hover:bg-slate-100 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
            <Link
              to="/consultation"
              className="inline-flex items-center border-2 border-white text-white px-10 py-5 text-base uppercase tracking-wide hover:bg-white hover:text-slate-900 transition-all duration-300 font-bold"
            >
              Book a Consultation
              <Calendar className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-on-scroll {
          opacity: 0;
        }

        .animate-on-scroll.animate-fade-in-up {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Home;
