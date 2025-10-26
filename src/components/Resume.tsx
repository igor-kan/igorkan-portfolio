import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <h2 className="text-3xl font-bold text-center my-8">Resume</h2>
      <div className="text-center">
        <a href="/resume.pdf" download className="bg-secondary text-primary rounded-full py-3 px-6 hover:bg-accent">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
