// src/pages/About/CoreValues.js
import React, { useEffect } from "react";
import {
  Shield,
  Scale,
  Heart,
  Award,
  Users,
  Lightbulb,
  ArrowRight,
  Target,
  TrendingUp,
  Star,
  CheckCircle,
} from "lucide-react";
import law from "./../../assets/newImages/kwcoteaminoffice2.jpg";
import Collaboration from "./../../assets/newImages/sk (2).jpg";

const CoreValues = () => {
  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animation will be handled by CSS classes
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our dealings, ensuring transparency and honesty in every interaction.",
      details: [
        "Maintaining confidentiality",
        "Acting with honesty",
        "Avoiding conflicts of interest",
        "Upholding professional ethics",
      ],
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      icon: <Scale className="w-12 h-12 text-blue-500" />,
      title: "Justice",
      description:
        "We are committed to the pursuit of justice and fairness, ensuring equal access to legal representation.",
      details: [
        "Fighting for what's right",
        "Ensuring fair representation",
        "Promoting equality before the law",
        "Defending the rule of law",
      ],
      color: "from-slate-50 to-slate-100",
      borderColor: "border-slate-200",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, continuously improving our skills and services.",
      details: [
        "Delivering quality work",
        "Continuous learning",
        "Attention to detail",
        "Exceeding expectations",
      ],
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-500" />,
      title: "Compassion",
      description:
        "We treat every client with empathy and understanding, recognizing the human element in legal matters.",
      details: [
        "Listening to client needs",
        "Showing empathy",
        "Providing emotional support",
        "Understanding unique circumstances",
      ],
      color: "from-slate-50 to-slate-100",
      borderColor: "border-slate-200",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Teamwork",
      description:
        "We believe in the power of collaboration, working together to achieve the best outcomes for our clients.",
      details: [
        "Collaborative approach",
        "Sharing knowledge",
        "Supporting colleagues",
        "Collective problem-solving",
      ],
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-blue-500" />,
      title: "Innovation",
      description:
        "We embrace new ideas and technologies to provide better, more efficient legal services.",
      details: [
        "Adopting new technologies",
        "Creative solutions",
        "Continuous improvement",
        "Forward-thinking approach",
      ],
      color: "from-slate-50 to-slate-100",
      borderColor: "border-slate-200",
    },
  ];

  const valueStats = [
    {
      number: "100%",
      label: "Ethical Standards",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      icon: <Heart className="w-6 h-6" />,
    },
    {
      number: "15+",
      label: "Years of Excellence",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "500+",
      label: "Cases Handled",
      icon: <Scale className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${law})`,
            filter: "brightness(0.3) contrast(1.2)",
          }}
        />

        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

        {/* Enhanced Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Core Values
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              The Principles That Guide Everything We Do • Building Trust
              Through Consistent Values
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#values"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                Discover Our Values
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
            {valueStats.map((stat, index) => (
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

      {/* Enhanced Values Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-8">
              Values That <span className="text-blue-600">Define Us</span>
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 max-w-4xl mx-auto">
              <p className="text-xl text-slate-700 leading-relaxed">
                At KWCO Advocates, our core values are more than just words –
                they are the foundation of our practice and the principles that
                guide every decision we make. These values shape our culture,
                define our approach to law, and ensure we deliver the highest
                quality service to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Values Grid */}
      <section
        id="values"
        className="py-24 bg-gradient-to-br from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-blue-600">Six Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each value represents a commitment to excellence and ethical
              practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${value.color} p-8 rounded-2xl shadow-xl border ${value.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {value.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {value.description}
                </p>
                <ul className="space-y-3">
                  {value.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values in Action */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our Values <span className="text-blue-600">in Action</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how our values translate into exceptional legal services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 animate-fade-in-left">
              <div className="relative">
                <img
                  src={Collaboration}
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 animate-fade-in-right">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-3xl font-bold mb-6 text-slate-800">
                  Living Our Values Every Day
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our values are reflected in everything we do, from how we
                  interact with clients to how we approach complex legal
                  challenges. We believe that by staying true to these
                  principles, we can make a positive impact on our clients'
                  lives and contribute to a better legal system in Kenya.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Every member of our team is committed to upholding these
                  values, ensuring that KWCO Advocates remains a firm you can
                  trust with your most important legal matters.
                </p>
                <a
                  href="/our-people"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Meet Our Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Impact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-8">
              The <span className="text-blue-300">Impact</span> of Our Values
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              How our core values create positive outcomes for our clients and
              community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12 text-blue-300" />,
                title: "Client Trust",
                description:
                  "Building lasting relationships through consistent ethical behavior and transparent communication",
              },
              {
                icon: <Star className="w-12 h-12 text-blue-300" />,
                title: "Quality Results",
                description:
                  "Delivering exceptional outcomes through excellence in every aspect of our practice",
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-blue-300" />,
                title: "Community Impact",
                description:
                  "Contributing to a better legal system and society through our values-driven approach",
              },
            ].map((impact, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                  {impact.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {impact.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">
              Experience Our <span className="text-blue-600">Values</span> in
              Action
            </h2>
            <p className="text-xl mb-8 text-gray-600 leading-relaxed">
              See how our values translate into exceptional legal services for
              our clients. Let our experienced team of legal professionals help
              you with your legal needs.
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

export default CoreValues;
