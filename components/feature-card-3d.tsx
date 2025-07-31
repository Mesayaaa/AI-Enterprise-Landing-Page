"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { type ReactNode, useRef } from "react"

interface FeatureCard3DProps {
  icon: ReactNode
  title: string
  description: string
  color: string
  index: number
}

export default function FeatureCard3D({ icon, title, description, color, index }: FeatureCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(20px)
    `
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(0deg) 
      rotateY(0deg) 
      translateZ(0px)
    `
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Card
        ref={cardRef}
        className="h-full bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease-out",
        }}
      >
        {/* Animated Background Gradient */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)`,
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        <CardContent className="p-8 relative z-10">
          {/* 3D Icon Container */}
          <motion.div
            className="mb-6 relative"
            whileHover={{
              rotateY: 180,
              scale: 1.1,
            }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              style={{
                background: `linear-gradient(135deg, ${color}, ${color}80)`,
                transform: "translateZ(20px)",
              }}
            >
              <div className="text-white transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
            </div>

            {/* Shadow */}
            <div
              className="absolute inset-0 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${color}, ${color}80)`,
                transform: "translateZ(-10px) translateY(10px)",
              }}
            />
          </motion.div>

          <motion.h3
            className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
            style={{ transform: "translateZ(10px)" }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-gray-600 dark:text-gray-400 leading-relaxed"
            style={{ transform: "translateZ(5px)" }}
          >
            {description}
          </motion.p>

          {/* Interactive Glow */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div
              className="absolute inset-0 rounded-xl blur-xl"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${color}40, transparent 70%)`,
              }}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
