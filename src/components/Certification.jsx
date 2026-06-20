import React, { useEffect, useState } from "react";
import { Highlighter } from "@/components/ui/highlighter";
import { ArrowUpRight } from "lucide-react";

const taglines = [
  "Proof of progress, one certificate at a time.",
  "From self-taught to certified.",
  "Consistency creates capability.",
  "Knowledge backed by credentials.",
  "Learning never stops, and neither do I.",
  "Each certificate tells a story of dedication.",
  "Verified skills, real results.",
  "Credentials that validate the grind.",
  "Not just theory, certified practice.",
  "Every certificate is a checkpoint in the journey.",
];

const certifications = [
  {
    label: "Front-End",
    title: "Introduction to Front-End Development",
    issuer: "Meta - Coursera",
    date: "March 2025",
    proves: "Can structure and style a real web page from scratch.",
    link: "https://coursera.org/share/df4833a0a48f3f476c976623ac19592d",
    category: "Frontend",
    preview: "/Certifications/Front-End.jpg",
  },
  {
    label: "AWS DevOps",
    title: "Getting Started with DevOps on AWS",
    issuer: "AWS Training & Certification",
    date: "February 2026",
    proves: "Understands CI/CD basics and AWS deployment workflows.",
    link: "blob:https://skillbuilder.aws/51d610bc-019e-48cb-bfa7-fff79035330d",
    category: "DevOps",
    preview: "/Certifications/aws-devops.jpg",
  },
  {
    label: "JavaScript",
    title: "Programming with JavaScript",
    issuer: "Meta - Coursera",
    date: "March 2025",
    proves: "Solid grasp of core JS, the language behind every project here.",
    link: "https://coursera.org/share/7f4ea68f64b36596f63378e90aacf2cf",
    category: "Programming",
    preview: "/Certifications/JavaScript.jpg",
  },
  {
    label: "CloudFormation",
    title: "AWS CloudFormation",
    issuer: "AWS Training & Certification",
    date: "February 2026",
    proves: "Can define and provision cloud infrastructure as code.",
    link: "blob:https://skillbuilder.aws/885e7182-6f99-4b76-bbff-4a9e3d6d0042",
    category: "Cloud",
    preview: "/Certifications/Cloud.jpg",
  },
  {
    label: "SQL",
    title: "SQL for Data Science",
    issuer: "University of California, Davis - Coursera",
    date: "May 2025",
    proves: "Comfortable querying and reasoning about relational data.",
    link: "https://coursera.org/share/f9d43825c2cba511ed8a32dae55dbf52",
    category: "Database",
    preview: "/Certifications/SQL.jpg",
  },
];

const Certification = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [flipped, setFlipped] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="certifications"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-gray-50 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-3">
        <Highlighter action="underline" color="#FF9800">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Certifications
          </h2>
        </Highlighter>
        <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-2xl mx-auto h-5">
          {taglines[taglineIndex]}
        </p>
      </div>
      <p className="text-center text-gray-400 text-xs mb-8 sm:hidden">
        Tap a card to flip it
      </p>
      <p className="text-center text-gray-400 text-xs mb-8 hidden sm:block">
        Hover a card to see what it proves
      </p>

      {/* Horizontal scroll deck */}
      <div className="max-w-6xl mx-auto -mx-4 sm:mx-auto px-4 sm:px-0">
        <div className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 sm:pb-4 scrollbar-hide">
          {certifications.map((cert, index) => {
            const isFlipped = flipped === index;
            const tilt = index % 2 === 0 ? "-rotate-1" : "rotate-1";

            return (
              <div
                key={index}
                className="snap-center shrink-0 w-72 sm:w-80 lg:w-96 h-96 sm:h-[26rem] lg:h-[28rem] [perspective:1200px]"
                onClick={() =>
                  setFlipped((prev) => (prev === index ? null : index))
                }
              >
                <div
                  className={`group relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${tilt} hover:rotate-0 cursor-pointer ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  } sm:hover:[transform:rotateY(180deg)]`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                    <img
                      src={cert.preview}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-medium px-2 py-0.5 bg-white/90 text-gray-900 rounded-full">
                      {cert.category}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-base leading-snug">
                        {cert.label}
                      </p>
                      <p className="text-white/60 text-xs mt-1">{cert.date}</p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl border border-gray-800 shadow-sm bg-[#0a0f14] text-white p-5 flex flex-col">
                    <span className="text-[10px] font-medium px-2 py-0.5 border border-white/20 text-gray-300 rounded-full self-start mb-3">
                      {cert.category}
                    </span>

                    <h3 className="text-base font-semibold leading-snug mb-2">
                      {cert.title}
                    </h3>

                    <p className="text-gray-400 text-xs mb-4">
                      {cert.issuer} &middot; {cert.date}
                    </p>

                    <p className="text-gray-300 text-sm leading-relaxed flex-1">
                      {cert.proves}
                    </p>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-4 inline-flex items-center justify-center gap-1.5 text-xs font-medium px-3 py-2 bg-[#08aaaa] text-white rounded-lg hover:bg-[#079a9a] transition"
                    >
                      View credential
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certification;
