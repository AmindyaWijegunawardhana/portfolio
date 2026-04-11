import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/projectsData';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const skillColors = ['from-neon-blue', 'from-neon-purple', 'from-neon-cyan', 'from-pink-500'];

  return (
    <section id="skills" className="py-20 md:py-32 bg-dark-950 relative overflow-hidden px-4 md:px-8">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-gray-300 text-lg">Tools, technologies, and design abilities</p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-gradient-to-br ${skillColors[index] || 'from-neon-blue'}/10 border border-gray-800 rounded-2xl p-8 hover:border-${skillColors[index]}/50 transition-all duration-300 group`}
              >
                <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${skillColors[index]} to-transparent bg-clip-text text-transparent`}>
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"></div>
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Showcase */}
          <motion.div variants={itemVariants} className="bg-white/5 border border-gray-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-8">Proficiency Levels</h3>
            <div className="space-y-6">
              {[
                { skill: 'UI/UX Design', level: 95 },
                { skill: 'Figma', level: 98 },
                { skill: 'React Development', level: 85 },
                { skill: 'Design Systems', level: 92 },
              ].map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-300">{item.skill}</span>
                    <span className="text-neon-blue">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1.5 }}
                      className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
