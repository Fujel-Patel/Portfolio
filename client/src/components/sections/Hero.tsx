import { Component, type ErrorInfo, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from "@assets/Profile_1772130950894.png";
import ProfileModel3D from '../canvas/ProfileModel3D';

class Canvas3DErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error('3D Canvas error:', error, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <img src={profileImg} alt="Fujel Patel" className="max-h-[400px] rounded-2xl object-cover" />
        </div>
      );
    }
    return this.props.children;
  }
}

export function Hero() {
  return (
    <motion.section 
      id="home" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 relative overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="order-2 lg:order-1 text-center lg:text-left relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-medium text-primary mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for work
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Hi, I'm <br/>
            <span className="text-gradient-cyan">Fujel Patel</span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
            Web Developer turning ideas into fast, responsive web apps using React and the MERN stack.
          </h2>
          
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <a 
              href="#projects"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </a>
            <a 
              href="#contact"
              className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl glass-panel text-foreground font-semibold text-sm sm:text-base hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-5 sm:gap-6 mt-8 sm:mt-12 justify-center lg:justify-start">
            <SocialLink href="https://github.com" icon={<Github />} />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
            <SocialLink href="mailto:patelfujel5@gmail.com" icon={<Mail />} />
          </div>
        </motion.div>

        {/* 3D Interactive Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="order-1 lg:order-2 flex justify-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] w-full relative z-0"
        >
          <Canvas3DErrorBoundary>
            <ProfileModel3D />
          </Canvas3DErrorBoundary>
        </motion.div>
      </div>

      <motion.a 
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors z-10"
      >
        <ArrowDown size={24} />
      </motion.a>
    </motion.section>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
