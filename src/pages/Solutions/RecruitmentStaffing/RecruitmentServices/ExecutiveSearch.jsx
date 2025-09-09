import React from "react";
import PageTitle from "../../../../components/PageTitle";

const ExecutiveSearch = () => {
  return (
    <div className=" bg-[#fcfcfc]">
      <PageTitle
        title="Executive Search Firm"
        imageUrl="https://placehold.co/300x200/png"
      />
      <section className=" md:mx-[140px] flex flex-col md:flex-row items-center md:items-stretch px-6 md:px-12 py-12 md:py-20 gap-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-left space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Executive Search Company in India
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Alp Consulting is one of the topmost executive search firms in
            India, with experience spanning over 2 decades. With a deep
            knowledge of the industry and a panel of expert recruiters in-house,
            we have helped many Fortune 500 companies find their top leaders and
            accelerate their productivity. As one of the oldest players in the
            industry, we understand the nuances involved in finding, recruiting,
            and retaining top-level executives.
          </p>
          <div className="flex justify-center md:justify-start items-center w-full">
            <a
              href="#enquire"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-200 w-fit"
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="https://alp.consulting/wp-content/uploads/2025/02/Leading-Executive-Search-Company.webp"
            alt="Executive Search Company in India"
            className=" h-[100%] aspect-square object-cover rounded-2xl"
          />
        </div>
      </section>

      <section className="md:mx-[140px] flex flex-col md:flex-row items-center md:items-stretch px-6 md:px-12 py-6 md:py-10 gap-10">
        {/* Left Image */}
        <div className="flex-1">
          <h2 className="text-2xl text-center mb-6 md:text-3xl font-bold text-gray-900 block md:hidden">
            Introduction
          </h2>
          <img
            src="https://alp.consulting/wp-content/uploads/2025/02/Executive-Search-Services.webp"
            alt="Executive Search Consultancy"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col justify-center text-left space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 hidden md:block">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At Alp, we have a deep understanding of the client’s business
            requirements, industry dynamics and functional know-how. Our access
            to a wider network of senior leaders and analytical capabilities
            enables us to provide you with the best of the best senior-
            top-level executives for your business needs. To help you understand
            and have your pick of Higher-level executives, we’ve sub-divided Our
            Executive Search hierarchy into three major categories:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Category 1:</strong> C-suite (CXO, MD, Chairperson, Board
              of Directors)
            </li>
            <li>
              <strong>Category 2:</strong> Business Head, Country Manager, VP,
              AVP, Directors, GM, and Functional Head
            </li>
            <li>
              <strong>Category 3:</strong> Niche roles
            </li>
          </ul>
          <div className="flex justify-center md:justify-start items-center w-full">
            <a
              href="#enquire"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-200 w-fit"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>
      <section className="md:mx-[140px] px-6 md:px-12 py-12 md:py-20">
        <h2 className="text-2xl md:text-5xl text-gray-900 mb-10 text-center">
          How our Executive Search Team Operates?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Column 1 */}
          <div className="flex flex-col items-start px-6 space-y-4">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Standalone Candidate Search"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <h3 className="text-3xl w-full text-center font-semibold text-gray-900">
              For a Standalone Candidate
              <br />
              Search
            </h3>
            <div className="px-6 py-3 text-gray-700">
              <ul className="list-disc list-inside  space-y-2">
                <li className="leading-loose">
                  The principal consultant is assigned the task of Client
                  Engagement and profile recommendations.
                </li>
                <li className="leading-relaxed">
                  The senior consultant takes up the responsibility of assessing
                  potential candidate profiles.
                </li>
                <li className="">
                  Research Associate – handles mining and mapping the candidates
                  as per their skill set.
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start space-y-4">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Multiple Candidates Search"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              For Multiple Candidates Search
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                The Principal Consultant stays the same even when there is a
                requirement for multiple candidates.
              </li>
              <li>
                Since there is a multiple-candidate search involved, several
                teams take up the responsibility of conducting diligent research
                based on role expertise.
              </li>
            </ul>

            {/* Enquire Button */}
            <a
              href="#enquire"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-200 mt-4"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveSearch;
