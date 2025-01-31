import SingleBlog from '@/components/SingleBlog'
import { getBlogPost } from '../data'
export { generateStaticParams } from './generateStaticParams'

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <>
        <SingleBlog params={params} />
    </>
  )
}