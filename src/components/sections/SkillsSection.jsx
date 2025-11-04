import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

const SkillsSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <h2 className="text-6xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="text-center text-gray-400 mb-20 text-xl">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    whileHover={{ scale: 1.15, y: -8 }}
                    className="px-4 py-2 bg-slate-800/80 border border-blue-500/30 rounded-full text-sm text-gray-300 cursor-default shadow-lg hover:shadow-blue-500/30 hover:border-blue-500/50 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
