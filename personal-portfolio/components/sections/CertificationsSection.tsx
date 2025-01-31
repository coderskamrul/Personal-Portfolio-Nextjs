"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

const certifications = [
  {
    title: "The 2022 ICPC Asia Dhaka Regional Contest",
    image: "https://raw.githubusercontent.com/coderskamrul/assets/refs/heads/main/ICPC%202022.jpeg",
  },
  {
    title: "The 2023 ICPC Asia Dhaka Regional Contest",
    image: "https://media.licdn.com/dms/image/v2/D562DAQGHjO_PpJMecA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1701409627311?e=1738936800&v=beta&t=4g7X0TBcrACkciYQP-qxT4o77Y8T5ssBtEddwdNMYJw",
  },
  {
    title: "The 2023 ICPC Asia West Continent Final Contest",
    image: "https://i.ibb.co.com/5tn62cN/ICPC-Asia-Wast.png",
  },
]

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<null | typeof certifications[0]>(null)

  return (
    <section className="py-24 bg-muted/50">
      <div className="container  m-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Professional certifications and achievements
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <div 
                  className="cursor-pointer group relative overflow-hidden rounded-lg"
                  onClick={() => setSelectedCert(cert)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedCert(cert)
                    }
                  }}
                >
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      width={800}
                      height={450}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-card">
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">Click to view certificate</p>
                  </div>
                </div>
                <DialogContent className="max-w-[90vw] h-[90vh] p-0">
                  <DialogTitle className="sr-only">View Certificate - {cert.title}</DialogTitle>
                  <div className="relative w-full h-full">
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="absolute top-4 right-4 z-50 p-2 bg-background/80 rounded-full"
                    >
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close</span>
                    </button>
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <div className="relative w-full h-full">
                        <Image
                          src={selectedCert?.image || cert.image}
                          alt={selectedCert?.title || cert.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}