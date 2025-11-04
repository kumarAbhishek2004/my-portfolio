import { motion } from "framer-motion";
import NeuralNetwork from "../ui/NeuralNetwork";
import RoleSlider from "../ui/RoleSlider";

const HeroSection = () => {
  const downloadFile = (file, name) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = name;
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#050a18] via-[#0b132a] to-[#050a18] pt-20">
      {/* Neural background animation */}
      <NeuralNetwork />

      {/* Subtle glow lights */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="text-center z-10 px-4 max-w-6xl mx-auto"
      >
        {/* Name with unified gradient */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight mb-6"
        >
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-[length:200%_200%] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,255,0.4)]"
          >
            KUMAR&nbsp;ABHISHEK
          </motion.span>
        </motion.h1>

        {/* Animated underline */}
        <motion.div
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="h-[3px] w-96 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
        />

        {/* Role slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10"
        >
          <RoleSlider />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
        >
          Building intelligent systems with creativity and precision.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="flex flex-wrap gap-6 justify-center"
        >
          {/* Resume */}
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(0,255,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              downloadFile("/resume.pdf", "Kumar_Abhishek_Resume.pdf")
            }
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-500"
          >
            📄 Download Resume
          </motion.button>

          {/* CV */}
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(0,140,255,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => downloadFile("/cv.pdf", "Kumar_Abhishek_CV.pdf")}
            className="px-8 py-4 bg-slate-900/70 border border-cyan-500/30 text-cyan-300 rounded-xl font-semibold backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/70 hover:text-cyan-100"
          >
            📋 Download CV
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-14 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 18, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.7)]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
