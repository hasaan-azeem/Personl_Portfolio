import React from "react";
import { Highlighter } from "@/components/ui/highlighter";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const FeaturedProject = () => {
  const project = {
    title: "WebXGuard",
    tagline: "AI powered web vulnerability scanning platform",
    date: "Sep 2025 - Apr 2026",
    role: "Built collaboratively with a team as our Final Year Project, contributing across backend development, frontend implementation, AI integration, and deployment.",
    description:
      "WebXGuard scans live websites for vulnerabilities and turns raw findings into something a non technical site owner can actually act on. Instead of a wall of CVE numbers, it gives plain language anomaly explanations, prioritized risk levels, and AI generated remediation steps, all surfaced through a React dashboard with real time alerts and ongoing compliance reporting. Built as my Final Year Project, it's the most complete system I've shipped: three coordinated backend servers, a custom scan engine, and an LLM layer that interprets results instead of just listing them.",
    highlights: [
      "Three server architecture (FastAPI + Flask) so scanning, reporting, and alerting run independently without blocking each other",
      "Continuous monitoring engine that re-scans tracked sites on a schedule, not just on demand",
      "Groq LLM integration that classifies anomalies and writes human readable remediation suggestions",
      "Automated compliance reporting that maps findings to common security standards",
      "Real time alerts system so new vulnerabilities surface immediately, not on the next manual check",
      "React dashboard with PostgreSQL backing, built for a non technical site owner to actually use",
    ],
    image: "/Projects/webxguard.png",
    link: "",
    tech: ["FastAPI", "Flask", "PostgreSQL", "ReactJs", "Groq LLM"],
    source: "https://github.com/hasaan-azeem/",
  };

  return (
    <section id="fyp" className="bg-[#0a0f14] text-white overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="px-4 -mt-60">
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-3">
              <span className="text-[#08aaaa] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                {project.date}
              </span>
              <span className="hidden sm:inline text-white/20">&middot;</span>
              <span className="text-gray-400 text-xs sm:text-sm">
                {project.tagline}
              </span>
            </div>
            <Highlighter action="underline" color="#08aaaa">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                Final Year Project
              </h2>
            </Highlighter>
            <h1 className="mt-2 mb-10 text-4xl sm:text-6xl md:text-7xl font-bold text-white leading-none">
              {project.title}
            </h1>
          </div>
        }
      >
        <div className="relative h-full w-full">
          <picture>
            {/* Mobile Image */}
            <source
              media="(max-width: 767px)"
              srcSet="/Projects/webxmobile.png"
            />

            {/* Desktop / Laptop Image */}
            <img
              src="/Projects/webxguard.png"
              alt={`${project.title} preview`}
              className="absolute inset-0 h-full w-full object-cover object-top"
              draggable={false}
            />
          </picture>

          {(project.link || project.source) && (
            <a
              href={project.link || project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 rounded-2xl"
              aria-label={`Open ${project.title}`}
            />
          )}
        </div>
      </ContainerScroll>

      {/* Content: description, highlights, tech, links, sits below the
          animated scroll card as a normal static block */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 pb-16 sm:pb-20 -mt-40 sm:-mt-55 relative z-10 text-left">
        <p className="text-[#08aaaa] text-xs sm:text-sm font-medium mb-4">
          {project.role}
        </p>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5">
          {project.description}
        </p>

        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
          {project.highlights.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-sm sm:text-base text-gray-300"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#08aaaa] flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-7">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-[11px] sm:text-xs px-2.5 py-1 border border-white/15 text-gray-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[#08aaaa] text-white rounded-xl hover:bg-[#079a9a] transition"
            >
              View Live
            </a>
          )}
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-white/20 text-white rounded-xl hover:bg-white/10 transition"
          >
            View Source
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
