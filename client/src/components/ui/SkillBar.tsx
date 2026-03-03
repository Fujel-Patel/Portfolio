import { motion } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  percentage: number;
  color?: "primary" | "accent";
}

export function SkillBar({ skill, percentage, color = "primary" }: SkillBarProps) {
  const bgColorClass = color === "primary" ? "bg-primary" : "bg-accent";
  
  return (
    <div className="mb-6">
      <div className="flex justify-between items-end mb-2">
        <span className="font-medium text-foreground text-sm tracking-wide">{skill}</span>
        <span className="text-xs text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className={`h-full rounded-full ${bgColorClass} shadow-[0_0_10px_currentColor]`}
        />
      </div>
    </div>
  );
}
