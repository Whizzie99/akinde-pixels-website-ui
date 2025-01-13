/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { useGetPortfolioItems } from "@/services/queries";

import "swiper/css";
import "swiper/css/navigation";

const PortfolioSwiper = () => {
  const { data: portfolioItems, isPending, isError } = useGetPortfolioItems();
  const router = useRouter();

  console.log(portfolioItems);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching portfolio items</div>;
  }

  return (
    <div className="relative w-full lg:w-[90%] mx-auto font-lato">
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
        slidesPerView={2}
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
        {portfolioItems.map((item: any) => (
          <SwiperSlide key={item.sys.id} className="flex flex-col items-center">
            <div
              role="presentation"
              onClick={() => router.push(`/portfolio/${item.fields.slug}`)}
              className="relative cursor-pointer group overflow-hidden h-[300px] w-full rounded-[10px]"
            >
              <Image
                src={`https:${item.fields.thumbnail.fields.file.url}`}
                alt={item.fields.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                priority
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 rounded-[10px]"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Plus className="text-white w-8 h-8" />
              </div>
            </div>
            <div className="mt-2 flex flex-col items-center">
              <p className="text-center pb-2 text-[#F28E2C] font-sofia">
                {item.fields.title}
              </p>
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
