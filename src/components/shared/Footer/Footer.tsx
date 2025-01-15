"use client";

import footpix from "../../../../public/images/new_assets/grad-1.jpg";
import footerPix1 from "../../../../public/images/new_assets/grad-2.jpg";

import Link from "next/link";
import { footerNav, footerSocials } from "../../../../db/data";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F3F3F3] py-8 font-lato">
      <div className="custom-container">
        <div className="flex justify-between items-center py-8">
          <hr className="bg-black lg:w-[40%] w-full h-[12px] my-4" />
          <hr className="bg-black w-[40%] h-[12px] my-4 hidden lg:block" />
        </div>
        <div className="flex justify-between lg:flex-row flex-col">
          <div className="grid grid-cols-2 gap-6">
            {footerNav.map((item) => (
              <div key={item.id}>
                <Link href={item.link}>{item.name}</Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 lg:mt-0 mt-4">
            <Image
              src={footpix}
              width={150}
              height={100}
              alt=""
              className="lg:w-full w-[382px] lg:h-auto h-[260px] object-cover rounded-[8px]"
            />
            <Image
              src={footerPix1}
              width={150}
              height={100}
              alt=""
              className="lg:w-full object-cover hidden lg:inline rounded-[8px]"
            />
          </div>
          <div className="lg:px-8 lg:mt-0 mt-4">
            <p className="text-[24px] capitalize text-center font-sofia">
              Capture your moment!
            </p>
            <div className="flex flex-col lg:justify-center lg:items-center ">
              <div className="mb-2">
                <Link
                  href="/booking"
                  className="flex items-center justify-center gap-2 mt-6 lg:w-[13rem] w-full bg-[#F28E2C] p-4 rounded-[5px] text-white "
                >
                  Book a session
                </Link>
              </div>
              <div className="text-center">
                <p>Connect with Us</p>
                <small>bookings@akindepixels.com</small>
                <div className="flex space-x-2 mt-2 items-center justify-center">
                  {footerSocials.map((item) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      className="text-xl font-lato"
                    >
                      <item.icon />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <hr className="bg-black lg:w-[40%] w-full h-[12px] my-4" />
        </div>
        <div className="text-center py-4 text-sm text-gray-600">
          &copy; copyrights Akinde Pixels {currentYear}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
