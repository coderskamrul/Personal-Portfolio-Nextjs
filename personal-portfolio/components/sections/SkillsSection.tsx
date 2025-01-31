"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "PHP"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "React", "Next.js"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Express.js", "Node.js", "Firebase", "NoSQL"],
  },
  {
    title: "DevOps",
    skills: ["Git", "Docker", "Github CI/CD"],
  },
  {
    title: "Data Science",
    skills: ["Pandas", "Numpy", "Jupyter Notebooks", "SQL"],
  },
  {
    title: "Others",
    skills: ["Latex", "Vercel", "Web Scraping"],
  },
]

export default function SkillsSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container m-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            A comprehensive overview of my technical expertise
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border bg-card"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}