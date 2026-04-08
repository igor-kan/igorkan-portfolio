'use client';

import React from 'react';
import Image from 'next/image';
import { FaGraduationCap, FaFlask, FaMapMarkerAlt, FaCode } from 'react-icons/fa';

const About = () => {
  const quickFacts = [
    { icon: <FaGraduationCap />, text: 'HBSc Physics & Math — UofT' },
    { icon: <FaFlask />, text: 'Statistics Minor · sGPA 3.7' },
    { icon: <FaMapMarkerAlt />, text: 'Toronto, ON, Canada' },
    { icon: <FaCode />, text: 'Full-Stack Developer · 180+ Projects' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Image
              src="https://picsum.photos/seed/igor-zakhidov-portrait/800/800"
              alt="Igor Zakhidov"
              width={800}
              height={800}
              className="rounded-lg relative transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <p className="text-lg text-neutral-1 mb-4">
              I&apos;m an undergraduate student at the University of Toronto majoring in Physics, Mathematics, and Biochemistry with a Minor in Statistics. My academic work spans advanced mathematical analysis, stochastic processes, quantum mechanics, and computational physics.
            </p>
            <p className="text-lg text-neutral-1 mb-4">
              Alongside my studies I build full-stack web apps and AI tools. I&apos;m proficient in Python, JavaScript/TypeScript, React, Next.js, and data analysis with R and Pandas. I&apos;ve shipped over 180 projects — from AI-powered productivity tools and education platforms to finance apps and developer utilities.
            </p>
            <p className="text-lg text-neutral-1 mb-8">
              I&apos;m driven by the belief that a strong scientific foundation combined with software engineering creates uniquely powerful solutions. I&apos;m open to research roles, developer positions, and collaborative projects at the intersection of math, science, and technology.
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