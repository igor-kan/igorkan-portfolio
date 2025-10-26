'use client';

import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = ['About', 'Research', 'Projects', 'Blog', 'Resume', 'Contact'];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="sticky top-0 bg-primary text-neutral-2 p-4 flex justify-between items-center z-10">
      <div className="text-2xl font-bold">
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">IK</Link>
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
          {mounted && (
            <button onClick={toggleTheme} className="focus:outline-none">
              {theme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
          )}
        </li>
      </ul>
      <div className="md:hidden flex items-center">
        {mounted && (
          <button onClick={toggleTheme} className="focus:outline-none mr-4">
            {theme === 'dark' ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
        )}
        <button onClick={() => setIsOpen(!isOpen)}>
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
