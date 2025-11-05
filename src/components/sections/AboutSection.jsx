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

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image Section */}
          <motion.div
            whileHover={{ scale: 1.04, rotateY: 6 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
            className="relative group perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/25 via-cyan-500/25 to-blue-500/25 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative bg-slate-900/70 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-6 shadow-[0_0_40px_-10px_rgba(0,0,255,0.4)] hover:shadow-[0_0_80px_-10px_rgba(0,255,255,0.4)] transition-all duration-700">
              <motion.img
                src={profileImage}
                alt="Kumar Abhishek"
                className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700 shadow-2xl"
                whileHover={{ rotateX: 2, rotateY: -2 }}
              />
            </div>
          </motion.div>

          {/* About Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-8 bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl hover:border-blue-400/50 transition-all duration-500"
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
              <span className="text-cyan-400">Data Science</span>, and{" "}
              <span className="text-blue-400">Deep Learning</span>.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I specialize in building intelligent, data-driven solutions and
              deploying end-to-end ML models. My interest lies in{" "}
              <span className="text-blue-400">AI-driven healthcare</span>,
              exploring ECG signal analysis and medical recommendation systems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I’m not coding, I contribute to{" "}
              <span className="text-blue-400">AAVESH</span> (technical club) and
              explore literature through{" "}
              <span className="text-cyan-400">EUNOIA</span>.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3 text-gray-400">
              {[
                ["📧", "abhishek.kr0418@gmail.com"],
                ["📱", "+91 9608013812"],
                ["🎓", "B.Tech (ECE) - IIIT Una"],
                ["💼", "Available for Freelance"],
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
                  value: "13+",
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
                  className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-center shadow-lg text-white`}
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
            {/* Vertical Timeline Line Animation */}
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
                {/* Glowing Dot with Pulse */}
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
                  {/* Glow Overlay Animation */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  />

                  {/* Card Content */}
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
