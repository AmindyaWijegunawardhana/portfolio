import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaTools, FaAward } from "react-icons/fa";

const Expertise = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const expertiseCards = [
    {
      id: 1,
      title: "Education",
      icon: FaGraduationCap,
      color: "text-neon-blue",
      content: [
        "BSc in Computer Engineering (Undergraduate)",
        "Currently pursuing my degree with a strong focus on both technical development and user-centered design principles.",
      ],
      type: "text",
    },
    {
      id: 2,
      title: "Skills",
      icon: FaCode,
      color: "text-neon-purple",
      content: [
        "UI/UX Design",
        "Wireframing & Prototyping",
        "Responsive Design",
        "User-Centered Thinking",
      ],
      type: "list",
    },
    {
      id: 3,
      title: "Tools",
      icon: FaTools,
      color: "text-neon-cyan",
      content: ["Figma", "React", "HTML, CSS, JavaScript", "Adobe XD"],
      type: "list",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-dark-950 to-dark-900 relative overflow-hidden px-4 md:px-8">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float delay-1000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent mb-4">
              My Expertise
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my education, skills, tools, and
              certifications
            </p>
          </motion.div>

          {/* Expertise Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {expertiseCards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  variants={itemVariants}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Glassmorphism Card */}
                  <div className="relative overflow-hidden rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/8 to-white/3 border border-white/20 p-8 h-full hover:border-white/50 transition-all duration-300 hover:shadow-2xl hover:shadow-neon-blue/20 group-hover:bg-gradient-to-br group-hover:from-white/12 group-hover:to-white/5">
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 group-hover:from-neon-blue/15 group-hover:to-neon-purple/15 transition-all duration-300 pointer-events-none"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon and Title */}
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`p-4 bg-gradient-to-br from-white/15 to-white/5 rounded-xl ${card.color} group-hover:from-white/25 group-hover:to-white/10 transition-all duration-300 group-hover:scale-110`}
                        >
                          <Icon size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                          {card.title}
                        </h3>
                      </div>

                      {/* Content Rendering */}
                      {card.type === "text" ? (
                        <div className="space-y-4">
                          {card.content.map((text, idx) => (
                            <p
                              key={idx}
                              className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300"
                            >
                              {text}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-3">
                          {card.content.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300"
                            >
                              <span className="text-neon-blue mt-1.5">→</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Bottom Border Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
