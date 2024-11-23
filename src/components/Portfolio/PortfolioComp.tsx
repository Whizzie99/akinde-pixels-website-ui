"use client";

import Image from "next/image";
import PortfolioSwiper from "./PortfolioSwiper/PortfolioSwiper";

type Slide = {
  image: string;
  caption: string;
  id: number;
};

interface PortfolioCompProps {
  openModal: (slide: Slide) => void;
}

const PortfolioComp = ({ openModal }: PortfolioCompProps) => {
  return (
    <div>
      <div className="lg:flex gap-6 py-6">
        <div className="p-8 lg:block hidden">
          <Image
            src="/images/portfolio.png"
            width={300}
            height={100}
            alt="Portfolio Image"
          />
        </div>
        <div>
          <div className="my-8 ml-8">
            <PortfolioSwiper />
          </div>
          <div className="relative">
            <div className="absolute top-0 lg:-left-[5%] w-[60vw] h-[1px] bg-[#CCCCCC]"></div>
            <div className="absolute lg:-top-[80px] -top-8 left-0 lg:h-[40vh] h-[8rem] w-[1px] bg-[#CCCCCC]"></div>
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
