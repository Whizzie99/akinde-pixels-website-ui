'use client'

import Link from "next/link";
import { BsEnvelope } from "react-icons/bs";
import FaqAccordion from "../FaqAccordion/FaqAccordion";
import SwiperComp from "@/components/shared/Swiper/SwiperComp"

const Faqs = () => {

  return (
    <div className="py-8 ">
      <div className="custom-container">
        <h1 className="lg:text-[40px] text-[28px] text-center text-[#CA7625] mb-8">
            FAQ
        </h1>
        <div>
          <FaqAccordion/>
        </div>
      <div className="my-12">
        <p className="text-2xl mb-4">Ready to Create Beautiful Memories?</p>
        <div className="flex gap-y-4 md:gap-x-4 mb-8 justify-between items-center ">
          <Link
            href="/contact"
            className="font-lato shadow-md bg-[#F28E2C] hover:bg-[#d88a3c] transition-all duration-300 text-white capitalize lg:w-[40%] w-[100%] py-2 rounded-[5px] text-center"
          >
            Contact Us!
          </Link>
          <div className="lg:flex items-center gap-x-2 hidden">
            <p className="text-sm py-2 px-4 shadow-xl ">Need help?</p>
            <span className="cursor-pointer bg-[#313131] p-4 rounded">
              <Link href="/contact">
                <BsEnvelope className="text text-white " />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
      <SwiperComp/>
    </div>
    
  );
};

export default Faqs;
