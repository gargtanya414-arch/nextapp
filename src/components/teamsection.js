"use client";

import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function TeamSection() {
  const team = [
    {
      name: "Alice Waters",
      role: "Sycho Founder",
      image: "/Dentic-img-2.jpg",
    },
    {
      name: "Jamie Oliver",
      role: "Therapy Expert",
      image: "/Dentist-img-2.jpg",
    },
    {
      name: "Clare Smyth",
      role: "Sycho Founder",
      image: "/Dentist-img-3.jpg",
    },
    {
      name: "Hekim Rswana",
      role: "Therapy Expert",
      image: "/home-team-03.jpg",
    },
  ];

  return (
    <section className="py-16 bg-[#FAF7F3]">
      <div className="container mx-auto px-4 text-center">
        <p className="text-orange-500 uppercase tracking-wide mb-2">
          Perfect Solutions for Your Mind
        </p>
        <h2 className="text-3xl md:text-4xl font-serif mb-12">
          We Will Help You to Understand & Solve The Problems
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex space-x-3 mb-4">
                  <a
                    href="#"
                    className="text-black text-xl hover:text-blue-600 transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="text-black text-xl hover:text-sky-400 transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="text-black text-xl hover:text-blue-800 transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <p className="text-black text-sm mb-4">
                  Nuis aute irure dolor reprehenderit in voluptate velit esse
                  fugiat...
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                  Book Appointment
                </button>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
