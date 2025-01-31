"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, ExternalLink, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


const projects = [
  {
    id: "1",
    title: "Coffee Shop E-Commerce",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://i.ibb.co.com/xKVRRmCD/coffee-project-img.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Mongodb", "Stripe"],
    liveUrl: "https://coffee-shop-cyan-five.vercel.app/",
    githubUrl: "https://github.com/coderskamrul/Coffee-Shop-With-Nextjs?tab=readme-ov-file",
    category: "Full Stack",
  },
  {
    id: "2",
    title: "Travel Website",
    description: "A fully responsive and visually captivating travel website built with Next.js and Tailwind CSS.",
    image: "https://i.ibb.co.com/Vpkq8bPG/travel-project-img.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "Mongodb", "Stripe"],
    liveUrl: "https://travel-app-rho-blush.vercel.app/",
    githubUrl: "https://github.com/coderskamrul/Travel-Website-Nextjs",
    category: "Full Stack",
  },
  {
    id: "3",
    title: "InnoMarkt Consultancy & Service Provider",
    description: "A full-stack consultancy and service provider platform with real-time booking and payment processing.",
    image: "https://i.ibb.co.com/qFgbVVVH/service-provider-project-img.png",
    technologies: ["React", "Tailwind CSS", "Node.js", "Mongodb", "Stripe"],
    liveUrl: "https://coding-projects-20c57.web.app/",
    githubUrl: "https://github.com/coderskamrul/InnoMarkt-Consultancy-and-Service-Provider",
    category: "Full Stack",
    // category: "AI/ML",
  },
]

const categories = ["All", "Full Stack", "Blockchain", "AI/ML"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container px-4 md:px-6 py-10"
      >
        <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <Link href={`/projects/${project.id}`}>
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="secondary" size="sm">
                        <Search className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}