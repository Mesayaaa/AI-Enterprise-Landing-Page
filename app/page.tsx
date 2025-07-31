"use client"

import { Suspense, useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import UseCases from "@/components/use-cases"
import Testimonials from "@/components/testimonials"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import StructuredData from "@/components/structured-data"
import { ErrorBoundary } from "@/components/error-boundary"

// Enhanced loading component with better UX
function SectionLoader({ height = "h-96" }: { height?: string }) {
  return (
    <div className={`w-full ${height} flex items-center justify-center`}>
      <div className="text-center">
        <div className="relative mb-4">
          <div className="w-12 h-12 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          <div className="absolute inset-0 w-12 h-12 border-2 border-purple-500/20 border-b-purple-500 rounded-full animate-spin animate-reverse" />
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Loading content...</p>
      </div>
    </div>
  )
}

// Critical CSS for above-the-fold content
function CriticalStyles() {
  return (
    <style jsx global>{`
      /* Critical styles for hero section */
      .hero-gradient {
        background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 50%, #e0e7ff 100%);
      }
      
      .dark .hero-gradient {
        background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #312e81 100%);
      }
      
      /* Optimize font loading */
      @font-face {
        font-family: 'Inter';
        font-display: swap;
        src: local('Inter');
      }
      
      /* Reduce layout shift */
      .hero-container {
        min-height: 100vh;
        contain: layout style paint;
      }
      
      /* Optimize animations */
      .will-change-transform {
        will-change: transform;
      }
      
      .will-change-opacity {
        will-change: opacity;
      }
    `}</style>
  )
}

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Preload critical resources
    const preloadLink = document.createElement("link")
    preloadLink.rel = "preload"
    preloadLink.as = "script"
    preloadLink.href = "/api/health" // Preload API endpoint
    document.head.appendChild(preloadLink)

    // Performance monitoring
    if ("performance" in window) {
      window.addEventListener("load", () => {
        const loadTime = performance.now()
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`)
      })
    }

    return () => {
      document.head.removeChild(preloadLink)
    }
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Loading AI Platform...</p>
        </div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <CriticalStyles />
      <StructuredData />

      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ErrorBoundary fallback={<div className="h-16 bg-gray-100 dark:bg-gray-800" />}>
          <Navbar />
        </ErrorBoundary>

        <main>
          {/* Hero section - highest priority */}
          <ErrorBoundary>
            <HeroSection />
          </ErrorBoundary>

          {/* Other sections with progressive loading */}
          <ErrorBoundary fallback={<SectionLoader />}>
            <Suspense fallback={<SectionLoader />}>
              <FeaturesSection />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary fallback={<SectionLoader />}>
            <Suspense fallback={<SectionLoader />}>
              <UseCases />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary fallback={<SectionLoader />}>
            <Suspense fallback={<SectionLoader />}>
              <Testimonials />
            </Suspense>
          </ErrorBoundary>

          <ErrorBoundary fallback={<SectionLoader />}>
            <Suspense fallback={<SectionLoader />}>
              <ContactSection />
            </Suspense>
          </ErrorBoundary>
        </main>

        <ErrorBoundary fallback={<div className="h-32 bg-gray-100 dark:bg-gray-800" />}>
          <Footer />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  )
}
