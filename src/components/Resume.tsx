'use client';

import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const education = [
  {
    date: '2021 - Present',
    title: 'PhD in Physics',
    institution: 'University of Physics',
    description: 'Focusing on quantum computing and quantum algorithms.',
  },
  {
    date: '2017 - 2021',
    title: 'BSc in Physics',
    institution: 'Institute of Science',
    description: 'Graduated with honors.',
  },
];

const experience = [
  {
    date: '2022 - Present',
    title: 'Research Assistant',
    institution: 'Quantum Computing Lab',
    description: 'Developing and implementing quantum algorithms.',
  },
  {
    date: '2020 - 2021',
    title: 'Software Engineer Intern',
    institution: 'Tech Company Inc.',
    description: 'Worked on the front-end of a web application.',
  },
];

const skills = {
  Programming: ['Python', 'JavaScript', 'C++'],
  'Web Dev': ['React', 'Next.js', 'Node.js'],
  'AI/ML': ['TensorFlow', 'PyTorch', 'Scikit-learn'],
};

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">Resume</h2>
        <div className="text-center mb-12">
          <a href="/resume.pdf" download className="bg-secondary text-primary rounded-full py-3 px-6 hover:bg-accent transition-transform hover:scale-105">
            Download Resume
          </a>
        </div>

        <h3 className="text-3xl font-bold text-foreground mb-8">Education</h3>
        <VerticalTimeline>
          {education.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={item.date}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FaGraduationCap />}
            >
              <h4 className="vertical-timeline-element-title">{item.title}</h4>
              <h5 className="vertical-timeline-element-subtitle">{item.institution}</h5>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <h3 className="text-3xl font-bold text-foreground mt-12 mb-8">Experience</h3>
        <VerticalTimeline>
          {experience.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={item.date}
              iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
              icon={<FaBriefcase />}
            >
              <h4 className="vertical-timeline-element-title">{item.title}</h4>
              <h5 className="vertical-timeline-element-subtitle">{item.institution}</h5>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <h3 className="text-3xl font-bold text-foreground mt-12 mb-8">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-neutral-3 dark:bg-neutral-1 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center"><FaCode className="mr-2" /> {category}</h4>
              <ul className="list-disc list-inside">
                {skillList.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;