import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../../config/theme';

const RoleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % config.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentRole = config.roles[currentIndex];

  return (
    <div className="relative h-20 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 60, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -60, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center gap-4"
        >
          <motion.span
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-5xl"
          >
            {currentRole.icon}
          </motion.span>
          <h2 className={`text-3xl md:text-4xl font-light bg-gradient-to-r ${currentRole.color} bg-clip-text text-transparent`}>
            {currentRole.text}
          </h2>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RoleSlider;
