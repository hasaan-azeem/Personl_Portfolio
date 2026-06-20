import React from "react";
import { CardStack } from "@/components/ui/card-stack";
import { Highlighter } from "@/components/ui/highlighter";

const items = [
  {
    id: 1,
    title: "Full Stack Development (MERN)",
    description:
      "Scalable web apps using MongoDB, Express, React, and Node.js.",
    imageSrc:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Website Deployment",
    description: "Deployments on Vercel, Hostinger, and custom VPS servers.",
    imageSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "WordPress Development",
    description:
      "Custom themes, plugins, speed optimization, and SEO ready sites.",
    imageSrc:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Flutter Mobile Apps",
    description: "Cross platform Android and iOS applications using Flutter.",
    imageSrc:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "API Development",
    description: "Secure REST APIs with authentication and role based access.",
    imageSrc:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "UI Integration",
    description: "Figma or PSD to pixel perfect responsive UI in React.",
    imageSrc:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
  },
];

// Card used by the desktop 3D fan (CardStack's renderCard)
const ServiceCard = (item) => (
  <div className="relative h-full w-full">
    <img
      src={item.imageSrc}
      alt={item.title}
      className="absolute inset-0 h-full w-full object-cover"
      draggable={false}
    />
    <div className="absolute inset-0 bg-black/75" />
    <div className="relative z-10 flex h-full flex-col justify-center p-5 text-center">
      <h3 className="text-xl sm:text-2xl font-bold text-white">{item.title}</h3>
      <p className="mt-2 text-sm sm:text-base text-gray-200 px-4 max-w-xs mx-auto">
        {item.description}
      </p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gray-50 py-14 sm:py-16 text-center overflow-hidden"
    >
      <Highlighter action="underline" color="#FF9800">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-3">
          My Services
        </h2>
      </Highlighter>
      <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto mt-4 mb-2">
        <span className="sm:hidden">Swipe through, or let it auto play.</span>
        <span className="hidden sm:inline">
          Drag, click a side card, or just wait, it cycles through on its own.
        </span>
      </p>

      {/* Desktop: 3D fan stack */}
      <div className=" max-w-9xl mx-auto mt-8 pb-20 px-4 overflow-hidden">
        <CardStack
          items={items}
          maxVisible={7}
          cardWidth={440}
          cardHeight={300}
          overlap={0.42}
          spreadDeg={38}
          autoAdvance
          intervalMs={3200}
          pauseOnHover
          showDots
          renderCard={ServiceCard}
        />
      </div>
    </section>
  );
};

export default Services;
