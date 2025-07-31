"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FrostedGlassIcon from "@/components/frosted-glass-icon"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  accentColor: string
}

export default function FeatureCard({ icon, title, description, accentColor }: FeatureCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <Card className="h-full bg-background/60 backdrop-blur-sm border transition-all duration-300 hover:shadow-lg dark:bg-background/80 hover:border-primary/20">
        <CardHeader className="pb-2">
          <FrostedGlassIcon icon={icon} color={accentColor} className="mb-4" />
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}
