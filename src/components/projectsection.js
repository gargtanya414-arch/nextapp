"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const cases = [
  {
    category: "Frustration",
    title: "Depression",
    description: "Gostrud exercitation aute irure...",
    image: "/case-2.jpg",
  },
  {
    category: "Individual",
    title: "Personal Meeting",
    description: "Eostrud exercitation aute irure...",
    image: "/portfolio-img-1.jpg",
  },
  {
    category: "Couple Problem",
    title: "Mental Consult",
    description: "Nostrud exercitation aute irure...",
    image: "/portfolio-img.jpg",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#FAF7F3] py-16">
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 uppercase tracking-wide">
            Latest Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-serif">
            Explore Our Latest Case Studies
          </h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {cases.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-xs mx-auto bg-transparent rounded-xl overflow-hidden">
                <div className="">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={500}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
                <div className="bg-white relative  m-0 auto rounded-xl shadow-md -mt-10 mx-4 p-5 text-center">
                  <p className="text-sm  text-orange-500 mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-1 text-sm">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-700 text-white"
                    ></a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
