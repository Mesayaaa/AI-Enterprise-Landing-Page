"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import PerformanceOptimizedCard from "@/components/performance-optimized-card"
import { FeatureIcons } from "@/components/feature-icons"

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <FeatureIcons.Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption, SOC 2 compliance, and advanced access controls with military-grade security protocols and zero-trust architecture.",
      color: "#10b981",
    },
    {
      icon: <FeatureIcons.Bot className="w-8 h-8" />,
      title: "Custom AI Agents",
      description:
        "Build specialized AI agents with custom training, behavior patterns, domain-specific knowledge, and advanced reasoning capabilities.",
      color: "#3b82f6",
    },
    {
      icon: <FeatureIcons.Database className="w-8 h-8" />,
      title: "Knowledge Management",
      description:
        "Centralized knowledge base with intelligent search, version control, real-time collaboration, and seamless cross-platform integration.",
      color: "#8b5cf6",
    },
    {
      icon: <FeatureIcons.Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description:
        "Advanced role-based access control, team workspaces, collaborative AI conversations, and real-time synchronization across your organization.",
      color: "#ec4899",
    },
    {
      icon: <FeatureIcons.Zap className="w-8 h-8" />,
      title: "High Performance",
      description:
        "Lightning-fast responses with 99.9% uptime SLA, global CDN distribution, edge computing, and optimized AI inference for maximum speed.",
      color: "#f59e0b",
    },
    {
      icon: <FeatureIcons.Settings className="w-8 h-8" />,
      title: "Easy Integration",
      description:
        "Comprehensive RESTful APIs, webhooks, pre-built connectors, SDKs, and enterprise-grade integration tools for seamless connectivity.",
      color: "#14b8a6",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 relative overflow-hidden"
    >
      {/* Optimized background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-6 py-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-6 shadow-lg"
          >
            ✨ Powerful Features
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
              Everything You Need
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              for Enterprise AI
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Deploy AI solutions at enterprise scale with complete confidence, security, and control. Our platform
            provides everything you need to transform your organization.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <PerformanceOptimizedCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              index={index}
            />
          ))}
        </div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Enterprise Clients", color: "#3b82f6" },
            { number: "99.9%", label: "Uptime SLA", color: "#10b981" },
            { number: "24/7", label: "Expert Support", color: "#8b5cf6" },
            { number: "SOC 2", label: "Compliance", color: "#f59e0b" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="text-center p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 group cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ color: stat.color }}
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.6 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>

              {/* Hover glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${stat.color}, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
