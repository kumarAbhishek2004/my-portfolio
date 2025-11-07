import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/myzbryzj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto relative z-10"
      >
        {/* Heading */}
        <h2 className="text-6xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Contact
        </h2>
        <p className="text-center text-gray-400 mb-20 text-xl">
          Get in touch for collaborations and opportunities
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* ====== Contact Info ====== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <motion.a
                  href="mailto:abhishek.kr0418@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-5 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    📧
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="text-lg font-medium">
                      abhishek.kr0418@gmail.com
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+919608013812"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-5 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    📱
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Phone</div>
                    <div className="text-lg font-medium">+91 9608013812</div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-5 text-gray-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    📍
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="text-lg font-medium">Una, India</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* ====== Social Links ====== */}
            <div className="bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-5">
                <motion.a
                  href="https://linkedin.com/in/kumar-abhishek-6b5828288"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  <FaLinkedin />
                </motion.a>

                <motion.a
                  href="https://github.com/kumarAbhishek2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg hover:shadow-gray-500/40 transition-all"
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/abhishek_____0707/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg hover:shadow-pink-500/50 transition-all"
                >
                  <FaInstagram />
                </motion.a>

                <motion.a
                  href="https://x.com/_abhishek_0707"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, rotate: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg hover:shadow-sky-500/50 transition-all"
                >
                  <FaTwitter />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* ====== Contact Form ====== */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-blue-400 mb-3 font-semibold text-lg">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-slate-800/80 border border-blue-500/30 rounded-2xl text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-blue-400 mb-3 font-semibold text-lg">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-slate-800/80 border border-blue-500/30 rounded-2xl text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-blue-400 mb-3 font-semibold text-lg">
                  Message
                </label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-slate-800/80 border border-blue-500/30 rounded-2xl text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === "sending"}
                className="w-full px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "✓ Message Sent!"
                  : status === "error"
                  ? "⚠️ Error! Try Again"
                  : "Send Message "}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
