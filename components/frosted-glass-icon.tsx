"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FrostedGlassIconProps {
  icon: React.ReactNode
  color: string
  className?: string
}

export default function FrostedGlassIcon({ icon, color, className }: FrostedGlassIconProps) {
  return (
    <motion.div
      className={cn(
        "relative h-16 w-16 rounded-2xl backdrop-blur-sm border border-white/20 dark:border-gray-700/50 flex items-center justify-center overflow-hidden",
        className,
      )}
      style={{
        background: `linear-gradient(135deg, ${color}20, ${color}10)`,
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      <div className="relative z-10 text-2xl">{icon}</div>
    </motion.div>
  )
}
