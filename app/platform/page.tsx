import BrushTransition from '@/components/BrushTransition'
import { Section } from '@/components/Section'

export default function PlatformPage() {
  return (
    <main className="min-h-screen text-[var(--page-text)]">
      <BrushTransition position="top" />
      <Section>
        <div className="space-y-4">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-brand-primary/80">
            Platform
          </p>
          <h1 className="font-sentient text-3xl md:text-5xl">
            The AI-native way to buy and manage every insurance product.
          </h1>
          <p className="max-w-2xl text-sm text-brand-accent/90 md:text-base">
            A single conversational canvas where people discover, compare, and manage
            insurance—from life and health to commercial lines—through AI chat and voice,
            with real-time intelligence woven into every decision.
          </p>
        </div>
      </Section>
    </main>
  )
}
