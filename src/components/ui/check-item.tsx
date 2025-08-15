import { CheckCircle2 } from 'lucide-react'
import { ReactNode } from 'react'

interface CheckItemProps {
  children: ReactNode
}

export function CheckItem({ children }: CheckItemProps) {
  return (
    <li className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" aria-hidden="true" />
      <span className="text-sm text-zinc-700 dark:text-zinc-200">{children}</span>
    </li>
  )
}