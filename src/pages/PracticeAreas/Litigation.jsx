// src/pages/PracticeAreas/Litigation.js
import React, { useEffect } from "react";
import {
  Scale,
  Gavel,
  Shield,
  FileText,
  Users,
  ArrowRight,
  Check,
  Briefcase,
  Target,
  Award,
  TrendingUp,
  Star,
  Clock,
  CheckCircle,
} from "lucide-react";
import law from "./../../assets/newImages/kwcoteaminoffice2.jpg";

const Litigation = () => {
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
      title: "Civil Litigation",
      description:
        "Representing clients in civil disputes including contract disputes, tort claims, and property matters.",
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      stats: "95% Success Rate",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Commercial Disputes",
      description:
        "Handling complex business litigation including shareholder disputes, partnership conflicts, and corporate governance issues.",
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      stats: "500+ Cases Handled",
      color: "from-slate-50 to-slate-100",
    },
    {
      title: "Constitutional Litigation",
      description:
        "Defending constitutional rights and challenging government actions that violate the constitution.",
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      stats: "Landmark Cases",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Employment Disputes",
      description:
        "Representing both employers and employees in workplace conflicts, wrongful termination, and discrimination cases.",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      stats: "90% Settlement Rate",
      color: "from-slate-50 to-slate-100",
    },
    {
      title: "Judicial Review",
      description:
        "Challenging administrative decisions and ensuring government agencies act within their legal authority.",
      icon: <Gavel className="w-8 h-8 text-blue-500" />,
      stats: "Expert Advocacy",
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Alternative Dispute Resolution",
      description:
        "Mediation and arbitration services to resolve disputes efficiently outside of court.",
      icon: <Scale className="w-8 h-8 text-blue-500" />,
      stats: "Cost-Effective",
      color: "from-slate-50 to-slate-100",
    },
  ];

  const caseTypes = [
    "Contract Disputes",
    "Property Litigation",
    "Insurance Claims",
    "Professional Negligence",
    "Defamation Cases",
    "Intellectual Property Disputes",
    "Public Interest Litigation",
    "Administrative Law Cases",
  ];

  const courtRepresentation = [
    "Supreme Court of Kenya",
    "Court of Appeal",
    "High Court",
    "Employment and Labour Relations Court",
    "Environment and Land Court",
    "Magistrates Courts",
    "Tribunals and Arbitration Forums",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Case Evaluation",
      description:
        "Thorough assessment of your case to determine the best legal strategy",
      icon: <Target className="w-8 h-8 text-blue-500" />,
    },
    {
      number: "2",
      title: "Legal Strategy",
      description:
        "Development of a comprehensive litigation strategy tailored to your goals",
      icon: <Award className="w-8 h-8 text-blue-500" />,
    },
    {
      number: "3",
      title: "Court Representation",
      description: "Aggressive and skilled advocacy in court proceedings",
      icon: <Gavel className="w-8 h-8 text-blue-500" />,
    },
    {
      number: "4",
      title: "Resolution",
      description:
        "Achievement of favorable outcomes through judgment or settlement",
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Proven Track Record",
      description:
        "Successful representation in over 1000 cases with a high success rate",
      icon: <Award className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Expert Advocates",
      description:
        "Team of experienced litigators with expertise across various legal areas",
      icon: <Users className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Strategic Approach",
      description:
        "Customized litigation strategies designed to achieve your specific objectives",
      icon: <Target className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Client Communication",
      description:
        "Regular updates and clear communication throughout the litigation process",
      icon: <Clock className="w-6 h-6 text-blue-500" />,
    },
  ];

  const stats = [
    {
      number: "1000+",
      label: "Cases Handled",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "15+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />,
    },
    { number: "7", label: "Court Levels", icon: <Scale className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img
            src={law}
            alt="Litigation Background"
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Enhanced Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Litigation
              </span>{" "}
              Excellence
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Strategic Legal Advocacy • Unwavering Dedication • Proven Success
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
              Expert <span className="text-blue-600">Litigation</span> Practice
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 max-w-4xl mx-auto">
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                KWCO's litigation practice is built on decades of courtroom
                experience and a deep understanding of Kenya's legal system. Our
                litigation team comprises some of Kenya's most respected
                advocates, known for their strategic thinking, persuasive
                advocacy, and commitment to achieving the best possible outcomes
                for our clients.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We represent clients across all levels of the Kenyan judiciary,
                from magistrates' courts to the Supreme Court. Our approach
                combines thorough preparation, innovative legal strategies, and
                aggressive representation to protect our clients' interests.
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
              Our <span className="text-blue-600">Litigation Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive legal representation across all areas of litigation
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

      {/* Enhanced Court Representation & Case Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-blue-600">Expertise</span> Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive representation across all court levels and case
              types
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-on-scroll opacity-0 animate-fade-in-left">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-3xl font-bold mb-8 text-slate-800">
                  Courts We Appear In
                </h3>
                <ul className="space-y-4">
                  {courtRepresentation.map((court, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{court}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 animate-fade-in-right">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200">
                <h3 className="text-3xl font-bold mb-8 text-slate-800">
                  Types of Cases We Handle
                </h3>
                <ul className="space-y-4">
                  {caseTypes.map((type, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our <span className="text-blue-600">Litigation Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to achieving successful outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center animate-on-scroll opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
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
              for Litigation?
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
              Need <span className="text-blue-300">Legal Representation</span>?
            </h2>
            <p className="text-xl mb-10 text-gray-200 leading-relaxed">
              Contact our litigation team today for a consultation. Let our
              experienced advocates fight for your rights and interests.
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

export default Litigation;
