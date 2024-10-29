"use client";

import { useState } from "react";
import PortfolioComp from "../PortfolioComp";
import ModalBtn from "@/components/shared/ModalButton/ModalBtn";
import FloatingHelpButton from "@/components/shared/FloatingHelpButton/FloatingHelpButton";
import PortfolioModal from "../PorfolioModal/PortfolioModals";

type Slide = {
  id: number;
  image: string;
  caption: string;
};

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);

  const openModal = (slide: Slide) => {
    setSelectedSlide(slide);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSlide(null);
  };

  return (
    <div className="mt-8">
      <h1 className="text-[40px] text-center uppercase text-[#CA7625] mb-8">
        Portfolio
      </h1>

      <div className="lg:relative custom-container">
        <div className="absolute top-0 -left-[7%] w-[90vw] h-[1px] bg-[#CCCCCC]"></div>
        <div className="absolute lg:-top-[10%] -top-8 left-0 h-full w-[1px] bg-[#CCCCCC]"></div>
        <PortfolioComp openModal={openModal} />
      </div>

      {isModalOpen && selectedSlide && (
        <PortfolioModal
          isOpen={isModalOpen}
          onClose={closeModal}
          slide={selectedSlide}
        />
      )}

      <div className="bg-[#FEF8F2]">
        <div className="custom-container py-16">
          <div>
            <p className="text-2xl mb-4">Ready to Create Beautiful Memories?</p>
            <ModalBtn />
          </div>
        </div>
      </div>

      <FloatingHelpButton />
    </div>
  );
};

export default Portfolio;
