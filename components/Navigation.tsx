'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Philosophy', href: '/worldview' },
  { label: 'Research', href: '/research' },
]

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [platformsOpen, setPlatformsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!platformsOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPlatformsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [platformsOpen])

  const headerPadding = scrolled ? 'py-3' : 'py-5'
  const showFullNav = scrolled

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        'pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 transition-all duration-500 ease-out',
        headerPadding,
      )}
    >
      <div
        className={cn(
          'pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ease-out md:px-7',
          showFullNav && 'bg-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.4)] backdrop-blur-md',
        )}
      >
        {/* Logo / wordmark */}
        <Link
          href="/"
          className={cn('inline-flex items-center transition-colors text-[color:#1a1520]')}
        >
          <span className="flex items-baseline text-2xl leading-none md:text-3xl">
            <span className="font-sentient font-semibold italic tracking-tight">open</span>
            <span className="ml-1 font-satoshi font-normal tracking-tight">insurance</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className={cn(
            'hidden items-center gap-8 text-[0.7rem] md:flex transition-all duration-500 ease-out',
            showFullNav ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-1',
          )}
        >
          {/* Platforms dropdown */}
          <div className="relative">
            <button
              type="button"
              className={cn(
                'flex items-center gap-1 uppercase tracking-[0.26em] text-[color:rgba(0,0,0,0.65)] transition-colors hover:text-[color:rgba(0,0,0,0.9)]',
                isActivePath('/platform') || isActivePath('/open-os')
                  ? 'text-[color:rgba(0,0,0,0.9)]'
                  : null,
              )}
              aria-haspopup="menu"
              aria-expanded={platformsOpen}
              onClick={() => setPlatformsOpen((open) => !open)}
            >
              <span>Platforms</span>
              <span
                aria-hidden="true"
                className={cn(
                  'text-[0.6rem] transition-transform',
                  platformsOpen ? 'translate-y-[1px] rotate-180' : 'translate-y-[1px]',
                )}
              >
                ▾
              </span>
            </button>

            {platformsOpen && (
              <div
                role="menu"
                className="glass-surface absolute right-0 z-30 mt-3 w-64 rounded-2xl px-4 py-3 text-[0.7rem] shadow-xl"
              >
                <div className="flex flex-col gap-2">
                  <Link
                    href="/platform"
                    className={cn(
                      'flex items-start justify-between rounded-xl px-3 py-2 text-left uppercase tracking-[0.24em] text-[color:rgba(0,0,0,0.75)] transition-colors hover:bg-white/60 hover:text-[color:#1a1520]',
                      isActivePath('/platform') && 'bg-white/70 text-[color:#1a1520]',
                    )}
                    role="menuitem"
                    onClick={() => setPlatformsOpen(false)}
                  >
                    <span>Platform overview</span>
                  </Link>

                  <Link
                    href="https://dev.openinsurance.ai"
                    className="flex items-start justify-between rounded-xl px-3 py-2 text-left uppercase tracking-[0.24em] text-[color:rgba(0,0,0,0.75)] transition-colors hover:bg-white/60 hover:text-[color:#1a1520]"
                    role="menuitem"
                    onClick={() => setPlatformsOpen(false)}
                  >
                    <span>Consumer app</span>
                    <span className="text-[0.6rem]">↗</span>
                  </Link>

                  <Link
                    href="/open-os"
                    className={cn(
                      'flex items-start justify-between rounded-xl px-3 py-2 text-left uppercase tracking-[0.24em] text-[color:rgba(0,0,0,0.75)] transition-colors hover:bg-white/60 hover:text-[color:#1a1520]',
                      isActivePath('/open-os') && 'bg-white/70 text-[color:#1a1520]',
                    )}
                    role="menuitem"
                    onClick={() => setPlatformsOpen(false)}
                  >
                    <span>OpenOS</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'uppercase tracking-[0.26em] transition-colors',
                'text-[color:rgba(0,0,0,0.55)] hover:text-[color:rgba(0,0,0,0.9)]',
                isActivePath(item.href) && 'text-[color:rgba(0,0,0,0.9)]',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <Link
            href="https://dev.openinsurance.ai"
            className={cn(
              'rounded-full border border-white/25 bg-[rgba(34,32,30,0.96)] px-5 py-1.5 text-[0.65rem] uppercase tracking-[0.3em] text-[color:#fdf9f3] shadow-[0_12px_34px_rgba(0,0,0,0.36)] backdrop-blur-xl transition-colors hover:bg-[rgba(30,27,25,1)]',
            )}
          >
            Log In
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navigation
