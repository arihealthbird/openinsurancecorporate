'use client'

import Image, { type ImageProps } from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import { cn } from '@/lib/utils'

interface ParallaxImageProps extends Omit<ImageProps, 'fill'> {
  className?: string
  intensity?: number
}

/**
 * A simple parallax image that moves gently as the page scrolls,
 * evoking depth without feeling gimmicky.
 */
export function ParallaxImage({
  className,
  intensity = 24,
  alt,
  ...imageProps
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity])

  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden rounded-3xl border border-brand-primary/15 bg-surface-light/60 dark:bg-black/40',
        className,
      )}
    >
      <motion.div style={{ y }} className="relative h-full w-full">
        <Image
          alt={alt}
          fill
          className="pointer-events-none select-none object-cover object-center"
          {...imageProps}
        />
      </motion.div>
    </div>
  )
}

export default ParallaxImage
