"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import type { Swiper as SwiperInstance } from "swiper";
import { journalSwipers } from "../../../../../db/data";
import { EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function App() {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSlideChange = (direction: "next" | "prev") => {
    if (swiper) {
      direction === "next" ? swiper.slideNext() : swiper.slidePrev();
    } else {
      setError("Swiper is not initialized yet. Please try again in a moment.");
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div>
      <div className="relative pt-36 pb-16">
        {error && (
          <div
            className="absolute top-0 left-0 right-0 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <button
          className="hidden sm:block sm:gap-8 absolute top-20 left-1/2 transform -translate-x-1/2 z-10 bg-white border border-yellow-500 rounded-md py-2 px-5 hover:bg-yellow-50 transition-colors duration-200"
          onClick={() => handleSlideChange("next")}
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={-20}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            641: {
              slidesPerView: 2,
            },
            1025: {
              slidesPerView: 3,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          className="w-full"
          onSwiper={setSwiper}
        >
          {journalSwipers.map((num) => (
            <SwiperSlide key={num.id} className="bg-center bg-cover w-72 h-72">
              <Image
                src={num.image}
                width={500}
                height={500}
                alt=""
                className="block w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className="hidden sm:block absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 bg-white border border-yellow-500 rounded-md py-2 px-5 hover:bg-yellow-50 transition-colors duration-200"
          onClick={() => handleSlideChange("prev")}
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Small screen buttons */}
        <div className="sm:hidden flex justify-center space-x-4 mt-4">
          <button
            className="bg-white border border-yellow-500 rounded-md py-2 px-5 hover:bg-yellow-50 transition-colors duration-200"
            onClick={() => handleSlideChange("prev")}
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="bg-white border border-yellow-500 rounded-md py-2 px-5 hover:bg-yellow-50 transition-colors duration-200"
            onClick={() => handleSlideChange("next")}
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
