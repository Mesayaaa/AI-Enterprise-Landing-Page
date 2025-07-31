"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, animate } from "framer-motion"
import { useTheme } from "next-themes"

export default function FramerSpotlight() {
  const [isMounted, setIsMounted] = useState(false)
  const [isMouseInHero, setIsMouseInHero] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement | null>(null)
  const defaultPositionRef = useRef({ x: 0, y: 0 })
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Motion values for the spotlight position with spring physics
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Add spring physics for smoother movement
  const springX = useSpring(mouseX, { damping: 20, stiffness: 300 })
  const springY = useSpring(mouseY, { damping: 20, stiffness: 300 })

  // Define multiple spotlight colors
  const spotlightColors = [
    { color: "rgba(36, 101, 237, 0.2)", darkColor: "rgba(36, 101, 237, 0.25)" }, // Blue (primary)
    { color: "rgba(236, 72, 153, 0.15)", darkColor: "rgba(236, 72, 153, 0.2)" }, // Pink
    { color: "rgba(16, 185, 129, 0.15)", darkColor: "rgba(16, 185, 129, 0.2)" }, // Green
  ]

  // Update default position without causing re-renders
  const updateDefaultPosition = () => {
    if (heroRef.current) {
      const heroRect = heroRef.current.getBoundingClientRect()
      const centerX = heroRect.left + heroRect.width / 2
      const centerY = heroRect.top + heroRect.height / 3

      defaultPositionRef.current = { x: centerX, y: centerY }

      // Set initial position
      mouseX.set(centerX)
      mouseY.set(centerY)
    }
  }

  // Handle mouse enter/leave for hero section
  const handleMouseEnter = () => {
    setIsMouseInHero(true)
  }

  const handleMouseLeave = () => {
    setIsMouseInHero(false)

    // Animate back to default position
    animate(mouseX, defaultPositionRef.current.x, {
      duration: 1.2,
      ease: "easeInOut",
    })

    animate(mouseY, defaultPositionRef.current.y, {
      duration: 1.2,
      ease: "easeInOut",
    })
  }

  // Handle mouse movement only when inside hero
  const handleMouseMove = (e: MouseEvent) => {
    if (isMouseInHero) {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
  }

  // Setup effect - runs once on mount and cleans up on unmount
  useEffect(() => {
    setIsMounted(true)

    // Find the hero section element
    heroRef.current = document.getElementById("hero")

    // Initial setup
    updateDefaultPosition()

    // Event listeners
    window.addEventListener("resize", updateDefaultPosition)
    window.addEventListener("mousemove", handleMouseMove)

    if (heroRef.current) {
      heroRef.current.addEventListener("mouseenter", handleMouseEnter)
      heroRef.current.addEventListener("mouseleave", handleMouseLeave)
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateDefaultPosition)
      window.removeEventListener("mousemove", handleMouseMove)

      if (heroRef.current) {
        heroRef.current.removeEventListener("mouseenter", handleMouseEnter)
        heroRef.current.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [isMouseInHero]) // Only depend on isMouseInHero

  if (!isMounted) {
    return null
  }

  return (
    <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden">
      {/* Primary spotlight that follows mouse/animation */}
      <motion.div
        className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500/20 to-primary/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  )
}
