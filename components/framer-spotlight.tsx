"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function FramerSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main spotlight following mouse */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 dark:opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 70%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-32 h-32 rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{
          x: [100, 200, 150, 100],
          y: [200, 100, 300, 200],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute w-24 h-24 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)",
          filter: "blur(15px)",
        }}
        animate={{
          x: [300, 100, 400, 300],
          y: [100, 400, 200, 100],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </div>
  )
}
