"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ServicesSection() {
  const services = [
    {
      title: "Couple Therapy",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/Services-section-img1.jpg",
      icon: "/type-img2.png",
    },
    {
      title: "Family Counseling",
      description:
        "Ruis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/services-section-img-2.jpg",
      icon: "/type-img3.png",
    },
    {
      title: "Anxiety Disorder",
      description:
        "Nuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/Services-section-img-3.jpg",
      icon: "/type-img4.png",
    },
    {
      title: "Personal Meeting",
      description:
        "Guis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image: "/services-section-img-4.jpg",
      icon: "/type-img1.png",
    },
  ];

  return (
    <section className="bg-[#f9f6f2] py-12 relative">
      <div className="text-center mb-8 px-4">
        <p className="text-orange-500 font-medium text-sm md:text-base">
          Services We Provide
        </p>
        <h2 className="text-2xl md:text-4xl font-serif mt-2 leading-tight">
          Professional Psychology Therapy Services You Can Choose
        </h2>
      </div>

      {/* External Navigation Buttons */}
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
      <button className="swiper-button-prev custom-nav p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M15.78 4.22a.75.75 0 010 1.06L9.06 12l6.72 6.72a.75.75 0 11-1.06 1.06l-7.25-7.25a.75.75 0 010-1.06l7.25-7.25a.75.75 0 011.06 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
      <button className="swiper-button-next custom-nav p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path
            fillRule="evenodd"
            d="M8.22 19.78a.75.75 0 010-1.06L14.94 12 8.22 5.28a.75.75 0 111.06-1.06l7.25 7.25a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>


      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-10"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 p-4">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl w-full h-full object-cover transition-transform duration-300 hover:translate-y-1"
                  />
                  <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 bg-[#ee8961] p-4 rounded-full shadow-md w-16 h-16 flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
                <div className="mt-12 text-center">
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  <a
                    href="#"
                    className="text-green-700 font-medium hover:underline text-sm"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
