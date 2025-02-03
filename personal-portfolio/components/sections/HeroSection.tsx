'use client'
import React, { useState } from 'react';
import { Code, Laptop, Sparkles } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const stats = [
    { value: '1500+', label: 'Problem Solved' },
    { value: '08+', label: 'Award' },
    { value: '10+', label: 'Projects Done' }
  ];

  interface MousePosition {
    x: number;
    y: number;
  }

  interface Stat {
    value: string;
    label: string;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;

    setMousePosition({
      x: (x / card.width - 0.5) * 20,  // -10 to +10 degrees
      y: (y / card.height - 0.5) * -20  // +10 to -10 degrees
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Innovating
              <span className="text-purple-600 dark:text-purple-400 animate-pulse"> Software</span> to Transform Ideas
                
                <br />
                Into Impactful Solutions 
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                Hi, I'm a Software Engineer with over 02 years of experience,
                ready to take part in your wonderful project!
              </p>
            </div>

            <div className="flex gap-4">
              <button className="bg-purple-600 dark:bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-700 dark:hover:bg-purple-600 transition duration-300 flex items-center gap-2">
                {/* <Laptop className="w-5 h-5" /> */}
                Hire Me
              </button>
              <button className="border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 px-6 py-3 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/50 transition duration-300 flex items-center gap-2">
                {/* <Code className="w-5 h-5" /> */}
                View Projects
              </button>
            </div>

            <div className="flex gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Animated Image Container */}
          <div className="relative perspective-1000">
            <div 
              className="relative w-80 h-80 mx-auto transform-style-3d transition-transform duration-200 ease-out"
              style={{
                transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Animated circle background */}
              <div className="absolute inset-0 rounded-full bg-purple-100 dark:bg-purple-900/50 animate-spin-slow"></div>
              
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 animate-bounce-slow">
                <Sparkles className="w-8 h-8 text-purple-500 dark:text-purple-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 animate-bounce-delayed">
                <Code className="w-8 h-8 text-purple-500 dark:text-purple-400" />
              </div>
              <div className="absolute top-1/2 -right-8 animate-pulse">
                <Laptop className="w-8 h-8 text-purple-500 dark:text-purple-400" />
              </div>

              {/* Image with 3D effect */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-white dark:bg-gray-800 shadow-lg transform-style-3d">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-100/10 to-purple-300/20 dark:from-transparent dark:via-purple-500/10 dark:to-purple-400/20" 
                     style={{
                       transform: `translateZ(20px)`,
                       filter: 'brightness(1.1)'
                     }}
                />
                <Image
                  src={'https://i.ibb.co.com/svLtDBy1/hmdkamrul-img.png'}
                  alt="Profile"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  style={{
                    transform: `translateZ(10px)`
                  }}
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;