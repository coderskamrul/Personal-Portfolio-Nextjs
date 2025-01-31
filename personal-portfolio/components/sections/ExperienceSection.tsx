"use client"

import { motion } from "framer-motion"
import { BriefcaseIcon, Code2Icon, TrophyIcon } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Software Engineer",
    duration: "2 Years",
    description: "Developing and maintaining web applications using modern technologies",
    icon: BriefcaseIcon,
  },
  {
    title: "Competitive Programmer",
    duration: "4 Years",
    description: "Participating in programming contests and solving complex algorithmic problems",
    icon: Code2Icon,
  },
  {
    title: "Programming Instructor",
    duration: "At Shohoj Codding",
    description: "Teaching programming concepts and mentoring aspiring developers",
    icon: TrophyIcon,
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-24">
      <div className="container m-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            My professional journey in software development and teaching
          </p>
        </div>
        <div className="mt-16 space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6"
            >
              <div className="flex-shrink-0">
                <div className="p-4 bg-primary/10 rounded-full">
                  <experience.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <p className="text-sm text-primary mt-1">{experience.duration}</p>
                <p className="mt-2 text-muted-foreground">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}