import React from "react";
import EducationSection from "./EducationSection";

export default function SkillsSection() {
 const skills = [
  { img: "skills/html.png", name: "HTML" },
  { img: "skills/css.webp", name: "CSS" },
  { img: "skills/JS.png", name: "JavaScript" },
  { img: "skills/tailwindcss.png", name: "Tailwind" },
  { img: "skills/mongodb.svg", name: "MongoDB" },
  { img: "skills/expressjs.svg", name: "Express.js" },
  { img: "skills/reactjs.png", name: "React.js" },
  { img: "skills/nodejs.webp", name: "Node.js" },
  { img: "skills/mysql.png", name: "MySQL" },
  { img: "skills/flutter.png", name: "Flutter" },
  { img: "skills/firebase.svg", name: "Firebase" },
  { img: "skills/boot.jpeg", name: "Bootstrap" },
  { img: "skills/wordpress.png", name: "WordPress" },
  { img: "skills/cpp.svg", name: "C++" },
  { img: "skills/msql.svg", name: "MSSQL" },
  { img: "skills/github.png", name: "GitHub" },
];


  return (
    <section id="skills" className="py-8 bg-gray-50">
      <EducationSection/>

      <h2 className="text-3xl sm:text-5xl font-bold text-center mb-6">
        Skills
      </h2>
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-2 text-center">
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

