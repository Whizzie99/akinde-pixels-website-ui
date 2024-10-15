"use client";
import Image from "next/image";

import sampleImg from "../../../../public/images/wedding-sample-1.png";

const Galleries = () => {
  return (
    <div className="py-8">
      <div className="custom-container">
        <h2 className="font-lato font-bold text-center capitalize text-[2.5rem]">
          galleries
        </h2>
        <div className="flex items-end gap-4 mt-[7rem]">
          <div className="relative w-full h-[380px] md:w-[calc(50%-0.67rem)] lg:w-[calc(33%-0.67rem)] flex items-end justify-center pb-8">
            <Image
              src={sampleImg}
              alt="sample"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
              className="object-cover"
            />
            <p className="font-lato relative z-10 text-black bg-white-alpha-1 p-4 font-bold capitalize text-[1.25rem]">
              weddings
            </p>
          </div>
          <div className="relative w-full h-[450px] md:w-[calc(50%-0.67rem)] lg:w-[calc(33%-0.67rem)] flex items-end justify-center pb-8">
            <Image
              src={sampleImg}
              alt="sample"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
              className="object-cover"
            />
            <p className="font-lato relative z-10 text-black bg-white-alpha-1 p-4 font-bold capitalize text-[1.25rem]">
              weddings
            </p>
          </div>
          <div className="relative hidden lg:flex w-full h-[380px] lg:w-[calc(33%-0.67rem)] items-end justify-center pb-8">
            <Image
              src={sampleImg}
              alt="sample"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
              className="object-cover"
            />
            <p className="font-lato relative z-10 text-black bg-white-alpha-1 p-4 font-bold capitalize text-[1.25rem]">
              weddings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galleries;
