// import contactImagesm from "../../../public/images/side-img.jpg";
import Image from "next/image";
import ReviewForm from "./ReviewForm";
import SwiperComp from "@/components/shared/Swiper/SwiperComp";

const MainReview = () => {
  return (
    <div className="pt-[100px] font-lato">
      <h1 className="lg:text-[40px] text-2xl text-center uppercase  text-[#F28E2C] mb-8 font-sofia">
        Review
      </h1>
      <div className="lg:hidden block w-full mb-4">
        <Image
          alt="Contact image for small screens"
          src="/images/side-img.jpg"
          layout="responsive"
          width={300}
          height={300}
          className="object-cover rounded-[8px]"
        />
      </div>
      <div className="lg:relative custom-container">
        <div className="absolute top-0 -left-[7%] w-[90vw] h-[1px] bg-[#CCCCCC]"></div>
        <div className="absolute lg:-top-[3%] -top-8 left-0 h-full w-[1px] bg-[#CCCCCC]"></div>
        <ReviewForm />
      </div>
      <div className="mt-12">
        <SwiperComp />
      </div>
    </div>
  );
};

export default MainReview;
