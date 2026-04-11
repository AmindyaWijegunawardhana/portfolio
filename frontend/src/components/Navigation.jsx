import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Navigation = ({ scrollToSection }) => {
  const { isDark, toggleTheme } = useTheme();

  const navItems = ["About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark-950/80 backdrop-blur-lg border-b border-gray-800 z-40 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
        ></motion.div>

        {/* Nav Items */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-300 hover:text-neon-blue transition-colors relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-300"></span>
            </motion.button>
          ))}
        </div>

        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
        >
          {isDark ? (
            <FaSun size={20} className="text-neon-cyan" />
          ) : (
            <FaMoon size={20} className="text-neon-purple" />
          )}
        </motion.button>
      </div>
    </nav>
  );
};

export default Navigation;
