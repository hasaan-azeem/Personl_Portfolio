// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import {
//   FaHome,
//   FaGithub,
//   FaLinkedin,
//   FaCode,
//   FaFolderOpen,
//   FaEnvelope,
// } from "react-icons/fa";
// import { AnimatePresence, motion } from "framer-motion";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// gsap.registerPlugin(ScrollToPlugin);

// export default function BottomNav() {
//   const [hovered, setHovered] = useState(false);
//   const navRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(false);

//   const mainLinks = [
//     { href: "#section-main", icon: <FaHome />, label: "Home" },
//     { href: "https://github.com/hasaan-azeem", icon: <FaGithub />, label: "GitHub" },
//     { href: "https://linkedin.com/in/hasaan-azeem", icon: <FaLinkedin />, label: "LinkedIn" },
//   ];

//   const extraLinks = [
//     { href: "#skills", icon: <FaCode />, label: "Skills" },
//     { href: "#projects", icon: <FaFolderOpen />, label: "Projects" },
//     { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
//   ];

//   // Smooth scroll with GSAP
//   const handleScroll = (e, href) => {
//     if (href.startsWith("#")) {
//       e.preventDefault();
//       gsap.to(window, {
//         duration: 1,
//         ease: "power2.inOut",
//         scrollTo: href,
//       });
//     }
//   };

//   // Detect screen size
//   useEffect(() => {
//     const checkScreen = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     checkScreen();
//     window.addEventListener("resize", checkScreen);
//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   // Mobile behavior (show/hide on scroll)
//   useEffect(() => {
//     if (!isMobile) return;

//     const navEl = navRef.current;
//     let lastScrollY = window.scrollY;
//     let timeoutId;

//     gsap.set(navEl, { y: 100, opacity: 0, pointerEvents: "none" });

//     const showNav = () => {
//       gsap.to(navEl, {
//         y: 0,
//         opacity: 1,
//         duration: 0.5,
//         ease: "power3.out",
//         pointerEvents: "auto",
//       });
//     };

//     const hideNav = () => {
//       gsap.to(navEl, {
//         y: 100,
//         opacity: 0,
//         duration: 0.5,
//         ease: "power3.in",
//         pointerEvents: "none",
//       });
//     };

//     const onScroll = () => {
//       const currentY = window.scrollY;

//       clearTimeout(timeoutId);
//       showNav();

//       // Hide after 1s of no scroll
//       timeoutId = setTimeout(() => {
//         hideNav();
//       }, 1000);

//       lastScrollY = currentY;
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       clearTimeout(timeoutId);
//     };
//   }, [isMobile]);

//   return (
//     <div
//       ref={navRef}
//       className="fixed bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2
//                  flex items-center gap-4 bg-white shadow-lg rounded-full px-4 py-2 z-50"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Main links */}
//       {mainLinks.map((link, i) => (
//         <React.Fragment key={i}>
//           <a
//             href={link.href}
//             onClick={(e) => handleScroll(e, link.href)}
//             target={link.href.startsWith("http") ? "_blank" : "_self"}
//             rel="noopener noreferrer"
//             className="flex items-center justify-center w-10 h-10 rounded-full
//                        bg-gray-900 text-white hover:bg-gray-700 transition"
//           >
//             {link.icon}
//           </a>
//           {/* Separator only between main links */}
//           {i < mainLinks.length - 1 && <span className="w-px h-7 bg-gray-700"></span>}
//         </React.Fragment>
//       ))}

//      {/* Extra links only on desktop when hovered */}
// <AnimatePresence>
//   {hovered && !isMobile && (
//     <>
//       {/* Separator before extra links */}
//       <motion.span
//         initial={{ opacity: 0, height: 0 }}
//         animate={{ opacity: 1, height: "1.75rem" }} // 1.75rem = h-7
//         exit={{ opacity: 0, height: 0 }}
//         transition={{ duration: 0.3 }}
//         className="hidden md:block w-px bg-gray-700"
//       />

//       {extraLinks.map((link, i) => (
//         <React.Fragment key={i}>
//           <motion.a
//             href={link.href}
//             onClick={(e) => handleScroll(e, link.href)}
//             initial={{ opacity: 0, width: 0 }}
//             animate={{ opacity: 1, width: "2.5rem" }}
//             exit={{ opacity: 0, width: 0 }}
//             transition={{ duration: 0.3, delay: i * 0.2 }}
//             className="hidden md:flex overflow-hidden items-center justify-center
//                        w-10 h-10 rounded-full bg-gray-800 text-white hover:bg-gray-600 transition"
//           >
//             {link.icon}
//           </motion.a>

//           {i < extraLinks.length - 1 && (
//             <motion.span
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "1.75rem" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3, delay: i * 0.2 }}
//               className="hidden md:block w-px bg-gray-700"
//             />
//           )}
//         </React.Fragment>
//       ))}
//     </>
//   )}
// </AnimatePresence>

//     </div>
//   );
// }

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  FaHome,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function NavBar() {
  const mainLinks = [
    {
      href: "#section-main",
      icon: (
        <FaHome className="h-full w-full  text-white-500 dark:text-neutral-300" />
      ),
      title: "Home",
    },
    {
      href: "https://github.com/hasaan-azeem",
      icon: (
        <FaGithub className="h-full w-full  text-white-500 dark:text-neutral-300" />
      ),
      title: "GitHub",
    },
    {
      href: "https://linkedin.com/in/hasaan-azeem",
      icon: (
        <FaLinkedin className="h-full w-full  text-white-500 dark:text-neutral-300" />
      ),
      title: "LinkedIn",
    },
  ];

  const extraLinks = [
    {
      href: "#skills",
      icon: (
        <FaCode className="h-full w-full  text-white-500 dark:text-neutral-300" />
      ),
      title: "Skills",
    },
    {
      href: "#projects",
      icon: (
        <FaFolderOpen className="h-full w-full  text-white-500 dark:text-neutral-300" />
      ),
      title: "Projects",
    },
    {
      href: "#contact",
      icon: (
        <FaEnvelope className="h-full w-full  text-white-500 dark:text-neutral-300" />
      ),
      title: "Contact",
    },
  ];

  const handleClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      gsap.to(window, {
        duration: 1,
        ease: "power2.inOut",
        scrollTo: href,
      });
    } else {
      // open external links
      window.open(href, "_blank");
    }
  };

  const dockItems = [...mainLinks, ...extraLinks].map((item) => ({
    icon: item.icon,
    title: item.title,
    href: item.href,
    onClick: (e) => handleClick(e, item.href),
  }));

  return (
    <FloatingDock
      className="bg-gray-700"
      items={dockItems}
      desktopClassName="fixed bottom-6 left-1/2 -translate-x-1/2 z-50  "
      mobileClassName="fixed bottom-4 right-4 z-50"
    />
  );
}
