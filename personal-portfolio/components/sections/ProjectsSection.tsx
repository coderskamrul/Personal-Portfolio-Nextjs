"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"


const projects = [
  {
    id: "1",
    title: "Coffee Shop E-Commerce",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "https://i.ibb.co.com/xKVRRmCD/coffee-project-img.png",
    tools: ["React", "Next.js", "Tailwind CSS", "Node.js", "Mongodb", "Stripe"],
    liveUrl: "https://coffee-shop-cyan-five.vercel.app/",
    githubUrl: "https://github.com/coderskamrul/Coffee-Shop-With-Nextjs?tab=readme-ov-file",
  },
  {
    id: "2",
    title: "Travel Website",
    description: "A fully responsive and visually captivating travel website built with Next.js and Tailwind CSS.",
    image: "https://i.ibb.co.com/Vpkq8bPG/travel-project-img.png",
    tools: ["React", "Next.js", "Tailwind CSS", "Node.js", "Mongodb", "Stripe"],
    liveUrl: "https://travel-app-rho-blush.vercel.app/",
    githubUrl: "https://github.com/coderskamrul/Travel-Website-Nextjs",
  },
  {
    id: "3",
    title: "InnoMarkt Consultancy & Service Provider",
    description: "A full-stack consultancy and service provider platform with real-time booking and payment processing.",
    image: "https://i.ibb.co.com/qFgbVVVH/service-provider-project-img.png",
    tools: ["React", "Tailwind CSS", "Node.js", "Mongodb", "Stripe"],
    liveUrl: "https://coding-projects-20c57.web.app/",
    githubUrl: "https://github.com/coderskamrul/InnoMarkt-Consultancy-and-Service-Provider",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-24">
      <div className="container m-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <motion.h2 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <motion.p 
            className="mx-auto max-w-[700px] text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Showcasing my latest work and technical achievements
          </motion.p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-lg border bg-card"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1386}
                    height={816}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
                <div className="p-6">
                <Link href={`/projects/${project.id}`}>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
              </Link>

                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Site
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/projects">
            <Button size="lg" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}