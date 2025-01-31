export const blogPosts = [
  {
    slug: "understanding-modern-web-development",
    title: "Understanding Modern Web Development",
    excerpt: "Exploring the latest trends and best practices in web development",
    content: `
      <p>Modern web development has evolved significantly over the past few years. With the advent of new frameworks, tools, and methodologies, developers now have more powerful options than ever before.</p>
      
      <h2>The Rise of Modern Frameworks</h2>
      <p>Frameworks like Next.js, React, and Vue have revolutionized how we build web applications. They provide robust solutions for common challenges and enable developers to create more interactive and dynamic user experiences.</p>
      
      <h2>Performance Optimization</h2>
      <p>Performance has become a crucial aspect of web development. Techniques like code splitting, lazy loading, and server-side rendering have become standard practices to ensure optimal application performance.</p>
      
      <h2>The Future of Web Development</h2>
      <p>As we look to the future, emerging technologies like Web Assembly, Edge Computing, and Progressive Web Apps are shaping the next generation of web applications.</p>
    `,
    date: "March 15, 2024",
    author: "John Doe",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=1200&q=80",
    category: "Web Development",
    tags: ["Web Development", "JavaScript", "React", "Next.js"]
  },
  {
    slug: "getting-started-blockchain-development",
    title: "Getting Started with Blockchain Development",
    excerpt: "A comprehensive guide to building your first smart contract",
    content: `
      <p>Blockchain development is revolutionizing the way we think about decentralized applications.</p>
    `,
    date: "March 10, 2024",
    author: "John Doe",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?fit=crop&w=1200&q=80",
    category: "Blockchain",
    tags: ["Blockchain", "Solidity", "Web3", "DApp"]
  },
  {
    slug: "advanced-python-programming",
    title: "Advanced Python Programming Techniques",
    excerpt: "Deep dive into Python's advanced features and patterns",
    content: `
      <p>Python offers powerful features for advanced programming scenarios.</p>
    `,
    date: "March 5, 2024",
    author: "John Doe",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=1200&q=80",
    category: "Programming",
    tags: ["Python", "Programming", "Advanced"]
  }
]

export const getBlogPost = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug)
}