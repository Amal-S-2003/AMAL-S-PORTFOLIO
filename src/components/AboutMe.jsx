import React, { useEffect } from "react";
import { FaLaptopCode, FaUserAlt, FaLightbulb } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 md:px-24">
      <h2
        className="text-4xl font-bold text-center mb-12 text-cyan-400"
        data-aos="fade-down"
      >
        About Me
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <img
            src="./avatar.jpg"
            alt="Profile"
            className="w-80 mx-auto border-8 border-cyan-400 md:mx-0 rounded-full hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="space-y-6" data-aos="fade-left">
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi! I’m <span className="text-cyan-400 font-semibold">Amal</span>, a{" "}
            <span className="text-white font-bold">MERN Stack Developer</span> passionate
            about crafting elegant, efficient, and scalable web applications.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaUserAlt className="text-cyan-400 text-xl mt-1" />
              <p>
                BCA Graduate, self-taught developer, and open-source enthusiast.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaLaptopCode className="text-cyan-400 text-xl mt-1" />
              <p>
                Skilled in <span className="text-white font-semibold">React.js</span>,{" "}
                <span className="text-white font-semibold">Node.js</span>,{" "}
                <span className="text-white font-semibold">MongoDB</span> & more.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaLightbulb className="text-cyan-400 text-xl mt-1" />
              <p>
                Creative thinker who loves building <span className="text-cyan-300">unique UI/UX</span> and solving real-world problems.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <MdOutlineRocketLaunch className="text-cyan-400 text-2xl mt-1" />
              <p>
                Ready to <span className="text-white font-bold">launch your next big idea</span> into reality 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
