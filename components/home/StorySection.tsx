'use client'

import { motion } from 'framer-motion'

import { Section } from '@/components/Section'

export function StorySection() {
  return (
    <Section id="what-is-open-insurance">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
      >
        <div className="space-y-4">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-brand-primary/80">
            What is Open Insurance?
          </p>
          <h2 className="font-sentient text-2xl md:text-3xl">
            One canvas for every insurance moment.
          </h2>
          <p className="text-sm leading-relaxed text-brand-accent/95 md:text-base">
            Open Insurance is a shopping and management platform where people can move from
            curiosity to coverage without feeling the seams. They talk to an AI guide—in
            text or voice—and the right mix of products emerges from across carriers,
            lines, and channels.
          </p>
        </div>

        <div className="space-y-4 text-sm text-brand-accent/90">
          <p>
            Instead of juggling portals, spreadsheets, and PDFs, every policy lives in a
            single, living record. Renewals, endorsements, claims, billing—each becomes a
            stroke on the same canvas, visible to those who need it, when they need it.
          </p>
          <p>
            Underneath, the system is deeply structured and compliant. On the surface, it
            feels calm, conversational, and human.
          </p>
        </div>
      </motion.div>
    </Section>
  )
}

export default StorySection
