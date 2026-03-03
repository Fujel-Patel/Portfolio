import { motion } from 'framer-motion';
import { SkillBar } from '../ui/SkillBar';
import { Code2, Database, LayoutTemplate, Terminal } from 'lucide-react';

export function About() {
  const education = [
    { degree: "MCA", school: "Sigma University", period: "2025 - 2027" },
    { degree: "B.Sc. Chemistry", school: "VNSGU", period: "2020 - 2023" },
    { degree: "Diploma in Computer Eng", school: "GTU", period: "2022 - 2025" },
  ];

  return (
    <motion.section 
      id="about" 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="min-h-screen py-16 sm:py-24 relative flex items-center overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">About <span className="text-gradient-cyan">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Bio & Education */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl">
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Based in Bharuch, Gujarat, I am a passionate web developer dedicated to crafting exceptional digital experiences. My journey spans from a foundation in Chemistry to a deep dive into Computer Engineering and Computer Applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in the MERN stack and modern frontend frameworks like React.js, always striving to build applications that are not just functional, but performant and visually stunning.
              </p>
            </div>

            <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl">
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-6">Education</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-accent before:to-transparent">
                {education.map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10" />
                    <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm shadow">
                      <h4 className="font-bold text-foreground">{item.degree}</h4>
                      <p className="text-sm text-primary mb-1">{item.school}</p>
                      <time className="text-xs text-muted-foreground font-mono">{item.period}</time>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-5 sm:p-8 rounded-2xl sm:rounded-3xl h-full">
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-6 sm:mb-8">Technical Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <LayoutTemplate size={20} />
                    <h4 className="font-semibold text-foreground">Frontend</h4>
                  </div>
                  <SkillBar skill="React.js / Hooks" percentage={90} />
                  <SkillBar skill="HTML5 & CSS3" percentage={95} />
                  <SkillBar skill="Tailwind CSS" percentage={85} />
                  <SkillBar skill="Redux / Context API" percentage={80} />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 mb-4 text-accent">
                    <Database size={20} />
                    <h4 className="font-semibold text-foreground">Backend & DB</h4>
                  </div>
                  <SkillBar skill="Node.js & Express" percentage={80} color="accent" />
                  <SkillBar skill="MongoDB" percentage={75} color="accent" />
                  <SkillBar skill="MySQL" percentage={70} color="accent" />
                  <SkillBar skill="RESTful APIs" percentage={85} color="accent" />
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 mb-6 text-foreground">
                  <Terminal size={20} />
                  <h4 className="font-semibold">Languages & Tools</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'TypeScript', 'Git', 'GitHub', 'Socket.IO', 'JWT'].map((tool, index) => (
                    <motion.span 
                      key={tool} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="px-4 py-2 rounded-lg bg-secondary text-sm font-medium text-secondary-foreground border border-white/5 hover:border-primary/50 transition-colors"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
