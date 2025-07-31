"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Zap, Globe } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactSection() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and SOC 2 compliance",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "24/7 enterprise support with dedicated CSM",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Implementation",
      description: "Get up and running in days, not months",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scale",
      description: "Deploy across multiple regions and teams",
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
            Get Started Today
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Ready to Transform
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Organization?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join hundreds of enterprises and government agencies already using our AI platform to drive innovation and
            efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Why Choose AI Enterprise?</h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 border-0 text-white">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">Enterprise Pricing</h4>
                <p className="text-blue-100 mb-4">Custom pricing based on your organization's needs and scale.</p>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li>• Unlimited users and AI conversations</li>
                  <li>• Custom integrations and APIs</li>
                  <li>• Dedicated infrastructure options</li>
                  <li>• Priority support and training</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
