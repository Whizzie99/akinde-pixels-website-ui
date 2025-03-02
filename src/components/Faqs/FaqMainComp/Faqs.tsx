"use client";

// import Link from "next/link";
// import { BsEnvelope } from "react-icons/bs";
import FaqAccordion from "../FaqAccordion/FaqAccordion";
import SwiperComp from "@/components/shared/Swiper/SwiperComp";
import ModalBtn from "@/components/shared/ModalButton/ModalBtn";

const Faqs = () => {
  return (
    <div className="py-8 pt-[100px] font-lato">
      <div className="custom-container">
        <h1 className="lg:text-[40px] text-[28px] text-center text-[#F28E2C] mb-8 font-sofia">
          FAQ
        </h1>
        <div className="relative w-full before:absolute before:top-0 before:left-[-10%] before:w-[110%] before:h-[1px] before:content-[''] pt-10 before:bg-[#E5E7EB] after:absolute after:top-[-10%] after:left-0 after:w-[1px] after:h-[110%] after:content-[''] after:bg-[#E5E7EB] pl-10">
          <div>
            <FaqAccordion />
          </div>
          <div className="my-12">
            <p className="text-2xl mb-4 font-sofia">
              Ready to Create Beautiful Memories?
            </p>
            <ModalBtn />
          </div>
        </div>
      </div>
      <SwiperComp />
    </div>
  );
};

export default Faqs;
