import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "AidBloom Website",
    description:
      "A Website for AidBloom, a non-profit organization, featuring a donation system and volunteer management.",
    image: "/images/aidbloom.png",
    link: "https://aidbloo.netlify.app/",
  },
  {
    title: "Bayaan - Portfolio",
    description:
      "A portfolio website showcasing my skills and projects, built with HTML , CSS and JS.",
    image: "/images/bayaan.png",
    link: "https://bayaanport.netlify.app/",
  },
  {
    title: "Fitlyzer - Body Scan App",
    description:
      "A mobile application for diet and exercise recommendation, designed with Flutter.",
    image: "/images/fitlyzer.jpg",
    link: "https://github.com/hasaan-azeem/Fitlyzer-BodyScan",
  },
];

const Projects = () => {
  return (
    <>
      <div className=" ">
        <h2 className="font-[apna3] justify-center text-center py-3 text-md sm:text-lg bg-[#dadada]">
          From Sketch to Screen.
        </h2>
      </div>
      <section
        className="px-2 sm:px-10 py-16  dark:bg-gray-900  rounded-3xl"
        id="projects"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="-mt-7 text-6xl sm:text-[5vw] font-[apna] font-bold text-black dark:text-white text-center mb-12">
            Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-transform hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover p-2 rounded-2xl"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-block mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
