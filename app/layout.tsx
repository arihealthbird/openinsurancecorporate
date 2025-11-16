import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { Navigation } from '@/components/Navigation'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { satoshi, sentient } from './fonts'

export const metadata: Metadata = {
  title: 'Open Insurance – Reimagining Insurance',
  description:
    'Open Insurance is the AI-native insurance platform and operating system for carriers, FMOs, agents, and enterprises.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sentient.variable} ${satoshi.variable} text-[var(--page-text)] antialiased`}
      >
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
