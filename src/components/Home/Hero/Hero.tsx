/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useGetTopCarouselItems } from "@/services/queries";

// import sampleImg from "../../../../public/images/hero-carousel-img.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const { data: carouselItems, isPending } = useGetTopCarouselItems();

  if (isPending) return <div>loading...</div>;

  return (
    <div className="w-full">
      <div className="pt-[85px]">
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
            {carouselItems?.fields?.imgs.length > 0 ? (
              carouselItems.fields.imgs.map((img: any) => (
                <SwiperSlide key={img.sys.id}>
                  <div className="w-full h-[10em] relative">
                    <Image
                      src={`https:${img.fields.file.url}`}
                      alt="sample"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                      priority
                      className="object-cover rounded-[8px]"
                    />
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <p>nothing dey here</p>
            )}
          </Swiper>
        </div>
      </div>
      <div className="h-[552px] bg-sub-hero-bg bg-cover bg-no-repeat bg-center my-10 flex items-center justify-center px-4">
        <div className="w-full md:w-[70%] lg:w-[50%] bg-white py-12 px-8 rounded-[20px] flex flex-col items-center gap-y-4 text-center">
          <p className="text-black text-[22px] md:text-[1.5rem] lg:text-[2rem] font-niconne">
            Welcome to Akinde Pixels! We love capturing your special moments. We
            believe that every shots tells a story and We are here to help you
            keep those memories alive. Let’s make something great together.
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
