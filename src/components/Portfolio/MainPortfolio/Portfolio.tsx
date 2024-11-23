"use client";

import PortfolioComp from "../PortfolioComp";
import ModalBtn from "@/components/shared/ModalButton/ModalBtn";
import FloatingHelpButton from "@/components/shared/FloatingHelpButton/FloatingHelpButton";

const Portfolio = () => {
  return (
    <div className="mt-8">
      <h1 className="text-[40px] text-center uppercase text-[#CA7625] mb-8">
        Portfolio
      </h1>

      <div className="lg:relative custom-container">
        <div className="absolute top-0 -left-[7%] w-[90vw] h-[1px] bg-[#CCCCCC]"></div>
        <div className="absolute lg:-top-[10%] -top-8 left-0 h-full w-[1px] bg-[#CCCCCC]"></div>
        <PortfolioComp />
      </div>

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
