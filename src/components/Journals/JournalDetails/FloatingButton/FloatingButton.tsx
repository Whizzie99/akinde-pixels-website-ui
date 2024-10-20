'use client'


import { useEffect, useState } from 'react';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll to the top
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed z-10 -right-[45px] bottom-[50px] bg-black text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 transition duration-300 transform -rotate-90"
        >
          Back To Top →
        </button>
      )}
    </>
  );
};

export default FloatingButton;
