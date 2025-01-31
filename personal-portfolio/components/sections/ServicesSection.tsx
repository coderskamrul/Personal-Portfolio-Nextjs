"use client"

import { motion } from "framer-motion"
import { Code2, Server, GraduationCap } from "lucide-react"

const services = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces using modern frameworks like React and Next.js",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description: "Developing robust server-side applications and APIs using Node.js and Python",
    icon: Server,
  },
  {
    title: "Programming Trainer",
    description: "Teaching programming concepts and mentoring aspiring developers at Shohoj Codding",
    icon: GraduationCap,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container m-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What I Do</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Specialized services tailored to meet your development and learning needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 transform -skew-y-2 group-hover:skew-y-0 transition-transform" />
              <div className="relative p-8 rounded-lg border bg-card">
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}