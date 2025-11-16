import BrushTransition from '@/components/BrushTransition'
import { Section } from '@/components/Section'

export default function ResearchPage() {
  return (
    <main className="min-h-screen text-[var(--page-text)]">
      <BrushTransition position="top" />
      <Section>
        <div className="space-y-4">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-brand-primary/80">
            Research
          </p>
          <h1 className="font-sentient text-3xl md:text-5xl">
            Reading the landscape of insurance, then reshaping it.
          </h1>
          <p className="max-w-2xl text-sm text-brand-accent/90 md:text-base">
            From product design and underwriting to distribution and operations, we study how
            the insurance ecosystem actually behaves—and use those insights to shape Open
            Insurance and Open OS. This is where those explorations live.
          </p>
        </div>
      </Section>
    </main>
  )
}
