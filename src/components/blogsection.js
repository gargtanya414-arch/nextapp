"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function BlogSection() {
  const blogPosts = [
    {
      title: "The Importance of Regular Dental Check-ups",
      date: "Jan 02, 2024",
      excerpt: "Maintaining good oral health is not just about...",
      image: "/dentist-blog-1.jpg",
    },
    {
      title: "The Link Between Oral Health and Systemic Diseases",
      date: "Jan 02, 2024",
      excerpt: "The traditional divide between oral health and systemic...",
      image: "/dentist-blog-2.jpg",
    },
    {
      title: "The Role of Nutrition in Supporting Dental Health",
      date: "Jan 02, 2024",
      excerpt: "While oral hygiene practices like brushing and flossing...",
      image: "/dentist-blog-3.jpg",
    },
  ];

  return (
    <>
      <section className="bg-[#f9f6f2] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Header */}
          <p className="text-[#c77c55] font-medium mb-2">Articles & Tips</p>
          <h2 className="text-4xl font-serif text-[#1f1f1f] mb-10">
            Latest News & Blogs
          </h2>

          {/* Swiper Slider */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {blogPosts.map((post, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-xl relative w-90 shadow hover:shadow-lg transition duration-300 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="relative p-6 text-left">
                    <p className="text-sm  text-orange-500 mb-1">{post.date}</p>
                    <h3 className="text-lg font-semibold text-[#1f1f1f] mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <a
                      href="#"
                      className="text-sm text-teal-600 font-medium hover:underline"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
