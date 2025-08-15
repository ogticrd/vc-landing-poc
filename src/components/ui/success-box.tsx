import { ShieldCheck } from 'lucide-react'

interface SuccessBoxProps {
  title: string
  body: string
}

export function SuccessBox({ title, body }: SuccessBoxProps) {
  return (
    <div className="rounded-2xl border border-green-300/60 bg-green-50 p-4 text-green-900">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-5 w-5" />
        <strong>{title}</strong>
      </div>
      <p className="mt-2 text-sm">{body}</p>
    </div>
  )
}