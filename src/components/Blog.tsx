'use client';

import React from 'react';
import { FaSubstack, FaDev, FaMedium } from 'react-icons/fa';

const blogData = [
  {
    id: 1,
    title: 'Understanding Quantum Entanglement',
    platform: 'Substack',
    date: '2023-09-15',
    excerpt: 'A deep dive into the weird and wonderful world of quantum entanglement...',
    tags: ['Physics', 'Quantum Mechanics'],
    url: '#',
  },
  {
    id: 2,
    title: 'Building a React App with Next.js',
    platform: 'Dev.to',
    date: '2023-08-20',
    excerpt: 'A step-by-step guide to building a full-stack application with the Next.js framework...',
    tags: ['Web Dev', 'React', 'Next.js'],
    url: '#',
  },
  {
    id: 3,
    title: 'The Future of AI/ML',
    platform: 'Medium',
    date: '2023-07-10',
    excerpt: 'Exploring the latest trends and future directions in the field of Artificial Intelligence...',
    tags: ['AI/ML', 'Data Science'],
    url: '#',
  },
  // Add more blog posts here
];

const platformIcons = {
  Substack: <FaSubstack />,
  'Dev.to': <FaDev />,
  Medium: <FaMedium />,
};

const BlogCard = ({ post }) => (
  <a href={post.url} target="_blank" rel="noopener noreferrer" className="block bg-neutral-3 dark:bg-neutral-1 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex justify-between items-start">
      <h3 className="text-2xl font-bold text-foreground mb-2">{post.title}</h3>
      <span className="text-2xl text-secondary">{platformIcons[post.platform]}</span>
    </div>
    <p className="text-sm text-neutral-2 mb-4">{post.date}</p>
    <p className="text-neutral-1 mb-4">{post.excerpt}</p>
    <div className="flex flex-wrap gap-2">
      {post.tags.map(tag => <span key={tag} className="px-2 py-1 bg-secondary text-primary text-xs rounded-full">{tag}</span>)}
    </div>
  </a>
);

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map(post => <BlogCard key={post.id} post={post} />)}
        </div>
      </div>
    </section>
  );
};

export default Blog;