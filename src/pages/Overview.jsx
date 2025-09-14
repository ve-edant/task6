import React from 'react';

export default function Overview() {
  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                DT Consulting
              </h1>
              <p className="text-lg text-blue-100 mb-8">
                DT Consulting
              </p>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="bg-gray-300 rounded-lg h-64 md:h-80 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center relative">
                  {/* Simulated meeting room image */}
                  <img src="https://alp.consulting/wp-content/uploads/2023/08/Alp-Overview-min.png" alt="" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                DT Consulting
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In India, <span className="font-semibold text-gray-800">DT Consulting</span> is a name synonymous with HR consulting, outsourcing, HR offshoring, and managerial services.
                </p>
                <p>
                  DT Consulting is part of the <span className="font-semibold text-gray-800">BFFA Holdings</span> Inc. - Japan. It's a multinational organization with a presence in 17 countries.
                </p>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="bg-gray-300 rounded-lg h-64 md:h-72 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
                  {/* Simulated business meeting image */}
                  <img className='bg-contain' src="https://alp.consulting/wp-content/uploads/2023/08/Alp-Overviw-min.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Image */}
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src="https://alp.consulting/wp-content/uploads/2023/08/What%E2%80%AFWe-Do-09-min.png" alt="" />
              </div>
            </div>
            
            {/* Right Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                What We Do
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We provide customizable HR, payroll, IT, offshore, and managed services to companies of all sizes in multiple domains, resulting in immediate improvement in productivity, hassle-free induction of new employees, management of payroll and compliance. DT Consulting provides the whole range of solutions related to recruitment, staffing, HR, IT, legal, and sustainability needs of a company.
                </p>
                
                <p>
                  There are certain solutions and services that we provide, which can be crafted to meet the highly specific requirements of today's organizations. They include:
                </p>
                
                {/* Services List */}
                <div className="space-y-3 mt-8">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      Recruitment (<a href="#" className="text-blue-600 hover:underline">contingency search</a> and campus selection)
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <a href="#" className="text-blue-600 hover:underline">Temporary staffing solutions</a>
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <a href="#" className="text-blue-600 hover:underline">RPO - Recruitment process outsourcing</a>
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <a href="#" className="text-blue-600 hover:underline">Compliance & Payroll Outsourcing</a>
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      HRMS (Human Resources Management System) <a href="#" className="text-blue-600 hover:underline">outsourcing</a>
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      Training and placement cell outsourcing
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      Production/Service contracts outsourcing
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <a href="#" className="text-blue-600 hover:underline">IT staff augmentation</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-20 bg-gray-200 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-blue-300 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-gradient-to-r from-green-200 to-transparent rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              DT Consulting provides staffing, recruitment, IT, and management solutions and services to almost all industries, and for companies of all sizes, ranging from small start-ups to multinational corporations. The following are some of the industries that we have been servicing since inception:
            </p>
          </div>
          
          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Row 1 */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">IT Products & Services</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Global Captive Centers (GCCs)</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">ITES & BPM</span>
            </div>
            
            {/* Row 2 */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 11-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Electronics & Semiconductor</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.98 5.98 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-1.5-1.5a5.98 5.98 0 00-.497 2.8 5.98 5.98 0 00.635 2.684l1.403-1.904zm.266-6.851l1.57 1.57A3.97 3.97 0 0110 4C8.93 4 7.898 4.402 7.074 5.104l1.35 1.35z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Internet</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 000 2h4a1 1 0 100-2H3zM3 8a1 1 0 000 2h8a1 1 0 100-2H3zM3 12a1 1 0 100 2h12a1 1 0 100-2H3z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Renewable & Clean Energy</span>
            </div>
            
            {/* Row 3 */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Engineering & R&D</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Manufacturing</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Healthcare & Pharma</span>
            </div>
            
            {/* Row 4 */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Retail and Ecommerce</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v1a1 1 0 001 1h1l1.68 5.39A3 3 0 008.62 15h8.76a1 1 0 000-2H8.62a1 1 0 01-.95-.68L7.16 11h9.25a1 1 0 00.95-.68l1.5-6A1 1 0 0018 3H6.27l-.31-1.243A1 1 0 005 1H3a1 1 0 000 2z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Logistics</span>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zM3 15a1 1 0 011-1h1a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm7-15a1 1 0 011 1v4.586l2.707-2.707a1 1 0 011.414 1.414L12 12.414l-3.121-3.121a1 1 0 011.414-1.414L12 9.586V1a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">Auto & Ancillary</span>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Accolades Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Awards & Accolades
            </h2>
          </div>
          
          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* First Row */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-white text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 border-2 border-white rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-xs mb-2 opacity-90">📅 2024</div>
                <h3 className="font-semibold text-sm leading-tight">
                  Great Place to Work
                </h3>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-white text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm leading-tight mb-2">
                  Silver CyberVadis Award for Cybersecurity Excellence
                </h3>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-white text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-xs mb-2 opacity-90">📅 2024</div>
                <h3 className="font-semibold text-sm leading-tight">
                  Winner - Best Employer Brand on LinkedIn - Search & Staffing
                </h3>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-white text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="text-xs mb-2 opacity-90">🏆 2024</div>
                <h3 className="font-semibold text-sm leading-tight">
                  British Telecom (BT) Top Performing Partner - Digital and Network
                </h3>
              </div>
            </div>
            
            {/* Second Row */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-white text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="text-xs mb-2 opacity-90">📅 2020</div>
                <h3 className="font-semibold text-sm leading-tight">
                  Outstanding Performer of the Year (leading BFSI Captive)
                </h3>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-white text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm leading-tight">
                  Top Performing Partner for First America
                </h3>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-white text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm leading-tight">
                  Top Performer for Tech Mahindra - RMG Group and Infosys
                </h3>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg p-6 text-white text-center">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-xs mb-2 opacity-90">📅 2021-2022</div>
                <h3 className="font-semibold text-sm leading-tight">
                  Ranked Second as Premium Vendor for TCS
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The DT Advantage Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                The DT Consulting Advantage
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  What does DT Consulting have that allows us to provide services that are above and beyond those offered by competitors? We have a team of experienced, passionate, and sensitive HR professionals who make it their life's mission to understand client requirements in depth. We understand that each organization has unique needs, and we have the necessary people and processes in place to design customized solutions.
                </p>
                
                <p>
                  Our time-tested and globally aligned processes enable us to have a certain expertise and ease when it comes to finding and managing talent. We also have the necessary technology to implement and track progress at every stage of the process. We have tools to manage HR services, too. For instance, e-Manage, our <a href="#" className="text-blue-600 hover:underline">HRMS product</a>, manages employee database, attendance, payroll, and training across multiple locations.
                </p>
                
                <p>
                  Besides HR and recruitment services, we also offer IT, offshore, and managed services across various domains, enabling our clients to access multiple services and solutions under one roof.
                </p>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <img src="https://alp.consulting/wp-content/uploads/2023/08/The-Alp%E2%80%AFAdvantage-min-480x480.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Contact Form Section */}
      <section className="text-black" id="cta-form">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Form Section */}
            <div className="lg:pl-[120px] py-10 bg-[#feda90] order-2 lg:order-1">
              <div className="p-6 lg:p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Contact Us For Business Enquiry
                </h3>

                <form className="space-y-4" noValidate>
                  {/* Hidden Fields */}
                  <input type="hidden" name="source" value="website" />

                  {/* Name Field */}
                  <div>
                    <input
                      type="text"
                      name="name"
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
                      required
                      aria-required="true"
                      className="w-full text-black px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select Your Requirement*</option>
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
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Information Section */}
            <div className="lg:pr-[120px] py-10 order-1 bg-[#01143e] lg:order-2">
              <div className="lg:pl-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Want to explore partnership with DT Consulting?
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

      {/* Mobile Menu Button (hidden by default, would be shown on mobile) */}
      <button className="md:hidden fixed top-4 right-4 z-50 bg-blue-600 text-white p-2 rounded-md">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}