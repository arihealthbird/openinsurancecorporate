'use client'

import { cn } from '@/lib/utils'

interface BrushTransitionProps {
  position?: 'top' | 'bottom'
  variant?: 'page' | 'canvas'
  className?: string
}

/**
 * A painterly SVG divider that helps sections feel like a continuous canvas
 * rather than hard boxes. It fills with the current page or canvas background
 * (via CSS variable) so it blends between hero and content.
 */
export function BrushTransition({
  position = 'top',
  variant = 'page',
  className,
}: BrushTransitionProps) {
  const isTop = position === 'top'
  const fillClass =
    variant === 'canvas'
      ? 'fill-[color:var(--canvas-bg)]'
      : 'fill-[color:var(--page-bg)]'

  return (
    <div
      className={cn(
        'pointer-events-none relative -mx-6 h-16 overflow-hidden md:-mx-10',
        isTop ? '-mt-10' : '-mb-10',
        className,
      )}
    >
      <svg
        viewBox="0 0 800 160"
        preserveAspectRatio="none"
        className={cn('h-full w-full', fillClass, isTop && 'rotate-180')}
      >
        <path d="M0,40 C140,80 260,120 400,130 C540,140 660,120 800,80 L800,160 L0,160 Z" />
      </svg>
    </div>
  )
}

export default BrushTransition
