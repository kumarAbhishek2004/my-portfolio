import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <h2 className="text-6xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="relative bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="w-full aspect-square bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl flex items-center justify-center text-9xl overflow-hidden border border-blue-500/20">
                👨‍💻
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
                Hello, I'm Kumar Abhishek
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Ambitious <span className="text-blue-400 font-semibold">Electronics and Communication Engineering</span> student from <span className="text-cyan-400">IIIT Una</span>, passionate about Machine Learning, Data Science, and Deep Learning.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Skilled in building data-driven solutions, deploying ML models, and optimizing performance. Currently exploring the fascinating intersection of AI and healthcare through projects like ECG signal processing and medical assistance systems.
              </p>
              <p className="text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me contributing to technical clubs like <span className="text-blue-400">AAVESH</span> or diving into literature with <span className="text-cyan-400">EUNOIA</span>.
              </p>

              <div className="mt-8 space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">📧</span>
                  <span>abhishek.kr0418@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">📱</span>
                  <span>+91 9608013812</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">📍</span>
                  <span>Una, India</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">🎓</span>
                  <span>B.Tech (ECE) - IIIT Una</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">💼</span>
                  <span>Available for Freelance</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'CGPA', value: '7.78', icon: '📚', color: 'from-blue-600 to-blue-700' },
                { label: 'Projects', value: '13+', icon: '💼', color: 'from-purple-600 to-purple-700' },
                { label: 'Skills', value: '20+', icon: '⚡', color: 'from-cyan-600 to-cyan-700' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`bg-gradient-to-br ${stat.color} backdrop-blur-xl rounded-2xl p-6 text-center shadow-xl`}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-gray-200 font-medium mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <h3 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Education
          </h3>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 origin-top hidden md:block"
            />

            {[
              {
                degree: 'B.Tech in Electronics and Communication Engineering',
                institution: 'IIIT Una',
                year: '2021 - Present',
                grade: 'CGPA: 7.78',
                icon: '🎓',
                color: 'from-blue-500 to-purple-500'
              },
              {
                degree: 'Class 12 (CBSE)',
                institution: 'Delhi Model Public School',
                year: '2021',
                grade: 'Marks: 85%',
                icon: '📚',
                color: 'from-purple-500 to-cyan-500'
              },
              {
                degree: 'Class 10 (CBSE)',
                institution: 'D.A.V. Public School',
                year: '2019',
                grade: 'Marks: 92.4%',
                icon: '📖',
                color: 'from-cyan-500 to-blue-500'
              }
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative mb-12 md:ml-20"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.1 }}
                  className={`absolute -left-[3.25rem] top-6 w-6 h-6 bg-gradient-to-br ${edu.color} rounded-full shadow-lg hidden md:block border-2 border-gray-900`}
                />

                <motion.div 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 shadow-2xl hover:border-blue-500/50 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">{edu.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">{edu.degree}</h4>
                      <p className="text-cyan-400 text-lg mb-2">{edu.institution}</p>
                      <p className="text-gray-500 text-sm mb-3">{edu.year}</p>
                      <p className="text-blue-400 font-bold text-lg">{edu.grade}</p>
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
