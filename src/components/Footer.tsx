'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/igorkan' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/igorkan' },
    { icon: <FaTwitter />, url: 'https://twitter.com/igorkan' },
  ];

  const quickLinks = ['About', 'Projects', 'Contact'];

  return (
    <footer className="bg-primary text-neutral-2 p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Igor Kan</h3>
          <p>&copy; 2025 Igor Kan. All rights reserved.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-secondary">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Connect</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-secondary">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button onClick={toggleHome} className="bg-secondary text-primary rounded-full p-3 hover:bg-accent">
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;