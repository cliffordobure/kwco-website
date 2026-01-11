// src/pages/OurPeople.js
import React, { useEffect } from "react";
import teamicon from "./../assets/newImages/slidder3.jpg";
import {
  Mail,
  Phone,
  Linkedin,
  Award,
  Users,
  Star,
  Target,
  TrendingUp,
  ArrowRight,
  Building2,
  Shield,
  CheckCircle,
} from "lucide-react";
import sammy from "./../assets/newImages/sk8inoffice.jpg";
import bonny from "./../assets/newImages/bonnyonebest.jpg";
import seif from "./../assets/newImages/seifbest.jpg";
// import melvin from "./../assets/newImages/Melvin.jpg";
// import alexender from "./../assets/newImages/alex.jpg";
import eddie from "./../assets/newImages/eddietbest.jpg";
import jackline from "./../assets/newImages/jackylanding.jpg";

const OurPeople = () => {
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

  const partners = [
    {
      name: "SK Waweru",
      position: "Managing Partner",
      image: sammy,
      expertise: ["Managing Partner", "Head of Dispute Resolution"],
      experience: "20+ years",
      bio: "SK Waweru is the founding and managing partner of KWCO Advocates and has established himself as one of Kenya's leading advocates in commercial litigation and corporate law. With over two decades of experience, he has successfully handled complex cases and built a reputation for excellence in legal practice.",
      email: "skwaweru@kwco.legal",
      phone: "+254725766457",
      linkedin: "www.linkedin.com/in/sk-waweru-52895528",
      achievements: [
        "500+ Cases Handled",
        "95% Success Rate",
        "15+ Years Leadership",
      ],
    },
  ];

  const associates = [
    {
      name: "Bonniface Wambua",
      position: "Head of Recoveries",
      image: bonny,
      expertise: "Debt Collection & Recovery",
      experience: "8+ years",
    },
    {
      name: "Eddie Mwiti",
      position: "Senior Associate",
      image: eddie,
      expertise: "Commercial Litigation",
      experience: "12+ years",
    },
    {
      name: "Seif Mohammed",
      position: "Business Development Manager",
      image: seif,
      expertise: "Strategic Business Growth",
      experience: "10+ years",
    },

    {
      name: "Jackline Jowi",
      position: "Debt Collection Specialist",
      image: jackline,
      expertise: "Credit Management",
      experience: "7+ years",
    },
    // {
    //   name: "Alexender Mtua",
    //   position: "Pupil Advocate",
    //   image: alexender,
    //   expertise: "Legal Practice",
    //   experience: "2+ years",
    // },
  ];

  const teamStats = [
    {
      number: "20+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />,
    },
    {
      number: "500+",
      label: "Cases Handled",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "15+",
      label: "Team Members",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "Unwavering commitment to the highest standards of legal practice",
      icon: <Star className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Integrity",
      description: "Ethical conduct and transparent client relationships",
      icon: <Shield className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Innovation",
      description: "Modern approaches to complex legal challenges",
      icon: <Target className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Collaboration",
      description: "Team-based solutions for optimal client outcomes",
      icon: <Users className="w-8 h-8 text-blue-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img
            src={teamicon}
            alt="Our People Background"
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Enhanced Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="w-12 h-12 text-blue-400" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Our People
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Meet the Distinguished Professionals Behind Our Excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#team"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                Meet Our Team
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
            {teamStats.map((stat, index) => (
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

      {/* Enhanced Introduction */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-8">
              Our <span className="text-blue-600">Expert Team</span>
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 max-w-4xl mx-auto">
              <p className="text-xl text-slate-700 leading-relaxed">
                KWCO Advocates is powered by a team of seasoned professionals
                whose collective expertise spans diverse areas, including
                litigation, debt collection, conveyancing, and dispute
                resolution. Our unwavering dedication to excellence, innovation,
                and client-centered service has solidified our reputation as one
                of Kenya's premier legal authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Partners Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              <span className="text-blue-600">Managing Partner</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leadership that drives excellence and innovation
            </p>
          </div>

          <div className="space-y-20">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8 p-8 lg:p-12">
                  <div className="flex-shrink-0 w-full lg:w-1/3">
                    <div className="relative h-96 lg:h-80 overflow-hidden rounded-2xl shadow-xl">
                      <img
                        src={partner.image}
                        alt={partner.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/15 to-transparent rounded-2xl"></div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-6">
                    <div>
                      <h3 className="text-4xl font-bold mb-2 text-slate-800">
                        {partner.name}
                      </h3>
                      <p className="text-2xl text-blue-600 font-semibold mb-4">
                        {partner.position}
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {partner.bio}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-slate-800 mb-4 text-lg">
                          Areas of Expertise
                        </h4>
                        <ul className="space-y-3">
                          {partner.expertise.map((area, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-700"
                            >
                              <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                              {area}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-4 text-lg">
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {partner.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-700"
                            >
                              <Award className="w-5 h-5 text-blue-500 mr-3" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                      <h4 className="font-bold text-slate-800 mb-4 text-lg">
                        Contact Information
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-700">
                          <Mail className="w-5 h-5 text-blue-500 mr-3" />
                          <a
                            href={`mailto:${partner.email}`}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {partner.email}
                          </a>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Phone className="w-5 h-5 text-blue-500 mr-3" />
                          <a
                            href={`tel:${partner.phone}`}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {partner.phone}
                          </a>
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Linkedin className="w-5 h-5 text-blue-500 mr-3" />
                          <a
                            href={partner.linkedin}
                            className="hover:text-blue-600 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            LinkedIn Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Associates Section */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-blue-600">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated professionals committed to delivering exceptional legal
              services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associates.map((associate, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden rounded-t-2xl">
                  <img
                    src={associate.image}
                    alt={associate.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-800">
                      {associate.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3 text-lg">
                      {associate.position}
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-600 font-medium">
                        {associate.expertise}
                      </p>
                      {/* <p className="text-sm text-gray-500">
                        {associate.experience} Experience
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide our team and define our culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Join Our Team Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-8">
              Join Our <span className="text-blue-300">Team</span>
            </h2>
            <p className="text-xl mb-10 text-gray-200 leading-relaxed">
              We're always looking for talented legal professionals to join our
              growing team. If you're passionate about excellence and innovation
              in legal practice, we'd love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              View Career Opportunities
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPeople;
