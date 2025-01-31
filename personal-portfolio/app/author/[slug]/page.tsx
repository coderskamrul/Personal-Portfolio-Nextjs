import { blogPosts } from '@/app/blog/data'
import SingleAuthor from '@/components/SingleAuthor'

// Function to generate static params
export async function generateStaticParams() {
  const slugs = blogPosts.map(post => post.author.toLowerCase().split(' ').join('-'))
  return slugs.map(slug => ({ slug }))
}

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const authorName = params.slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')


  const authorPosts = blogPosts.filter(post => 
    post.author.toLowerCase() === authorName.toLowerCase()
  )

  return (
    <>
        <SingleAuthor params={params} />
    </>
  )
}