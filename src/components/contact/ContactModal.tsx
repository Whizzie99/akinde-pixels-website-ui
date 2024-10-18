"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center z-50 justify-center">
      <div className="bg-white rounded-lg lg:p-8 p-4 lg:w-full max-w-lg">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">
          CONTACT US
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Get in Touch and Let&apos;s Create Something Beautiful
        </p>
        <div className="text-start text-black grid lg:grid-cols-2 gap-12 py-6 custom-container">
          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-gray-600">Akindepixels@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Contact Number</h3>
            <p className="text-gray-600">XXXXXXXXX</p>
          </div>
          <div>
            <h3 className="font-semibold">Instagram</h3>
            <p className="text-gray-600">XXXXXXXX</p>
          </div>
          <div>
            <h3 className="font-semibold">X</h3>
            <p className="text-gray-600">XXXXXXXXXX</p>
          </div>
          <div>
            <h3 className="font-semibold">Facebook</h3>
            <p className="text-gray-600">XXXXXXXX</p>
          </div>
          <div>
            <h3 className="font-semibold">TikTok</h3>
            <p className="text-gray-600">XXXXXXXX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
