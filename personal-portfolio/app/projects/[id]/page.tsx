import SingleProject from '@/components/SingleProject'
import { getProject } from '../data'
export { generateStaticParams } from './generateStaticParams'

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = getProject(params.id)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <>
        <SingleProject params={params} />
    </>
  )
}