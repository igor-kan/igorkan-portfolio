'use client';

import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  liveUrl: string | null;
  sourceUrl: string;
  featured: boolean;
  gradient: string;
}

const projectsData: Project[] = [
  // === FEATURED ===
  { id: 1, title: 'Citizenship Canada Test', description: 'Interactive study guide and mock exam platform for the Canadian Citizenship test with full question bank.', category: 'Education', techStack: ['Next.js', 'TypeScript', 'Tailwind'], liveUrl: 'https://citizenship-canada-test.vercel.app', sourceUrl: 'https://github.com/igor-kan/citizenship-canada-test', featured: true, gradient: 'from-red-600 to-red-900' },
  { id: 2, title: 'MathQuest', description: 'Gamified math learning platform with interactive challenges and progress tracking.', category: 'Education', techStack: ['Next.js', 'TypeScript', 'Tailwind'], liveUrl: 'https://mathquest-zeta.vercel.app', sourceUrl: 'https://github.com/igor-kan/mathquest', featured: true, gradient: 'from-blue-600 to-purple-800' },
  { id: 3, title: 'FinsagE — AI Finance', description: 'AI-powered personal finance and smart money management platform with budget insights.', category: 'Finance', techStack: ['Next.js', 'React', 'AI'], liveUrl: 'https://finsage-swart.vercel.app', sourceUrl: 'https://github.com/igor-kan/finsage-smart-money-ai', featured: true, gradient: 'from-emerald-600 to-teal-900' },
  { id: 4, title: 'ThinkCraft Platform', description: 'Collaborative knowledge and learning platform for structured thinking and idea development.', category: 'Web Dev', techStack: ['Next.js', 'React', 'Tailwind'], liveUrl: 'https://thinkcraft-igorkan010-8748s-projects.vercel.app', sourceUrl: 'https://github.com/igor-kan/thinkcraft-platform', featured: true, gradient: 'from-violet-600 to-indigo-900' },
  { id: 5, title: 'AIStylist', description: 'AI-powered wardrobe assistant that recommends outfits based on personal style and occasion.', category: 'AI/ML', techStack: ['Next.js', 'AI', 'TypeScript'], liveUrl: 'https://aistylist-theta.vercel.app', sourceUrl: 'https://github.com/igor-kan/aistylist', featured: true, gradient: 'from-pink-600 to-rose-900' },
  { id: 6, title: 'Neuroflow', description: 'Mental wellness and cognitive enhancement app with guided exercises and progress analytics.', category: 'Health', techStack: ['Next.js', 'React', 'Tailwind'], liveUrl: 'https://neuroflow-iota.vercel.app', sourceUrl: 'https://github.com/igor-kan/neuroflow', featured: true, gradient: 'from-cyan-600 to-blue-900' },
  { id: 7, title: 'LedgerAI', description: 'AI-assisted accounting and financial ledger management for individuals and small businesses.', category: 'Finance', techStack: ['Next.js', 'AI', 'React'], liveUrl: 'https://ledgerai-chi.vercel.app', sourceUrl: 'https://github.com/igor-kan/ledgerai', featured: true, gradient: 'from-amber-600 to-orange-900' },
  { id: 8, title: 'Scholarly', description: 'Academic research organization and citation management tool for students and researchers.', category: 'Education', techStack: ['Next.js', 'TypeScript', 'React'], liveUrl: 'https://scholarly-six.vercel.app', sourceUrl: 'https://github.com/igor-kan/scholarly', featured: true, gradient: 'from-slate-600 to-gray-900' },
  { id: 9, title: 'Skillattice', description: 'Skill mapping and career lattice platform for visualizing learning paths and competency gaps.', category: 'Web Dev', techStack: ['Next.js', 'React', 'D3.js'], liveUrl: 'https://skillattice.vercel.app', sourceUrl: 'https://github.com/igor-kan/skillattice', featured: true, gradient: 'from-lime-600 to-green-900' },
  { id: 10, title: 'Storyforge', description: 'AI-assisted creative writing and narrative design platform for authors and game designers.', category: 'AI/ML', techStack: ['Next.js', 'AI', 'TypeScript'], liveUrl: 'https://storyforge-rho-eight.vercel.app', sourceUrl: 'https://github.com/igor-kan/storyforge', featured: true, gradient: 'from-purple-600 to-violet-900' },

  // === AI / ML ===
  { id: 11, title: 'AI Grammar & Tone Fixer', description: 'Real-time grammar correction and writing tone adjustment powered by AI.', category: 'AI/ML', techStack: ['Next.js', 'AI', 'React'], liveUrl: 'https://ai-grammar-tone-fixer.vercel.app', sourceUrl: 'https://github.com/igor-kan/ai-grammar-tone-fixer', featured: false, gradient: 'from-sky-500 to-blue-800' },
  { id: 12, title: 'AI Name & Logo Maker', description: 'AI-powered business name generator and instant logo design tool.', category: 'AI/ML', techStack: ['Next.js', 'AI', 'Canvas'], liveUrl: 'https://ai-name-logo-maker.vercel.app', sourceUrl: 'https://github.com/igor-kan/ai-name-logo-maker', featured: false, gradient: 'from-fuchsia-500 to-pink-800' },
  { id: 13, title: 'AI Resume Reviewer', description: 'AI-powered resume analysis with actionable feedback and ATS optimization suggestions.', category: 'AI/ML', techStack: ['HTML', 'CSS', 'JavaScript'], liveUrl: 'https://ai-resume-reviewer-chi.vercel.app', sourceUrl: 'https://github.com/igor-kan/ai-resume-reviewer', featured: false, gradient: 'from-teal-500 to-cyan-800' },
  { id: 14, title: 'AI Text Summarizer', description: 'Intelligent document summarization tool for articles, papers, and long-form content.', category: 'AI/ML', techStack: ['HTML', 'CSS', 'JavaScript'], liveUrl: 'https://ai-text-summarizer-ecru.vercel.app', sourceUrl: 'https://github.com/igor-kan/ai-text-summarizer', featured: false, gradient: 'from-indigo-500 to-blue-800' },
  { id: 15, title: 'AI YouTube Optimizer', description: 'AI-powered YouTube title, thumbnail, and description optimizer for content creators.', category: 'AI/ML', techStack: ['Next.js', 'AI', 'React'], liveUrl: 'https://ai-youtube-optimizer.vercel.app', sourceUrl: 'https://github.com/igor-kan/ai-youtube-optimizer', featured: false, gradient: 'from-red-500 to-rose-800' },
  { id: 16, title: 'Adgen', description: 'AI advertising copy generator for social media, display ads, and marketing campaigns.', category: 'AI/ML', techStack: ['Next.js', 'AI', 'TypeScript'], liveUrl: 'https://adgen-phi.vercel.app', sourceUrl: 'https://github.com/igor-kan/adgen', featured: false, gradient: 'from-orange-500 to-amber-800' },
  { id: 17, title: 'Auragen', description: 'AI content and creative generation platform for text, ideas, and multimedia assets.', category: 'AI/ML', techStack: ['Next.js', 'AI', 'React'], liveUrl: 'https://auragen-gamma.vercel.app', sourceUrl: 'https://github.com/igor-kan/auragen', featured: false, gradient: 'from-yellow-500 to-orange-800' },
  { id: 18, title: 'Starmind', description: 'AI-driven knowledge graph and idea connection platform for researchers and thinkers.', category: 'AI/ML', techStack: ['Next.js', 'React', 'Graph'], liveUrl: 'https://starmind.vercel.app', sourceUrl: 'https://github.com/igor-kan/starmind', featured: false, gradient: 'from-violet-500 to-purple-800' },
  { id: 19, title: 'Startup Idea Generator', description: 'AI-powered startup idea generator with market analysis and validation framework.', category: 'AI/ML', techStack: ['HTML', 'JavaScript'], liveUrl: 'https://startup-idea-generator-five.vercel.app', sourceUrl: 'https://github.com/igor-kan/startup-idea-generator', featured: false, gradient: 'from-green-500 to-emerald-800' },
  { id: 20, title: 'AI4Pro', description: 'Comprehensive AI professional tools suite for productivity, writing, and decision-making.', category: 'AI/ML', techStack: ['Next.js', 'React', 'AI'], liveUrl: 'https://igor-kan.github.io/ai4pro/', sourceUrl: 'https://github.com/igor-kan/ai4pro', featured: false, gradient: 'from-blue-500 to-indigo-800' },
  { id: 21, title: 'Breezy AI Assistant', description: 'Lightweight conversational AI assistant for everyday tasks and quick answers.', category: 'AI/ML', techStack: ['React', 'AI', 'TypeScript'], liveUrl: 'https://igor-kan.github.io/breezy-ai-assistant/', sourceUrl: 'https://github.com/igor-kan/breezy-ai-assistant', featured: false, gradient: 'from-sky-500 to-cyan-800' },
  { id: 22, title: 'Aura AI', description: 'Mood-aware AI companion that personalizes responses based on emotional context.', category: 'AI/ML', techStack: ['HTML', 'JavaScript', 'AI'], liveUrl: 'https://igor-kan.github.io/aura-ai/', sourceUrl: 'https://github.com/igor-kan/aura-ai', featured: false, gradient: 'from-purple-500 to-fuchsia-800' },

  // === EDUCATION ===
  { id: 200, title: 'Immersive Math Slides', description: 'Web-based math presentation platform — animated KaTeX equations, Fourier epicycles, Lissajous canvas, Prezi-style spatial map, step reveals, speaker notes, live editor.', category: 'Education', techStack: ['Next.js', 'TypeScript', 'Framer Motion', 'KaTeX'], liveUrl: 'https://igor-kan.github.io/immersive-math-slides/', sourceUrl: 'https://github.com/igor-kan/immersive-math-slides', featured: true, gradient: 'from-violet-600 to-indigo-900' },
  { id: 23, title: 'Ontario G1 Test Bank', description: 'Comprehensive practice question bank for the Ontario G1 driving knowledge test.', category: 'Education', techStack: ['Next.js', 'TypeScript', 'React'], liveUrl: 'https://igor-kan.github.io/ontario-g1-test-bank/', sourceUrl: 'https://github.com/igor-kan/ontario-g1-test-bank', featured: false, gradient: 'from-blue-600 to-blue-900' },
  { id: 24, title: 'Home STEM Spark', description: 'Interactive STEM learning activities and experiments designed for home education.', category: 'Education', techStack: ['Next.js', 'React', 'Tailwind'], liveUrl: 'https://spark-two-gules.vercel.app', sourceUrl: 'https://github.com/igor-kan/home-stem-spark', featured: false, gradient: 'from-orange-500 to-red-800' },
  { id: 25, title: 'Scientia', description: 'Science learning platform with curated content, quizzes, and concept mapping.', category: 'Education', techStack: ['Next.js', 'React', 'TypeScript'], liveUrl: 'https://scientia-bay.vercel.app', sourceUrl: 'https://github.com/igor-kan/scientia', featured: false, gradient: 'from-teal-600 to-green-900' },
  { id: 26, title: 'Pronunciation Guide', description: 'Interactive phonetics and pronunciation training tool with IPA reference.', category: 'Education', techStack: ['Next.js', 'React', 'Audio'], liveUrl: 'https://pronunciation-guide.vercel.app', sourceUrl: 'https://github.com/igor-kan/pronunciation-guide', featured: false, gradient: 'from-cyan-600 to-blue-900' },
  { id: 27, title: 'Ear Training App', description: 'Musical ear training application for interval recognition, chord identification, and rhythm.', category: 'Education', techStack: ['HTML', 'JavaScript', 'Web Audio'], liveUrl: 'https://igor-kan.github.io/ear-training-app/', sourceUrl: 'https://github.com/igor-kan/ear-training-app', featured: false, gradient: 'from-purple-600 to-indigo-900' },
  { id: 28, title: 'LinguaLexis', description: 'Vocabulary building platform with spaced repetition and contextual learning.', category: 'Education', techStack: ['Next.js', 'React', 'TypeScript'], liveUrl: 'https://igor-kan.github.io/lingualexis/', sourceUrl: 'https://github.com/igor-kan/lingualexis', featured: false, gradient: 'from-rose-600 to-pink-900' },
  { id: 29, title: 'BibleReader', description: 'Clean, distraction-free Bible reading app with multiple translations and study tools.', category: 'Education', techStack: ['Next.js', 'React', 'TypeScript'], liveUrl: 'https://igor-kan.github.io/biblereader/', sourceUrl: 'https://github.com/igor-kan/biblereader', featured: false, gradient: 'from-amber-600 to-yellow-900' },

  // === FINANCE ===
  { id: 30, title: 'Finsage', description: 'Personal finance tracking and budgeting app with AI-powered spending insights.', category: 'Finance', techStack: ['Next.js', 'React', 'TypeScript'], liveUrl: 'https://finsage-swart.vercel.app', sourceUrl: 'https://github.com/igor-kan/finsage', featured: false, gradient: 'from-green-600 to-teal-900' },
  { id: 31, title: 'AI Budget & Finance', description: 'AI-driven personal budget planner with expense categorization and savings goals.', category: 'Finance', techStack: ['Next.js', 'AI', 'TypeScript'], liveUrl: 'https://ai-budget-personal-finance-g8m9og0ed-igorkan010-8748s-projects.vercel.app', sourceUrl: 'https://github.com/igor-kan/ai-budget-personal-finance-app', featured: false, gradient: 'from-emerald-600 to-green-900' },
  { id: 32, title: 'Algofund', description: 'Algorithmic trading and investment strategy backtesting platform.', category: 'Finance', techStack: ['Next.js', 'Python', 'React'], liveUrl: 'https://algofund.vercel.app', sourceUrl: 'https://github.com/igor-kan/algofund', featured: false, gradient: 'from-blue-600 to-cyan-900' },
  { id: 33, title: 'Invoice Maker', description: 'Clean, fast invoice generator with PDF export and client management.', category: 'Finance', techStack: ['HTML', 'JavaScript', 'CSS'], liveUrl: 'https://invoice-maker-gules.vercel.app', sourceUrl: 'https://github.com/igor-kan/invoice-maker', featured: false, gradient: 'from-slate-600 to-gray-900' },
  { id: 34, title: 'AILedger', description: 'AI-enhanced bookkeeping and financial record management for freelancers.', category: 'Finance', techStack: ['React', 'AI', 'TypeScript'], liveUrl: 'https://igor-kan.github.io/ailedger/', sourceUrl: 'https://github.com/igor-kan/ailedger', featured: false, gradient: 'from-teal-600 to-emerald-900' },

  // === WEB DEV / PRODUCTIVITY ===
  { id: 35, title: 'Bloomwell', description: 'Mental wellbeing and mindfulness tracking app with mood journaling and guided exercises.', category: 'Health', techStack: ['React', 'Vite', 'Tailwind'], liveUrl: 'https://bloomwell-five.vercel.app', sourceUrl: 'https://github.com/igor-kan/bloomwell', featured: false, gradient: 'from-pink-500 to-rose-800' },
  { id: 36, title: 'Bloom Web Project', description: 'Modern web application template with full design system and component library.', category: 'Web Dev', techStack: ['Next.js', 'shadcn/ui', 'TypeScript'], liveUrl: 'https://bloom-web-project.vercel.app', sourceUrl: 'https://github.com/igor-kan/bloom-web-project', featured: false, gradient: 'from-fuchsia-600 to-purple-900' },
  { id: 37, title: 'Focus & Distraction App', description: 'Digital wellness app to track and reduce distracting habits with focus timers.', category: 'Health', techStack: ['Next.js', 'React', 'TypeScript'], liveUrl: 'https://focus-distractions-self-help-9e64xg7g5.vercel.app', sourceUrl: 'https://github.com/igor-kan/focus-distractions-self-help-app', featured: false, gradient: 'from-blue-600 to-indigo-900' },
  { id: 38, title: 'ForgeFlow', description: 'Workflow automation and process management platform for developers and teams.', category: 'Web Dev', techStack: ['Next.js', 'React', 'TypeScript'], liveUrl: 'https://forgeflow-seven.vercel.app', sourceUrl: 'https://github.com/igor-kan/forgeflow', featured: false, gradient: 'from-orange-600 to-red-900' },
  { id: 39, title: 'Nucleus Website', description: 'Landing page and marketing site for the Nucleus ecosystem of productivity tools.', category: 'Web Dev', techStack: ['Next.js', 'React', 'Tailwind'], liveUrl: 'https://nucleus-website-mauve.vercel.app', sourceUrl: 'https://github.com/igor-kan/nucleus-website', featured: false, gradient: 'from-violet-600 to-purple-900' },
  { id: 40, title: 'Resume & CV Writer', description: 'AI-assisted resume and CV builder with ATS optimization and template customization.', category: 'Web Dev', techStack: ['Next.js', 'AI', 'TypeScript'], liveUrl: 'https://resume-cv-writer-roi4ewwf0-igorkan010-8748s-projects.vercel.app', sourceUrl: 'https://github.com/igor-kan/resume-cv-writer-app', featured: false, gradient: 'from-sky-600 to-blue-900' },
  { id: 41, title: 'Sapien Data Labeling', description: 'Human-in-the-loop data labeling and annotation platform for ML training datasets.', category: 'AI/ML', techStack: ['Next.js', 'React', 'TypeScript'], liveUrl: 'https://sapien-data-labeling.vercel.app', sourceUrl: 'https://github.com/igor-kan/sapien-data-labeling', featured: false, gradient: 'from-cyan-600 to-teal-900' },
  { id: 42, title: 'Mind Forge', description: 'Mental model builder and cognitive framework visualization tool for critical thinking.', category: 'Web Dev', techStack: ['Next.js', 'React', 'D3.js'], liveUrl: 'https://mind-forge-two.vercel.app', sourceUrl: 'https://github.com/igor-kan/mind-forge', featured: false, gradient: 'from-indigo-600 to-violet-900' },
  { id: 43, title: 'NutraForge', description: 'Personalized nutrition planning and meal optimization platform with macro tracking.', category: 'Health', techStack: ['Next.js', 'React', 'TypeScript'], liveUrl: 'https://nutraforge.vercel.app', sourceUrl: 'https://github.com/igor-kan/nutraforge', featured: false, gradient: 'from-lime-600 to-green-900' },
  { id: 44, title: 'UI Art Gallery', description: 'Curated gallery of UI design patterns, components, and creative web experiences.', category: 'Web Dev', techStack: ['Next.js', 'React', 'Tailwind'], liveUrl: 'https://ui-art-gallery.vercel.app', sourceUrl: 'https://github.com/igor-kan/ui-art-gallery', featured: false, gradient: 'from-rose-600 to-pink-900' },
  { id: 45, title: 'Univera', description: 'University resource aggregation and campus life management platform for students.', category: 'Education', techStack: ['Next.js', 'React', 'TypeScript'], liveUrl: 'https://univera-plum.vercel.app', sourceUrl: 'https://github.com/igor-kan/univera', featured: false, gradient: 'from-blue-600 to-sky-900' },
  { id: 46, title: 'Lexisuite', description: 'Advanced lexical analysis and vocabulary management suite for writers and linguists.', category: 'Web Dev', techStack: ['Next.js', 'React', 'TypeScript'], liveUrl: 'https://lexisuite.vercel.app', sourceUrl: 'https://github.com/igor-kan/lexisuite', featured: false, gradient: 'from-amber-600 to-orange-900' },
  { id: 47, title: 'Textcast', description: 'Text-to-audio broadcasting platform that converts written content to listenable podcasts.', category: 'Web Dev', techStack: ['Next.js', 'React', 'Web Audio'], liveUrl: 'https://textcast.vercel.app', sourceUrl: 'https://github.com/igor-kan/textcast', featured: false, gradient: 'from-purple-600 to-indigo-900' },
  { id: 48, title: 'WingmanAI', description: 'AI-powered networking and communication assistant for professional relationship building.', category: 'AI/ML', techStack: ['Next.js', 'AI', 'TypeScript'], liveUrl: 'https://wingmanai-delta.vercel.app', sourceUrl: 'https://github.com/igor-kan/wingmanai', featured: false, gradient: 'from-sky-600 to-indigo-900' },
  { id: 49, title: 'Eats Nearby', description: 'Local restaurant discovery and food recommendation app with personalized suggestions.', category: 'Web Dev', techStack: ['Next.js', 'React', 'Maps'], liveUrl: 'https://eats-nearby-finds.vercel.app', sourceUrl: 'https://github.com/igor-kan/eats-nearby-finds', featured: false, gradient: 'from-orange-600 to-yellow-900' },
  { id: 50, title: 'GPS Art Runner', description: 'Running route designer that creates GPS art patterns visible on mapping platforms.', category: 'Web Dev', techStack: ['Next.js', 'Maps API', 'React'], liveUrl: 'https://gps-art-runner-eight.vercel.app', sourceUrl: 'https://github.com/igor-kan/gps-art-runner', featured: false, gradient: 'from-teal-600 to-cyan-900' },
  { id: 51, title: 'Bond', description: 'Relationship and connection tracking app for maintaining meaningful personal networks.', category: 'Web Dev', techStack: ['Next.js', 'React', 'TypeScript'], liveUrl: 'https://bond-mu.vercel.app', sourceUrl: 'https://github.com/igor-kan/bond', featured: false, gradient: 'from-rose-600 to-red-900' },
  { id: 52, title: 'Compass', description: 'Life goal tracking and direction-setting app with milestone management and reflection tools.', category: 'Web Dev', techStack: ['Next.js', 'React', 'TypeScript'], liveUrl: 'https://compass-eosin-eight.vercel.app', sourceUrl: 'https://github.com/igor-kan/compass', featured: false, gradient: 'from-blue-600 to-teal-900' },

  // === TOOLS & UTILITIES ===
  { id: 53, title: 'Unit Converter', description: 'Fast, comprehensive unit conversion tool covering length, mass, temperature, energy, and more.', category: 'Tools', techStack: ['HTML', 'JavaScript', 'CSS'], liveUrl: 'https://unit-converter-omega-mauve.vercel.app', sourceUrl: 'https://github.com/igor-kan/unit-converter', featured: false, gradient: 'from-slate-500 to-gray-800' },
  { id: 54, title: 'Text Case Converter', description: 'Multi-mode text case transformer: camelCase, snake_case, CONSTANT, Title Case, and more.', category: 'Tools', techStack: ['HTML', 'JavaScript'], liveUrl: 'https://text-case-converter-zeta.vercel.app', sourceUrl: 'https://github.com/igor-kan/text-case-converter', featured: false, gradient: 'from-zinc-500 to-slate-800' },
  { id: 55, title: 'Text Diff Checker', description: 'Side-by-side text comparison tool with highlighted diff visualization.', category: 'Tools', techStack: ['HTML', 'JavaScript'], liveUrl: 'https://text-diff-checker-sand.vercel.app', sourceUrl: 'https://github.com/igor-kan/text-diff-checker', featured: false, gradient: 'from-neutral-500 to-stone-800' },
  { id: 56, title: 'QR Code Bulk Generator', description: 'Batch QR code generator for URLs, contacts, and custom data with download options.', category: 'Tools', techStack: ['HTML', 'JavaScript', 'Canvas'], liveUrl: 'https://qr-code-bulk-generator.vercel.app', sourceUrl: 'https://github.com/igor-kan/qr-code-bulk-generator', featured: false, gradient: 'from-gray-600 to-zinc-900' },
  { id: 57, title: 'Meme Maker', description: 'Quick meme creation tool with template library and custom text overlay.', category: 'Tools', techStack: ['HTML', 'JavaScript', 'Canvas'], liveUrl: 'https://meme-maker-nu-olive.vercel.app', sourceUrl: 'https://github.com/igor-kan/meme-maker', featured: false, gradient: 'from-yellow-500 to-amber-800' },
  { id: 58, title: 'Simple Todo App', description: 'Minimal, fast task manager with local persistence and priority sorting.', category: 'Tools', techStack: ['HTML', 'JavaScript', 'CSS'], liveUrl: 'https://simple-todo-app-v1.vercel.app', sourceUrl: 'https://github.com/igor-kan/simple-todo-app-v1', featured: false, gradient: 'from-blue-500 to-sky-800' },
  { id: 59, title: 'Random Quote Generator', description: 'Inspirational quote generator with category filtering and social sharing.', category: 'Tools', techStack: ['HTML', 'JavaScript'], liveUrl: 'https://random-quote-generator-two-fawn.vercel.app', sourceUrl: 'https://github.com/igor-kan/random-quote-generator', featured: false, gradient: 'from-violet-500 to-purple-800' },
  { id: 60, title: 'Timezone Meeting Planner', description: 'Multi-timezone meeting scheduler that finds optimal overlap times for global teams.', category: 'Tools', techStack: ['HTML', 'JavaScript'], liveUrl: 'https://timezone-meeting-planner.vercel.app', sourceUrl: 'https://github.com/igor-kan/timezone-meeting-planner', featured: false, gradient: 'from-teal-500 to-cyan-800' },
  { id: 61, title: 'Word Reverser Game', description: 'Fun word puzzle game with timed challenges and leaderboard.', category: 'Tools', techStack: ['HTML', 'JavaScript'], liveUrl: 'https://word-reverser-game.vercel.app', sourceUrl: 'https://github.com/igor-kan/word-reverser-game', featured: false, gradient: 'from-pink-500 to-rose-800' },
  { id: 62, title: 'Color Palette Generator', description: 'Aesthetic color palette generator with export options for design tools.', category: 'Tools', techStack: ['HTML', 'JavaScript', 'CSS'], liveUrl: 'https://color-palette-generator-seven-beta.vercel.app', sourceUrl: 'https://github.com/igor-kan/color-palette-generator', featured: false, gradient: 'from-rainbow-gradient rainbow-gradient', },
  { id: 63, title: 'Bulk Image Resizer', description: 'Client-side bulk image resizing and optimization tool without server uploads.', category: 'Tools', techStack: ['HTML', 'JavaScript', 'Canvas'], liveUrl: 'https://igor-kan.github.io/bulk-image-resizer-optimizer/', sourceUrl: 'https://github.com/igor-kan/bulk-image-resizer-optimizer', featured: false, gradient: 'from-cyan-500 to-blue-800' },
  { id: 64, title: 'PDF Merger', description: 'Browser-based PDF merge and split utility with drag-and-drop reordering.', category: 'Tools', techStack: ['HTML', 'JavaScript', 'PDF'], liveUrl: 'https://igor-kan.github.io/pdf-merger/', sourceUrl: 'https://github.com/igor-kan/pdf-merger', featured: false, gradient: 'from-red-500 to-orange-800' },
  { id: 65, title: 'OCR Screenshot Extractor', description: 'Optical character recognition tool that extracts text from screenshots and images.', category: 'Tools', techStack: ['HTML', 'JavaScript', 'OCR'], liveUrl: 'https://igor-kan.github.io/ocr-screenshot-text-extractor/', sourceUrl: 'https://github.com/igor-kan/ocr-screenshot-text-extractor', featured: false, gradient: 'from-emerald-500 to-green-800' },
  { id: 66, title: 'Hashtag Generator', description: 'Smart hashtag suggestion tool for Instagram, Twitter, and TikTok content.', category: 'Tools', techStack: ['HTML', 'JavaScript'], liveUrl: 'https://igor-kan.github.io/hashtag-generator/', sourceUrl: 'https://github.com/igor-kan/hashtag-generator', featured: false, gradient: 'from-sky-500 to-indigo-800' },

  // === OPEN SOURCE / SOCIAL GOOD ===
  { id: 67, title: 'AntiHate', description: 'Platform for combating hate speech and building inclusive online communities.', category: 'Open Source', techStack: ['React', 'TypeScript', 'Vite'], liveUrl: 'https://igor-kan.github.io/antihate/', sourceUrl: 'https://github.com/igor-kan/antihate', featured: false, gradient: 'from-red-600 to-pink-900' },
  { id: 68, title: 'Stand With Ukraine Archive', description: 'Digital archive documenting the war in Ukraine with verified sources and timelines.', category: 'Open Source', techStack: ['React', 'TypeScript', 'Vite'], liveUrl: 'https://igor-kan.github.io/stand-with-ukraine-archive/', sourceUrl: 'https://github.com/igor-kan/stand-with-ukraine-archive', featured: false, gradient: 'from-blue-500 to-yellow-600' },
  { id: 69, title: 'Hate Speech Squashers', description: 'Community tools and resources for identifying and countering hate speech online.', category: 'Open Source', techStack: ['React', 'TypeScript', 'Vite'], liveUrl: 'https://igor-kan.github.io/hate-speech-squashers-unite/', sourceUrl: 'https://github.com/igor-kan/hate-speech-squashers-unite', featured: false, gradient: 'from-orange-600 to-red-900' },
  { id: 70, title: 'Anonymous Generosity Tracker', description: 'Platform for tracking and celebrating anonymous acts of kindness and generosity.', category: 'Open Source', techStack: ['HTML', 'JavaScript'], liveUrl: 'https://igor-kan.github.io/anonymous-generosity-tracker/', sourceUrl: 'https://github.com/igor-kan/anonymous-generosity-tracker', featured: false, gradient: 'from-yellow-600 to-amber-900' },
  { id: 71, title: 'Artverse', description: 'Digital art platform connecting artists and collectors with NFT-ready portfolio tools.', category: 'Open Source', techStack: ['React', 'TypeScript', 'Vite'], liveUrl: 'https://igor-kan.github.io/artverse/', sourceUrl: 'https://github.com/igor-kan/artverse', featured: false, gradient: 'from-purple-600 to-fuchsia-900' },
  { id: 72, title: 'BioConverge', description: 'Biotechnology convergence tracker mapping intersections of biology and technology.', category: 'Open Source', techStack: ['React', 'TypeScript', 'Vite'], liveUrl: 'https://igor-kan.github.io/bioconverge/', sourceUrl: 'https://github.com/igor-kan/bioconverge', featured: false, gradient: 'from-green-600 to-teal-900' },
  { id: 73, title: 'Spark', description: 'Creative inspiration and project kickstarter platform for developers and designers.', category: 'Web Dev', techStack: ['Next.js', 'React', 'TypeScript'], liveUrl: 'https://spark-two-gules.vercel.app', sourceUrl: 'https://github.com/igor-kan/spark', featured: false, gradient: 'from-yellow-600 to-orange-900' },
  { id: 74, title: 'DevCore', description: 'Core developer utilities library with reusable React components and hooks.', category: 'Open Source', techStack: ['React', 'TypeScript', 'Vite'], liveUrl: 'https://igor-kan.github.io/devcore/', sourceUrl: 'https://github.com/igor-kan/devcore', featured: false, gradient: 'from-slate-600 to-zinc-900' },
  { id: 75, title: 'Buildforge', description: 'Project scaffolding and build automation tool for modern web development workflows.', category: 'Open Source', techStack: ['React', 'TypeScript', 'Vite'], liveUrl: 'https://igor-kan.github.io/buildforge/', sourceUrl: 'https://github.com/igor-kan/buildforge', featured: false, gradient: 'from-orange-600 to-amber-900' },
];

