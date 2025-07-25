import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Marquee = () => {
  const marqueeRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const textWidth = textRef.current.offsetWidth;

    gsap.to(marqueeRef.current, {
      x: `-${textWidth}px`,
      duration: 15, // longer duration for better readability
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="w-full overflow-hidden bg-black py-4">
      <div
        className="flex w-max whitespace-nowrap"
        ref={marqueeRef}
      >
        {/* Two duplicated text blocks for seamless loop */}
        <div className="flex" ref={textRef}>
          <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mx-6">
            I AM A WEBSITE DEVELOPER AND FLUTTER APPLICATION DEVELOPER.
          </span>
          <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mx-6">
            I AM A WEBSITE DEVELOPER AND FLUTTER APPLICATION DEVELOPER.
          </span>
        </div>
        <div className="flex">
          <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mx-6">
            I AM A WEBSITE DEVELOPER AND FLUTTER APPLICATION DEVELOPER.
          </span>
          <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mx-6">
            I AM A WEBSITE DEVELOPER AND FLUTTER APPLICATION DEVELOPER.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
