"use client";


import ModalBtn from "@/components/shared/ModalButton/ModalBtn";
import FloatingHelpButton from "@/components/shared/FloatingHelpButton/FloatingHelpButton";

const OurBrand = () => {
  return (
    <div className="py-8 custom-container">
      <div className="font-lato text-black text-left flex flex-col justify-center pb-8">
        <h2 className="uppercase text-3xl text-[#F28E2C] mb-2">Our Brand</h2>
        <p className="mb-4">
          Akinde Pixels is not just a visual storytelling agency; we are a
          powerhouse of creativity and emotions. We specialize in crafting
          images that don’t just capture moments but immortalize them. We
          believe that every picture has the power to tell story-one that
          resonates deeply with its audience, transcending the boundaries of
          language and culture. Our passion lies in creating visually stunning
          and emotionally charged images that linger in the minds of those who
          view them.
        </p>
        <p className="mb-4">
          At Akinde Pixels, we are driven by a commitment to excellence and a
          deep understanding of the human experience. Whether it’s raw emotion
          of wedding day, the intricate details of a product, or the powerful
          narrative of a brand, we bring an unmatched level of artistry and
          precision to every shot. Our images are not just photographs; they are
          carefully crafted stories that communicate, inspire, and connect on a
          profound level.
        </p>
        <p>
          We are dedicated to delivery not just pictures, but powerful visual
          narratives that speak louder than words and leave a lasting impact. At
          Akinde Pixels, your stostory is our masterpiece.
        </p>
      </div>
      <div>
        <p className="text-2xl mb-4">Ready to Create Beautiful Memories?</p>
        <ModalBtn />
      </div>
      <FloatingHelpButton />
    </div>
  );
};

export default OurBrand;
