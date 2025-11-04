import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl hover:border-blue-500/50 transition-all h-full flex flex-col">
        {/* Icon */}
        <div className="text-7xl mb-5">{project.icon}</div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-slate-800/60 border border-blue-500/30 rounded-lg text-xs text-gray-300 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Stats */}
        {project.stats && (
          <div className="flex gap-4 text-sm mb-6">
            {project.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-blue-400">{stat.icon}</span>
                <span className="text-gray-400">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
        
        {/* Links - GitHub and Demo */}
        <div className="flex gap-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-5 py-3 bg-slate-800/80 border border-blue-500/30 text-gray-300 rounded-xl text-sm font-semibold hover:bg-slate-800 hover:border-blue-500/50 transition-all text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">💻</span>Project
          </motion.a>
          
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">🚀</span>Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
