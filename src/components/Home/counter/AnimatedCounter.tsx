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
      }
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
      label: "Photographed"
    },
    {
      end: 10,
      duration: 5,
      label: "Years in business"
    },
    {
      end: 100,
      duration: 6,
      suffix: "+",
      label: "Photographs Delivered"
    }
  ];

  return (
    <div ref={containerRef} className="lg:h-[20rem] h-[10rem] bg-[#FEF8F280]">
      <div className="grid grid-cols-3 gap-4 place-items-center h-full custom-container">
        {counterItems.map((item, index) => (
          <div key={index} className="text-center shadow p-2 lg:p-4">
            <div className="text-[20px] lg:text-[48px] flex items-center justify-center mb-[1.3rem] lg:mb-0">
              {isVisible && (
                <CountUp
                  start={0}
                  end={item.end}
                  duration={item.duration}
                  separator=","
                />
              )}
              {item.suffix && (
                <p className="text-[20px] lg:text-[48px]">{item.suffix}</p>
              )}
            </div>
            <h3 className="mb-2 text-[14px] lg:text-[28px]">{item.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;