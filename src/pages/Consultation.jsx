// src/pages/Consultation.jsx
import React, { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  FileText,
  Building,
  DollarSign,
  Clock,
  Send,
  ArrowRight,
  AlertCircle,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import contactBg from "./../assets/newImages/contactus.png";

const Consultation = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "Kenya",

    // Case Information
    caseType: "",
    caseDescription: "",
    urgency: "normal",
    expectedOutcome: "",

    // Financial Information
    budget: "",
    paymentMethod: "",

    // Additional Information
    preferredContactMethod: "email",
    preferredTime: "",
    additionalNotes: "",

    // Legal Documents
    hasDocuments: "no",
    documentDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("U3uRrn-pKFZ0D2WYN"); // You'll need to replace this with your actual EmailJS public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare email content
      const emailContent = `
New Consultation Request

PERSONAL INFORMATION:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
City: ${formData.city}
Country: ${formData.country}

CASE INFORMATION:
Case Type: ${formData.caseType}
Case Description: ${formData.caseDescription}
Urgency: ${formData.urgency}
Expected Outcome: ${formData.expectedOutcome}

FINANCIAL INFORMATION:
Budget: ${formData.budget}
Payment Method: ${formData.paymentMethod}

ADDITIONAL INFORMATION:
Preferred Contact Method: ${formData.preferredContactMethod}
Preferred Time: ${formData.preferredTime}
Additional Notes: ${formData.additionalNotes}

LEGAL DOCUMENTS:
Has Documents: ${formData.hasDocuments}
Document Description: ${formData.documentDescription}

---
This consultation request was submitted through the KWCO website.
      `;

      // Show loading message
      setSubmitStatus("sending");

      // For immediate testing and to ensure emails are sent, we'll use a simple approach
      // that will work right away while you set up a more sophisticated email service

      try {
        // Method 1: Try to send email using EmailJS (if configured)
        if (window.emailjs && window.emailjs.init) {
          const templateParams = {
            to_email: "cliffobure@gmail.com",
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            subject: `New Consultation Request - ${formData.firstName} ${formData.lastName}`,
            message: emailContent,
            phone: formData.phone,
            case_type: formData.caseType,
            urgency: formData.urgency,
          };

          const response = await emailjs.send(
            "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
            "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
            templateParams,
            "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
          );

          if (response.status === 200) {
            setSubmitStatus("success");
            return;
          }
        }
      } catch {
        console.log("EmailJS not configured, using mailto method");
      }

      // Method 2: Use mailto (this will always work and is the most reliable for immediate testing)
      const mailtoLink = `mailto:cliffobure@gmail.com?subject=New Consultation Request - ${
        formData.firstName
      } ${formData.lastName}&body=${encodeURIComponent(emailContent)}`;

      // Open email client
      window.location.href = mailtoLink;
      setSubmitStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          country: "Kenya",
          caseType: "",
          caseDescription: "",
          urgency: "normal",
          expectedOutcome: "",
          budget: "",
          paymentMethod: "",
          preferredContactMethod: "email",
          preferredTime: "",
          additionalNotes: "",
          hasDocuments: "no",
          documentDescription: "",
        });
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Error submitting consultation:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const caseTypes = [
    "Litigation",
    "Credit Collection",
    "Conveyancing",
    "Dispute Resolution",
    "Corporate Law",
    "Employment Law",
    "Family Law",
    "Criminal Law",
    "Real Estate",
    "Intellectual Property",
    "Tax Law",
    "Other",
  ];

  const urgencyLevels = [
    { value: "low", label: "Low - No immediate action required" },
    { value: "normal", label: "Normal - Standard processing time" },
    { value: "high", label: "High - Requires attention within 1 week" },
    { value: "urgent", label: "Urgent - Requires immediate attention" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <img
            src={contactBg}
            alt="Consultation Background"
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <MessageSquare className="w-12 h-12 text-blue-400" />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Legal
              </span>{" "}
              Consultation
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Professional Legal Advice • Expert Consultation • Strategic
              Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Request Your <span className="text-blue-600">Consultation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Fill out the form below to schedule your legal consultation. Our
              team will review your information and get back to you within 24
              hours.
            </p>
          </div>

          {/* Status Messages */}
          {submitStatus === "sending" && (
            <div className="mb-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mr-3"></div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-800">
                    Opening Email Client...
                  </h3>
                  <p className="text-blue-700">
                    Please wait while we open your email client to send the
                    consultation request.
                  </p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === "success" && (
            <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Consultation Request Sent Successfully!
                  </h3>
                  <div className="text-green-700 space-y-2">
                    <p>
                      ✅ Your consultation request has been sent to{" "}
                      <strong>cliffobure@gmail.com</strong>
                    </p>
                    <p>
                      📧 Please check your email client to confirm the email was
                      sent. If your email client didn't open automatically,
                      please check your default email application.
                    </p>
                    <p>
                      ⏰ We'll review your consultation request and get back to
                      you within 24 hours.
                    </p>
                    <div className="mt-4 p-3 bg-green-100 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Next Steps:</strong> Our legal team will review
                        your consultation request and contact you using your
                        preferred method ({formData.preferredContactMethod})
                        within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-8 bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-center">
                <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800">
                    Submission Error
                  </h3>
                  <p className="text-red-700">
                    There was an error submitting your consultation request.
                    Please try again or contact us directly.
                  </p>
                </div>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
          >
            {/* Personal Information */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-blue-600" />
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Your last name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="+254 700 000 000"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-slate-700 font-semibold mb-3">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Your address"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Your city"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Your country"
                  />
                </div>
              </div>
            </div>

            {/* Case Information */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                Case Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Case Type *
                  </label>
                  <select
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    required
                  >
                    <option value="">Select case type</option>
                    {caseTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Urgency Level *
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    required
                  >
                    {urgencyLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-slate-700 font-semibold mb-3">
                    Case Description *
                  </label>
                  <textarea
                    name="caseDescription"
                    value={formData.caseDescription}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                    placeholder="Please provide a detailed description of your legal issue..."
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-slate-700 font-semibold mb-3">
                    Expected Outcome
                  </label>
                  <textarea
                    name="expectedOutcome"
                    value={formData.expectedOutcome}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                    placeholder="What outcome are you seeking from this consultation?"
                  />
                </div>
              </div>
            </div>

            {/* Financial Information */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <DollarSign className="w-6 h-6 mr-3 text-blue-600" />
                Financial Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50000">Under KES 50,000</option>
                    <option value="50000-100000">KES 50,000 - 100,000</option>
                    <option value="100000-250000">KES 100,000 - 250,000</option>
                    <option value="250000-500000">KES 250,000 - 500,000</option>
                    <option value="over-500000">Over KES 500,000</option>
                    <option value="discuss">To be discussed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Preferred Payment Method
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="">Select payment method</option>
                    <option value="bank-transfer">Bank Transfer</option>
                    <option value="mobile-money">Mobile Money</option>
                    <option value="cash">Cash</option>
                    <option value="credit-card">Credit Card</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-600" />
                Additional Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Preferred Contact Method
                  </label>
                  <select
                    name="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="in-person">In Person</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Preferred Time for Contact
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (8 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                    <option value="anytime">Anytime</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-slate-700 font-semibold mb-3">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                    placeholder="Any additional information you'd like to share..."
                  />
                </div>
              </div>
            </div>

            {/* Legal Documents */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                Legal Documents
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Do you have relevant documents?
                  </label>
                  <select
                    name="hasDocuments"
                    value={formData.hasDocuments}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  >
                    <option value="no">No documents at this time</option>
                    <option value="yes">Yes, I have documents</option>
                    <option value="some">Some documents available</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">
                    Document Description
                  </label>
                  <textarea
                    name="documentDescription"
                    value={formData.documentDescription}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                    placeholder="Describe the documents you have (if any)..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Sending Consultation Request...
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6 mr-3" />
                    Send Consultation Request
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
