import BrushTransition from '@/components/BrushTransition'
import { Section } from '@/components/Section'
import { ParallaxImage } from '@/components/animations/ParallaxImage'

export default function OpenOSPage() {
  return (
    <main className="min-h-screen text-[var(--page-text)]">
      <BrushTransition position="top" />
      <Section>
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-brand-primary/80">
              Open OS
            </p>
            <h1 className="font-sentient text-3xl md:text-4xl">
              A full web-based operating system for the insurance industry.
            </h1>
            <p className="max-w-2xl text-sm text-brand-accent/90 md:text-base">
              Open OS is the enterprise-grade operating system where carriers, FMOs, agents,
              and adjacent businesses run everything—from websites and app store to ERP, CRM,
              claims, and customer care—in one coherent canvas.
            </p>
          </div>

          <ParallaxImage
            src="/images/hero/hero.png"
            alt="Abstract landscape suggesting a connected operating system"
            sizes="(min-width: 1024px) 320px, 100vw"
          />
        </div>
      </Section>
    </main>
  )
}
