"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Zap, Shield, Users } from "lucide-react"
import { useRef, Suspense, useState, useEffect, useCallback } from "react"
import AIDemoShowcase from "@/components/ai-demo-showcase"
import AnimatedBackground from "@/components/animated-background"
import { ErrorBoundary } from "@/components/error-boundary"
import ImagePreloader, { useImagePreloader } from "@/components/image-preloader"
import PerformanceMonitor from "@/components/performance-monitor"

// Critical images to preload
const CRITICAL_IMAGES = ["/placeholder.svg?height=400&width=400", "/placeholder.svg?height=200&width=200"]

function HeroContent() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  // Image preloading
  const { isComplete: imagesLoaded } = useImagePreloader(CRITICAL_IMAGES)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => {
      if (imagesLoaded) {
        setIsLoaded(true)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [imagesLoaded])

  const handleGetStarted = useCallback(() => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  const handleWatchDemo = useCallback(() => {
    console.log("Watch demo clicked")
  }, [])

  // Loading screen
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950 px-4">
        <div className="text-center max-w-md mx-auto">
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-blue-500/20 border-t-blue-500 rounded-full mx-auto mb-6 sm:mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.h2
            className="text-xl sm:text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Loading AI Experience
          </motion.h2>
          <div className="w-48 sm:w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">Preparing your AI experience...</p>
        </div>
      </div>
    )
  }

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950"
    >
      {/* Performance Monitor (only in development) */}
      <PerformanceMonitor showDebug={process.env.NODE_ENV === "development"} />

      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 w-full">
        <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center lg:text-left order-2 lg:order-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-blue-200 dark:border-blue-800 mb-6 sm:mb-8 shadow-lg"
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300">
                    Next-Generation AI Platform
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-8"
                >
                  <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent block">
                    Transform Your
                  </span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent block">
                    Enterprise
                  </span>
                  <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent block">
                    with AI
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  Deploy secure, scalable AI solutions with enterprise-grade security, custom agents, and complete
                  control over your data and processes.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      onClick={handleGetStarted}
                      size="lg"
                      className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                    >
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                      Get Started Free
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      onClick={handleWatchDemo}
                      variant="outline"
                      size="lg"
                      className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
                    >
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                      Watch Demo
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Content - AI Demo Showcase */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="relative order-1 lg:order-2"
              >
                <ErrorBoundary
                  fallback={
                    <div className="h-64 sm:h-96 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500 dark:text-gray-400">Demo unavailable</p>
                    </div>
                  }
                >
                  <Suspense
                    fallback={
                      <div className="h-64 sm:h-96 bg-gray-100 dark:bg-gray-800 rounded-lg animate-pulse flex items-center justify-center">
                        <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full" />
                      </div>
                    }
                  >
                    <AIDemoShowcase />
                  </Suspense>
                </ErrorBoundary>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20"
            >
              {[
                {
                  icon: Shield,
                  title: "Bank-Grade Security",
                  desc: "SOC 2 compliant with end-to-end encryption",
                  color: "#10b981",
                },
                {
                  icon: Users,
                  title: "Trusted by 500+",
                  desc: "Enterprise and government organizations",
                  color: "#3b82f6",
                },
                { icon: Zap, title: "99.9% Uptime", desc: "Enterprise SLA with 24/7 support", color: "#8b5cf6" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 px-2">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator - Positioned much lower */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
          onClick={() => {
            const element = document.querySelector("#features")
            if (element) {
              element.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-1 h-2 sm:h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Image Preloader */}
      <ImagePreloader images={CRITICAL_IMAGES} onProgress={setLoadingProgress} />
    </section>
  )
}

export default function HeroSection() {
  return (
    <ErrorBoundary>
      <HeroContent />
    </ErrorBoundary>
  )
}
