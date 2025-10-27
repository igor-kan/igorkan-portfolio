'use client';

import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  techStack: string[];
  githubStars: number;
  liveUrl: string | null;
  sourceUrl: string;
  featured: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A web app for data visualization.',
    thumbnail: 'https://picsum.photos/seed/alpha/600/400',
    category: 'Web Dev',
    techStack: ['React', 'Next.js', 'D3.js'],
    githubStars: 123,
    liveUrl: '#',
    sourceUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'An AI model for image recognition.',
    thumbnail: 'https://picsum.photos/seed/beta/400/600',
    category: 'AI/ML',
    techStack: ['Python', 'TensorFlow', 'PyTorch'],
    githubStars: 456,
    liveUrl: null,
    sourceUrl: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'A data science project for sentiment analysis.',
    thumbnail: 'https://picsum.photos/seed/gamma/600/400',
    category: 'Data Science',
    techStack: ['Python', 'NLTK', 'Scikit-learn'],
    githubStars: 789,
    liveUrl: '#',
    sourceUrl: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Project Delta',
    description: 'An open-source library for React.',
    thumbnail: 'https://picsum.photos/seed/delta/400/600',
    category: 'Open Source',
    techStack: ['React', 'TypeScript', 'Rollup'],
    githubStars: 101,
    liveUrl: '#',
    sourceUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Project Epsilon',
    description: 'A web app for project management.',
    thumbnail: 'https://picsum.photos/seed/epsilon/600/400',
    category: 'Web Dev',
    techStack: ['React', 'Node.js', 'MongoDB'],
    githubStars: 234,
    liveUrl: '#',
    sourceUrl: '#',
    featured: true,
  },
  {
    id: 6,
    title: 'Project Zeta',
    description: 'A mobile app for fitness tracking.',
    thumbnail: 'https://picsum.photos/seed/zeta/400/600',
    category: 'Web Dev',
    techStack: ['React Native', 'Firebase'],
    githubStars: 567,
    liveUrl: null,
    sourceUrl: '#',
    featured: false,
  },
  {
    id: 7,
    title: 'Project Eta',
    description: 'A machine learning model for fraud detection.',
    thumbnail: 'https://picsum.photos/seed/eta/600/400',
    category: 'AI/ML',
    techStack: ['Python', 'Scikit-learn', 'XGBoost'],
    githubStars: 890,
    liveUrl: '#',
    sourceUrl: '#',
    featured: true,
  },
  {
    id: 8,
    title: 'Project Theta',
    description: 'A data visualization dashboard for sales data.',
    thumbnail: 'https://picsum.photos/seed/theta/400/600',
    category: 'Data Science',
    techStack: ['Tableau', 'SQL'],
    githubStars: 12,
    liveUrl: '#',
    sourceUrl: '#',
    featured: false,
  },
  // Add more projects here
];

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div layout className="relative group overflow-hidden rounded-lg">
    <Image src={project.thumbnail} alt={project.title} width={600} height={600} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
      <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
      <p className="text-white text-center mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map(tech => <span key={tech} className="px-2 py-1 bg-secondary text-primary text-xs rounded-full">{tech}</span>)}
      </div>
      <div className="flex items-center text-white mb-4">
        <FaStar className="mr-1" /> {project.githubStars}
      </div>
      <div className="flex space-x-4">
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary"><FaExternalLinkAlt size={24} /></a>}
        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary"><FaGithub size={24} /></a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);
  const filters = ['All', 'Web Dev', 'AI/ML', 'Data Science', 'Open Source'];
  const filteredProjects = projectsData.filter(p => filter === 'All' || p.category === filter);
  const projectsToShow = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">Projects</h2>
        <div className="flex justify-center mb-8">
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 mx-2 rounded-full ${filter === f ? 'bg-secondary text-primary' : 'bg-neutral-3 dark:bg-neutral-1'}`}>
              {f}
            </button>
          ))}
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="2rem">
            {projectsToShow.map(project => <ProjectCard key={project.id} project={project} />)}
          </Masonry>
        </ResponsiveMasonry>
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-8">
            <button onClick={loadMore} className="bg-secondary text-primary rounded-full py-3 px-6 hover:bg-accent cursor-pointer transition-transform hover:scale-105">
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;