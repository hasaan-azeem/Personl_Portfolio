import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const tiltRef = useRef(null);

  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX - tiltRef.current.getBoundingClientRect().width / 2) / 40
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 10
    );
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
      });
    },
    [xVal, yVal]
  );

  return (
    // Hero Section
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="relative h-screen w-full bg-white p-3 sm:p-5 "
    >
      {/* Hero Bg Image */}
      <div className="bg-hero-desktop w-full h-full p-4 sm:p-8 lg:p-20 rounded-3xl shadow-lg bg-cover bg-center bg-no-repeat">
        {/* Tilt Text */}
        <div
          id="main"
          className=" relative flex items-center justify-start h-full gap-40 sm:flex-row -mt-10 sm:mt-0 p-4"
        >
          <div ref={tiltRef} className=" relative text-left py-5">
            <h1 className="text-3xl sm:text-[3.5vw] uppercase text-black font-[apna] font-extrabold leading-[4vw] sm:leading-[3vw]">
              I am <span className="text-[#08aaaa]">DARK MODE</span>
              <span className="font-[apna3]">™</span>
            </h1>
            <h1 className="text-3xl sm:text-[4vw] text-black uppercase font-[apna] font-extrabold leading-[4vw] sm:leading-[6vw] tracking-wide">
              Website Developer
            </h1>

            <h1 className="text-[#08aaaa] text-[3vw] sm:text-[3.5vw] uppercase font-[apna] font-extrabold leading-[3vw] sm:leading-[3vw]">
              To Hire
            </h1>
          </div>
        </div>

        {/* Footer Text */}
        <div className=" relative bottom-1 -left-14 sm:-left-4 p-10">
          <h2 className="text-black font-[apna3] tracking-wider text-sm uppercase">
            Full stack developer
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
