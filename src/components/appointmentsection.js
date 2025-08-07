"use client";

export default function AppointmentSection() {
  return (
    <section className="relative bg-white">
      <div className="md:hidden absolute inset-0">
        <img
          src={"/Book-with-us-bg-img.jpg"}
          alt="Therapy Session"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-[#EE8961]"></div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 relative z-9">
        {/* Left Form */}
        <div className="bg-[#EE8961] md:bg-[rgb(238,137,97)] p-8 md:p-12 shadow-lg text-white flex flex-col justify-center">
          <h4 className="text-sm uppercase tracking-wide mb-2">
            Book with use now
          </h4>
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Get an Appointment
          </h2>
          <p className="mb-6">
            Molestiae non recusandae itaque earum rerum sarien.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md text-gray-800 w-full focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email address"
              className="p-3 rounded-md text-gray-800 w-full focus:outline-none"
            />
            <select className="p-3 rounded-md text-gray-800 w-full focus:outline-none">
              <option>Choose department</option>
              <option>Department 1</option>
              <option>Department 2</option>
            </select>
            <select className="p-3 rounded-md text-gray-800 w-full focus:outline-none">
              <option>Choose doctor</option>
              <option>Doctor 1</option>
              <option>Doctor 2</option>
            </select>
            <input
              type="date"
              className="p-3 rounded-md text-gray-800 w-full focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 rounded-md text-gray-800 w-full focus:outline-none"
            />
            <button
              type="submit"
              className="md:col-span-2 bg-white text-[#EE8961] font-semibold py-3 rounded-md hover:bg-orange-100 transition w-full"
            >
              Make an Appointment
            </button>
          </form>
        </div>

        <div className="hidden md:block w-full h-full">
          <img
            src="/Book-with-us-bg-img.jpg"
            alt="Therapy Session"
            layout="responsive"
            width={700}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
