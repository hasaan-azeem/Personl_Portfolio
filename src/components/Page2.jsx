import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Marquee = () => {
  const marqueeRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const textWidth = textRef.current.offsetWidth;

    gsap.to(marqueeRef.current, {
      x: `-${textWidth}px`,
      duration: 20, // longer duration for better readability
      repeat: -1,
      ease: "linear",
    });
  }, []);

  gsap.registerPlugin(ScrollTrigger);

useGSAP(function () {
  ScrollTrigger.matchMedia({

    // Desktop screens
    "(min-width: 768px)": function () {
      gsap.from(".rotateText", {
        transform: "rotateX(-80deg)",
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".rotateText",
          start: "top 100%",
          end: "top -250%",
          scrub: 2,
        },
      });
    },

    // Mobile screens
   "(max-width: 767px)": function () {
  gsap.from(".rotateText", {
    transform: "rotateX(-80deg)",
    opacity: 0,
    duration: 1,        // reduce duration to make each element animate faster
    stagger: 0.3,         // shorter delay between items
    scrollTrigger: {
      trigger: "#section2",
      start: "top 80%",   // slightly later start
      end: "bottom 40%",  // reduce distance between start and end
      scrub: 2,
    },
  });
}

  });
});


  return (
    <div  className="flex flex-col justify-center">
      <div className="w-full overflow-hidden bg-black">
        <div className="flex w-max whitespace-nowrap" ref={marqueeRef}>
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

      <div
        id="section2"
        className="h-full w-full flex flex-col overflow-hidden  items-center mt-4 sm:mt-10 "
      >
        <span className="rotateText font-[apna2] text-black text-[60vw] sm:text-[30vw] uppercase tracking-wide sm:tracking-widest leading-none -mb-14 sm:-mb-20">
          Code
        </span>
        <span className="rotateText font-[apna2] text-black text-[50vw] sm:text-[30vw] uppercase leading-none tracking-wide  sm:tracking-widest -mb-12 sm:-mb-20">
          Design
        </span>
        <span className="rotateText font-[apna2] text-black text-[50vw] sm:text-[30vw] uppercase leading-none tracking-wide sm:tracking-widest -mb-12 sm:-mb-20">
          Deploy
        </span>
        <span className="rotateText font-[apna2] text-black text-[50vw] sm:text-[30vw] uppercase leading-none tracking-wide sm:tracking-widest -mb-12 sm:-mb-20">
          Optimize
        </span>
        <span className="rotateText font-[apna2] text-black text-[50vw] sm:text-[30vw] uppercase leading-none tracking-wide sm:tracking-widest">
          Scale
        </span>
        
      </div>

      <span className="rotateText w-70 sm:w-[50vw] h-1 bg-gray-700 mx-auto"></span>
    </div>
  );
};

export default Marquee;

