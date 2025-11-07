import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  // Helper: Handle correct demo URL logic
  const getDemoLink = (demo) => {
    if (!demo) return null;
    if (demo.startsWith("/")) return demo; // local /public HTML
    if (demo.startsWith("http")) return demo; // full URL
    return `https://${demo}`; // fallback for raw domains
  };

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* ===== Section Header ===== */}
        <h2 className="text-6xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-center text-gray-400 mb-20 text-xl">
          Explore my work — {projects.length} projects and counting
        </p>

        {/* ===== Project Grid ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-slate-900/70 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-6 shadow-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] transition-all duration-500 flex flex-col justify-between"
            >
              {/* === Title + Icon === */}
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                {project.title}
              </h3>

              {/* === Description === */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* === Tech Stack === */}
              {project.tech && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-slate-800/80 border border-blue-500/20 text-cyan-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* === Buttons === */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {/* Live Demo / HTML Preview Button */}
                {project.demo && (
                  <motion.a
                    href={getDemoLink(project.demo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(0,255,255,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-md hover:shadow-cyan-500/40 transition-all"
                  >
                     Live Demo
                  </motion.a>
                )}

                {/* Preview Image Button (for IPL, FNP) */}
                {!project.demo && project.image && (
                  <motion.button
                    onClick={() => setActiveImage(project.image)}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(0,255,255,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-md hover:shadow-cyan-500/40 transition-all"
                  >
                     Preview
                  </motion.button>
                )}

                {/* GitHub Code Button */}
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(0,140,255,0.4)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 text-center px-5 py-3 bg-slate-800/70 border border-cyan-500/30 text-cyan-300 rounded-xl font-semibold hover:border-cyan-400/70 hover:text-cyan-100 transition-all"
                  >
                     View Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== Show More / Less Button ===== */}
        {projects.length > 6 && (
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl text-lg font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            >
              {showAll ? "← Show Less" : `View All ${projects.length} Projects →`}
            </motion.button>
          </div>
        )}
      </motion.div>

      {/* ===== Image Modal for Previews ===== */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              alt="Project Preview"
              className="max-w-3xl w-[90%] rounded-2xl shadow-2xl border border-cyan-500/40"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <motion.button
              className="absolute top-6 right-8 text-white text-3xl font-bold hover:text-cyan-400"
              onClick={() => setActiveImage(null)}
              whileHover={{ scale: 1.2 }}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
