"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

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
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-4">
            Customer Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Trusted by Industry
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            See how organizations worldwide are transforming their operations with our AI platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <CardContent className="p-8 relative">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-gray-300 dark:text-gray-600 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center space-x-4">
                    <div className={`relative p-0.5 rounded-full bg-gradient-to-r ${testimonial.gradient}`}>
                      <Avatar className="h-12 w-12 border-2 border-white dark:border-gray-800">
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback className="bg-gray-100 dark:bg-gray-700">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
