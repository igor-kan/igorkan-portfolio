'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import copy from 'copy-to-clipboard';
import { FaLinkedin, FaGithub, FaGoogle, FaDev, FaTwitter, FaCopy } from 'react-icons/fa';
import { BsSubstack } from 'react-icons/bs';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin />, url: '#' },
  { name: 'GitHub', icon: <FaGithub />, url: '#' },
  { name: 'Google Scholar', icon: <FaGoogle />, url: '#' },
  { name: 'Substack', icon: <BsSubstack />, url: '#' },
  { name: 'Dev.to', icon: <FaDev />, url: '#' },
  { name: 'Twitter/X', icon: <FaTwitter />, url: '#' },
];

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isCopied, setIsCopied] = useState(false);

  const onSubmit = (data: FormData) => {
    // Replace with your Formspree endpoint
    fetch('https://formspree.io/f/your_form_id', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };

  const handleCopy = (text: string) => {
    copy(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input {...register('name', { required: true })} placeholder="Name" className="w-full p-2 rounded bg-neutral-3 dark:bg-neutral-1" />
              {errors.name && <span className="text-red-500">This field is required</span>}
              <input {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })} placeholder="Email" className="w-full p-2 rounded bg-neutral-3 dark:bg-neutral-1" />
              {errors.email && <span className="text-red-500">Please enter a valid email</span>}
              <input {...register('subject')} placeholder="Subject" className="w-full p-2 rounded bg-neutral-3 dark:bg-neutral-1" />
              <textarea {...register('message', { required: true })} placeholder="Message" className="w-full p-2 rounded bg-neutral-3 dark:bg-neutral-1" rows={5}></textarea>
              {errors.message && <span className="text-red-500">This field is required</span>}
              <button type="submit" className="bg-secondary text-primary rounded-full py-3 px-6 hover:bg-accent">Send Message</button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Direct Contact</h3>
            <div className="flex items-center space-x-4 mb-4">
              <p className="text-lg">igor.kan@example.com</p>
              <button onClick={() => handleCopy('igor.kan@example.com')} className="text-secondary"><FaCopy /></button>
              {isCopied && <span className="text-green-500">Copied!</span>}
            </div>
            <div className="flex items-center space-x-2 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p>Available for new opportunities</p>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Connect with Me</h3>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-neutral-3 dark:bg-neutral-1 p-4 rounded-lg flex flex-col items-center justify-center hover:bg-secondary hover:text-primary transition-colors duration-300">
                  <span className="text-4xl mb-2">{link.icon}</span>
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;