'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

import { MagneticButton } from '@/components/animations/MagneticButton'
import { cn } from '@/lib/utils'
import { getHeroVideoSrc } from '@/lib/getHeroVideoSrc'

type HeroPhase = 'early-morning' | 'morning' | 'afternoon' | 'dusk' | 'early-night' | 'midnight'

const HERO_PHASES: { id: HeroPhase; label: string; hour: number }[] = [
  { id: 'early-morning', label: 'Early', hour: 7 },
  { id: 'morning', label: 'Morning', hour: 10 },
  { id: 'afternoon', label: 'Afternoon', hour: 14 },
  { id: 'dusk', label: 'Dusk', hour: 17 },
  { id: 'early-night', label: 'Evening', hour: 20 },
  { id: 'midnight', label: 'Midnight', hour: 23 },
]

function getPhaseFromDate(date: Date): HeroPhase {
  const hour = date.getHours()

  if (hour >= 6 && hour < 9) return 'early-morning'
  if (hour >= 9 && hour < 12) return 'morning'
  if (hour >= 12 && hour < 16) return 'afternoon'
  if (hour >= 16 && hour < 18) return 'dusk'
  if (hour >= 18 && hour < 22) return 'early-night'
  return 'midnight'
}

function getVideoSrcForPhase(phase: HeroPhase): string {
  const config = HERO_PHASES.find((p) => p.id === phase)
  if (!config) return getHeroVideoSrc()

  const synthetic = new Date()
  synthetic.setHours(config.hour, 0, 0, 0)
  return getHeroVideoSrc(synthetic)
}

function formatLocalTime(date: Date): string {
  return date
    .toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
    })
    .toLowerCase()
}

export function Hero() {
  const [phase, setPhase] = useState<HeroPhase>(() => getPhaseFromDate(new Date()))
  const [clock, setClock] = useState<Date>(() => new Date())

  useEffect(() => {
    const id = window.setInterval(() => {
      setClock(new Date())
    }, 60_000)

    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    const nextPhase = getPhaseFromDate(clock)

    setPhase((current) => {
      if (current === nextPhase) return current
      setPrevVideoSrc(getVideoSrcForPhase(current))
      return nextPhase
    })
  }, [clock])

  const [prevVideoSrc, setPrevVideoSrc] = useState<string | null>(null)
  const videoSrc = useMemo(() => getVideoSrcForPhase(phase), [phase])

  const timeLabel = useMemo(() => formatLocalTime(clock), [clock])

  const currentPhaseIndex = HERO_PHASES.findIndex((p) => p.id === phase)
  const currentPhase = currentPhaseIndex >= 0 ? HERO_PHASES[currentPhaseIndex] : HERO_PHASES[0]

  const transitionToPhase = (nextPhase: HeroPhase) => {
    setPhase((current) => {
      if (current === nextPhase) return current
      setPrevVideoSrc(getVideoSrcForPhase(current))
      return nextPhase
    })
  }

  const stepPhase = (delta: number) => {
    const count = HERO_PHASES.length
    const nextIndex = ((currentPhaseIndex + delta) % count + count) % count
    transitionToPhase(HERO_PHASES[nextIndex].id)
  }

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center text-[var(--page-text)] md:min-h-screen">
      {/* Hero card with single directional shadow from top-right to bottom-left */}
      <div className="relative z-10 mx-4 w-full max-w-7xl overflow-hidden rounded-3xl shadow-[-26px_30px_80px_rgba(0,0,0,0.7)] md:mx-10">
        {/* Background video cross-fade */}
        <div className="pointer-events-none absolute inset-0">
          {prevVideoSrc && (
            <motion.video
              key={prevVideoSrc}
              className="absolute inset-0 h-full w-full object-cover object-center"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
              onAnimationComplete={() => setPrevVideoSrc(null)}
            >
              <source src={prevVideoSrc} type="video/mp4" />
            </motion.video>
          )}

          <motion.video
            key={videoSrc}
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            initial={{ opacity: prevVideoSrc ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prevVideoSrc ? 1.6 : 0, ease: 'easeInOut' }}
          >
            <source src={videoSrc} type="video/mp4" />
          </motion.video>
        </div>

        {/* Foreground content */}
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center md:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
            className="mb-6 max-w-3xl font-sentient text-4xl leading-tight text-[color:#fdf9f3] drop-shadow-[0_10px_22px_rgba(0,0,0,0.55)] md:text-6xl lg:text-7xl"
          >
            The new standard in insurance infrastructure.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="mb-10 max-w-2xl text-sm leading-relaxed text-[color:rgba(250,250,250,0.9)] drop-shadow-md md:text-base"
          >
            Meet the platform and operating system that powers modern insurancefrom discovery
            and distribution to servicing and operationsin one continuous canvas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/platform" className="inline-flex">
              <MagneticButton
                className="border-transparent bg-white/90 text-[color:#1a1520] shadow-lg shadow-black/25 hover:bg-white"
              >
                <span className="relative z-10">Get started</span>
              </MagneticButton>
            </Link>

            <Link href="/research" className="inline-flex">
              <MagneticButton className="border-white/60 bg-white/10 text-[color:rgba(250,250,250,0.9)] backdrop-blur-md hover:bg-white/20">
                Research
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Sundial control, half-hidden under the hero card */}
      <div className="pointer-events-auto -mt-16 flex justify-center relative z-0">
        {/* Glass sundial disc, half-hidden behind the hero card */}
        <div className="relative h-32 w-32 rounded-full bg-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-lg">
          {/* Time + dots inside the visible semicircle */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-3">
            <span className="mb-2 font-sentient text-[1.3rem] tracking-tight text-[color:rgba(120,110,100,0.95)]">
              {timeLabel}
            </span>
            <div className="flex items-center gap-[4px]">
              {HERO_PHASES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => transitionToPhase(p.id)}
                  className={cn(
                    'h-[0.38rem] w-[0.38rem] rounded-full transition-colors',
                    p.id === phase
                      ? 'bg-[rgba(120,110,100,0.9)]'
                      : 'bg-[rgba(120,110,100,0.55)] hover:bg-[rgba(120,110,100,0.8)]',
                  )}
                  aria-label={p.label}
                />
              ))}
            </div>
          </div>

          {/* Arrow controls: slightly darker glass buttons, with larger arrow glyphs for clarity */}
          <button
            type="button"
            onClick={() => stepPhase(-1)}
            className="absolute -left-3 top-[62%] flex h-[1.6rem] w-[1.6rem] -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(32,30,28,0.3)] text-[0.95rem] text-[color:#fdf9f3] shadow-[0_5px_16px_rgba(0,0,0,0.45)] backdrop-blur-xl hover:bg-[rgba(32,30,28,0.44)]"
            aria-label="Previous hero time"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => stepPhase(1)}
            className="absolute -right-3 top-[62%] flex h-[1.6rem] w-[1.6rem] -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(32,30,28,0.3)] text-[0.95rem] text-[color:#fdf9f3] shadow-[0_5px_16px_rgba(0,0,0,0.45)] backdrop-blur-xl hover:bg-[rgba(32,30,28,0.44)]"
            aria-label="Next hero time"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
