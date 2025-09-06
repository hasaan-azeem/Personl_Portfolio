import React from "react";
import EducationSection from "./EducationSection";

export default function SkillsSection() {
 const skills = [
  { img: "skills/html.png", name: "HTML" },
  { img: "skills/css.webp", name: "CSS" },
  { img: "skills/JS.png", name: "JavaScript" },
  { img: "skills/reactjs.png", name: "React.js" },
  { img: "skills/tailwindcss.png", name: "Tailwind CSS" },
  { img: "skills/boot.jpeg", name: "Bootstrap" },
  { img: "skills/nodejs.webp", name: "Node.js" },
  { img: "skills/mongodb.png", name: "MongoDB" },
  { img: "skills/mysql.png", name: "MySQL" },
  { img: "skills/flutter.png", name: "Flutter" },
  { img: "skills/cpp.svg", name: "C++" },
  { img: "skills/msql.svg", name: "MS SQL Server" },
  { img: "skills/github.png", name: "Git & GitHub" },
  { img: "skills/wordpress.png", name: "WordPress" },
];


  return (
    <section id="skills" className="py-8 bg-gray-50">
      <EducationSection/>

      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6">
        Skills
      </h2>
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-3 bg-white shadow-md rounded-xl hover:shadow-lg transition"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12 object-contain mb-2"
              />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

