/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollCanvas() {
  const canvasRef = useRef(null);
  const frameCount = 300;
  const images = useRef([]);
  const imageSeq = useRef({ frame: 0 });

  // Preload images
  const preloadImages = () => {
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(4, "0"); // 0001, 0002, ...
      img.src = `/images/male${frameNumber}.png`;
      images.current.push(img);
    }
  };

  // Draw a frame
  const render = () => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const context = canvas.getContext("2d");
  const img = images.current[imageSeq.current.frame];

  if (img?.complete) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    const canvasAspect = canvas.width / canvas.height;
    const imgAspect = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgAspect > canvasAspect) {
      // Image is wider, fit by height
      drawHeight = canvas.height;
      drawWidth = img.width * (canvas.height / img.height);
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    } else {
      // Image is taller, fit by width
      drawWidth = canvas.width;
      drawHeight = img.height * (canvas.width / img.width);
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    }

    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }
};



// Function to resize canvas and re-render
const resizeCanvas = () => {
  const canvas = canvasRef.current;
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  }
};

useEffect(() => {
  preloadImages();
  

  const canvas = canvasRef.current;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  images.current[0].onload = () => render();

  gsap.to(imageSeq.current, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: ".scroll-section",
      start: "top top",
      end: "bottom bottom",
      scrub: 1, // smooth scrub
    },
    onUpdate: render,
  });
  

  ScrollTrigger.refresh();
  window.addEventListener("resize", resizeCanvas);
  return () => window.removeEventListener("resize", resizeCanvas);
}, []);

  return (
    <div className="scroll-section w-full bg-black">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full"
      ></canvas>
    </div>
  );
}
