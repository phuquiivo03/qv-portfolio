import React from 'react';
import { Code, Database, Layout, Server, Terminal, Blocks } from 'lucide-react';

// Define color mapping for all class variations we need
const colorVariants = {
  'neon-blue': {
    border: 'border-neon-blue/30 hover:border-neon-blue',
    shadow: 'hover:shadow-neon-blue',
    bg: 'bg-neon-blue/20',
    text: 'text-neon-blue',
    dot: 'bg-neon-blue'
  },
  'neon-purple': {
    border: 'border-neon-purple/30 hover:border-neon-purple',
    shadow: 'hover:shadow-neon-purple',
    bg: 'bg-neon-purple/20',
    text: 'text-neon-purple',
    dot: 'bg-neon-purple'
  },
  'neon-green': {
    border: 'border-neon-green/30 hover:border-neon-green',
    shadow: 'hover:shadow-neon-green',
    bg: 'bg-neon-green/20',
    text: 'text-neon-green',
    dot: 'bg-neon-green'
  },
  'neon-pink': {
    border: 'border-neon-pink/30 hover:border-neon-pink',
    shadow: 'hover:shadow-neon-pink',
    bg: 'bg-neon-pink/20',
    text: 'text-neon-pink',
    dot: 'bg-neon-pink'
  },
  'neon-yellow': {
    border: 'border-neon-yellow/30 hover:border-neon-yellow',
    shadow: 'hover:shadow-neon-yellow',
    bg: 'bg-neon-yellow/20',
    text: 'text-neon-yellow',
    dot: 'bg-neon-yellow'
  }
};

const SkillCard = ({ title, icon, skills, color, delay }: { 
  title: string; 
  icon: React.ReactNode; 
  skills: string[]; 
  color: string;
  delay: string;
}) => {
  const colorClasses = colorVariants[color as keyof typeof colorVariants];
  
  return (
    <div 
      className={`p-6 rounded-lg bg-muted/40 backdrop-blur-sm border ${colorClasses.border} 
                 transition-all duration-300 ${colorClasses.shadow} group animate-fadeIn opacity-0`} 
      style={{ animationDelay: delay }}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 
                     ${colorClasses.bg} ${colorClasses.text} group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, i) => (
          <li key={i} className="text-gray-300 flex items-center">
            <span className={`inline-block w-2 h-2 rounded-full ${colorClasses.dot} mr-2`}></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      color: "neon-blue",
      skills: ["React & Next.js", "TypeScript", "Tailwind CSS", "Frontend State Management"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "neon-purple",
      skills: ["Node.js", "Express", "API Development", "Authentication Systems"]
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6" />,
      color: "neon-green",
      skills: ["SQL & NoSQL", "MongoDB", "PostgreSQL", "Database Design"]
    },
    {
      title: "Blockchain Development",
      icon: <Blocks className="w-6 h-6" />,
      color: "neon-pink",
      skills: ["Sui Network", "Aptos Network", "Near protocol", "Solana"]
    },
    {
      title: "Development Tools",
      icon: <Terminal className="w-6 h-6" />,
      color: "neon-yellow",
      skills: ["Git & GitHub", "Docker", "CI/CD", "Testing Frameworks"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "neon-blue",
      skills: ["JavaScript", "TypeScript", "Python", "HTML/CSS"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background/40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-neon-purple text-shadow-neon-purple">My</span> Skills
          </h2>
          <div className="h-1 w-20 bg-neon-purple rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            I specialize in a wide range of technologies across the full stack development spectrum.
            Here are the skills and technologies I work with:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index} 
              title={category.title} 
              icon={category.icon} 
              skills={category.skills} 
              color={category.color}
              delay={`${0.2 + (index * 0.1)}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
