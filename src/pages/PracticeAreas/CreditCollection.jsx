// src/pages/PracticeAreas/CreditCollection.js
import React, { useEffect } from "react";
import {
  Briefcase,
  DollarSign,
  FileText,
  Search,
  Shield,
  BarChart3,
  Check,
  ArrowRight,
  Target,
  Award,
  TrendingUp,
  Star,
  Clock,
  CheckCircle,
  Users,
} from "lucide-react";
import law from "./../../assets/newImages/slidder4.jpg";

const CreditCollection = () => {
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

  const services = [
    {
      title: "Debt Recovery",
      description:
        "Efficient recovery of outstanding debts through legal proceedings and enforcement mechanisms.",
      icon: <DollarSign className="w-8 h-8 text-blue-500" />,
      stats: "85% Recovery Rate",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Demand Letters",
      description:
        "Professional demand letters that comply with legal requirements and maximize recovery potential.",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      stats: "95% Response Rate",
      color: "from-slate-50 to-slate-100",
    },
    {
      title: "Negotiation & Settlement",
      description:
        "Skilled negotiation to reach favorable settlements and payment arrangements.",
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      stats: "90% Settlement Rate",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Asset Tracing",
      description:
        "Comprehensive asset searches to identify and locate debtor assets for recovery.",
      icon: <Search className="w-8 h-8 text-blue-500" />,
      stats: "Advanced Technology",
      color: "from-slate-50 to-slate-100",
    },
    {
      title: "Bankruptcy Proceedings",
      description:
        "Representation in bankruptcy and insolvency proceedings to maximize creditor recovery.",
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      stats: "Expert Advocacy",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Credit Portfolio Management",
      description:
        "Strategic management of credit portfolios to minimize defaults and optimize recovery.",
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      stats: "Portfolio Optimization",
      color: "from-slate-50 to-slate-100",
    },
  ];

  const industries = [
    "Banking & Financial Services",
    "Telecommunications",
    "Manufacturing",
    "Real Estate",
    "Healthcare",
    "Retail & Wholesale",
    "Energy & Utilities",
    "Insurance",
  ];

  const recoveryProcess = [
    {
      step: "1",
      title: "Initial Assessment",
      description:
        "Review of documentation and evaluation of recovery prospects",
      icon: <Target className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "2",
      title: "Demand & Notice",
      description: "Issue of statutory demand letters and legal notices",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "3",
      title: "Negotiation",
      description: "Attempted resolution through negotiation and settlement",
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "4",
      title: "Legal Action",
      description: "Institution of court proceedings when necessary",
      icon: <Shield className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "5",
      title: "Enforcement",
      description: "Execution of judgments and recovery of assets",
      icon: <Award className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "6",
      title: "Recovery",
      description: "Successful collection and remittance to client",
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
    },
  ];

  const successMetrics = [
    {
      number: "85%",
      label: "Average Recovery Rate",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "30",
      label: "Days Average Resolution",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      number: "KES 1B+",
      label: "Total Amount Recovered",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      number: "500+",
      label: "Satisfied Clients",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "High Recovery Rates",
      description:
        "Consistently achieving above-average recovery rates for our clients",
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Legal Expertise",
      description:
        "Deep understanding of debt collection laws and regulatory requirements",
      icon: <Shield className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Professional Approach",
      description:
        "Maintaining professionalism while pursuing aggressive recovery strategies",
      icon: <Award className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "No Recovery, No Fee",
      description:
        "Flexible fee arrangements including contingency-based options",
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img
            src={law}
            alt="Credit Collection Background"
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Enhanced Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Debt Collection
              </span>{" "}
              Excellence
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Strategic Debt Recovery • Proven Success Rates • Professional
              Excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#services"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                Explore Our Services
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
            {successMetrics.map((metric, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">
                  {metric.number}
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-8">
              Expert <span className="text-blue-600">Debt Collection</span>{" "}
              Practice
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 max-w-4xl mx-auto">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                KWCO Advocates' Debt Collection practice delivers end-to-end
                debt recovery solutions for businesses, financial institutions,
                and creditors nationwide. Leveraging our deep understanding of
                Kenya's legal and commercial landscape, we prioritize maximizing
                recovery rates while preserving client relationships and
                reputations.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team combines strategic legal expertise with pragmatic
                business insight to design recovery processes that align with
                your operational goals. Recognizing the unique complexities of
                each case, we craft tailored, results-driven strategies—from
                pre-litigation negotiations to enforcement of court judgments—to
                secure optimal outcomes efficiently and ethically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-blue-600">Debt Collection</span>{" "}
              Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive debt recovery solutions tailored to your business
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-600 font-semibold bg-blue-600/20 px-3 py-1 rounded-full">
                    {service.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Recovery Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-blue-600">Recovery Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to maximizing debt recovery success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recoveryProcess.map((process, index) => (
              <div
                key={index}
                className="relative animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                    {process.step}
                  </div>
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                    {process.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">
                    {process.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                {index < recoveryProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Industries We Serve */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Industries We <span className="text-blue-600">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Specialized debt collection services across diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-semibold text-gray-700 text-center text-lg">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Why Choose <span className="text-blue-600">KWCO Advocates</span>{" "}
              for Debt Recovery?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven track record and expertise make us the preferred choice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-8">
              Improve Your <span className="text-blue-300">Cash Flow</span>{" "}
              Today
            </h2>
            <p className="text-xl mb-10 text-gray-200 leading-relaxed">
              Let our expert team help you recover outstanding debts efficiently
              and professionally. Experience the difference that our proven debt
              collection strategies make.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Started Now
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreditCollection;
