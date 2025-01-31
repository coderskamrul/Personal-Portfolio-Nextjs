"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getBlogPost, blogPosts } from '../app/blog/data'

export default function SingleBlog({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen pt-20">
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container px-4 md:px-6 py-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <Link href="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {post.category}
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <Link href={`/author/${post.author.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center hover:text-primary">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </Link>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
              </div>

              <div 
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              {/* Author Card */}
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-xl font-semibold mb-4">About the Author</h3>
                <Link href={`/author/${post.author.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-4 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=150&h=150"
                    alt={post.author}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{post.author}</h4>
                    <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                  </div>
                </Link>
              </div>

              {/* Categories */}
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {["Web Development", "Blockchain", "Programming", "AI/ML"].map((category) => (
                    <Link
                      key={category}
                      href={`/blog?category=${category}`}
                      className="block text-muted-foreground hover:text-primary"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-card rounded-lg p-6 border">
                <h3 className="text-xl font-semibold mb-4">Related Posts</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-4">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          width={80}
                          height={60}
                          className="rounded object-cover"
                        />
                        <div>
                          <h4 className="font-medium group-hover:text-primary line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{relatedPost.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  )
}