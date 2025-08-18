import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const skillsRef = useRef([]);

  const skills = [
    {
      name: "HTML",
      level: 95,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
          <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
          <path
            fill="#FFF"
            d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
          ></path>
          <path
            fill="#EEE"
            d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
          ></path>
        </svg>
      ),
    },
    {
      name: "CSS",
      level: 90,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
          <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
          <path
            fill="#FFF"
            d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
          ></path>
          <path
            fill="#EEE"
            d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
          ></path>
        </svg>
      ),
    },
    {
      name: "JavaScript",
      level: 75,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
          <path
            fill="#000001"
            d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947z M17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
          ></path>
        </svg>
      ),
    },
    {
      name: "React",
      level: 75,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path
            fill="#80deea"
            d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
          ></path>
          <path
            fill="#80deea"
            d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3.4-6.2,6.9-11.6,10.4-15.7C29.4-0.6,32.6-1.7,35.3,1	c2.8,2.8,1.7,6.5-2.4,10.7c-4.1,4.2-9.7,8.5-16.1,12.6c-4.7,3-9.1,6.2-12.8,9.5c-2.9,2.7-5.6,5.4-7.8,8.1C15.8,42.7,15.5,43.7,15.1,44.6z"
          ></path>
          <path
            fill="#80deea"
            d="M32.9,44.6c-4.3,0-9.9-2.9-15.9-8.4c-6-5.5-11.2-12.5-14.6-19.6C-1.9,7.8-1.3,2.1,2.4-1.6	C6.1-5.3,11.4-4.7,20.3,2.1c0.6,0.5,1.2,1,1.8,1.5c6.6,5.1,12.9,11.5,18.2,18.6c5.3,7.1,9.3,14.3,11.6,20.9	c2.3,6.6,2.8,12.2,1.4,16.4C52,63.1,47.9,65.2,43.6,65.2c-1.4,0-2.7-0.2-4-0.7C37.4,63.8,35.1,44.6,32.9,44.6z"
          ></path>
          <circle fill="#80deea" cx="24" cy="24" r="4"></circle>
        </svg>
      ),
    },
    {
      name: "Node.js",
      level: 50,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path
            fill="#388e3c"
            d="M17.204 19.122l-4.907 2.715C12.113 21.938 12 22.126 12 22.329v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717C22.887 28.152 23 27.965 23 27.762v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076-.103 0-.205.025-.297.076"
          ></path>
          <path
            fill="#37474f"
            d="M24.024 4C12.958 4 4.024 12.935 4.024 24s8.935 20 20 20 20-8.935 20-20S35.089 4 24.024 4zM24.024 7c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17S14.65 7 24.024 7"
          ></path>
          <path
            fill="#2e7d32"
            d="M23.693 19.005c-.103 0-.205.025-.297.076l-4.906 2.715C18.307 21.898 18.194 22.085 18.194 22.288v5.433c0 .203.113.39.297.492l4.908 2.717c.183.101.41.101.593 0l4.907-2.717c.184-.102.297-.289.297-.492v-5.433c0-.203-.113-.39-.297-.492l-4.906-2.715c-.092-.051-.195-.076-.297-.076m.297 2.715l3.67 2.031v3.84l-3.67 2.031-3.67-2.031v-3.84l3.67-2.031"
          ></path>
        </svg>
      ),
    },
    {
      name: "Express.js",
      level: 40,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="m2 17 10 5 10-5"></path>
          <path d="m2 12 10 5 10-5"></path>
        </svg>
      ),
    },
    {
      name: "Git",
      level: 88,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path
            fill="#F4511E"
            d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8L3.8,22.1c-1,1-1,2.8,0,3.8l16.3,16.3	c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8L42.2,25.9C43.2,24.9,43.2,23.1,42.2,22.1z"
          ></path>
          <path
            fill="#FFF"
            d="M33.7,24l-8.4-8.4c-0.6-0.6-1.5-0.6-2.1,0L14.3,24c-0.6,0.6-0.6,1.5,0,2.1l8.9,8.9c0.6,0.6,1.5,0.6,2.1,0L34.2,26C34.7,25.5,34.7,24.5,33.7,24z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Flutter",
      level: 60,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"></polygon>
          <polygon fill="#40c4ff" points="38,22 27,33 21,27 32,16"></polygon>
          <polygon fill="#29b6f6" points="27,33 38,44 32,44 21,33"></polygon>
          <polygon fill="#0277bd" points="21,33 27,33 21,27"></polygon>
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Animate title
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    // Animate skill cards
    gsap.fromTo(
      skillsRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    // Animate progress bars individually
    skillsRef.current.forEach((el, index) => {
      const bar = el.querySelector(".progress-bar");
      const text = el.querySelector(".progress-text");

      if (!bar || !text) return;

      gsap.set(bar, { width: "0%" });
      gsap.set(text, { opacity: 0 });

      gsap.to(bar, {
        width: `${skills[index].level}%`,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });

      gsap.to(text, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
    });

    // Hover effects
    skillsRef.current.forEach((el) => {
      if (!el) return;
      el.addEventListener("mouseenter", () => {
        gsap.to(el, { scale: 1.05, y: -6, duration: 0.3, ease: "power2.out" });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { scale: 1, y: 0, duration: 0.3, ease: "power2.out" });
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="section-skills"
      ref={sectionRef}
      className="flex flex-col justify-center items-center  rounded-3xl py-6 min-h-screen  dark:bg-gray-800"
    >
      <h1
        ref={titleRef}
        className="font-[apna3] text-6xl sm:text-[5vw] font-bold text-black dark:text-white mb-10"
      >
        Skills
      </h1>

      <div className="w-full max-w-6xl px-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            ref={(el) => (skillsRef.current[index] = el)}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
          >
            <div className="flex items-center mb-6">
              <div className="mr-4 p-2 bg-gray-50 rounded-xl">{skill.icon}</div>
              <h3 className="text-xl font-bold text-gray-800">{skill.name}</h3>
            </div>

            <div className="relative mb-4">
              <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                <div
                  className="progress-bar h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative transition-all duration-1000"
                  style={{ width: "0%" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-75 animate-pulse"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 font-medium">
                  Proficiency
                </span>
                <span className="progress-text text-sm font-bold text-gray-800 opacity-0">
                  {skill.level}%
                </span>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 dark:text-gray-200 text-lg mb-4 font-medium">
          Always learning, always growing
        </p>
        <div className="flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Skills;
