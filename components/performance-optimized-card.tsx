"use client"

import type React from "react"
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { type ReactNode, useRef, useCallback, useState } from "react"

interface PerformanceCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
  index: number
  className?: string
}

export default function PerformanceOptimizedCard({
  icon,
  title,
  description,
  color,
  index,
  className = "",
}: PerformanceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Use motion values for better performance
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15])
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15])

  // Use springs for smooth animations
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)
  const scale = useSpring(1, springConfig)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      mouseX.set(e.clientX - centerX)
      mouseY.set(e.clientY - centerY)
    },
    [mouseX, mouseY],
  )

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
    scale.set(1.02)
  }, [scale])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
    scale.set(1)
  }, [mouseX, mouseY, scale])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group ${className}`}
    >
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <Card className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden">
          {/* Optimized background gradient */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${color}15, transparent 70%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />

          {/* Optimized floating particles */}
          {isHovered && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    backgroundColor: color,
                    left: `${30 + i * 20}%`,
                    top: `${40 + (i % 2) * 20}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0, 0.6, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </div>
          )}

          <CardContent className="p-8 relative z-10">
            {/* 3D Icon with optimized animation */}
            <motion.div
              className="mb-6 relative"
              style={{
                transformStyle: "preserve-3d",
              }}
              animate={isHovered ? { rotateY: 180 } : { rotateY: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-shadow duration-300"
                style={{
                  background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                  transform: "translateZ(20px)",
                  boxShadow: isHovered ? `0 20px 40px ${color}40` : `0 10px 20px ${color}20`,
                }}
              >
                <motion.div
                  className="text-white"
                  animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {icon}
                </motion.div>
              </div>

              {/* Optimized shadow */}
              <div
                className="absolute inset-0 rounded-2xl blur-md transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${color}, ${color}80)`,
                  transform: "translateZ(-10px) translateY(10px)",
                  opacity: isHovered ? 0.5 : 0.3,
                }}
              />
            </motion.div>

            <motion.h3
              className="text-xl font-semibold mb-4 text-gray-900 dark:text-white transition-all duration-300"
              style={{
                transform: "translateZ(10px)",
                background: isHovered ? `linear-gradient(135deg, ${color}, ${color}cc)` : "transparent",
                WebkitBackgroundClip: isHovered ? "text" : "initial",
                WebkitTextFillColor: isHovered ? "transparent" : "inherit",
              }}
            >
              {title}
            </motion.h3>

            <motion.p
              className="text-gray-600 dark:text-gray-400 leading-relaxed"
              style={{ transform: "translateZ(5px)" }}
            >
              {description}
            </motion.p>

            {/* Optimized glow effect */}
            {isHovered && (
              <div
                className="absolute inset-0 rounded-xl blur-xl pointer-events-none transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${color}30, transparent 70%)`,
                }}
              />
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
