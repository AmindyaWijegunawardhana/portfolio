import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const Hero = ({ onExplore }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-gradient-to-b from-dark-950 via-dark-950 to-dark-900 pt-32 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float delay-1000"></div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,233,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-10"></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-4 sm:px-6 w-full"
      >
        {/* Profile Photo and Name - Horizontal Layout */}
        <div className="mb-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
          {/* Profile Photo */}
          <div className="flex-shrink-0 relative w-64 h-64">
            {/* Glowing Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan rounded-full blur-lg opacity-50"></div>
            {/* Profile Image */}
            <img
              src="/images/profile photo.png"
              alt="Amindya Nimeshani"
              className="relative w-full h-full rounded-full border-4 border-dark-950 object-cover shadow-2xl"
            />
          </div>

          {/* Name and Title */}
          <div className="text-left flex-1">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent mb-2">
              Amindya Nimeshani
            </h2>
            <p className="text-neon-cyan text-xl font-semibold mt-4 tracking-wide">
              Undergraduate in Computer Engineering
            </p>
          </div>
        </div>

        {/* Centered Content Below */}
        <div className="text-center">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-neon-blue text-lg font-semibold tracking-widest uppercase">
              Welcome to my digital space
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="text-white">Experiences</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            UI/UX Designer crafting intuitive digital experiences that blend
            aesthetics with functionality
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={onExplore}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(14, 165, 233, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl font-semibold text-white hover:shadow-glow-blue transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-neon-cyan rounded-xl font-semibold text-neon-cyan hover:bg-neon-cyan hover:text-dark-950 transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <FaChevronDown size={24} className="text-neon-blue" />
      </motion.div>
    </section>
  );
};

export default Hero;
