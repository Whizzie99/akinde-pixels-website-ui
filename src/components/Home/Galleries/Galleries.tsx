"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css/navigation";
import "swiper/css";

export const galleryItems = [
  {
    id: 1,
    title: "Wedding",
    height: "380px",
    img: "/images/new_assets/gallery/wedding.jpg",
  },
  {
    id: 2,
    title: "Portraits",
    height: "380px",
    img: "/images/new_assets/new-portrait-1.webp",
  },
  {
    id: 3,
    title: "Events",
    height: "380px",
    img: "/images/new_assets/gallery/events.jpg",
  },
  {
    id: 4,
    title: "Fashion",
    height: "380px",
    img: "/images/new_assets/gallery/fashion.jpg",
  },
  {
    id: 5,
    title: "Family",
    height: "380px",
    img: "/images/new_assets/gallery/family.jpg",
  },
];

const Galleries = () => {
  return (
    <div className="py-8 overflow-x-hidden">
      <div className="custom-container">
        <div className="flex justify-center items-center">
          <h2
            className="font-sofia font-bold text-center capitalize text-[2.8rem] shadow-custom inline-block p-4 bg-white"
            data-aos="fade-down"
          >
            gallery
          </h2>
        </div>
        <div className="mt-[5rem] relative gallery-slider" data-aos="fade-up">
          {/* Custom navigation buttons */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded p-2 shadow-md hover:bg-gray-100 transition-all prev-button">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded p-2 shadow-md hover:bg-gray-100 transition-all next-button">
            <ChevronRight className="w-6 h-6" />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={3}
            navigation={{
              prevEl: ".prev-button",
              nextEl: ".next-button",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
            className="px-2 pb-12"
          >
            {galleryItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="relative flex items-end justify-center pb-8 group h-[380px] w-full rounded-[10px] overflow-hidden"
                  // style={{ height: item.height }}
                >
                  <Image
                    src={item.img}
                    alt={item.title.toLowerCase()}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    priority
                    className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-[10px]"
                  />
                  <p className="font-lato relative z-10 text-black bg-white-alpha-1 p-4 font-bold capitalize text-[1.25rem] transition-transform duration-300 group-hover:-translate-y-2">
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Galleries;
