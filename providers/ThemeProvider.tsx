'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type DayPhase = 'dawn' | 'day' | 'dusk' | 'night'

interface ThemeContextValue {
  phase: DayPhase
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

function getPhaseFromDate(date: Date): DayPhase {
  const hours = date.getHours()

  if (hours >= 5 && hours < 8) return 'dawn'
  if (hours >= 8 && hours < 17) return 'day'
  if (hours >= 17 && hours < 20) return 'dusk'
  return 'night'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<DayPhase>(() => getPhaseFromDate(new Date()))

  useEffect(() => {
    const update = () => {
      setPhase(getPhaseFromDate(new Date()))
    }

    update()

    const intervalId = window.setInterval(update, 5 * 60 * 1000) // every 5 minutes

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return

    const root = document.documentElement
    root.dataset.theme = phase
  }, [phase])

  const value = useMemo<ThemeContextValue>(() => ({ phase }), [phase])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useDayNightCycle() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useDayNightCycle must be used within a ThemeProvider')
  }
  return ctx
}
