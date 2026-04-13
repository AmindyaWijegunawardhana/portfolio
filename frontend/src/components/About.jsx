import React from "react";
import { motion } from "framer-motion";

const About = () => {
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

  const timeline = [
    {
      year: "2022",
      event: "Started my journey into technology and creativity",
      icon: "🌱",
    },
    {
      year: "2023",
      event: "Discovered UI/UX design and began learning design tools",
      icon: "🎨",
    },
    {
      year: "2024",
      event: "Built projects combining design and development",
      icon: "💻",
    },
    {
      year: "Present",
      event:
        "Growing into a UI/UX designer focused on meaningful user experiences",
      icon: "🚀",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-dark-950 relative overflow-hidden px-4 md:px-8"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Content - Centered */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                About Me
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Undergraduate Computer Engineering student at the University of
                Ruhuna with hands-on experience in web and mobile application
                development. Skilled in React, Flutter, and database-driven
                systems. Passionate about building user-friendly applications
                and eager to gain real-world industry experience through a
                software engineering internship.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-md border border-neon-blue/20 rounded-xl p-4 hover:border-neon-blue/50 transition-all duration-300">
                <div className="text-2xl font-bold text-neon-blue">50+</div>
                <div className="text-gray-300 text-sm">Projects</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-neon-cyan/20 rounded-xl p-4 hover:border-neon-cyan/50 transition-all duration-300">
                <div className="text-2xl font-bold text-neon-cyan">500K+</div>
                <div className="text-gray-300">Users Impacted</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-neon-purple/20 rounded-xl p-4 hover:border-neon-purple/50 transition-all duration-300">
                <div className="text-2xl font-bold text-neon-purple">15+</div>
                <div className="text-gray-300">Awards & Recognition</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-pink-500/20 rounded-xl p-4 hover:border-pink-500/50 transition-all duration-300">
                <div className="text-2xl font-bold text-pink-500">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={itemVariants}
          className="mt-20 pt-20 border-t border-gray-800"
        >
          <h3 className="text-3xl font-bold mb-12 text-center">My Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-neon-blue font-semibold text-sm mb-2">
                    {item.year}
                  </div>
                  <p className="text-gray-300">{item.event}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-1 bg-gradient-to-r from-neon-blue to-transparent opacity-30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
