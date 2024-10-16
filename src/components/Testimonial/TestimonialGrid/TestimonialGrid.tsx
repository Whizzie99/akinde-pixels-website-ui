'use client'

import { testimonies } from "../../../../db/data";
import { IoMdStar } from "react-icons/io";
import Image from "next/image";
import React from "react";

const TestimonialGrid = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 relative w-[85vw] mx-auto px-4 pt-8">
      <div className="absolute top-0 -left-[7%] w-[90vw] h-[1px] bg-[#CCCCCC]"></div>
      <div className="absolute lg:-top-[10%] -top-8 left-0 h-full w-[1px] bg-[#CCCCCC]"></div>

      {testimonies.map(({ id, image, title, details }) => (
        <div
          className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 items-start lg:items-center"
          key={id}
        >
          <div className="w-full">
            <Image
              src={image}
              alt={title}
              height={500}
              width={500}
              className="object-cover"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <p className="text-base lg:text-xl">{title}</p>
            <p className="text-sm lg:text-base ">{details}</p>
            <div className="flex space-x-1 mt-1 lg:2">
              {[...Array(5)].map((_, index) => (
                <IoMdStar key={index} size={20} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialGrid;
