"use client";

import Button from "./button";
import SocialIcons from "./socialicons";

export default function Section() {
  const images = {
    lineImage: "/line-image-home-01.jpg",
    bannerImage1: "/banner-image-1.jpg",
    bannerImage2: "/banner-img-2.jpg",
    bannerImage3: "/banner-img-3.jpg",
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/Home-01-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(46,116,103,0.8)]"></div>

      <div className="relative z-10 container mx-auto flex flex-col-reverse md:flex-row justify-center items-center h-full px-4 md:px-8 py-8 md:py-0">
        {/* Text Section */}
        <div className="text-white max-w-xl text-center md:text-left">
          <div className="flex flex-col items-center md:items-start mb-2">
            {/* <img
              src={images.lineImage}
              alt="Line"
              className="h-5 mb-2"
            /> */}
            <p className="text-sm uppercase tracking-wide">
              Perfect Solution for your mind
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            We Will Help You to Understand & Solve The Problems
          </h1>

          <p className="mb-4 text-sm sm:text-base">
            Doidunt eget semper nec ruam sed hendrerit morbi aeu feliseao augue
            pellentesue veniam morbi ace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
            <Button text={"Book Appointment"} className="bg-[#EE8961]" />
            <Button text={"Read More"} />
          </div>

          <div className="flex justify-center md:justify-start">
            <SocialIcons />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-auto lg:grid grid-cols-1 sm:grid-cols-2 gap-4 items-center mb-8 md:mb-0 hidden">
          <div className="w-full md:h-60 sm:h-80 md:h-[40vh] rounded-3xl bg-white overflow-hidden">
            <img
              src={images.bannerImage1}
              alt="Big Session"
              className="object-cover w-full h-full rounded-3xl"
            />
          </div>
          <div className="flex flex-col gap-4 sm:translate-y-10">
            <div className="w-full h-52 sm:h-60 md:h-[30vh] rounded-3xl overflow-hidden drop-shadow-lg border-opacity-10">
              <img
                src={images.bannerImage2}
                alt="Small Session Top"
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
            <div className="w-full h-52 sm:h-60 md:h-[30vh] rounded-3xl overflow-hidden drop-shadow-lg border-opacity-10">
              <img
                src={images.bannerImage3}
                alt="Small Session Bottom"
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
