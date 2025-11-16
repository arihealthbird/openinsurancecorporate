'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { Section } from '@/components/Section'

export function CTASection() {
  return (
    <Section id="cta" className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="glass-surface rounded-3xl px-8 py-10 text-[var(--page-text)] shadow-md md:px-10 md:py-12"
      >
        <p className="mb-3 text-[0.7rem] uppercase tracking-[0.3em] text-brand-primary/80">
          Next
        </p>
        <h2 className="mb-4 font-sentient text-2xl md:text-3xl">
          Bring your part of the insurance story onto the canvas.
        </h2>
        <p className="mb-8 max-w-2xl text-sm text-brand-primary/90 md:text-base">
          Whether you are a carrier, FMO, agency, or a business adjacent to insurance,
          Open Insurance and Open OS give you one place to experiment, operate, and grow—
          without multiplying systems.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/platform"
            className="rounded-full border border-brand-primary bg-brand-primary/10 px-8 py-2 text-[0.7rem] uppercase tracking-[0.32em] text-brand-primary shadow-sm transition hover:bg-brand-primary/20"
          >
            Explore the platform
          </Link>
          <Link
            href="/research"
            className="rounded-full border border-brand-logo/40 px-8 py-2 text-[0.7rem] uppercase tracking-[0.32em] text-brand-logo/90 transition hover:border-brand-logo hover:text-brand-logo"
          >
            Read our research
          </Link>
        </div>
      </motion.div>
    </Section>
  )
}

export default CTASection
