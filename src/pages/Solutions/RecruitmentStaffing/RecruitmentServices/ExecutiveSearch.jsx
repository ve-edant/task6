import React from "react";
import PageTitle from "../../../../components/PageTitle";

const ExecutiveSearch = () => {
  const benefits = [
    {
      title: "High Priority Recruitment",
      img: "https://alp.consulting/wp-content/uploads/2025/02/High-Priority-Recruitment.webp",
      desc: "Since an executive search is conducted to hire for a senior level position, it is given the utmost priority. It is carried out in such a way wherein the executive search happens quickly, and our most experienced search team are assigned to it.",
    },
    {
      title: "Eliminates the risk of bad hires",
      img: "https://alp.consulting/wp-content/uploads/2025/02/Eliminates-the-risk-of-bad-hires.webp",
      desc: "An executive search is all about hiring the best leader for the role. And to help with this, you will have our best recruiters carrying out the recruitment process eliminating the risk of bad hires.",
    },
    {
      title: "A failproof recruitment",
      img: "https://alp.consulting/wp-content/uploads/2025/02/A-failproof-recruitment.webp",
      desc: "Executive search is not necessarily the fastest type of recruitment, but it is a failsafe and a very reliable way to find a good leader for your organization, who will keep your company culture intact and add to the company’s growth in ways previously unimaginable.",
    },
    {
      title: "Access to niche skill candidates",
      img: "https://alp.consulting/wp-content/uploads/2025/02/Access-to-niche-skill-candidates.webp",
      desc: "As your executive search partner, we will offer you access to a pool of talented candidates, both active and passive, passive candidates especially because such candidates would be happy with their job roles, performing well, and not looking for a job immediately.",
    },
    {
      title: "Customized & targeted recruitment",
      img: "https://alp.consulting/wp-content/uploads/2025/02/Customized-targeted-recruitment.webp",
      desc: "Executive search enables a more customized effort on the part of the recruiters as they use special techniques to find the ideal candidate. Such customizations involve using specific filters in a talent database, asking more relevant questions as per the role, etc.",
    },
    {
      title: "Thoroughly vetted candidates",
      img: "https://alp.consulting/wp-content/uploads/2025/02/Thoroughly-vetted-candidates.webp",
      desc: "In an executive search, the candidates finally presented to the employer will be those who are thoroughly vetted, all background checks done and even references verified for each job in the work history.",
    },
    {
      title: "Updates throughout the process",
      img: "https://alp.consulting/wp-content/uploads/2025/02/Updates-throughout-the-process.webp",
      desc: "The retained search recruiters will keep providing you a lot of info derived from market intelligence, information from competitors and others about the candidate etc. at different stages of the recruitment process, so that your business can be confident you are hiring the right candidate.",
    },
    {
      title: "Multiple options for the business",
      img: "https://alp.consulting/wp-content/uploads/2025/02/Multiple-options-for-the-business.webp",
      desc: "The recruiters will provide multiple options to the business, shortlisted based on salary, kind of experience and other criteria, ensuring that the business makes the right decision and goes on to pick the right candidate, best suited for their needs.",
    },
  ];
  return (
    <div className=" bg-[#fcfcfc]">
      <PageTitle
        title="Executive Search Firm"
        imageUrl="https://alp.consulting/wp-content/uploads/2025/02/Executive-Search-Firm.webp"
      />
      <section className=" lg:mx-[100px] flex flex-col md:flex-row items-center md:items-stretch px-6 md:px-12 py-12 md:py-20 gap-10">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center text-left space-y-6">
          <h2 className="text-2xl md:text-5xl font-semibold text-gray-900">
            Executive Search
            <br />
            Company in India
          </h2>
          <p className="text-gray-700 leading-relaxed">
            DT Consulting is one of the topmost executive search firms in
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

      <section className="lg:mx-[100px] flex flex-col md:flex-row items-center md:items-stretch px-6 md:px-12 py-6 md:py-10 gap-10">
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
            At DT, we have a deep understanding of the client’s business
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
      <section className="lg:mx-[100px] px-6 md:px-12 py-12 md:py-20">
        <h2 className="text-2xl md:text-5xl text-gray-900 mb-10 text-center">
          How our Executive Search Team Operates?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Column 1 */}
          <div className="flex flex-col items-start px-6 space-y-4">
            <img
              src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?t=st=1757495133~exp=1757498733~hmac=3a50bbc2035810cf7e507ee622002879bed5ee243532db5d9656f88785002d51&w=1480"
              alt="Standalone Candidate Search"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <h3 className="text-3xl w-full text-center font-semibold text-gray-900">
              For a Standalone Candidate
              <br />
              Search
            </h3>
            <div className="px-6 py-3 text-gray-700">
              <ul className="list-disc  space-y-2">
                <li className="leading-loose ">
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
          <div className="flex flex-col items-start px-6 space-y-4">
            <img
              src="https://img.freepik.com/premium-photo/technology-job-interview-business-people-waiting-queue-recruitment-process-office-human-resources-meeting-group-hiring-candidates-with-phone-laptop-tablet-vacancy_590464-402586.jpg?w=1480"
              alt="Standalone Candidate Search"
              className="w-full h-56 object-contain rounded-2xl"
            />
            <h3 className="text-3xl w-full text-center font-semibold text-gray-900">
              For Multiple Candidates
              <br />
              Search
            </h3>
            <div className="px-6 py-3 text-gray-700">
              <ul className="list-disc  space-y-2">
                <li className="leading-loose ">
                  The Principal Consultant stays the same even when there is a
                  requirement for multiple candidates.
                </li>
                <li className="leading-relaxed">
                  Since there is a multiple-candidate search involved, several
                  teams take up the responsibility of conducting diligent
                  research based on role expertise.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:mx-[120px] bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-5xl text-gray-900 mb-10 text-center">
              What are the Benefits of Our Executive Search Services?
            </h2>
          </div>
          <p className="mt-4 text-gray-600">
            DT Consulting is known as one of the best executive search firms in
            India and we have rightfully earned that place by providing top
            notch executives search services to clients regardless of the nature
            of their industry, their unique needs and size of the company.
          </p>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl p-6 flex flex-col"
              >
                <div className="flex justify-center items-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-32 h-32 object-cover rounded-full"
                  />
                </div>

                <h3 className="font-semibold text-xl text-center text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Show Enquire Now after 3rd & 6th card */}
                {(idx === 1 || idx === 5) && (
                  <div className="mt-6 flex justify-center">
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                      Enquire Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#01143e] text-white py-12 px-6 md:px-12 lg:px-[140px]">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Info */}
          <div>
            {/* Image for mobile/tablet */}
            <div className="md:hidden mb-6">
              <img
                src="https://alp.consulting/wp-content/uploads/2025/02/Executive-Search-Agency.webp"
                alt="Industries We Serve"
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>

            <p className="mb-4 leading-relaxed">
              As one of the top executive search companies in India, we have
              served a wide range of industries and have found them their
              top-level leaders. Some of the major industries we serve are:
            </p>

            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-200">
              <li>Manufacturing</li>
              <li>Healthcare & Pharma</li>
              <li>Retail & E-commerce</li>
              <li>Aerospace</li>
              <li>IT and Finance</li>
              <li>Pharmaceuticals and more</li>
            </ul>

            <p className="mt-4 leading-relaxed">
              From CEOs and CFOs to department heads, our skilled recruiters
              have the experience to recruit top-level leaders for your open
              executive positions.
            </p>

            <div className="flex justify-center md:justify-start">
              <button className="mt-6 w-fit bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                Enquire Now
              </button>
            </div>
          </div>

          {/* Right Image (desktop only) */}
          <div className="hidden md:block">
            <img
              src="https://alp.consulting/wp-content/uploads/2025/02/Executive-Search-Agency.webp"
              alt="Industries We Serve"
              className="rounded-l-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="w-full bg-[#01143e] text-white py-12 px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          What are the Key Trends in Executive Search?
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div>
            {/* Image for mobile/tablet */}
            <div className="md:hidden mb-6">
              <img
                src="https://alp.consulting/wp-content/uploads/2025/02/Best-Executive-Search-Firm.webp"
                alt="Key Trends in Executive Search"
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>

            {/* Text */}
            <p className="mb-4 leading-relaxed">
              Executive Search services — We are one of the few executive search
              firms in India that strives to provide our clients with the best
              services possible and to do so, we make sure to keep ourselves
              updated about what’s trending in the field and implement the same
              in our executive search process. Some of the latest trends that
              seem to be working are:
            </p>

            <ul className="list-disc pl-4 space-y-2 text-gray-200">
              <li>
                Communicating the values, and mission through a storytelling
                approach to help potential candidates understand and form a
                connection with your brand.
              </li>
              <li>
                Hosting inclusive networking events and interacting with a
                diverse group of people to gather different perspectives.
              </li>
              <li>
                Keep constant communication with potential candidates throughout
                the process to make them feel welcome and wanted.
              </li>
              <li>
                Curate programs that can help potential candidates shadow your
                current leaders, giving them a glimpse of how their work life
                would be.
              </li>
              <li>
                To onboard for executive positions, you can start by having
                conversations about their preferred learning style, personality
                attributes, existing skill levels, and priority areas for
                growth.
              </li>
              <li>
                Incorporate data analysis and metrics into executive search and
                hiring decisions rather than relying solely on intuitive
                judgments.
              </li>
            </ul>

            <div className="flex justify-center md:justify-start">
              <button className="mt-6 w-fit bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                Enquire Now
              </button>
            </div>
          </div>

          {/* Right Image (desktop only) */}
          <div className="hidden md:block">
            <img
              src="https://alp.consulting/wp-content/uploads/2025/02/Best-Executive-Search-Firm.webp"
              alt="Key Trends in Executive Search"
              className="rounded-r-2xl object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveSearch;
