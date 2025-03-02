import React from "react";
import TestimonialGrid from "../TestimonialGrid/TestimonialGrid";
import ModalBtn from "@/components/shared/ModalButton/ModalBtn";

const MainComp = () => {
  return (
    <div className="py-8 custom-container">
      <div className="mb-12 text-center">
        <h1 className="lg:text-[40px] text-[32px] uppercase text-[#CA7625]">
          Testimonials
        </h1>
        <p className="text-[#7B7B7B]">See What Our Clients Are Saying</p>
      </div>
      <div>
        <TestimonialGrid />
      </div>
      <div className="my-12">
        <p className="text-2xl mb-4">Ready to Create Beautiful Memories?</p>
        <ModalBtn />
      </div>
    </div>
  );
};

export default MainComp;
