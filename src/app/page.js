"use client";

import AboutUsSection from "../components/aboutsection";
import AppointmentSection from "../components/appointmentsection";
import BlogSection from "../components/blogsection";
import Footer from "../components/footer";
import Section from "../components/homesection";
import Navbar from "../components/navbar";
import CaseStudiesSection from "../components/projectsection";
import ServicesSection from "../components/servicesection";
import StatsSection from "../components/statssection";
import TeamSection from "../components/teamsection";
import TestimonialsSection from "../components/testimonialsection";
import HowItWorksSection from "../components/worksection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Section />
      <ServicesSection />
      <AboutUsSection />
      <AppointmentSection />
      <CaseStudiesSection />
      <StatsSection />
      <HowItWorksSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </>
  );
}
