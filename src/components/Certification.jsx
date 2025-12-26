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
   <section id="certifications" className="py-8 px-4 sm:px-6 lg:px-12 bg-gray-50">
  {/* Heading */}
  <div className="text-center mb-8">
    <h2 className="text-2xl sm:text-3xl font-bold mb-2">Certifications</h2>
    <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
      {taglines[taglineIndex]}
    </p>
  </div>

  {/* Certifications Grid */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {certifications.map((cert, index) => (
      <div
        key={index}
        className="border rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col"
      >
        {/* Certificate Image */}
        <a href={cert.link} target="_blank" rel="noopener noreferrer">
          <img
            src={cert.preview}
            alt={`${cert.title} certificate`}
            className="w-full h-40 sm:h-44 object-cover rounded-md mb-4"
          />
        </a>

        {/* Content */}
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{cert.title}</h3>
        <p className="text-gray-400 text-xs mb-3">{cert.issuer} • {cert.date}</p>

        {/* View Credential Button */}
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center px-3 py-1.5 text-xs font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition mt-auto"
        >
          View Credential →
        </a>
      </div>
    ))}
  </div>
</section>

  );
};

export default Certification;
