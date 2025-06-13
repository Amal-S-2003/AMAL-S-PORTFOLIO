import React from 'react';
import { FaCode, FaPaintBrush, FaSearch, FaBullhorn, FaUserCheck } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    icon: <FaCode />,
    description:
      'I build responsive, scalable, and high-performance web applications using the MERN stack. Clean code, modern features, and speed guaranteed.',
    example: 'Example: E-commerce platform, Chat App, Admin Dashboard',
  },
  {
    title: 'Web Design',
    icon: <FaPaintBrush />,
    description:
      'Elegant and user-friendly web interfaces tailored to your brand. Focused on UI/UX, accessibility, and visual appeal.',
    example: 'Example: Portfolio, Landing Page, Blog UI',
  },
  {
    title: 'SEO Optimization',
    icon: <FaSearch />,
    description:
      'Improve your website’s search engine ranking, speed, and discoverability using proven white-hat SEO practices.',
    example: 'Example: SEO-optimized service site with 90+ PageSpeed score',
  },
//   {
//     title: 'Branding',
//     icon: <FaBullhorn />,
//     description:
//       'Create a strong and consistent identity for your brand — including logos, color schemes, and typography.',
//     example: 'Example: Logo + Design system for startups',
//   },
//   {
//     title: 'UI/UX Audit',
//     icon: <FaUserCheck />,
//     description:
//       'In-depth analysis of your product’s user interface and experience. Get actionable improvements and design fixes.',
//     example: 'Example: Audit report + wireframes for SaaS dashboard',
//   },
];

function Services() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16 md:px-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">My Services</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-cyan-500/40 transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] group"
          >
            <div className="text-cyan-400 text-4xl mb-4 group-hover:rotate-6 transition duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <p className="text-sm text-cyan-200 italic mb-6">{service.example}</p>
            {/* <button className="bg-cyan-500 text-black font-semibold px-4 py-2 rounded-lg hover:bg-cyan-400 transition duration-300">
              Get a Quote
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
