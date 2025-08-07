import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer className="bg-[#146C5F] text-white">
                {/* Newsletter Banner */}
                <div className="relative -translate-y-1/2 flex justify-center px-4">
                    <div className="bg-[#EE8961] rounded-xl px-6 py-5 flex flex-col md:flex-row items-center gap-4 w-full max-w-5xl">
                        <h3 className="text-xl md:text-2xl font-serif text-white text-center md:text-left">
                            Subscribe To Our Newsletter
                        </h3>
                        <div className="flex flex-col sm:flex-row flex-1 gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Your Email Address:"
                                className="flex-1 px-4 py-2 rounded-lg border border-orange-200 outline-none focus:ring focus:ring-orange-300 text-gray-800 text-sm"
                            />
                            <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-[#146C5F] hover:text-white transition text-sm">
                                Sign Up Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Content */}
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div>
                        <div className="mb-4">
                            <Image
                                src="/logo.png"
                                alt="Background Logo"
                                width={146}
                                height={20}
                                className="object-contain"
                                priority
                            />
                        </div>
                        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                            Deleniti aeue corrupti quos dolores quas tias excepturi sint occaecati
                            cupiditate non similique sunt incidunt...
                        </p>
                        <div className="flex gap-3 mt-3">
                            <a href="#" className="p-2 rounded-full bg-[#245a4b] hover:bg-[#1f4d40] transition">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-[#245a4b] hover:bg-[#1f4d40] transition">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-[#245a4b] hover:bg-[#1f4d40] transition">
                                <Instagram size={16} />
                            </a>
                        </div>
                    </div>

                    {/* About Us Links */}
                    <div>
                        <h5 className="font-semibold text-lg mb-3">About Us</h5>
                        <ul className="space-y-2 text-gray-200 text-sm">
                            <li><a href="#" className="hover:underline">Services</a></li>
                            <li><a href="#" className="hover:underline">Pricing</a></li>
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Contact us</a></li>
                        </ul>
                    </div>

                    {/* Our Services Links */}
                    <div>
                        <h5 className="font-semibold text-lg mb-3">Our Services</h5>
                        <ul className="space-y-2 text-gray-200 text-sm">
                            <li><a href="#" className="hover:underline">Couple Therapy</a></li>
                            <li><a href="#" className="hover:underline">Family Counseling</a></li>
                            <li><a href="#" className="hover:underline">Anxiety Disorder</a></li>
                            <li><a href="#" className="hover:underline">Personal Meeting</a></li>
                            <li><a href="#" className="hover:underline">Group Therapy</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h5 className="font-semibold text-lg mb-3">Contact Info</h5>
                        <ul className="space-y-3 text-gray-200 text-sm">
                            <li className="flex items-start gap-2">
                                <Phone size={16} /> +613 8376 6284
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail size={16} /> Info@medunit.com
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin size={16} /> 21 King Street Melbourne, 3000, Australia
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-[#3f8f7a] py-4 text-center text-xs sm:text-sm text-gray-300">
                    Copyright © Medunit 2025. All rights reserved
                </div>
            </footer>
        </>
    )
}
