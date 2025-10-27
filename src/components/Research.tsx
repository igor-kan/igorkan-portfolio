'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ResearchProject {
  id: number;
  title: string;
  authors: string[];
  institution: string;
  date: string;
  abstract: string;
  keyFindings: string[];
  visual: string;
  tags: string[];
  status: string;
  featured: boolean;
  paperUrl: string;
  codeUrl: string;
}

const researchData: ResearchProject[] = [
  {
    id: 1,
    title: 'Quantum Error Correction Codes',
    authors: ['Igor Kan', 'John Doe'],
    institution: 'University of Physics',
    date: '2023-10-25',
    abstract: 'This paper introduces a new set of quantum error correction codes that are more resilient to noise...',
    keyFindings: ['Reduced error rates by 20%', 'New encoding/decoding scheme'],
    visual: 'https://picsum.photos/seed/qec/800/400',
    tags: ['Physics', 'Quantum Computing'],
    status: 'Published',
    featured: true,
    paperUrl: '#',
    codeUrl: '#',
  },
  {
    id: 2,
    title: 'Machine Learning for Materials Science',
    authors: ['Igor Kan', 'Jane Smith'],
    institution: 'Institute of Technology',
    date: '2022-05-15',
    abstract: 'We use machine learning to predict the properties of new materials, accelerating the discovery process...',
    keyFindings: ['95% accuracy in property prediction', 'Identified 3 new candidate materials'],
    visual: 'https://picsum.photos/seed/mlm/800/400',
    tags: ['Data Science', 'AI/ML'],
    status: 'In Review',
    featured: false,
    paperUrl: '#',
    codeUrl: '#',
  },
  // Add more research projects here
];

const ResearchCard = ({ project, isExpanded, onToggle }: { project: ResearchProject, isExpanded: boolean, onToggle: () => void }) => (
  <motion.div
    layout
    className={`bg-neutral-3 dark:bg-neutral-1 p-6 rounded-lg shadow-lg ${project.featured ? 'md:col-span-2' : ''}`}>
    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
    <div className="flex items-center text-sm text-neutral-2 mb-4">
      <span>{project.authors.join(', ')}</span>
      <span className="mx-2">|</span>
      <span>{project.institution}</span>
      <span className="mx-2">|</span>
      <span>{project.date}</span>
    </div>
    <div className="flex items-center mb-4">
      <span className={`px-2 py-1 text-xs font-bold rounded-full ${project.status === 'Published' ? 'bg-green-500' : 'bg-yellow-500'}`}>
        {project.status}
      </span>
    </div>
    <motion.div layout className="text-neutral-1">
      {isExpanded ? project.abstract : `${project.abstract.substring(0, 100)}...`}
      <button onClick={onToggle} className="text-secondary ml-2">{isExpanded ? 'Show less' : 'Show more'}</button>
    </motion.div>
    <div className="mt-4">
      <h4 className="font-bold text-foreground">Key Findings:</h4>
      <ul className="list-disc list-inside text-neutral-1">
        {project.keyFindings.map((finding, i) => <li key={i}>{finding}</li>)}
      </ul>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {project.tags.map(tag => <span key={tag} className="px-2 py-1 bg-secondary text-primary text-xs rounded-full">{tag}</span>)}
    </div>
    <div className="mt-6 flex space-x-4">
      <a href={project.paperUrl} className="text-secondary hover:underline">Read Paper</a>
      <a href={project.codeUrl} className="text-secondary hover:underline">View Code</a>
    </div>
  </motion.div>
);

const Research = () => {
  const [filter, setFilter] = useState('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filters = ['All', 'Physics', 'Math', 'CS', 'Data Science'];
  const filteredData = researchData.filter(p => filter === 'All' || p.tags.includes(filter));

  return (
    <section id="research" className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">Research</h2>
        <div className="flex justify-center mb-8">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 mx-2 rounded-full ${filter === f ? 'bg-secondary text-primary' : 'bg-neutral-3 dark:bg-neutral-1'}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredData.map(project => (
            <ResearchCard 
              key={project.id} 
              project={project} 
              isExpanded={expandedId === project.id}
              onToggle={() => setExpandedId(expandedId === project.id ? null : project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;