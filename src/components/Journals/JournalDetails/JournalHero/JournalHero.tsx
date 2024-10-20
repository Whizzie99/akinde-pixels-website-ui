'use client'

import Image from 'next/image';
import hero from '../../../../../public/images/detailsPix1.png'

const HeroSection = () =>{

  return (
    <div className="relative w-full h-screen">
      <Image
        src={hero}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg relative top-[100px]">
            <h1 className="text-[20px] md:text-6xl font-medium text-white mb-4 uppercase">hello world</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
  


export default HeroSection;