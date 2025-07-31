"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type ReactNode, useRef } from "react"

interface UseCaseCard3DProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  color: string
  gradient: string
  index: number
}

export default function UseCaseCard3D({
  icon,
  title,
  description,
  features,
  color,
  gradient,
  index,
}: UseCaseCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 15
    const rotateY = (centerX - x) / 15

    cardRef.current.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      translateZ(30px)
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
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group"
    >
      <Card
        ref={cardRef}
        className="h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
        }}
      >
        {/* Dynamic Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Animated Mesh Background */}
        <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(${color}40 1px, transparent 1px),
                linear-gradient(90deg, ${color}40 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
              animation: "mesh-move 10s linear infinite",
            }}
          />
        </div>

        {/* Floating Light Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full opacity-0 group-hover:opacity-40"
              style={{
                background: `radial-gradient(circle, ${color}, transparent)`,
                left: `${25 + i * 20}%`,
                top: `${20 + (i % 2) * 40}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <CardContent className="p-8 relative z-10">
          {/* 3D Icon with Depth */}
          <motion.div
            className="mb-8 relative"
            whileHover={{
              rotateY: 360,
              scale: 1.2,
            }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                transform: "translateZ(30px)",
                boxShadow: `0 20px 40px ${color}40`,
              }}
            >
              <div className="text-white transform group-hover:scale-110 transition-transform duration-300">{icon}</div>
            </div>

            {/* Multiple Shadow Layers */}
            <div
              className="absolute inset-0 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                transform: "translateZ(-20px) translateY(15px) scale(0.9)",
              }}
            />
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
              style={{
                background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                transform: "translateZ(-40px) translateY(25px) scale(0.8)",
              }}
            />
          </motion.div>

          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500"
            style={{ transform: "translateZ(20px)" }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-lg"
            style={{ transform: "translateZ(15px)" }}
          >
            {description}
          </motion.p>

          <motion.div className="flex flex-wrap gap-3" style={{ transform: "translateZ(10px)" }}>
            {features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + featureIndex * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
              >
                <Badge
                  variant="secondary"
                  className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 transition-all duration-300 px-4 py-2 text-sm font-medium shadow-lg border border-gray-200/50 dark:border-gray-600/50"
                  style={{
                    boxShadow: `0 4px 12px ${color}20`,
                  }}
                >
                  {feature}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Glow Effect */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div
              className="absolute inset-0 rounded-xl blur-2xl"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${color}30, transparent 70%)`,
              }}
            />
          </div>
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes mesh-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
      `}</style>
    </motion.div>
  )
}
