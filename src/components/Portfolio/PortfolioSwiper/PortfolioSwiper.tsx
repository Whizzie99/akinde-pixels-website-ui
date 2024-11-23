"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { aboutSwiper } from "../../../../db/data";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const PortfolioSwiper = () => {
  const router = useRouter();

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
            <div
              onClick={() => router.push(`/portfolio/${slide.id}`)}
              className="relative cursor-pointer group overflow-hidden"
            >
              <Image
                src={slide.image}
                alt={slide.caption}
                width={500}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Plus className="text-white w-8 h-8" />
              </div>
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
