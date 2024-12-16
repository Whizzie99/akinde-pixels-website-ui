import { journals } from "../../../../db/data";
import { IoMdStar } from "react-icons/io";
import Image from "next/image";

const JournalGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pb-16 custom-container">
      {journals.map(({ id, image, title, name }) => {
        return (
          <div key={id} className="">
            <div className="flex justify-center items-center w-auto">
              <Image src={image} alt={name} width={400} height={300} className="rounded-[8px]" />
            </div>
            <div className="text-center  mt-2 ">
              <p className="text-sm font-medium">{title}</p>
              <p className="text-[#CA7625] text-[40px] text-base uppercase">
                {name}
              </p>
              <div className="flex space-x-2  justify-center mt-1">
                {[...Array(5)].map((_, index) => (
                  <IoMdStar key={index} className="text-black" size={20} />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default JournalGrid;
