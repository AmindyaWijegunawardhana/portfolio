import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm your AI assistant. How can I help you today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const quickReplies = [
    "Tell me about your work",
    "Show me your best project",
    "How can we work together?",
    "What's your expertise?",
  ];

  const handleSendMessage = async (text = input) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: text,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "That's great! I'd love to learn more about that.",
        "Interesting! Can you tell me more?",
        "Absolutely! Let me get you more information.",
        "I'm here to help! What else would you like to know?",
      ];
      const botMessage = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-br from-dark-950 to-dark-900 border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-blue to-neon-purple p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-white">AI Assistant</h3>
                <p className="text-xs text-gray-200">Always here to help</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-all"
              >
                <FaTimes size={18} className="text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => {
                const isUser = msg.sender === "user";
                const divStyles = {
                  maxWidth: "320px",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: isUser
                    ? "rgba(14, 165, 233, 0.2)"
                    : "rgba(255, 255, 255, 0.05)",
                  border: isUser
                    ? "1px solid rgba(14, 165, 233, 0.5)"
                    : "1px solid rgb(55, 65, 81)",
                  color: "#d1d5db",
                };

                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div style={divStyles}>{msg.text}</div>
                  </motion.div>
                );
              })}
              {loading && (
                <div className="flex gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-2 rounded-full bg-neon-blue"
                  ></motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 rounded-full bg-neon-blue"
                  ></motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 rounded-full bg-neon-blue"
                  ></motion.div>
                </div>
              )}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 py-2 space-y-2 border-t border-gray-800">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleSendMessage(reply)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "8px 12px",
                      fontSize: "12px",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgb(55, 65, 81)",
                      borderRadius: "4px",
                      color: "#d1d5db",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.1)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor =
                        "rgba(255, 255, 255, 0.05)")
                    }
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-800 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message..."
                style={{
                  flex: 1,
                  backgroundColor: "rgba(17, 24, 39, 0.5)",
                  border: "1px solid rgb(55, 65, 81)",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  color: "white",
                  fontSize: "14px",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgb(14, 165, 233)";
                  e.target.style.boxShadow = "0 0 0 1px rgb(14, 165, 233)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgb(55, 65, 81)";
                  e.target.style.boxShadow = "none";
                }}
              />
              <button
                onClick={() => handleSendMessage()}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "rgb(14, 165, 233)",
                  borderRadius: "8px",
                  color: "white",
                  cursor: "pointer",
                  border: "none",
                  transition: "all 0.3s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "rgb(2, 132, 199)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "rgb(14, 165, 233)")
                }
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "relative",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background:
            "linear-gradient(to bottom right, rgb(14, 165, 233), rgb(168, 85, 247))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          border: "none",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 25px rgba(14, 165, 233, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 10px 25px -5px rgba(0, 0, 0, 0.3)";
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "linear-gradient(to bottom right, rgb(14, 165, 233), rgb(168, 85, 247))",
            opacity: 0,
          }}
        ></motion.div>
        <FaCommentDots size={28} />
      </motion.button>
    </div>
  );
};

export default AIChat;
