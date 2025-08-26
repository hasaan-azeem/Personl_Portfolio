import React, { useEffect, useState } from "react";

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
    title: "Introduction to Front-End Development",
    issuer: "Meta - Coursera",
    date: "March 2025",
    link: "https://coursera.org/share/df4833a0a48f3f476c976623ac19592d",
    category: "Frontend",
    preview:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~V22ETE78PFKF/CERTIFICATE_LANDING_PAGE~V22ETE78PFKF.jpeg",
  },
  {
    title: "SQL for Data Science",
    issuer: "University of California, Davis - Coursera",
    date: "May 2025",
    link: "https://coursera.org/share/f9d43825c2cba511ed8a32dae55dbf52",
    category: "Database",
    preview:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~THCG159AA3Z6/CERTIFICATE_LANDING_PAGE~THCG159AA3Z6.jpeg",
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta - Coursera",
    date: "March 2025",
    link: "https://coursera.org/share/7f4ea68f64b36596f63378e90aacf2cf",
    category: "Programming",
    preview:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~VVMRVW380ZRM/CERTIFICATE_LANDING_PAGE~VVMRVW380ZRM.jpeg",
  },
];

const Certification = () => {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className=" ">
        <h2 className="font-[apna3] justify-center text-center py-3 text-md sm:text-lg bg-[#dadada]">
          Where creativity meets code.
        </h2>
      </div>
    <section
      id="certifications"
      className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 rounded-3xl dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-[4vw] font-[apna] font-bold text-center text-black dark:text-white mb-2">
          Certifications
        </h2>

        {/* Rotating tagline */}
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-10 min-h-[1.5rem] transition-opacity duration-500 ease-in-out">
          {taglines[taglineIndex]}
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={cert.preview}
                alt={`${cert.title} certificate`}
                className="w-full h-auto rounded-md object-cover mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {cert.issuer} • {cert.date}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
              >
                View Credential →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Certification;
