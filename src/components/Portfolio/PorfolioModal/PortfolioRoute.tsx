"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import ZoomView from "@/components/Portfolio/zoomview/ZoomView";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { aboutSwiper, GalleryImage } from "../../../../db/data";

const PortfolioRoute = () => {
  const params = useParams();
  const router = useRouter();
  const [slide, setSlide] = useState<(typeof aboutSwiper)[0] | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      const selectedSlide = aboutSwiper.find(
        (s) => s.id === parseInt(params.id as string),
      );
      if (selectedSlide) {
        setSlide(selectedSlide);
        setImages(selectedSlide.galleryImages);
      } else {
        router.push("/portfolio"); 
      }
    }
  }, [params.id, router]);

  if (!slide) return null;

  return (
    <div className="w-full bg-[#D1D3D033] py-16 min-h-screen -mt-8">
      <div className="max-w-7xl mx-auto lg:custom-container w-[90%]">
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="text-gray-500 mb-4 hover:text-gray-700"
          >
            ← Back to Portfolio
          </button>
          <h2 className="text-[28px] md:text-[32px] lg:text-[40px] text-gray-500">
            {slide.caption}
          </h2>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 500: 3, 700: 4 }}>
          <Masonry gutter="16px">
            {images.map((image) => (
              <div key={image.id} className="relative group overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={500}
                  height={image.height}
                  className="object-cover rounded transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <button
                  onClick={() => setZoomedImage(image.url)}
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
            alt={slide.caption}
            onClose={() => setZoomedImage(null)}
          />
        )}
      </div>
    </div>
  );
};

export default PortfolioRoute;
