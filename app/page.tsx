import Testimonials from "@/components/testimonials"
import UseCases from "@/components/use-cases"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeaturesSection from "@/components/features-section"
import StructuredData from "@/components/structured-data"
import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950">
        <Navbar />

        <main>
          <Suspense fallback={<div className="h-screen" />}>
            <HeroSection />
          </Suspense>

          <Suspense fallback={<div className="h-96" />}>
            <FeaturesSection />
          </Suspense>

          <Suspense fallback={<div className="h-96" />}>
            <UseCases />
          </Suspense>

          <Suspense fallback={<div className="h-96" />}>
            <Testimonials />
          </Suspense>

          <Suspense fallback={<div className="h-96" />}>
            <ContactSection />
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  )
}
