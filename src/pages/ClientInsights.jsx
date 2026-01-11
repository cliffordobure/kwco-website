// src/pages/ClientInsights.js
import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  Building2,
  Star,
  Users,
  Award,
} from "lucide-react";
import law from "./../assets/newImages/ourclients.png";
import postbank from "./../assets/client/posta.jpeg";
import hash from "./../assets/headers/hashi.png";
import alphajiri from "./../assets/client/alphajiri.png";
import kingdombank from "./../assets/client/kingdom bank.png";
import bidco from "./../assets/client/bidco_logo.png";
import speed_capital from "./../assets/client/speed_capital.jpeg";

const ClientInsights = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const insights = [
    {
      id: 1,
      title: "Posta Kenya",
      image: postbank,
      category: "Financial",
      description:
        "Successfully handled complex debt recovery and legal compliance matters for this national postal service provider.",
    },
    {
      id: 2,
      title: "Hashi Energy",
      image: hash,
      category: "Technology",
      description:
        "Provided comprehensive legal services for energy sector regulations and commercial transactions.",
    },
    {
      id: 3,
      title: "Alphajiri",
      image: alphajiri,
      category: "Financial",
      description:
        "Expert legal guidance for corporate governance, compliance, and commercial law matters.",
    },
    {
      id: 4,
      title: "Kingdom Bank",
      image: kingdombank,
      category: "Financial",
      description:
        "Strategic legal solutions for banking regulations, compliance, and financial transactions.",
    },
    {
      id: 5,
      title: "Bidco Africa",
      image: bidco,
      category: "Financial",
      description:
        "Comprehensive legal services for manufacturing sector regulations and commercial law matters.",
    },
    {
      id: 6,
      title: "Speed Capital",
      image: speed_capital,
      category: "Healthcare",
      description:
        "Specialized legal support for healthcare sector compliance and regulatory matters.",
    },
  ];

  const categories = ["All", "Financial", "Technology", "Healthcare"];

  const filteredInsights =
    selectedCategory === "All"
      ? insights
      : insights.filter((insight) => insight.category === selectedCategory);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20 animate-pulse"></div>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={law}
            alt="Client Insights Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-slate-900/40"></div>
        </div>

        {/* Enhanced Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <div className="animate-fade-in-up">
            {/* Animated Logo/Badge */}
            <div className="mb-8 animate-bounce-slow">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl shadow-blue-500/50">
                <Building2 className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
                Our Clients
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Our Trusted Clients in Business & Legal Practice
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Introduction Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6">
              Trusted by{" "}
              <span className="text-blue-400">Leading Organizations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are proud to work with a diverse range of clients across
              industries such as finance, technology, and healthcare. Each
              partnership reflects our commitment to delivering tailored
              solutions that drive real impact. From innovative startups to
              established enterprises, our clients trust us to support their
              growth, solve complex challenges, and achieve long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Category Filter */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll opacity-0 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-white mb-6">
              Filter by <span className="text-blue-400">Industry</span>
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll opacity-0 animate-fade-in-up">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/50"
                    : "bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Insights Grid */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Client Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the diverse range of organizations that trust us with
              their legal needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredInsights.length > 0 ? (
              filteredInsights.map((insight, index) => (
                <div
                  key={insight.id}
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={insight.image}
                      alt={insight.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold inline-block">
                        {insight.category}
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {insight.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-400 py-16">
                <div className="w-24 h-24 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-gray-500" />
                </div>
                <p className="text-xl">No clients found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="animate-on-scroll opacity-0 animate-fade-in-up">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-500/30">
              <Star className="w-10 h-10 text-blue-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay <span className="text-blue-400">Updated</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter for the latest legal insights and
              updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-6 py-4 rounded-xl border border-gray-600 bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 flex-1"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-black text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="animate-on-scroll opacity-0 animate-fade-in-up">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-500/30">
              <Award className="w-10 h-10 text-blue-400" />
            </div>
            <h2 className="text-5xl font-bold mb-8 text-white">
              Need <span className="text-blue-400">Legal Advice</span>?
            </h2>
            <p className="text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Our team is ready to help you with expert legal guidance and
              strategic solutions
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-xl text-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Contact Us Today
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
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

export default ClientInsights;
