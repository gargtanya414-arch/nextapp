import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="hidden md:flex space-x-3 mt-6">
      <a href="#" className="p-2 bg-[#21554d] rounded-full text-white hover:bg-[#EE8961]">
        <FaFacebookF />
      </a>
      <a href="#" className="p-2 bg-[#21554d] rounded-full text-white hover:bg-[#EE8961]">
        <FaTwitter />
      </a>
      <a href="#" className="p-2 bg-[#21554d] rounded-full text-white hover:bg-[#EE8961]">
        <FaInstagram />
      </a>
    </div>
  );
}
