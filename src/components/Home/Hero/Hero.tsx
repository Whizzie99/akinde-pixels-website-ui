/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import sampleImg from "../../../../public/images/hero-carousel-img.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div>
      <div className="custom-container">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item: any) => (
            <SwiperSlide key={item}>
              <div className="w-full h-[10em] relative">
                <Image
                  src={sampleImg}
                  alt="sample"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  priority
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="h-[552px] bg-sub-hero-bg bg-cover bg-no-repeat bg-center my-10 flex items-center justify-center px-4">
        <div className="w-full md:w-[70%] lg:w-[50%] backdrop-filter backdrop-blur-[20px] py-12 px-8 rounded-[20px] flex flex-col items-center gap-y-4 text-center">
          <p className="font-lato text-white text-[18px] md:text-[1.5rem] lg:text-[2rem]">
            Let us be your story teller, your memory keeper, and your partner in
            preserving the beauty of your world. Together, let&apos;s create a
            visual legacy that will be cherished for generations to come
          </p>
          <Link
            href="/booking"
            className="font-lato bg-[#F28E2C] text-white capitalize p-4 rounded-[5px] w-full sm:w-[50%] lg:w-[30%] text-center text-[1rem] lg:text-[1.25rem]"
          >
            book us now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
