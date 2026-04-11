import React from 'react';
import { motion } from 'framer-motion';
import { experience, achievements } from '../data/projectsData';

const Experience = () => {
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

  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-dark-950 to-dark-900 relative overflow-hidden px-4 md:px-8">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Achievements</h2>
            <p className="text-gray-300 text-lg">Professional journey and milestones</p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-neon-cyan">Career Timeline</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="bg-white/5 border border-gray-800 hover:border-neon-blue/50 rounded-xl p-6 md:p-8 transition-all duration-300 relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full border-4 border-dark-950 hidden md:block"></div>

                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-neon-blue font-bold text-sm md:text-base">{exp.year}</div>
                    </div>
                    <div className="md:col-span-3">
                      <h4 className="text-xl font-bold text-white mb-2">{exp.role}</h4>
                      <p className="text-neon-cyan font-semibold mb-2">{exp.company}</p>
                      <p className="text-gray-400">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl font-bold mb-8 text-neon-purple">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, boxShadow: '0 0 30px rgba(14, 165, 233, 0.2)' }}
                  className="bg-gradient-to-br from-white/10 to-white/5 border border-gray-800 rounded-xl p-6 text-center"
                >
                  <div className="text-5xl mb-4">{achievement.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
