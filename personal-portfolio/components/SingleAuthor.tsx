"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from '@/app/blog/data'
import { Calendar, Mail, MapPin, User } from "lucide-react"

export default function SingleAuthor({ params }: { params: { slug: string } }) {
  const authorName = params.slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')


  const authorPosts = blogPosts.filter(post => 
    post.author.toLowerCase() === authorName.toLowerCase()
  )
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container px-4 md:px-6 py-10"
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 mb-12 border hover:shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <Image
                src="https://i.ibb.co.com/whRrmF0J/hmdkamrul-profile.jpg"
                alt={authorName}
                width={200}
                height={200}
                className="rounded-full"
              />
              <div>
                <h1 className="text-3xl font-bold mb-4">{authorName}</h1>
                <p className="text-muted-foreground mb-6">
                Full Stack Software Engineer & Programming Instructor.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>mdkamrul2058@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Uttara, Dhaka</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{authorPosts.length} Published Posts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-8">Published Articles</h2>
          <div className="grid gap-8">
            {authorPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="relative h-48 md:h-auto md:w-48 flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {post.category}
                          </span>
                          <span className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground">{post.excerpt}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}