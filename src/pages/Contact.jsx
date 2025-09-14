import { MapPin, Building2, Briefcase, Search } from "lucide-react";
import BusinessContactForm from "../components/BusinessContactForm";

// ---------------- Location Card ----------------
const LocationCard = ({ location }) => (
  <div className="group bg-white rounded-xl  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
    <div className="relative overflow-hidden">
      <div className="h-48  flex items-center justify-center">
        <img
          src={location.image}
          alt={`${location.name} Branch`}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzE1IiBoZWlnaHQ9IjIyMiIgdmlld0JveD0iMCAwIDMxNSAyMjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMTUiIGhlaWdodD0iMjIyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNTcuNSAxMTFMMTI1IDc4LjVMMTkwIDc4LjVMMTU3LjUgMTExWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <MapPin className="w-5 h-5 text-white" />
      </div>
    </div>

    <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
        <h3 className="text-xl font-bold text-gray-800 uppercase tracking-wide">
          {location.name}
        </h3>
      </div>
      <div className="text-gray-600 leading-relaxed">
        {location.address.split("\n").map((line, index) => (
          <p key={index} className="mb-1">
            {line}
          </p>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
      </div>
    </div>
  </div>
);


const Contact = () => {
  const locations = [
    {
      id: "bangalore",
      name: "BANGALORE",
      image: "https://alp.consulting/wp-content/uploads/2023/08/BANGALORE.png",
      address:
        "No. 11/2, KHR House,\nPalace Road, Vasanthnagar,\nBangalore – 560 052.",
    },
    {
      id: "noida",
      name: "NOIDA",
      image: "https://alp.consulting/wp-content/uploads/2023/08/NOIDA.png",
      address: "Web commerce Towers\nB-58, Sector 6\nNoida – 201301.",
    },
    {
      id: "hyderabad",
      name: "HYDERABAD",
      image: "https://alp.consulting/wp-content/uploads/2023/08/HYDERABAD.png",
      address:
        "Spacion Towers, 4th Floor,\nVittal Rao Nagar, Hitech City,\nHyderabad-500081.",
    },
    {
      id: "mumbai",
      name: "MUMBAI",
      image: "https://alp.consulting/wp-content/uploads/2023/08/MUMBAI.png",
      address:
        "A-202, Silver Astra, J.B. Nagar Circle,\nbearing CTS No. 468,\nChakala Andheri(E), Mumbai - 400059.",
    },
    {
      id: "goa",
      name: "GOA",
      image: "https://alp.consulting/wp-content/uploads/2023/10/goa-icon-1.png",
      address:
        "FiiRE Don Bosco Campus, Fatorda, Margao - 403602,\nGoa, India.",
    },
    {
      id: "srilanka",
      name: "Sri Lanka",
      image:
        "https://alp.consulting/wp-content/uploads/2023/09/sri_lanka-icon.png",
      address:
        "DT CONSULTING LANKA (PRIVATE) LIMITED, (PV00266559) No.568/2, Aluthmawath Road, Colombo 15, Postcode: 01500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className=" bg-[#01143e] text-white flex md:flex-row items-center md:items-stretch overflow-hidden">
      {/* Title Section */}
      <div className="flex-1 flex items-center justify-center md:justify-start px-6 py-12 md:px-0 md:pl-[140px] md:py-16">
        <div className="text-center md:text-left flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-left leading-snug max-w-2xl">
            Contact
          </h1>
          <p className="text-sm text-gray-400">Get in touch with Us.</p>
        </div>
      </div>

      {/* Image Section (hidden on < md) */}
      <div className=" md:block h-full md:h-auto md:w-3/8">
        <img
          src="https://alp.consulting/wp-content/uploads/2023/08/Contact-Us-Top-Banner-min.png"
          alt="Contact"
          className="w-full h-full object-cover rounded-l-full overflow-hidden"
        />
      </div>
    </section>
       {/* Contact Options Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Business Queries */}
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="relative">
                  <Briefcase className="w-12 h-12 text-blue-600" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
              Business Queries
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you want to avail of any of our recruitment, staffing, HR outsourcing, and training services, please{' '}
              <button className="text-blue-500 hover:text-blue-700 underline font-medium">
                click here
              </button>
              .
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-blue-700 font-semibold">
                Contact Us: 📞 +917619569047
              </p>
            </div>
          </div>

          {/* Employee Queries */}
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="relative">
                  <Search className="w-12 h-12 text-red-600" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">?</span>
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-orange-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
              Employee Queries
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you are a former employee and you have any query related to your Provident Fund, ESI, PT, Tax or other employment related queries, please send an email to{' '}
              <a href="mailto:hr@dtconsulting.in" className="text-blue-500 hover:text-blue-700 underline font-medium">
                hr@dtconsulting.in
              </a>
            </p>
          </div>

          {/* Job Seeker */}
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="mb-8 relative">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-100 to-purple-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="relative">
                  <div className="w-16 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-6 bg-white rounded-sm"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
                  <div className="absolute -bottom-1 left-2 w-4 h-4 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">
              Job Seeker
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you wish to check all the jobs available with us and apply to open positions, please{' '}
              <button className="text-blue-500 hover:text-blue-700 underline font-medium">
                click here
              </button>
              . Our team will revert to you as soon as your resume matches one of the job requirement.
            </p>
          </div>
          
        </div>
      </div>
  


      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Office Locations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Find us across multiple cities and countries. We're here to serve
              you with our comprehensive consulting services.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      <BusinessContactForm />
    </div>
  );
};

export default Contact;