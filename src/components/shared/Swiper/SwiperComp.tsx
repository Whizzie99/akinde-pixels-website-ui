/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import { aboutSwiper } from "../../../../db/data";
import { useGetPortfolioItems } from "@/services/queries";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";

const TestimonialCarousel = () => {
  const { data: portfolioItems, isPending, isError } = useGetPortfolioItems();
  const router = useRouter();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching portfolio items</div>;
  }

  return (
    <div className="bg-[#FCE8D54D] lg:p-16 py-8">
      <div className="relative swiper-container custom-container lg:px-8">
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
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {portfolioItems.map((item: any) => (
            <SwiperSlide
              key={item.sys.id}
              className="flex flex-col items-center"
            >
              <div
                role="presentation"
                onClick={() => router.push(`/portfolio/${item.fields.slug}`)}
                className="cursor-pointer"
              >
                <div className="relative w-full h-[350px]">
                  <Image
                    src={`https:${item.fields.thumbnail.fields.file.url}`}
                    alt={item.fields.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    priority
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="mt-2 flex flex-col items-center">
                  <p className="text-center pb-2 text-[#F28E2C] font-sofia">
                    {item.fields.title}
                  </p>
                  <hr className="w-[35%] border-[#F28E2C]" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
