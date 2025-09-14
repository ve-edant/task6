import React from "react";
import PageTitle from "../components/PageTitle";

const Careers = () => {
  return (
    <div className="bg-[#fafafa]">
      <PageTitle
        title="Careers"
        imageUrl="https://alp.consulting/wp-content/uploads/2023/08/Banners-min.png"
      />
      <section className=" lg:mx-[100px] flex flex-col md:flex-row items-center md:items-stretch px-6 md:px-12 py-12 md:py-20 gap-10">
        {/* Left Image */}
        <div className="flex md:w-1/2 justify-center items-center">
          <img
            src="https://alp.consulting/wp-content/uploads/2023/08/Career-Opportunities-min.png"
            alt="Recruitment-Company-in-India"
            className=" h-[70%] aspect-square object-cover rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 md:w-1/2 flex flex-col justify-center text-left space-y-6">
          <h2 className="text-2xl md:text-5xl font-semibold text-gray-900 text-center md:text-left">
            Career Opportunities
            <br />
            at DT Consulting
          </h2>
          <p className="text-gray-700 leading-relaxed  text-center md:text-left">
            Do you want to leapfrog your career to the next level? Explore
            opportunities available at DT now and find a job that suits your
            skills and experiences. Check out all our job opening below.
          </p>
          <p className="text-red-500 italic leading-relaxed text-center md:text-left">
            Recruitment Fraud Alert!<br/><br/>Please note that DT Consulting follows a
            strictly merit-based recruitment practice and we don't charge any
            fees or any kind of security deposit from any job seeker under any
            circumstances. If you encounter any such instance of anyone asking
            for any kind of money for any job opening from DT, the job is most
            likely posted by a scammer. Beware of such scammers and fake job
            postings done in the name of DT Consulting!
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
    </div>
  );
};

export default Careers;
