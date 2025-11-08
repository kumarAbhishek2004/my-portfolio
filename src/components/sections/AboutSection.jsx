import { motion } from "framer-motion";
import profileImage from "./profile_image.png";

const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-b from-[#0a0f1f] via-[#0e162b] to-[#0a0f1f] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Profile Image Section (Enhanced Circular Glow + Animation) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-center justify-center group h-full"
          >
            {/* Animated Gradient Ring */}
            <motion.div
              className="absolute w-full h-full rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-600 blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Outer Glowing Border */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full aspect-square max-w-[32rem] rounded-full p-[3px] bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-600 shadow-[0_0_80px_-10px_rgba(0,255,255,0.4)] hover:shadow-[0_0_120px_-10px_rgba(0,255,255,0.7)] transition-all duration-700"
            >
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
                className="w-full h-full rounded-full bg-slate-900/70 backdrop-blur-xl border-2 border-blue-400/50 overflow-hidden flex items-center justify-center relative"
              >
                <motion.img
                  src={profileImage}
                  alt="Kumar Abhishek"
                  className="w-full h-full object-cover rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Orbiting Particles */}
                <motion.div
                  className="absolute top-8 right-8 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.8)]"
                  animate={{
                    x: [0, 15, 0, -15, 0],
                    y: [0, -15, 0, 15, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute bottom-12 left-12 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                  animate={{
                    x: [0, -10, 0, 10, 0],
                    y: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Subtle Blue Aura Behind */}
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl -z-10 scale-110" />
          </motion.div>

          {/* About Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-6 bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-10 shadow-2xl hover:border-blue-400/50 transition-all duration-500"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Hello, I'm Kumar Abhishek 👋
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm an{" "}
              <span className="text-blue-400 font-semibold">
                Electronics and Communication Engineering
              </span>{" "}
              student at{" "}
              <span className="text-cyan-400">IIIT Una</span>, passionate about{" "}
              <span className="text-blue-400">Machine Learning</span>,{" "}
              <span className="text-cyan-400">Deep Learning</span>, and{" "}
              <span className="text-purple-400">Generative AI</span>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I specialize in building intelligent, data-driven solutions using{" "}
              <span className="text-blue-400">LangChain</span>,{" "}
              <span className="text-cyan-400">LangGraph</span>, and{" "}
              <span className="text-purple-400">MCP frameworks</span>. From{" "}
              <span className="text-blue-400">RAG-powered chatbots</span> and{" "}
              <span className="text-cyan-400">AI newsletter automation</span> to{" "}
              <span className="text-purple-400">interactive dashboards</span> with{" "}
              <span className="text-blue-400">Excel</span> and{" "}
              <span className="text-cyan-400">Power BI</span>—I transform data into actionable insights.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond academics, I actively contribute to{" "}
              <span className="text-blue-400 font-semibold">AAVESH</span>, our technical club, while nurturing my creative side through{" "}
              <span className="text-cyan-400 font-semibold">EUNOIA</span>, the literature club.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3 text-gray-400">
              {[
                ["📧", "abhishek.kr0418@gmail.com"],
                ["📱", "+91 9608013812"],
                ["🎓", "B.Tech (ECE) - IIIT Una"],
                ["💼", "Open to Opportunities"],
              ].map(([icon, text], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-blue-400">{icon}</span>
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="grid grid-cols-3 gap-4 mt-10"
            >
              {[
                {
                  label: "CGPA",
                  value: "7.79",
                  icon: "📚",
                  color: "from-blue-600 to-blue-700",
                },
                {
                  label: "Projects",
                  value: "11+",
                  icon: "💼",
                  color: "from-purple-600 to-purple-700",
                },
                {
                  label: "Skills",
                  value: "20+",
                  icon: "⚡",
                  color: "from-cyan-600 to-cyan-700",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -6, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250, damping: 12 }}
                  className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-center shadow-lg text-white relative z-10`}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-extrabold">{stat.value}</div>
                  <div className="text-sm text-gray-200 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32"
        >
          <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h3>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Timeline Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 rounded-full origin-top hidden md:block"
            />

            {[
              {
                degree: "B.Tech in Electronics and Communication Engineering",
                institution: "IIIT Una",
                year: "2023 - Present",
                grade: "CGPA: 7.79",
                icon: "🎓",
                color: "from-blue-500 to-purple-500",
              },
              {
                degree: "Class 12 (CBSE)",
                institution: "Delhi Model Public School",
                year: "2022",
                grade: "Marks: 85%",
                icon: "📚",
                color: "from-purple-500 to-cyan-500",
              },
              {
                degree: "Class 10 (CBSE)",
                institution: "D.A.V. Public School",
                year: "2020",
                grade: "Marks: 92.4%",
                icon: "📖",
                color: "from-cyan-500 to-blue-500",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="relative mb-12 md:ml-20"
              >
                {/* Glowing Dot */}
                <motion.div
                  className={`absolute -left-[3.25rem] top-6 w-6 h-6 bg-gradient-to-br ${edu.color} rounded-full hidden md:block border-2 border-gray-900`}
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(0,255,255,0.3)",
                      "0 0 25px rgba(0,255,255,0.6)",
                      "0 0 10px rgba(0,255,255,0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Education Card */}
                <motion.div
                  whileHover={{
                    scale: 1.04,
                    x: 8,
                    boxShadow: "0px 0px 40px rgba(0,255,255,0.25)",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 12,
                  }}
                  className="bg-slate-900/70 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden group"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  />
                  <div className="flex items-start gap-6 relative z-10">
                    <motion.div
                      initial={{ scale: 0.8, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.2, duration: 0.6 }}
                      className="text-5xl"
                    >
                      {edu.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                        {edu.degree}
                      </h4>
                      <p className="text-cyan-400 text-lg mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-gray-500 text-sm mb-3">{edu.year}</p>
                      <p className="text-blue-400 font-bold text-lg">
                        {edu.grade}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;