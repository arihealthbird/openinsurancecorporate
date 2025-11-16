'use client'

import { motion } from 'framer-motion'

import { Section } from '@/components/Section'

const AUDIENCES = [
  {
    label: 'Carriers',
    body: 'Design new products, distribution, and servicing flows on one OS—without ripping out your core systems.',
  },
  {
    label: 'FMOs & agencies',
    body: 'Give every agent a single workspace for quoting, binding, servicing, and staying in sync with your operations.',
  },
  {
    label: 'Embedded & partners',
    body: 'Plug insurance into your existing experiences with an OS that already understands flows, roles, and compliance.',
  },
  {
    label: 'Enterprises beyond insurance',
    body: 'Use the same operating system patterns—workflow, CRM, communication—for adjacent businesses that need similar rigor.',
  },
]

export function AudienceSection() {
  return (
    <Section id="who-its-for">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-6"
      >
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-brand-primary/80">
          Who it&apos;s for
        </p>
        <h2 className="font-sentient text-2xl md:text-3xl">
          Built for the whole insurance landscape.
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {AUDIENCES.map((item) => (
            <div
              key={item.label}
              className="glass-surface rounded-3xl p-6 text-sm shadow-md"
            >
              <p className="mb-2 text-[0.65rem] uppercase tracking-[0.28em] text-brand-primary/85">
                {item.label}
              </p>
              <p className="text-brand-accent/95">{item.body}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}

export default AudienceSection
