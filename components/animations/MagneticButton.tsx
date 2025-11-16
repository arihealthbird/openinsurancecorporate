'use client'

import { motion, useMotionValue, useSpring, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode, MouseEvent } from 'react'

import { cn } from '@/lib/utils'

interface MagneticButtonProps extends HTMLMotionProps<'button'> {
  children: ReactNode
}

/**
 * A subtle magnetic button that gently follows the pointer,
 * giving CTAs a tactile, handcrafted feel.
 */
export function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 260, damping: 20 })
  const springY = useSpring(y, { stiffness: 260, damping: 20 })

  function handleMouseMove(event: MouseEvent<HTMLButtonElement>) {
    const { currentTarget, clientX, clientY } = event
    const rect = currentTarget.getBoundingClientRect()

    const relativeX = clientX - (rect.left + rect.width / 2)
    const relativeY = clientY - (rect.top + rect.height / 2)

    x.set(relativeX * 0.25)
    y.set(relativeY * 0.25)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group relative overflow-hidden rounded-full border px-8 py-2 text-[0.7rem] uppercase tracking-[0.32em] transition',
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default MagneticButton
