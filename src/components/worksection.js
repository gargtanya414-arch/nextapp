"use client";

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Talk to Us First",
      description:
        "Nuis aute irure dolor reprehenderit in volutae velit esse fugiat.",
      icon: "/how-it-works-icon-1.png",
    },
    {
      title: "Book an Appointment",
      description:
        "Blandit fauce bus perce viverra sem rutrum aeu vulputate came.",
      icon: "/how-it-works-icon-2.png",
    },
    {
      title: "Come Sit With Us",
      description:
        "Maiores alias consequatur aut perferendis dolor reus asperiores repellat.",
      icon: "/how-it-works-icon-3.png",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={"/How-it-work-img.png"}
            alt="Therapy Session"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div>
          <p className="text-orange-500 uppercase tracking-wide mb-2">
            How it Works
          </p>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Professional Psychology Therapy You Can Choose
          </h2>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex items-center justify-center border-2 border-dashed border-[#FF9B91] rounded-full w-16 h-16 sm:w-20 sm:h-20">
                  <img
                    src={step.icon}
                    alt="Step Icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 text-white bg-[#257568] hover:bg-[#EE8961]  hover:-translate-y-2 focus:ring-4 focus:ring-[#257568] font-medium rounded-lg text-sm px-6 py-3 transition duration-300">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
