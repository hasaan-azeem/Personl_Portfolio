import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

const Marquee = () => {
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
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: "#section2",
            start: "top 80%",
            end: "bottom 40%",
            scrub: 2,
          },
        });
      },
    });
  });

  return (
    <div className="flex flex-col justify-center">
      {/* Removed marquee block */}
      <div className="relative w-full flex-col items-center justify-center overflow-hidden hidden md:flex">
        <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] md:text-5xl md:leading-[5rem]">
          <ScrollVelocityRow baseVelocity={5} direction={1}>
            I Build Scalable Web Apps & Mobile Experiences &nbsp;
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={5} direction={-1}>
            | React, Node, & Tailwind Expertise&nbsp;
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>

      <div
        id="section2"
        className="h-full w-full flex flex-col overflow-hidden items-center mt-4 sm:mt-10"
      >
        <span className="rotateText font-[apna2] text-black text-[60vw] sm:text-[30vw] uppercase tracking-wide sm:tracking-widest leading-none -mb-14 sm:-mb-20">
          Code
        </span>
        <span className="rotateText font-[apna2] text-black text-[50vw] sm:text-[30vw] uppercase leading-none tracking-wide sm:tracking-widest -mb-12 sm:-mb-20">
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
