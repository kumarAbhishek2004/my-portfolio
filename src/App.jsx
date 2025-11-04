import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { config } from './config/theme';
import {
  NavigationBar,
  Footer,
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ContactSection
} from './components';

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState('hero');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (currentSection !== section) {
              setCurrentSection(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection]);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${config.colors.bg} text-white overflow-x-hidden relative`}>
      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
        
        h1, h2, h3 {
          font-family: 'Orbitron', sans-serif;
        }
        
        body {
          overflow-x: hidden;
          background-color: #030712;
        }
        
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.4);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3B82F6, #8B5CF6, #06B6D4);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #60A5FA, #A78BFA, #22D3EE);
        }
      `}</style>

      {/* Navigation Bar */}
      <NavigationBar activeSection={currentSection} />

      {/* Sections */}
      <div id="hero">
        <HeroSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="skills">
        <SkillsSection />
      </div>
      
      <div id="projects">
        <ProjectsSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>

      <Footer />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
