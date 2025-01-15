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
        <h2
          data-aos="fade-up"
          className="font-sofia text-black capitalize text-[2.2rem] mb-10 font-bold"
        >
          our brand
        </h2>
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
                At Akinde Pixels, we don&apos;t just take pictures, we create
                lasting memories. We believe every photo tells a special story,
                and we create those stories with artistry and care.
              </p>
              <p className="text-justify text-black mb-4 leading-[24px] first-letter:uppercase">
                On your wedding day or any important event, more than just
                photographers, we are artists who will capture the love and joy
                of that day, capturing images you&apos;ll cherish forever. These
                images will not just serve for you and your partner but for the
                whole family to enjoy, both now and in the future.
              </p>
              <p className="text-justify text-black mb-4 leading-[24px] first-letter:uppercase">
                We love capturing beautiful photos and videos that make you feel
                something special. From the happy moments of your wedding to the
                unique details of a photoshoot, we put our hearts and skill into
                every image. We strive to capture moments that inspire and
                amaze, we are always with a deep understanding of what truly
                matters in life.
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
