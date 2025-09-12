// components/ServicesSection.jsx
import React from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      imgSrc: "https://alp.consulting/wp-content/uploads/2023/07/Search.png",
      title: "Search and Permanent Recruitment",
      description:
        "Get the best talent in a cost-effective manner when you hire full-time employees. Go risk-free with contingent hiring options. And be assured of top leadership talent when our executive hiring team takes over.",
      link: "/contingent-search/",
    },
    {
      imgSrc: "https://alp.consulting/wp-content/uploads/2023/07/Staffing.png",
      title: "Contract/Temp Staffing and Staff Augmentation",
      description:
        "With highly skilled IT and non-IT recruiters managing your staffing demands, expect the best candidates to join you on a temporary or contract basis. Looking to augment your IT team to meet a project deadline? We can help with that too.",
      link: "/temporary-staffing/",
    },
    {
      imgSrc: "https://alp.consulting/wp-content/uploads/2023/07/Compliance.png",
      title: "Labor Compliance and Payroll",
      description:
        "Alp Consulting is a leading compliance management company and can manage your labor compliance needs in a very efficient manner. We will handle your payroll with great care and ensure 100% accuracy and compliance.",
      link: "/statutory-compliance-services/",
    },
    {
      imgSrc: "https://alp.consulting/wp-content/uploads/2023/07/HR-Tech.png",
      title: "HR Outsourcing",
      description:
        "Outsource your hire to retire processes to us and regain clarity and speed with our HRMS solution. We will also automate repetitive tasks in your recruitment process, ensuring much less time-to-hire and greater security of candidate and employee data.",
      link: "/hr-services/",
    },
    {
      imgSrc: "https://alp.consulting/wp-content/uploads/2023/07/Training.png",
      title: "Training and Apprenticeship",
      description:
        "As one of the top recruitment agencies in India, we hire, train and place candidates in your business. We also help you hire apprentices at a fraction of the cost of a full-time employee, while also assuring you of great skills under our NAPS/NATS program.",
      link: "/training-solutions/",
    },
    {
      imgSrc:
        "https://alp.consulting/wp-content/uploads/2023/07/6-Patient-Support-Program.png",
      title: "Patient Support Programs",
      description:
        "Our patient support programs for pharmaceutical companies are digitally enabled, to ensure enhanced awareness, affordability and accessibility for the patient involved. Eventually, it also leads to much improved quality of care.",
      link: "/patient-support-programs-psp/",
    },
  ];

  return (
    <section className="lg:mx-[100px] py-16 bg-gray-50">
      <div className="container px-6">
        <h2 className="text-3xl font-bold text-center text-[#00143D] mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
