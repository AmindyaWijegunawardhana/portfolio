import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/AmindyaWijegunawardhana", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/amindya-wijegunawardhana-bab29b346/", label: "LinkedIn" },

  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },

  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-dark-950 to-black border-t border-gray-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Main Footer Content */}}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent mb-4 cursor-default inline-block"
            >
              DESIGNER
            </motion.h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transforming ideas into stunning digital experiences through
              creative design and innovative solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, color: "#00d9ff" }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-400 hover:border-neon-blue/50 transition-all duration-300"
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-neon-blue transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 my-12"></div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <motion.p variants={itemVariants} className="text-gray-400 text-sm">
            &copy; {currentYear} Designer Portfolio. All rights reserved.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex gap-6 md:gap-8 flex-wrap justify-center md:justify-end"
          >
            {legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-neon-blue text-sm transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-gray-900/50 border border-gray-700 rounded-full text-gray-400 hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300"
            title="Back to top"
          >
            <FaArrowRight size={20} className="transform -rotate-90" />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
