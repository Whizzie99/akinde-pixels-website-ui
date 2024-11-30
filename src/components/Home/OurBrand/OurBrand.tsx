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
import logo from "../../../../public/images/logo-full-frame.png";
import sampleImg from "../../../../public/images/wedding-sample-1.png";

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
          className="font-lato text-black capitalize text-2xl mb-10 font-bold"
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
              className="w-full flex justify-center lg:w-auto"
            >
              <div className="relative w-[500px] h-[333.33px] top-10 lg:max-w-full">
                <Image
                  src={logo}
                  alt="sample"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="300">
              <p className="font-lato text-black text-justify mb-6 leading-[24px]">
                Akinde Pixels is not just a visual storytelling agency; we are a
                powerhouse of creativity and emotions. We specialize in crafting
                images that don&apos;t just capture moments but immortalize
                them. We believe that every picture has the power to tell
                story-one that resonates deeply with its audience, transcending
                the boundaries of language and culture. Our passion lies in
                creating visually stunning and emotionally charged images that
                linger in the minds of those who view them.
              </p>
              <p className="text-justify">
                Akinde Pixels is not just a visual storytelling agency; we are a
                powerhouse of creativity and emotions. We specialize in crafting
                images that don&apos;t just capture moments but immortalize
                them. We believe that every picture has the power to tell
                story-one that resonates deeply with its audience, transcending
                the boundaries of language and culture. Our passion lies in
                creating visually stunning and emotionally charged images that
                linger in the minds of those who view them.
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
                slidesPerView: 2,
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
            {[1, 2, 3].map((_, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`relative w-full ${index === 1 ? "h-[380px]" : "h-[380px]"} flex items-end justify-center pb-8`}
                >
                  <Image
                    src={sampleImg}
                    alt={`sample ${index + 1}`}
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
      </div>
    </div>
  );
};

export default OurBrand;
