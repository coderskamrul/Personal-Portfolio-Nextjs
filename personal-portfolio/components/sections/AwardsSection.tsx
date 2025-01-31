"use client"

import { motion } from "framer-motion"
import Image from "next/image"



const awards = [
  {
    title: "1st Runner-Up Award in IUBAT",
    description: "Intra - University Programming Contest Spring 2021 - (IUPC)",
    image: "https://i.ibb.co.com/Z1K4gPfd/1738326537583-1.jpg",
  },
  {
    title: "2nd Runner-Up Award in IUBAT",
    description: "Intra - University Programming Contest Summer 2022 - (IUPC)",
    image: "https://i.ibb.co.com/Nd7073Kh/IMG-5772.jpg",
  },
  {
    title: "1st Runner-Up Award in UITS",
    description: "UITS Collaboration Programming Contest 2022 · Nov 2022",
    image: "https://i.ibb.co.com/Wpkrt6B2/1738326322261c-1.png",
  },
]

export default function AwardsSection() {
  return (
    <section className="py-24">
      <div className="container m-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Awards</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Recognition and achievements in programming and technology
          </p>
        </div>
        {/* bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-all duration-300 */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg border hover:shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={award.image}
                  alt={award.title}
                  width={800}
                  height={450}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <p className="text-muted-foreground">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}