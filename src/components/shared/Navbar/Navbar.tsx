"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/images/logo.png";
import hamburgerIcon from "../../../../public/images/hamburger-icon.png";
import mobileImage from "../../../../public/images/mobile-image.png";

const navData = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Portfolio", link: "/portfolio" },
  { id: 3, name: "Journals", link: "/journals" },
  { id: 4, name: "About Us", link: "/about-us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  return (
    <div className="relative custom-container">
      <div className="flex items-center justify-between py-4">
        {/* Hamburger Icon for screens 768px and below */}
        <div className="lg:hidden">
          <Image
            src={hamburgerIcon}
            alt="Menu"
            width={24}
            height={24}
            onClick={toggleMenu}
            className="cursor-pointer"
          />
        </div>

        {/* Logo */}
        <Link href="/" className="w-[247.83px] h-[37.17px] relative">
          <Image
            src={logo}
            alt="Akinde Pixels"
            fill
            sizes="150px"
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu for screens larger than 768px */}
        <div className="hidden lg:flex items-center gap-6">
          {navData.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="capitalize font-lato"
            >
              {item.name}
            </Link>
          ))}
          {/* "Book Now" button for desktop */}
          <Link
            href="/booking"
            className="bg-[#F28E2C] text-white py-2 px-4 rounded-md capitalize font-lato"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-all px-6 pb-8 duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ overflowY: "auto" }}
      >
        <div className="p-4">
          <button onClick={toggleMenu} className="mb-8 text-5xl">
            &times;
          </button>
          <ul className="flex flex-col gap-6">
            {navData.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="capitalize font-lato text-xl"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <div className="w-full mx-auto">
              <Image
                src={mobileImage}
                alt="Capture Your Moments"
                width={350}
                height={249}
                className="mo"
              />
            </div>
            <p className="my-6 text-xl font-medium">Capture Your Moments!</p>
            <Link
              href="/booking"
              className="w-full bg-[#F28E2C] text-white py-3 px-12 rounded text-lg font-semibold"
            >
              Book Us Now!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
