import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../ui/ProjectCard';
import { Button } from '@/components/ui/button';

export function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const projects = [
    {
      title: "Food Delivery App",
      description: "Food delivery app with Redux, Tailwind CSS. Comprehensive food delivery platform featuring a mobile-first design.",
      tags: ["React.js", "Redux", "Tailwind CSS", "REST API"],
      githubUrl: "https://github.com/Fujel-Patel/Meal",
      liveUrl: "https://meal-delta-ten.vercel.app/",
      imageUrl: "https://api.microlink.io/?url=https://meal-delta-ten.vercel.app/&screenshot=true&meta=false&embed=screenshot.url"
    },
    {
      title: "Real-Time Chat Application",
      description: "Chat app using MERN stack, Socket.IO, JWT auth. Secure, real-time messaging application supporting multiple users.",
      tags: ["React Hooks", "Node.js", "Socket.IO", "JWT", "MongoDB"],
      githubUrl: "https://github.com/Fujel-Patel/Chat-WebApplication",
      liveUrl: "https://chat-web-application-eqt3.vercel.app/login",
      imageUrl: "https://api.microlink.io/?url=https://chat-web-application-eqt3.vercel.app/login&screenshot=true&meta=false&embed=screenshot.url"
    }
  ];

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <motion.section 
      id="projects" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="min-h-screen py-16 sm:py-24 relative flex items-center overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">Featured <span className="text-gradient-purple">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
          <p className="mt-4 sm:mt-6 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            A selection of my recent work, highlighting my expertise in building functional, performant, and visually engaging web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {currentProjects.map((project, index) => (
              <ProjectCard key={`${currentPage}-${index}`} index={index} {...project} />
            ))}
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-4">
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full transition-colors ${
                    currentPage === i + 1 ? 'bg-primary text-white' : 'bg-secondary hover:bg-secondary/80'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <Button 
              variant="outline" 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </motion.section>
  );
}
