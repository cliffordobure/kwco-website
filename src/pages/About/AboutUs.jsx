// src/pages/About/AboutUs.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Target,
  Shield,
  Award,
  Clock,
  Star,
  TrendingUp,
  Building2,
  ChevronRight,
  CheckCircle,
  Zap,
  Eye,
  Heart,
} from "lucide-react";
import law from "./../../assets/newImages/slidder6.jpg";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  const aboutSections = [
    {
      title: "Our Story",
      description:
        "Learn about our journey and how we became one of Kenya's leading law firms.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      link: "/about/our-story",
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      title: "Mission & Vision",
      description:
        "Discover our purpose and the future we're building for our clients.",
      icon: <Target className="w-8 h-8 text-emerald-600" />,
      link: "/about/mission-vision",
      color: "from-emerald-500 to-emerald-700",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
    },
    {
      title: "Core Values",
      description: "Understand the principles that guide everything we do.",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      link: "/about/core-values",
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
  ];

  const stats = [
    {
      number: "10+",
      label: "Years of Experience",
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      description: "Deep expertise in Kenyan legal system",
    },
    {
      number: "1000+",
      label: "Cases Won",
      icon: <Award className="w-8 h-8 text-emerald-600" />,
      description: "Proven track record of excellence",
    },
    {
      number: "500+",
      label: "Happy Clients",
      icon: <Heart className="w-8 h-8 text-purple-600" />,
      description: "Client satisfaction and trust",
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      description: "Consistent positive outcomes",
    },
  ];

  const whyChooseUs = [
    {
      title: "Excellence",
      description:
        "Commitment to delivering exceptional legal services with unwavering dedication to quality.",
      icon: <Award className="w-8 h-8 text-blue-600" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Integrity",
      description:
        "Upholding the highest ethical standards in all our professional relationships.",
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      color: "from-emerald-500 to-emerald-700",
    },
    {
      title: "Client Focus",
      description:
        "Putting our clients' needs first with personalized attention and care.",
      icon: <Users className="w-8 h-8 text-purple-600" />,
      color: "from-purple-500 to-purple-700",
    },
    {
      title: "Results Driven",
      description:
        "Focused on achieving the best outcomes for our clients through strategic advocacy.",
      icon: <Target className="w-8 h-8 text-orange-600" />,
      color: "from-orange-500 to-orange-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img
            src={law}
            alt="About KWCO Advocates Background"
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="animate-fade-in-up">
            {/* Animated Badge */}
            <div className="mb-8 animate-bounce-slow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl shadow-blue-500/50">
                <Building2 className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About KWCO Advocates
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Kamuti Waweru & Co. Advocates - Your Trusted Legal Partner in
              Kenya
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-10 py-5 rounded-xl text-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center"
              >
                Get Legal Consultation
                <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#about-content"
                className="group border-2 border-white/30 text-white px-10 py-5 rounded-xl text-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center"
              >
                Learn More About Us
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Introduction Section */}
      <section id="about-content" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Who <span className="text-blue-600">We Are</span>
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200 max-w-5xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                KWCO Advocates is a premier law firm in Nairobi, Kenya.
                Established on 10th June 2015, we pride ourselves on being a
                top-notch law firm specializing in litigation, conveyancing,
                debt collection and dispute resolution, delivering strategic,
                client-centered solutions tailored to individuals, businesses,
                and institutions nationwide. We combine modern legal expertise
                with a commitment to excellence, ensuring efficient,
                results-driven representation across all sectors.
              </p>
            </div>
          </div>

          {/* Enhanced About Sections Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {aboutSections.map((section, index) => (
              <Link
                key={index}
                to={section.link}
                className={`group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up ${section.bgColor}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`w-16 h-16 ${section.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {section.description}
                </p>
                <div
                  className={`flex items-center text-lg font-semibold bg-gradient-to-r ${section.color} bg-clip-text text-transparent group-hover:translate-x-2 transition-transform duration-300`}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6">
              Our <span className="text-blue-400">Achievements</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Numbers that reflect our commitment to excellence and client
              success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-3">
                  {stat.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">
                  {stat.label}
                </h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-blue-600">KWCO Advocates</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence and client-centered approach sets us
              apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <div className="animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-8">
              Ready to Work With <span className="text-blue-400">Us</span>?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Let our experienced team of legal professionals help you with your
              legal needs. We're here to provide strategic solutions and
              exceptional representation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-10 py-5 rounded-xl text-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center"
              >
                Get In Touch
                <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/practice-areas"
                className="group border-2 border-white/30 text-white px-10 py-5 rounded-xl text-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center"
              >
                Explore Our Services
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
