import React from "react";
import TestimonialGrid from "../TestimonialGrid/TestimonialGrid";
import Link from "next/link";

const MainComp = () => {
  return (
    <div className="py-8 custom-container">
      <div className="mb-12 text-center">
        <h1 className="lg:text-[40px] text-[32px] uppercase text-[#CA7625]">
          Testimonies
        </h1>
        <p className="text-[#7B7B7B]">See What Our Clients Are Saying</p>
      </div>
      <div>
        <TestimonialGrid />
      </div>
      <div className="my-12">
        <p className="text-2xl mb-4">Ready to Create Beautiful Memories?</p>
        <div className="md:gap-x-4 mb-8 lg:w-[40%] w-[100%]  bg-[#F28E2C] hover:bg-[#d88a3c] transition-all duration-300 shadow-md py-2 rounded-[5px] text-center">
          <Link href="/contact" className="font-lato  text-white capitalize">
            Contact Us!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainComp;
