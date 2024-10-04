/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../../public/images/logo.png";

const navData = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 3,
    name: "Journals",
    link: "/journals",
  },
  {
    id: 4,
    name: "About Us",
    link: "/about",
  },
];

const Navbar = () => {
  return (
    <div>
      <div className="custom-container">
        <div className="flex items-center justify-between">
          <div className="w-[200px] h-[100px] relative">
            <Image
              src={logo}
              alt="sample"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
              className="object-contain"
            />
          </div>
          <div>
            <ul className="flex items-center gap-6">
              {navData.map((item: any) => (
                <li key={item.id}>
                  <Link href={item.link} className="capitalize font-lato">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="bg-[#F28E2C] px-4 py-3">
                <Link href="#" className="capitalize font-lato text-white">
                  book now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
