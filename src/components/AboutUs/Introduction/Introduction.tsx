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
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                type: "spring",
                bounce: 0.2,
              }}
              className="uppercase text-3xl text-[#F28E2C] mb-2 font-sofia"
            >
              Introduction
            </motion.h2>
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
              More than just a name, Akinde Pixels is a commitment to{" "}
              <b>
                capturing timeless moments through stunning photography and
                videography.
              </b>{" "}
              We believe in the power of imagery to evoke emotions, capture the
              essence of every moment, and inspire.
            </motion.p>
            <motion.p
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
              At the heart of Akinde Pixels lies a dedication to creativity,
              authenticity, and precision. These principles guide every aspect
              of our work, from{" "}
              <b>masterful photography to cinematic videography.</b>
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
              These brand guidelines serve as your compass, ensuring that every
              representation of Akinde Pixels – whether in print, on screen, or
              in person – reflects the <b>quality and artistry</b> that defines
              us.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurBrand;
