/* eslint-disable no-unused-vars */
// src/pages/PracticeAreas/PracticeAreas.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Scale,
  Briefcase,
  FileText,
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Clock,
  Star,
  ChevronRight,
  Building2,
  Target,
  Zap,
} from "lucide-react";

const PracticeAreas = () => {
  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animation will be handled by CSS
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const practiceAreas = [
    {
      id: "litigation",
      icon: <Scale className="w-8 h-8 text-blue-600" />,
      title: "Litigation",
      description:
        "Comprehensive litigation services across civil, commercial, and constitutional matters. Our experienced advocates represent clients in all levels of Kenyan courts with strategic precision and unwavering dedication.",
      services: [
        "Civil Litigation",
        "Commercial Disputes",
        "Constitutional Litigation",
        "Judicial Review",
        "Employment Disputes",
        "Alternative Dispute Resolution",
      ],
      stats: "95% Success Rate",
      link: "/practice-areas/litigation",
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      id: "debt-collection",
      icon: <Briefcase className="w-8 h-8 text-emerald-600" />,
      title: "Debt Collection",
      description:
        "Strategic debt recovery solutions to help businesses and financial institutions manage their credit portfolios effectively and recover outstanding debts with proven methodologies.",
      services: [
        "Debt Recovery",
        "Demand Letters",
        "Negotiation & Settlement",
        "Asset Tracing",
        "Bankruptcy Proceedings",
        "Credit Portfolio Management",
      ],
      stats: "87% Recovery Rate",
      link: "/practice-areas/credit-collection",
      color: "from-emerald-500 to-emerald-700",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
    },
    {
      id: "conveyancing",
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: "Conveyancing",
      description:
        "Full-service conveyancing solutions for property transactions, ensuring smooth transfers and protecting our clients' interests in real estate matters with meticulous attention to detail.",
      services: [
        "Property Sales & Purchases",
        "Title Searches",
        "Due Diligence",
        "Lease Agreements",
        "Property Registration",
        "Land Dispute Resolution",
      ],
      stats: "500+ Transactions",
      link: "/practice-areas/conveyancing",
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      id: "dispute-resolution",
      icon: <Shield className="w-8 h-8 text-orange-600" />,
      title: "Dispute Resolution",
      description:
        "Alternative dispute resolution services including mediation and arbitration, providing efficient and cost-effective solutions to conflicts outside the courtroom with expert facilitation.",
      services: [
        "Mediation",
        "Arbitration",
        "Negotiation",
        "Commercial ADR",
        "Labor Disputes",
        "Family Mediation",
      ],
      stats: "92% Settlement Rate",
      link: "/practice-areas/dispute-resolution",
      color: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: "50+",
      label: "Years Combined Experience",
      description: "Deep expertise in Kenyan legal system",
    },
    {
      icon: <Award className="w-8 h-8 text-emerald-600" />,
      number: "1000+",
      label: "Successful Cases",
      description: "Proven track record of excellence",
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      number: "24/7",
      label: "Client Support",
      description: "Always available for urgent matters",
    },
    {
      icon: <Star className="w-8 h-8 text-orange-600" />,
      number: "100%",
      label: "Client Satisfaction",
      description: "Committed to exceeding expectations",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img
            src="src/assets/newImages/slidder1.jpg"
            alt="Practice Areas Background"
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Our Practice Areas
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive Legal Services Tailored to Your Needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-10 py-5 rounded-xl text-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center"
              >
                Get Legal Consultation
                <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#practice-areas"
                className="group border-2 border-white/30 text-white px-10 py-5 rounded-xl text-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center"
              >
                Explore Services
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Excellence in{" "}
              <span className="text-blue-600">Legal Practice</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              At KWCO Advocates, we offer specialized legal services across four
              core practice areas. Our team of experienced lawyers brings deep
              expertise and a proven track record in each of these fields,
              ensuring you receive the highest quality legal representation
              tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section
        id="practice-areas"
        className="py-24 bg-gradient-to-br from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Practice Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal solutions across all major practice areas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {practiceAreas.map((area, index) => (
              <div
                key={area.id}
                className={`group bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up ${area.bgColor}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div
                      className={`w-16 h-16 ${area.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      {area.icon}
                    </div>
                    <div className="text-right">
                      <div
                        className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${area.color} text-white`}
                      >
                        {area.stats}
                      </div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {area.description}
                  </p>

                  {/* Services */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                      Key Services:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {area.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={area.link}
                    className={`inline-flex items-center text-lg font-semibold bg-gradient-to-r ${area.color} text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-blue-400">KWCO Advocates</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence and proven track record speaks for
              itself
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-3">
                  {stat.number}
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">
                  {stat.label}
                </h3>
                <p className="text-gray-300">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <div className="animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Contact us today to discuss your legal needs and discover how our
              expertise can provide the strategic solutions you require.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-10 py-5 rounded-xl text-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center"
              >
                Schedule a Consultation
                <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/our-people"
                className="group border-2 border-white/30 text-white px-10 py-5 rounded-xl text-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm flex items-center"
              >
                Meet Our Team
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
