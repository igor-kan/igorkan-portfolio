'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: 'Physics & Math', color: 'bg-blue-500', proficiency: 90 },
  { name: 'Programming', color: 'bg-green-500', proficiency: 95 },
  { name: 'AI/ML', color: 'bg-purple-500', proficiency: 85 },
  { name: 'Web Dev', color: 'bg-green-500', proficiency: 90 },
  { name: 'DevOps', color: 'bg-green-500', proficiency: 80 },
  { name: 'Tools', color: 'bg-gray-500', proficiency: 95 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">Skills</h2>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-wrap justify-center gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className="relative group w-40 h-48">
              <div
                className={`absolute inset-0 ${skill.color} transform rotate-12 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110`}
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                  <div className="absolute bottom-4 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-secondary h-2.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
