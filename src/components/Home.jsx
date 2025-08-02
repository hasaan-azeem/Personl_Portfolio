import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const Home = () => {
  const tiltRef = useRef(null);
  // const [isMobile, setIsMobile] = useState(false);

  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  // Check screen size
  // useEffect(() => {
  //   const checkScreenSize = () => {
  //     setIsMobile(window.innerWidth < 1024); // 1024px is Tailwind's lg breakpoint
  //   };

  //   checkScreenSize();
  //   window.addEventListener("resize", checkScreenSize);

  //   return () => window.removeEventListener("resize", checkScreenSize);
  // }, []);

  const mouseMoving = (e) => {

    setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/50);
    setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y -  tiltRef.current.getBoundingClientRect().height/2)/10);

  };

  useGSAP(function (){
    gsap.to(tiltRef.current, {
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease: "elastic.out(1, 0.3)",
    })
  },[xVal, yVal]);


  // Desktop Layout - Background image with overlay
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
  className="relative w-full h-full bg-[url('/src/assets/profile.png')] sm:bg-[url('/src/assets/desktop.png')] bg-cover bg-center bg-no-repeat p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-lg "
>
  
<div className="absolute inset-0 sm:hidden bg-gradient-to-tr from-black/90 to-transparent z-0 rounded-2xl"></div>
<div className="absolute inset-0 sm:hidden bg-gradient-to-bl from-black/20 to-transparent z-0 rounded-2xl"></div>




  <div
    id="tiltDiv"
    ref={tiltRef}
    className="relative z-10 text-left mt-80 xl:mt-30 2xl:mt-60 py-2 sm:py-5 px-3"
  >
    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-xl xl:text-5xl 2xl:text-8xl uppercase text-black font-[apna] font-extrabold leading-tight">
      I am <span className="text-[#08aaaa]">DARK MODE</span>
      <span className="font-[apna3]">™</span>
    </h1>

    <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-black uppercase font-[apna] font-extrabold leading-tight tracking-tight sm:tracking-wide mt-2">
      Website Developer
    </h1>

    <h1 className="text-[#08aaaa] text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl uppercase font-[apna] font-extrabold leading-tight mt-2">
      To Hire
    </h1>
  </div>

  {/* Footer Text */}
  <div className="absolute bottom-4 sm:bottom-30 md:bottom-10 left-8 sm:left-6 md:left-8 lg:left-14 z-10">
    <h2 className="text-white sm:text-black font-[apna3] font-semibold tracking-wider text-md sm:text-lg md:text-xl uppercase">
      Full stack developer
    </h2>
  </div>
</div>
    </div>
  );
};

export default Home;
