
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10 space-y-8 text-center">
        <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-xl md:text-2xl text-neon-green font-mono mb-2">
            Hello, I'm a
          </h2>
        </div>

        <div className="overflow-hidden">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-4 animate-fadeIn opacity-0" style={{ animationDelay: '0.4s' }}>
            <span className="text-neon-blue text-shadow-neon animate-pulse">Full</span>
            <span className="text-neon-purple text-shadow-neon-purple">stack</span>{" "}
            <span className="text-neon-pink text-shadow-neon-pink">Dev</span>
            <span className="text-neon-green text-shadow-neon-green">eloper</span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fadeIn opacity-0" style={{ animationDelay: '0.6s' }}>
          I build modern web applications with cutting-edge technologies.
          Specializing in both frontend and backend development.
        </p>

        <div className="flex justify-center space-x-4 animate-fadeIn opacity-0" style={{ animationDelay: '0.8s' }}>
          <a
            href="#contact"
            className="neon-button"
          >
            Get in Touch
          </a>
          <a 
            href="#projects"
            className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold text-white rounded-md 
            bg-neon-purple/20 border border-neon-purple transition-all duration-300 
            hover:shadow-neon-purple hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neon-purple/50"
          >
            My Work
          </a>
        </div>

        <div className="flex justify-center space-x-6 mt-8 animate-fadeIn opacity-0" style={{ animationDelay: '1s' }}>
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-neon-blue transition-colors duration-300"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default HeroSection;
