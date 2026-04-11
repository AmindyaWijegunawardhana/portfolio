import React from "react";
import { motion } from "framer-motion";
import { FaTimes, FaGithub, FaFigma } from "react-icons/fa";

const CaseStudy = ({ project, onClose }) => {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-dark-950 to-dark-900 border border-gray-800 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ rotate: 90 }}
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-neon-purple/20 hover:bg-neon-purple/40 rounded-full transition-all"
        >
          <FaTimes size={24} className="text-neon-purple" />
        </motion.button>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-8 md:p-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              {project.title}
            </h1>
            <div className="flex flex-col md:flex-row gap-6 text-gray-300 mb-6">
              <div>
                <span className="text-neon-cyan font-semibold">Role:</span>{" "}
                {project.role}
              </div>
              <div>
                <span className="text-neon-cyan font-semibold">Impact:</span>{" "}
                {project.impact}
              </div>
            </div>
            <div className="flex gap-3 flex-wrap">
              {project.designLink && (
                <motion.a
                  href={project.designLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <FaFigma size={18} />
                  View Prototype
                </motion.a>
              )}
              {project.github && !project.designLink && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <FaGithub size={18} />
                  View Repository
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Problem Statement */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-neon-blue mb-4">
              Problem Statement
            </h2>
            <div className="bg-white/5 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </div>
          </motion.div>

          {/* Research */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-neon-purple mb-4">
              Research & Insights
            </h2>
            <div className="mb-6 bg-white/5 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-300 mb-4">
                <span className="text-neon-cyan font-semibold">Research:</span>{" "}
                {project.caseStudy.research}
              </p>
              <div className="space-y-3">
                {project.caseStudy.insights.map((insight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-neon-blue mt-1">→</span>
                    <span className="text-gray-300">{insight}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">
              Results & Metrics
            </h2>
            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30 rounded-xl p-6">
              <p className="text-gray-300 text-lg">
                {project.caseStudy.metrics}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudy;
