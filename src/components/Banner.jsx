import React from 'react';
import { FaCode, FaLaptopCode, FaPaintBrush } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Banner() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center min-h-screen bg-black text-white px-6 md:px-20 pt-[100px] md:pt-[80px] pb-10">
      {/* Left Section */}
      <motion.div 
        className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-xl md:text-2xl text-cyan-300 font-medium">Hi, I'm</h2>

        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-cyan-200 to-white bg-clip-text text-transparent drop-shadow-lg">
          Amal. S
        </h1>

        <div className="h-[3px] w-32 bg-cyan-400 mx-auto md:mx-0 rounded-full mb-2"></div>

        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed">
          A Passionate <span className="text-cyan-400 font-semibold">Web Developer</span> &{' '}
          <span className="text-cyan-300 font-semibold">Designer</span> crafting modern, responsive web experiences.
        </p>

        <motion.div 
          className="flex justify-center md:justify-start gap-6 text-cyan-400 text-2xl mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <FaCode title="Developer" className="hover:text-cyan-300 transition" />
          <FaLaptopCode title="Full Stack" className="hover:text-cyan-300 transition" />
          <FaPaintBrush title="Designer" className="hover:text-cyan-300 transition" />
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div 
        className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.img 
          src="../bannerPic.png" 
          alt="Banner"
          className="w-[65%] md:w-[75%] drop-shadow-[0_0_25px_rgba(0,255,255,0.6)] rounded-xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
}

export default Banner;
