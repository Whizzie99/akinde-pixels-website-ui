import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import ZoomView from "../zoomview/ZoomView"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { aboutSwiper } from "../../../../db/data"; 
import { GalleryImage } from "../../../../db/data"; 

interface Slide {
  id: number;
  image: string;
  caption: string;
}


const PortfolioModal = ({
  isOpen,
  onClose,
  slide,
}: {
  isOpen: boolean;
  onClose: () => void;
  slide: Slide | null;
}) => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && slide) {
    // Find the selected slide from the aboutSwiper array
      const selectedSlide = aboutSwiper.find((s) => s.id === slide.id);
      if (selectedSlide) {
        setImages(selectedSlide.galleryImages);
      }
      setZoomedImage(null);
    }
  }, [isOpen, slide]);

  if (!isOpen || !slide) return null;

  return (
    <div className="w-full bg-[#D1D3D033] py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="w-full m-auto">
            <h2 className="text-[28px] md:text-[32px] lg:text-[40px] text-gray-500 text-center">
              {slide.caption}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-300 rounded-full transition-colors relative"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8 text-gray-500" />
          </button>
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
      </div>

      {zoomedImage && (
        <ZoomView
          image={zoomedImage}
          alt={slide.caption}
          onClose={() => setZoomedImage(null)}
        />
      )}
    </div>
  );
};

export default PortfolioModal;
