import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Highlighter } from "@/components/ui/highlighter";

const Services = () => {
  const items = [
    {
      title: "Full Stack Development (MERN)",
      desc: "Scalable web apps using MongoDB, Express, React, and Node.js.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Website Deployment",
      desc: "Deployments on Vercel, Hostinger, and custom VPS servers.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "WordPress Development",
      desc: "Custom themes, plugins, speed optimization, and SEO ready sites.",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600&auto=format&fit=crop",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Flutter Mobile Apps",
      desc: "Cross platform Android and iOS applications using Flutter.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "API Development",
      desc: "Secure REST APIs with authentication and role based access.",
      image:
        "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "UI Integration",
      desc: "Figma or PSD to pixel perfect responsive UI in React.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
  ];

  return (
    <section id="services" >
    <div className="bg-gray-50 py-16 text-center">
      <Highlighter action="underline" color="#FF9800">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-3">
          My Services
        </h2>
      </Highlighter>
      <DraggableCardContainer className="mt-10 relative flex min-h-screen w-full items-center justify-center overflow-clip">
        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-xl font-semibold text-neutral-400 md:text-3xl">
          Drag the cards to explore what I offer
        </p>

        {items.map((item, idx) => (
          <DraggableCardBody
            key={idx}
            className={`${item.className} shadow-xl rounded-2xl w-80 h-56 overflow-hidden`}
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/75" />

            {/* Text Content */}
            <div className="relative z-10 flex h-full flex-col justify-center p-5 text-center">
              <h3 className="text-3xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-lg text-gray-200">{item.desc}</p>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </div>
    </section>
  );
};

export default Services;
