"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Medunit Logo"
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <a href="#" className="">Home</a>
          <a href="#" className="">About</a>
          <a href="#" className="">Services</a>
          <a href="#" className="">Cases</a>
          <a href="#" className="">Pages</a>
          <a href="#" className="">Blog</a>
          <a href="#" className="">Contact</a>
        </nav>
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-95">
          <div className="flex flex-col space-y-4 px-6 py-4 text-white font-medium">
            <a href="#" className="">Home</a>
            <a href="#" className="">About</a>
            <a href="#" className="">Services</a>
            <a href="#" className="">Cases</a>
            <a href="#" className="">Pages</a>
            <a href="#" className="">Blog</a>
            <a href="#" className="">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}