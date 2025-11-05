import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-blue-500/20 relative">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="h-0.5 w-96 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
