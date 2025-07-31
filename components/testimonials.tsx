"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { useRef } from "react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechCorp Global",
      content:
        "The enterprise AI platform has transformed how we handle data analysis and decision-making. The security features give us complete confidence in deploying AI across our organization.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
      gradient: "from-blue-500 to-cyan-500",
      color: "#3b82f6",
    },
    {
      name: "Michael Rodriguez",
      role: "Director of Operations",
      company: "Global Financial Services",
      content:
        "Implementation was seamless, and the ROI was immediate. Our compliance team loves the automated reporting features, and the AI agents have reduced manual work by 60%.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
      gradient: "from-green-500 to-emerald-500",
      color: "#10b981",
    },
    {
      name: "Dr. Emily Watson",
      role: "Research Director",
      company: "Medical Research Institute",
      content:
        "The knowledge management system has revolutionized our research processes. The AI's ability to analyze complex medical data while maintaining HIPAA compliance is outstanding.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
      gradient: "from-purple-500 to-pink-500",
      color: "#8b5cf6",
    },
    {
      name: "James Thompson",
      role: "IT Director",
      company: "Government Agency",
      content:
        "Security and compliance were our top priorities. This platform exceeded our expectations with its government-grade security features and seamless integration capabilities.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
      gradient: "from-orange-500 to-red-500",
      color: "#f59e0b",
    },
    {
      name: "Lisa Park",
      role: "VP of Innovation",
      company: "Manufacturing Giant",
      content:
        "The custom AI agents have optimized our supply chain operations beyond what we thought possible. The platform's scalability handles our global operations effortlessly.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
      gradient: "from-teal-500 to-blue-500",
      color: "#14b8a6",
    },
    {
      name: "Robert Kim",
      role: "Chief Legal Officer",
      company: "International Law Firm",
      content:
        "Contract analysis that used to take days now takes hours. The AI's accuracy in legal document review has improved our efficiency while maintaining the highest quality standards.",
      rating: 5,
      avatar: "/placeholder-user.jpg",
      gradient: "from-indigo-500 to-purple-500",
      color: "#6366f1",
    },
  ]

  const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

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
        initial={{ opacity: 0, y: 50, rotateX: -20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
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
          {/* Dynamic Background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
          />

          {/* Floating Quote Icon */}
          <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <Quote className="w-16 h-16" style={{ color: testimonial.color }} />
          </div>

          <CardContent className="p-8 relative z-10">
            {/* Rating Stars */}
            <motion.div className="flex mb-6" style={{ transform: "translateZ(15px)" }}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                >
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                </motion.div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic relative"
              style={{ transform: "translateZ(10px)" }}
            >
              <span className="text-4xl text-gray-300 dark:text-gray-600 absolute -top-2 -left-2">"</span>
              {testimonial.content}
              <span className="text-4xl text-gray-300 dark:text-gray-600 absolute -bottom-4 -right-2">"</span>
            </motion.blockquote>

            {/* Author Info */}
            <motion.div className="flex items-center space-x-4" style={{ transform: "translateZ(20px)" }}>
              <div className="relative">
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${testimonial.gradient} blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300`}
                />
                <Avatar className="h-14 w-14 border-2 border-white dark:border-gray-700 relative z-10">
                  <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback
                    className="text-white font-bold text-lg"
                    style={{ background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}cc)` }}
                  >
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {testimonial.name}
                </div>
                <div className="text-sm font-medium" style={{ color: testimonial.color }}>
                  {testimonial.role}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</div>
              </div>
            </motion.div>

            {/* Interactive Glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div
                className="absolute inset-0 rounded-xl blur-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${testimonial.color}20, transparent 70%)`,
                }}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <section
      id="testimonials"
      className="py-32 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950 dark:via-blue-950 dark:to-purple-950 relative overflow-hidden"
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-32 w-72 h-72 bg-green-500/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-40 right-32 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-sm font-semibold mb-6 shadow-lg"
          >
            💬 Customer Stories
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 dark:from-white dark:via-green-100 dark:to-white bg-clip-text text-transparent">
              Trusted by Industry
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            See how organizations worldwide are transforming their operations, improving efficiency, and driving
            innovation with our enterprise AI platform.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Join 500+ Leading Organizations
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: "4.9/5", label: "Customer Rating", color: "#10b981" },
              { metric: "99.9%", label: "Customer Satisfaction", color: "#3b82f6" },
              { metric: "60%", label: "Average Efficiency Gain", color: "#8b5cf6" },
              { metric: "24/7", label: "Enterprise Support", color: "#f59e0b" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  rotateX: 5,
                }}
                className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 group cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: stat.color }}
                >
                  {stat.metric}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${stat.color}, transparent 70%)`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
