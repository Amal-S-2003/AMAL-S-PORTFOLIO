import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



function Projects() {
  const techOptions = ['All', 'React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'];
  
const allProjects = [
  {
    title: 'Find My Doc',
    images: ['./FindMyDoc1.png', './FindMyDoc2.png'],
    description: 'A doctor appointment booking system where users can easily search for doctors and schedule appointments online.',
    github: 'https://github.com/Amal-S-2003/FindMyDoc',
    live: 'https://your-portfolio.netlify.app',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'React Icons'],
  },
  {
    title: 'Talky',
    images: ['./Talky1.png', './Talky2.png', './Talky3.png'],
    description: 'A real-time chat application supporting one-on-one and group chats. Users can send text messages, share images, and manage group conversations.',
    github: 'https://github.com/Amal-S-2003/Talky-Chat-App',
    live: 'https://ecommerce-demo.netlify.app',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Cloudinary'],
  },
  {
    title: 'Lunch-Loom',
    images: ['./Lunch-Loom1.png', './Lunch-Loom2.png', './Lunch-Loom3.png', './Lunch-Loom4.png', './Lunch-Loom5.png'],
    description: 'A mess management platform where users can discover nearby mess services, subscribe to meal plans (daily/monthly/yearly), and order food online.',
    github: 'https://github.com/Amal-S-2003/Lunch-Loom',
    live: 'https://lunch-loom.netlify.app/',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Treasure Hunt Game',
    images: ['./TreasureHunt.png'],
    description: 'A fun and engaging mind-relaxing game built with interactive UI elements.',
    github: 'https://github.com/Amal-S-2003/Tresure-Hunt',
    live: 'https://amal-s-2003.github.io/Tresure-Hunt/',
    tech: ['React', 'Tailwind CSS'],
  },
  {
    title: 'Spectra',
    images: ['./Spectra.png','./Spectra1.png', './Spectra2.png', './Spectra3.png', './Spectra4.png', './Spectra5.png'],
    description: 'A  front-end design for an e-commerce website showcasing dresses and accessories.',
    github: 'https://github.com/Amal-S-2003/Spectra',
    live: 'https://amal-s-2003.github.io/Spectra/index.html',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'BOAT Clone',
    images: ['./Boat1.png', './Boat2.png','./Boat3.png','./Boat4.png','./Boat5.png',],
    description: 'A front-end clone of the official BOAT website, replicating its layout, design, and responsiveness.',
    github: 'https://github.com/Amal-S-2003/boAt-clone',
    live: 'https://amal-s-2003.github.io/boAt-clone/',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    title: 'Stepz',
    images: ['./Stepz.png'],
    description: 'A clean and stylish front-end design for an online shoe shopping platform.',
    github: 'https://github.com/Amal-S-2003/shoes-mart',
    live: 'https://amal-s-2003.github.io/shoes-mart/',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
];

  const [selectedTech, setSelectedTech] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(allProjects);
  const [modalProject, setModalProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    const filtered = selectedTech === 'All' ? allProjects : allProjects.filter(p => p.tech.includes(selectedTech));
    setVisibleProjects(filtered);
    setShowAll(false); // reset when filter changes
  }, [selectedTech]);

  const projectsToShow = showAll ? visibleProjects : visibleProjects.slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 md:px-24">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">My Projects</h2>

      {/* Filter */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {techOptions.map((tech, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedTech(tech)}
            className={`px-4 py-1 rounded-full border ${
              selectedTech === tech ? 'bg-cyan-500 text-black' : 'border-cyan-500 text-cyan-400'
            } transition`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsToShow.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 cursor-pointer transform hover:-translate-y-2 transition duration-300"
            data-aos="fade-up"
            onClick={() => setModalProject(project)}
          >
            <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-cyan-300">{project.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {visibleProjects.length > 3 && (
        <div className="mt-8 text-center">
          <button
            className="px-6 py-2 border border-cyan-500 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-black transition"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}

      {/* Modal */}
      {modalProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center px-4 py-8">
          <div className="bg-gray-900 p-6 rounded-xl max-w-4xl w-full relative overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 text-white text-xl hover:text-cyan-400"
              onClick={() => setModalProject(null)}
            >
              <FaTimes />
            </button>

            {/* Carousel */}
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              showStatus={false}
              className="rounded-md overflow-hidden"
            >
              {modalProject.images.map((img, i) => (
                <div key={i}>
                  <img src={img} alt={`Slide ${i}`} className="h-auto max-h-[400px] w-full object-contain bg-black" />
                </div>
              ))}
            </Carousel>

            <h3 className="text-2xl font-bold text-cyan-300 mt-4">{modalProject.title}</h3>
            <p className="text-gray-300 mt-3">{modalProject.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {modalProject.tech.map((t, i) => (
                <span key={i} className="bg-cyan-800 px-3 py-1 text-sm rounded-full">{t}</span>
              ))}
            </div>

            <div className="flex gap-6 mt-4">
              <a href={modalProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-400">
                <FaGithub /> GitHub
              </a>
              {/* <a href={modalProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-400">
                <FaExternalLinkAlt /> Live
              </a> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
