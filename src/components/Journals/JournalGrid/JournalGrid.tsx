/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IoMdStar } from "react-icons/io";
import Image from "next/image";
import { useGetJournals } from "@/services/queries";

const JournalGrid = () => {
  const { data: journals, isPending, isError } = useGetJournals();

  function createArray(length: number): any[] {
    if (length < 0) {
      throw new Error("Length must be a non-negative number.");
    }
    return Array.from({ length }, (_, index) => index);
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching journals</div>;
  }

  return (
    <div className="custom-container font-lato">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-16 ">
        {journals.map((journal: any) => {
          return (
            <div key={journal.sys.id}>
              <div className="relative flex justify-center items-center w-full h-[400px]">
                <Image
                  src={`https:${journal.fields.img.fields.file.url}`}
                  alt="Akinde Pixels"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  priority
                  className="rounded-[8px] object-cover"
                />
              </div>
              <div className="text-center mt-2">
                <p className="text-sm font-medium">
                  {`${journal.fields.sessionType[0].fields.title} session`}
                </p>
                <p className="text-[#CA7625] text-[40px] text-base uppercase">
                  {journal.fields.clientName}
                </p>
                <div className="flex space-x-2  justify-center mt-1">
                  {createArray(journal.fields.rating).map((_, index) => (
                    <IoMdStar
                      key={index}
                      className="text-[#F28E2C]"
                      size={20}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JournalGrid;
