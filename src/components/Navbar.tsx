
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-background/80 backdrop-blur-sm shadow-md border-b border-neon-blue/20' 
          : 'bg-transparent'
      )}
    >
      <div className="container flex justify-between items-center h-20 px-4 md:px-6">
        <a href="#home" className="text-2xl font-bold text-neon-blue text-shadow-neon animate-pulse">
          Dev<span className="text-neon-purple text-shadow-neon-purple">Coder</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-foreground hover:text-neon-blue transition-colors duration-300 link-underline"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden neon-button p-2"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col justify-center items-center space-y-8 transition-all duration-300 transform md:hidden',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {navItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            className={`text-3xl font-bold text-foreground hover:text-neon-blue transition-all duration-300
                       animate-fadeIn opacity-0`}
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            onClick={toggleMenu}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
