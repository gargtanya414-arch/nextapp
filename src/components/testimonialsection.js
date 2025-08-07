"use client";

import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam,",
      name: "Jamie Oliver",
      role: "Happy Customer",
      image: "/client-img1.jpg",
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam,",
      name: "Alice Waters",
      role: "Happy Customer",
      image: "/client-img2.jpg",
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam,",
      name: "Clare Smyth",
      role: "Happy Customer",
      image: "/client-img3.jpg",
    },
  ];
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-orange-500 uppercase tracking-wide mb-2">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-serif mb-8">
          What Our Patients are Saying
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="max-w-2xl mx-auto"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-center mb-4 space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">“{t.text}”</p>
                <div className="flex justify-center items-center space-x-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
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
