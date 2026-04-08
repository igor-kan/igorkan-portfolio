'use client';

import React, { useState } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  

  const menuItems = ['About', 'Research', 'Projects', 'Blog', 'Resume', 'Contact'];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav aria-label="Main navigation" className="sticky top-0 bg-primary text-neutral-2 p-4 flex justify-between items-center z-10">
      <div className="text-2xl font-bold">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">IZ</Link>
      </div>
      <ul className="hidden md:flex items-center space-x-6">
        {menuItems.map((item) => (
          <li key={item}>
            <Link to={item.toLowerCase()} smooth={true} duration={500} className="cursor-pointer hover:text-secondary">
              {item}
            </Link>
          </li>
        ))}
        <li>
          {typeof window !== 'undefined' && (
            <button onClick={toggleTheme} className="focus:outline-none" aria-label="Toggle theme">
              {theme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
          )}
        </li>
      </ul>
      <div className="md:hidden flex items-center">
        {typeof window !== 'undefined' && (
          <button onClick={toggleTheme} className="focus:outline-none mr-4" aria-label="Toggle theme">
            {theme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
        )}
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Open menu">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 w-full bg-primary flex flex-col items-center space-y-4 p-4">
          {menuItems.map((item) => (
            <li key={item}>
              <Link to={item.toLowerCase()} smooth={true} duration={500} className="cursor-pointer hover:text-secondary" onClick={() => setIsOpen(false)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
