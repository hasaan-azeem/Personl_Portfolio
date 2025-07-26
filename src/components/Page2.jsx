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

  useGSAP(function(){
    gsap.from(".rotateText",{
      transform: "rotateX(-80deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger:{
        trigger: ".rotateText",
        start: "top 60%",
        end: "top -100%",
        scrub:2,
        
      }
    })
  })


  return (
   <div className="flex flex-col justify-center">
     <div className="w-full overflow-hidden bg-black">
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

    <div id="section2" className="h-full flex flex-col overflow-hidden items-center mt-10 ">
    <span className="rotateText font-[apna] font-[1000] text-black text-[20vw] uppercase tracking-wide leading-none mb-5 ">Code</span>
    <span className="rotateText font-[apna] font-[1000] text-black text-[20vw] uppercase tracking-wide leading-none mb-5 ">Design</span>
    <span className="rotateText font-[apna] font-[1000] text-black text-[20vw] uppercase tracking-wide leading-none mb-5 ">Deploy</span>
    <span className="rotateText font-[apna] font-[1000] text-black text-[20vw] uppercase tracking-wide leading-none mb-5 ">Optimize</span>
    <span className="rotateText font-[apna] font-[1000] text-black text-[20vw] uppercase tracking-wide leading-none mb-5">Scale</span>
    </div>
 
   </div>
  );
};

export default Marquee;
