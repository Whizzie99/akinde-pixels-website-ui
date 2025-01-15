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
        <h2
          data-aos="fade-right"
          data-aos-delay="100"
          className="uppercase text-3xl text-[#F28E2C] mb-2 font-sofia"
        >
          Our Brand
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" className="mb-4"></p>
        <p data-aos="fade-up" data-aos-delay="300" className="mb-4">
          At Akinde Pixels, we don&apos;t just take pictures, we create lasting
          memories. We believe every photo tells a special story, and we create
          those stories with artistry and care.
        </p>
        <p data-aos="fade-up" data-aos-delay="400">
          On your wedding day or any important event, more than just
          photographers, we are artists who will capture the love and joy of
          that day, capturing images you&apos;ll cherish forever. These images
          will not just serve for you and your partner but for the whole family
          to enjoy, both now and in the future.
        </p>
        <p data-aos="fade-up" data-aos-delay="400">
          We love capturing beautiful photos and videos that make you feel
          something special. From the happy moments of your wedding to the
          unique details of a photoshoot, we put our hearts and skill into every
          image. We strive to capture moments that inspire and amaze, we are
          always with a deep understanding of what truly matters in life.
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
