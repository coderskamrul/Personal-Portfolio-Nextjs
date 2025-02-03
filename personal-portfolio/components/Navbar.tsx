'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  // Handle mounting for theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const navClasses = `
    fixed top-0 w-full transition-all duration-300
    ${isScrolled ? 'backdrop-blur-md bg-background/80 shadow-sm' : 'bg-background'}
  `;

  return (
    <nav className={`${navClasses} z-50`}>
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto px-4 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-semibold text-foreground">&lt;/&gt; Hmd<span className='text-orange-600'>Kamrul</span></span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 lg:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-foreground rounded-lg hover:bg-accent"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground rounded-lg hover:bg-accent"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-1">
          <ul className="flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-foreground rounded-lg hover:bg-accent"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <a
            href="/cv"
            className="px-4 py-2 text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="w-full lg:hidden">
            <ul className="flex flex-col mt-4 space-y-2">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block py-2 text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="/cv"
                  className="inline-block w-full px-4 py-2 text-center text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;