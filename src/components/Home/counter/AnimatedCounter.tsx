"use client";

import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="lg:h-[20rem] h-[10rem] bg-[#FEF8F280]"
    >
      <div className="grid grid-cols-3 gap-4 place-items-center h-full custom-container ">
        <div className="text-center shadow p-2 lg:p-4">
          <div className="text-[20px] lg:text-[48px] flex items-center justify-center mb-[1.3rem] lg:mb-0">
            {isVisible && (
              <CountUp
                start={0}
                end={100}
                duration={4}
                separator=","
              />
            )}
            <p className="text-[20px] lg:text-[48px]">+</p>
          </div>
          <h3 className="mb-2 text-[14px] lg:text-[28px]">Photographed</h3>
        </div>
        <div className="text-center shadow p-2 lg:p-4">
          <div className="text-[20px] lg:text-[48px] flex items-center justify-center">
            {isVisible && (
              <CountUp
                start={0}
                end={10}
                duration={5}
                separator=","
              />
            )}
          </div>
          <h3 className="mb-2 text-[14px] lg:text-[28px]">Years in business</h3>
        </div>
        <div className="text-center shadow p-2 lg:p-4">
          <div className="text-[20px] lg:text-[48px] flex items-center justify-center">
            {isVisible && (
              <CountUp
                start={0}
                end={100}
                duration={6}
                separator=","
              />
            )}
            <p className="text-[20px] lg:text-[48px]">+</p>
          </div>
          <h3 className="mb-2 text-[14px] lg:text-[28px]">
            Photographs Delivered
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;