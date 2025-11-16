'use client'

import { motion } from 'framer-motion'

import { Section } from '@/components/Section'

const FEATURES = [
  'Website and experience builder',
  'App store for industry-grade tools',
  'ERP and CRM for policy and customer operations',
  'Leads, routing, and distribution orchestration',
  'Claims inbox and service ticketing',
  'Email builders and communication flows',
]

export function OpenOSPreviewSection() {
  return (
    <Section id="open-os-preview">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="space-y-6"
      >
        <p className="text-[0.7rem] uppercase tracking-[0.3em] text-brand-primary/80">
          Open OS
        </p>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <h2 className="font-sentient text-2xl md:text-3xl">
              The web-based operating system for carriers, FMOs, agents, and beyond.
            </h2>
            <p className="text-sm leading-relaxed text-brand-accent/95 md:text-base">
              Open OS turns the idea of "back office" into a single, composable workspace.
              Instead of a stack of point solutions, every workflow becomes a window on one
              operating system—permissions, data, and AI woven through the entire fabric.
            </p>
          </div>

          <div className="glass-surface rounded-3xl p-6 text-sm shadow-md">
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.25em] text-brand-primary/80">
              Inside Open OS
            </p>
            <ul className="space-y-2 text-brand-accent/95">
              {FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-6 rounded-full bg-brand-primary/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

export default OpenOSPreviewSection
