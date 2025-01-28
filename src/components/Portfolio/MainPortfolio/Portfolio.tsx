"use client";

import PortfolioComp from "../PortfolioComp";
import ModalBtn from "@/components/shared/ModalButton/ModalBtn";

const Portfolio = () => {
  return (
    <div className="pt-[100px]">
      <div className="flex justify-center">
        <h1 className="text-[40px] p-4 text-center font-sofia capitalize text-black shadow-custom my-8 inline-block">
          Portfolio
        </h1>
      </div>

      <div className="lg:relative custom-container">
        <div className="absolute top-0 -left-[7%] w-[90vw] h-[1px] bg-[#CCCCCC]"></div>
        <div className="absolute lg:-top-[10%] -top-8 left-0 h-full w-[1px] bg-[#CCCCCC]"></div>
        <PortfolioComp />
      </div>

      <div className="bg-[#FEF8F2]">
        <div className="custom-container py-16">
          <div>
            <p className="text-2xl mb-4 font-sofia">
              Ready to Create Beautiful Memories?
            </p>
            <ModalBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
