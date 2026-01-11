/* eslint-disable no-unused-vars */
// src/pages/About/MissionVision.js
import React, { useState, useEffect } from "react";
import {
  Target,
  Eye,
  Compass,
  Star,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  Shield,
} from "lucide-react";
import law from "./../../assets/newImages/slidder9.jpg";

const MissionVision = () => {
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

  const missionPillars = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Client Excellence",
      description:
        "Providing personalized legal services that exceed client expectations.",
      color: "from-blue-50 to-blue-100",
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Professional Integrity",
      description:
        "Maintaining the highest ethical standards in all our legal practices.",
      color: "from-slate-50 to-slate-100",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      title: "Innovation",
      description:
        "Embracing new approaches to deliver better legal solutions.",
      color: "from-blue-50 to-blue-100",
    },
  ];

  const visionGoals = [
    {
      icon: <Compass className="w-8 h-8 text-blue-500" />,
      title: "Leadership",
      description:
        "Leading the transformation of legal services in Kenya through innovation and excellence.",
      color: "from-white to-gray-50",
    },
    {
      icon: <Star className="w-8 h-8 text-blue-500" />,
      title: "Recognition",
      description:
        "Becoming the benchmark for quality legal services in East Africa.",
      color: "from-white to-gray-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img
            src={law}
            alt="Mission Vision Background"
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Enhanced Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              Mission &{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Vision
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Our Purpose and the Future We're Building • Guiding Principles
              That Drive Our Success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#mission"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                Discover Our Purpose
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission Section */}
      <section id="mission" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mb-8 border border-blue-300">
              <Target className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-5xl font-bold mb-8 text-slate-800">
              Our <span className="text-blue-600">Mission</span>
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 max-w-4xl mx-auto">
              <p className="text-2xl text-slate-700 font-medium leading-relaxed">
                "To be the best law firm in Kenya by creating meaningful
                experiences for each client and delivering exceptional legal
                solutions that protect their interests and achieve their goals."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missionPillars.map((pillar, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${pillar.color} p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {pillar.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Vision Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mb-8 border border-slate-300">
              <Eye className="w-12 h-12 text-slate-600" />
            </div>
            <h2 className="text-5xl font-bold mb-8 text-slate-800">
              Our <span className="text-blue-600">Vision</span>
            </h2>
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 max-w-4xl mx-auto">
              <p className="text-2xl text-slate-700 font-medium leading-relaxed">
                "To be recognized as Kenya's most trusted legal partner, setting
                the standard for excellence in legal practice and becoming the
                first choice for clients seeking outstanding legal
                representation."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {visionGoals.map((goal, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${goal.color} p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                  {goal.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {goal.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Integration Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-8">
              How We <span className="text-blue-300">Achieve</span> Our Mission
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Our mission and vision are supported by core values that guide
              every decision and action
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-blue-300" />,
                title: "Integrity",
                description:
                  "Upholding the highest ethical standards in all our dealings",
              },
              {
                icon: <Target className="w-12 h-12 text-blue-300" />,
                title: "Excellence",
                description: "Striving for excellence in everything we do",
              },
              {
                icon: <Users className="w-12 h-12 text-blue-300" />,
                title: "Client Focus",
                description:
                  "Putting our clients' needs at the center of our practice",
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-blue-300" />,
                title: "Innovation",
                description:
                  "Embracing new ideas and technologies to serve better",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">
              Ready to Experience Our{" "}
              <span className="text-blue-600">Mission</span>?
            </h2>
            <p className="text-xl mb-8 text-gray-600 leading-relaxed">
              Let our experienced team of legal professionals help you with your
              legal needs. Experience the difference that our mission-driven
              approach makes.
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

export default MissionVision;
