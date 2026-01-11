// src/pages/PracticeAreas/DisputeResolution.js
import React, { useEffect } from "react";
import {
  Shield,
  Users,
  Gavel,
  HandshakeIcon,
  Scale,
  MessageSquare,
  Check,
  ArrowRight,
  Target,
  Award,
  TrendingUp,
  Star,
  Clock,
  CheckCircle,
  Building2,
  Zap,
  Eye,
  Lock,
  FileText,
} from "lucide-react";
import dispute from "./../../assets/newImages/slidder3.jpg";

const DisputeResolution = () => {
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
      title: "Mediation",
      description:
        "Facilitating dialogue between parties to reach mutually acceptable solutions without court intervention.",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      stats: "90% Success Rate",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Arbitration",
      description:
        "Private dispute resolution with binding decisions made by experienced arbitrators.",
      icon: <Gavel className="w-8 h-8 text-blue-500" />,
      stats: "Binding Decisions",
      color: "from-slate-50 to-slate-100",
    },
    {
      title: "Negotiation",
      description:
        "Strategic negotiation services to resolve disputes efficiently and protect your interests.",
      icon: <HandshakeIcon className="w-8 h-8 text-blue-500" />,
      stats: "Strategic Approach",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Commercial ADR",
      description:
        "Specialized alternative dispute resolution for complex commercial and business disputes.",
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      stats: "Expert Handling",
      color: "from-slate-50 to-slate-100",
    },
    {
      title: "Labor Disputes",
      description:
        "Resolution of employment and labor disputes through conciliation and mediation.",
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      stats: "Specialized",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Family Mediation",
      description:
        "Sensitive handling of family disputes including divorce, custody, and inheritance matters.",
      icon: <Scale className="w-8 h-8 text-blue-500" />,
      stats: "Confidential",
      color: "from-slate-50 to-slate-100",
    },
  ];

  const benefits = [
    "Cost-effective compared to litigation",
    "Faster resolution of disputes",
    "Confidential proceedings",
    "Preservation of business relationships",
    "Flexible and informal procedures",
    "Control over the outcome",
    "Enforcement of agreements",
    "Expert neutral facilitators",
  ];

  const disputeTypes = [
    "Commercial Contract Disputes",
    "Partnership & Shareholder Conflicts",
    "Employment & Labor Disputes",
    "Construction Disputes",
    "Insurance Claims",
    "Intellectual Property Disputes",
    "Family & Inheritance Matters",
    "Land & Property Disputes",
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description:
        "Assessment of your dispute and recommendation of appropriate ADR method",
      icon: <Users className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "2",
      title: "Agreement to Proceed",
      description:
        "Parties agree on the ADR process and select neutral facilitator",
      icon: <HandshakeIcon className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "3",
      title: "Preparation",
      description: "Document exchange and preparation of positions",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "4",
      title: "ADR Sessions",
      description: "Facilitated discussions, negotiations, or hearings",
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "5",
      title: "Resolution",
      description: "Agreement reached or binding decision made",
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
    },
    {
      step: "6",
      title: "Implementation",
      description: "Documentation and enforcement of the resolution",
      icon: <Shield className="w-8 h-8 text-blue-500" />,
    },
  ];

  const stats = [
    {
      number: "90%",
      label: "Success Rate",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "1-3",
      label: "Months Average",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      number: "500+",
      label: "Cases Resolved",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Experienced Mediators & Arbitrators",
      description:
        "Our team includes accredited mediators and arbitrators with extensive experience in various fields of law.",
      icon: <Users className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "High Success Rate",
      description:
        "Over 90% of our mediation cases result in successful settlements, saving time and money.",
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Tailored Approach",
      description:
        "We customize our ADR approach to suit the specific needs of each dispute.",
      icon: <Target className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Confidential Process",
      description:
        "All ADR proceedings are strictly confidential, protecting your business interests.",
      icon: <Lock className="w-6 h-6 text-blue-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img
            src={dispute}
            alt="Dispute Resolution Background"
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Enhanced Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Shield className="w-12 h-12 text-blue-400" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Dispute Resolution
              </span>{" "}
              Excellence
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Strategic Conflict Resolution • Expert Mediation • Optimal
              Outcomes
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
              Expert <span className="text-blue-600">Dispute Resolution</span>{" "}
              Practice
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 max-w-4xl mx-auto">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                KWCO Advocates' Dispute Resolution practice offers comprehensive
                alternative dispute resolution (ADR) services designed to
                resolve conflicts efficiently and cost-effectively outside the
                courtroom. Our seasoned team of mediators and arbitrators
                facilitates amicable settlements tailored to preserve
                relationships, reduce costs, and deliver outcomes aligned with
                your commercial or personal objectives.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Recognizing that litigation is not always the optimal route, we
                prioritize flexible, confidential, and client-centered solutions
                for disputes ranging from complex commercial disagreements to
                sensitive family matters. Our approach balances legal rigor with
                practical empathy, ensuring resolutions that respect all
                parties' interests.
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
              Our{" "}
              <span className="text-blue-600">Dispute Resolution Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive ADR services for all types of disputes
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

      {/* Enhanced Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Benefits of{" "}
              <span className="text-blue-600">
                Alternative Dispute Resolution
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Why ADR is the preferred choice for modern dispute resolution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Types of Disputes */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Types of Disputes We <span className="text-blue-600">Handle</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive dispute resolution for all sectors and industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {disputeTypes.map((type, index) => (
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

      {/* Enhanced ADR Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-blue-600">ADR Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to successful dispute resolution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="relative animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-slate-800 to-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold mb-6">
              Why Choose <span className="text-blue-300">KWCO Advocates</span>{" "}
              for Dispute Resolution?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Our proven track record and expertise make us the preferred choice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-2xl border border-slate-600 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
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
              Common questions about our dispute resolution services
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "When should I consider ADR instead of litigation?",
                answer:
                  "ADR is ideal when you want to maintain relationships, need a faster resolution, want to keep costs down, or prefer confidentiality. It's particularly effective for commercial, employment, and family disputes.",
              },
              {
                question: "Is the outcome of ADR legally binding?",
                answer:
                  "Arbitration decisions are legally binding and enforceable. Mediation results in a binding agreement if all parties sign the settlement agreement. The enforceability depends on the type of ADR chosen.",
              },
              {
                question: "How long does the ADR process take?",
                answer:
                  "Most ADR processes are completed within 1-3 months, compared to litigation which can take years. The timeline depends on the complexity of the dispute and the availability of parties.",
              },
              {
                question: "Can I still go to court if ADR doesn't work?",
                answer:
                  "Yes, if mediation doesn't result in a settlement, you retain the right to pursue litigation. However, arbitration decisions are final and binding, with very limited grounds for appeal.",
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
              Resolve Your{" "}
              <span className="text-blue-300">Dispute Efficiently</span>
            </h2>
            <p className="text-xl mb-10 text-gray-200 leading-relaxed">
              Contact our dispute resolution team to explore your ADR options.
              Let our experienced professionals guide you through the resolution
              process with confidence.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Schedule Consultation
              <ArrowRight className="w-6 h-6 ml-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisputeResolution;
