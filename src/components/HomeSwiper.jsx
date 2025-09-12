import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const industries = [
  {
    title: "Logistics",
    desc: "When you need temp staff, you can rely on and warehouse managers you can trust",
    img: "https://alp.consulting/wp-content/uploads/2025/02/Logistics.webp",
  },
  {
    title: "Agritech",
    desc: "Hiring a regenerative agriculture specialist, a research head or toxicologist? We hear from you!",
    img: "https://alp.consulting/wp-content/uploads/2025/02/Agritech.webp",
  },
  {
    title: "Automobile",
    desc: "Design engineers, automation experts, and battery specialists could make all the difference",
    img: "https://alp.consulting/wp-content/uploads/2025/02/Auto.webp",
  },
  {
    title: "Aerospace",
    desc: "Space is the next frontier only with great aerospace engineers and scientists",
    img: "https://alp.consulting/wp-content/uploads/2025/02/Aerospace.webp",
  },
  {
    title: "Retail and E-commerce",
    desc: "Find the customer's basket with retail specialists and great customer care managers",
    img: "https://alp.consulting/wp-content/uploads/2025/02/Retail-and-E-commerce.webp",
  },
  {
    title: "Semiconductor",
    desc: "Hire design engineers and QC experts who ensure that a NAND Gate does not delay customer delight",
    img: "https://alp.consulting/wp-content/uploads/2025/02/Semiconductor-RD-and-Manufacturing.webp",
  },
  {
    title: "Oil and Gas",
    desc: "Hire reservoir engineers to identify new opportunities and chemical engineers to refine existing processes",
    img: "https://alp.consulting/wp-content/uploads/2025/02/Oil-and-Gas.webp",
  },
  {
    title: "Shipbuilding",
    desc: "Build your way to naval might with naval engineers and architects prized for their talent",
    img: "https://alp.consulting/wp-content/uploads/2025/02/Shipbuilding.webp",
  },
  {
    title: "Renewable Energy",
    desc: "Identify newer sources and optimize existing ones with the right talent",
    img: "https://alp.consulting/wp-content/uploads/2025/02/Renewable-Energy.webp",
  },
];

export default function IndustriesSlider() {
  const swiperRef = useRef(null);

  return (
    <div className="lg:mx-[100px] py-12">
      {/* Heading */}
      <h2 className="text-center text-3xl font-bold text-[#2596be] mb-8 px-6">
        Industries We Serve
      </h2>
      
      {/* Container with proper spacing for arrows */}
      <div className="relative max-w-7xl mx-auto">
        {/* Left padding for arrow space */}
        <div className="pl-16 pr-16 md:pl-20 md:pr-20">
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              320: { 
                slidesPerView: 1,
                spaceBetween: 16
              },
              640: { 
                slidesPerView: 1.5,
                spaceBetween: 16
              },
              768: { 
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: { 
                slidesPerView: 2.5,
                spaceBetween: 24
              },
              1280: { 
                slidesPerView: 3,
                spaceBetween: 24
              },
            }}
            className="!px-6 md:!px-10"
          >
            {industries.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white/80 h-full backdrop-blur-sm border border-[#2596be]/30 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center min-h-[280px] hover:scale-105 hover:border-[#2596be]">
                  <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-20 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2596be] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* External Navigation Buttons - Positioned outside the slider container */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 border-2 border-[#2596be] hover:border-[#1a7a96] text-[#2596be] hover:text-white rounded-full hover:bg-[#2596be] bg-white/90 backdrop-blur-sm transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-[-1px] transition-transform duration-200" />
        </button>
        
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 border-2 border-[#2596be] hover:border-[#1a7a96] text-[#2596be] hover:text-white rounded-full hover:bg-[#2596be] bg-white/90 backdrop-blur-sm transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-[1px] transition-transform duration-200" />
        </button>
      </div>
    </div>
  );
}