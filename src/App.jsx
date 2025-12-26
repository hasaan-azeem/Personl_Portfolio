import React, { useEffect, useRef } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Page2 from "./components/Page2";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certification from "./components/Certification";



gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const lenisRef = useRef(null);

  const sectionRefs = {
    home: useRef(null),
    scrollText: useRef(null),
    skills: useRef(null),
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

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
    <div data-scroll-container className="w-full min-h-screen cursor-none">
      <NavBar sectionRefs={sectionRefs} lenis={lenisRef} />
      <Home ref={sectionRefs.home} />
      <Page2 sectionRefs={sectionRefs} />
      <Skills ref={sectionRefs.skills} />
      <Projects ref={sectionRefs.Projects} />
      <Certification ref={sectionRefs.Certification} />
      <Contact ref={sectionRefs.Contact} />
      <Footer ref={sectionRefs.Footer}/>
    </div>
  );
};

export default App;
