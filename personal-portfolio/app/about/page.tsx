"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container px-4 md:px-6 py-10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-muted-foreground">Full Stack Developer & Programming Instructor</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://i.ibb.co.com/Jjj2KmxH/1738322962548.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Hello! I'm Kamrul hasan</h2>
              <p className="text-muted-foreground text-justify">
              I am a Computer Science & Engineering graduate from the International University of Business Agriculture and Technology (IUBAT). With over four years of competitive programming experience, I have solved 1,500+ problems focused on Data Structures and Algorithms (DSA) and Object-Oriented Programming (OOP). I have actively participated in national and international programming contests, including the prestigious ACM ICPC, achieving recognition as an ICPC Asia West Finalist in 2023.
              </p>
              <p className="text-muted-foreground text-justify">
              Currently, I am a Software Engineer at WPXPO with 1.6+ years of professional experience. My expertise spans a wide range of technologies, including HTML5, CSS3, SCSS, JavaScript, jQuery, Tailwind CSS, React.js, Next.js, Redux, JWT, Node.js, RESTful APIs, TypeScript, MongoDB, PHP, MySQL, Webpack, and Babel.
              </p>
              <Button>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="font-semibold mb-2">Education</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>BSc in Computer Science & Engineering graduate from the International University of Business Agriculture and Technology (IUBAT)</li>
              </ul>
            </div>
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="font-semibold mb-2">Experience</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Full Stack Software Engineer</li>
                <li>Programming Instructor at Shohoj Codding</li>
              </ul>
            </div>
            <div className="p-6 bg-card rounded-lg border">
              <h3 className="font-semibold mb-2">Interests</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Front-end Development</li>
                <li>Back-end Development</li>
                <li>Machine Learning</li>
                <li>Problem Solving</li>
                <li>Teaching</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}