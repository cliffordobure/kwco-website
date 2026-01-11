// src/pages/Contact.js
import React, { useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  Users,
  Award,
  TrendingUp,
  Star,
  CheckCircle,
  Building2,
  Shield,
  MessageSquare,
} from "lucide-react";
import contactBg from "./../assets/newImages/contactus.png";

const Contact = () => {
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

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      title: "Visit Us",
      description: "Kabarnet Gardens, Suite Pluto, P4, Nairobi, Kenya",
      icon: <MapPin className="w-8 h-8 text-blue-500" />,
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Call Us",
      description: "0792 280 484\n+254 725 766457",
      icon: <Phone className="w-8 h-8 text-blue-500" />,
      color: "from-slate-50 to-slate-100",
    },
    {
      title: "Email Us",
      description: "info@kwco.legal\nwww.kwco.legal",
      icon: <Mail className="w-8 h-8 text-blue-500" />,
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Office Hours",
      description: "Mon - Fri: 8:00 AM - 5:00 PM",
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      color: "from-slate-50 to-slate-100",
    },
  ];

  const faqs = [
    {
      question: "How do I schedule a consultation?",
      answer:
        "You can schedule a consultation by calling us, sending an email, or filling out the contact form above. We'll respond within 24 hours to arrange a convenient time.",
    },
    {
      question: "What should I bring to my first appointment?",
      answer:
        "Please bring any relevant documents related to your case, identification, and a clear summary of your legal issue. This helps us provide more accurate advice.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "We offer an initial 30-minute consultation to assess your case. During this time, we'll discuss your legal needs and explain how we can help.",
    },
    {
      question: "How are your legal fees structured?",
      answer:
        "Our fees vary depending on the complexity of the case. We offer both fixed-fee and hourly billing options. We'll provide a clear fee structure during your consultation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Enhanced Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img
            src={contactBg}
            alt="Contact Background"
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Enhanced Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <MessageSquare className="w-12 h-12 text-blue-400" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Contact
              </span>{" "}
              Us
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Connect with Our Legal Experts • Professional Consultation •
              Strategic Legal Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact-form"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                Send Message
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Get in <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach our expert legal team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${method.color} p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll opacity-0 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {method.title}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form and Map */}
      <section
        id="contact-form"
        className="py-24 bg-gradient-to-br from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Send Us a <span className="text-blue-600">Message</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your legal needs? Fill out the form below
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <div className="animate-on-scroll opacity-0 animate-fade-in-up">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <div className="space-y-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-3 text-lg">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-3 text-lg">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-3 text-lg">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-3 text-lg">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="litigation">Litigation</option>
                      <option value="credit-collection">
                        Credit Collection
                      </option>
                      <option value="conveyancing">Conveyancing</option>
                      <option value="dispute-resolution">
                        Dispute Resolution
                      </option>
                      <option value="consultation">General Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-3 text-lg">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg resize-none"
                      placeholder="Tell us about your legal needs..."
                      required
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center text-lg"
                  >
                    <Send className="w-6 h-6 mr-3" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Map and Additional Info */}
            <div
              className="animate-on-scroll opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 mb-8">
                <h3 className="text-3xl font-bold mb-6 text-slate-800">
                  Find Us
                </h3>
                <div className="h-96 bg-gray-300 rounded-2xl mb-6 overflow-hidden">
                  {/* Google Map */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7858675349!2d36.75982797378771!3d-1.2940128356236482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a66ffffffff%3A0xb493f525fce77c9f!2sKabarnet%20Gardens%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1715811600000!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-2xl"
                  ></iframe>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
                    <h4 className="font-bold text-lg mb-3 text-slate-800">
                      Directions
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      Located at Kabarnet Gardens, Suite Pluto, P4, Nairobi,
                      Kenya. Our office is easily accessible by public
                      transport.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-bold text-lg mb-3 text-slate-800">
                      Emergency Legal Services
                    </h4>
                    <p className="text-gray-700 mb-3">
                      For urgent legal matters outside office hours:
                    </p>
                    <p className="text-blue-600 font-bold text-2xl">
                      +254 725 766457
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced Quick Contact */}
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 p-8 rounded-2xl text-white">
                <h3 className="font-bold text-2xl mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+254725766457"
                    className="flex items-center text-gray-200 hover:text-white transition-all duration-300 group"
                  >
                    <Phone className="w-6 h-6 mr-4 text-blue-400 group-hover:text-blue-300" />
                    <span className="text-lg">+254 725 766457</span>
                  </a>
                  <a
                    href="mailto:info@kwco.legal"
                    className="flex items-center text-gray-200 hover:text-white transition-all duration-300 group"
                  >
                    <Mail className="w-6 h-6 mr-4 text-blue-400 group-hover:text-blue-300" />
                    <span className="text-lg">info@kwco.legal</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll opacity-0 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Common questions about our contact and consultation process
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0 animate-fade-in-up"
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
    </div>
  );
};

export default Contact;
