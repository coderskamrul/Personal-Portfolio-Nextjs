import { projects } from '../data'

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}