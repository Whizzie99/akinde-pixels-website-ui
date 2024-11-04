"use client";

import Image from "next/image";
import logo from "../../../../public/images/logo-full-frame.png";
import { motion } from "framer-motion";

const OurBrand = () => {
  return (
    <div className="custom-container py-8 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              type: "spring",
              bounce: 0.2,
            }}
            className="relative hidden lg:block h-[333.33px] top-10 lg:max-w-full "
          >
            <Image
              src={logo}
              alt="sample"
              height={568}
              width={628}
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            bounce: 0.2,
          }}
          className="font-lato text-black text-left lg:w-[550px] flex flex-col justify-center"
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
            className="uppercase text-3xl text-[#F28E2C] mb-2"
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
            Welcome to our brand guidelines. These guidelines are the foundation
            of our brand identity and the visual language that defines who we
            are. Akinde Pixels is more than just a name; it is a commitment to
            excellence in visual storytelling. We believe in the power of
            imagery to transcend words, evoke emotions, and capture the essence
            of every moment
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
            Our brand is built on the principles of creativity, authenticity,
            and precision. Though these guidelines, we aim to ensure that every
            representation of Akinde Pixels whether in photography, digital
            media, or print remains consistent, impactful, and true to our core
            values. This document serves as a roadmap for how we present
            ourselves to the world. It covers everything from our logo usage and
            color palette to our photographic style and tone of voice. Whether
            you are a part of the Akinde Pixels team or collaborating with us,
            these guidelines are here to help you create work that reflects the
            qualiy and artistry that our brand stands for.
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
            Let’s continue to capture stories that resonate, inspire, and
            connect. Welcome to the world of Akinde Pixels where every image is
            masterpiece
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default OurBrand;
