
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 border-t border-neon-blue/20 bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-neon-blue text-shadow-neon">
              Dev<span className="text-neon-purple text-shadow-neon-purple">Coder</span>
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              Creating stunning digital experiences.
            </p>
          </div>

          <div className="flex space-x-8">
            <a href="#home" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">Home</a>
            <a href="#about" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">About</a>
            <a href="#projects" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">Contact</a>
          </div>

          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-neon-blue/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} DevCoder. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Designed & Built with <span className="text-neon-pink">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
