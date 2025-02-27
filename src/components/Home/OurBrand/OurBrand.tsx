"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { galleryItems } from "../Galleries/Galleries";

const OurBrand = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="py-8">
      <div className="custom-container">
        <div className="flex justify-center items-center">
          <h2
            data-aos="fade-up"
            className="font-sofia text-black capitalize text-[2.2rem] mb-10 font-bold shadow-custom inline-block p-4"
          >
            our brand
          </h2>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="bg-[#FEF8F2] py-12"
      >
        <div className="custom-container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 w-full">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="w-full flex justify-center lg:w-auto rounded-[8px]"
            >
              <video
                src="https://res.cloudinary.com/du6xx9bt9/video/upload/v1734300737/akinde_intro_206535B_a1s2ud.webm"
                muted
                loop
                autoPlay
                className="w-full h-[333.33px] rounded-[8px]"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div data-aos="fade-left" data-aos-delay="300">
              <p className="font-lato text-black text-justify mb-4 leading-[24px] first-letter:uppercase">
                At Akinde Pixels, we are all about capturing moments. We don’t
                just take photos, we help you hold onto memories that you can
                look back on for years. Each event we cover is special, and we
                treat it that way.
              </p>
              <p className="text-justify text-black mb-4 leading-[24px] first-letter:uppercase">
                Weddings? We love taking pictures of happy couples celebrating
                their special day. Photoshoots? Absolutely! We are here to help
                you get your best poses. Special occasions? Name it. Birthdays,
                anniversaries, Graduation or just a get together with friends.
                We got you covered.We want every picture to tell your story. We
                believe every moment has its own beauty, and it’s our job to
                make it happen.
              </p>
              <p className="text-justify text-black mb-4 leading-[24px] first-letter:uppercase">
                When you look at your photos, we want those memories to come
                alive again and again. It&apos;s all about you. Your memories
                matter to us. At Akinde Pixels... we are the pixel that speaks.
                Reserve your spot today!
              </p>
              <Link
                href="/about-us"
                className="flex items-center justify-center gap-2 mt-6 w-full bg-[#F28E2C] p-4 rounded-[5px] text-white hover:bg-[#e07d1b] transition-all hover:scale-105"
              >
                <span className="font-lato text-xl capitalize">see more</span>
                <span className="text-2xl">
                  <IoArrowForwardOutline />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-container">
        <div data-aos="fade-up" data-aos-delay="400" className="mt-[7rem]">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
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
            className="w-full"
          >
            {galleryItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[380px] flex items-end justify-center pb-8 rounded-[10px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    priority
                    className="object-cover rounded-[10px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurBrand;
