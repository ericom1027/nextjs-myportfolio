"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#Home" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer transition-transform duration-300 hover:scale-110 drop-shadow-[0_5px_10px_rgba(42,14,97,0.7)] hover:drop-shadow-[0_10px_20px_rgba(42,14,97,1)]"
          />
          <span className="hidden lg:inline-block font-extrabold text-transparent text-lg uppercase tracking-widest bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">
            EMD
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu color="white" size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[720px] h-full items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto md:border md:border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#about-me"
              className="hover:text-[#7042f8] transition-colors duration-300"
            >
              About me
            </a>
            <a
              href="#skills"
              className="hover:text-[#7042f8] transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-[#7042f8] transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contactus"
              className="hover:text-[#7042f8] transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-[65px] left-0 w-full bg-gray-800 text-gray-200 flex flex-col items-center justify-center text-center py-4 md:hidden">
            <a
              href="#about-me"
              className="py-2 hover:text-gray-400 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About me
            </a>
            <a
              href="#skills"
              className="py-2 hover:text-gray-400 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="py-2 hover:text-gray-400 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contactus"
              className="py-2 hover:text-gray-400 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`/${social.name}.svg`}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
