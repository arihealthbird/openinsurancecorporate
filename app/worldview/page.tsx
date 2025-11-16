import BrushTransition from '@/components/BrushTransition'
import { Section } from '@/components/Section'

export default function WorldviewPage() {
  return (
    <main className="min-h-screen text-[var(--page-text)]">
      <BrushTransition position="top" />
      <Section>
        <div className="space-y-4">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-brand-primary/80">
            Philosophy
          </p>
          <h1 className="font-sentient text-3xl md:text-5xl">
            A different way of seeing insurance, built into the OS itself.
          </h1>
          <p className="max-w-2xl text-sm text-brand-accent/90 md:text-base">
            Open Insurance starts from a simple belief: insurance should feel like a continuous
            story, not a maze of disconnected portals. Our worldview is expressed in the way
            products are discovered, how operations run, and how every interaction is stitched
            together on a single canvas.
          </p>
        </div>
      </Section>
    </main>
  )
}
