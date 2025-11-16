'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn('relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28', className)}
    >
      {children}
    </motion.section>
  )
}

export default Section
