"use client";

import Image from "next/image";
import { X } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  caption: string;
  modalImages?: string[];
}

interface ImageGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: Slide | null;
}

const PorfolioModal = ({ isOpen, onClose, slide }: ImageGalleryModalProps) => {
  if (!isOpen || !slide) return null;

  const getModalImages = (slide: Slide): string[] => {
    return Array(15).fill(slide.image);
  };

  const getImageLayout = (index: number) => {
    const patterns = [
      "col-span-2 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-2",
      "col-span-2 row-span-2",
      "col-span-1 row-span-1",
      "col-span-2 row-span-1",
      "col-span-1 row-span-2",
      "col-span-1 row-span-1",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-2 row-span-2",
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="fixed inset-0 bg-[#D1D3D033]/90 z-50 overflow-y-auto">
      <div className="min-h-screen w-full ">
        <div className="sticky top-0 z-50 bg-[#D1D3D033]/80 backdrop-blur-sm px-4 mb-4 flex justify-between items-center">
          <h2 className="text-[28px] md:text-[32px] lg:text-[40px] text-gray-500 font-medium truncate">
            {slide.caption}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/50 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-8 h-8 text-gray-500" />
          </button>
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 auto-rows-[120px] sm:auto-rows-[150px]">
            {getModalImages(slide).map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden ${getImageLayout(index)} transform transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className="group relative w-full h-full">
                  <Image
                    src={image}
                    alt={`${slide.caption} ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 25vw, (max-width: 1024px) 16.66vw, 12.5vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorfolioModal;
