"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalBtn from "@/components/shared/ModalButton/ModalBtn";

const OurBrand = (): JSX.Element => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="py-8 custom-container">
      <div className="font-lato text-black text-justify flex flex-col justify-center pb-8">
        <div data-aos="fade-right" data-aos-delay="100">
          <h2 className="capitalize text-3xl text-black shadow-custom py-2 px-4 inline-block mb-2 font-sofia">
            Our Brand
          </h2>
        </div>
        <p data-aos="fade-up" data-aos-delay="200" className="mb-4"></p>
        <p data-aos="fade-up" data-aos-delay="300" className="mb-4">
          At Akinde Pixels, we are all about capturing moments. We don’t just
          take photos, we help you hold onto memories that you can look back on
          for years. Each event we cover is special, and we treat it that way.
        </p>
        <p data-aos="fade-up" data-aos-delay="400">
          Weddings? We love taking pictures of happy couples celebrating their
          special day. Photoshoots? Absolutely! We are here to help you get your
          best poses. Special occasions? Name it. Birthdays, anniversaries,
          Graduation or just a get together with friends. We got you covered.We
          want every picture to tell your story. We believe every moment has its
          own beauty, and it’s our job to make it happen.
        </p>
        <p data-aos="fade-up" data-aos-delay="400">
          When you look at your photos, we want those memories to come alive
          again and again. It&apos;s all about you. Your memories matter to us.
          At Akinde Pixels... we are the pixel that speaks. Reserve your spot
          today!
        </p>
      </div>
      <div>
        <p
          data-aos="fade-right"
          data-aos-delay="500"
          className="text-2xl mb-4 font-sofia"
        >
          Ready to Create Beautiful Memories?
        </p>
        <div data-aos="fade-up" data-aos-delay="600">
          <ModalBtn />
        </div>
      </div>
    </div>
  );
};

export default OurBrand;
