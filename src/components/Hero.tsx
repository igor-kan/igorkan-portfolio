'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

import dynamic from 'next/dynamic';

const HeroVisual = dynamic(() => import('./HeroVisual'), { ssr: false });

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 text-center md:text-left">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-4">Igor Kan</h1>
          <TypeAnimation
            sequence={[
              'Physics Researcher',
              1000,
              'Full-Stack Developer',
              1000,
              'Data Scientist',
              1000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-2xl md:text-4xl text-secondary mb-8"
            repeat={Infinity}
          />
          <p className="text-lg text-neutral-1 mb-8 max-w-xl mx-auto md:mx-0">
            I build beautiful and functional web applications, and I love to solve complex problems.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link to="research" smooth={true} duration={500} className="bg-secondary text-primary rounded-full py-3 px-6 hover:bg-accent cursor-pointer transition-transform hover:scale-105">
              View Research
            </Link>
            <a href="/resume.pdf" download className="bg-accent text-primary rounded-full py-3 px-6 hover:bg-secondary transition-transform hover:scale-105">
              Download Resume
            </a>
            <Link to="contact" smooth={true} duration={500} className="bg-primary text-secondary border border-secondary rounded-full py-3 px-6 hover:bg-secondary hover:text-primary cursor-pointer transition-transform hover:scale-105">
              Let's Connect
            </Link>
          </div>
        </div>
        <div className="md:w-2/5 mt-8 md:mt-0 h-96">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;