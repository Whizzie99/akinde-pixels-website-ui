import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ZoomIn} from "lucide-react";


interface Slide {
  id: number;
  image: string;
  caption: string;
  modalImages?: string[];
}

interface ImageWithState {
  id: number;
  url: string;
  loading: boolean;
  error: boolean;
}

interface ZoomViewProps {
  image: string;
  alt: string;
  onClose: () => void;
}

const ZoomView = ({ image, alt, onClose }: ZoomViewProps) => (
  <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
    <button
      onClick={onClose}
      className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
    >
      <X className="w-6 h-6 text-white" />
    </button>
    <div className="relative w-[90vw] h-[90vh]">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>
);

const ImageSkeleton = () => (
  <div className="relative aspect-[3/4] w-full bg-gray-200 rounded-lg animate-pulse" />
);

const PortfolioModal = ({ 
  isOpen, 
  onClose, 
  slide 
}: {
  isOpen: boolean;
  onClose: () => void;
  slide: Slide | null;
}) => {
  const [images, setImages] = useState<ImageWithState[]>([]);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  
  const ITEMS_PER_PAGE = 15;

  
  useEffect(() => {
    if (isOpen && slide) {
      const initialImages = Array(ITEMS_PER_PAGE)
        .fill(null)
        .map((_, index) => ({
          id: index,
          url: slide.image,
          loading: true,
          error: false,
        }));
      setImages(initialImages);
      setZoomedImage(null);
    }
  }, [isOpen, slide]);

  const handleImageLoad = (id: number) => {
    setImages(prev =>
      prev.map(Image =>
        Image.id === id ? { ...Image, loading: false } : Image
      )
    );
  };

  const handleImageError = (id: number) => {
    setImages(prev =>
      prev.map(img =>
        img.id === id ? { ...img, loading: false, error: true } : img
      )
    );
  };

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
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close gallery"
          >
            <X className="w-8 h-8 text-gray-500" />
          </button>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-1 space-y-1">
          {images.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid relative group  overflow-hidden"
            >
              {image.loading && <ImageSkeleton />}
              
              {!image.error ? (
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={image.url}
                    alt={`${slide.caption} ${image.id + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 
                           (max-width: 768px) 33vw,
                           (max-width: 1024px) 25vw,
                           20vw"
                    className={`object-cover rounded transition-transform duration-300 group-hover:scale-105
                      ${image.loading ? 'opacity-0' : 'opacity-100'}`}
                    priority={image.id < 4}
                    onLoad={() => handleImageLoad(image.id)}
                    onError={() => handleImageError(image.id)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => setZoomedImage(image.url)}
                      className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                      aria-label="Zoom image"
                    >
                      <ZoomIn className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[3/4] w-full bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Failed to load image</span>
                </div>
              )}
            </div>
          ))}
        </div>
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