'use client'

import { motion } from 'framer-motion'

import { Section } from '@/components/Section'

export function DisruptionSection() {
  return (
    <Section id="why-open-insurance">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-6"
      >
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-brand-primary/80">
          Why now?
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-sentient text-2xl md:text-3xl">
              Insurance is fragmented. Lives are not.
            </h2>
            <p className="text-sm leading-relaxed text-brand-accent/95 md:text-base">
              Today, buying or managing coverage means moving through disconnected portals,
              phone calls, and back-office systems. Every carrier, every product, every
              channel adds another interface—another login, another learning curve.
            </p>
          </div>

          <div className="space-y-3 text-sm text-brand-accent/90">
            <p>
              Open Insurance collapses those fragments into one continuous experience.
              Instead of stitching systems together at the edge, we treat the entire
              insurance journey as a single, evolving story—and architect the platform and
              Open OS around that idea.
            </p>
            <p>
              The result: less operational drag, more clarity for customers, and a surface
              where new products and business models can appear without re-architecting the
              whole stack.
            </p>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default DisruptionSection
