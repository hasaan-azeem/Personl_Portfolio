import React from "react";
import { Highlighter } from "@/components/ui/highlighter";

const projects = [
  {
    title: "Nordvia Exports",
    date: "Jan 2026 - Feb 2026",
    description:
      "An ecommerce storefront and manufacturing showcase for premium winter apparel, highlighting products like jackets, hoodies, coats and gloves. Built with modern design principles, responsive layouts and interactive elements to present product offerings clearly and professionally, while supporting global inquiries and ordering.",
    image: "/Projects/nordvia.png",
    link: "https://www.nordviaexports.store/",
    tech: ["NextJs", "TailwindCss", "GSAP", "Lenis", "Lucide"],
    source: "https://github.com/hasaan-azeem/",
  },
  {
    title: "AidBloom Website",
    date: "Feb 2025 - Mar 2025",
    description:
      "Designed and developed AidBloom's official platform for donations and volunteer management. Integrated secure payment gateway and dynamic content management using ASP.Net and MS SQL.",
    image: "/Projects/aidbloom.png",
    link: "https://aidbloo.netlify.app/",
    tech: ["HTML", "CSS", "Bootstrap", "MS SQL", "ASP.Net"],
    source: "https://github.com/hasaan-azeem/demo_project",
  },
  {
    title: "Bayaan - Portfolio",
    date: "Aug 2024 - Sep 2024",
    description:
      "A personal portfolio website showcasing creative works, projects, and achievements. Built with pure HTML, CSS, and JavaScript to emphasize clean design and responsiveness.",
    image: "/Projects/bayaan.png",
    link: "https://bayaanport.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    source: "https://github.com/hasaan-azeem/Portfolio",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-8 px-4 sm:px-6 lg:px-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-8">
        <Highlighter action="underline" color="#FF9800">
          <h2 className="text-2xl sm:text-3xl font-bold mb-1">
            Other Projects
          </h2>
        </Highlighter>
        <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-4">
          Smaller builds where I sharpened my craft, from ecommerce to
          portfolios to client sites.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 transition flex flex-col bg-white"
          >
            {/* Image */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-44 object-cover"
              />
            </a>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-base font-semibold text-gray-900 mb-0.5">
                {project.title}
              </h3>
              <p className="text-gray-400 text-xs mb-2">{project.date}</p>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-2 text-xs font-medium">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-1 px-3 py-1.5 text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition"
                >
                  Website
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex justify-center items-center gap-1 px-3 py-1.5 text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
