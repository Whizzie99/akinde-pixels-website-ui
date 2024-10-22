import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { aboutSwiper } from "../../../../db/data";
import PorfolioModal from "../PorfolioModal/PortfolioModals";

import "swiper/css";
import "swiper/css/navigation";

interface Slide {
  id: number;
  image: string;
  caption: string;
  modalImages?: string[];
}

const PortfolioSwiper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null);

  const openModal = (slide: Slide) => {
    setSelectedSlide(slide);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSlide(null);
    document.body.style.overflow = "unset";
  };

  const navigationButtonStyle =
    "bg-white/50 w-8 h-8 rounded flex items-center justify-center after:text-sm after:text-white";

  return (
    <div className="relative w-[90%] mx-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={5}
        slidesPerView={2.5}
        loop
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
        }}
        className="w-full"
      >
        {aboutSwiper.map((slide: Slide) => (
          <SwiperSlide key={slide.id} className="flex flex-col items-center">
            <div onClick={() => openModal(slide)} className="cursor-pointer">
              <Image
                src={slide.image}
                alt={slide.caption}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-2 flex flex-col items-center">
              <p className="text-center pb-2 text-[#F28E2C]">{slide.caption}</p>
              <hr className="w-[35%] border-[#F28E2C]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`swiper-button-prev ${navigationButtonStyle}`}></div>
      <div className={`swiper-button-next ${navigationButtonStyle}`}></div>

      <PorfolioModal
        isOpen={isModalOpen}
        onClose={closeModal}
        slide={selectedSlide}
      />
    </div>
  );
};

export default PortfolioSwiper;
