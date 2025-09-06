import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

const education = [
  {
    img: "/uog.png",
    degree: "BS Information Technology",
    school: "University of Gujrat",
    duration: "2022 - Present",
    description:
      "Building a strong foundation in Information Technology with a focus on software engineering, databases, and modern web technologies. Gained hands-on experience through academic and personal projects using the MERN stack, real-time applications, and collaborative teamwork."
  },
  {
    img: "/aspire.png",
    degree: "Intermediate in Computer Science",
    school: "Aspire College Gujranwala",
    duration: "2019 - 2021",
    description:
      "Completed intermediate studies with a specialization in Computer Science, focusing on programming, problem-solving, and IT fundamentals. Developed practical skills through projects involving web technologies and gained a strong base for pursuing advanced studies in software development."
  }
];

export default function EducationSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="flex flex-col justify-center mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8 pt-3 pb-10"
      id="education"
    >
      <h2 className="text-3xl sm:text-5xl font-bold mb-8 text-center">
        Education
      </h2>
      <div className="space-y-6 sm:space-y-8">
        {education.map((item, index) => (
          <div
            key={index}
            className="pb-4 cursor-pointer border-b border-gray-200"
            onClick={() => toggleOpen(index)}
          >
            {/* Header */}
            <div className="flex justify-between items-center group px-2">
              {/* Left Side: Logo + School + Degree */}
              <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                <img
                  src={item.img}
                  alt={item.school}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full shadow-sm bg-white flex-shrink-0"
                />
                <div className="truncate">
                  <h3 className="text-sm sm:text-xl font-semibold flex items-center gap-2">
                    {item.school}
                    {openIndex === index ? (
                      <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition flex-shrink-0" />
                    )}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base truncate">
                    {item.degree}
                  </p>
                </div>
              </div>

              {/* Right Side: Dates */}
              <div className="text-gray-500 text-sm sm:text-base flex-shrink-0 pl-4 text-right">
                {item.duration}
              </div>
            </div>

            {/* Expandable Content */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-3 px-2"
                >
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
