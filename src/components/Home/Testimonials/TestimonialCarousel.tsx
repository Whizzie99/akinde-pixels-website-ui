/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import { testimonials } from "../../../../db/data";
import { IoMdStar } from "react-icons/io";
import styles from "./SwiperCustom.module.css";
import { useGetTestimonials } from "@/services/queries";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const TestimonialCarousel = () => {
  const { data: testimonials, isPending } = useGetTestimonials();

  console.log(testimonials);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: `swiper-pagination-bullet ${styles.swiperPaginationBullet}`,
          bulletActiveClass: `swiper-pagination-bullet-active ${styles.swiperPaginationBulletActive}`,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="mySwiper mt-2"
      >
        {testimonials?.map((testimonial: any) => (
          <SwiperSlide key={testimonial.sys.id} className="py-6">
            <div className="relative w-full h-[300px]">
              <Image
                src={`https:${testimonial?.fields?.img?.fields?.file.url}`}
                alt={testimonial.fields.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-[8px]"
              />
            </div>
            <h3 className="text-2xl mt-4 lg:mt-8 font-sofia">
              {testimonial.fields.title}
            </h3>
            <p className="mt-2 text-gray-600 font-lato text-[18px]">
              {testimonial.fields.description}
            </p>
            <div className="flex mt-4 space-x-2">
              {[...Array(testimonial.fields.rating)].map((_, index) => (
                <IoMdStar key={index} className="text-[#F28E2C]" size={20} />
              ))}
            </div>
          </SwiperSlide>
        ))}
        <div className={`swiper-button-prev ${styles.swiperButtonPrev}`}></div>
        <div className={`swiper-button-next ${styles.swiperButtonNext}`}></div>
      </Swiper>

      <div className="mt-4 text-right">
        <Link
          href="#"
          className="text-[#F28E2C] hover:underline transition-all duration-300"
        >
          View all
        </Link>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
