"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "Solidity"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "Next.js", "Chakra UI"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Express.js", "Node.js", "PostgreSQL", "Firebase", "NoSQL"],
  },
  {
    title: "Blockchain/Smart Contracts",
    skills: ["Solidity", "Web3.js", "Web3.py", "Foundry", "Remix", "Hardhat", "Ethers", "Mocha", "ChainLink"],
  },
  {
    title: "DevOps",
    skills: ["Git", "Docker", "Kubernetes", "Github CI/CD", "Linux", "ArgoCD", "Datadog", "Sentry"],
  },
  {
    title: "QA",
    skills: ["Pytest", "Jest", "Mocha", "Chai", "Load Testing", "K6"],
  },
  {
    title: "Data Science",
    skills: ["Pandas", "Numpy", "Matplotlib", "Jupyter Notebooks", "SQL"],
  },
  {
    title: "Others",
    skills: ["Latex", "Markdown", "Vercel", "Web Scraping"],
  },
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container px-4 md:px-6 py-10"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Skills & Expertise</h1>
            <p className="text-muted-foreground">
              A comprehensive overview of my technical skills and proficiencies
            </p>
          </motion.div>

          <div className="grid gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-lg transform -skew-y-2" />
                  <div className="relative p-6 rounded-lg border bg-card">
                    <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: (categoryIndex * 0.1) + (skillIndex * 0.05)
                          }}
                          whileHover={{ scale: 1.05 }}
                          className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors text-center"
                        >
                          <span className="text-sm font-medium">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}