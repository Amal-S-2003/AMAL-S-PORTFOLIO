import React, { useEffect } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Education() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const educationData = [
    {
      title: "ME(A)RN Stack",
      institution: "Luminar Technologies, Kochi",
      year: "2025",
    },
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "College of Applied Science, Mavelikkara",
      year: "2021 - 2024",
    },
    {
      title: "Plus Two",
      institution: "POPE PIUS XI HSS, Kattanam",
      year: "2021",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 md:px-24">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">Education</h2>

      <div className="relative max-w-3xl mx-auto before:absolute before:top-0 before:left-6 before:h-full before:w-1 before:bg-cyan-600/40">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="relative pl-16 pb-12"
            data-aos="fade-up"
          >
            {/* Glowing Dot */}
            <span className="absolute left-4 top-2 w-4 h-4 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/40"></span>

            {/* Card */}
            <div className="bg-gray-900 p-6 rounded-lg border border-cyan-600/20 hover:shadow-md hover:shadow-cyan-500/30 transition">
              <div className="flex items-center gap-3 mb-2">
                <FaGraduationCap className="text-cyan-400 text-xl" />
                <h3 className="text-xl font-semibold text-cyan-300">{item.title}</h3>
              </div>
              <p className="text-gray-300">{item.institution}</p>
              <p className="text-sm text-gray-400 mt-1">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
