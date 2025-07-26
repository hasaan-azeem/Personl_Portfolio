import React, { useRef, useState, useEffect } from "react";

const Home = () => {
  const tiltRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is Tailwind's lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const mouseMoving = (e) => {
    if (tiltRef.current) {
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
    }
  };

  useEffect(() => {
    if (tiltRef.current) {
      tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
      tiltRef.current.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    }
  }, [xVal, yVal]);

  if (isMobile) {
    // Mobile Layout - Gray background with flex-col
    return (
      <div
        onMouseMove={(e) => {
          mouseMoving(e);
        }}
        className="relative h-screen w-full bg-white p-2 xs:p-3 sm:p-4"
      >
        <div className="w-full h-full rounded-2xl sm:rounded-3xl shadow-lg bg-[#dadada]">
          
          {/* Mobile Content - Flex Column */}
          <div className="flex flex-col items-center justify-center h-[100vh] p-4 xs:p-6 sm:p-8 md:p-12">
            
            {/* Text Section */}
            <div className="h-full w-full flex flex-col justify-center items-center mt-35">
              <div ref={tiltRef} className="text-center">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl uppercase text-black font-[apna] font-extrabold leading-tight">
                  I am <span className="text-[#08aaaa]">DARK MODE</span>
                  <span className="font-[apna3]">™</span>
                </h1>
                             
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-black uppercase font-[apna] font-extrabold leading-tight tracking-wide mt-2 xs:mt-3 sm:mt-4">
                  Website Developer
                </h1>

                <h1 className="text-[#08aaaa] text-2xl xs:text-3xl sm:text-4xl md:text-5xl uppercase font-[apna] font-extrabold leading-tight mt-2 xs:mt-3 sm:mt-4">
                  To Hire
                </h1>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative flex-1 flex justify-center items-center">
              <div className="">
                <img src="\assets\profile.png" alt="" />
              </div>
            </div>

          </div>

          {/* Footer Text */}
          
        </div>
      </div>
    );
  }

  // Desktop Layout - Background image with overlay
  return (
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="relative h-screen w-full bg-white p-2 xs:p-3 sm:p-4 md:p-5"
    >
      {/* Desktop Hero Container with Background Image */}
      <div 
        className="bg-hero-desktop relative w-full h-full p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 rounded-2xl sm:rounded-3xl shadow-lg bg-cover bg-center bg-no-repeat"      >
        
        {/* Desktop Text Content - Left Side */}
        <div className="relative flex items-center justify-start h-full z-10">
          <div ref={tiltRef} className="relative text-left py-2 xs:py-3 sm:py-5 px-2 xs:px-3 sm:px-4">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl uppercase text-black font-[apna] font-extrabold leading-tight">
              I am <span className="text-[#08aaaa]">DARK MODE</span>
              <span className="font-[apna3]">™</span>
            </h1>
                         
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-black uppercase font-[apna] font-extrabold leading-tight tracking-wide mt-1 xs:mt-2">
              Website Developer
            </h1>

            <h1 className="text-[#08aaaa] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase font-[apna] font-extrabold leading-tight mt-1 xs:mt-2">
              To Hire
            </h1>
          </div>
        </div>

        {/* Footer Text */}
        <div className="absolute bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-10 left-4 xs:left-6 sm:left-8 md:left-12 lg:left-16 z-10">
          <h2 className="text-black font-[apna3] tracking-wider text-xs xs:text-sm sm:text-base md:text-lg uppercase">
            Full stack developer
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;