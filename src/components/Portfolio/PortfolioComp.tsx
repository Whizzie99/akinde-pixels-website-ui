"use client";

import Image from "next/image";
import PortfolioSwiper from "./PortfolioSwiper/PortfolioSwiper";

const PortfolioComp = () => {
  return (
    <div>
      <div className="lg:flex gap-6 py-6">
        <div className="p-8 lg:block hidden lg:w-[25%]">
          <div className="h-[500px] w-full relative">
            <Image
              src="/images/new_assets/wedding-ring.jpg"
              alt="sample"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="">
          <div className="my-8 lg:ml-8">
            <PortfolioSwiper />
          </div>
          <div className="relative">
            <div className="absolute top-0 lg:-left-[5%] w-[60vw] h-[1px] bg-[#CCCCCC]"></div>
            <div className="absolute lg:-top-[80px] -top-8 left-0 lg:h-[25vh] h-[8rem] w-[1px] bg-[#CCCCCC]"></div>
            <p className="p-8">
              &ldquo;In our gallery, every wedding kiss, birthday smile,
              editorial shoot, and portrait captures the beauty of the
              moment&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComp;
