
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-neon-blue text-shadow-neon">About</span> Me
          </h2>
          <div className="h-1 w-20 bg-neon-blue rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="neon-border rounded-xl p-1 animate-fadeIn opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="bg-muted rounded-lg overflow-hidden h-full">
              <img 
                src="/profile-image.jpg" 
                alt="Developer" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          <div className="space-y-6 animate-fadeIn opacity-0" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Fullstack Developer & Problem Solver
            </h3>
            <p className="text-gray-300">
              I am a passionate fullstack developer with expertise in modern web technologies. 
              With a strong foundation in both frontend and backend development and blockchain development through some hackathons and real projects, I create seamless, 
              user-friendly applications that solve real-world problems.
            </p>
            <p className="text-gray-300">
            My journey in software development began 3 years ago, starting with hackathon projects that sparked my passion for building real-world solutions. Since then, I’ve worked on various projects at work. I thrive in collaborative environments and enjoy solving challenging problems that push my skills forward.
            </p>
            <p className="text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying outdoor activities to recharge.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-1">
                <p className="text-neon-green font-medium">Name:</p>
                <p className="text-gray-300">Vo Nguyen Phu Qui</p>
              </div>
              <div className="space-y-1">
                <p className="text-neon-green font-medium">Email:</p>
                <p className="text-gray-300">phuquivo03.cb@gmail.com</p>
              </div>
              <div className="space-y-1">
                <p className="text-neon-green font-medium">Location:</p>
                <p className="text-gray-300">Ho Chi Minh, Vietnam</p>
              </div>
              <div className="space-y-1">
                <p className="text-neon-green font-medium">Availability:</p>
                <p className="text-gray-300">Freelance / Full-time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
