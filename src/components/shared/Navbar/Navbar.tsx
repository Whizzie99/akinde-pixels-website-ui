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
      if (window.innerWidth >= 768 && isMenuOpen) {
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
    <>
      <div className="h-[85px] w-full" /> {/* Spacer div to prevent content jump */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-40 shadow-sm">
        <div className="custom-container">
          <div className="flex items-center justify-between py-4">
            <div className="md:hidden">
              <Image
                src={hamburgerIcon}
                alt="Menu"
                width={24}
                height={24}
                onClick={toggleMenu}
                className="cursor-pointer"
              />
            </div>
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
            <div className="hidden md:flex items-center gap-6">
              {navData.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="capitalize font-lato hover:text-[#F28E2C] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/booking"
                className="bg-[#F28E2C] text-white py-2 px-4 rounded-md capitalize font-lato hover:bg-[#e07d1b] transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-all px-6 pb-8 duration-300 ease-in-out md:hidden ${
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
                  className="capitalize font-lato text-xl hover:text-[#F28E2C] transition-colors"
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
                className="w-full"
              />
            </div>
            <p className="my-6 text-xl font-medium">Capture Your Moments!</p>
            <Link
              href="/booking"
              className="block w-full bg-[#F28E2C] text-white py-3 px-12 rounded text-lg font-semibold text-center hover:bg-[#e07d1b] transition-colors"
            >
              Book Us Now!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;