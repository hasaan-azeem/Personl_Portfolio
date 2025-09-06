/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { FaHome, FaGithub, FaLinkedin, FaCode, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function BottomNav() {
  const [hovered, setHovered] = useState(false);
  const navRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const mainLinks = [
    { href: "#section-main", icon: <FaHome />, label: "Home" },
    { href: "https://github.com/hasaan-azeem", icon: <FaGithub />, label: "GitHub" },
    { href: "https://linkedin.com/in/hasaan-azeem", icon: <FaLinkedin />, label: "LinkedIn" },
  ];

  const extraLinks = [
    { href: "#skills", icon: <FaCode />, label: "Skills" },
    { href: "#projects", icon: <FaFolderOpen />, label: "Projects" },
    { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  // ✅ GSAP smooth scroll handler
  const handleScroll = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      gsap.to(window, {
        duration: 1,
        ease: "power2.inOut",
        scrollTo: href,
      });
    }
  };

  // ✅ Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // ✅ Scroll behavior: show when scrolling down, hide on scroll up or stop
  useEffect(() => {
    if (!isMobile) return;

    const navEl = navRef.current;
    let lastScrollY = window.scrollY;
    let timeoutId;

    gsap.set(navEl, { y: 100, opacity: 0, pointerEvents: "none" });

    const showNav = () => {
      gsap.to(navEl, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        pointerEvents: "auto",
      });
    };

    const hideNav = () => {
      gsap.to(navEl, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        pointerEvents: "none",
      });
    };

    const onScroll = () => {
      const currentY = window.scrollY;

      clearTimeout(timeoutId);

      if (currentY > lastScrollY) {
        // scrolling down → show
        showNav();
      } else {
        // scrolling up → hide
        showNav();
      }

      // hide when stop scrolling (after 1s)
      timeoutId = setTimeout(() => {
        hideNav();
      }, 1000);

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  return (
    <div
      ref={navRef}
      className="
        fixed bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 
        bg-white shadow-lg rounded-full px-4 py-2 z-50
        md:flex
      "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Always visible links */}
      {mainLinks.map((link, i) => (
        <a
          key={i}
          href={link.href}
          onClick={(e) => handleScroll(e, link.href)}
          target={link.href.startsWith("http") ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition"
        >
          {link.icon}
        </a>
      ))}

      {/* Extra links only desktop */}
      <AnimatePresence>
        {hovered &&
          extraLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "2.5rem" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}
              className="hidden md:flex overflow-hidden items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-gray-600 transition"
            >
              {link.icon}
            </motion.a>
          ))}
      </AnimatePresence>
    </div>
  );
}
