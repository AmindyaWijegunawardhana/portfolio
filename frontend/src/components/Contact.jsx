import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Replace with your backend API endpoint
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      setStatus("error");
      console.error("Error sending message:", error);
      setTimeout(() => setStatus(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-dark-950 relative overflow-hidden px-4 md:px-8"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-neon-blue rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-gray-300 text-lg">
              Have a project in mind? Let's create something amazing together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            {[
              { icon: "📧", label: "Email", value: "amindyanw911@gmail.com" },
              {
                icon: "📍",
                label: "Location",
                value: "Embilipitiya, Sri Lanka",
              },
              {
                icon: "💼",
                label: "Available For",
                value: "Full-time & Projects",
              },
            ].map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-gray-800 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-3">{info.icon}</div>
                <h3 className="font-semibold text-gray-300 mb-1">
                  {info.label}
                </h3>
                <p className="text-neon-blue">{info.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex justify-center gap-6"
          >
            {[
              { icon: "🐙", label: "GitHub" },
              { icon: "💼", label: "LinkedIn" },
              { icon: "🐦", label: "Twitter" },
              { icon: "📱", label: "Dribbble" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 border border-gray-700 rounded-full flex items-center justify-center text-2xl hover:border-neon-blue/50 transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
