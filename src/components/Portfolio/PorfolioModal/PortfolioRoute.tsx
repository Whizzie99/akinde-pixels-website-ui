/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { useRouter } from "next/navigation";
import ZoomView from "@/components/Portfolio/zoomview/ZoomView";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface Props {
  portfolio: any;
}

const PortfolioRoute = ({ portfolio }: Props) => {
  const router = useRouter();
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  function getRandomNumber(min: number = 100, max: number = 600): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className="w-full bg-[#D1D3D033] py-16 min-h-screen pt-[100px]">
      <div className="max-w-7xl mx-auto lg:custom-container w-[90%]">
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="text-gray-500 mb-4 hover:text-gray-700 font-lato"
          >
            ← Back to Portfolio
          </button>
          <h2 className="text-[28px] md:text-[32px] lg:text-[40px] text-[#F28E2C] font-sofia">
            {portfolio.fields.title}
          </h2>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 500: 2, 700: 4 }}>
          <Masonry gutter="16px">
            {portfolio?.fields.portfolioImgs.map((img: any, index: number) => (
              <div key={index} className="relative group overflow-hidden">
                <Image
                  src={`https:${img.fields.file.url}`}
                  alt="Akinde pixels"
                  width={500}
                  height={getRandomNumber()}
                  className="object-cover rounded transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <button
                  onClick={() => setZoomedImage(`https:${img.fields.file.url}`)}
                  className="absolute bottom-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                  aria-label="Zoom image"
                >
                  <ZoomIn className="w-4 h-4 text-gray-700" />
                </button>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {zoomedImage && (
          <ZoomView
            image={zoomedImage}
            alt={portfolio.fields.title}
            onClose={() => setZoomedImage(null)}
          />
        )}
      </div>
    </div>
  );
};

export default PortfolioRoute;
