import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import React, { forwardRef } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  index: number;
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ title, description, tags, githubUrl, liveUrl, imageUrl, index }, ref) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        viewport={{ once: true }}
        style={{ perspective: 1000 }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="glass-panel rounded-2xl h-full flex flex-col group relative overflow-hidden transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
        >
          {/* Project Image */}
          <div className="relative h-[160px] sm:h-[200px] overflow-hidden rounded-t-2xl border-b border-white/5">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative group/img">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg flex items-center gap-2">
                  <ExternalLink size={20} />
                  View Live
                </span>
              </div>
            </a>
          </div>

            <div className="p-4 sm:p-6 flex flex-col flex-grow" style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground font-display group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed flex-grow text-xs sm:text-sm">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <Github size={18} />
                  GitHub
                </a>
              )}
              {liveUrl && (
                <a 
                  href={liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 text-sm font-medium ml-auto"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';
