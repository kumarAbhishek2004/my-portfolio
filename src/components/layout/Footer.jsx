import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-blue-500/20 relative">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              scaleX: [0, 1, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="h-0.5 w-96 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full mb-10"
          />
          
          <p className="text-gray-300 text-xl mb-6">
            Crafted with <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500 inline-block"
            >❤️</motion.span> by <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-bold">Kumar Abhishek</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-base mb-8">
            <span>© 2024 Kumar Abhishek</span>
            <span>•</span>
            <span>Full-Stack AI Engineer</span>
            <span>•</span>
            <span>Una, India</span>
          </div>
        </motion.div>

        {/* Activities */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <span className="text-blue-400">⚡</span>
            <span>Member, AAVESH (Technical Club)</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">📚</span>
            <span>Member, EUNOIA (Literature Club)</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
