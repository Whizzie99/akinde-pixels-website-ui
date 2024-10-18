"use client";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";

import logo from "../../../../public/images/logo-full-frame.png";
import sampleImg from "../../../../public/images/wedding-sample-1.png";

const OurBrand = () => {
  return (
    <div className="py-8">
      <div className="custom-container">
        <h2 className="font-lato text-black capitalize text-2xl mb-10 font-bold">
          our brand
        </h2>
      </div>
      <div className="bg-[#FEF8F2] py-12">
        <div className="custom-container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 w-full">
            <div className="w-full flex justify-center lg:w-auto">
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
            <div>
              <p className="font-lato text-black text-left mb-6 leading-[24px]">
                Akinde Pixels is not just a visual storytelling agency; we are a
                powerhouse of creativity and emotions. We specialize in crafting
                images that don&apos;t just capture moments but immortalize
                them. We believe that every picture has the power to tell
                story-one that resonates deeply with its audience, transcending
                the boundaries of language and culture. Our passion lies in
                creating visually stunning and emotionally charged images that
                linger in the minds of those who view them.
              </p>
              <p>
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
                className="flex items-center justify-center gap-2 mt-6 w-full bg-[#F28E2C] p-4 rounded-[5px] text-white"
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
        <div className="flex items-end gap-4 mt-[7rem]">
          {/* First Image */}
          <div className="relative w-full h-[380px] md:w-[calc(50%-0.67rem)] lg:w-[calc(33%-0.67rem)] flex items-end justify-center pb-8">
            <Image
              src={sampleImg}
              alt="sample"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
              className="object-cover"
            />
          </div>
          {/* Middle Image with Original Height */}
          <div className="relative w-full h-[450px] md:w-[calc(50%-0.67rem)] lg:w-[calc(33%-0.67rem)] flex items-end justify-center pb-8">
            <Image
              src={sampleImg}
              alt="sample"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
              className="object-cover"
            />
          </div>
          {/* Last Image, Hidden on Small Screens */}
          <div className="relative hidden lg:flex w-full h-[380px] lg:w-[calc(33%-0.67rem)] items-end justify-center pb-8">
            <Image
              src={sampleImg}
              alt="sample"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBrand;
