import Image from "next/image";
import { X } from "lucide-react";


interface ZoomViewProps {
  image: string;
  alt: string;
  onClose: () => void;
}

const ZoomView = ({ image, alt, onClose }: ZoomViewProps) => (
  <div className="fixed inset-0 z-50 bg-black/90 flex items-center ">
    <button
      onClick={onClose}
      className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
    >
      <X className="w-6 h-6 text-white" />
    </button>
    <div className="relative w-[85vw] h-[90vh]">
      <Image src={image} alt={alt} fill className="object-contain" priority />
    </div>
  </div>
);

export default ZoomView;