"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.classList.add("overflow-hidden");
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Match this with the transition duration
      document.body.classList.remove("overflow-hidden");
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div 
      className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        isOpen ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div 
        className={`bg-white rounded-lg lg:p-8 p-4 w-[616px] h-[578px] max-w-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <h2 className="text-2xl font-bold text-orange-500 pt-12 pb-4 lg:text-center text-start custom-container">
          CONTACT US
        </h2>
        <div className="custom-container">
          <p className="lg:text-center text-start text-gray-600 mb-6 text-[12px] lg:text-base">
            Get in Touch and Let&apos;s Create Something Beautiful
          </p>
          <div className="text-start text-black grid grid-cols-2 gap-16 py-4 ">
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600 text-sm">Akindepixels@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Contact Number</h3>
              <p className="text-gray-600 text-sm">XXXXXXXXX</p>
            </div>
            <div>
              <h3 className="font-semibold">Instagram</h3>
              <p className="text-gray-600 text-sm">XXXXXXXX</p>
            </div>
            <div>
              <h3 className="font-semibold">X</h3>
              <p className="text-gray-600 text-sm">XXXXXXXXXX</p>
            </div>
            <div>
              <h3 className="font-semibold">Facebook</h3>
              <p className="text-gray-600 text-sm">XXXXXXXX</p>
            </div>
            <div>
              <h3 className="font-semibold">TikTok</h3>
              <p className="text-gray-600 text-sm">XXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;