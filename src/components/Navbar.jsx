import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", key: "home" },
    { name: "About Me", key: "about" },
    { name: "Services", key: "services" },
    { name: "Projects", key: "projects" },
    { name: "Contact Me", key: "contact" },
  ];

  const handleClick = (key) => {
    onNavigate(key);
    setIsOpen(false); // close mobile menu on click
  };

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-md">
      {/* Main nav container */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">Amal</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className="cursor-pointer hover:text-cyan-400 transition duration-300"
              onClick={() => handleClick(item.key)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer text-cyan-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 text-lg font-medium bg-black space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className="cursor-pointer hover:text-cyan-400 transition duration-300"
              onClick={() => handleClick(item.key)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
