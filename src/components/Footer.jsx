import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#00143D] text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <img 
                src="https://alp.consulting/wp-content/uploads/2023/07/Alp-logo-white-300x103.png" 
                alt="Alp Consulting Logo" 
                className="w-48 h-auto mb-6"
                loading="lazy"
              />
            </div>
            <p className="text-blue-100 leading-relaxed mb-6 text-sm">
              Alp Consulting, one of the leading recruitment and staffing companies of India, is a ISO 9001:2000 certified company and a subsidiary of BREXA Holdings Inc., a multi-billion-dollar Japanese conglomerate with presence in 17 countries.
            </p>
            <div className="flex justify-start">
              <img 
                src="https://alp.consulting/wp-content/uploads/2023/07/Great-Place-to-Work.png" 
                alt="Great Place to Work" 
                className="w-20 h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* About Alp & Insights Column */}
          <div className="col-span-1">
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-white">About Alp</h4>
              <ul className="space-y-2">
                <li><a href="/alp-overview/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Overview</a></li>
                <li><a href="/alp-philosophy/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Philosophy</a></li>
                <li><a href="/alp-management/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Top Management</a></li>
                <li><a href="/alp-investors-profile/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Investor's Profile</a></li>
                <li><a href="/careers/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Careers@Alp</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Alp Insights</h4>
              <ul className="space-y-2">
                <li><a href="/blogs/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Blogs</a></li>
                <li><a href="/category/guides-reports/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Guides & Reports</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Case Studies</a></li>
              </ul>
            </div>
          </div>

          {/* Recruitment & Staffing Services Column */}
          <div className="col-span-1">
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-white">Recruitment Services</h4>
              <ul className="space-y-2">
                <li><a href="/executive-search-firm/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Executive Search Firm</a></li>
                <li><a href="/contingent-search/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Contingent Search</a></li>
                <li><a href="/recruitment-process-outsourcing-rpo/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Recruitment Process Outsourcing Company (RPO)</a></li>
                <li><a href="/japanese-recruitment-agency-in-india/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Bilingual Hiring</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Staffing Services</h4>
              <ul className="space-y-2">
                <li><a href="/staff-augmentation/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Staff Augmentation</a></li>
                <li><a href="/temporary-staffing/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Temporary/Contract Staffing</a></li>
                <li><a href="/virtual-staffing-services/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Virtual Staffing Services</a></li>
                <li><a href="/specialized-staffing/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Specialized Staffing</a></li>
                <li><a href="/patient-support-programs-psp/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Patient Support Programs</a></li>
                <li><a href="/recruiter-on-demand-services/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Recruiter on Demand (ROD)</a></li>
                <li><a href="/outplacement-services/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Outplacement Services</a></li>
              </ul>
            </div>
          </div>

          {/* HR Outsourcing & Training Column */}
          <div className="col-span-1">
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 text-white">HR Outsourcing Services</h4>
              <ul className="space-y-2">
                <li><a href="/hr-services/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">HR Outsourcing Services</a></li>
                <li><a href="/statutory-compliance-services/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Statutory Compliance</a></li>
                <li><a href="/payroll-outsourcing/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Payroll Outsourcing</a></li>
                <li><a href="/hrms-payroll-software/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">HRMS (Hire-Retire)</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">Training & Upskilling</h4>
              <ul className="space-y-2">
                <li><a href="/training-solutions/hire-train-deploy/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Hire-Train-Deploy (HTD) Model</a></li>
                <li><a href="/training-solutions/hire-train-place-htp/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Hire-Train-Place (HTP)</a></li>
                <li><a href="/training-solutions/naps/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">NAPS</a></li>
                <li><a href="/training-solutions/nats/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">NATS</a></li>
                <li><a href="/training-solutions/ddu-gky/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">DDU-GKY Training</a></li>
                <li><a href="/apprenticeship-in-japanese-companies-in-india/" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Apprenticeship in Japanese Company</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-blue-100 text-sm">© 2024 Alp Consulting. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Terms of Service</a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200 text-sm">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;