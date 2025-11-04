import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="min-h-screen py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <h2 className="text-6xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <p className="text-center text-gray-400 mb-20 text-xl">
          Explore my work - {projects.length} projects and counting
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More / View Less Button */}
        {projects.length > 6 && (
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl text-lg font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            >
              {showAll ? '← Show Less' : `View All ${projects.length} Projects →`}
            </motion.button>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
