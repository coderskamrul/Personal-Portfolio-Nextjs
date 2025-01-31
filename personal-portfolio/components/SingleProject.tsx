"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getProject } from '../app/projects/data'

export default function SingleProject({ params }: { params: { id: string } }) {
  const project = getProject(params.id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container px-4 md:px-6 py-10"
      >
        <div className="max-w-4xl mx-auto">
          <Link href="/projects">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden mb-8">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <h1 className="text-4xl font-bold">{project.title}</h1>
              <div className="flex gap-4">
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                {project.category}
              </span>
              <span className="flex items-center text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                {project.completionDate}
              </span>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-muted-foreground whitespace-pre-line">
                  {project.longDescription}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="relative h-[200px] rounded-lg overflow-hidden">
                      <Image
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}