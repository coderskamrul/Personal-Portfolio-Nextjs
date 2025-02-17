import React from 'react';
import { Github, Instagram, Linkedin, Palette, Database, Server, Box, Facebook, Twitter, Codepen, Youtube } from 'lucide-react';
import Image from 'next/image';

const ProfileCard = () => {
  const stats = [
    { icon: "📍", title: "Location", value: "Dhaka, Bangladesh" },
    { icon: "💼", title: "Experience", value: "2+ Years" },
    { icon: "🟢", title: "Availability", value: "Open for Projects" },
    { icon: "⭐", title: "Projects", value: "15+ Completed" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 mt-20">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Profile Section with Cover */}
        <div className="relative rounded-2xl overflow-hidden bg-card/30 backdrop-blur-sm border border-border">
          {/* Cover Image */}
          <div className="h-48 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-gradient"></div>
            <Image
              src="https://miro.medium.com/v2/resize:fit:888/1*jo7560v4PDjRWxSvve_nIg.gif"
              alt="Cover"
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
          </div>
          
          {/* Profile Info */}
          <div className="p-6 z-20">
            <div className="flex items-start gap-6">
              {/* Profile Image */}
              <Image
                src="https://i.ibb.co.com/whRrmF0J/hmdkamrul-profile.jpg"
                alt="Profile"
                className="w-28 h-28 rounded-full border-4 border-background shadow-xl -mt-20 z-20"
                width={112}
                height={112}
              />
              
              {/* Name and Bio */}
              <div className="pt-2">
                <h1 className="text-2xl md:text-3xl font-bold">Md. Kamrul Hasan</h1>
                <p className="text-muted-foreground">Full Stack Software Engineer & Programming Instructor.</p>
                
                {/* Social Icons */}
                <div className="flex gap-4 mt-3">
                  <a href="https://github.com/coderskamrul" className="hover:scale-110 transition-transform">
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a href="https://www.facebook.com/CodersKamrul/" className="hover:scale-110 transition-transform">
                    <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a href="https://www.linkedin.com/in/coderskamrul/" className="hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a href="https://www.instagram.com/coderskamrul" className="hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a href="https://x.com/CodersKamrul" className="hover:scale-110 transition-transform">
                    <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a href="https://codepen.io/CodersKamrul" className="hover:scale-110 transition-transform">
                    <Codepen className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                  <a href="https://www.youtube.com/@coderskamrul" className="hover:scale-110 transition-transform">
                    <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-card/30 backdrop-blur-sm border border-border p-4 rounded-xl hover:bg-accent/10 transition-colors"
            >
              <div className="text-lg mb-1">{stat.icon}</div>
              <div className="text-sm text-muted-foreground">{stat.title}</div>
              <div className="font-medium">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-card/30 backdrop-blur-sm border border-border p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                📚 Education
              </h2>
              <div>
                <h3 className="font-medium">BSc in Computer Science & Engineering</h3>
                <p className="text-muted-foreground">International University of Business Agriculture and Technology</p>
                <p className="text-sm text-muted-foreground/60">2020 - 2023</p>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>• Major in Software Engineering</li>
                  <li>• Research on Machine Learning</li>
                </ul>
              </div>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                💼 Experience
              </h2>
              <div>
                <h3 className="font-medium">Full Stack Software Engineer</h3>
                <p className="text-muted-foreground">WPXPO</p>
                <p className="text-sm text-muted-foreground/60">2023 - Present</p>
                <ul className="mt-4 text-sm text-muted-foreground space-y-1">
                  <li>• Worked with cross-functional teams to ensure successful project delivery.</li>
                  <li>• Developed efficient, user-friendly software tailored to client needs.</li>
                  <li>• Partnered with back-end engineers to design and integrate seamless APIs.</li>
                  <li>• Maintained optimal performance and code quality through best practices.</li>
                  <li>• Tech Stack HTML, CSS, SCSS, Tailwind CSS, JavaScript, TypeScript, ReactJS, Redux, Next.js, Node.js, Socket.IO, PHP, MongoDB, and MySQL.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="bg-card/30 backdrop-blur-sm border border-border p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                🚀 Skills
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Frontend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-sm">React</span>
                    <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-sm">Next.js</span>
                    <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-sm">TypeScript</span>
                    <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-sm">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                🚀 Skills
              </h2>
              <div className="space-y-6">

                <div>
                  <h3 className="font-medium mb-3">Backend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-sm flex items-center gap-2">
                      <Server className="w-3 h-3" /> Node.js
                    </span>
                    <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-sm flex items-center gap-2">
                      <Box className="w-3 h-3" /> Express
                    </span>
                    <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-sm flex items-center gap-2">
                      <Database className="w-3 h-3" /> MongoDB
                    </span>
                    <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-sm flex items-center gap-2">
                      <Database className="w-3 h-3" /> MySQL
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/30 backdrop-blur-sm border border-border p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                🚀 Skills
              </h2>
              <div className="space-y-6">

                <div>
                  <h3 className="font-medium mb-3">Tools & Others</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-sm">Git</span>
                    <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-sm">Docker</span>
                    <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-sm">Figma</span>
                    <span className="px-4 py-1.5 bg-primary/5 border border-primary/20 rounded-full text-sm flex items-center gap-2">Photoshop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;