import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import SkillsSection from '@/components/sections/SkillsSection'
import AwardsSection from '@/components/sections/AwardsSection'
import CertificationsSection from '@/components/sections/CertificationsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import BlogSection from '@/components/sections/BlogSection'
import { Suspense } from 'react'
import Loading from '@/components/loading'
import PortfolioAIChat from '@/components/sections/ChatBoot'

export default function Home() {
  return (
    <div className="pt-16">
      <Suspense fallback={<Loading />}>
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <AwardsSection />
        <CertificationsSection />
        <PortfolioAIChat />
      </Suspense>
    </div>
  )
}