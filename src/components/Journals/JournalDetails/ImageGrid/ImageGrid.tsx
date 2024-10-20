"use client";

import Image from "next/image";
import detailsPix from "../../../../../public/images/detailsPix1.png";
import detailsPix1 from "../../../../../public/images/detailsPix2.png";
import detailsPix2 from "../../../../../public/images/detailsPix3.png";
import detailsPix4 from "../../../../../public/images/detailsPix5.png";
import ModalBtn from "@/components/shared/ModalButton/ModalBtn";

const ImageGrid = () => {
  return (
    <div className="pb-16">
      <div className="flex sm:flex-col flex-col-reverse">
        <div className="custom-container py-8">
          <p className="text-[#313131]">
            Our brand is built on the principles of creativity, authenticity,
            and precision. Through these guidelines, we aim to ensure that every
            representation of Akinde Pixels whether in photography, digital
            media, or print remains consistent, impactful, and true to our core
            values. This document serves as a roadmap for how we present
            ourselves to the world. It covers everything from our logo usage and
            color palette to our photographic style and tone of voice. Whether
            you are a part of the Akinde Pixels team or collaborating with us,
            these guidelines are here to help you create work that reflects the
            quality and artistry that our brand stands for.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 w-[100%] mx-auto">
          <div className="">
            <Image src={detailsPix} alt="" height={1200} width={1200} />
          </div>
          <div className="hidden lg:block">
            <Image src={detailsPix1} alt="" height={1200} width={1200} />
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 w-[100%] mx-auto mt-4 gap-1 hidden">
          <Image src={detailsPix4} alt="" height={1200} width={1200} />
          <Image src={detailsPix4} alt="" height={1200} width={1200} />
          <Image src={detailsPix4} alt="" height={1200} width={1200} />
        </div>
      </div>

      <div className="lg:hidden flex space-x-4">
        <div className="">
          <Image src={detailsPix2} alt="" height={1200} width={1200} />
        </div>
        <div className=" relative top-[4rem]">
          <Image src={detailsPix2} alt="" height={1200} width={1200} />
        </div>
      </div>

      <div className="lg:hidden grid grid-cols-2 mt-24">
        <div>
          <Image src={detailsPix2} alt="" height={1200} width={1200} />
        </div>
        <div>
          <Image src={detailsPix2} alt="" height={1200} width={1200} />
        </div>
      </div>
      <div className="pt-12 custom-container">
        <p className="text-[28px] mb-4">Ready to Create Beautiful Memories?</p>
        <ModalBtn />
      </div>
    </div>
  );
};

export default ImageGrid;
