import type { ReactNode } from "react"

interface FrostedGlassIconProps {
  children: ReactNode
  className?: string
}

export default function FrostedGlassIcon({ children, className = "" }: FrostedGlassIconProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 dark:bg-gray-800/10 dark:border-gray-700/20 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
      <div className="relative z-10 p-4">{children}</div>
    </div>
  )
}
