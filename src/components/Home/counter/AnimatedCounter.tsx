"use client";

import React from "react";
import CountUp from "react-countup";
import { VscRemoteExplorer } from "react-icons/vsc";
import { RiLuggageDepositLine } from "react-icons/ri";
import { MdEventRepeat } from "react-icons/md";

const AnimatedCounter = () => {
  return (
    <div className="lg:h-[17.5rem] h-[7.56rem] bg-[#FEF8F280]">
      <div className="custom-container grid grid-cols-3 gap-4 place-items-center h-full">
        <div className="text-center">
          <div className="text-[20px] lg:text-[48px] flex items-center justify-center mb-[1rem]">
            <CountUp end={100} duration={4} separator="," />
            <p className="text-[20px] lg:text-[48px]">+</p>
          </div>
          <h3 className="mb-2 text-[12px] lg:text-[28px]">Photographed</h3>
        </div>
        <div className="text-center">
          <div className="text-[20px] lg:text-[48px] flex items-center justify-center gap-3">
            <CountUp end={10} duration={5} separator="," />
          </div>
          <h3 className="mb-2 text-[12px] lg:text-[28px]">Years in business</h3>
        </div>
        <div className="text-center">
          <div className="text-[20px] lg:text-[48px] flex items-center justify-center">
            <CountUp end={100} duration={6} separator="," />
            <p className="text-[20px] lg:text-[48px]">+</p>
          </div>
          <h3 className="mb-2 text-[12px] lg:text-[28px]">
            Photographs Delivered
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;
