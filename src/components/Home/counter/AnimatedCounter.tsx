"use client";

import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const counterItems = [
    {
      end: 100,
      duration: 4,
      suffix: "+",
      label: "Photographed",
    },
    {
      end: 10,
      duration: 5,
      label: "Years in business",
    },
    {
      end: 100,
      duration: 6,
      suffix: "+",
      label: "Photographs Delivered",
    },
  ];

  return (
    <div ref={containerRef} className="bg-[rgba(254,248,242,0.5)] py-20">
      <div className="custom-container">
        <div className="lg:flex lg:items-center lg:justify-center lg:space-x-[2rem] grid grid-cols-1 gap-y-12">
          {counterItems.map((item, index) => (
            <div
              key={index}
              className="text-center bg-white p-2 lg:p-4 rounded w-full lg:w-[calc(95%/3)] shadow-custom"
            >
              <div className="text-[20px] lg:text-[48px] flex items-center justify-center mb-[1.3rem] lg:mb-0">
                {isVisible && (
                  <CountUp
                    start={0}
                    end={item.end}
                    duration={item.duration}
                    separator=","
                    className="font-lato font-bold text-[30px]"
                  />
                )}
                {item.suffix && (
                  <p className="text-[30px] lg:text-[30px]">{item.suffix}</p>
                )}
              </div>
              <h3 className="mb-2 text-[20px] lg:text-[28px] font-sofia">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;
