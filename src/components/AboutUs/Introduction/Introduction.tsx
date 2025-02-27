"use client";

import Image from "next/image";
import logo from "../../../../public/images/logo-full-frame.png";
import { motion } from "framer-motion";

const OurBrand = () => {
  return (
    <div className="custom-container py-8 pt-[110px] font-lato">
      <div className="flex items-center lg:gap-x-6">
        <div className="w-1/2 lg:block hidden">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              bounce: 0.2,
            }}
          >
            <div className="relative w-full h-[300px] border-y-[4px] border-y-black">
              <Image
                src={logo}
                alt="sample"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                priority
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
        <div className="lg:w-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.2,
            }}
            className="font-lato text-black text-justify flex flex-col justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                bounce: 0.2,
              }}
            >
              <h1 className="capitalize text-[40px] inline-block text-black shadow-custom mb-4 py-2 px-4  font-sofia">
                Introduction
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.0,
                delay: 0.5,
                type: "spring",
                bounce: 0.2,
              }}
              className="mb-4"
            >
              At Akinde Pixels, we love sharing stories through pictures and
              videos. We capture your memories, achievements, and memories
              without saying a word. Every picture has a story behind it, and
              every video captured is a treasure that lasts forever. Our goal is
              to make each shot speak for itself and give you a remarkable
              experience.
            </motion.p>
            {/* <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.7,
                type: "spring",
                bounce: 0.2,
              }}
              className="mb-4"
            >
              Akinde Pixels is all about being creative, real, and careful in
              everything we do. We make beautiful pictures and videos that tell
              your story.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                delay: 0.9,
                type: "spring",
                bounce: 0.2,
              }}
            >
              These guidelines help us ensure everything we do – whether
              it&apos;s on paper, on a screen, or when you meet us – shows how
              good and artistic we are.
            </motion.p> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurBrand;
