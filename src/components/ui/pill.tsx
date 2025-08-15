import { ReactNode } from 'react'

interface PillProps {
  children: ReactNode
}

export function Pill({ children }: PillProps) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-zinc-700 dark:text-zinc-200 border-zinc-300/70 bg-white/60 backdrop-blur">
      {children}
    </span>
  )
}