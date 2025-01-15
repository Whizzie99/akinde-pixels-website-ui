import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const Testimonials = () => {
  return (
    <div className="custom-container py-20">
      <div className="flex justify-center items-center mb-6">
        <h1 className="lg:text-[40px] text-[32px] font-sofia capitalize inline-block p-4 shadow-custom">
          Testimonials
        </h1>
      </div>
      <div>
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Testimonials;
