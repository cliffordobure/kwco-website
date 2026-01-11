// src/pages/PracticeAreas/Conveyancing.js
import React, { useEffect } from "react";
import {
  FileText,
  Home,
  Search,
  Shield,
  Key,
  ClipboardCheck,
  Check,
  ArrowRight,
  Target,
  Award,
  TrendingUp,
  Star,
  Clock,
  CheckCircle,
  Users,
  Building2,
  DollarSign,
} from "lucide-react";
import law from "./../../assets/newImages/slidder4.jpg";

const Conveyancing = () => {
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
      title: "Property Sales & Purchases",
      description:
        "Complete legal support for buying and selling residential and commercial properties.",
      icon: <Home className="w-8 h-8 text-blue-500" />,
      stats: "500+ Transactions",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Title Searches",
      description:
        "Comprehensive searches to verify property ownership and identify any encumbrances.",
      icon: <Search className="w-8 h-8 text-blue-500" />,
      stats: "100% Accuracy",
      color: "from-slate-50 to-slate-100",
    },
    {
      title: "Due Diligence",
      description:
        "Thorough investigation of property documentation and legal compliance.",
      icon: <ClipboardCheck className="w-8 h-8 text-blue-500" />,
      stats: "Comprehensive",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Lease Agreements",
      description:
        "Drafting and reviewing commercial and residential lease agreements.",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      stats: "Expert Drafting",
      color: "from-slate-50 to-slate-100",
    },
    {
      title: "Property Registration",
      description:
        "Handling all aspects of property registration with the relevant authorities.",
      icon: <Key className="w-8 h-8 text-blue-500" />,
      stats: "Fast Processing",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Land Dispute Resolution",
      description:
        "Resolving boundary disputes, ownership conflicts, and other land-related issues.",
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      stats: "95% Success Rate",
      color: "from-slate-50 to-slate-100",
    },
  ];

  const propertyTypes = [
    "Residential Properties",
    "Commercial Buildings",
    "Industrial Properties",
    "Agricultural Land",
    "Development Land",
    "Mixed-Use Properties",
    "Condominiums",
    "Gated Communities",
  ];

  const conveyancingProcess = [
    {
      step: "1",
      title: "Initial Consultation",
      description:
        "Understanding your property transaction needs and requirements",
      icon: <Users className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "2",
      title: "Document Review",
      description: "Examining all relevant property documents and agreements",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "3",
      title: "Due Diligence",
      description: "Conducting searches and verifying property details",
      icon: <Search className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "4",
      title: "Contract Preparation",
      description: "Drafting or reviewing sale/purchase agreements",
      icon: <ClipboardCheck className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "5",
      title: "Transfer Process",
      description: "Managing the transfer of ownership and funds",
      icon: <Key className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "6",
      title: "Registration",
      description: "Completing property registration with authorities",
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Transactions Completed",
      icon: <Home className="w-6 h-6" />,
    },
    {
      number: "100%",
      label: "Success Rate",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "30-60",
      label: "Days Average",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Experienced Team",
      description: "Decades of experience in Kenyan property law",
      icon: <Users className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Thorough Due Diligence",
      description: "Comprehensive property searches and verification",
      icon: <Search className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Transparent Pricing",
      description: "Clear fee structure with no hidden costs",
      icon: <DollarSign className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Fast Turnaround",
      description: "Efficient processing of property transactions",
      icon: <Clock className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img
            src={law}
            alt="Conveyancing Background"
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Enhanced Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Conveyancing
              </span>{" "}
              Excellence
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Expert Property Transactions • Meticulous Legal Support • Secure
              Real Estate Solutions
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

      {/* Enhanced Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-8">
              Expert <span className="text-blue-600">Conveyancing</span>{" "}
              Practice
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 max-w-4xl mx-auto">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                Conveyancing Practice at KWCO Advocates delivers end-to-end
                legal services for residential, commercial, and industrial
                property transactions across Kenya. Our seasoned team ensures
                seamless, legally compliant dealings; from due diligence and
                title transfers to lease agreements and dispute mitigation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you're a first-time homebuyer, a commercial real estate
                investor, or managing a complex portfolio, we combine strategic
                legal expertise with meticulous attention to regulatory detail.
                Our client-centered approach prioritizes clarity, efficiency,
                and proactive risk management.
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
              Our <span className="text-blue-600">Conveyancing Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive property transaction services for all your real
              estate needs
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

      {/* Enhanced Conveyancing Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-blue-600">Conveyancing Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to successful property transactions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conveyancingProcess.map((process, index) => (
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
                {index < conveyancingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Property Types */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Property Types We <span className="text-blue-600">Handle</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive conveyancing services for all property types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-semibold text-gray-700 text-center text-lg">
                  {type}
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
              for Conveyancing?
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

      {/* Enhanced FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Common questions about our conveyancing services
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "How long does a typical property transaction take?",
                answer:
                  "Most property transactions take between 30-60 days from start to finish, depending on the complexity of the transaction and how quickly all parties can provide necessary documentation.",
              },
              {
                question: "What documents do I need to sell my property?",
                answer:
                  "You'll need the original title deed, national ID/passport, PIN certificate, latest land rates clearance certificate, and any relevant approvals or consents depending on the property type.",
              },
              {
                question:
                  "Do you handle both residential and commercial properties?",
                answer:
                  "Yes, we handle all types of properties including residential homes, commercial buildings, industrial properties, and agricultural land.",
              },
              {
                question: "What are your conveyancing fees?",
                answer:
                  "Our fees are based on the Advocates Remuneration Order and depend on the property value. We provide a detailed fee quote after our initial consultation.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-slate-800">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
              Ready to Start Your{" "}
              <span className="text-blue-300">Property Transaction</span>?
            </h2>
            <p className="text-xl mb-10 text-gray-200 leading-relaxed">
              Contact our conveyancing team for expert assistance. Let our
              experienced professionals guide you through your property
              transaction with confidence.
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

export default Conveyancing;
