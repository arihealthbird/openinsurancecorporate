'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import { getHeroVideoSrc } from '@/lib/getHeroVideoSrc'

export function VideoFooter() {
  const videoSrc = getHeroVideoSrc()

  return (
    <footer className="mt-24 text-[var(--page-text)]">
      <div className="relative mx-0 flex w-full justify-center">
        <div className="relative w-full max-w-7xl overflow-hidden rounded-t-3xl shadow-[0_-30px_90px_rgba(0,0,0,0.28)]">
          {/* Background video */}
          <div className="pointer-events-none absolute inset-0">
            <video
              key={videoSrc}
              className="h-full w-full object-cover object-center"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[color:rgba(12,9,7,0.18)]" />
          </div>

          {/* Footer content */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 px-6 py-16 text-center text-[color:#fdf9f3] md:px-10 md:py-24"
          >
            <p className="mb-4 text-[0.65rem] uppercase tracking-[0.35em] text-[color:rgba(250,250,250,0.85)] drop-shadow-md md:text-[0.7rem]">
              Open Insurance
            </p>
            <p className="mx-auto mb-8 max-w-xl font-sentient text-xl leading-snug drop-shadow-[0_10px_22px_rgba(0,0,0,0.7)] md:text-2xl">
              Insurance as one continuous storyfrom first question to every renewal.
            </p>

            <div className="mx-auto mb-10 grid max-w-4xl gap-6 text-left text-[0.65rem] uppercase tracking-[0.26em] md:grid-cols-3">
              <div>
                <p className="mb-3 text-[0.6rem] text-[color:rgba(250,250,250,0.75)]">Platforms</p>
                <div className="space-y-2 text-[0.58rem] tracking-[0.22em] text-[color:rgba(250,250,250,0.88)]">
                  <Link href="/platform" className="block transition-colors hover:text-white">
                    Platform overview
                  </Link>
                  <Link
                    href="https://dev.openinsurance.ai"
                    className="block transition-colors hover:text-white"
                  >
                    Consumer app
                  </Link>
                  <Link href="/open-os" className="block transition-colors hover:text-white">
                    OpenOS
                  </Link>
                </div>
              </div>

              <div>
                <p className="mb-3 text-[0.6rem] text-[color:rgba(250,250,250,0.75)]">Company</p>
                <div className="space-y-2 text-[0.58rem] tracking-[0.22em] text-[color:rgba(250,250,250,0.88)]">
                  <Link href="/worldview" className="block transition-colors hover:text-white">
                    Philosophy
                  </Link>
                  <Link href="/research" className="block transition-colors hover:text-white">
                    Research
                  </Link>
                </div>
              </div>

              <div>
                <p className="mb-3 text-[0.6rem] text-[color:rgba(250,250,250,0.75)]">Connect</p>
                <div className="space-y-2 text-[0.58rem] tracking-[0.22em] text-[color:rgba(250,250,250,0.88)]">
                  <a
                    href="mailto:hello@openinsurance.ai"
                    className="block transition-colors hover:text-white"
                  >
                    Email
                  </a>
                  <a
                    href="https://x.com/openinsuranceai"
                    className="block transition-colors hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    X (Twitter)
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-6 flex justify-center">
              <span className="flex items-baseline text-3xl leading-none md:text-4xl">
                <span className="font-sentient font-semibold italic tracking-tight">open</span>
                <span className="ml-1 font-satoshi font-normal tracking-tight">insurance</span>
              </span>
            </div>

            <p className="mx-auto max-w-xl text-xs text-[color:rgba(250,250,250,0.82)] drop-shadow-md md:text-[0.7rem]">
              © {new Date().getFullYear()} Open Insurance. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default VideoFooter
