"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { testimonials } from "../../../../db/data";
import { Star } from "lucide-react";
import styles from "./SwiperCustom.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const TestimonialCarousel = () => {
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
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="py-6">
            <div className="relative w-full h-48">
              <Image
                src={testimonial.image}
                alt={testimonial.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h3 className="text-xl mt-4 lg:mt-8">{testimonial.title}</h3>
            <p className="mt-2 text-gray-600">{testimonial.details}</p>
            <div className="flex mt-4 space-x-2">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="text-black" size={20} />
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
