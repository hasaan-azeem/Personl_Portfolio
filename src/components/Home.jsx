import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const Home = () => {
  const tiltRef = useRef(null);

  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        50
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
        duration: 3,
        ease: "elastic.out(1, 0.3)",
      });
    },
    [xVal, yVal]
  );

  return (
    <div
      id="section-main"
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="relative h-screen w-full bg-white p-2 xs:p-3 sm:p-4 md:p-5"
    >
      <div
        id="main"
        className="relative w-full h-full bg-[url('/src/assets/profile3.png')] sm:bg-[url('/src/assets/profile3.png')] bg-cover bg-center sm:bg-[position:50%_20%] bg-no-repeat p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg"
      >
        <div className="absolute inset-0 sm:hidden bg-gradient-to-tr from-black/90 to-transparent z-0 rounded-2xl"></div>
        <div className="absolute inset-0 sm:hidden bg-gradient-to-bl from-black/20 to-transparent z-0 rounded-2xl"></div>

        <div
          id="tiltDiv"
          ref={tiltRef}
          className="relative z-10 text-left mt-80 sm:mt-40 md:mt-50 lg:mt-40 xl:mt-36 2xl:mt-60 py-2 sm:py-5 px-3"
        >
          <h1 className="text-[6vh] -mb-4 sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl uppercase font-[apna2] text-gray-300 leading-tight font-extrabold tracking-wider">
            I am <span className="text-[#08aaaa]">Hasaan Azeem</span>
          </h1>

          <h1 className="text-[5vh] -mb-3 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white uppercase font-extrabold leading-tight  mt-3 font-[apna3]">
            Full Stack Developer
          </h1>

          <h1 className="text-[3vh] font-[apna3] sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#08aaaa] uppercase font-extrabold leading-snug mt-3">
            To Hire
          </h1>
        </div>

        <div className="relative flex gap-3 sm:gap-4 ml-2 sm:ml-5 mt-2 sm:mt-2 z-10">
          <a
            href="/Hasaan Azeem_Full Stack.pdf"
            download
            className="px-4 py-2 sm:px-3 sm:py-2 font-semibold rounded-3xl shadow-md border border-gray-400 text-white transition duration-300 ease-in-out transform hover:bg-[#0a0f1a] cursor-pointer text-sm sm:text-base"
          >
            Download My CV
          </a>
          <a
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-2 sm:px-3 sm:py-2 font-semibold rounded-3xl shadow-md border border-gray-400 text-white transition duration-300 ease-in-out transform hover:bg-[#0a0f1a] cursor-pointer text-sm sm:text-base"
          >
            Contact Me
          </a>
        </div>

        {/* Footer Text */}
        <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-6 sm:left-6 md:left-8 lg:left-12 z-10">
          <h2 className="text-white font-[apna3] font-semibold tracking-wider text-sm sm:text-base md:text-lg lg:text-xl uppercase">
            Full Stack Developer
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
