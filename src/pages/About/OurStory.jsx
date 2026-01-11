/* eslint-disable no-unused-vars */
// src/pages/About/OurStory.js
import React, { useState, useEffect } from "react";
import {
  Calendar,
  ArrowRight,
  Users,
  Award,
  Target,
  TrendingUp,
  Building2,
  Star,
} from "lucide-react";
import law from "./../../assets/newImages/slidder6.jpg";

const OurStory = () => {
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

  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      description:
        "KWCO was founded by Kamuti Waweru with a vision to provide exceptional legal services in Kenya.",
      icon: <Building2 className="w-8 h-8 text-blue-500" />,
      achievement: "Established",
    },
    {
      year: "2017",
      title: "Major Victories",
      description:
        "Won our landmark constitutional case, establishing our reputation in litigation.",
      icon: <Award className="w-8 h-8 text-blue-500" />,
      achievement: "Landmark Case",
    },
    {
      year: "2019",
      title: "Rapid Expansion",
      description:
        "Expanded our practice areas and team to serve more clients.",
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      achievement: "Growth",
    },
    {
      year: "2021",
      title: "Regional Recognition",
      description:
        "Recognized as one of East Africa's leading law firms for commercial litigation.",
      icon: <Star className="w-8 h-8 text-blue-500" />,
      achievement: "Awarded",
    },
    {
      year: "2023",
      title: "Digital Innovation",
      description:
        "Embraced technology to better serve our clients in the digital age.",
      icon: <Target className="w-8 h-8 text-blue-500" />,
      achievement: "Innovation",
    },
    {
      year: "2025",
      title: "Continued Excellence",
      description:
        "Celebrating 10+ years of legal excellence and client satisfaction.",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      achievement: "Excellence",
    },
  ];

  const stats = [
    {
      number: "10+",
      label: "Years of Excellence",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      number: "500+",
      label: "Cases Handled",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: <Star className="w-6 h-6" />,
    },
    {
      number: "200+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img
            src={law}
            alt="Our Story Background"
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Enhanced Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Story
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              A Legacy of Legal Excellence • Building Trust Since 2015 •
              Delivering Justice with Integrity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#story"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                Discover Our Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/10 to-slate-800/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Story Content */}
      <section id="story" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-blue-600">Founding Story</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From humble beginnings to becoming one of Kenya's most respected
              law firms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-on-scroll opacity-0 animate-fade-in-left">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  The Vision Begins
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  KWCO Advocates traces its roots to Kamuti Waweru, a visionary
                  lawyer with a steadfast commitment to justice and excellence.
                  Building on extensive experience of legal practice, Kamuti
                  officially founded Kamuti Waweru & Co. Advocates (KWCO
                  Advocates) on 10th June 2015, driven by a mission to deliver
                  exceptional, client-centered legal services that transform
                  lives.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <Calendar className="w-5 h-5 mr-2" />
                  Founded June 10, 2015
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 animate-fade-in-right">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Growth & Excellence
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Starting with a small Nairobi office and a dedicated team of
                  lawyers, KWCO Advocates has grown into one of Kenya's most
                  respected law firms. This growth reflects our unwavering focus
                  on integrity, innovation, and client satisfaction in every
                  case we undertake.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Continuous Growth
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 animate-fade-in-up">
            <div className="bg-gradient-to-br from-blue-600/10 to-blue-800/10 p-8 rounded-2xl border border-blue-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Our Legacy Today
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                Today, KWCO Advocates stands as a testament to the power of
                purpose-driven advocacy. We honor our founder's legacy by
                blending time-tested values with modern legal strategies,
                ensuring adaptable, results-oriented representation for
                individuals, businesses, and institutions nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-blue-600">Journey Through Time</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Key milestones that shaped our path to excellence
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-600"></div>

            {/* Timeline items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center animate-on-scroll opacity-0 animate-fade-in-up ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"
                    }`}
                  >
                    <div
                      className={`group bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                        index % 2 === 0
                          ? "hover:translate-x-2"
                          : "hover:-translate-x-2"
                      }`}
                    >
                      <div className="flex items-center mb-6 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          {milestone.icon}
                        </div>
                        <div>
                          <span className="text-3xl font-bold text-blue-600">
                            {milestone.year}
                          </span>
                          <div className="text-sm text-blue-500 font-semibold">
                            {milestone.achievement}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Future Vision */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-8">
              Looking to the <span className="text-blue-300">Future</span>
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto">
              As we move forward, KWCO Advocates remains steadfast in our
              commitment to innovation and adaptability, while upholding the
              core values of integrity, client-centered service, and excellence
              that have defined us since our founding. With a focus on strategic
              growth, we are poised to expand our practice areas, integrate
              cutting-edge legal technologies, and further elevate our standards
              of representation.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Target className="w-12 h-12 text-blue-300" />,
                  title: "Strategic Growth",
                  description:
                    "Expanding our practice areas and geographic reach",
                },
                {
                  icon: <TrendingUp className="w-12 h-12 text-blue-300" />,
                  title: "Innovation",
                  description: "Integrating cutting-edge legal technologies",
                },
                {
                  icon: <Star className="w-12 h-12 text-blue-300" />,
                  title: "Excellence",
                  description: "Elevating our standards of representation",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                >
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Join Our Story
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">
              Ready to Be Part of Our{" "}
              <span className="text-blue-600">Story</span>?
            </h2>
            <p className="text-xl mb-8 text-gray-600 leading-relaxed">
              Let our experienced team of legal professionals help you with your
              legal needs. Get started today and experience the difference that
              professional legal services make.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Started Today
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
