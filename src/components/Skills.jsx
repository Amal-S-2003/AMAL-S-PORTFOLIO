import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsData = [
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST API", "Socket.IO"],
  },
  {
    category: "Dev Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "NPM", "Vite"],
  },
  {
    category: "Others",
    skills: ["Firebase", "JWT", "Responsive Design", "Mongoose", "EJS"],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 md:px-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400" data-aos="fade-down">
        My Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {skillsData.map((section, index) => (
          <div
            key={index}
            className="bg-[#0f172a] rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/40 transition-shadow duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">{section.category}</h3>
            <ul className="space-y-2">
              {section.skills.map((skill, i) => (
                <li key={i} className="text-gray-300 hover:text-white transition-colors">
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