const categoryGradients: Record<string, string> = {
  'Education': 'from-blue-600 to-purple-800',
  'AI/ML': 'from-violet-600 to-indigo-900',
  'Finance': 'from-emerald-600 to-teal-900',
  'Web Dev': 'from-sky-600 to-blue-900',
  'Health': 'from-pink-600 to-rose-900',
  'Tools': 'from-slate-600 to-gray-900',
  'Open Source': 'from-orange-600 to-red-900',
};

const ProjectCard = ({ project }: { project: Project }) => {
  const gradient = project.gradient.includes('rainbow')
    ? 'from-pink-500 via-purple-500 to-indigo-500'
    : project.gradient;

  return (
    <motion.div layout className="relative group overflow-hidden rounded-xl border border-white/10 shadow-lg">
      <div className={`w-full h-48 bg-gradient-to-br ${gradient} flex items-end p-4`}>
        <span className="text-xs font-semibold text-white/80 bg-black/30 rounded-full px-3 py-1">
          {project.category}
        </span>
      </div>
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-5">
        <h3 className="text-white text-xl font-bold mb-2 text-center">{project.title}</h3>
        <p className="text-white/80 text-sm text-center mb-3 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1 justify-center mb-4">
          {project.techStack.map(tech => (
            <span key={tech} className="px-2 py-0.5 bg-white/20 text-white text-xs rounded-full">{tech}</span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary flex items-center gap-1 text-sm">
              <FaExternalLinkAlt size={14} /> Live
            </a>
          )}
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary flex items-center gap-1 text-sm">
            <FaGithub size={14} /> Source
          </a>
        </div>
      </div>
      <div className="p-4 bg-background">
        <h3 className="font-bold text-foreground truncate">{project.title}</h3>
        <p className="text-sm text-neutral-1 line-clamp-2 mt-1">{project.description}</p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(12);
  const filters = ['All', 'Featured', 'AI/ML', 'Education', 'Finance', 'Web Dev', 'Health', 'Tools', 'Open Source'];

  const filteredProjects = projectsData.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return p.featured;
    return p.category === filter;
  });
  const projectsToShow = filteredProjects.slice(0, visibleProjects);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">Projects</h2>
        <p className="text-center text-neutral-1 mb-10">
          {projectsData.length}+ projects shipped across AI, education, finance, and developer tools.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => { setFilter(f); setVisibleProjects(12); }}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${filter === f ? 'bg-secondary text-primary' : 'bg-neutral-3 dark:bg-neutral-1 hover:bg-secondary hover:text-primary'}`}
            >
              {f}
            </button>
          ))}
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3, 1200: 4 }}>
          <Masonry gutter="1.5rem">
            {projectsToShow.map(project => <ProjectCard key={project.id} project={project} />)}
          </Masonry>
        </ResponsiveMasonry>
        {visibleProjects < filteredProjects.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleProjects(prev => prev + 12)}
              className="bg-secondary text-primary rounded-full py-3 px-8 hover:bg-accent cursor-pointer transition-transform hover:scale-105"
            >
              Load More ({filteredProjects.length - visibleProjects} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
