import React from "react";
import IndustriesSlider from "../components/HomeSwiper";
import ServicesSection from "../components/ServicesSection";
import BusinessContactForm from "../components/BusinessContactForm";
import ClientSwiper from "../components/ClientSwiper";

const Home = () => {
  return (
    <div className="bg-[#fafafa]">
      <section
        className="relative w-full bg-[#00143D] text-white flex items-center overflow-hidden py-12 md:py-24 lg:py-28 bg-cover md:bg-contain "
        style={{
          backgroundImage:
            "url('https://alp.consulting/wp-content/uploads/2024/01/Home-header-new.webp#7019')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/5 md:bg-transparent"></div>

        {/* Text Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-20 lg:pl-[140px]">
          <h1 className="text-2xl md:text-5xl font-semibold leading-snug max-w-2xl">
            We Help You Achieve
            <br />
            Success With Our
            <br />
            Manpower Solutions
          </h1>
          <p className="mt-4 text-gray-200 max-w-xl text-sm md:text-base">
            From building teams on your payroll to contractual and remote teams,
            from a people-first approach to technology-driven outsourcing
            solutions, we are your success partners.
          </p>
          <div className="flex justify-center items-center md:justify-start py-4">
            <button className="relative overflow-hidden rounded-lg px-6 py-3 font-semibold uppercase tracking-wide text-white bg-orange-600 group">
              <span className="relative z-10">Talk to Us</span>
              <span className="absolute inset-0 -left-[10%] w-[120%] h-full bg-blue-900 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
            </button>
          </div>
        </div>

        {/* Optional: Empty div to preserve spacing on desktop for the background image */}
        <div className="hidden md:block flex-1"></div>
      </section>

      <section className="bg-white lg:mx-[100px] flex flex-col md:flex-row items-center md:items-stretch px-6 md:px-12 py-12 md:py-20 gap-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-left space-y-6">
          <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 text-center md:text-left">
            Top Recruitment
            <br />& Staffing
            <br />
            Company in India
          </h2>
          <p className="text-gray-700 leading-relaxed  text-center md:text-left">
            We provide business-first solutions, hiring great talent for your
            remote and office teams and managing your payroll and compliance
            needs in a systematic and orderly way. Make innovation and
            productivity a mainstay for anyone in your company with our talent
            management solutions.
          </p>
          <p className="text-gray-700 leading-relaxed text-center md:text-left">
            As one of the best recruitment agencies in India, our tailored
            recruitment solutions can meet the needs of companies of any size
            and at any stage in their business growth. While bringing talent and
            opportunity together, we are driven by honesty, reliability, and
            transparency.
          </p>
          <div className="flex justify-center md:justify-start items-center w-full">
            <button className="relative overflow-hidden rounded-lg px-6 py-3 font-semibold uppercase tracking-wide text-white bg-orange-600 group">
              <span className="relative z-10">Enquire Now</span>
              <span className="absolute inset-0 -left-[10%] w-[120%] h-full bg-blue-900 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://alp.consulting/wp-content/uploads/2025/07/Alp-Consulting-Team.webp"
            alt="Executive Search Company in India"
            className=" h-[100%] aspect-square object-cover rounded-2xl"
          />
        </div>
      </section>

      <section className="bg-white lg:mx-[100px] flex flex-col md:flex-row items-center md:items-stretch px-6 md:px-12 py-12 md:py-20 gap-10">
        {/* Left Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://alp.consulting/wp-content/uploads/2025/07/Recruitment-Company-in-India.webp"
            alt="Recruitment-Company-in-India"
            className=" h-[70%] aspect-square object-cover rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col justify-center text-left space-y-6">
          <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 text-center md:text-left">
            Building Happy &<br />
            Productive Workforces
            <br />
            Since 1996
          </h2>
          <p className="text-gray-700 leading-relaxed  text-center md:text-left">
            Alp Consulting is one of the best recruitment consultancies in
            India, handling recruitment and staffing for several Fortune 500
            companies. Apart from supporting new initiatives with their hiring
            mandates, we have also helped some of the leading global players
            start and scale their operations in India.
          </p>
          <p className="text-gray-700 leading-relaxed text-center md:text-left">
            Incorporated in 1996, we have established a name for ourselves as
            one of the top recruitment agencies in India. We also provide other
            HR services such as apprenticeship training, compliance, and
            payroll. Our team of 750+ experienced recruiters and HR
            professionals is always ready to help both SMEs and established
            industry players scale and manage their workforces, battling
            attrition and ensuring compliance.
          </p>
          <div className="flex justify-center md:justify-start items-center w-full">
            <a
              href="/overview"
              className="relative overflow-hidden rounded-lg px-6 py-3 font-semibold uppercase tracking-wide text-white bg-orange-600 group"
            >
              <span className="relative z-10">Read More</span>
              <span className="absolute inset-0 -left-[10%] w-[120%] h-full bg-blue-900 transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
            </a>
          </div>
        </div>
      </section>

      <IndustriesSlider />

      <ServicesSection />

      <ClientSwiper />

      <BusinessContactForm />

    </div>
  );
};

export default Home;
