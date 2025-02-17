'use client'
import { useState } from 'react';
import { Github, Instagram, Linkedin, Facebook, Twitter, Youtube, Codepen } from 'lucide-react';
import Link from 'next/link';

const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/CodersKamrul', icon: <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/coderskamrul/', icon: <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" /> },
  { name: 'Twitter', href: 'https://x.com/CodersKamrul', icon: <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/coderskamrul', icon: <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" /> },
  { name: 'Github', href: 'https://github.com/coderskamrul', icon: <Github className="w-5 h-5 text-muted-foreground hover:text-primary" /> },
  { name: 'Codepen', href: 'https://codepen.io/CodersKamrul', icon: <Codepen className="w-5 h-5 text-muted-foreground hover:text-primary" /> },
  { name: 'YouTube', href: 'https://www.youtube.com/@coderskamrul', icon: <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary" /> },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: 'blog' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
];

const Footer = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="w-full bg-[#f3f3f3] text-foreground dark:bg-[#040b1e] dark:text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Footer Content */}
        <div className="flex flex-col items-center space-y-6">
          {/* <h1 className="text-4xl md:text-5xl font-bold">Mystery Code</h1> */}
          
          {/* Description */}
          {/* <p className="text-center text-sm md:text-base max-w-2xl">
            Mystery Code is a blog website where you will find great tutorials on web design
            and development. Here each tutorial is beautifully described step by step with
            the required source code.
          </p> */}
          

          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
                <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                {link.name}
                </Link>
            ))}
          </nav>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          {/* Theme Toggle */}
          {/* <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button> */}
        </div>
      </div>
      
      {/* Footer Credits */}
      <div className="text-center py-4 text-sm">
        Develop By - <a href="#" className="text-blue-500">Hmd Kamrul</a>
      </div>
    </div>
  );
};

export default Footer;