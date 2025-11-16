import Hero from '@/components/Hero'
import { AudienceSection } from '@/components/home/AudienceSection'
import { CTASection } from '@/components/home/CTASection'
import { DisruptionSection } from '@/components/home/DisruptionSection'
import { OpenOSPreviewSection } from '@/components/home/OpenOSPreviewSection'
import { StorySection } from '@/components/home/StorySection'
import VideoFooter from '@/components/VideoFooter'

export default function HomePage() {
  return (
    <main className="min-h-screen text-[var(--page-text)]">
      <Hero />

      {/* Content canvas below hero */}
      <section className="canvas-surface -mt-10 pt-16 text-[var(--page-text)]">
        <StorySection />
        <DisruptionSection />
        <OpenOSPreviewSection />
        <AudienceSection />
        <CTASection />
      </section>

      <VideoFooter />
    </main>
  )
}
