import React, { useEffect } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Page2 from "./components/Page2";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Skills from "./components/Skills";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6, // Smoother (range: 0.8 to 2.0)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Super smooth easing
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.5, // Optional for mobile momentum
    });

    // GSAP sync
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div data-scroll-container className="w-full min-h-screen">
      <NavBar />
      <Home />
      <Page2 />
      <Skills />
    </div>
  );
};

export default App;
