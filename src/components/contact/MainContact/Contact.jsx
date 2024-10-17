'use client'

import contactImagesm from "../../../../public/images/contact-page-sm.png";
import Image from "next/image";
import ContactForm from "../Form/ContactForm";
import SwiperComp from "@/components/shared/Swiper/SwiperComp";

const Contact = () => {
  return (
    <div className="mt-8 ">
      <h1 className="text-[40px] text-center uppercase lg:hidden block text-[#CA7625] mb-8">
        Bookings
      </h1>
      <div className="lg:hidden block w-full mb-4">
        <Image
          alt="Contact image for small screens"
          src={contactImagesm}
          layout="responsive"
          width={300}
          height={300}
          className="object-cover"
        />
      </div>
      <div className="lg:relative custom-container">
        <div className="absolute top-0 -left-[7%] w-[90vw] h-[1px] bg-[#CCCCCC]"></div>
        <div className="absolute lg:-top-[3%] -top-8 left-0 h-full w-[1px] bg-[#CCCCCC]"></div>
        <ContactForm />
      </div>
      <div className="mt-12">
        <SwiperComp />
      </div>
    </div>
  );
};

export default Contact;
