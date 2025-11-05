import { motion } from "framer-motion";
import NeuralNetwork from "../ui/NeuralNetwork";
import RoleSlider from "../ui/RoleSlider";

const HeroSection = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Kumar_Abhishek_Resume.pdf";
    link.click();
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Kumar_Abhishek_CV.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <NeuralNetwork />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center z-10 px-4 max-w-5xl mx-auto"
      >
        {/* ================== Name & Title ================== */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-6 px-2 sm:px-4"
        >
          <motion.h1
            className="
              font-black 
              text-center 
              bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 
              bg-clip-text text-transparent 
              mb-6 tracking-tight 
              leading-[1.1] 
              whitespace-normal 
              break-words
            "
            style={{
              fontSize: "clamp(2.5rem, 10vw, 6rem)", // Scales smoothly
              animation: "gradientFlow 6s ease-in-out infinite",
              backgroundSize: "200% auto",
            }}
          >
            KUMAR <br className="sm:hidden" /> ABHISHEK
          </motion.h1>

          <motion.div
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="h-1 w-56 sm:w-80 mx-auto bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"
          />
        </motion.div>

        {/* ================== Role Slider ================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <RoleSlider />
        </motion.div>

        {/* ================== Tagline ================== */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-lg sm:text-2xl text-gray-400 mb-10 sm:mb-12 max-w-3xl mx-auto font-light tracking-wide px-4 leading-relaxed"
        >
          Building intelligent systems with creativity and precision.
        </motion.p>

        {/* ================== Buttons ================== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all flex items-center gap-2 text-sm sm:text-base"
          >
            <span>📄</span> Download Resume
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadCV}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/60 backdrop-blur-xl border border-blue-500/30 text-gray-300 rounded-xl font-semibold hover:bg-slate-800 hover:border-blue-500/50 transition-all flex items-center gap-2 text-sm sm:text-base"
          >
            <span>📋</span> Download CV
          </motion.button>
        </motion.div>

        {/* ================== Scroll Indicator ================== */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 sm:bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 sm:w-8 h-10 sm:h-12 border-2 border-blue-400/50 rounded-full flex items-start justify-center p-1.5 sm:p-2">
            <motion.div
              animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Gradient Flow Animation */}
      <style>
        {`
          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
