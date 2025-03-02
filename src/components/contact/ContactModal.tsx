"use client";

// import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { footerSocials } from "../../../db/data";

interface ContactModalProps {
  // isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ onClose }: ContactModalProps) => {
  // const [isAnimating, setIsAnimating] = useState(false);

  // useEffect(() => {
  //   if (isOpen) {
  //     setIsAnimating(true);
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     const timer = setTimeout(() => {
  //       setIsAnimating(false);
  //     }, 300); // Match this with the transition duration
  //     document.body.classList.remove("overflow-hidden");
  //     return () => clearTimeout(timer);
  //   }
  // }, [isOpen]);

  // if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full bg-black-alpha-1 z-[9999] flex items-center justify-center`}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg lg:p-8 p-4 xl:w-[30%] w-[80%] transition-all duration-300 ease-in-out"
        // onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <h2 className="text-2xl font-bold text-orange-500 pt-6 pb-4 text-center custom-container">
          CONTACT US
        </h2>
        <div className="w-full mx-auto">
          <p className="text-center text-gray-600 mb-6 text-[12px] lg:text-base">
            Get in Touch and Let&apos;s Create Something Beautiful
          </p>
          <div className="text-start text-black grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 ">
            <div>
              <h3 className="font-semibold text-center">Email</h3>
              <p className="text-gray-600 text-sm cursor-pointer text-center inline-block w-full">
                bookings@akindepixels.com
              </p>
            </div>
            {/* <div>
              <h3 className="font-semibold text-center">Contact Number</h3>
              <p className="text-gray-600 text-sm cursor-pointer text-center inline-block w-full">XXXXXXXXX</p>
            </div> */}
            <div>
              <h3 className="font-semibold text-center">
                {footerSocials[0].name}
              </h3>
              <Link
                href={footerSocials[0].link}
                target="_blank"
                className="text-gray-600 text-sm cursor-pointer text-center inline-block w-full"
              >
                AkindePixels
              </Link>
            </div>
            <div>
              <h3 className="font-semibold text-center">
                {footerSocials[1].name}
              </h3>
              <Link
                href={footerSocials[1].link}
                target="_blank"
                className="text-gray-600 text-sm cursor-pointer text-center inline-block w-full"
              >
                AkindePixels
              </Link>
            </div>
            <div>
              <h3 className="font-semibold text-center">
                {footerSocials[2].name}
              </h3>
              <Link
                href={footerSocials[2].link}
                target="_blank"
                className="text-gray-600 text-sm cursor-pointer text-center inline-block w-full"
              >
                AkindePixels
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
