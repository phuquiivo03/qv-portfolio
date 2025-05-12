
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  repoLink: string;
  color: string;
}



const projects: Project[] = [
  {
    id: 1,
    title: "Suistack",
    description: "A platform that empowers users to develop, build, deploy, and visualize smart contracts on the Sui network with ease. Includes tools for interacting with contracts through actions like minting NFTs and transferring assets.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    tags: ["Node.js", "Sui Network", "MongoDB"],
    liveLink: "#",
    repoLink: "#",
    color: "neon-blue"
  },
  {
    id: 2,
    title: "Wecastle",
    description: "An on-chain game integrated with the Sui network, developed with Unity, React, and NestJS.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    tags: ["Unity", "React", "NestJS", "MongoDB", "Sui Network"],
    liveLink: "#",
    repoLink: "https://github.com/Weminal-labs/wecastle-contract",
    color: "neon-green"
  },
  {
    id: 3,
    title: "Wedata",
    description: "An on-chain platform for storing and trading data, built with NEAR protocol.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    tags: ["React", "TypeScript", "NEAR Protocol"],
    liveLink: "#",
    repoLink: "https://github.com/phuquiivo03/wedata",
    color: "neon-purple"
  },
  {
    id: 4,
    title: "Wecycler",
    description: "An on-chain platform for storing and trading data, similar to Wedata, utilizing NEAR protocol.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    tags: ["React", "TypeScript", "NEAR Protocol"],
    liveLink: "#",
    repoLink: "https://github.com/phuquiivo03/Wecycler",
    color: "neon-orange"
  },
  {
    id: 5,
    title: "Deepsynth",
    description: "An AI-powered agent that simplifies DeFi interactions like trading, limit orders, staking, and portfolio tracking across multiple platforms.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    tags: ["Node.js", "MongoDB", "Cetus Protocols", "Sui Network"],
    liveLink: "#",
    repoLink: "#",
    color: "neon-red"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative rounded-xl overflow-hidden group animate-fadeIn opacity-0"
      style={{ animationDelay: `${0.2 + (project.id * 0.1)}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10"></div>
      
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
        <h3 className={`text-2xl font-bold mb-2 text-${project.color}`}>{project.title}</h3>
        <p className="text-gray-300 mb-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className={`text-xs font-medium px-2 py-1 rounded-full bg-${project.color}/20 text-${project.color} border border-${project.color}/40`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3 opacity-0 transform translate-y-4 transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
          <a 
            href={project.liveLink} 
            className={`p-2 rounded-full bg-${project.color}/20 text-${project.color} hover:bg-${project.color}/40 transition-colors duration-300`}
            aria-label="View live project"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
          <a 
            href={project.repoLink} 
            className={`p-2 rounded-full bg-${project.color}/20 text-${project.color} hover:bg-${project.color}/40 transition-colors duration-300`}
            aria-label="View GitHub repository"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-neon-green text-shadow-neon-green">My</span> Projects
          </h2>
          <div className="h-1 w-20 bg-neon-green rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
            Each project demonstrates different aspects of my capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="neon-button"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
