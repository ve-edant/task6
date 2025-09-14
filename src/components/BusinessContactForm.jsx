"use client";

import React, { useState } from "react";

const BusinessContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    service: "Select Your Requirement*",
    message: "",
    acceptance: false,
  });

  const [formStatus, setFormStatus] = useState("init");

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = e.target.checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormStatus("success");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        company: "",
        service: "Select Your Requirement*",
        message: "",
        acceptance: false,
      });
    } catch (error) {
      setFormStatus("error" + error);
    }
  };

  return (
    <section className=" text-black" id="cta-form">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Form Section */}
          <div className="lg:pl-[120px] py-10 bg-[#feda90] order-2 lg:order-1">
            <div className="p-6 lg:p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Us For Business Enquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Hidden Fields */}
                <input type="hidden" name="source" value="website" />

                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name*"
                    maxLength={400}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Work Email*"
                    maxLength={400}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Mobile Number Field */}
                <div>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="Mobile Number*"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Company Field */}
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company*"
                    maxLength={400}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    aria-required="true"
                    className="w-full text-black px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="Select Your Requirement*">
                      Select Your Requirement*
                    </option>
                    <option value="Permanent Recruitment">
                      Permanent Recruitment
                    </option>
                    <option value="Contract Staffing/Employee Leasing/Transfers">
                      Contract Staffing/Employee Leasing/Transfers
                    </option>
                    <option value="Remote/Virtual Staffing">
                      Remote/Virtual Staffing
                    </option>
                    <option value="Recruitment Process Outsourcing (RPO)">
                      Recruitment Process Outsourcing (RPO)
                    </option>
                    <option value="Recruiter On-Demand">
                      Recruiter On-Demand
                    </option>
                    <option value="Labour/Statutory Compliance">
                      Labour/Statutory Compliance
                    </option>
                    <option value="Payroll Outsourcing">
                      Payroll Outsourcing
                    </option>
                    <option value="Payroll/HRMS Software">
                      Payroll/HRMS Software
                    </option>
                    <option value="Apprenticeship Management/NAPS/NATS">
                      Apprenticeship Management/NAPS/NATS
                    </option>
                    <option value="Hire-Train-Deploy">Hire-Train-Deploy</option>
                    <option value="Hire-Train-Place">Hire-Train-Place</option>
                    <option value="DDU-GKY">DDU-GKY</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mention your Business Requirement in few lines*"
                    rows={6}
                    maxLength={2000}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical"
                  />
                </div>

                {/* Acceptance Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="acceptance"
                    checked={formData.acceptance}
                    onChange={handleInputChange}
                    id="acceptance"
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="acceptance"
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    I authorise DT Consulting Limited & its representatives to
                    contact me with updates and notifications via
                    Email/SMS/WhatsApp/Call. This will override DND/NDNC.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>

                {/* Form Response Messages */}
                {formStatus === "success" && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    Thank you for your message. We will get back to you within 2
                    working days.
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Information Section */}
          <div className="lg:pr-[120px] py-10 order-1 bg-[#01143e] lg:order-2">
            <div className="lg:pl-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Want to explore partnership with DT?
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Whether you are a startup on a growth trajectory or a large
                  organization struggling to maintain your talent pipeline or a
                  company looking to outsource HR or training functions, we have
                  bespoke solutions for everyone!
                </p>

                <p>
                  Just submit the form above (for mobile) or on the left (for
                  desktop) and we will get back to you within 2 working days.
                </p>

                <p>
                  <strong>
                    Please do NOT fill the form for any job related query.
                  </strong>{" "}
                  If you are looking for a job please visit our careers page. If
                  you need any support from our HR team please send an email to
                  hr@dtconsulting.in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessContactForm;
