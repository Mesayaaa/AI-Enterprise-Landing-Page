"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FrostedGlassIconProps {
  icon: ReactNode
  color?: string
  className?: string
}

export default function FrostedGlassIcon({
  icon,
  color = "rgba(59, 130, 246, 0.2)",
  className = "",
}: FrostedGlassIconProps) {
  return (
    <motion.div
      className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-lg ${className}`}
      style={{
        background: `linear-gradient(135deg, ${color}, rgba(255, 255, 255, 0.1))`,
      }}
      whileHover={{
        scale: 1.05,
        rotate: 5,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
      <div className="relative z-10 text-primary dark:text-white">{icon}</div>
    </motion.div>
  )
}
