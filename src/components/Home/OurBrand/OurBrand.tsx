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
                We&apos;re not just photographers; we&apos;re{" "}
                <b>visual artists</b> who <b>immortalize moments.</b> At Akinde
                Pixels, we believe every image has the power to tell a story –
                one that resonates deeply and transcends boundaries.
              </p>
              <p className="text-justify text-black mb-4 leading-[24px] first-letter:uppercase">
                We specialize in{" "}
                <b>crafting stunning photography and videography</b> that evoke
                powerful emotions and leave a lasting impact. From the raw
                emotion of a wedding day to the intricate details of a product,
                we bring an unmatched level of artistry and precision to every
                shot.
              </p>
              <p className="text-justify text-black mb-4 leading-[24px] first-letter:uppercase">
                <b>
                  Our passion lies in creating visual experiences that captivate
                  and inspire.
                </b>{" "}
                We&apos;re driven by a commitment to excellence and a deep
                understanding of the human experience.
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
