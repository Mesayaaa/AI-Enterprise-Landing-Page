"use client"

import { useEffect, useRef } from "react"

export default function CssGridBackground() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      grid.style.setProperty("--mouse-x", `${x}%`)
      grid.style.setProperty("--mouse-y", `${y}%`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={gridRef}
      className="absolute inset-0 opacity-30 dark:opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
          radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.15) 0%, transparent 50%)
        `,
        backgroundSize: "50px 50px, 50px 50px, 200px 200px",
        transition: "background-position 0.3s ease",
      }}
    />
  )
}
