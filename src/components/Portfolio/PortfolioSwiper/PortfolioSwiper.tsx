"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { aboutSwiper } from "../../../../db/data";

import "swiper/css";
import "swiper/css/navigation";

type Slide = {
  image: string;
  caption: string;
  id: number;
};

interface PortfolioSwiperProps {
  openModal: (slide: Slide) => void;
}

const PortfolioSwiper = ({ openModal }: PortfolioSwiperProps) => {
  return (
    <div className="relative w-[90%] mx-auto">
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          background-color: rgba(255, 255, 255, 0.5);
          width: 30px;
          height: 30px;
          border-radius: 5%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 15px;
          color: white;
        }
      `}</style>
      <Swiper
        modules={[Navigation]}
        spaceBetween={5}
        slidesPerView={2.5}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
        }}
        className="w-full"
      >
        {aboutSwiper.map((slide) => (
          <SwiperSlide key={slide.id} className="flex flex-col items-center">
            <div onClick={() => openModal(slide)} className="cursor-pointer">
              <Image
                src={slide.image}
                alt={slide.caption}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-2 flex flex-col items-center">
              <p className="text-center pb-2 text-[#F28E2C]">{slide.caption}</p>
              <hr className="w-[35%] border-[#F28E2C]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default PortfolioSwiper;
