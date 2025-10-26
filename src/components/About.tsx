'use client';

import React from 'react';
import Image from 'next/image';
import { FaGraduationCap, FaFlask, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

const About = () => {
  const quickFacts = [
    { icon: <FaGraduationCap />, text: 'PhD in Physics' },
    { icon: <FaFlask />, text: 'Quantum Computing Research' },
    { icon: <FaMapMarkerAlt />, text: 'New York, NY' },
    { icon: <FaCode />, text: 'Full-Stack Developer' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="https://picsum.photos/seed/igorkan/800/800"
              alt="Igor Kan"
              width={800}
              height={800}
              className="rounded-lg relative transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <p className="text-lg text-neutral-1 mb-4">
              I am a passionate and driven PhD candidate in Physics, currently exploring the fascinating world of quantum computing. My research focuses on developing novel algorithms and protocols to harness the power of quantum mechanics for solving complex computational problems that are intractable for classical computers.
            </p>
            <p className="text-lg text-neutral-1 mb-4">
              My journey into the world of technology began with a deep curiosity for how things work, which led me to pursue a degree in physics. During my academic career, I discovered a passion for programming and software development, which I have been honing ever since. I am now a self-taught full-stack developer with a mission to bridge the gap between scientific research and real-world applications.
            </p>
            <p className="text-lg text-neutral-1 mb-8">
              I believe that the combination of a strong scientific background and technical expertise is a powerful tool for innovation. I am excited to leverage my skills to build cutting-edge solutions that can make a positive impact on the world.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-secondary">{fact.icon}</span>
                  <span className="text-foreground">{fact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;