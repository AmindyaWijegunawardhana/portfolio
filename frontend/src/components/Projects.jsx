import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaFigma } from "react-icons/fa";
import { projects } from "../data/projectsData";
import CaseStudy from "./CaseStudy";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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

  const filteredProjects = projects;

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-gradient-to-b from-dark-950 to-dark-900 relative overflow-hidden px-4 md:px-8"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-300 text-lg">
              Showcase of my best work and case studies
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  exit={{ opacity: 0, y: 20 }}
                  layout
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border border-gray-800 group-hover:border-neon-blue/50 transition-all duration-300 h-96">
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950 group-hover:from-dark-950/80 group-hover:via-dark-950/40 transition-all duration-300"></div>

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-blue transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 group-hover:opacity-100 opacity-75 transition-opacity">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Impact & GitHub Button */}
                      <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 gap-4">
                        <span className="text-neon-cyan text-sm font-semibold flex-1">
                          {project.impact}
                        </span>
                        {project.designLink && (
                          <motion.a
                            href={project.designLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-neon-purple/20 hover:bg-neon-purple/40 rounded-full transition-all duration-300 flex-shrink-0"
                            title="View Prototype"
                          >
                            <FaFigma size={18} className="text-neon-purple" />
                          </motion.a>
                        )}
                        {project.github && !project.designLink && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-neon-purple/20 hover:bg-neon-purple/40 rounded-full transition-all duration-300 flex-shrink-0"
                            title="View Repository"
                          >
                            <FaGithub size={18} className="text-neon-purple" />
                          </motion.a>
                        )}
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="text-neon-purple text-lg"
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudy
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
